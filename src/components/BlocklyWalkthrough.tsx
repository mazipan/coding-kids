import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { World } from '../types'

const tourKey = (worldId: string) => `codekids_tour_v1_${worldId}`

export function isTourDone(worldId: string): boolean {
  try {
    return localStorage.getItem(tourKey(worldId)) === 'done'
  } catch {
    return false
  }
}

function markTourDone(worldId: string) {
  try {
    localStorage.setItem(tourKey(worldId), 'done')
  } catch {}
}

interface Step {
  glow: 'left' | 'bottom'
  title: { en: string; id: string }
  desc: { en: string; id: string }
}

function conceptStep(worldId: string): Step {
  const steps: Record<string, Step> = {
    jungle: {
      glow: 'left',
      title: { en: '👣 Find the Move blocks!', id: '👣 Cari blok Gerak!' },
      desc: { en: 'In the toolbox on the left, click "Move" to see Move Right, Move Left and more. 👈', id: 'Di kotak alat di kiri, klik "Gerak" untuk melihat blok Ke Kanan, Ke Kiri, dll. 👈' },
    },
    space: {
      glow: 'left',
      title: { en: '🔄 Find the Loops category!', id: '🔄 Cari kategori Perulangan!' },
      desc: { en: 'Click "Loops" in the toolbox — Repeat blocks run your code many times automatically! 👈', id: 'Klik "Perulangan" di kotak alat — blok Ulangi menjalankan kodemu berkali-kali secara otomatis! 👈' },
    },
    ocean: {
      glow: 'left',
      title: { en: '📦 Find the Variables category!', id: '📦 Cari kategori Variabel!' },
      desc: { en: 'Click "Variables" in the toolbox to create a number that can change as your code runs! 👈', id: 'Klik "Variabel" di kotak alat untuk membuat angka yang bisa berubah saat kodemu berjalan! 👈' },
    },
    caves: {
      glow: 'left',
      title: { en: '❓ Find the Logic/If blocks!', id: '❓ Cari blok Logika/Jika!' },
      desc: { en: 'Click "Logic" in the toolbox — If blocks make your code decide what to do next! 👈', id: 'Klik "Logika" di kotak alat — blok Jika membuat kodemu memutuskan apa yang dilakukan selanjutnya! 👈' },
    },
    factory: {
      glow: 'left',
      title: { en: '🔧 Find the Functions category!', id: '🔧 Cari kategori Fungsi!' },
      desc: { en: 'Click "Functions" in the toolbox — define a named group of blocks you can reuse! 👈', id: 'Klik "Fungsi" di kotak alat — buat kumpulan blok bernama yang bisa dipakai berulang kali! 👈' },
    },
    portal: {
      glow: 'left',
      title: { en: '📋 Find the Lists category!', id: '📋 Cari kategori Daftar!' },
      desc: { en: 'Click "Lists" in the toolbox — List blocks store groups of items you can loop through! 👈', id: 'Klik "Daftar" di kotak alat — blok Daftar menyimpan kelompok item yang bisa kamu ulangi! 👈' },
    },
  }
  return steps[worldId] ?? steps['jungle']!
}

interface BlocklyWalkthroughProps {
  world: World
  onDone: () => void
  onStepChange?: (step: number) => void
}

export function BlocklyWalkthrough({ world, onDone, onStepChange }: BlocklyWalkthroughProps) {
  const { t, language } = useLanguage()
  const [step, setStep] = useState(0)

  const steps: Step[] = [
    {
      glow: 'left',
      title: { en: '🧩 This is the TOOLBOX!', id: '🧩 Ini adalah KOTAK ALAT!' },
      desc: { en: 'All coding blocks are listed on the LEFT side — tap any coloured category to pop it open! 👈', id: 'Semua blok koding ada di sisi KIRI — ketuk kategori berwarna apa saja untuk membukanya! 👈' },
    },
    {
      glow: 'left',
      title: { en: '✋ DRAG a block to the workspace!', id: '✋ SERET blok ke area kerja!' },
      desc: { en: 'Tap and drag a block from the toolbox into the larger area to the right — that builds your code! 👈', id: 'Ketuk dan seret blok dari kotak alat ke area yang lebih besar di kanannya — di situ kamu membuat kode! 👈' },
    },
    conceptStep(world.id),
    {
      glow: 'bottom',
      title: { en: '▶ Press RUN CODE when ready!', id: '▶ Tekan JALANKAN saat sudah siap!' },
      desc: { en: 'Stack your blocks in the 🧩 Blocks tab, then tap the big ▶ Run Code button at the bottom! 👇', id: 'Susun blokmu di tab 🧩 Blok, lalu tekan tombol ▶ Jalankan yang besar di bawah! 👇' },
    },
  ]

  const current = steps[step]!
  const isLast = step === steps.length - 1
  const loc = (field: { en: string; id: string }) => field[language] ?? field.en

  const handleNext = () => {
    if (isLast) {
      markTourDone(world.id)
      onDone()
    } else {
      const next = step + 1
      setStep(next)
      onStepChange?.(next)
    }
  }

  const handleSkip = () => {
    markTourDone(world.id)
    onDone()
  }

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Dim overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(10,6,24,0.45)' }} />

      {/* Left edge glow — points kids to the Blockly panel */}
      {current.glow === 'left' && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${world.theme.accentColor}80, transparent)` }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Bottom edge glow — points kids to the Run button */}
      {current.glow === 'bottom' && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${world.theme.accentColor}80, transparent)` }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Floating card — sits above the fixed mobile controls bar (bottom-24) */}
      <motion.div
        key={step}
        className="absolute bottom-24 lg:bottom-4 left-4 right-4 pointer-events-auto"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div
          className="rounded-3xl p-5 max-w-lg mx-auto"
          style={{
            background: 'linear-gradient(135deg, #1e1352, #130D2E)',
            border: `2px solid ${world.theme.accentColor}70`,
            boxShadow: `0 0 48px ${world.theme.accentColor}40, 0 8px 32px rgba(0,0,0,0.8)`,
          }}
        >
          {/* Character + step text */}
          <div className="flex items-start gap-3 mb-4">
            <motion.div
              className="text-4xl shrink-0 select-none"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {world.character}
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-white text-base leading-tight mb-1">
                {loc(current.title)}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {loc(current.desc)}
              </p>
            </div>
          </div>

          {/* Dots + skip + next */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5 flex-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === step ? 22 : 8,
                    height: 8,
                    background: i <= step ? world.theme.accentColor : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleSkip}
              className="text-white/40 text-sm font-bold hover:text-white/60 transition-colors px-2 py-1 shrink-0"
            >
              {t('walkthrough.skip')}
            </button>

            <motion.button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-black text-sm shrink-0"
              style={{
                background: `linear-gradient(135deg, ${world.theme.accentColor}, ${world.theme.accentColor}bb)`,
                color: '#0a0618',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLast ? t('walkthrough.go') : <><span>{t('walkthrough.next')}</span><ArrowRight className="w-3.5 h-3.5" /></>}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
