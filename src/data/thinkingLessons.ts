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
      statement: { en: 'If you pour cooking oil into a glass of water, the oil always floats on TOP of the water and does not mix in — no matter how hard you stir.', id: 'Jika kamu menuangkan minyak goreng ke dalam segelas air, minyak selalu mengapung di ATAS air dan tidak bercampur — seberapapun keras kamu mengaduknya.' },
      answer: true,
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
        en: 'Rule: All birds have feathers. Fact: A fish does NOT have feathers. Conclusion: A fish is NOT a bird. Is this correct?',
        id: 'Aturan: Semua burung punya bulu. Fakta: Ikan TIDAK punya bulu. Kesimpulan: Ikan BUKAN burung. Apakah ini benar?',
      },
      answer: true,
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
]

export function getThinkingLessonsByWorld(worldId: string): ThinkingLesson[] {
  return THINKING_LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getThinkingLessonByNumber(worldId: string, number: number): ThinkingLesson | undefined {
  return THINKING_LESSONS.find(l => l.worldId === worldId && l.number === number)
}
