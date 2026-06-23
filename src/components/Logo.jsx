// Aztec wordmark with the angular "A" mark from the brand screenshots.
export default function Logo({ className = '', mark = true }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark && (
        <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M6 25 L16 6 L26 25"
            fill="none"
            stroke="#FFD400"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M11 21 L21 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      <span className="font-display text-2xl font-extrabold tracking-tightest">Aztec</span>
    </span>
  )
}
