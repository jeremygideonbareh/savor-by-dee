export default function ArtPieceMonogram() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#F0EDE6] rounded-sm">
      <svg viewBox="0 0 400 500" className="w-3/5 h-3/5">
        <text
          x="200" y="330"
          textAnchor="middle"
          fill="#B86C4A"
          fontSize="260"
          fontFamily="ui-serif, Georgia, serif"
          fontStyle="italic"
          fontWeight="300"
          opacity={0.1}
        >
          S
        </text>
        <path
          d="M120 180 Q200 120 280 180 Q320 240 200 280 Q80 320 120 380 Q200 440 280 380"
          stroke="#B86C4A"
          strokeWidth="1"
          fill="none"
          opacity={0.2}
        />
        <circle cx="200" cy="280" r="60" fill="none" stroke="#B86C4A" strokeWidth="0.6" opacity={0.12} />
        <circle cx="200" cy="280" r="3" fill="#B86C4A" opacity={0.25} />
      </svg>
    </div>
  )
}
