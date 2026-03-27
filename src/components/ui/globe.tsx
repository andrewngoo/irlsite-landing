"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function Globe({ className, config, autoRotate = false }: { className?: string; config?: COBEOptions, autoRotate?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const r = useRef(0)
  const phi = useRef(4.2) // Start over North America
  const width = useRef(0)

  const updatePointerInteraction = (clientX: number | null) => {
    if (autoRotate) return; // Disable interaction if autoRotate is true
    pointerInteracting.current = clientX
    if (canvasRef.current) {
      canvasRef.current.style.cursor = clientX !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (autoRotate) return;
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.current = delta / 200
    }
  }

  useEffect(() => {
    let globe: any

    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    const defaultOptions: COBEOptions = {
      width: 800,
      height: 800,
      onRender: () => {},
      devicePixelRatio: 2,
      phi: 4.2,
      theta: -0.1, // Tilt to see more of northern cities
      dark: 1,
      diffuse: 0.8,
      mapSamples: 16000,
      mapBrightness: 4,
      baseColor: [0.15, 0.15, 0.15], 
      markerColor: [242 / 255, 167 / 255, 192 / 255], 
      glowColor: [0.3, 0.3, 0.3],
      markers: [],
    }

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        ...(config || defaultOptions),
        width: width.current * 2,
        height: width.current * 2,
        onRender: (state) => {
          if (autoRotate || pointerInteracting.current === null) {
            phi.current += 0.005
          }
          state.phi = phi.current + r.current
          state.width = width.current * 2
          state.height = width.current * 2
        },
      })

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
        }
      }, 50)
    }

    return () => {
      window.removeEventListener("resize", onResize)
      if (globe) globe.destroy()
    }
  }, [config, autoRotate])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          autoRotate ? "pointer-events-none" : ""
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX)
        }}
      />
    </div>
  )
}
