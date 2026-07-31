let audioCtx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext()
  return audioCtx
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.3, startOffset = 0) {
  try {
    const ctx = getCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = type
    osc.frequency.value = freq
    const start = ctx.currentTime + startOffset
    gain.gain.setValueAtTime(volume, start)
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
    osc.start(start)
    osc.stop(start + duration + 0.05)
  } catch {
    // Audio may be blocked
  }
}

export function playSuccess() {
  const notes = [523, 659, 784, 1047]
  notes.forEach((freq, i) => playTone(freq, 0.25, 'sine', 0.25, i * 0.1))
}

export function playLevelUp() {
  const notes = [392, 494, 587, 784, 988]
  notes.forEach((freq, i) => playTone(freq, 0.3, 'sine', 0.3, i * 0.12))
}

export function playCollect() {
  playTone(880, 0.1, 'sine', 0.15)
  playTone(1100, 0.08, 'sine', 0.1, 0.08)
}

export function playError() {
  playTone(220, 0.3, 'square', 0.15)
  playTone(180, 0.3, 'square', 0.1, 0.15)
}

export function playMove() {
  playTone(440, 0.06, 'sine', 0.08)
}

export function playClick() {
  playTone(660, 0.06, 'sine', 0.1)
}
