import { useState } from 'react'
import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { World } from '../types'


// ── Block mockup color palette ────────────────────────────────────────────────

const C = {
  move:  '#5C6BC0',
  loop:  '#D97706',
  varr:  '#7C3AED',
  logic: '#1D4ED8',
  func:  '#B45309',
  list:  '#0F766E',
}

// ── Primitive visual block components ────────────────────────────────────────

function Pill({ color, children, small }: { color: string; children: ReactNode; small?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: color,
      borderRadius: 20,
      padding: small ? '5px 12px' : '8px 16px',
      color: 'white',
      fontWeight: 700,
      fontSize: small ? 11 : 13,
      boxShadow: `0 3px 8px ${color}60`,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </div>
  )
}

function StackedPills({ items }: { items: Array<{ color: string; label: string }> }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map((item, i) => <Pill key={i} color={item.color}>{item.label}</Pill>)}
    </div>
  )
}

function RepeatWrap({ count, childLabel, lang }: { count: number | string; childLabel: string; lang: string }) {
  const header = lang === 'id' ? `🔄 Ulangi ${count} kali` : `🔄 Repeat ${count} times`
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Pill color={C.loop}>{header}</Pill>
      <div style={{
        marginLeft: 14,
        borderLeft: `4px solid ${C.loop}80`,
        paddingLeft: 10,
        paddingTop: 4,
        paddingBottom: 4,
      }}>
        <Pill color={C.move}>{childLabel}</Pill>
      </div>
      <Pill color={C.loop} small>
        {lang === 'id' ? '(selesai ulangi)' : '(end repeat)'}
      </Pill>
    </div>
  )
}

