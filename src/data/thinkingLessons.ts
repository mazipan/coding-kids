import type { ThinkingLesson } from '../types'

export const THINKING_LESSONS: ThinkingLesson[] = [
  // ── Pattern World ────────────────────────────────────────────
  {
    id: 'patterns-0',
    worldId: 'patterns',
    number: 0,
    title: { en: 'Apple or Banana?', id: 'Apel atau Pisang?' },
    mascotMessage: { en: 'Look at the pattern! What comes next? 🤔', id: 'Lihat polanya! Apa yang berikutnya? 🤔' },
    xpReward: 10,
    puzzle: {
      type: 'pattern',
      items: ['🍎', '🍌', '🍎', '🍌', '?'],
      blankIndex: 4,
      options: ['🍎', '🍊', '🍇', '🍌'],
      answer: '🍎',
    },
  },
  {
    id: 'patterns-1',
    worldId: 'patterns',
    number: 1,
    title: { en: 'Stars and Moons', id: 'Bintang dan Bulan' },
    mascotMessage: { en: 'Two stars, then one moon... what\'s missing? ⭐', id: 'Dua bintang, lalu satu bulan... apa yang hilang? ⭐' },
    xpReward: 10,
    puzzle: {
      type: 'pattern',
      items: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'],
      blankIndex: 5,
      options: ['⭐', '🌙', '☀️', '🌟'],
      answer: '🌙',
    },
  },
  {
    id: 'patterns-2',
    worldId: 'patterns',
    number: 2,
    title: { en: 'Animal Friends', id: 'Teman Hewan' },
    mascotMessage: { en: 'Three different animals keep repeating. Who\'s next? 🐾', id: 'Tiga hewan berbeda terus berulang. Siapa selanjutnya? 🐾' },
    xpReward: 10,
    puzzle: {
      type: 'pattern',
      items: ['🐱', '🐶', '🐸', '🐱', '🐶', '?'],
      blankIndex: 5,
      options: ['🐶', '🐱', '🐸', '🐻'],
      answer: '🐸',
    },
  },
  {
    id: 'patterns-3',
    worldId: 'patterns',
    number: 3,
    title: { en: 'Fruit Salad', id: 'Salad Buah' },
    mascotMessage: { en: 'One grape hides between the oranges. Find the pattern! 🍇', id: 'Satu anggur bersembunyi di antara jeruk. Temukan polanya! 🍇' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['🍊', '🍊', '🍇', '🍊', '🍊', '?'],
      blankIndex: 5,
      options: ['🍊', '🍇', '🍎', '🍌'],
      answer: '🍇',
    },
  },
  {
    id: 'patterns-4',
    worldId: 'patterns',
    number: 4,
    title: { en: 'Sun and Rain', id: 'Matahari dan Hujan' },
    mascotMessage: { en: 'The weather keeps changing in a pattern. What\'s next? ☀️', id: 'Cuaca terus berubah dalam pola. Apa yang berikutnya? ☀️' },
    xpReward: 15,
    puzzle: {
      type: 'pattern',
      items: ['☀️', '🌧️', '☀️', '🌧️', '?'],
      blankIndex: 4,
      options: ['🌧️', '☀️', '⛅', '🌩️'],
      answer: '☀️',
    },
  },

  // ── Logic World ──────────────────────────────────────────────
  {
    id: 'logic-0',
    worldId: 'logic',
    number: 0,
    title: { en: 'Rainy Day', id: 'Hari Hujan' },
    mascotMessage: { en: 'IF it\'s raining, what do you need? Think carefully! 🤔', id: 'JIKA hujan, apa yang kamu butuhkan? Pikirkan baik-baik! 🤔' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF it is raining outside...', id: 'JIKA hujan di luar...' },
      options: [
        { id: 'umbrella', emoji: '☂️', label: { en: 'Take an umbrella', id: 'Bawa payung' } },
        { id: 'sunglasses', emoji: '😎', label: { en: 'Wear sunglasses', id: 'Pakai kacamata hitam' } },
        { id: 'swim', emoji: '🏊', label: { en: 'Go swimming', id: 'Pergi berenang' } },
        { id: 'ski', emoji: '⛷️', label: { en: 'Go skiing', id: 'Pergi ski' } },
      ],
      answerId: 'umbrella',
    },
  },
  {
    id: 'logic-1',
    worldId: 'logic',
    number: 1,
    title: { en: 'Traffic Light', id: 'Lampu Lalu Lintas' },
    mascotMessage: { en: 'Traffic lights give us conditions. What should you do? 🚦', id: 'Lampu lalu lintas memberi kondisi. Apa yang harus kamu lakukan? 🚦' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF the traffic light is RED...', id: 'JIKA lampu lalu lintas MERAH...' },
      options: [
        { id: 'stop', emoji: '🛑', label: { en: 'STOP and wait', id: 'BERHENTI dan tunggu' } },
        { id: 'go', emoji: '🚗', label: { en: 'Drive faster!', id: 'Berkendara lebih cepat!' } },
        { id: 'honk', emoji: '📢', label: { en: 'Honk the horn', id: 'Bunyikan klakson' } },
        { id: 'turn', emoji: '↩️', label: { en: 'Turn around', id: 'Putar balik' } },
      ],
      answerId: 'stop',
    },
  },
  {
    id: 'logic-2',
    worldId: 'logic',
    number: 2,
    title: { en: 'Hungry Time', id: 'Waktu Lapar' },
    mascotMessage: { en: 'What do you do when you\'re hungry? Use your logic! 🍕', id: 'Apa yang kamu lakukan saat lapar? Gunakan logikamu! 🍕' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF you are hungry...', id: 'JIKA kamu lapar...' },
      options: [
        { id: 'eat', emoji: '🍕', label: { en: 'Eat some food', id: 'Makan makanan' } },
        { id: 'sleep', emoji: '😴', label: { en: 'Go to sleep', id: 'Pergi tidur' } },
        { id: 'run', emoji: '🏃', label: { en: 'Go for a run', id: 'Pergi berlari' } },
        { id: 'read', emoji: '📚', label: { en: 'Read a book', id: 'Baca buku' } },
      ],
      answerId: 'eat',
    },
  },
  {
    id: 'logic-3',
    worldId: 'logic',
    number: 3,
    title: { en: 'Day or Night?', id: 'Siang atau Malam?' },
    mascotMessage: { en: 'What can you see in the sky at night? 🌙', id: 'Apa yang bisa kamu lihat di langit malam? 🌙' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF it is nighttime...', id: 'JIKA hari sudah malam...' },
      options: [
        { id: 'moon', emoji: '🌙', label: { en: 'Moon and stars appear', id: 'Bulan dan bintang muncul' } },
        { id: 'sun', emoji: '☀️', label: { en: 'Bright sunshine', id: 'Sinar matahari cerah' } },
        { id: 'rainbow', emoji: '🌈', label: { en: 'A rainbow appears', id: 'Pelangi muncul' } },
        { id: 'clouds', emoji: '⛅', label: { en: 'White puffy clouds', id: 'Awan putih mengembang' } },
      ],
      answerId: 'moon',
    },
  },
  {
    id: 'logic-4',
    worldId: 'logic',
    number: 4,
    title: { en: 'Bigger Than 5', id: 'Lebih Besar dari 5' },
    mascotMessage: { en: 'Which number is bigger than 5? Think! 🔢', id: 'Angka mana yang lebih besar dari 5? Pikirkan! 🔢' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF a number is bigger than 5, which one fits?', id: 'JIKA sebuah angka lebih besar dari 5, mana yang cocok?' },
      options: [
        { id: 'seven', emoji: '7️⃣', label: { en: '7', id: '7' } },
        { id: 'three', emoji: '3️⃣', label: { en: '3', id: '3' } },
        { id: 'one', emoji: '1️⃣', label: { en: '1', id: '1' } },
        { id: 'four', emoji: '4️⃣', label: { en: '4', id: '4' } },
      ],
      answerId: 'seven',
    },
  },

  // ── Counting World ───────────────────────────────────────────
  {
    id: 'counting-0',
    worldId: 'counting',
    number: 0,
    title: { en: 'Count by Twos', id: 'Hitung per Dua' },
    mascotMessage: { en: 'Skip-counting is a superpower! 2, 4, 6, 8... what\'s next? 🔢', id: 'Menghitung loncat itu keren! 2, 4, 6, 8... apa selanjutnya? 🔢' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '2,  4,  6,  8,  ___', id: '2,  4,  6,  8,  ___' },
      visual: '🔢',
      options: ['9', '10', '11', '12'],
      answer: '10',
    },
  },
  {
    id: 'counting-1',
    worldId: 'counting',
    number: 1,
    title: { en: 'Missing Number', id: 'Angka yang Hilang' },
    mascotMessage: { en: 'One number is hiding! 5 + ? = 8. Can you find it? 🤫', id: 'Satu angka bersembunyi! 5 + ? = 8. Bisakah kamu menemukannya? 🤫' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '5 + ___ = 8', id: '5 + ___ = 8' },
      visual: '🧮',
      options: ['1', '2', '3', '4'],
      answer: '3',
    },
  },
  {
    id: 'counting-2',
    worldId: 'counting',
    number: 2,
    title: { en: 'Fruit Bowl', id: 'Mangkuk Buah' },
    mascotMessage: { en: 'How many apples in total? Count all of them! 🍎', id: 'Berapa total apel? Hitung semuanya! 🍎' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '🍎🍎🍎  +  🍎🍎  =  ___', id: '🍎🍎🍎  +  🍎🍎  =  ___' },
      visual: '🍎',
      options: ['4', '5', '6', '7'],
      answer: '5',
    },
  },
  {
    id: 'counting-3',
    worldId: 'counting',
    number: 3,
    title: { en: 'Star Count', id: 'Hitung Bintang' },
    mascotMessage: { en: 'Count all the stars carefully! How many are there? ⭐', id: 'Hitung semua bintang dengan hati-hati! Berapa jumlahnya? ⭐' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '⭐⭐⭐⭐⭐⭐⭐  =  ___', id: '⭐⭐⭐⭐⭐⭐⭐  =  ___' },
      visual: '⭐',
      options: ['5', '6', '7', '8'],
      answer: '7',
    },
  },
  {
    id: 'counting-4',
    worldId: 'counting',
    number: 4,
    title: { en: 'Take Away', id: 'Kurangi' },
    mascotMessage: { en: 'Something was taken away! 10 - ? = 6. What was taken? 🎩', id: 'Sesuatu diambil! 10 - ? = 6. Apa yang diambil? 🎩' },
    xpReward: 20,
    puzzle: {
      type: 'math',
      question: { en: '10 - ___ = 6', id: '10 - ___ = 6' },
      visual: '🎩',
      options: ['2', '3', '4', '5'],
      answer: '4',
    },
  },
]

export function getThinkingLessonsByWorld(worldId: string): ThinkingLesson[] {
  return THINKING_LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getThinkingLessonByNumber(worldId: string, number: number): ThinkingLesson | undefined {
  return THINKING_LESSONS.find(l => l.worldId === worldId && l.number === number)
}
