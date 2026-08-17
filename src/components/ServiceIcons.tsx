type IconProps = {
  className?: string
}

export function MowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 17h4M12 17V8l6-2M12 8H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TrimIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 7.5 20 18M8 16.5 20 6" strokeLinecap="round" />
    </svg>
  )
}

export function WashIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3c3 4 5.5 7.2 5.5 10.2A5.5 5.5 0 1 1 6.5 13.2C6.5 10.2 9 7 12 3Z" strokeLinejoin="round" />
    </svg>
  )
}

export function PaintIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="4" width="10" height="6" rx="1.2" />
      <path d="M8 10v3.5a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 1 1.5 1.5V19" strokeLinecap="round" />
      <rect x="10.5" y="16" width="4" height="5" rx="1" />
    </svg>
  )
}

export function MoreIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
