import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageProvider'
import { Header } from './components/Header'
import { HomeScreen } from './screens/HomeScreen'
import { LessonScreen } from './screens/LessonScreen'
import { LandingScreen } from './screens/LandingScreen'
import { useProgress } from './store/useProgress'
import { getLesson, getLessonsByWorld } from './data/lessons'
import { getWorld } from './data/worlds'
import type { AppState } from './types'

function GameApp() {
  const navigate = useNavigate()
  const [appState, setAppState] = useState<AppState>({ screen: 'home' })
  const { progress, completeLesson, getLessonProgress, isLessonUnlocked, isWorldUnlocked } = useProgress()

  const handleNavigate = (state: Partial<AppState>) => {
    if (state.screen === 'landing') {
      navigate('/')
      return
    }
    setAppState(prev => ({ ...prev, ...state }))
  }

  const currentLesson = appState.currentLessonId ? getLesson(appState.currentLessonId) : null
  const currentWorld = appState.currentWorldId ? getWorld(appState.currentWorldId) : null

  const getNextLessonId = (): string | undefined => {
    if (!currentLesson || !appState.currentWorldId) return undefined
    const worldLessons = getLessonsByWorld(appState.currentWorldId)
    const idx = worldLessons.findIndex(l => l.id === currentLesson.id)
    return worldLessons[idx + 1]?.id
  }

  return (
    <div className="min-h-screen bg-[#0A0618] font-nunito">
      {/* Ambient background */}
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

      <Header
        progress={progress}
        onHome={() => handleNavigate({ screen: 'home', currentLessonId: undefined })}
        showBack={appState.screen === 'lesson'}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {appState.screen === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeScreen
                progress={progress}
                onNavigate={handleNavigate}
                isWorldUnlocked={isWorldUnlocked}
                getLessonProgress={getLessonProgress}
                isLessonUnlocked={isLessonUnlocked}
              />
            </motion.div>
          )}

          {appState.screen === 'lesson' && currentLesson && currentWorld && (
            <motion.div
              key={`lesson-${currentLesson.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <LessonScreen
                lesson={currentLesson}
                world={currentWorld}
                onNavigate={handleNavigate}
                completeLesson={completeLesson}
                existingProgress={getLessonProgress(currentLesson.id)}
                nextLessonId={getNextLessonId()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
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
        <Route path="/app" element={<GameApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  )
}
