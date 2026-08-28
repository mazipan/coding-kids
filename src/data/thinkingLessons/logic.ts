import type { ThinkingLesson } from '../../types'

export const logicLessons: ThinkingLesson[] = [
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
]
