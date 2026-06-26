// ArkNova wordmark with the angular "A" mark inside a circular badge.
export default function Logo({ className = '', mark = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark && (
        <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-accent">
          <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M6 25 L16 6 L26 25"
              fill="none"
              stroke="#FF6B2C"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M11 21 L21 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      )}
      <span className="font-display text-2xl font-extrabold tracking-tightest">ArkNova</span>
    </span>
  )
}

