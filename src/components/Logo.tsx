const GRAD_ID = 'ck-logo-gradient'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CodeKids logo"
    >
      <defs>
        <linearGradient id={GRAD_ID} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${GRAD_ID})`} />
      {/* < left bracket */}
      <path d="M14 13L8.5 20L14 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* > right bracket */}
      <path d="M26 13L31.5 20L26 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* / slash */}
      <path d="M23 12L17 28" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
