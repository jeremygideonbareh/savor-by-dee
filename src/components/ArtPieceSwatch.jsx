export default function ArtPieceSwatch() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#F0EDE6] rounded-sm">
      <svg viewBox="0 0 400 400" className="w-4/5 h-4/5">
        <rect x="40" y="40" width="320" height="320" rx="4" fill="#B86C4A" opacity={0.05} />
        <rect x="80" y="80" width="240" height="240" rx="3" fill="#B86C4A" opacity={0.08} />
        <rect x="120" y="120" width="160" height="160" rx="2" fill="#B86C4A" opacity={0.05} />
        <rect x="160" y="160" width="80" height="80" rx="1" fill="#B86C4A" opacity={0.12} />
        <line x1="40" y1="360" x2="360" y2="360" stroke="#B86C4A" strokeWidth="0.4" opacity={0.12} />
        <line x1="40" y1="365" x2="360" y2="365" stroke="#B86C4A" strokeWidth="0.2" opacity={0.06} />
      </svg>
    </div>
  )
}
