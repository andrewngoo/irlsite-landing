"use client";

import React, { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { cn } from "@/lib/utils";

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" 
        fill="url(#pinGrad)"
      />
      {/* Dark background heart cutout */}
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 15c0 0-5-3.5-5-6.5 0-1.38 1.12-2.5 2.5-2.5 1 0 1.8.6 2.5 1.4.7-.8 1.5-1.4 2.5-1.4 1.38 0 2.5 1.12 2.5 2.5 0 3-5 6.5-5 6.5z" 
        fill="#0E0E0E"
      />
      <defs>
        <linearGradient id="pinGrad" x1="0" y1="0" x2="24" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2A7C0" />
          <stop offset="1" stopColor="#CBA3D8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const CITIES = [
  { name: "San Francisco", lat: 37.7595, lng: -122.4367, size: 0.08 },
  { name: "New York", lat: 40.7128, lng: -74.006, size: 0.1 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, size: 0.08 },
  { name: "London", lat: 51.5074, lng: -0.1278, size: 0.08 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, size: 0.06 },
  { name: "Cape Town", lat: -33.9249, lng: 18.4241, size: 0.06 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, size: 0.06 },
  { name: "Paris", lat: 48.8566, lng: 2.3522, size: 0.06 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, size: 0.06 },
];

function generateRouteMarkers(start: [number, number], end: [number, number], segments = 45) {
  const route = [];
  const startLat = start[0], startLng = start[1];
  const endLat = end[0];
  let endLng = end[1];

  // Fix wraparound for Pacific flights (like SF to Tokyo)
  if (endLng - startLng > 180) endLng -= 360;
  else if (endLng - startLng < -180) endLng += 360;

  for (let i = 1; i < segments; i++) {
    const t = i / segments;
    const lat = startLat + (endLat - startLat) * t;
    let lng = startLng + (endLng - startLng) * t;
    
    // Normalize longitude back to -180..180 space
    if (lng > 180) lng -= 360;
    if (lng < -180) lng += 360;

    const altitudeScale = Math.sin(t * Math.PI) * 0.015; 
    route.push({ location: [lat, lng] as [number, number], size: 0.01 + altitudeScale });
  }
  return route;
}

const FLIGHT_PATHS = [
  generateRouteMarkers([37.7595, -122.4367], [35.6762, 139.6503]), // SF -> Tokyo
  generateRouteMarkers([40.7128, -74.006], [51.5074, -0.1278]), // NY -> London
];

const ALL_MARKERS = [
  ...CITIES.map(c => ({ location: [c.lat, c.lng] as [number, number], size: c.size })),
  ...FLIGHT_PATHS.flat()
];

function projectLatLngToScreen(lat: number, lng: number, phi: number, theta: number) {
  const latRad = lat * (Math.PI / 180);
  const lngRad = lng * (Math.PI / 180);
  
  // 1. Convert to Cobe's specific initial 3D coordinate system
  // Cobe bases its globe off a specific negated cosine projection (as extracted from WebGL source)
  const x0 = -Math.cos(latRad) * Math.cos(lngRad - Math.PI);
  const y0 = Math.sin(latRad);
  const z0 = Math.cos(latRad) * Math.sin(lngRad - Math.PI);
  
  // 2. Apply Cobe's exact Euler rotation matrix inverse 
  const d = Math.cos(phi), f = Math.sin(phi);
  const c = Math.cos(theta), e = Math.sin(theta);

  // Rotate around Y axis (phi)
  const x1 = d * x0 + f * z0;
  const y1 = y0;
  const z1 = -f * x0 + d * z0;
  
  // Rotate around X axis (theta)
  const x2 = x1;
  const y2 = c * y1 - e * z1;
  const z2 = e * y1 + c * z1;
  
  // 3. Transform canonical [-1, 1] device coordinates to CSS percentages.
  // WebGL Cobe Sphere Radius is strictly 40% of the canvas
  return { 
    x: 50 + x2 * 40,       
    y: 50 - y2 * 40,       // CSS Y inverted
    visible: z2 > 0.05     // Hide cleanly right behind the exact visual horizon
  };
}

export function UpdatedGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const phi = useRef(4.7); // Start showing North America
  const theta = 0.1; // Slight downward tilt
  const width = useRef(0);

  useEffect(() => {
    let globe: any;

    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        width: width.current * 2,
        height: width.current * 2,
        onRender: (state) => {
          phi.current += 0.003; 
          state.phi = phi.current;
          state.width = width.current * 2;
          state.height = width.current * 2;
          
          CITIES.forEach((city, i) => {
            const el = labelsRef.current[i];
            if (el) {
              const { x, y, visible } = projectLatLngToScreen(city.lat, city.lng, state.phi, theta);
              if (visible) {
                el.style.left = `${x}%`;
                el.style.top = `${y}%`;
                el.style.opacity = "1";
              } else {
                el.style.opacity = "0";
              }
            }
          });
        },
        devicePixelRatio: 2,
        phi: 4.7,
        theta: theta,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 25000,
        mapBrightness: 4.5,
        baseColor: [0.1, 0.1, 0.1], 
        markerColor: [242 / 255, 167 / 255, 192 / 255], 
        glowColor: [203 / 255, 163 / 255, 216 / 255], 
        markers: ALL_MARKERS,
      });

      setTimeout(() => {
        if (canvasRef.current) canvasRef.current.style.opacity = "1";
      }, 50);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <div className={cn("relative mx-auto aspect-[1/1] w-full", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-1000 [contain:layout_paint_size]"
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      />
      {/* True anchored Custom Pin & Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {CITIES.map((city, i) => (
          <div
            key={city.name}
            ref={(el) => { labelsRef.current[i] = el; }}
            className="absolute transition-opacity duration-300"
            style={{ opacity: 0, left: 0, top: 0 }}
          >
            {/* 
              The container is centered horizontally, but translates UP vertically 
              so the bottom tip of the pin perfectly touches the precise 0,0 lat/lng anchor!
            */}
            <div className="relative -translate-x-1/2 -translate-y-[90%] flex flex-col items-center">
              {/* Premium Slim SVGs overlaying the native glow dots */}
              <MapPinIcon className="w-5 h-7 drop-shadow-[0_0_8px_rgba(242,167,192,0.6)]" />
              
              {/* City Label precisely anchored below without affecting flex width */}
              <div className="absolute top-[100%] mt-1 flex justify-center w-max hidden md:flex">
                <span className="text-[10px] font-medium text-white/90 tracking-widest uppercase bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(242,167,192,0.1)]">
                  {city.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
