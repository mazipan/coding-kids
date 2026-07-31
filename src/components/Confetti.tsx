import { useEffect, useRef } from 'react'

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#B4A0E5', '#FBBF24', '#34D399']

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
  shape: 'rect' | 'circle'
}

interface ConfettiProps {
  active: boolean
}

export function Confetti({ active }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(animRef.current)
      particlesRef.current = []
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
      }
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create particles from top
    particlesRef.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 4 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 10 + 6,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }))

    const ctx = canvas.getContext('2d')!

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter(p => p.y < canvas.height + 30)

      particlesRef.current.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, 1 - p.y / (canvas.height * 0.9))

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 3, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      })

      if (particlesRef.current.length > 0) {
        animRef.current = requestAnimationFrame(animate)
      }
    }

    animRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animRef.current)
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
