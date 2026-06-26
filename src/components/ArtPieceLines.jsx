export default function ArtPieceLines() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#F0EDE6] rounded-sm">
      <svg viewBox="0 0 400 500" className="w-4/5 h-4/5">
        <path d="M40 460 Q120 380 200 250 Q280 120 360 40" stroke="#B86C4A" strokeWidth="1.5" fill="none" opacity={0.3} />
        <path d="M40 440 Q120 360 200 230 Q280 100 360 60" stroke="#B86C4A" strokeWidth="0.8" fill="none" opacity={0.2} />
        <path d="M40 400 Q160 340 240 200 Q320 60 360 80" stroke="#B86C4A" strokeWidth="0.5" fill="none" opacity={0.15} />
        <circle cx="200" cy="245" r="80" fill="none" stroke="#B86C4A" strokeWidth="1" opacity={0.12} />
        <circle cx="200" cy="245" r="40" fill="none" stroke="#B86C4A" strokeWidth="0.6" opacity={0.18} />
        <circle cx="200" cy="245" r="4" fill="#B86C4A" opacity={0.25} />
        <line x1="40" y1="30" x2="360" y2="30" stroke="#B86C4A" strokeWidth="0.4" opacity={0.06} />
        <line x1="40" y1="470" x2="360" y2="470" stroke="#B86C4A" strokeWidth="0.4" opacity={0.06} />
      </svg>
    </div>
  )
}
