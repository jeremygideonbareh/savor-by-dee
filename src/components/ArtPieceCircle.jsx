export default function ArtPieceCircle() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#F0EDE6] rounded-sm">
      <svg viewBox="0 0 400 400" className="w-3/4 h-3/4">
        <circle cx="200" cy="200" r="160" fill="none" stroke="#B86C4A" strokeWidth="1.5" opacity={0.2} />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#B86C4A" strokeWidth="1" opacity={0.3} />
        <circle cx="200" cy="200" r="80" fill="#B86C4A" opacity={0.06} />
        <circle cx="200" cy="200" r="40" fill="#B86C4A" opacity={0.12} />
        <circle cx="200" cy="200" r="8" fill="#B86C4A" opacity={0.2} />
        <line x1="30" y1="200" x2="370" y2="200" stroke="#B86C4A" strokeWidth="0.4" opacity={0.08} />
        <line x1="200" y1="30" x2="200" y2="370" stroke="#B86C4A" strokeWidth="0.4" opacity={0.08} />
      </svg>
    </div>
  )
}
