import { Routes, Route, Navigate, useNavigate, useParams, Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageProvider'
import { Header } from './components/Header'
import { HomeScreen } from './screens/HomeScreen'
import { LessonScreen } from './screens/LessonScreen'
import { LandingScreen } from './screens/LandingScreen'
import { useProgress } from './store/useProgress'
import { getLessonByNumber, getLessonsByWorld } from './data/lessons'
import { getWorld } from './data/worlds'
import type { WorldId } from './types'

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
    </div>
  )
}

function WorldMapRoute() {
  const { progress, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()
  return (
    <HomeScreen
      progress={progress}
      isWorldUnlocked={isWorldUnlocked}
      getLessonProgress={getLessonProgress}
      isLessonUnlocked={isLessonUnlocked}
    />
  )
}

function WorldDetailRoute() {
  const { worldId } = useParams<{ worldId: string }>()
  const { progress, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()
  const world = worldId ? getWorld(worldId) : null
  if (!world) return <Navigate to="/app" replace />
  return (
    <HomeScreen
      progress={progress}
      isWorldUnlocked={isWorldUnlocked}
      getLessonProgress={getLessonProgress}
      isLessonUnlocked={isLessonUnlocked}
      selectedWorldId={worldId as WorldId}
    />
  )
}

function LessonRoute() {
  const { worldId, lessonNumber } = useParams<{ worldId: string; lessonNumber: string }>()
  const { completeLesson, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()

  const lesson = worldId && lessonNumber ? getLessonByNumber(worldId, Number(lessonNumber)) : null
  const world = worldId ? getWorld(worldId) : null

  if (!lesson || !world || !isWorldUnlocked(world.unlockAtXP)) {
    return <Navigate to="/app" replace />
  }

  if (!isLessonUnlocked(lesson.id, lesson.worldId)) {
    return <Navigate to={`/app/world/${worldId}`} replace />
  }

  const worldLessons = getLessonsByWorld(worldId!)
  const idx = worldLessons.findIndex(l => l.id === lesson.id)
  const nextLesson = worldLessons[idx + 1]

  return (
    <LessonScreen
      lesson={lesson}
      world={world}
      completeLesson={completeLesson}
      existingProgress={getLessonProgress(lesson.id)}
      nextLessonNumber={nextLesson?.number}
    />
  )
}

function LandingRoute() {
  const navigate = useNavigate()
  const { progress } = useProgress()
  const hasProgress = progress.xp > 0 || progress.totalStars > 0
  return (
    <LandingScreen
      onStart={() => navigate('/app')}
      hasProgress={hasProgress}
    />
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<LandingRoute />} />
        <Route element={<GameLayout />}>
          <Route path="/app" element={<WorldMapRoute />} />
          <Route path="/app/world/:worldId" element={<WorldDetailRoute />} />
          <Route path="/app/world/:worldId/:lessonNumber" element={<LessonRoute />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  )
}
