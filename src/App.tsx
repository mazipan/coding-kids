import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useParams, Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BlocksHome } from './screens/BlocksHome'
import { LessonScreen } from './screens/LessonScreen'
import { LandingScreen } from './screens/LandingScreen'
import { PathSelector } from './screens/PathSelector'
import { ThinkingHomeWithProgress } from './screens/ThinkingHome'
import { ThinkingLessonScreen } from './screens/ThinkingLesson'
import { SafetyHomeWithProgress } from './screens/SafetyHome'
import { SafetyLessonScreen } from './screens/SafetyLesson'
import { useProgress } from './store/useProgress'
import { getLessonByNumber, getLessonsByWorld } from './data/lessons'
import { getWorld, WORLDS } from './data/worlds'
import { getThinkingWorld, THINKING_WORLDS } from './data/thinkingWorlds'
import { getThinkingLessonByNumber, getThinkingLessonsByWorld } from './data/thinkingLessons'
import { getSafetyWorld } from './data/safetyWorlds'
import { getSafetyLessonByNumber, getSafetyLessonsByWorld } from './data/safetyLessons'
import type { WorldId, ThinkingWorldId, SafetyWorldId } from './types'

function GameLayout() {
  const { progress } = useProgress()

  return (
    <div className="min-h-screen bg-[#0A0618] font-nunito">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Header progress={progress} />

      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

// ── Blocks path routes ────────────────────────────────────────

function WorldMapRoute() {
  const { getLessonProgress, isLessonUnlocked } = useProgress()
  return <BlocksHome getLessonProgress={getLessonProgress} isLessonUnlocked={isLessonUnlocked} />
}

function WorldDetailRoute() {
  const { worldId } = useParams<{ worldId: string }>()
  const { getLessonProgress, isLessonUnlocked } = useProgress()
  const world = worldId ? getWorld(worldId) : null
  if (!world) return <Navigate to="/app/blocks" replace />
  return (
    <BlocksHome
      getLessonProgress={getLessonProgress}
      isLessonUnlocked={isLessonUnlocked}
      selectedWorldId={worldId as WorldId}
    />
  )
}

function LessonRoute() {
  const { worldId, lessonNumber } = useParams<{ worldId: string; lessonNumber: string }>()
  const { completeLesson, getLessonProgress, isLessonUnlocked } = useProgress()

  const lesson = worldId && lessonNumber ? getLessonByNumber(worldId, Number(lessonNumber)) : null
  const world = worldId ? getWorld(worldId) : null

  // INV-L2 — the blocks path has no lock; any existing world+lesson pair is accessible.
  if (!lesson || !world) {
    return <Navigate to="/app/blocks" replace />
  }

  if (!isLessonUnlocked(lesson.id, lesson.worldId)) {
    return <Navigate to={`/app/blocks/world/${worldId}`} replace />
  }

  const worldLessons = getLessonsByWorld(worldId!)
  const idx = worldLessons.findIndex(l => l.id === lesson.id)
  const nextLesson = worldLessons[idx + 1]

  const mainWorlds = WORLDS.filter(w => !w.isBonus)
  const currentWorldIdx = mainWorlds.findIndex(w => w.id === worldId)
  const nextWorld = !nextLesson ? (mainWorlds[currentWorldIdx + 1] ?? undefined) : undefined

  return (
    <LessonScreen
      key={lesson.id}
      lesson={lesson}
      world={world}
      completeLesson={completeLesson}
      existingProgress={getLessonProgress(lesson.id)}
      nextLessonNumber={nextLesson?.number}
      nextWorld={nextWorld}
    />
  )
}

// ── Thinking path routes ──────────────────────────────────────

function ThinkingWorldRoute() {
  const { worldId } = useParams<{ worldId: string }>()
  const { isWorldUnlocked } = useProgress()
  const world = worldId ? getThinkingWorld(worldId) : null
  if (!world || !isWorldUnlocked(world.unlockAtXP)) return <Navigate to="/app/thinking" replace />
  return <ThinkingHomeWithProgress selectedWorldId={worldId as ThinkingWorldId} />
}

function ThinkingLessonRoute() {
  const { worldId, lessonNumber } = useParams<{ worldId: string; lessonNumber: string }>()
  const { completeLesson, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()

  const world = worldId ? getThinkingWorld(worldId) : null
  const lesson = worldId && lessonNumber !== undefined
    ? getThinkingLessonByNumber(worldId, Number(lessonNumber))
    : null

  if (!world || !lesson || !isWorldUnlocked(world.unlockAtXP)) {
    return <Navigate to="/app/thinking" replace />
  }

  if (!isLessonUnlocked(lesson.id, lesson.worldId)) {
    return <Navigate to={`/app/thinking/world/${worldId}`} replace />
  }

  const nextLesson = getThinkingLessonsByWorld(worldId!).find(l => l.number === lesson.number + 1)

  return (
    <ThinkingLessonScreen
      key={lesson.id}
      lesson={lesson}
      world={world}
      completeLesson={completeLesson}
      existingProgress={getLessonProgress(lesson.id)}
      nextLessonNumber={nextLesson?.number}
    />
  )
}

// ── Safety path routes ────────────────────────────────────────

function SafetyWorldRoute() {
  const { worldId } = useParams<{ worldId: string }>()
  const { isWorldUnlocked } = useProgress()
  const world = worldId ? getSafetyWorld(worldId) : null
  if (!world || !isWorldUnlocked(world.unlockAtXP)) return <Navigate to="/app/safety" replace />
  return <SafetyHomeWithProgress selectedWorldId={worldId as SafetyWorldId} />
}

function SafetyLessonRoute() {
  const { worldId, lessonNumber } = useParams<{ worldId: string; lessonNumber: string }>()
  const { completeLesson, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()

  const world = worldId ? getSafetyWorld(worldId) : null
  const lesson = worldId && lessonNumber !== undefined
    ? getSafetyLessonByNumber(worldId, Number(lessonNumber))
    : null

  if (!world || !lesson || !isWorldUnlocked(world.unlockAtXP)) {
    return <Navigate to="/app/safety" replace />
  }

  if (!isLessonUnlocked(lesson.id, lesson.worldId)) {
    return <Navigate to={`/app/safety/world/${worldId}`} replace />
  }

  const nextLesson = getSafetyLessonsByWorld(worldId!).find(l => l.number === lesson.number + 1)

  return (
    <SafetyLessonScreen
      key={lesson.id}
      lesson={lesson}
      world={world}
      completeLesson={completeLesson}
      existingProgress={getLessonProgress(lesson.id)}
      nextLessonNumber={nextLesson?.number}
    />
  )
}

// ── Landing ───────────────────────────────────────────────────

function LandingRoute() {
  const navigate = useNavigate()
  const { progress } = useProgress()
  const [hasProgress, setHasProgress] = useState(false)

  useEffect(() => {
    setHasProgress(progress.xp > 0 || progress.totalStars > 0)
  }, [progress.xp, progress.totalStars])

  return (
    <LandingScreen
      onStart={() => navigate('/app')}
      hasProgress={hasProgress}
    />
  )
}

function PathSelectorRoute() {
  const { progress } = useProgress()
  return <PathSelector progress={progress} />
}

// ── App ───────────────────────────────────────────────────────

interface AppProps {
  /**
   * True only when hydrating prerendered markup (the `/` landing page, built by
   * `src/entry-server.tsx`). Every other mount — `/app/*`, `bun run dev` — lands on an
   * empty `#root` and leaves this unset. See `main.tsx`.
   */
  isHydrating?: boolean
}

export default function App({ isHydrating }: AppProps) {
  return (
    <LanguageProvider forcedInitialLanguage={isHydrating ? 'en' : undefined}>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route path="/app" element={<GameLayout />}>
          <Route index element={<PathSelectorRoute />} />
          <Route path="blocks">
            <Route index element={<WorldMapRoute />} />
            <Route path="world/:worldId" element={<WorldDetailRoute />} />
            <Route path="world/:worldId/:lessonNumber" element={<LessonRoute />} />
          </Route>
          <Route path="thinking">
            <Route index element={<ThinkingHomeWithProgress />} />
            <Route path="world/:worldId" element={<ThinkingWorldRoute />} />
            <Route path="world/:worldId/:lessonNumber" element={<ThinkingLessonRoute />} />
          </Route>
          <Route path="safety">
            <Route index element={<SafetyHomeWithProgress />} />
            <Route path="world/:worldId" element={<SafetyWorldRoute />} />
            <Route path="world/:worldId/:lessonNumber" element={<SafetyLessonRoute />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  )
}