function IfWrap({ condLabel, childLabel, lang }: { condLabel: string; childLabel: string; lang: string }) {
  const header = lang === 'id' ? `❓ Jika ${condLabel}` : `❓ If ${condLabel}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Pill color={C.logic}>{header}</Pill>
      <div style={{
        marginLeft: 14,
        borderLeft: `4px solid ${C.logic}80`,
        paddingLeft: 10,
        paddingTop: 4,
        paddingBottom: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        <Pill color={C.move}>{childLabel}</Pill>
        <Pill color={C.move}>{childLabel}</Pill>
        <Pill color={C.move}>{childLabel}</Pill>
      </div>
      <Pill color={C.logic} small>{lang === 'id' ? '(selesai jika)' : '(end if)'}</Pill>
    </div>
  )
}

function VarSet({ varName, value, lang }: { varName: string; value: number; lang: string }) {
  const label = lang === 'id' ? `📦 Atur ${varName} = ${value}` : `📦 Set ${varName} = ${value}`
  return <Pill color={C.varr}>{label}</Pill>
}

function VarGet({ varName, lang }: { varName: string; lang: string }) {
  const label = lang === 'id' ? `📦 ${varName}` : `📦 ${varName}`
  return <Pill color={C.varr}>{label}</Pill>
}

// ── Demo Blockly workspace states (JSON serialization) ────────────────────────

const DEMO_STATES: Partial<Record<string, object>> = {
  jungle: {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'move_right', x: 40, y: 30,
        next: { block: { type: 'move_right' } },
      }],
    },
  },
  space: {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'controls_repeat_ext', x: 40, y: 30,
        inputs: {
          TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
          DO: { block: { type: 'move_right' } },
        },
      }],
    },
  },
  loops: {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'controls_repeat_ext', x: 40, y: 30,
        inputs: {
          TIMES: { shadow: { type: 'math_number', fields: { NUM: 6 } } },
          DO: { block: { type: 'move_right' } },
        },
      }],
    },
  },
  ocean: {
    variables: [{ name: 'steps', id: 'tour_var_steps' }],
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'variables_set', x: 40, y: 30,
        fields: { VAR: { id: 'tour_var_steps' } },
        inputs: { VALUE: { shadow: { type: 'math_number', fields: { NUM: 4 } } } },
        next: {
          block: {
            type: 'controls_repeat_ext',
            inputs: {
              TIMES: { block: { type: 'variables_get', fields: { VAR: { id: 'tour_var_steps' } } } },
              DO: { block: { type: 'move_right' } },
            },
          },
        },
      }],
    },
  },
  caves: {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'controls_if', x: 40, y: 30,
        inputs: {
          IF0: { block: { type: 'logic_boolean', fields: { BOOL: 'TRUE' } } },
          DO0: {
            block: {
              type: 'move_right',
              next: { block: { type: 'move_right', next: { block: { type: 'move_right' } } } },
            },
          },
        },
      }],
    },
  },
  portal: {
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: 'controls_repeat_ext', x: 40, y: 30,
        inputs: {
          TIMES: { shadow: { type: 'math_number', fields: { NUM: 5 } } },
          DO: { block: { type: 'move_right' } },
        },
      }],
    },
  },
}

// ── Teach step definitions per world ─────────────────────────────────────────

interface TeachStep {
  icon: string
  title: { en: string; id: string }
  body: { en: string; id: string }
  diagram: (lang: 'en' | 'id') => ReactNode
}

function getTeachSteps(worldId: string): TeachStep[] {
  const mr = (lang: string) => (lang === 'id' ? '➡️ Gerak Kanan' : '➡️ Move Right')

  const table: Record<string, TeachStep[]> = {
    jungle: [
      {
        icon: '📋',
        title: { en: 'Coding is giving step-by-step directions!', id: 'Koding adalah memberi petunjuk langkah demi langkah!' },
        body: {
          en: 'Your character follows every instruction you give — one at a time, in order. Just like telling a friend: "First go right, then go right again." That is a sequence!',
          id: 'Karaktermu mengikuti setiap instruksi yang kamu beri — satu per satu, berurutan. Seperti bilang ke teman: "Pertama ke kanan, lalu ke kanan lagi." Itu namanya urutan!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 8 }}>
                {lang === 'id' ? 'Instruksimu (blok):' : 'Your instructions (blocks):'}
              </div>
              <StackedPills items={[{ color: C.move, label: mr(lang) }, { color: C.move, label: mr(lang) }]} />
            </div>
            <div style={{ fontSize: 28 }}>→</div>
            <div style={{ textAlign: 'center', fontSize: 32 }}>
              🐒<br />
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                {lang === 'id' ? 'bergerak!' : 'moves!'}
              </span>
            </div>
          </div>
        ),
      },
      {
        icon: '🎮',
        title: { en: 'Drag blocks to build your program!', id: 'Seret blok untuk membangun programmu!' },
        body: {
          en: 'Open the "Move" category on the LEFT. Drag blocks to the white workspace. Stack them to make a sequence. Press RUN to see your character move!',
          id: 'Buka kategori "Gerak" di KIRI. Seret blok ke area kerja putih. Tumpuk untuk membuat urutan. Tekan JALANKAN untuk melihat karaktermu bergerak!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'id' ? '💡 Susun blok seperti ini:' : '💡 Stack blocks like this:'}
            </div>
            <StackedPills items={[
              { color: C.move, label: mr(lang) },
              { color: C.move, label: mr(lang) },
            ]} />
            <div style={{
              marginTop: 8,
              padding: '6px 14px',
              borderRadius: 20,
              background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
              color: 'white',
              fontWeight: 700,
              fontSize: 13,
            }}>
              ▶ {lang === 'id' ? 'Jalankan Kode' : 'Run Code'}
            </div>
          </div>
        ),
      },
    ],

    space: [
      {
        icon: '🔁',
        title: { en: 'Loops: stop writing the same thing twice!', id: 'Perulangan: berhenti menulis hal yang sama dua kali!' },
        body: {
          en: 'Imagine brushing your teeth. You don\'t say "brush, brush, brush, brush..." 30 times! You say "brush 30 times." A Loop block does the same — it repeats steps automatically!',
          id: 'Bayangkan gosok gigi. Kamu tidak bilang "gosok, gosok, gosok..." 30 kali! Kamu bilang "gosok 30 kali." Blok Perulangan melakukan hal yang sama — ia mengulang langkah secara otomatis!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#F87171', fontSize: 12, marginBottom: 8 }}>
                {lang === 'id' ? '3 blok berulang:' : '3 separate blocks:'}
              </div>
              <StackedPills items={[
                { color: C.move, label: mr(lang) },
                { color: C.move, label: mr(lang) },
                { color: C.move, label: mr(lang) },
              ]} />
              <div style={{ color: '#F87171', fontSize: 11, marginTop: 6 }}>😓</div>
            </div>
            <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#4ADE80', fontSize: 12, marginBottom: 8 }}>
                {lang === 'id' ? '1 blok Ulangi:' : '1 Repeat block:'}
              </div>
              <RepeatWrap count={3} childLabel={mr(lang)} lang={lang} />
              <div style={{ color: '#4ADE80', fontSize: 11, marginTop: 6 }}>
                {lang === 'id' ? '😎 Jauh lebih ringkas!' : '😎 So much cleaner!'}
              </div>
            </div>
          </div>
        ),
      },
    ],

    loops: [
      {
        icon: '🏆',
        title: { en: 'Fewer blocks = MORE STARS here!', id: 'Lebih sedikit blok = LEBIH BANYAK BINTANG!' },
        body: {
          en: 'In Loop Land the track judges score you on efficiency. Using ONE Repeat block instead of SIX separate Move blocks earns you 3 stars. Think smart, not hard!',
          id: 'Di Negeri Perulangan, juri menilai efisiensimu. Menggunakan SATU blok Ulangi alih-alih ENAM blok Gerak terpisah menghasilkan 3 bintang. Berpikirlah cerdas, bukan keras!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#F87171', fontSize: 12, marginBottom: 6 }}>
                {lang === 'id' ? '7 blok → ⭐ 1 bintang' : '7 blocks → ⭐ 1 star'}
              </div>
              <StackedPills items={Array(6).fill({ color: C.move, label: mr(lang) })} />
            </div>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>vs</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#4ADE80', fontSize: 12, marginBottom: 6 }}>
                {lang === 'id' ? '2 blok → ⭐⭐⭐ 3 bintang!' : '2 blocks → ⭐⭐⭐ 3 stars!'}
              </div>
              <RepeatWrap count={6} childLabel={mr(lang)} lang={lang} />
            </div>
          </div>
        ),
      },
    ],

    ocean: [
      {
        icon: '📦',
        title: { en: 'Variables: name a number so you can change it!', id: 'Variabel: beri nama angka agar bisa diubah!' },
        body: {
          en: 'A variable is like a labeled box. You put a number inside: "steps = 4". Now use that name in your Repeat block. Later you can change the number and the loop changes too!',
          id: 'Variabel seperti kotak berlabel. Kamu isi angka: "langkah = 4". Lalu gunakan nama itu di blok Ulangi. Nanti kamu bisa ubah angkanya dan perulangan juga berubah!',
        },
        diagram: (lang) => {
          const vName = lang === 'id' ? 'langkah' : 'steps'
          const repeatLabel = lang === 'id' ? `🔄 Ulangi ${vName} kali` : `🔄 Repeat ${vName} times`
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <VarSet varName={vName} value={4} lang={lang} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Pill color={C.loop}>{repeatLabel}</Pill>
                <div style={{
                  marginLeft: 14,
                  borderLeft: `4px solid ${C.loop}80`,
                  paddingLeft: 10,
                  paddingTop: 4,
                  paddingBottom: 4,
                }}>
                  <Pill color={C.move}>{mr(lang)}</Pill>
                </div>
                <Pill color={C.loop} small>{lang === 'id' ? '(selesai ulangi)' : '(end repeat)'}</Pill>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                {lang === 'id'
                  ? `↑ bergerak ${4} kali karena langkah = 4`
                  : `↑ moves ${4} times because steps = 4`}
              </div>
            </div>
          )
        },
      },
    ],

    caves: [
      {
        icon: '❓',
        title: { en: 'If blocks: let your code make decisions!', id: 'Blok Jika: biarkan kodemu membuat keputusan!' },
        body: {
          en: 'An "If" block checks a condition. If the condition is TRUE — it runs the blocks inside. If FALSE — it skips them. Like "if it\'s raining, take an umbrella!"',
          id: 'Blok "Jika" memeriksa kondisi. Jika kondisinya BENAR — blok di dalamnya dijalankan. Jika SALAH — dilewati. Seperti "jika hujan, bawa payung!"',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
              {lang === 'id' ? '🤔 Kondisi menentukan apa yang terjadi:' : '🤔 Condition decides what happens:'}
            </div>
            <IfWrap
              condLabel={lang === 'id' ? 'benar' : 'true'}
              childLabel={mr(lang)}
              lang={lang}
            />
          </div>
        ),
      },
    ],

    factory: [
      {
        icon: '🔧',
        title: { en: 'Functions: create your own custom block!', id: 'Fungsi: buat blok kustom milikmu sendiri!' },
        body: {
          en: 'A function is a named group of steps. Define it once, then call it by name as many times as you need. Like writing your own recipe and cooking it whenever you want!',
          id: 'Fungsi adalah kumpulan langkah yang bernama. Definisikan sekali, lalu panggil dengan nama seberapa pun kamu mau. Seperti menulis resepmu sendiri dan memasaknya kapan saja!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'id' ? 'Definisi (tulis sekali):' : 'Definition (write once):'}
            </div>
            <div style={{ border: `2px dashed ${C.func}60`, borderRadius: 12, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Pill color={C.func}>{lang === 'id' ? '🔧 Fungsi: gerak3Kanan' : '🔧 Function: move3Right'}</Pill>
              <div style={{ marginLeft: 12, borderLeft: `3px solid ${C.func}60`, paddingLeft: 8, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Pill color={C.move}>{mr(lang)}</Pill>
                <Pill color={C.move}>{mr(lang)}</Pill>
                <Pill color={C.move}>{mr(lang)}</Pill>
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'id' ? 'Panggil berkali-kali:' : 'Call it many times:'}
            </div>
            <StackedPills items={[
              { color: C.func, label: lang === 'id' ? '▶ gerak3Kanan' : '▶ move3Right' },
              { color: C.func, label: lang === 'id' ? '▶ gerak3Kanan' : '▶ move3Right' },
            ]} />
          </div>
        ),
      },
    ],

    portal: [
      {
        icon: '📋',
        title: { en: 'Lists: store a collection of items!', id: 'Daftar: simpan kumpulan item!' },
        body: {
          en: 'A list holds many items in a row — like [🍎, 🍌, 🍒]. You can loop through all of them automatically. Here in the Portal, loops and lists combine to power your journey!',
          id: 'Daftar menyimpan banyak item berurutan — seperti [🍎, 🍌, 🍒]. Kamu bisa mengulang semuanya secara otomatis. Di Portal ini, perulangan dan daftar bergabung untuk menggerakkan perjalananmu!',
        },
        diagram: (lang) => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['🍎', '🍌', '🍒', '🫐', '🍓'].map((f, i) => (
                <div key={i} style={{
                  background: C.list,
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontSize: 20,
                  boxShadow: `0 2px 8px ${C.list}50`,
                }}>{f}</div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              {lang === 'id' ? '→ daftar = 5 item' : '→ list = 5 items'}
            </div>
            <RepeatWrap count={5} childLabel={mr(lang)} lang={lang} />
          </div>
        ),
      },
    ],
  }

  return table[worldId] ?? table['jungle'] ?? []
}

// ── Main component ────────────────────────────────────────────────────────────

interface BlocklyWalkthroughProps {
  world: World
  onDone: () => void
  onLoadState: (state: object) => void
  onSwitchTab: (tab: 'blocks' | 'game') => void
}

type Phase = 'teach' | 'demo'

export function BlocklyWalkthrough({ world, onDone, onLoadState, onSwitchTab }: BlocklyWalkthroughProps) {
  const { language } = useLanguage()
  const lang = language === 'id' ? 'id' : 'en'

  const steps = getTeachSteps(world.id)
  const hasDemoState = world.id in DEMO_STATES

  const [phase, setPhase] = useState<Phase>('teach')
  const [stepIdx, setStepIdx] = useState(0)

  const loc = (field: { en: string; id: string }) => field[lang] ?? field.en
  const current = steps[stepIdx]!
  const isLastTeachStep = stepIdx === steps.length - 1

  const handleNext = () => {
    if (!isLastTeachStep) {
      setStepIdx(s => s + 1)
      return
    }
    // Last teach step → inject demo + switch to demo phase
    if (hasDemoState) {
      const state = DEMO_STATES[world.id]!
      onLoadState(state)
      onSwitchTab('blocks')
      setPhase('demo')
    } else {
      finish()
    }
  }

  const finish = () => {
    onDone()
  }

  const btnLabel = isLastTeachStep && hasDemoState
    ? (lang === 'id' ? '👀 Tunjukkan contohnya!' : '👀 Show me an example!')
    : isLastTeachStep
    ? (lang === 'id' ? 'Ayo mulai!' : "Let's go!")
    : (lang === 'id' ? 'Lanjut' : 'Next')

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      {/* Dim overlay */}
      <div
        className="absolute inset-0 pointer-events-auto"
        style={{ background: 'rgba(8,4,20,0.7)' }}
        onClick={finish}
      />

      <AnimatePresence mode="wait">
        {phase === 'teach' && current && (
          /* ── Full-screen teaching modal ── */
          <motion.div
            key={`teach-${stepIdx}`}
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 22, stiffness: 350 }}
          >
            <div
              className="relative rounded-3xl w-full max-w-xl pointer-events-auto overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1a1040, #110c30)',
                border: `2px solid ${world.theme.accentColor}70`,
                boxShadow: `0 0 60px ${world.theme.accentColor}30, 0 12px 48px rgba(0,0,0,0.8)`,
              }}
            >
              {/* Header */}
              <div
                className="px-6 pt-5 pb-3"
                style={{ borderBottom: `1px solid ${world.theme.accentColor}25` }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-4xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {current.icon}
                  </motion.span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: world.theme.accentColor }}>
                      {world.characterName} {lang === 'id' ? 'mengajarkan' : 'teaches'} • {localize_concept(world, lang)}
                    </p>
                    <h2 className="text-white font-black text-base sm:text-lg leading-tight">
                      {loc(current.title)}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-4">
                <p className="text-white/75 text-sm leading-relaxed mb-5">
                  {loc(current.body)}
                </p>

                {/* Visual diagram */}
                <div
                  className="rounded-2xl p-5 mb-5 overflow-x-auto"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: `1px solid ${world.theme.accentColor}20`,
                  }}
                >
                  {current.diagram(lang)}
                </div>

                {/* Step dots */}
                {steps.length > 1 && (
                  <div className="flex gap-2 mb-4 justify-center">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === stepIdx ? 22 : 8,
                          height: 8,
                          background: i <= stepIdx ? world.theme.accentColor : 'rgba(255,255,255,0.2)',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={finish}
                    className="text-white/40 text-sm font-bold hover:text-white/60 transition-colors px-2 py-1"
                  >
                    {lang === 'id' ? 'Lewati' : 'Skip'}
                  </button>
                  <motion.button
                    onClick={handleNext}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-black text-sm"
                    style={{
                      background: `linear-gradient(135deg, ${world.theme.accentColor}, ${world.theme.accentColor}bb)`,
                      color: '#0a0618',
                      boxShadow: `0 4px 20px ${world.theme.accentColor}50`,
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {btnLabel}
                    {!isLastTeachStep && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 'demo' && (
          /* ── Floating demo card (points to workspace) ── */
          <motion.div
            key="demo"
            className="absolute bottom-24 lg:bottom-6 left-4 right-4 pointer-events-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Left glow pointing to workspace */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-16 rounded-l-3xl pointer-events-none"
              style={{ background: `linear-gradient(to right, ${world.theme.accentColor}90, transparent)` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div
              className="rounded-3xl p-5 max-w-lg mx-auto pointer-events-auto relative"
              style={{
                background: 'linear-gradient(135deg, #1e1352, #130D2E)',
                border: `2px solid ${world.theme.accentColor}80`,
                boxShadow: `0 0 40px ${world.theme.accentColor}40, 0 8px 32px rgba(0,0,0,0.8)`,
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <motion.span
                  className="text-3xl shrink-0"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {world.character}
                </motion.span>
                <div>
                  <p className="font-black text-white text-sm leading-tight mb-1">
                    {lang === 'id' ? '✅ Aku sudah membangun contoh di workspace!' : '✅ I built an example in the workspace!'}
                  </p>
                  <p className="text-white/65 text-xs leading-relaxed">
                    {lang === 'id'
                      ? 'Pelajari blok-bloknya. Lihat bagaimana mereka tersusun. Ketika siap, hapus dan bangun versimu sendiri!'
                      : 'Study the blocks. See how they fit together. When ready, clear them and build your own solution!'}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={finish}
                className="w-full py-3 rounded-2xl font-black text-sm"
                style={{
                  background: `linear-gradient(135deg, ${world.theme.accentColor}, ${world.theme.accentColor}cc)`,
                  color: '#0a0618',
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {lang === 'id' ? '🚀 Oke, aku siap mencoba!' : "🚀 Got it, let's try!"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function localize_concept(world: World, lang: 'en' | 'id'): string {
  return world.concept[lang] ?? world.concept.en
}
