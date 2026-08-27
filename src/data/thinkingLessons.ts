import type { ThinkingLesson } from '../types'
import { THINKING_LESSONS_ADVANCED } from './thinkingLessonsAdvanced'

/** Lessons 0–9 of every world — the tier that teaches each world's core idea. */
const THINKING_LESSONS_CORE: ThinkingLesson[] = [
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
    title: { en: 'Growing Stars', id: 'Bintang yang Bertumbuh' },
    mascotMessage: { en: 'Each step adds ONE more star than the step before. What belongs in the missing spot? ⭐', id: 'Setiap langkah menambahkan SATU bintang lebih dari langkah sebelumnya. Apa yang ada di tempat yang hilang? ⭐' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['⭐', '⭐⭐', '⭐⭐⭐', '?', '⭐⭐⭐⭐⭐'],
      blankIndex: 3,
      options: ['⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐⭐'],
      answer: '⭐⭐⭐⭐',
    },
  },
  {
    id: 'patterns-4',
    worldId: 'patterns',
    number: 4,
    title: { en: 'Mirror Mirror', id: 'Cermin Cermin' },
    mascotMessage: { en: 'This pattern mirrors itself — ABBA, ABBA... spot the symmetry and find what\'s missing! 🪞', id: 'Pola ini mencerminkan dirinya sendiri — ABBA, ABBA... temukan simetrinya dan cari yang hilang! 🪞' },
    xpReward: 15,
    puzzle: {
      type: 'pattern',
      items: ['🔴', '🟡', '🟡', '🔴', '🔴', '?'],
      blankIndex: 5,
      options: ['🔴', '🟡', '🟢', '🔵'],
      answer: '🟡',
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
    title: { en: 'Both or Nothing', id: 'Dua Syarat atau Tidak Sama Sekali' },
    mascotMessage: { en: 'When a rule says AND, you need BOTH conditions to be met — one is not enough! ☀️📚', id: 'Ketika aturan berkata DAN, kedua kondisi harus terpenuhi — satu saja tidak cukup! ☀️📚' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Mia can only go to the park if the sun is shining AND she has finished her homework. She finished her homework — but it is raining. So Mia CAN go to the park.', id: 'Mia hanya bisa pergi ke taman jika matahari bersinar DAN dia sudah menyelesaikan PR-nya. Dia sudah menyelesaikan PR — tapi sedang hujan. Jadi Mia BISA pergi ke taman.' },
      answer: false,
    },
  },
  {
    id: 'logic-2',
    worldId: 'logic',
    number: 2,
    title: { en: 'Taller Than', id: 'Lebih Tinggi Dari' },
    mascotMessage: { en: 'If A is taller than B, and B is taller than C... what about A and C? 📏', id: 'Jika A lebih tinggi dari B, dan B lebih tinggi dari C... bagaimana dengan A dan C? 📏' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Andi is taller than Budi. Budi is taller than Cici. So Andi MUST be taller than Cici.', id: 'Andi lebih tinggi dari Budi. Budi lebih tinggi dari Cici. Maka Andi PASTI lebih tinggi dari Cici.' },
      answer: true,
    },
  },
  {
    id: 'logic-3',
    worldId: 'logic',
    number: 3,
    title: { en: 'All Pets Are Dogs?', id: 'Semua Hewan Peliharaan Anjing?' },
    mascotMessage: { en: 'Careful — just because all dogs are pets doesn\'t mean all pets are dogs! 🐱', id: 'Hati-hati — karena semua anjing adalah peliharaan bukan berarti semua peliharaan adalah anjing! 🐱' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'All dogs are pets. Rex is a pet. Therefore Rex must be a dog.', id: 'Semua anjing adalah hewan peliharaan. Rex adalah hewan peliharaan. Maka Rex pasti seekor anjing.' },
      answer: false,
    },
  },
  {
    id: 'logic-4',
    worldId: 'logic',
    number: 4,
    title: { en: 'Full Shelf', id: 'Rak Penuh' },
    mascotMessage: { en: 'The shelf has a limit! What happens when you try to go over it? 📚', id: 'Rak punya batas! Apa yang terjadi ketika kamu mencoba melebihinya? 📚' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A shelf holds EXACTLY 10 books. There are 8 books there now. You try to add 3 MORE. What happens?',
        id: 'Sebuah rak menampung TEPAT 10 buku. Ada 8 buku di sana sekarang. Kamu mencoba menambah 3 LAGI. Apa yang terjadi?',
      },
      options: [
        { id: 'overflow', emoji: '📚', label: { en: 'It overflows — 11 books won\'t fit', id: 'Kelebihan — 11 buku tidak muat' } },
        { id: 'fine', emoji: '✅', label: { en: 'It works fine, no problem', id: 'Tidak masalah, baik-baik saja' } },
        { id: 'break', emoji: '💥', label: { en: 'The shelf magically gets bigger', id: 'Rak secara ajaib membesar' } },
        { id: 'vanish', emoji: '✨', label: { en: 'The extra books disappear', id: 'Buku lebih menghilang' } },
      ],
      answerId: 'overflow',
    },
  },

  // ── Pattern World (lessons 5–9) ──────────────────────────────
  {
    id: 'patterns-5',
    worldId: 'patterns',
    number: 5,
    title: { en: 'Missing in the Middle', id: 'Hilang di Tengah' },
    mascotMessage: { en: 'This time the blank is hiding in the MIDDLE! 🚗✈️🚢', id: 'Kali ini yang hilang ada di TENGAH! 🚗✈️🚢' },
    xpReward: 15,
    puzzle: {
      type: 'pattern',
      items: ['🚗', '✈️', '🚢', '🚗', '?', '🚢', '🚗', '✈️', '🚢'],
      blankIndex: 4,
      options: ['🚗', '✈️', '🚢', '🚂'],
      answer: '✈️',
    },
  },
  {
    id: 'patterns-6',
    worldId: 'patterns',
    number: 6,
    title: { en: 'Moon Journey', id: 'Perjalanan Bulan' },
    mascotMessage: { en: 'The moon changes shape every night in order. Find the missing phase! 🌙', id: 'Bulan berubah bentuk setiap malam secara berurutan. Temukan fase yang hilang! 🌙' },
    xpReward: 18,
    puzzle: {
      type: 'pattern',
      items: ['🌑', '🌒', '🌓', '?', '🌕', '🌖', '🌗', '🌘'],
      blankIndex: 3,
      options: ['🌔', '🌕', '🌙', '🌛'],
      answer: '🌔',
    },
  },
  {
    id: 'patterns-7',
    worldId: 'patterns',
    number: 7,
    title: { en: 'Four Seasons', id: 'Empat Musim' },
    mascotMessage: { en: 'Four things repeat in order. The blank is near the end — stay focused! 🍂', id: 'Empat hal berulang berurutan. Yang hilang ada di dekat akhir — tetap fokus! 🍂' },
    xpReward: 20,
    puzzle: {
      type: 'pattern',
      items: ['🌸', '☀️', '🍂', '❄️', '🌸', '☀️', '?', '❄️'],
      blankIndex: 6,
      options: ['🌸', '☀️', '🍂', '🌧️'],
      answer: '🍂',
    },
  },
  {
    id: 'patterns-8',
    worldId: 'patterns',
    number: 8,
    title: { en: 'Odd Numbers', id: 'Angka Ganjil' },
    mascotMessage: { en: 'These numbers jump by 2 each time! Find the one that\'s missing 🔢', id: 'Angka-angka ini melompat 2 setiap kali! Temukan yang hilang 🔢' },
    xpReward: 22,
    puzzle: {
      type: 'pattern',
      items: ['1', '3', '5', '7', '?', '11'],
      blankIndex: 4,
      options: ['8', '9', '10', '12'],
      answer: '9',
    },
  },
  {
    id: 'patterns-9',
    worldId: 'patterns',
    number: 9,
    title: { en: 'Double Trouble', id: 'Gandakan Dua Kali' },
    mascotMessage: { en: 'Each number is DOUBLE the one before. Can you find the missing one? 🤯', id: 'Setiap angka DUA KALI lebih besar dari sebelumnya. Bisakah kamu menemukannya? 🤯' },
    xpReward: 25,
    puzzle: {
      type: 'pattern',
      items: ['1', '2', '4', '?', '16', '32'],
      blankIndex: 3,
      options: ['6', '8', '10', '12'],
      answer: '8',
    },
  },

  // ── Logic World (lessons 5–9) ─────────────────────────────────
  {
    id: 'logic-5',
    worldId: 'logic',
    number: 5,
    title: { en: 'The Locked Door', id: 'Pintu Terkunci' },
    mascotMessage: { en: 'Read the rule carefully — then apply it! 🔑', id: 'Baca aturannya dengan teliti — lalu terapkan! 🔑' },
    xpReward: 18,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You can only open the door IF you have the key. Mia does NOT have the key. What happens?',
        id: 'Kamu hanya bisa membuka pintu JIKA punya kunci. Mia TIDAK punya kunci. Apa yang terjadi?',
      },
      options: [
        { id: 'cant', emoji: '🚫', label: { en: 'Mia cannot open the door', id: 'Mia tidak bisa membuka pintu' } },
        { id: 'can', emoji: '🚪', label: { en: 'Mia opens the door anyway', id: 'Mia membuka pintu juga' } },
        { id: 'break', emoji: '🔨', label: { en: 'The door breaks by itself', id: 'Pintu hancur sendiri' } },
        { id: 'new', emoji: '🗝️', label: { en: 'A new key appears magically', id: 'Kunci baru muncul secara ajaib' } },
      ],
      answerId: 'cant',
    },
  },
  {
    id: 'logic-6',
    worldId: 'logic',
    number: 6,
    title: { en: 'Library Day', id: 'Hari Perpustakaan' },
    mascotMessage: { en: 'Read the rule carefully, then apply it to TODAY. Only one answer can be right! 📚', id: 'Baca aturannya dengan hati-hati, lalu terapkan untuk HARI INI. Hanya satu jawaban yang bisa benar! 📚' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule: The school library is open ONLY on weekdays (Monday–Friday). Today is Thursday. What MUST be true?',
        id: 'Aturan: Perpustakaan sekolah buka HANYA pada hari kerja (Senin–Jumat). Hari ini Kamis. Apa yang PASTI benar?',
      },
      options: [
        { id: 'open',    emoji: '📖', label: { en: 'The library is open today',      id: 'Perpustakaan buka hari ini' } },
        { id: 'closed',  emoji: '🚫', label: { en: 'The library is closed today',     id: 'Perpustakaan tutup hari ini' } },
        { id: 'weekend', emoji: '🌙', label: { en: 'Today must be the weekend',       id: 'Hari ini pasti akhir pekan' } },
        { id: 'unknown', emoji: '❓', label: { en: 'We cannot tell from the rule', id: 'Kita tidak bisa tahu dari aturannya' } },
      ],
      answerId: 'open',
    },
  },
  {
    id: 'logic-7',
    worldId: 'logic',
    number: 7,
    title: { en: 'Secret Password', id: 'Kata Sandi Rahasia' },
    mascotMessage: { en: 'The password must follow TWO rules at once! Read carefully before choosing. 🔐', id: 'Kata sandi harus mengikuti DUA aturan sekaligus! Baca dengan cermat sebelum memilih. 🔐' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A password must be EXACTLY 4 digits AND start with the number 7. Which password is correct?',
        id: 'Kata sandi harus TEPAT 4 angka DAN dimulai dengan angka 7. Kata sandi mana yang benar?',
      },
      options: [
        { id: 'correct', emoji: '🔐', label: { en: '7342', id: '7342' } },
        { id: 'wrong1', emoji: '❌', label: { en: '4721 — starts with 4', id: '4721 — mulai dengan 4' } },
        { id: 'wrong2', emoji: '❌', label: { en: '35714 — five digits', id: '35714 — lima angka' } },
        { id: 'wrong3', emoji: '❌', label: { en: '7 — only one digit', id: '7 — hanya satu angka' } },
      ],
      answerId: 'correct',
    },
  },
  {
    id: 'logic-8',
    worldId: 'logic',
    number: 8,
    title: { en: 'Match the Action', id: 'Cocokkan Tindakannya' },
    mascotMessage: { en: 'Match each situation to the right action! 🔗', id: 'Cocokkan setiap situasi dengan tindakan yang tepat! 🔗' },
    xpReward: 22,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'cold', leftEmoji: '🥶', leftLabel: { en: 'It is very cold outside', id: 'Cuaca sangat dingin di luar' },
          rightId: 'jacket', rightEmoji: '🧥', rightLabel: { en: 'Put on a warm jacket', id: 'Pakai jaket hangat' },
        },
        {
          leftId: 'bedtime', leftEmoji: '🛏️', leftLabel: { en: "It's bedtime", id: 'Waktunya tidur' },
          rightId: 'sleep', rightEmoji: '😴', rightLabel: { en: 'Brush teeth and sleep', id: 'Gosok gigi dan tidur' },
        },
        {
          leftId: 'sick', leftEmoji: '🤒', leftLabel: { en: 'You feel sick', id: 'Kamu merasa sakit' },
          rightId: 'doctor', rightEmoji: '🩺', rightLabel: { en: 'Rest and see a doctor', id: 'Istirahat dan temui dokter' },
        },
      ],
    },
  },
  {
    id: 'logic-9',
    worldId: 'logic',
    number: 9,
    title: { en: 'Triangle or Not?', id: 'Segitiga atau Bukan?' },
    mascotMessage: { en: 'Read both clues carefully before you answer! 🔺', id: 'Baca kedua petunjuk dengan cermat sebelum menjawab! 🔺' },
    xpReward: 25,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'IF a shape has exactly 3 sides, it IS a triangle. Shape X has 4 sides. What can we say about Shape X?',
        id: 'JIKA sebuah bangun punya tepat 3 sisi, maka itu SEGITIGA. Bangun X punya 4 sisi. Apa yang bisa kita simpulkan tentang Bangun X?',
      },
      options: [
        { id: 'not', emoji: '🔷', label: { en: 'Shape X is NOT a triangle', id: 'Bangun X BUKAN segitiga' } },
        { id: 'is', emoji: '🔺', label: { en: 'Shape X IS a triangle', id: 'Bangun X ADALAH segitiga' } },
        { id: 'maybe', emoji: '🤷', label: { en: 'We cannot tell', id: 'Kita tidak bisa tahu' } },
        { id: 'circle', emoji: '⭕', label: { en: 'Shape X is a circle', id: 'Bangun X adalah lingkaran' } },
      ],
      answerId: 'not',
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

  // ── Counting World (lessons 5–9) ────────────────────────────
  {
    id: 'counting-5',
    worldId: 'counting',
    number: 5,
    title: { en: 'Find the Missing Addend', id: 'Cari Suku yang Hilang' },
    mascotMessage: { en: 'The mystery number is on the LEFT this time! Work backwards 🔍', id: 'Angka misterius ada di KIRI kali ini! Kerjakan mundur 🔍' },
    xpReward: 20,
    puzzle: {
      type: 'math',
      question: { en: '___ + 17 = 25', id: '___ + 17 = 25' },
      visual: '🔍',
      options: ['6', '7', '8', '9'],
      answer: '8',
    },
  },
  {
    id: 'counting-6',
    worldId: 'counting',
    number: 6,
    title: { en: 'Multiplication!', id: 'Perkalian!' },
    mascotMessage: { en: '6 groups of 4 — or count up by 4 six times! 🧮', id: '6 kelompok berisi 4 — atau hitung loncat 4 sebanyak 6 kali! 🧮' },
    xpReward: 22,
    puzzle: {
      type: 'math',
      question: { en: '6 × 4 = ___', id: '6 × 4 = ___' },
      visual: '🧮',
      options: ['20', '22', '24', '26'],
      answer: '24',
    },
  },
  {
    id: 'counting-7',
    worldId: 'counting',
    number: 7,
    title: { en: 'Division Detective', id: 'Detektif Pembagian' },
    mascotMessage: { en: 'Something was split into 4 equal groups, each with 9 items. How big was the original pile? Work backwards! 🔍', id: 'Sesuatu dibagi menjadi 4 kelompok, masing-masing berisi 9. Berapa jumlah awalnya? Kerjakan mundur! 🔍' },
    xpReward: 22,
    puzzle: {
      type: 'fill-in',
      question: { en: '___ ÷ 4 = 9', id: '___ ÷ 4 = 9' },
      visual: '🔍',
      answer: '36',
    },
  },
  {
    id: 'counting-8',
    worldId: 'counting',
    number: 8,
    title: { en: 'Reverse Multiply', id: 'Perkalian Terbalik' },
    mascotMessage: { en: 'Which number times 5 gives 35? Type it in! 🖐️', id: 'Angka berapa dikali 5 sama dengan 35? Ketikkan! 🖐️' },
    xpReward: 25,
    puzzle: {
      type: 'fill-in',
      question: { en: '___ × 5 = 35', id: '___ × 5 = 35' },
      visual: '🖐️',
      answer: '7',
    },
  },
  {
    id: 'counting-9',
    worldId: 'counting',
    number: 9,
    title: { en: 'Brackets First!', id: 'Kurung Dulu!' },
    mascotMessage: { en: 'Solve the brackets FIRST, then multiply. This is the boss level! 🏆', id: 'Selesaikan kurung DULU, lalu kalikan. Ini level bos! 🏆' },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: { en: '(4 + 6) × 3 = ___', id: '(4 + 6) × 3 = ___' },
      visual: '🏆',
      options: ['24', '27', '30', '33'],
      answer: '30',
    },
  },

  // ── Memory Maze ──────────────────────────────────────────────
  // Memory Maze focuses on RECALLING associations and positions — NOT predicting what comes next.
  // Blanks are placed at position 0, 1, or mid-sequence (never at the end, which is Patterns World).
  // Match and sort puzzles reinforce associative memory.
  {
    id: 'memory-0',
    worldId: 'memory',
    number: 0,
    title: { en: 'Who Says What?', id: 'Siapa yang Bersuara Apa?' },
    mascotMessage: { en: 'Match each animal to the sound it makes! 🎶', id: 'Cocokkan setiap hewan dengan suaranya! 🎶' },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'cow', leftEmoji: '🐮', leftLabel: { en: 'Cow', id: 'Sapi' },
          rightId: 'moo', rightEmoji: '💬', rightLabel: { en: 'Moo!', id: 'Muuu!' },
        },
        {
          leftId: 'frog', leftEmoji: '🐸', leftLabel: { en: 'Frog', id: 'Katak' },
          rightId: 'ribbit', rightEmoji: '💬', rightLabel: { en: 'Ribbit!', id: 'Kwek!' },
        },
        {
          leftId: 'lion', leftEmoji: '🦁', leftLabel: { en: 'Lion', id: 'Singa' },
          rightId: 'roar', rightEmoji: '💬', rightLabel: { en: 'Roar!', id: 'Rawr!' },
        },
      ],
    },
  },
  {
    id: 'memory-1',
    worldId: 'memory',
    number: 1,
    title: { en: 'What Was First?', id: 'Apa yang Pertama?' },
    mascotMessage: { en: 'The FIRST sea creature is missing! What was it? 🌊', id: 'Makhluk laut PERTAMA hilang! Apa itu? 🌊' },
    xpReward: 10,
    puzzle: {
      type: 'pattern',
      items: ['?', '🦑', '🐙', '🐠', '🦑', '🐙'],
      blankIndex: 0,
      options: ['🐠', '🦀', '🐡', '🦞'],
      answer: '🐠',
    },
  },
  {
    id: 'memory-2',
    worldId: 'memory',
    number: 2,
    title: { en: 'Second in Line', id: 'Kedua dalam Barisan' },
    mascotMessage: { en: 'These tools keep repeating — but the SECOND one went missing! 🔧', id: 'Alat-alat ini terus berulang — tapi yang KEDUA hilang! 🔧' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['🔨', '?', '🪛', '🔨', '🔧', '🪛'],
      blankIndex: 1,
      options: ['🔧', '🪛', '🔩', '⚙️'],
      answer: '🔧',
    },
  },
  {
    id: 'memory-3',
    worldId: 'memory',
    number: 3,
    title: { en: 'Sport Spot', id: 'Temukan Olahraga' },
    mascotMessage: { en: 'Four sports repeat in a long chain. The SECOND sport is hiding! 🏅', id: 'Empat olahraga berulang dalam rantai panjang. Olahraga KEDUA bersembunyi! 🏅' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['⚽', '?', '🎾', '🏈', '⚽', '🏀', '🎾', '🏈'],
      blankIndex: 1,
      options: ['🏀', '🎾', '🏈', '🏐'],
      answer: '🏀',
    },
  },
  {
    id: 'memory-4',
    worldId: 'memory',
    number: 4,
    title: { en: 'Season Fun', id: 'Kesenangan Musim' },
    mascotMessage: { en: 'Each season has its own activity! Can you remember which goes with which? 🍂', id: 'Setiap musim punya aktivitasnya sendiri! Bisakah kamu mengingat yang mana? 🍂' },
    xpReward: 15,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'winter', leftEmoji: '❄️', leftLabel: { en: 'Winter', id: 'Musim Dingin' },
          rightId: 'ski', rightEmoji: '⛷️', rightLabel: { en: 'Skiing', id: 'Bermain Ski' },
        },
        {
          leftId: 'summer', leftEmoji: '☀️', leftLabel: { en: 'Summer', id: 'Musim Panas' },
          rightId: 'swim', rightEmoji: '🏊', rightLabel: { en: 'Swimming', id: 'Berenang' },
        },
        {
          leftId: 'spring', leftEmoji: '🌸', leftLabel: { en: 'Spring', id: 'Musim Semi' },
          rightId: 'garden', rightEmoji: '🌺', rightLabel: { en: 'Gardening', id: 'Berkebun' },
        },
      ],
    },
  },
  {
    id: 'memory-5',
    worldId: 'memory',
    number: 5,
    title: { en: 'Hidden Feelings', id: 'Perasaan Tersembunyi' },
    mascotMessage: { en: 'Three faces repeat — one is hiding DEEP in the middle! 😊', id: 'Tiga wajah berulang — satu bersembunyi JAUH di tengah! 😊' },
    xpReward: 15,
    puzzle: {
      type: 'pattern',
      items: ['😀', '😢', '😡', '😀', '?', '😡', '😀', '😢', '😡'],
      blankIndex: 4,
      options: ['😢', '😀', '😡', '😲'],
      answer: '😢',
    },
  },
  {
    id: 'memory-6',
    worldId: 'memory',
    number: 6,
    title: { en: 'Tiny to Giant', id: 'Kecil ke Raksasa' },
    mascotMessage: { en: 'Put these animals in order from SMALLEST to BIGGEST! 🐘', id: 'Urutkan hewan-hewan ini dari yang TERKECIL ke yang TERBESAR! 🐘' },
    xpReward: 18,
    puzzle: {
      type: 'sort',
      items: ['🐘', '🐜', '🐄', '🐝', '🐈'],
      answer: ['🐜', '🐝', '🐈', '🐄', '🐘'],
    },
  },
  {
    id: 'memory-7',
    worldId: 'memory',
    number: 7,
    title: { en: 'Where Does It Come From?', id: 'Dari Mana Asalnya?' },
    mascotMessage: { en: 'Match each food to where it actually comes from! 🌾', id: 'Cocokkan setiap makanan dengan asalnya yang sebenarnya! 🌾' },
    xpReward: 20,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'apple', leftEmoji: '🍎', leftLabel: { en: 'Apple', id: 'Apel' },
          rightId: 'tree', rightEmoji: '🌳', rightLabel: { en: 'Grows on a tree', id: 'Tumbuh di pohon' },
        },
        {
          leftId: 'egg', leftEmoji: '🥚', leftLabel: { en: 'Egg', id: 'Telur' },
          rightId: 'chicken', rightEmoji: '🐔', rightLabel: { en: 'Laid by a chicken', id: 'Dari ayam' },
        },
        {
          leftId: 'butter', leftEmoji: '🧈', leftLabel: { en: 'Butter', id: 'Mentega' },
          rightId: 'cow', rightEmoji: '🐄', rightLabel: { en: 'Made from cow milk', id: 'Dari susu sapi' },
        },
        {
          leftId: 'honey', leftEmoji: '🍯', leftLabel: { en: 'Honey', id: 'Madu' },
          rightId: 'bee', rightEmoji: '🐝', rightLabel: { en: 'Made by bees', id: 'Dibuat oleh lebah' },
        },
      ],
    },
  },
  {
    id: 'memory-8',
    worldId: 'memory',
    number: 8,
    title: { en: 'Kitchen Mystery', id: 'Misteri Dapur' },
    mascotMessage: { en: 'Four kitchen items repeat — one near the start went missing! Can you recall it? 🍳', id: 'Empat alat dapur berulang — satu di dekat awal hilang! Bisakah kamu mengingatnya? 🍳' },
    xpReward: 22,
    puzzle: {
      type: 'pattern',
      items: ['🍲', '🥄', '?', '🍴', '🍲', '🥄', '🔪', '🍴'],
      blankIndex: 2,
      options: ['🔪', '🍴', '🥄', '🍳'],
      answer: '🔪',
    },
  },
  {
    id: 'memory-9',
    worldId: 'memory',
    number: 9,
    title: { en: 'Shape Sequence', id: 'Urutan Bentuk' },
    mascotMessage: { en: 'Five shapes repeat in a long chain! The missing one is buried in the middle — stay sharp! 🔶', id: 'Lima bentuk berulang dalam rantai panjang! Yang hilang terkubur di tengah — tetap tajam! 🔶' },
    xpReward: 25,
    puzzle: {
      type: 'pattern',
      items: ['🔺', '🟦', '⭐', '?', '🔵', '🔺', '🟦', '⭐', '🔶', '🔵'],
      blankIndex: 3,
      options: ['🔶', '🔵', '🟦', '🟣'],
      answer: '🔶',
    },
  },

  // ── Nature Quest ─────────────────────────────────────────────
  {
    id: 'nature-0',
    worldId: 'nature',
    number: 0,
    title: { en: 'Thirsty Plant', id: 'Tanaman Haus' },
    mascotMessage: { en: 'Plants need water to survive! What happens without it? 🌿', id: 'Tanaman butuh air untuk bertahan! Apa yang terjadi tanpanya? 🌿' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: "IF a plant doesn't get any water...", id: 'JIKA tanaman tidak mendapat air...' },
      options: [
        { id: 'wilt', emoji: '🥀', label: { en: 'It wilts and dies', id: 'Ia layu dan mati' } },
        { id: 'grow', emoji: '🌳', label: { en: 'It grows taller', id: 'Ia tumbuh lebih tinggi' } },
        { id: 'blue', emoji: '💙', label: { en: 'It turns blue', id: 'Ia berubah biru' } },
        { id: 'fly', emoji: '🦋', label: { en: 'It flies away', id: 'Ia terbang pergi' } },
      ],
      answerId: 'wilt',
    },
  },
  {
    id: 'nature-1',
    worldId: 'nature',
    number: 1,
    title: { en: 'Hatching Time', id: 'Waktunya Menetas' },
    mascotMessage: { en: 'TRUE or FALSE — do all birds start their life as an egg? 🥚', id: 'BENAR atau SALAH — apakah semua burung memulai hidup sebagai telur? 🥚' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Baby birds always hatch from eggs — that is how ALL birds start their lives.', id: 'Anak burung selalu menetas dari telur — begitulah semua burung memulai hidupnya.' },
      answer: true,
    },
  },
  {
    id: 'nature-2',
    worldId: 'nature',
    number: 2,
    title: { en: 'Oil and Water', id: 'Minyak dan Air' },
    mascotMessage: { en: 'TRUE or FALSE — what happens when oil and water are mixed and left to settle? Think about what you\'ve seen in the kitchen! 🫙', id: 'BENAR atau SALAH — apa yang terjadi jika minyak dan air dicampur lalu dibiarkan? Pikirkan apa yang kamu lihat di dapur! 🫙' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'If you stir a glass of water and cooking oil hard enough, the oil will mix right into the water and stay mixed.', id: 'Jika kamu mengaduk segelas air dan minyak goreng cukup keras, minyaknya akan bercampur ke dalam air dan tetap tercampur.' },
      answer: false,
    },
  },
  {
    id: 'nature-3',
    worldId: 'nature',
    number: 3,
    title: { en: 'Spoiled Milk', id: 'Susu Basi' },
    mascotMessage: { en: 'What happens to food left out in the hot sun? Think about what heat does! 🥛', id: 'Apa yang terjadi pada makanan yang dibiarkan di panas matahari? Pikirkan apa yang panas lakukan! 🥛' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF you leave a glass of milk out in the hot sun for several hours...', id: 'JIKA kamu membiarkan segelas susu di bawah sinar matahari panas selama beberapa jam...' },
      options: [
        { id: 'spoil', emoji: '🤢', label: { en: 'It goes bad and smells sour', id: 'Ia menjadi basi dan berbau asam' } },
        { id: 'fresh', emoji: '🥛', label: { en: 'It stays perfectly fresh', id: 'Ia tetap segar sempurna' } },
        { id: 'freeze', emoji: '🧊', label: { en: 'It turns into ice cream', id: 'Ia berubah menjadi es krim' } },
        { id: 'cheese', emoji: '🧀', label: { en: 'It instantly becomes cheese', id: 'Langsung berubah menjadi keju' } },
      ],
      answerId: 'spoil',
    },
  },
  {
    id: 'nature-4',
    worldId: 'nature',
    number: 4,
    title: { en: 'Hungry Frog', id: 'Katak Lapar' },
    mascotMessage: { en: 'What do frogs eat? Think about what they catch! 🐸', id: 'Apa yang dimakan katak? Pikirkan apa yang mereka tangkap! 🐸' },
    xpReward: 18,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF a frog is hungry in the wild...', id: 'JIKA katak lapar di alam liar...' },
      options: [
        { id: 'bugs', emoji: '🦟', label: { en: 'It eats insects', id: 'Ia makan serangga' } },
        { id: 'leaves', emoji: '🍃', label: { en: 'It eats leaves', id: 'Ia makan daun' } },
        { id: 'fish', emoji: '🐟', label: { en: 'It eats big fish', id: 'Ia makan ikan besar' } },
        { id: 'fruit', emoji: '🍎', label: { en: 'It eats apples', id: 'Ia makan apel' } },
      ],
      answerId: 'bugs',
    },
  },
  {
    id: 'nature-5',
    worldId: 'nature',
    number: 5,
    title: { en: 'Plant Food', id: 'Makanan Tumbuhan' },
    mascotMessage: { en: 'TRUE or FALSE — do plants actually make their own food, or do they need someone to feed them? 🌿', id: 'BENAR atau SALAH — apakah tumbuhan benar-benar membuat makanannya sendiri, atau perlu seseorang yang memberinya makan? 🌿' },
    xpReward: 18,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Plants make their own food using sunlight, water, and air. This process is called photosynthesis.', id: 'Tumbuhan membuat makanannya sendiri menggunakan sinar matahari, air, dan udara. Proses ini disebut fotosintesis.' },
      answer: true,
    },
  },
  {
    id: 'nature-6',
    worldId: 'nature',
    number: 6,
    title: { en: 'Animal Homes', id: 'Rumah Hewan' },
    mascotMessage: { en: 'Match each animal to where it lives! 🌍', id: 'Cocokkan setiap hewan dengan tempat tinggalnya! 🌍' },
    xpReward: 20,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'shark', leftEmoji: '🦈', leftLabel: { en: 'Shark', id: 'Hiu' },
          rightId: 'ocean', rightEmoji: '🌊', rightLabel: { en: 'Ocean', id: 'Lautan' },
        },
        {
          leftId: 'elephant', leftEmoji: '🐘', leftLabel: { en: 'Elephant', id: 'Gajah' },
          rightId: 'savanna', rightEmoji: '🌿', rightLabel: { en: 'Savanna', id: 'Sabana' },
        },
        {
          leftId: 'penguin', leftEmoji: '🐧', leftLabel: { en: 'Penguin', id: 'Penguin' },
          rightId: 'antarctica', rightEmoji: '🧊', rightLabel: { en: 'Antarctica', id: 'Antartika' },
        },
      ],
    },
  },
  {
    id: 'nature-7',
    worldId: 'nature',
    number: 7,
    title: { en: "Bear's Winter", id: 'Musim Dingin Beruang' },
    mascotMessage: { en: 'Bears hibernate — they sleep for months! Where do they go? 🐻', id: 'Beruang berhibernasi — mereka tidur berbulan-bulan! Ke mana mereka pergi? 🐻' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF a bear needs to sleep all winter long...', id: 'JIKA beruang perlu tidur sepanjang musim dingin...' },
      options: [
        { id: 'cave', emoji: '🐻', label: { en: 'It sleeps in a cave', id: 'Ia tidur di gua' } },
        { id: 'sea', emoji: '🌊', label: { en: 'It swims in the sea', id: 'Ia berenang di laut' } },
        { id: 'south', emoji: '✈️', label: { en: 'It flies somewhere warm', id: 'Ia terbang ke tempat hangat' } },
        { id: 'tree', emoji: '🌳', label: { en: 'It climbs a tall tree', id: 'Ia memanjat pohon tinggi' } },
      ],
      answerId: 'cave',
    },
  },
  {
    id: 'nature-8',
    worldId: 'nature',
    number: 8,
    title: { en: 'Flower at Night', id: 'Bunga di Malam Hari' },
    mascotMessage: { en: 'Some plants behave differently when the sun goes down! 🌸', id: 'Beberapa tanaman berperilaku berbeda saat matahari terbenam! 🌸' },
    xpReward: 22,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF the sun sets and night begins...', id: 'JIKA matahari terbenam dan malam dimulai...' },
      options: [
        { id: 'close', emoji: '🌷', label: { en: 'Some flowers close up', id: 'Beberapa bunga menutup' } },
        { id: 'grow', emoji: '🌱', label: { en: 'All plants grow faster', id: 'Semua tanaman tumbuh lebih cepat' } },
        { id: 'ocean', emoji: '🌊', label: { en: 'The ocean gets bigger', id: 'Lautan menjadi lebih besar' } },
        { id: 'rain', emoji: '🌧️', label: { en: 'It always rains', id: 'Selalu hujan' } },
      ],
      answerId: 'close',
    },
  },
  {
    id: 'nature-9',
    worldId: 'nature',
    number: 9,
    title: { en: 'Butterfly Journey', id: 'Perjalanan Kupu-Kupu' },
    mascotMessage: { en: 'Caterpillars transform inside a cocoon. What do they become? 🦋', id: 'Ulat berubah di dalam kepompong. Apa yang mereka jadi? 🦋' },
    xpReward: 25,
    puzzle: {
      type: 'if-then',
      condition: { en: 'IF a caterpillar spins a cocoon around itself...', id: 'JIKA ulat membuat kepompong di sekitar dirinya...' },
      options: [
        { id: 'butterfly', emoji: '🦋', label: { en: 'A butterfly emerges', id: 'Kupu-kupu keluar' } },
        { id: 'bee', emoji: '🐝', label: { en: 'A bee comes out', id: 'Lebah keluar' } },
        { id: 'spider', emoji: '🕷️', label: { en: 'A spider crawls out', id: 'Laba-laba merangkak keluar' } },
        { id: 'worm', emoji: '🪱', label: { en: 'A worm crawls out', id: 'Cacing merangkak keluar' } },
      ],
      answerId: 'butterfly',
    },
  },

  // ── Number Ninja ─────────────────────────────────────────────
  {
    id: 'numbers-0',
    worldId: 'numbers',
    number: 0,
    title: { en: 'Count by Threes', id: 'Hitung Tiga-Tiga' },
    mascotMessage: { en: 'Each number jumps by 3! What comes after 12? 🔢', id: 'Setiap angka melompat 3! Apa yang datang setelah 12? 🔢' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '3, 6, 9, 12, ___?', id: '3, 6, 9, 12, ___?' },
      visual: '🔢',
      options: ['13', '14', '15', '18'],
      answer: '15',
    },
  },
  {
    id: 'numbers-1',
    worldId: 'numbers',
    number: 1,
    title: { en: 'Count by Fours', id: 'Hitung Empat-Empat' },
    mascotMessage: { en: "Each jump is 4 — steady and even! What comes after 16? 🧦", id: 'Setiap lompatan adalah 4 — stabil dan teratur! Apa yang datang setelah 16? 🧦' },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: '4,  8,  12,  16,  ___?', id: '4,  8,  12,  16,  ___?' },
      visual: '🧦',
      options: ['18', '20', '22', '24'],
      answer: '20',
    },
  },
  {
    id: 'numbers-2',
    worldId: 'numbers',
    number: 2,
    title: { en: 'Sort the Sevens', id: 'Urutkan Kelipatan Tujuh' },
    mascotMessage: { en: 'All five numbers are multiples of 7! Tap them from smallest to largest. 🥷', id: 'Kelima angka ini adalah kelipatan 7! Ketuk dari yang terkecil ke terbesar. 🥷' },
    xpReward: 18,
    puzzle: {
      type: 'sort',
      items: ['14', '35', '7', '28', '21'],
      answer: ['7', '14', '21', '28', '35'],
    },
  },
  {
    id: 'numbers-3',
    worldId: 'numbers',
    number: 3,
    title: { en: 'Count Down from 100', id: 'Hitung Mundur dari 100' },
    mascotMessage: { en: "Counting backwards by tens from 100! What comes after 70? 📉", id: 'Menghitung mundur sepuluh-sepuluh dari 100! Angka berapa setelah 70? 📉' },
    xpReward: 18,
    puzzle: {
      type: 'math',
      question: { en: '100,  90,  80,  70,  ___?', id: '100,  90,  80,  70,  ___?' },
      visual: '📉',
      options: ['55', '60', '65', '50'],
      answer: '60',
    },
  },
  {
    id: 'numbers-4',
    worldId: 'numbers',
    number: 4,
    title: { en: 'Sevens Sprint', id: 'Lari Tujuh-Tujuh' },
    mascotMessage: { en: 'Jump by 7 each time! It\'s trickier than 3 or 4 — but find the gap and you\'ve got it. 🏃', id: 'Melompat 7 setiap kali! Lebih sulit dari 3 atau 4 — tapi temukan celahnya dan kamu berhasil. 🏃' },
    xpReward: 18,
    puzzle: {
      type: 'math',
      question: { en: '7,  14,  21,  ___,  35?', id: '7,  14,  21,  ___,  35?' },
      visual: '🏃',
      options: ['24', '27', '28', '30'],
      answer: '28',
    },
  },
  {
    id: 'numbers-5',
    worldId: 'numbers',
    number: 5,
    title: { en: 'Fibonacci!', id: 'Fibonacci!' },
    mascotMessage: { en: 'Each number is the SUM of the two before it! 1+1=2, 1+2=3, 2+3=5... what\'s next? 🌀', id: 'Setiap angka adalah JUMLAH dua angka sebelumnya! 1+1=2, 1+2=3, 2+3=5... apa berikutnya? 🌀' },
    xpReward: 20,
    puzzle: {
      type: 'math',
      question: { en: '1, 1, 2, 3, 5, ___?', id: '1, 1, 2, 3, 5, ___?' },
      visual: '🌀',
      options: ['6', '7', '8', '9'],
      answer: '8',
    },
  },
  {
    id: 'numbers-6',
    worldId: 'numbers',
    number: 6,
    title: { en: 'Which is a Multiple?', id: 'Mana yang Kelipatannya?' },
    mascotMessage: { en: 'Only ONE of these numbers can be divided by 6 with nothing left over. Which is the real multiple of 6? 🎯', id: 'Hanya SATU dari angka-angka ini yang bisa dibagi 6 tanpa sisa. Mana yang benar-benar kelipatan 6? 🎯' },
    xpReward: 22,
    puzzle: {
      type: 'math',
      question: { en: 'Which number is a multiple of 6 (divisible by 6 with no remainder)?', id: 'Angka mana yang merupakan kelipatan 6 (habis dibagi 6 tanpa sisa)?' },
      visual: '🎯',
      options: ['14', '20', '42', '50'],
      answer: '42',
    },
  },
  {
    id: 'numbers-7',
    worldId: 'numbers',
    number: 7,
    title: { en: 'Grow the Gaps', id: 'Celah yang Bertambah' },
    mascotMessage: { en: "The gap between each number keeps growing! +4, +6, +8, +10... what's next? 🌱", id: 'Jarak antar angka terus bertambah! +4, +6, +8, +10... apa berikutnya? 🌱' },
    xpReward: 25,
    puzzle: {
      type: 'math',
      question: { en: '2,  6,  12,  20,  30,  ___?', id: '2,  6,  12,  20,  30,  ___?' },
      visual: '🌱',
      options: ['38', '40', '42', '44'],
      answer: '42',
    },
  },
  {
    id: 'numbers-8',
    worldId: 'numbers',
    number: 8,
    title: { en: 'Sort the Squares', id: 'Urutkan Bilangan Kuadrat' },
    mascotMessage: { en: 'You know 1×1=1, 2×2=4, 3×3=9... now sort them smallest to largest! 🟦', id: 'Kamu tahu 1×1=1, 2×2=4, 3×3=9... sekarang urutkan dari yang terkecil ke terbesar! 🟦' },
    xpReward: 25,
    puzzle: {
      type: 'sort',
      items: ['16', '4', '25', '9', '1'],
      answer: ['1', '4', '9', '16', '25'],
    },
  },
  {
    id: 'numbers-9',
    worldId: 'numbers',
    number: 9,
    title: { en: 'Triangle Numbers', id: 'Angka Segitiga' },
    mascotMessage: { en: 'Add 1, then 2, then 3... the gaps keep growing! What\'s next after 15? 🔺', id: 'Tambah 1, lalu 2, lalu 3... selisihnya terus bertambah! Apa yang berikutnya setelah 15? 🔺' },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: { en: '1, 3, 6, 10, 15, ___?', id: '1, 3, 6, 10, 15, ___?' },
      visual: '🔺',
      options: ['18', '20', '21', '24'],
      answer: '21',
    },
  },

  // ── Step by Step (Decomposition) ─────────────────────────────
  {
    id: 'decomposition-0',
    worldId: 'decomposition',
    number: 0,
    title: { en: 'Make a Sandwich', id: 'Buat Sandwich' },
    mascotMessage: { en: "What's the right order to make a sandwich? Tap each step! 🥪", id: 'Apa urutan yang benar untuk membuat sandwich? Ketuk setiap langkahnya! 🥪' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'bread', emoji: '🍞', label: { en: 'Get bread', id: 'Ambil roti' } },
        { id: 'filling', emoji: '🧀', label: { en: 'Add filling', id: 'Tambah isian' } },
        { id: 'close', emoji: '🥪', label: { en: 'Close it up', id: 'Tutup sandwich' } },
      ],
    },
  },
  {
    id: 'decomposition-1',
    worldId: 'decomposition',
    number: 1,
    title: { en: 'Brush Your Teeth', id: 'Gosok Gigi' },
    mascotMessage: { en: 'A healthy smile starts with the right steps! Tap them in order 😁', id: 'Senyum sehat dimulai dari langkah yang benar! Ketuk secara urut 😁' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'wet', emoji: '💧', label: { en: 'Wet the brush', id: 'Basahi sikat' } },
        { id: 'paste', emoji: '🪥', label: { en: 'Add toothpaste', id: 'Tambah pasta gigi' } },
        { id: 'brush', emoji: '😁', label: { en: 'Brush teeth!', id: 'Gosok gigi!' } },
      ],
    },
  },
  {
    id: 'decomposition-2',
    worldId: 'decomposition',
    number: 2,
    title: { en: 'Water a Plant', id: 'Siram Tanaman' },
    mascotMessage: { en: "Plants are thirsty! Help them drink in the right order 🌱", id: 'Tanaman haus! Bantu mereka minum dengan urutan yang benar 🌱' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'can', emoji: '🪣', label: { en: 'Get watering can', id: 'Ambil ember' } },
        { id: 'fill', emoji: '💧', label: { en: 'Fill with water', id: 'Isi dengan air' } },
        { id: 'pour', emoji: '🌱', label: { en: 'Water the plant', id: 'Siram tanamannya' } },
      ],
    },
  },
  {
    id: 'decomposition-3',
    worldId: 'decomposition',
    number: 3,
    title: { en: 'Make Hot Chocolate', id: 'Buat Coklat Panas' },
    mascotMessage: { en: 'Mmm, yummy! What order do you make hot chocolate? ☕', id: 'Mmm, enak! Apa urutan membuat coklat panas? ☕' },
    xpReward: 12,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'milk', emoji: '🥛', label: { en: 'Heat the milk', id: 'Panaskan susu' } },
        { id: 'cocoa', emoji: '🍫', label: { en: 'Add cocoa powder', id: 'Tambah coklat bubuk' } },
        { id: 'stir', emoji: '🥄', label: { en: 'Stir it well', id: 'Aduk sampai rata' } },
      ],
    },
  },
  {
    id: 'decomposition-4',
    worldId: 'decomposition',
    number: 4,
    title: { en: 'Make Orange Juice', id: 'Buat Jus Jeruk' },
    mascotMessage: { en: 'Fresh juice time! Put the steps in order 🍊', id: 'Saatnya jus segar! Susun langkah-langkahnya 🍊' },
    xpReward: 15,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'cut', emoji: '🍊', label: { en: 'Cut the orange', id: 'Potong jeruknya' } },
        { id: 'squeeze', emoji: '💪', label: { en: 'Squeeze the juice', id: 'Peras jusnya' } },
        { id: 'pour', emoji: '🥤', label: { en: 'Pour into glass', id: 'Tuang ke gelas' } },
      ],
    },
  },
  {
    id: 'decomposition-5',
    worldId: 'decomposition',
    number: 5,
    title: { en: 'Get Ready for School', id: 'Siap ke Sekolah' },
    mascotMessage: { en: "Don't miss the bus! What do you do first? 🚌", id: 'Jangan ketinggalan bis! Apa yang dilakukan pertama? 🚌' },
    xpReward: 18,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'wake', emoji: '😴', label: { en: 'Wake up!', id: 'Bangun tidur!' } },
        { id: 'breakfast', emoji: '🍳', label: { en: 'Eat breakfast', id: 'Makan sarapan' } },
        { id: 'pack', emoji: '🎒', label: { en: 'Pack your bag', id: 'Siapkan tas' } },
        { id: 'bus', emoji: '🚌', label: { en: 'Catch the bus', id: 'Naik bis' } },
      ],
    },
  },
  {
    id: 'decomposition-6',
    worldId: 'decomposition',
    number: 6,
    title: { en: 'Bake Cookies', id: 'Panggang Kue' },
    mascotMessage: { en: 'Baking is all about following steps in order! 🍪', id: 'Memanggang artinya mengikuti langkah secara urut! 🍪' },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'mix', emoji: '🥣', label: { en: 'Mix the dough', id: 'Aduk adonan' } },
        { id: 'shape', emoji: '🍪', label: { en: 'Shape cookies', id: 'Bentuk kue' } },
        { id: 'bake', emoji: '🔥', label: { en: 'Bake in oven', id: 'Panggang di oven' } },
        { id: 'cool', emoji: '❄️', label: { en: 'Let them cool', id: 'Biarkan dingin' } },
      ],
    },
  },
  {
    id: 'decomposition-7',
    worldId: 'decomposition',
    number: 7,
    title: { en: 'Send a Letter', id: 'Kirim Surat' },
    mascotMessage: { en: 'You want to send a letter to a friend — what comes first? ✉️', id: 'Kamu mau kirim surat ke teman — apa yang pertama? ✉️' },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'write', emoji: '✍️', label: { en: 'Write the letter', id: 'Tulis suratnya' } },
        { id: 'fold', emoji: '📄', label: { en: 'Fold the paper', id: 'Lipat kertasnya' } },
        { id: 'envelope', emoji: '✉️', label: { en: 'Put in envelope', id: 'Masukkan ke amplop' } },
        { id: 'post', emoji: '📬', label: { en: 'Post it!', id: 'Kirimkan!' } },
      ],
    },
  },
  {
    id: 'decomposition-8',
    worldId: 'decomposition',
    number: 8,
    title: { en: 'Wash Your Hands', id: 'Cuci Tangan' },
    mascotMessage: { en: 'Clean hands keep you healthy! Tap the right order 🙌', id: 'Tangan bersih membuatmu sehat! Ketuk urutan yang benar 🙌' },
    xpReward: 22,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'tap', emoji: '🚰', label: { en: 'Turn on the tap', id: 'Buka keran' } },
        { id: 'soap', emoji: '🧼', label: { en: 'Add soap', id: 'Tambah sabun' } },
        { id: 'rub', emoji: '🙌', label: { en: 'Rub your hands', id: 'Gosok tanganmu' } },
        { id: 'rinse', emoji: '💧', label: { en: 'Rinse and dry', id: 'Bilas dan keringkan' } },
      ],
    },
  },
  {
    id: 'decomposition-9',
    worldId: 'decomposition',
    number: 9,
    title: { en: 'Charge Your Phone', id: 'Cas HP' },
    mascotMessage: { en: 'A dead phone needs charging! What are the steps? 📱', id: 'HP lowbat butuh dicas! Apa langkah-langkahnya? 📱' },
    xpReward: 25,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'cable', emoji: '🔌', label: { en: 'Find the cable', id: 'Cari kabelnya' } },
        { id: 'phone', emoji: '📱', label: { en: 'Plug into phone', id: 'Colok ke HP' } },
        { id: 'wall', emoji: '🔋', label: { en: 'Plug into wall', id: 'Colok ke dinding' } },
        { id: 'wait', emoji: '⚡', label: { en: 'Watch it charge!', id: 'Lihat HP mengisi!' } },
      ],
    },
  },

  // ── Think Alike (Abstraction) ─────────────────────────────────
  {
    id: 'abstraction-0',
    worldId: 'abstraction',
    number: 0,
    title: { en: 'Odd One Out!', id: 'Yang Berbeda!' },
    mascotMessage: { en: "Three of these belong together. Which one is different? 🔍", id: 'Tiga di antara ini saling cocok. Yang mana yang berbeda? 🔍' },
    xpReward: 10,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one does NOT belong with the animals?', id: 'Mana yang BUKAN termasuk hewan?' },
      items: [
        { id: 'dog',  emoji: '🐶', label: { en: 'Dog',  id: 'Anjing' } },
        { id: 'cat',  emoji: '🐱', label: { en: 'Cat',  id: 'Kucing' } },
        { id: 'bird', emoji: '🐦', label: { en: 'Bird', id: 'Burung' } },
        { id: 'car',  emoji: '🚗', label: { en: 'Car',  id: 'Mobil' } },
      ],
      correctIds: ['car'],
    },
  },
  {
    id: 'abstraction-1',
    worldId: 'abstraction',
    number: 1,
    title: { en: 'Fruit or Not?', id: 'Buah atau Bukan?' },
    mascotMessage: { en: 'Three are fruits. One is NOT a fruit — can you spot it? 🍎', id: 'Tiga adalah buah. Satu BUKAN buah — bisakah kamu menemukannya? 🍎' },
    xpReward: 10,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one is NOT a fruit?', id: 'Mana yang BUKAN buah?' },
      items: [
        { id: 'apple',  emoji: '🍎', label: { en: 'Apple',  id: 'Apel' } },
        { id: 'banana', emoji: '🍌', label: { en: 'Banana', id: 'Pisang' } },
        { id: 'carrot', emoji: '🥕', label: { en: 'Carrot', id: 'Wortel' } },
        { id: 'orange', emoji: '🍊', label: { en: 'Orange', id: 'Jeruk' } },
      ],
      correctIds: ['carrot'],
    },
  },
  {
    id: 'abstraction-2',
    worldId: 'abstraction',
    number: 2,
    title: { en: 'Wet Things', id: 'Benda Basah' },
    mascotMessage: { en: "Three things are wet or liquid. One is not — find the odd one out! 💧", id: 'Tiga benda basah atau cair. Satu tidak — temukan yang berbeda! 💧' },
    xpReward: 12,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one is NOT wet or liquid?', id: 'Mana yang TIDAK basah atau cair?' },
      items: [
        { id: 'rain',  emoji: '🌧️', label: { en: 'Rain',  id: 'Hujan' } },
        { id: 'sea',   emoji: '🌊', label: { en: 'Sea',   id: 'Laut' } },
        { id: 'fire',  emoji: '🔥', label: { en: 'Fire',  id: 'Api' } },
        { id: 'juice', emoji: '🧃', label: { en: 'Juice', id: 'Jus' } },
      ],
      correctIds: ['fire'],
    },
  },
  {
    id: 'abstraction-3',
    worldId: 'abstraction',
    number: 3,
    title: { en: 'Things That Fly', id: 'Benda yang Terbang' },
    mascotMessage: { en: 'Two of these can fly up in the sky — tap BOTH of them! ✈️', id: 'Dua dari ini bisa terbang di langit — ketuk KEDUANYA! ✈️' },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Tap all the things that can FLY!', id: 'Ketuk semua benda yang bisa TERBANG!' },
      items: [
        { id: 'eagle',  emoji: '🦅', label: { en: 'Eagle',  id: 'Elang' } },
        { id: 'rocket', emoji: '🚀', label: { en: 'Rocket', id: 'Roket' } },
        { id: 'car',    emoji: '🚗', label: { en: 'Car',    id: 'Mobil' } },
        { id: 'fish',   emoji: '🐟', label: { en: 'Fish',   id: 'Ikan' } },
      ],
      correctIds: ['eagle', 'rocket'],
    },
  },
  {
    id: 'abstraction-4',
    worldId: 'abstraction',
    number: 4,
    title: { en: 'Round Shapes', id: 'Bentuk Bulat' },
    mascotMessage: { en: 'Most of these are round! Which one is NOT a round shape? ⭕', id: 'Sebagian besar bulat! Mana yang BUKAN bentuk bulat? ⭕' },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one is NOT round?', id: 'Mana yang TIDAK bulat?' },
      items: [
        { id: 'ball',       emoji: '⚽', label: { en: 'Ball',       id: 'Bola' } },
        { id: 'earth',      emoji: '🌍', label: { en: 'Earth',      id: 'Bumi' } },
        { id: 'controller', emoji: '🎮', label: { en: 'Controller', id: 'Kontroler' } },
        { id: 'pizza',      emoji: '🍕', label: { en: 'Pizza',      id: 'Pizza' } },
      ],
      correctIds: ['controller'],
    },
  },
  {
    id: 'abstraction-5',
    worldId: 'abstraction',
    number: 5,
    title: { en: 'Cold Things', id: 'Benda Dingin' },
    mascotMessage: { en: 'Three things are cold. One is HOT — which is the odd one out? ❄️', id: 'Tiga benda dingin. Satu PANAS — mana yang berbeda? ❄️' },
    xpReward: 18,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one is NOT cold?', id: 'Mana yang TIDAK dingin?' },
      items: [
        { id: 'ice',     emoji: '🧊', label: { en: 'Ice',     id: 'Es' } },
        { id: 'snow',    emoji: '❄️', label: { en: 'Snow',    id: 'Salju' } },
        { id: 'candle',  emoji: '🕯️', label: { en: 'Candle',  id: 'Lilin' } },
        { id: 'iceberg', emoji: '🏔️', label: { en: 'Iceberg', id: 'Gunung Es' } },
      ],
      correctIds: ['candle'],
    },
  },
  {
    id: 'abstraction-6',
    worldId: 'abstraction',
    number: 6,
    title: { en: 'Living Things', id: 'Makhluk Hidup' },
    mascotMessage: { en: 'Three of these are ALIVE. One is not — tap all the living things! 🌱', id: 'Tiga di sini HIDUP. Satu tidak — ketuk semua makhluk hidup! 🌱' },
    xpReward: 20,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Tap all the LIVING things!', id: 'Ketuk semua MAKHLUK HIDUP!' },
      items: [
        { id: 'tree', emoji: '🌳', label: { en: 'Tree', id: 'Pohon' } },
        { id: 'rock', emoji: '🪨', label: { en: 'Rock', id: 'Batu' } },
        { id: 'frog', emoji: '🐸', label: { en: 'Frog', id: 'Katak' } },
        { id: 'bee',  emoji: '🐝', label: { en: 'Bee',  id: 'Lebah' } },
      ],
      correctIds: ['tree', 'frog', 'bee'],
    },
  },
  {
    id: 'abstraction-7',
    worldId: 'abstraction',
    number: 7,
    title: { en: 'Odd Vehicle Out', id: 'Bukan Kendaraan' },
    mascotMessage: { en: 'Three of these things can carry you somewhere. One is totally different — find it! 🚁', id: 'Tiga dari benda ini bisa membawamu bepergian. Satu sangat berbeda — temukan! 🚁' },
    xpReward: 20,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one is NOT a vehicle?', id: 'Mana yang BUKAN kendaraan?' },
      items: [
        { id: 'rocket',     emoji: '🚀', label: { en: 'Rocket',     id: 'Roket' } },
        { id: 'helicopter', emoji: '🚁', label: { en: 'Helicopter', id: 'Helikopter' } },
        { id: 'guitar',     emoji: '🎸', label: { en: 'Guitar',     id: 'Gitar' } },
        { id: 'ship',       emoji: '🚢', label: { en: 'Ship',       id: 'Kapal' } },
      ],
      correctIds: ['guitar'],
    },
  },
  {
    id: 'abstraction-8',
    worldId: 'abstraction',
    number: 8,
    title: { en: 'In the Kitchen', id: 'Di Dapur' },
    mascotMessage: { en: 'Which items belong in a KITCHEN? Tap all of them! 🍳', id: 'Benda apa yang ada di DAPUR? Ketuk semuanya! 🍳' },
    xpReward: 22,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Tap all the things found in a KITCHEN!', id: 'Ketuk semua benda yang ada di DAPUR!' },
      items: [
        { id: 'pan',    emoji: '🍳', label: { en: 'Frying Pan', id: 'Wajan' } },
        { id: 'bed',    emoji: '🛏️', label: { en: 'Bed',        id: 'Kasur' } },
        { id: 'spoon',  emoji: '🥄', label: { en: 'Spoon',      id: 'Sendok' } },
        { id: 'shower', emoji: '🚿', label: { en: 'Shower',     id: 'Shower' } },
      ],
      correctIds: ['pan', 'spoon'],
    },
  },
  {
    id: 'abstraction-9',
    worldId: 'abstraction',
    number: 9,
    title: { en: 'Four Legs', id: 'Empat Kaki' },
    mascotMessage: { en: 'Dogs, tigers, and elephants all have 4 legs. Which animal is different? 🐾', id: 'Anjing, harimau, dan gajah semuanya punya 4 kaki. Hewan mana yang berbeda? 🐾' },
    xpReward: 25,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one does NOT have 4 legs?', id: 'Mana yang TIDAK punya 4 kaki?' },
      items: [
        { id: 'dog',      emoji: '🐕', label: { en: 'Dog',      id: 'Anjing' } },
        { id: 'tiger',    emoji: '🐅', label: { en: 'Tiger',    id: 'Harimau' } },
        { id: 'parrot',   emoji: '🦜', label: { en: 'Parrot',   id: 'Beo' } },
        { id: 'elephant', emoji: '🐘', label: { en: 'Elephant', id: 'Gajah' } },
      ],
      correctIds: ['parrot'],
    },
  },

  // ── Penalaran Matematika (Math Reasoning) ──────────────────────────────

  {
    id: 'math_reasoning-0',
    worldId: 'math_reasoning',
    number: 0,
    title: { en: 'Which Group is Bigger?', id: 'Kelompok Mana yang Lebih Besar?' },
    mascotMessage: {
      en: 'Math reasoning means thinking about WHY numbers work. Let\'s start by finding the bigger group! 🔢',
      id: 'Penalaran matematika artinya berpikir MENGAPA angka bekerja. Mari kita mulai dengan menemukan kelompok yang lebih besar! 🔢',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'Welcome to Math Reasoning!', id: 'Selamat Datang di Penalaran Matematika!' },
      body: {
        en: 'Math reasoning is about thinking through number problems using clues. We don\'t just calculate — we think about what the numbers mean!',
        id: 'Penalaran matematika adalah tentang memikirkan soal angka menggunakan petunjuk. Kita tidak hanya menghitung — kita berpikir tentang apa arti angka-angka itu!',
      },
      example: {
        en: 'Example: "Which numbers are bigger than 5?" → Look at each number and ask: is it MORE than 5?',
        id: 'Contoh: "Angka mana yang lebih besar dari 5?" → Lihat setiap angka dan tanya: apakah lebih dari 5?',
      },
    },
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Which numbers are bigger than 5?', id: 'Angka mana yang lebih besar dari 5?' },
      items: [
        { id: 'n3', emoji: '3️⃣', label: { en: '3', id: '3' } },
        { id: 'n7', emoji: '7️⃣', label: { en: '7', id: '7' } },
        { id: 'n2', emoji: '2️⃣', label: { en: '2', id: '2' } },
        { id: 'n9', emoji: '9️⃣', label: { en: '9', id: '9' } },
        { id: 'n4', emoji: '4️⃣', label: { en: '4', id: '4' } },
        { id: 'n6', emoji: '6️⃣', label: { en: '6', id: '6' } },
      ],
      correctIds: ['n7', 'n9', 'n6'],
    },
  },

  {
    id: 'math_reasoning-1',
    worldId: 'math_reasoning',
    number: 1,
    title: { en: 'Number Bonds to 10', id: 'Pasangan Angka untuk 10' },
    mascotMessage: {
      en: 'Number bonds are pairs of numbers that add up to 10. Can you match them all? 🤝',
      id: 'Pasangan angka adalah sepasang angka yang jumlahnya 10. Bisakah kamu mencocokkan semuanya? 🤝',
    },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'l1', leftEmoji: '1️⃣', leftLabel: { en: '1', id: '1' },
          rightId: 'r9', rightEmoji: '9️⃣', rightLabel: { en: '9', id: '9' },
        },
        {
          leftId: 'l3', leftEmoji: '3️⃣', leftLabel: { en: '3', id: '3' },
          rightId: 'r7', rightEmoji: '7️⃣', rightLabel: { en: '7', id: '7' },
        },
        {
          leftId: 'l4', leftEmoji: '4️⃣', leftLabel: { en: '4', id: '4' },
          rightId: 'r6', rightEmoji: '6️⃣', rightLabel: { en: '6', id: '6' },
        },
        {
          leftId: 'l2', leftEmoji: '2️⃣', leftLabel: { en: '2', id: '2' },
          rightId: 'r8', rightEmoji: '8️⃣', rightLabel: { en: '8', id: '8' },
        },
      ],
    },
  },

  {
    id: 'math_reasoning-2',
    worldId: 'math_reasoning',
    number: 2,
    title: { en: 'Doubling Numbers', id: 'Melipatgandakan Angka' },
    mascotMessage: {
      en: 'Doubling means adding a number to itself! Double 3 = 3 + 3 = 6. Easy! 🪞',
      id: 'Melipatgandakan artinya menjumlahkan angka dengan dirinya sendiri! Dua kali 3 = 3 + 3 = 6. Mudah! 🪞',
    },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: 'What is double 7?', id: 'Berapa dua kali lipat 7?' },
      visual: '7️⃣ + 7️⃣ = ?',
      options: ['12', '13', '14', '16'],
      answer: '14',
    },
  },

  {
    id: 'math_reasoning-3',
    worldId: 'math_reasoning',
    number: 3,
    title: { en: 'Find the Missing Number', id: 'Temukan Angka yang Hilang' },
    mascotMessage: {
      en: 'Something is missing from this equation! Think about what number makes it true. 🔍',
      id: 'Ada sesuatu yang hilang dari persamaan ini! Pikirkan angka apa yang membuatnya benar. 🔍',
    },
    xpReward: 15,
    tutorial: {
      title: { en: 'Missing Number Problems', id: 'Soal Angka yang Hilang' },
      body: {
        en: 'When a number is missing from an equation, we ask: "What number makes this balanced?" Try each option and check!',
        id: 'Ketika sebuah angka hilang dari persamaan, kita bertanya: "Angka apa yang membuat ini seimbang?" Coba setiap pilihan dan cek!',
      },
      example: {
        en: 'Example: 5 + ? = 8 → Try 2: 5+2=7 ✗ → Try 3: 5+3=8 ✓',
        id: 'Contoh: 5 + ? = 8 → Coba 2: 5+2=7 ✗ → Coba 3: 5+3=8 ✓',
      },
    },
    puzzle: {
      type: 'fill-in',
      question: { en: '6 + ___ = 11', id: '6 + ___ = 11' },
      visual: '6️⃣ + ❓ = 1️⃣1️⃣',
      answer: '5',
      inputType: 'numeric',
    },
  },

  {
    id: 'math_reasoning-4',
    worldId: 'math_reasoning',
    number: 4,
    title: { en: 'Order These Numbers', id: 'Urutkan Angka-angka Ini' },
    mascotMessage: {
      en: 'Tap the numbers from SMALLEST to LARGEST. Think carefully before you tap! 📊',
      id: 'Ketuk angka-angka dari yang TERKECIL ke TERBESAR. Pikirkan dengan hati-hati sebelum mengetuk! 📊',
    },
    xpReward: 15,
    puzzle: {
      type: 'sort',
      items: ['15', '3', '8', '21', '7'],
      answer: ['3', '7', '8', '15', '21'],
    },
  },

  {
    id: 'math_reasoning-5',
    worldId: 'math_reasoning',
    number: 5,
    title: { en: 'Number Story', id: 'Cerita Angka' },
    mascotMessage: {
      en: 'Read the story carefully — the numbers are hiding inside! 📖',
      id: 'Baca ceritanya dengan hati-hati — angka-angka tersembunyi di dalamnya! 📖',
    },
    xpReward: 20,
    puzzle: {
      type: 'math',
      question: {
        en: 'Budi has 8 🍎. He eats 3, then his mom gives him 2 more. How many does he have?',
        id: 'Budi punya 8 🍎. Dia makan 3, lalu ibunya memberi 2 lagi. Berapa yang dia punya?',
      },
      options: ['5', '6', '7', '9'],
      answer: '7',
    },
  },

  {
    id: 'math_reasoning-6',
    worldId: 'math_reasoning',
    number: 6,
    title: { en: 'Equal Groups', id: 'Kelompok yang Sama' },
    mascotMessage: {
      en: 'When groups are equal, we can multiply! Count the groups and how many are in each. 📦',
      id: 'Ketika kelompok sama rata, kita bisa mengalikan! Hitung kelompoknya dan berapa yang ada di masing-masing. 📦',
    },
    xpReward: 20,
    tutorial: {
      title: { en: 'Multiplication = Equal Groups', id: 'Perkalian = Kelompok yang Sama' },
      body: {
        en: 'Multiplication is just a fast way to count equal groups! If you have 3 bags with 4 oranges each, that\'s 3 × 4 = 12 oranges total.',
        id: 'Perkalian hanyalah cara cepat menghitung kelompok yang sama! Jika kamu punya 3 tas dengan 4 jeruk masing-masing, itu 3 × 4 = 12 jeruk total.',
      },
      example: {
        en: '2 boxes × 5 🍪 each = 10 cookies total',
        id: '2 kotak × 5 🍪 masing-masing = 10 kue total',
      },
    },
    puzzle: {
      type: 'math',
      question: {
        en: '4 baskets with 3 🍊 each. How many oranges total?',
        id: '4 keranjang dengan 3 🍊 masing-masing. Berapa total jeruk?',
      },
      visual: '🧺🧺🧺🧺',
      options: ['10', '12', '14', '16'],
      answer: '12',
    },
  },

  {
    id: 'math_reasoning-7',
    worldId: 'math_reasoning',
    number: 7,
    title: { en: 'Half and Whole', id: 'Setengah dan Seluruhnya' },
    mascotMessage: {
      en: 'Half means dividing into 2 equal parts. Half of 10 is 5 because 5 + 5 = 10! ✂️',
      id: 'Setengah artinya membagi menjadi 2 bagian yang sama. Setengah dari 10 adalah 5 karena 5 + 5 = 10! ✂️',
    },
    xpReward: 20,
    puzzle: {
      type: 'fill-in',
      question: { en: 'Half of 18 is ___', id: 'Setengah dari 18 adalah ___' },
      visual: '🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕',
      answer: '9',
      inputType: 'numeric',
    },
  },

  {
    id: 'math_reasoning-8',
    worldId: 'math_reasoning',
    number: 8,
    title: { en: 'Double Clue Hunt', id: 'Berburu Dua Clue' },
    mascotMessage: {
      en: 'You need to find numbers that satisfy TWO rules at the same time — even AND greater than 4! 🎯',
      id: 'Kamu harus menemukan angka yang memenuhi DUA aturan sekaligus — genap DAN lebih dari 4! 🎯',
    },
    xpReward: 20,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap ALL numbers that are EVEN and GREATER THAN 4!',
        id: 'Ketuk SEMUA angka yang GENAP dan LEBIH DARI 4!',
      },
      items: [
        { id: 'n1', emoji: '1️⃣', label: { en: '1', id: '1' } },
        { id: 'n3', emoji: '3️⃣', label: { en: '3', id: '3' } },
        { id: 'n6', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'n8', emoji: '8️⃣', label: { en: '8', id: '8' } },
        { id: 'n5', emoji: '5️⃣', label: { en: '5', id: '5' } },
        { id: 'n2', emoji: '2️⃣', label: { en: '2', id: '2' } },
      ],
      correctIds: ['n6', 'n8'],
    },
  },

  {
    id: 'math_reasoning-9',
    worldId: 'math_reasoning',
    number: 9,
    title: { en: 'Apple Boxes', id: 'Kotak Apel' },
    mascotMessage: {
      en: 'This one needs TWO steps — multiply first, then subtract. Plan before you calculate! 🍎',
      id: 'Yang ini perlu DUA langkah — kalikan dulu, lalu kurangi. Rencanakan sebelum kamu hitung! 🍎',
    },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: {
        en: 'Layla has 4 boxes. Each box holds 6 apples. She gives away 5 apples. How many apples does she have left?',
        id: 'Layla punya 4 kotak. Setiap kotak berisi 6 apel. Dia memberikan 5 apel. Berapa apel yang tersisa?',
      },
      visual: '🍎',
      options: ['14', '19', '24', '29'],
      answer: '19',
    },
  },

  // ── Inductive Reasoning (Rule Finder) ─────────────────────────────────

  {
    id: 'induction-0',
    worldId: 'induction',
    number: 0,
    title: { en: 'Spot the Even Numbers', id: 'Temukan Bilangan Genap' },
    mascotMessage: {
      en: 'Look at these numbers: 2, 4, 6, 8. They all share a secret rule! Can you find which others belong? 🔬',
      id: 'Lihat angka-angka ini: 2, 4, 6, 8. Mereka semua punya aturan rahasia! Bisakah kamu menemukan yang lain? 🔬',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Inductive Reasoning?', id: 'Apa itu Penalaran Induktif?' },
      body: {
        en: 'Inductive reasoning means: look at several examples → find what they all share → form a rule → apply it to new cases. You go from specific examples to a general rule!',
        id: 'Penalaran induktif berarti: lihat beberapa contoh → temukan kesamaannya → bentuk aturan → terapkan ke kasus baru. Kamu bergerak dari contoh spesifik ke aturan umum!',
      },
      example: {
        en: 'Examples: 2, 4, 6, 8 → Rule: "These are even numbers" → New case: Is 10 even? Yes, it fits the rule!',
        id: 'Contoh: 2, 4, 6, 8 → Aturan: "Ini bilangan genap" → Kasus baru: Apakah 10 genap? Ya, cocok dengan aturannya!',
      },
    },
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: '2, 4, 6, 8 all follow the same rule. Which of these also follow it?',
        id: '2, 4, 6, 8 semua mengikuti aturan yang sama. Mana yang juga mengikutinya?',
      },
      items: [
        { id: 'n10', emoji: '🔟', label: { en: '10', id: '10' } },
        { id: 'n11', emoji: '1️⃣', label: { en: '11', id: '11' } },
        { id: 'n12', emoji: '2️⃣', label: { en: '12', id: '12' } },
        { id: 'n13', emoji: '3️⃣', label: { en: '13', id: '13' } },
        { id: 'n14', emoji: '4️⃣', label: { en: '14', id: '14' } },
        { id: 'n15', emoji: '5️⃣', label: { en: '15', id: '15' } },
      ],
      correctIds: ['n10', 'n12', 'n14'],
    },
  },

  {
    id: 'induction-1',
    worldId: 'induction',
    number: 1,
    title: { en: 'Hot Things', id: 'Benda Panas' },
    mascotMessage: {
      en: 'Fire, the Sun, and chilli are all HOT. Look for the same quality in the other options! 🌶️',
      id: 'Api, Matahari, dan cabai semuanya PANAS. Carilah kualitas yang sama pada pilihan lainnya! 🌶️',
    },
    xpReward: 10,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: '🔥 Fire, ☀️ Sun, 🌶️ Chilli are all HOT. Which of these are also hot?',
        id: '🔥 Api, ☀️ Matahari, 🌶️ Cabai semuanya PANAS. Mana yang juga panas?',
      },
      items: [
        { id: 'ice', emoji: '🧊', label: { en: 'Ice', id: 'Es' } },
        { id: 'steam', emoji: '♨️', label: { en: 'Steam', id: 'Uap' } },
        { id: 'candle', emoji: '🕯️', label: { en: 'Candle flame', id: 'Nyala lilin' } },
        { id: 'snow', emoji: '❄️', label: { en: 'Snow', id: 'Salju' } },
        { id: 'hottea', emoji: '🍵', label: { en: 'Hot tea', id: 'Teh panas' } },
        { id: 'wind', emoji: '🌬️', label: { en: 'Cold wind', id: 'Angin dingin' } },
      ],
      correctIds: ['steam', 'candle', 'hottea'],
    },
  },

  {
    id: 'induction-2',
    worldId: 'induction',
    number: 2,
    title: { en: 'Shape Sides Rule', id: 'Aturan Sisi Bentuk' },
    mascotMessage: {
      en: 'Triangle = 3, Square = 4, Pentagon = 5... Do you see the rule hiding in the names? 🔺',
      id: 'Segitiga = 3, Persegi = 4, Pentagon = 5... Apakah kamu melihat aturan yang tersembunyi di nama-namanya? 🔺',
    },
    xpReward: 15,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Triangle = 3 sides, Square = 4 sides, Pentagon = 5 sides. Hexagon = ___ sides',
        id: 'Segitiga = 3 sisi, Persegi = 4 sisi, Pentagon = 5 sisi. Heksagon = ___ sisi',
      },
      visual: '🔺🟥⬠ → ❓',
      answer: '6',
      inputType: 'numeric',
    },
  },

  {
    id: 'induction-3',
    worldId: 'induction',
    number: 3,
    title: { en: "Hunter's Rule", id: 'Aturan Pemangsa' },
    mascotMessage: {
      en: 'A lion eats a zebra. A wolf eats a deer. A shark eats a fish. Three examples — what general rule do they all share? 🦁',
      id: 'Singa memakan zebra. Serigala memakan rusa. Hiu memakan ikan. Tiga contoh — aturan umum apa yang mereka miliki bersama? 🦁',
    },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You observe: a lion eats a zebra, a wolf eats a deer, a shark eats a fish. Using induction, which rule fits ALL these examples?',
        id: 'Kamu mengamati: singa makan zebra, serigala makan rusa, hiu makan ikan. Menggunakan induksi, aturan mana yang cocok untuk SEMUA contoh ini?',
      },
      options: [
        { id: 'predators', emoji: '🦁', label: { en: 'Many large animals hunt and eat other animals',  id: 'Banyak hewan besar berburu dan memakan hewan lain' } },
        { id: 'only-lion', emoji: '❌', label: { en: 'Only lions eat other animals',                    id: 'Hanya singa yang memakan hewan lain' } },
        { id: 'fish-only', emoji: '❌', label: { en: 'Animals only ever eat fish',                      id: 'Hewan hanya makan ikan' } },
        { id: 'all-plants',emoji: '🌿', label: { en: 'All animals prefer to eat plants',               id: 'Semua hewan lebih suka makan tumbuhan' } },
      ],
      answerId: 'predators',
    },
  },

  {
    id: 'induction-4',
    worldId: 'induction',
    number: 4,
    title: { en: 'Break the Rule', id: 'Langgar Aturan' },
    mascotMessage: {
      en: 'Most of these animals CAN fly — but one sneaked in that cannot! Find the exception! 🕵️',
      id: 'Sebagian besar hewan ini BISA terbang — tapi ada satu yang tidak bisa! Temukan pengecualiannya! 🕵️',
    },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Rule: all these animals should be able to fly. Which one breaks the rule?',
        id: 'Aturan: semua hewan ini seharusnya bisa terbang. Mana yang melanggar aturan?',
      },
      items: [
        { id: 'eagle',     emoji: '🦅', label: { en: 'Eagle',     id: 'Elang' } },
        { id: 'butterfly', emoji: '🦋', label: { en: 'Butterfly', id: 'Kupu-kupu' } },
        { id: 'penguin',   emoji: '🐧', label: { en: 'Penguin',   id: 'Pinguin' } },
        { id: 'bee',       emoji: '🐝', label: { en: 'Bee',       id: 'Lebah' } },
      ],
      correctIds: ['penguin'],
    },
  },

  {
    id: 'induction-5',
    worldId: 'induction',
    number: 5,
    title: { en: 'The Melting Rule', id: 'Aturan Pencairan' },
    mascotMessage: {
      en: 'Butter melts in the sun. Chocolate melts in the sun. Ice melts in the sun. Three examples — what rule connects them all? ☀️',
      id: 'Mentega mencair di bawah matahari. Coklat mencair di bawah matahari. Es mencair di bawah matahari. Tiga contoh — aturan apa yang menghubungkannya? ☀️',
    },
    xpReward: 20,
    tutorial: {
      title: { en: 'Forming a Rule from Examples', id: 'Membentuk Aturan dari Contoh' },
      body: {
        en: 'When the same thing happens every time you observe a pattern, you can form a general rule. The rule should cover ALL the examples you saw.',
        id: 'Ketika hal yang sama terjadi setiap kali kamu mengamati pola, kamu bisa membentuk aturan umum. Aturan harus mencakup SEMUA contoh yang kamu lihat.',
      },
      example: {
        en: 'Observation: 🍎 falls down, 🪨 falls down, 🍂 falls down → Rule: "Things fall down when dropped." This covers all examples!',
        id: 'Pengamatan: 🍎 jatuh ke bawah, 🪨 jatuh ke bawah, 🍂 jatuh ke bawah → Aturan: "Benda jatuh ke bawah ketika dijatuhkan." Ini mencakup semua contoh!',
      },
    },
    puzzle: {
      type: 'if-then',
      condition: {
        en: '☀️ Butter in the sun melts · ☀️ Chocolate in the sun melts · ☀️ Ice in the sun melts. Which rule fits ALL observations?',
        id: '☀️ Mentega di bawah matahari mencair · ☀️ Coklat di bawah matahari mencair · ☀️ Es di bawah matahari mencair. Aturan mana yang cocok untuk SEMUA pengamatan?',
      },
      options: [
        { id: 'heat-melts',  emoji: '🌡️', label: { en: 'Heat from the sun can melt certain solid things',  id: 'Panas dari matahari bisa mencairkan benda padat tertentu' } },
        { id: 'sun-all',     emoji: '❌',  label: { en: 'The sun melts EVERYTHING it touches',              id: 'Matahari mencairkan SEMUA yang disentuhnya' } },
        { id: 'only-ice',    emoji: '🧊',  label: { en: 'Only ice can melt',                                id: 'Hanya es yang bisa mencair' } },
        { id: 'night-melts', emoji: '🌙',  label: { en: 'Melting only happens at night',                    id: 'Pencairan hanya terjadi di malam hari' } },
      ],
      answerId: 'heat-melts',
    },
  },

  {
    id: 'induction-6',
    worldId: 'induction',
    number: 6,
    title: { en: 'Sweet Flowers', id: 'Bunga Harum' },
    mascotMessage: {
      en: 'You smell roses — sweet! Jasmine — sweet! Lavender — sweet! What general rule can you form? 🌸',
      id: 'Kamu mencium mawar — harum! Melati — harum! Lavender — harum! Aturan umum apa yang bisa kamu buat? 🌸',
    },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You observe: roses smell sweet, jasmine smells sweet, lavender smells sweet. Based on these examples, what general rule can you form by induction?',
        id: 'Kamu mengamati: mawar harum, melati harum, lavender harum. Berdasarkan contoh-contoh ini, aturan umum apa yang bisa kamu bentuk secara induktif?',
      },
      options: [
        { id: 'many',  emoji: '🌸', label: { en: 'Many flowers have a sweet smell',          id: 'Banyak bunga memiliki aroma harum' } },
        { id: 'all',   emoji: '🌺', label: { en: 'ALL things in nature smell sweet',          id: 'SEMUA benda di alam berbau harum' } },
        { id: 'never', emoji: '🚫', label: { en: 'Flowers never smell sweet',                 id: 'Bunga tidak pernah berbau harum' } },
        { id: 'only',  emoji: '🌻', label: { en: 'Only yellow flowers smell sweet',           id: 'Hanya bunga kuning yang berbau harum' } },
      ],
      answerId: 'many',
    },
  },

  {
    id: 'induction-7',
    worldId: 'induction',
    number: 7,
    title: { en: 'Reasonable Conclusion?', id: 'Kesimpulan yang Masuk Akal?' },
    mascotMessage: {
      en: 'You\'ve observed something 6 times and it\'s ALWAYS the same. Can you make a general rule? 🌅',
      id: 'Kamu sudah mengamati sesuatu 6 kali dan SELALU sama. Bisakah kamu membuat aturan umum? 🌅',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'You observe 6 sunsets: Monday west, Tuesday west, Wednesday west, Thursday west, Friday west, Saturday west. Is it reasonable to conclude "The sun sets in the west"?',
        id: 'Kamu mengamati 6 matahari terbenam: Senin barat, Selasa barat, Rabu barat, Kamis barat, Jumat barat, Sabtu barat. Apakah masuk akal menyimpulkan "Matahari terbenam di barat"?',
      },
      answer: true,
    },
  },

  {
    id: 'induction-8',
    worldId: 'induction',
    number: 8,
    title: { en: 'Match the Rule', id: 'Cocokkan Aturannya' },
    mascotMessage: {
      en: 'Each set of examples follows a rule. Can you match every example group to its correct rule? 🎯',
      id: 'Setiap kumpulan contoh mengikuti sebuah aturan. Bisakah kamu mencocokkan setiap kelompok contoh dengan aturan yang benar? 🎯',
    },
    xpReward: 20,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'ex-even', leftEmoji: '🔢', leftLabel: { en: '2, 4, 6, 8...', id: '2, 4, 6, 8...' },
          rightId: 'rule-even', rightEmoji: '✌️', rightLabel: { en: 'Even numbers', id: 'Bilangan genap' },
        },
        {
          leftId: 'ex-red', leftEmoji: '🍎', leftLabel: { en: '🍎 🍓 🍒 🌹', id: '🍎 🍓 🍒 🌹' },
          rightId: 'rule-red', rightEmoji: '❤️', rightLabel: { en: 'Red things', id: 'Benda merah' },
        },
        {
          leftId: 'ex-3', leftEmoji: '3️⃣', leftLabel: { en: '3, 6, 9, 12...', id: '3, 6, 9, 12...' },
          rightId: 'rule-3', rightEmoji: '✖️', rightLabel: { en: 'Multiples of 3', id: 'Kelipatan 3' },
        },
        {
          leftId: 'ex-wild', leftEmoji: '🦁', leftLabel: { en: '🦁 🐯 🐺 🦊', id: '🦁 🐯 🐺 🦊' },
          rightId: 'rule-wild', rightEmoji: '🌿', rightLabel: { en: 'Wild animals', id: 'Hewan liar' },
        },
      ],
    },
  },

  {
    id: 'induction-9',
    worldId: 'induction',
    number: 9,
    title: { en: 'Squares Pattern', id: 'Pola Kuadrat' },
    mascotMessage: {
      en: '1×1=1, 2×2=4, 3×3=9, 4×4=16... There\'s a pattern here. Can you extend the rule? 🧮',
      id: '1×1=1, 2×2=4, 3×3=9, 4×4=16... Ada pola di sini. Bisakah kamu memperluas aturannya? 🧮',
    },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: {
        en: '1×1=1, 2×2=4, 3×3=9, 4×4=16. Using the same rule, what is 5×5?',
        id: '1×1=1, 2×2=4, 3×3=9, 4×4=16. Menggunakan aturan yang sama, berapa 5×5?',
      },
      visual: '1️⃣ 4️⃣ 9️⃣ 1️⃣6️⃣ ❓',
      options: ['20', '25', '30', '35'],
      answer: '25',
    },
  },

  // ── Deductive Reasoning (Logic Detective) ─────────────────────────────

  {
    id: 'deduction-0',
    worldId: 'deduction',
    number: 0,
    title: { en: 'All Fruits Grow on Plants', id: 'Semua Buah Tumbuh di Tanaman' },
    mascotMessage: {
      en: 'In deductive reasoning, if the rule is true AND the case fits the rule, the conclusion MUST be true! 🔍',
      id: 'Dalam penalaran deduktif, jika aturannya benar DAN kasusnya cocok dengan aturan, kesimpulannya PASTI benar! 🔍',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Deductive Reasoning?', id: 'Apa itu Penalaran Deduktif?' },
      body: {
        en: 'Deductive reasoning works top-down: you start with a GENERAL rule, then apply it to a SPECIFIC case. If the rule is true and the case fits, the conclusion is guaranteed to be true — no exceptions!',
        id: 'Penalaran deduktif bekerja dari atas ke bawah: mulai dengan aturan UMUM, lalu terapkan ke kasus SPESIFIK. Jika aturannya benar dan kasusnya cocok, kesimpulannya dijamin benar — tidak ada pengecualian!',
      },
      example: {
        en: 'Rule: All birds have feathers. Case: A parrot is a bird. Conclusion: A parrot has feathers. ✓ (This MUST be true!)',
        id: 'Aturan: Semua burung punya bulu. Kasus: Burung beo adalah burung. Kesimpulan: Burung beo punya bulu. ✓ (Ini PASTI benar!)',
      },
    },
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All fruits grow on plants. Case: An apple is a fruit. Conclusion: An apple grows on a plant. Is this conclusion correct?',
        id: 'Aturan: Semua buah tumbuh di tanaman. Kasus: Apel adalah buah. Kesimpulan: Apel tumbuh di tanaman. Apakah kesimpulan ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-1',
    worldId: 'deduction',
    number: 1,
    title: { en: 'Luna the Cat', id: 'Luna si Kucing' },
    mascotMessage: {
      en: 'We know the rule about ALL cats. We know Luna IS a cat. So what do we know about Luna? 🐱',
      id: 'Kita tahu aturan tentang SEMUA kucing. Kita tahu Luna ADALAH kucing. Jadi apa yang kita tahu tentang Luna? 🐱',
    },
    xpReward: 10,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All cats meow. Case: Luna is a cat. Conclusion: Luna meows. Is this correct?',
        id: 'Aturan: Semua kucing mengeong. Kasus: Luna adalah kucing. Kesimpulan: Luna mengeong. Apakah ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-2',
    worldId: 'deduction',
    number: 2,
    title: { en: 'Rain and Puddles', id: 'Hujan dan Genangan' },
    mascotMessage: {
      en: 'You have a rule about rain. It IS raining. Apply the rule and pick what MUST be true! ☔',
      id: 'Kamu punya aturan tentang hujan. Hujan SEDANG turun. Terapkan aturannya dan pilih yang PASTI benar! ☔',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule: If it rains, the ground gets wet. Right now: it is raining. What MUST be true?',
        id: 'Aturan: Jika hujan, tanah menjadi basah. Saat ini: sedang hujan. Apa yang PASTI benar?',
      },
      options: [
        { id: 'ground', emoji: '💧', label: { en: 'The ground is wet', id: 'Tanah menjadi basah' } },
        { id: 'sun', emoji: '☀️', label: { en: 'The sun is shining brightly', id: 'Matahari bersinar cerah' } },
        { id: 'snow', emoji: '❄️', label: { en: 'It is snowing', id: 'Sedang turun salju' } },
        { id: 'dry', emoji: '🏜️', label: { en: 'The ground stays dry', id: 'Tanah tetap kering' } },
      ],
      answerId: 'ground',
    },
  },

  {
    id: 'deduction-3',
    worldId: 'deduction',
    number: 3,
    title: { en: 'Not a Bird', id: 'Bukan Burung' },
    mascotMessage: {
      en: 'If you know what ALL birds have, and something is MISSING that feature, what can you conclude? 🐟',
      id: 'Jika kamu tahu apa yang dimiliki SEMUA burung, dan sesuatu TIDAK memiliki ciri itu, apa yang bisa kamu simpulkan? 🐟',
    },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All birds have feathers. Fact: A fish does NOT have feathers. Conclusion: We still cannot tell whether a fish is a bird. Is this correct?',
        id: 'Aturan: Semua burung punya bulu. Fakta: Ikan TIDAK punya bulu. Kesimpulan: Kita tetap tidak bisa tahu apakah ikan itu burung. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-4',
    worldId: 'deduction',
    number: 4,
    title: { en: 'Chain Reasoning', id: 'Rantai Penalaran' },
    mascotMessage: {
      en: 'If A leads to B, and B leads to C, then A leads all the way to C! Follow the chain! ⛓️',
      id: 'Jika A mengarah ke B, dan B mengarah ke C, maka A mengarah sampai ke C! Ikuti rantainya! ⛓️',
    },
    xpReward: 15,
    tutorial: {
      title: { en: 'Chain Reasoning: A → B → C', id: 'Rantai Penalaran: A → B → C' },
      body: {
        en: 'Sometimes conclusions chain together: Rule 1 says A → B. Rule 2 says B → C. If A is true, then B is true (by Rule 1), and then C is true (by Rule 2). The chain carries the truth all the way through!',
        id: 'Terkadang kesimpulan berantai: Aturan 1 bilang A → B. Aturan 2 bilang B → C. Jika A benar, maka B benar (oleh Aturan 1), dan kemudian C benar (oleh Aturan 2). Rantai membawa kebenaran sampai ke ujung!',
      },
      example: {
        en: 'If it\'s cloudy (A) → it rains (B). If it rains (B) → ground is wet (C). It\'s cloudy. Conclusion: ground is wet! ✓',
        id: 'Jika mendung (A) → hujan (B). Jika hujan (B) → tanah basah (C). Sedang mendung. Kesimpulan: tanah basah! ✓',
      },
    },
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule 1: If you study hard, you learn a lot. Rule 2: If you learn a lot, you get good grades. Fact: Ali studies hard. What can we conclude?',
        id: 'Aturan 1: Jika kamu belajar keras, kamu banyak belajar. Aturan 2: Jika kamu banyak belajar, kamu mendapat nilai bagus. Fakta: Ali belajar keras. Apa kesimpulannya?',
      },
      options: [
        { id: 'good', emoji: '🌟', label: { en: 'Ali gets good grades', id: 'Ali mendapat nilai bagus' } },
        { id: 'bad', emoji: '📉', label: { en: 'Ali gets bad grades', id: 'Ali mendapat nilai buruk' } },
        { id: 'unknown', emoji: '❓', label: { en: 'We cannot know', id: 'Kita tidak bisa tahu' } },
        { id: 'skip', emoji: '💤', label: { en: 'Ali skips school', id: 'Ali membolos sekolah' } },
      ],
      answerId: 'good',
    },
  },

  {
    id: 'deduction-5',
    worldId: 'deduction',
    number: 5,
    title: { en: 'Dolphin or Fish?', id: 'Lumba-lumba atau Ikan?' },
    mascotMessage: {
      en: 'Sharing a PROPERTY with a group does NOT mean you belong to that group! Watch for this trap — the argument might be backwards. 🐬',
      id: 'Berbagi SIFAT dengan suatu kelompok BUKAN berarti kamu adalah anggota kelompok itu! Waspadai jebakan ini — argumennya mungkin terbalik. 🐬',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All fish live in water. Fact: A dolphin lives in water. Conclusion: A dolphin must be a fish. Is this correct?',
        id: 'Aturan: Semua ikan hidup di air. Fakta: Lumba-lumba hidup di air. Kesimpulan: Lumba-lumba pasti seekor ikan. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-6',
    worldId: 'deduction',
    number: 6,
    title: { en: 'Is It a Square?', id: 'Apakah Itu Persegi?' },
    mascotMessage: {
      en: 'You know the rule for squares. Shape A breaks that rule. What must that mean? 🟥',
      id: 'Kamu tahu aturan untuk persegi. Bentuk A melanggar aturan itu. Apa artinya? 🟥',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All squares have exactly 4 equal sides. Fact: Shape A has only 3 sides. Conclusion: Shape A is NOT a square. Is this correct?',
        id: 'Aturan: Semua persegi memiliki tepat 4 sisi yang sama. Fakta: Bentuk A hanya memiliki 3 sisi. Kesimpulan: Bentuk A BUKAN persegi. Apakah ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-7',
    worldId: 'deduction',
    number: 7,
    title: { en: 'Logic Steps', id: 'Langkah Logika' },
    mascotMessage: {
      en: 'Deductive reasoning has a clear order! Can you put these four steps in the right sequence? 📋',
      id: 'Penalaran deduktif memiliki urutan yang jelas! Bisakah kamu menyusun empat langkah ini dalam urutan yang benar? 📋',
    },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'rule', emoji: '📏', label: { en: 'State the general rule', id: 'Nyatakan aturan umum' } },
        { id: 'case', emoji: '🔎', label: { en: 'Identify the specific case', id: 'Identifikasi kasus spesifik' } },
        { id: 'apply', emoji: '🔗', label: { en: 'Apply the rule to the case', id: 'Terapkan aturan ke kasus' } },
        { id: 'conclude', emoji: '✅', label: { en: 'State the conclusion', id: 'Nyatakan kesimpulan' } },
      ],
    },
  },

  {
    id: 'deduction-8',
    worldId: 'deduction',
    number: 8,
    title: { en: 'Four Equal Sides', id: 'Empat Sisi Sama' },
    mascotMessage: {
      en: 'Be careful — using a rule BACKWARDS can lead to a wrong conclusion! Does sharing a property guarantee you belong to the group? 🟥',
      id: 'Hati-hati — menggunakan aturan secara TERBALIK bisa menghasilkan kesimpulan yang salah! Apakah berbagi sifat menjamin kamu anggota kelompok itu? 🟥',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All squares have exactly 4 equal sides. Fact: Shape X has exactly 4 equal sides. Conclusion: Shape X MUST be a square. Is this correct?',
        id: 'Aturan: Semua persegi memiliki tepat 4 sisi yang sama. Fakta: Bentuk X memiliki tepat 4 sisi yang sama. Kesimpulan: Bentuk X PASTI sebuah persegi. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-9',
    worldId: 'deduction',
    number: 9,
    title: { en: 'The Zero Rule', id: 'Aturan Nol' },
    mascotMessage: {
      en: 'There\'s a powerful rule in math about zero. If you know the rule, ANY number becomes easy! 🌀',
      id: 'Ada aturan yang kuat dalam matematika tentang nol. Jika kamu tahu aturannya, angka APAPUN menjadi mudah! 🌀',
    },
    xpReward: 30,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Rule: Any number × 0 = 0. Apply the rule: 999 × 0 = ___',
        id: 'Aturan: Semua angka × 0 = 0. Terapkan aturannya: 999 × 0 = ___',
      },
      visual: '9️⃣9️⃣9️⃣ × 0️⃣ = ❓',
      answer: '0',
      inputType: 'numeric',
    },
  },

  // ── Planning Peaks ───────────────────────────────────────────
  // Constraint planning: the clues in the mascot line decide the order,
  // not everyday habit. Deliberately distinct from Step by Step (decomposition),
  // where the answer is the familiar real-world routine.
  {
    id: 'planning-0',
    worldId: 'planning',
    number: 0,
    title: { en: 'Pack by the Clues', id: 'Kemas Sesuai Petunjuk' },
    mascotMessage: {
      en: 'Pico has two packing rules: the map always goes in first, and the rope must go in before the tent. 🎒',
      id: 'Pico punya dua aturan mengemas: peta selalu masuk pertama, dan tali harus masuk sebelum tenda. 🎒',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Planning?', id: 'Apa itu Perencanaan?' },
      body: {
        en: 'A plan is an order of steps that obeys every clue. Here the clues decide the order, not what you would normally do first. Read every clue before you tap!',
        id: 'Rencana adalah urutan langkah yang menaati semua petunjuk. Di sini petunjuklah yang menentukan urutan, bukan kebiasaan sehari-hari. Baca semua petunjuk sebelum mengetuk!',
      },
      example: {
        en: 'Clue: "the boots go on before the jacket". So even if you always grab the jacket first, the boots must come first here.',
        id: 'Petunjuk: "sepatu bot dipakai sebelum jaket". Jadi walaupun kamu biasanya ambil jaket dulu, sepatu bot tetap harus lebih dulu.',
      },
    },
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'map', emoji: '🗺️', label: { en: 'Map', id: 'Peta' } },
        { id: 'rope', emoji: '🪢', label: { en: 'Rope', id: 'Tali' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Tent', id: 'Tenda' } },
      ],
    },
  },
  {
    id: 'planning-1',
    worldId: 'planning',
    number: 1,
    title: { en: 'Fire Rule', id: 'Aturan Api' },
    mascotMessage: {
      en: 'Camp rule: Pico may never leave camp while the fire is still burning. 🔥',
      id: 'Aturan kemah: Pico tidak boleh meninggalkan kemah selama api masih menyala. 🔥',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'The fire is still burning and Pico wants to leave. What must he do first?',
        id: 'Api masih menyala dan Pico ingin pergi. Apa yang harus ia lakukan lebih dulu?',
      },
      options: [
        { id: 'douse', emoji: '🪣', label: { en: 'Put out the fire', id: 'Padamkan api' } },
        { id: 'leave', emoji: '🚶', label: { en: 'Just leave camp', id: 'Langsung tinggalkan kemah' } },
        { id: 'cook', emoji: '🍳', label: { en: 'Cook more food', id: 'Masak makanan lagi' } },
        { id: 'sleep', emoji: '😴', label: { en: 'Take a nap', id: 'Tidur sebentar' } },
      ],
      answerId: 'douse',
    },
  },
  {
    id: 'planning-2',
    worldId: 'planning',
    number: 2,
    title: { en: 'Camp Setup', id: 'Dirikan Kemah' },
    mascotMessage: {
      en: 'Three clues: the ground is cleared before anything else, the tent goes up before the sleeping bag goes in, and the fire is lit last. ⛺',
      id: 'Tiga petunjuk: tanah dibersihkan sebelum apa pun, tenda didirikan sebelum kantong tidur dimasukkan, dan api dinyalakan paling akhir. ⛺',
    },
    xpReward: 12,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'clear', emoji: '🧹', label: { en: 'Clear the ground', id: 'Bersihkan tanah' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Put up the tent', id: 'Dirikan tenda' } },
        { id: 'bag', emoji: '🛌', label: { en: 'Sleeping bag in', id: 'Kantong tidur' } },
        { id: 'fire', emoji: '🔥', label: { en: 'Light the fire', id: 'Nyalakan api' } },
      ],
    },
  },
  {
    id: 'planning-3',
    worldId: 'planning',
    number: 3,
    title: { en: 'Backpack Limit', id: 'Batas Ransel' },
    mascotMessage: {
      en: 'A good planner checks the weight limit before packing anything else. 🎒',
      id: 'Perencana yang baik memeriksa batas berat sebelum mengemas apa pun. 🎒',
    },
    xpReward: 12,
    puzzle: {
      type: 'math',
      question: {
        en: 'Pico\'s bag holds 8 kg. The tent is 3 kg and the rope is 2 kg. How many kg are left for food?',
        id: 'Ransel Pico muat 8 kg. Tenda 3 kg dan tali 2 kg. Berapa kg tersisa untuk makanan?',
      },
      visual: '🎒',
      options: ['5', '3', '13', '2'],
      answer: '3',
    },
  },
  {
    id: 'planning-4',
    worldId: 'planning',
    number: 4,
    title: { en: 'Closed Bridge', id: 'Jembatan Ditutup' },
    mascotMessage: {
      en: 'Check the plan against the rule. Does it really work? 🌉',
      id: 'Periksa rencana terhadap aturannya. Apakah benar-benar berhasil? 🌉',
    },
    xpReward: 14,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bridge only opens after 10 o\'clock. Pico\'s plan is to cross the bridge at 9 o\'clock. This plan works.',
        id: 'Jembatan baru dibuka setelah pukul 10. Rencana Pico adalah menyeberang pukul 9. Rencana ini berhasil.',
      },
      answer: false,
    },
  },
  {
    id: 'planning-5',
    worldId: 'planning',
    number: 5,
    title: { en: 'Clue Chain', id: 'Rantai Petunjuk' },
    mascotMessage: {
      en: 'Three clues: Pico checks the map first, he refills water right after the map, and he always eats last. 💧',
      id: 'Tiga petunjuk: Pico membaca peta lebih dulu, mengisi air tepat setelah peta, dan selalu makan paling akhir. 💧',
    },
    xpReward: 16,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'map', emoji: '🗺️', label: { en: 'Check the map', id: 'Baca peta' } },
        { id: 'water', emoji: '💧', label: { en: 'Refill water', id: 'Isi air' } },
        { id: 'pack', emoji: '🎒', label: { en: 'Pack the bag', id: 'Kemas ransel' } },
        { id: 'eat', emoji: '🍞', label: { en: 'Eat a snack', id: 'Makan bekal' } },
      ],
    },
  },
  {
    id: 'planning-6',
    worldId: 'planning',
    number: 6,
    title: { en: 'Only What Fits', id: 'Hanya yang Muat' },
    mascotMessage: {
      en: 'Read the weight on each item carefully. One of them is very close to the limit! ⚖️',
      id: 'Baca berat setiap barang dengan teliti. Salah satunya sangat dekat dengan batas! ⚖️',
    },
    xpReward: 18,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Pico may only pack items lighter than 3 kg. Tap every item that follows the rule.',
        id: 'Pico hanya boleh membawa barang yang lebih ringan dari 3 kg. Ketuk semua barang yang sesuai aturan.',
      },
      items: [
        { id: 'rope', emoji: '🪢', label: { en: 'Rope, 1 kg', id: 'Tali, 1 kg' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Tent, 4 kg', id: 'Tenda, 4 kg' } },
        { id: 'torch', emoji: '🔦', label: { en: 'Torch, 2 kg', id: 'Senter, 2 kg' } },
        { id: 'stove', emoji: '🍳', label: { en: 'Stove, 3 kg', id: 'Kompor, 3 kg' } },
        { id: 'compass', emoji: '🧭', label: { en: 'Compass, 1 kg', id: 'Kompas, 1 kg' } },
      ],
      correctIds: ['rope', 'torch', 'compass'],
    },
  },
  {
    id: 'planning-7',
    worldId: 'planning',
    number: 7,
    title: { en: 'Start by When?', id: 'Mulai Pukul Berapa?' },
    mascotMessage: {
      en: 'This time you know the finish, not the start. Work backwards from the top! ⛰️',
      id: 'Kali ini kamu tahu akhirnya, bukan awalnya. Berpikirlah mundur dari puncak! ⛰️',
    },
    xpReward: 18,
    puzzle: {
      type: 'math',
      question: {
        en: 'Pico must reach the top at 12 o\'clock. Climbing takes 3 hours and he rests for 1 hour on the way. What time must he start?',
        id: 'Pico harus tiba di puncak pukul 12. Mendaki butuh 3 jam dan ia istirahat 1 jam di jalan. Pukul berapa ia harus mulai?',
      },
      visual: '⛰️',
      options: ['9', '8', '10', '16'],
      answer: '8',
    },
  },
  {
    id: 'planning-8',
    worldId: 'planning',
    number: 8,
    title: { en: 'Fix the Plan', id: 'Perbaiki Rencana' },
    mascotMessage: {
      en: 'Pico\'s plan broke a clue. The clues are: the helmet goes on before the rope, the rope before the climb, and the photo is only taken at the top. 🧗',
      id: 'Rencana Pico melanggar sebuah petunjuk. Petunjuknya: helm dipakai sebelum tali, tali sebelum memanjat, dan foto hanya diambil di puncak. 🧗',
    },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'helmet', emoji: '🪖', label: { en: 'Put on helmet', id: 'Pakai helm' } },
        { id: 'rope', emoji: '🪢', label: { en: 'Clip the rope', id: 'Kaitkan tali' } },
        { id: 'climb', emoji: '🧗', label: { en: 'Climb up', id: 'Memanjat' } },
        { id: 'photo', emoji: '📸', label: { en: 'Take the photo', id: 'Ambil foto' } },
      ],
    },
  },
  {
    id: 'planning-9',
    worldId: 'planning',
    number: 9,
    title: { en: 'Four-Clue Expedition', id: 'Ekspedisi Empat Petunjuk' },
    mascotMessage: {
      en: 'Four clues: meeting the guide is first, the permit is signed right after meeting the guide, the summit is last, and the sled is loaded before reaching base camp. 🏔️',
      id: 'Empat petunjuk: menemui pemandu paling dulu, izin ditandatangani tepat setelah menemui pemandu, puncak paling akhir, dan kereta luncur dimuat sebelum sampai di kemah dasar. 🏔️',
    },
    xpReward: 22,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'guide', emoji: '🧗', label: { en: 'Meet the guide', id: 'Temui pemandu' } },
        { id: 'permit', emoji: '📝', label: { en: 'Sign the permit', id: 'Tanda tangani izin' } },
        { id: 'sled', emoji: '🛷', label: { en: 'Load the sled', id: 'Muat kereta luncur' } },
        { id: 'basecamp', emoji: '🏕️', label: { en: 'Reach base camp', id: 'Kemah dasar' } },
        { id: 'summit', emoji: '🏔️', label: { en: 'Reach the summit', id: 'Sampai puncak' } },
      ],
    },
  },

  // ── Chance Camp ──────────────────────────────────────────────
  // Uncertainty: impossible, possible, certain, likely, and fair.
  // True-false answers deliberately run false, true, false, true (INV-Q3).
  {
    id: 'probability-0',
    worldId: 'probability',
    number: 0,
    title: { en: 'Can It Happen?', id: 'Mungkinkah Terjadi?' },
    mascotMessage: {
      en: 'Lucky never peeks inside the bag. He only thinks about what is in there. 🎒',
      id: 'Lucky tidak pernah mengintip ke dalam kantong. Ia hanya memikirkan apa isinya. 🎒',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'Impossible, Possible, Certain', id: 'Mustahil, Mungkin, Pasti' },
      body: {
        en: 'Some things can never happen, some might happen, and some always happen. Impossible means there is no way. Certain means there is no other way. Everything in between is possible.',
        id: 'Ada hal yang tidak akan pernah terjadi, ada yang mungkin terjadi, dan ada yang selalu terjadi. Mustahil berarti tidak ada caranya. Pasti berarti tidak ada kemungkinan lain. Di antaranya adalah mungkin.',
      },
      example: {
        en: 'A bag of only green marbles: pulling green is certain, pulling red is impossible.',
        id: 'Kantong berisi kelereng hijau saja: mengambil hijau itu pasti, mengambil merah itu mustahil.',
      },
    },
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'This bag holds only red marbles 🔴🔴🔴. Lucky can still pull out a blue one.',
        id: 'Kantong ini hanya berisi kelereng merah 🔴🔴🔴. Lucky tetap bisa mengambil yang biru.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-1',
    worldId: 'probability',
    number: 1,
    title: { en: 'Sure Thing', id: 'Pasti Terjadi' },
    mascotMessage: {
      en: 'When every marble is the same colour, there is no surprise left. 🟡',
      id: 'Kalau semua kelereng warnanya sama, tidak ada kejutan lagi. 🟡',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Every marble in this bag is yellow 🟡🟡🟡🟡. Lucky pulls one out without looking. What will he get?',
        id: 'Semua kelereng di kantong ini kuning 🟡🟡🟡🟡. Lucky mengambil satu tanpa melihat. Apa yang ia dapat?',
      },
      options: [
        { id: 'yellow', emoji: '🟡', label: { en: 'Yellow, for certain', id: 'Kuning, sudah pasti' } },
        { id: 'maybe_red', emoji: '🔴', label: { en: 'Maybe red', id: 'Mungkin merah' } },
        { id: 'blue', emoji: '🔵', label: { en: 'Blue, for certain', id: 'Biru, sudah pasti' } },
        { id: 'either', emoji: '🟠', label: { en: 'Yellow or orange', id: 'Kuning atau oranye' } },
      ],
      answerId: 'yellow',
    },
  },
  {
    id: 'probability-2',
    worldId: 'probability',
    number: 2,
    title: { en: 'Mystery Bag', id: 'Kantong Misteri' },
    mascotMessage: {
      en: 'More of a colour means a better chance of that colour. But better is not the same as sure! 🎯',
      id: 'Semakin banyak suatu warna, semakin besar peluangnya. Tapi lebih besar bukan berarti pasti! 🎯',
    },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'The bag has 7 red 🔴 and 3 blue 🔵 marbles. Lucky pulls one without looking. What is true?',
        id: 'Kantong berisi 7 kelereng merah 🔴 dan 3 biru 🔵. Lucky mengambil satu tanpa melihat. Apa yang benar?',
      },
      options: [
        { id: 'red_likely', emoji: '🔴', label: { en: 'Red is more likely', id: 'Merah lebih mungkin' } },
        { id: 'blue_likely', emoji: '🔵', label: { en: 'Blue is more likely', id: 'Biru lebih mungkin' } },
        { id: 'red_certain', emoji: '💯', label: { en: 'Red is certain', id: 'Merah sudah pasti' } },
        { id: 'same', emoji: '⚖️', label: { en: 'Both have the same chance', id: 'Peluang keduanya sama' } },
      ],
      answerId: 'red_likely',
    },
  },
  {
    id: 'probability-3',
    worldId: 'probability',
    number: 3,
    title: { en: 'Fair Spinner', id: 'Roda Adil' },
    mascotMessage: {
      en: 'Look at the size of the parts, not at your favourite colour. 🎡',
      id: 'Lihat ukuran bagiannya, bukan warna kesukaanmu. 🎡',
    },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'This spinner has 4 parts of exactly the same size: 🟥 🟦 🟩 🟨. Which colour is it most likely to land on?',
        id: 'Roda ini punya 4 bagian yang ukurannya sama persis: 🟥 🟦 🟩 🟨. Warna mana yang paling mungkin didapat?',
      },
      options: [
        { id: 'equal', emoji: '⚖️', label: { en: 'All four have the same chance', id: 'Keempatnya punya peluang sama' } },
        { id: 'red', emoji: '🟥', label: { en: 'Red, because it is first', id: 'Merah, karena paling depan' } },
        { id: 'yellow', emoji: '🟨', label: { en: 'Yellow, because it is last', id: 'Kuning, karena paling belakang' } },
        { id: 'green', emoji: '🟩', label: { en: 'Green, because it is lucky', id: 'Hijau, karena warna keberuntungan' } },
      ],
      answerId: 'equal',
    },
  },
  {
    id: 'probability-4',
    worldId: 'probability',
    number: 4,
    title: { en: 'What Could Happen?', id: 'Apa yang Mungkin Terjadi?' },
    mascotMessage: {
      en: 'A result can only happen if it is actually on the spinner. 🎡',
      id: 'Sebuah hasil hanya mungkin terjadi kalau memang ada di roda. 🎡',
    },
    xpReward: 14,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Lucky\'s spinner has only frog, butterfly and ladybug sections. Tap every result that is possible.',
        id: 'Roda Lucky hanya punya bagian katak, kupu-kupu, dan kepik. Ketuk semua hasil yang mungkin terjadi.',
      },
      items: [
        { id: 'frog', emoji: '🐸', label: { en: 'Frog', id: 'Katak' } },
        { id: 'fish', emoji: '🐟', label: { en: 'Fish', id: 'Ikan' } },
        { id: 'butterfly', emoji: '🦋', label: { en: 'Butterfly', id: 'Kupu-kupu' } },
        { id: 'bee', emoji: '🐝', label: { en: 'Bee', id: 'Lebah' } },
        { id: 'ladybug', emoji: '🐞', label: { en: 'Ladybug', id: 'Kepik' } },
      ],
      correctIds: ['frog', 'butterfly', 'ladybug'],
    },
  },
  {
    id: 'probability-5',
    worldId: 'probability',
    number: 5,
    title: { en: 'Possible, Not Certain', id: 'Mungkin, Belum Pasti' },
    mascotMessage: {
      en: 'Rare is not the same as impossible. Think carefully! 🟣',
      id: 'Jarang bukan berarti mustahil. Pikirkan baik-baik! 🟣',
    },
    xpReward: 16,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bag has 5 green 🟢 and 1 purple 🟣 marble. Lucky might pull the purple one, but it is not certain.',
        id: 'Kantong berisi 5 kelereng hijau 🟢 dan 1 ungu 🟣. Lucky mungkin mengambil yang ungu, tetapi belum pasti.',
      },
      answer: true,
    },
  },
  {
    id: 'probability-6',
    worldId: 'probability',
    number: 6,
    title: { en: 'Count the Chances', id: 'Hitung Peluangnya' },
    mascotMessage: {
      en: 'Sometimes it is easier to count the parts you do not want. 🎡',
      id: 'Kadang lebih mudah menghitung bagian yang tidak kamu inginkan. 🎡',
    },
    xpReward: 16,
    puzzle: {
      type: 'math',
      question: {
        en: 'A spinner has 8 equal sections: 5 green, 2 red and 1 blue. How many sections are not green?',
        id: 'Sebuah roda punya 8 bagian sama besar: 5 hijau, 2 merah, dan 1 biru. Berapa bagian yang bukan hijau?',
      },
      visual: '🎡',
      options: ['5', '3', '2', '8'],
      answer: '3',
    },
  },
  {
    id: 'probability-7',
    worldId: 'probability',
    number: 7,
    title: { en: 'Is the Game Fair?', id: 'Adilkah Permainannya?' },
    mascotMessage: {
      en: 'A game is fair when every player has the same chance to win, not just a rule of their own. 🎲',
      id: 'Permainan itu adil kalau setiap pemain punya peluang menang yang sama, bukan sekadar punya aturan sendiri. 🎲',
    },
    xpReward: 18,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Ana wins if the dice shows 1, 2, 3, 4 or 5. Budi wins only if it shows 6. This game is fair for both of them.',
        id: 'Ana menang jika dadu menunjukkan 1, 2, 3, 4, atau 5. Budi menang hanya jika muncul 6. Permainan ini adil bagi keduanya.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-8',
    worldId: 'probability',
    number: 8,
    title: { en: 'Put It Back', id: 'Kembalikan Lagi' },
    mascotMessage: {
      en: 'Ask yourself: after the marble goes back in, what is inside the bag now? 🎒',
      id: 'Tanyakan pada dirimu: setelah kelereng dikembalikan, apa isi kantong sekarang? 🎒',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bag has 4 red 🔴 and 4 blue 🔵 marbles. Lucky pulls one out, looks at it, and puts it back. The next pull has exactly the same chances as the first.',
        id: 'Kantong berisi 4 kelereng merah 🔴 dan 4 biru 🔵. Lucky mengambil satu, melihatnya, lalu mengembalikannya. Pengambilan berikutnya punya peluang yang sama persis dengan yang pertama.',
      },
      answer: true,
    },
  },
  {
    id: 'probability-9',
    worldId: 'probability',
    number: 9,
    title: { en: 'Read the Tally', id: 'Baca Catatan Hasil' },
    mascotMessage: {
      en: 'Results give you a good guess about a hidden spinner, but never a promise about the next spin. 📊',
      id: 'Hasil percobaan memberi tebakan bagus tentang roda tersembunyi, tapi tidak pernah menjanjikan putaran berikutnya. 📊',
    },
    xpReward: 22,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Lucky spun a hidden spinner 20 times: orange 🟠 came up 12 times, green 🟢 5 times and blue 🔵 3 times. Which is the best guess about the spinner?',
        id: 'Lucky memutar roda tersembunyi 20 kali: oranye 🟠 muncul 12 kali, hijau 🟢 5 kali, dan biru 🔵 3 kali. Tebakan mana yang paling masuk akal tentang roda itu?',
      },
      options: [
        { id: 'orange_biggest', emoji: '🟠', label: { en: 'The orange part is probably the biggest', id: 'Bagian oranye mungkin yang paling besar' } },
        { id: 'no_blue', emoji: '🚫', label: { en: 'There is no blue part at all', id: 'Tidak ada bagian biru sama sekali' } },
        { id: 'all_equal', emoji: '⚖️', label: { en: 'All three parts are the same size', id: 'Ketiga bagian sama besar' } },
        { id: 'blue_due', emoji: '⏳', label: { en: 'Blue must come next, it has waited long enough', id: 'Biru pasti muncul berikutnya, sudah lama tidak keluar' } },
      ],
      answerId: 'orange_biggest',
    },
  },
  // ── Spatial Studio ───────────────────────────────────────────
  {
    id: 'spatial-0',
    worldId: 'spatial',
    number: 0,
    title: { en: 'Same Shape, New Spot', id: 'Bentuk Sama, Tempat Baru' },
    mascotMessage: {
      en: 'Orbit slid a piece across the frame. It did not turn it and did not flip it. 🧭',
      id: 'Orbit menggeser sebuah potongan di dalam bingkai. Potongan itu tidak diputar dan tidak dibalik. 🧭',
    },
    xpReward: 12,
    tutorial: {
      title: { en: 'How the frames work', id: 'Cara membaca bingkai' },
      body: {
        en: 'Each frame is a little grid. Solid squares are the piece, dotted squares are empty space. Usually one square carries a dot, and in a shape puzzle that dot stays on the very same corner of the piece the whole time — so you can always tell which way the piece is facing. A few later puzzles use the dot for something else, and those ones tell you what it means.',
        id: 'Setiap bingkai adalah kisi kecil. Kotak penuh adalah potongannya, kotak putus-putus adalah ruang kosong. Biasanya satu kotak punya titik, dan pada teka-teki bentuk titik itu selalu berada di sudut potongan yang sama — jadi kamu selalu bisa tahu ke arah mana potongan itu menghadap. Beberapa teka-teki berikutnya memakai titik untuk hal lain, dan teka-teki itu akan memberi tahu artinya.',
      },
      example: {
        en: 'Sliding a piece never moves the dot to a different corner. Turning or flipping it does.',
        id: 'Menggeser potongan tidak pernah memindahkan titik ke sudut yang lain. Memutar atau membaliknya iya.',
      },
    },
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Which frame shows exactly the same piece, just moved to a new spot?',
        id: 'Bingkai mana yang menunjukkan potongan yang sama persis, hanya pindah tempat?',
      },
      figure: ['o#..', '.#..', '....', '....'],
      options: [
        { id: 'a', grid: ['....', '....', '.o#.', '..#.'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['....', '....', '.#o.', '.#..'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['....', '....', '..o.', '.##.'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['....', '....', '.o#.', '....'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-1',
    worldId: 'spatial',
    number: 1,
    title: { en: 'Flip the Flag', id: 'Balik Benderanya' },
    mascotMessage: {
      en: 'Orbit holds the flag up to a mirror standing on its right side. Left and right swap over; top and bottom stay put. 🪞',
      id: 'Orbit menaruh bendera di depan cermin yang berdiri di sisi kanannya. Kiri dan kanan bertukar; atas dan bawah tetap. 🪞',
    },
    xpReward: 13,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Which frame shows the flag flipped left to right?',
        id: 'Bingkai mana yang menunjukkan bendera dibalik dari kiri ke kanan?',
      },
      figure: ['o##.', '.#..', '.#..', '....'],
      options: [
        { id: 'a', grid: ['....', '.#..', '.#..', 'o##.'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['.##o', '..#.', '..#.', '....'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['o##.', '..#.', '..#.', '....'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['.o##', '..#.', '..#.', '....'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'b',
    },
  },
  {
    id: 'spatial-2',
    worldId: 'spatial',
    number: 2,
    title: { en: 'The Lake Reflection', id: 'Pantulan di Danau' },
    mascotMessage: {
      en: 'A tree stands at the edge of a still lake. The water shows it upside down, never back to front. 🌊',
      id: 'Sebuah pohon berdiri di tepi danau yang tenang. Air memantulkannya terbalik ke bawah, bukan tertukar kiri-kanan. 🌊',
    },
    xpReward: 14,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Which frame shows the tree reflected in the water below it?',
        id: 'Bingkai mana yang menunjukkan pohon terpantul di air di bawahnya?',
      },
      figure: ['.o..', '.#..', '###.', '....'],
      options: [
        { id: 'a', grid: ['..o.', '..#.', '.###', '....'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['....', '.###', '..#.', '..o.'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['....', '.o..', '.#..', '###.'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['....', '###.', '.#..', '.o..'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'd',
    },
  },
  {
    id: 'spatial-3',
    worldId: 'spatial',
    number: 3,
    title: { en: 'A Quarter Turn Right', id: 'Seperempat Putaran ke Kanan' },
    mascotMessage: {
      en: 'Every frame below holds the very same signpost. Only the turn is different, so follow the dot. 🧭',
      id: 'Semua bingkai di bawah berisi papan penunjuk yang sama persis. Hanya putarannya yang berbeda, jadi ikuti titiknya. 🧭',
    },
    xpReward: 15,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Orbit turns this signpost one quarter turn to the right, the way clock hands go. Which frame shows it after the turn?',
        id: 'Orbit memutar papan penunjuk ini seperempat putaran ke kanan, searah jarum jam. Bingkai mana yang menunjukkannya setelah diputar?',
      },
      figure: ['o..', '#..', '##.'],
      options: [
        { id: 'a', grid: ['..o', '..#', '.##'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['.##', '..#', '..o'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['##o', '#..', '...'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['...', '..#', 'o##'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'c',
    },
  },
  {
    id: 'spatial-4',
    worldId: 'spatial',
    number: 4,
    title: { en: 'Walk the Map', id: 'Susuri Petanya' },
    mascotMessage: {
      en: 'This is the park seen from above. Orbit leaves a trail on every square it walks over. 🗺️',
      id: 'Ini taman dilihat dari atas. Orbit meninggalkan jejak di setiap kotak yang dilewatinya. 🗺️',
    },
    xpReward: 15,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Orbit starts on the dot, walks 2 squares down, and then walks 2 squares to the right. Which frame shows the trail?',
        id: 'Orbit mulai dari titik, berjalan 2 kotak ke bawah, lalu berjalan 2 kotak ke kanan. Bingkai mana yang menunjukkan jejaknya?',
      },
      figure: ['o...', '....', '....', '....'],
      note: {
        en: 'Here the dot is the square Orbit starts on. Every square Orbit walks over turns solid.',
        id: 'Di sini titik adalah kotak tempat Orbit mulai. Setiap kotak yang dilewati Orbit menjadi penuh.',
      },
      options: [
        { id: 'a', grid: ['o...', '#...', '###.', '....'], label: { en: 'Trail A', id: 'Jejak A' } },
        { id: 'b', grid: ['o##.', '..#.', '..#.', '....'], label: { en: 'Trail B', id: 'Jejak B' } },
        { id: 'c', grid: ['o...', '###.', '....', '....'], label: { en: 'Trail C', id: 'Jejak C' } },
        { id: 'd', grid: ['o...', '#...', '#...', '###.'], label: { en: 'Trail D', id: 'Jejak D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-5',
    worldId: 'spatial',
    number: 5,
    title: { en: 'Turn, Then Flip', id: 'Putar, Lalu Balik' },
    mascotMessage: {
      en: 'Two moves, one after the other. Swapping the order does not give the same answer. 🔁',
      id: 'Dua gerakan, satu demi satu. Menukar urutannya tidak memberi hasil yang sama. 🔁',
    },
    xpReward: 17,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Orbit turns this piece a quarter turn to the right, and only then flips it left to right. Which frame shows the result?',
        id: 'Orbit memutar potongan ini seperempat putaran ke kanan, baru setelah itu membaliknya dari kiri ke kanan. Bingkai mana yang menunjukkan hasilnya?',
      },
      figure: ['o..', '###', '...'],
      options: [
        { id: 'a', grid: ['.#o', '.#.', '.#.'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['o#.', '.#.', '.#.'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['..o', '###', '...'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['.#.', '.#.', '.#o'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'b',
    },
  },
  {
    id: 'spatial-6',
    worldId: 'spatial',
    number: 6,
    title: { en: 'Which Door Did Orbit Use?', id: 'Orbit Masuk Lewat Pintu Mana?' },
    mascotMessage: {
      en: 'Turn your body to face the way Orbit walks in, and only then decide which side is Orbit\'s left. 🚪',
      id: 'Hadapkan badanmu ke arah jalan masuk Orbit, baru tentukan sisi mana yang ada di kiri Orbit. 🚪',
    },
    xpReward: 18,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'This is a room seen from above, and the solid squares are one long wall. Orbit walked in through a door and saw that wall on Orbit\'s left. Which frame shows the door Orbit used?',
        id: 'Ini ruangan dilihat dari atas, dan kotak-kotak penuh adalah satu dinding panjang. Orbit masuk lewat sebuah pintu dan melihat dinding itu di sebelah kiri Orbit. Bingkai mana yang menunjukkan pintu yang dipakai Orbit?',
      },
      figure: ['.#..', '.#..', '.#..', '.#..'],
      note: {
        en: 'The solid squares are the wall. In each answer the dot is the door, and Orbit walks straight into the room from it.',
        id: 'Kotak-kotak penuh adalah dinding. Di setiap jawaban, titik adalah pintunya, dan Orbit berjalan lurus masuk ke ruangan dari sana.',
      },
      options: [
        { id: 'a', grid: ['.#o.', '.#..', '.#..', '.#..'], label: { en: 'The top door', id: 'Pintu atas' } },
        { id: 'b', grid: ['.#..', 'o#..', '.#..', '.#..'], label: { en: 'The left door', id: 'Pintu kiri' } },
        { id: 'c', grid: ['.#..', '.#.o', '.#..', '.#..'], label: { en: 'The right door', id: 'Pintu kanan' } },
        { id: 'd', grid: ['.#..', '.#..', '.#..', '.#o.'], label: { en: 'The bottom door', id: 'Pintu bawah' } },
      ],
      answerId: 'd',
    },
  },
  {
    id: 'spatial-7',
    worldId: 'spatial',
    number: 7,
    title: { en: 'Fold the Paper', id: 'Lipat Kertasnya' },
    mascotMessage: {
      en: 'When paper folds over, the mark travels with it and lands as far below the fold as it was above. 📄',
      id: 'Saat kertas dilipat, tandanya ikut berpindah dan mendarat sejauh di bawah lipatan seperti jaraknya di atas tadi. 📄',
    },
    xpReward: 20,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Orbit folds the top half of this paper straight down onto the bottom half. Which frame shows the square the dot lands on?',
        id: 'Orbit melipat setengah bagian atas kertas ini lurus ke bawah menutupi setengah bagian bawah. Bingkai mana yang menunjukkan kotak tempat titik itu mendarat?',
      },
      figure: ['..o.', '....', '.##.', '.##.'],
      note: {
        en: 'Here the dot is a mark drawn on the paper. The block of four squares is the bottom half it folds onto.',
        id: 'Di sini titik adalah tanda yang digambar di kertas. Blok empat kotak adalah bagian bawah tempat lipatan itu mendarat.',
      },
      options: [
        { id: 'a', grid: ['....', '....', '.##.', '.#o.'], label: { en: 'Square A', id: 'Kotak A' } },
        { id: 'b', grid: ['....', '....', '.#o.', '.##.'], label: { en: 'Square B', id: 'Kotak B' } },
        { id: 'c', grid: ['....', '....', '.##.', '.o#.'], label: { en: 'Square C', id: 'Kotak C' } },
        { id: 'd', grid: ['....', '....', '.o#.', '.##.'], label: { en: 'Square D', id: 'Kotak D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-8',
    worldId: 'spatial',
    number: 8,
    title: { en: 'Before the Turn', id: 'Sebelum Diputar' },
    mascotMessage: {
      en: 'To undo a turn to the left, turn the very same amount back to the right. ⏪',
      id: 'Untuk membatalkan putaran ke kiri, putar kembali sebanyak itu juga ke kanan. ⏪',
    },
    xpReward: 22,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Orbit has already turned a piece a quarter turn to the left, and the frame above is what came out. Which frame shows how the piece looked before that turn?',
        id: 'Orbit sudah memutar sebuah potongan seperempat putaran ke kiri, dan bingkai di atas adalah hasilnya. Bingkai mana yang menunjukkan bentuk potongan itu sebelum diputar?',
      },
      figure: ['.o#', '##.', '...'],
      options: [
        { id: 'a', grid: ['#..', 'o#.', '.#.'], label: { en: 'Shape A', id: 'Bentuk A' } },
        { id: 'b', grid: ['...', '.##', '#o.'], label: { en: 'Shape B', id: 'Bentuk B' } },
        { id: 'c', grid: ['#o.', '.##', '...'], label: { en: 'Shape C', id: 'Bentuk C' } },
        { id: 'd', grid: ['.#.', '.#o', '..#'], label: { en: 'Shape D', id: 'Bentuk D' } },
      ],
      answerId: 'd',
    },
  },
  {
    id: 'spatial-9',
    worldId: 'spatial',
    number: 9,
    title: { en: 'The Robot Trail', id: 'Jejak Robot' },
    mascotMessage: {
      en: 'After the first turn the robot faces a new way, so its next right is a new right too. 🤖',
      id: 'Setelah putaran pertama, robot menghadap ke arah baru, jadi kanannya yang berikutnya juga arah yang baru. 🤖',
    },
    xpReward: 25,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The robot starts on the dot facing the top of the map. It drives 2 squares, turns right, drives 1 square, turns right again, and drives 1 more. Which frame shows its trail and where it stops?',
        id: 'Robot mulai dari titik menghadap ke atas peta. Ia melaju 2 kotak, belok kanan, melaju 1 kotak, belok kanan lagi, lalu melaju 1 kotak. Bingkai mana yang menunjukkan jejaknya dan tempat ia berhenti?',
      },
      figure: ['....', '....', '....', '.o..'],
      note: {
        en: 'On the map above the dot is where the robot starts. In each answer the dot is where it stops, and every square it drove over is solid.',
        id: 'Di peta atas, titik adalah tempat robot mulai. Di setiap jawaban, titik adalah tempat ia berhenti, dan setiap kotak yang dilaluinya menjadi penuh.',
      },
      options: [
        { id: 'a', grid: ['..o.', '.##.', '.#..', '.#..'], label: { en: 'Trail A', id: 'Jejak A' } },
        { id: 'b', grid: ['....', '.##.', '.#o.', '.#..'], label: { en: 'Trail B', id: 'Jejak B' } },
        { id: 'c', grid: ['....', '.##o', '.#..', '.#..'], label: { en: 'Trail C', id: 'Jejak C' } },
        { id: 'd', grid: ['o...', '##..', '.#..', '.#..'], label: { en: 'Trail D', id: 'Jejak D' } },
      ],
      answerId: 'b',
    },
  },
]

/** Both tiers. Order here does not matter — every lookup sorts or filters by number. */
export const THINKING_LESSONS: ThinkingLesson[] = [
  ...THINKING_LESSONS_CORE,
  ...THINKING_LESSONS_ADVANCED,
]

export function getThinkingLessonsByWorld(worldId: string): ThinkingLesson[] {
  return THINKING_LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getThinkingLessonByNumber(worldId: string, number: number): ThinkingLesson | undefined {
  return THINKING_LESSONS.find(l => l.worldId === worldId && l.number === number)
}
