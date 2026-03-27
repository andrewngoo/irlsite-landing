export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Pink Location Pin Heart */}
      <path d="M 50 125 C 50 125, 5 75, 5 40 C 5 15, 25 5, 50 25 C 75 5, 95 15, 95 40 C 95 75, 50 125, 50 125 Z" fill="#F2A7C0"/>
      {/* Inner White Cutout Heart (smaller dot equivalent, lowered) */}
      <path d="M 50 68 C 50 68, 34 56, 34 44 C 34 34, 43 32, 50 40 C 57 32, 66 34, 66 44 C 66 56, 50 68, 50 68 Z" fill="#FFFFFF"/>
    </svg>
  );
}
