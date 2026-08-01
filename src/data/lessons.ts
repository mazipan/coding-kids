import type { Lesson, CellType } from '../types'

// Helper to build an empty grid
function emptyGrid(rows: number, cols: number): CellType[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, (): CellType => 'empty')
  )
}

export const LESSONS: Lesson[] = [
  // ─────────────────────────────────────────────
  // WORLD 1: JUNGLE ADVENTURE — Sequences
  // ─────────────────────────────────────────────
  {
    id: 'jungle-1',
    worldId: 'jungle',
    number: 1,
    title: { en: 'First Steps', id: 'Langkah Pertama' },
    story: {
      en: 'Bingo the monkey just woke up and spotted a yummy banana! It\'s 3 steps to the right — watch him walk all the way there!',
      id: 'Bingo si monyet baru saja bangun dan melihat pisang lezat! Pisangnya 3 langkah ke kanan — lihat dia berjalan ke sana!',
    },
    mascotMessage: {
      en: "Hi! I'm Bingo! 🐒 I see a banana over there! Use ➡️ Move Right blocks to walk me to it!",
      id: 'Hei! Aku Bingo! 🐒 Ada pisang di sana! Gunakan blok ➡️ Gerak Kanan untuk mengantarku ke sana!',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [{ id: 'b1', pos: [2, 3] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 3,
    xpReward: 50,
    hints: [
      { en: 'Drag the ➡️ Move Right block into the workspace!', id: 'Seret blok ➡️ Gerak Kanan ke area kerja!' },
      { en: 'The banana is 3 steps to the right. Use 3 ➡️ Move Right blocks!', id: 'Pisangnya 3 langkah ke kanan. Gunakan 3 blok ➡️ Gerak Kanan!' },
    ],
    starThresholds: [5, 3],
  },
  {
    id: 'jungle-2',
    worldId: 'jungle',
    number: 2,
    title: { en: 'Long Trail', id: 'Jalur Panjang' },
    story: {
      en: 'Bingo needs to go all the way to the other side of the jungle! The banana is far away — he must take 5 steps to reach it.',
      id: 'Bingo harus pergi ke ujung hutan! Pisangnya jauh — dia harus melangkah 5 kali untuk mencapainya.',
    },
    mascotMessage: {
      en: "Wow, that banana is far away! 😮 I need FIVE steps to get there. Count with me: 1, 2, 3, 4, 5!",
      id: 'Wah, pisangnya jauh sekali! 😮 Aku butuh LIMA langkah untuk sampai. Hitung bersamaku: 1, 2, 3, 4, 5!',
    },
    gridRows: 5,
    gridCols: 7,
    cells: emptyGrid(5, 7),
    startPos: [2, 0],
    items: [{ id: 'b1', pos: [2, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 5,
    xpReward: 60,
    hints: [
      { en: 'Count the empty squares between Bingo and the banana!', id: 'Hitung kotak kosong antara Bingo dan pisang!' },
      { en: 'The banana is 5 steps to the right. Use 5 ➡️ Move Right blocks!', id: 'Pisangnya 5 langkah ke kanan. Gunakan 5 blok ➡️ Gerak Kanan!' },
    ],
    starThresholds: [7, 5],
  },
  {
    id: 'jungle-3',
    worldId: 'jungle',
    number: 3,
    title: { en: 'Down the Slope', id: 'Turun Lereng' },
    story: {
      en: 'The jungle has hills! Bingo needs to go right AND down to find a banana hidden below.',
      id: 'Hutan ini punya bukit! Bingo perlu ke kanan DAN ke bawah untuk menemukan pisang yang tersembunyi di bawah.',
    },
    mascotMessage: {
      en: "Whoa, it's not just right this time! I need to go right AND down. Try combining blocks! 🌿",
      id: 'Wah, kali ini bukan cuma ke kanan! Aku perlu ke kanan DAN ke bawah. Coba gabungkan blok! 🌿',
    },
    gridRows: 6,
    gridCols: 6,
    cells: emptyGrid(6, 6),
    startPos: [0, 0],
    items: [{ id: 'b1', pos: [2, 3] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 5,
    xpReward: 70,
    hints: [
      { en: 'You can mix different move blocks!', id: 'Kamu bisa menggabungkan blok gerak yang berbeda!' },
      { en: 'Go right 3 times, then down 2 times!', id: 'Ke kanan 3 kali, lalu ke bawah 2 kali!' },
    ],
    starThresholds: [7, 5],
  },
  {
    id: 'jungle-4',
    worldId: 'jungle',
    number: 4,
    title: { en: 'Two Bananas!', id: 'Dua Pisang!' },
    story: {
      en: 'Today is Bingo\'s lucky day — there are TWO bananas! He needs to collect both. Plan your path carefully!',
      id: 'Hari ini hari keberuntungan Bingo — ada DUA pisang! Dia perlu mengumpulkan keduanya. Rencanakan jalurmu!',
    },
    mascotMessage: {
      en: 'TWO bananas! 🍌🍌 I need to collect both! Think about the order — where should I go first?',
      id: 'DUA pisang! 🍌🍌 Aku perlu mengumpulkan keduanya! Pikirkan urutannya — mana yang harus kudatangi dulu?',
    },
    gridRows: 6,
    gridCols: 6,
    cells: emptyGrid(6, 6),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 3] },
      { id: 'b2', pos: [3, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 7,
    xpReward: 80,
    hints: [
      { en: 'Collect the first banana, then plan the path to the second!', id: 'Kumpulkan pisang pertama, lalu rencanakan jalan ke pisang kedua!' },
      { en: 'Go right 3 times to get banana 1, then down 3 to get banana 2!', id: 'Ke kanan 3 kali untuk pisang 1, lalu ke bawah 3 kali untuk pisang 2!' },
    ],
    starThresholds: [10, 7],
  },
  {
    id: 'jungle-5',
    worldId: 'jungle',
    number: 5,
    title: { en: 'Jungle Maze', id: 'Labirin Hutan' },
    story: {
      en: 'Bingo finds a banana at the end of a winding jungle path. Navigate through the twists and turns!',
      id: 'Bingo menemukan pisang di ujung jalan hutan yang berliku. Navigasi melalui tikungan dan belokan!',
    },
    mascotMessage: {
      en: 'This is tricky! 😅 The path goes right, down, right, down... I need your help to figure it out!',
      id: 'Ini susah! 😅 Jalannya ke kanan, ke bawah, ke kanan, ke bawah... Aku butuh bantuanmu untuk mencari tahu!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: emptyGrid(6, 6),
    startPos: [0, 0],
    items: [{ id: 'b1', pos: [4, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 8,
    xpReward: 90,
    hints: [
      { en: 'Try to plan the path before coding it!', id: 'Coba rencanakan jalurnya sebelum membuat kode!' },
      { en: 'Count: right 4, down 4 = 8 blocks total. Or find a shorter path!', id: 'Hitung: kanan 4, bawah 4 = 8 blok total. Atau cari jalur yang lebih pendek!' },
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'jungle-6',
    worldId: 'jungle',
    number: 6,
    title: { en: 'Banana Bonanza', id: 'Pesta Pisang' },
    story: {
      en: 'The jungle is full of bananas today! Bingo needs to collect ALL of them. This is the biggest challenge yet!',
      id: 'Hutan penuh pisang hari ini! Bingo perlu mengumpulkan SEMUA pisang. Ini tantangan terbesar!',
    },
    mascotMessage: {
      en: "Wow, so many bananas! 🍌🍌🍌 Can you plan a path that collects them all? You're so smart!",
      id: 'Wow, banyak banget pisang! 🍌🍌🍌 Bisa kamu rencanakan jalur yang mengumpulkan semuanya? Kamu pintar banget!',
    },
    gridRows: 6,
    gridCols: 7,
    cells: emptyGrid(6, 7),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 2] },
      { id: 'b2', pos: [2, 4] },
      { id: 'b3', pos: [4, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 12,
    xpReward: 100,
    hints: [
      { en: 'Plan the full path before adding blocks!', id: 'Rencanakan jalur lengkap sebelum menambahkan blok!' },
      { en: 'Try right 2, down 2, right 2, down 2, right 2. That\'s 10 moves!', id: 'Coba: kanan 2, bawah 2, kanan 2, bawah 2, kanan 2. Itu 10 gerakan!' },
    ],
    starThresholds: [16, 12],
  },

  // ─────────────────────────────────────────────
  // WORLD 2: SPACE STATION — Loops
  // ─────────────────────────────────────────────
  {
    id: 'space-1',
    worldId: 'space',
    number: 1,
    title: { en: 'Star Line', id: 'Baris Bintang' },
    story: {
      en: 'Astro the rocket is on a mission to collect stars! They\'re lined up in a row. This looks like a pattern...',
      id: 'Astro si roket sedang misi mengumpulkan bintang! Mereka berjajar dalam satu baris. Ini seperti sebuah pola...',
    },
    mascotMessage: {
      en: "Stars in a line! 🚀⭐⭐⭐ Instead of moving right LOTS of times, try using the REPEAT block! It's like magic!",
      id: 'Bintang dalam satu baris! 🚀⭐⭐⭐ Daripada gerak ke kanan BERKALI-KALI, coba blok ULANGI! Seperti sihir!',
    },
    gridRows: 5,
    gridCols: 7,
    cells: emptyGrid(5, 7),
    startPos: [2, 0],
    items: [
      { id: 's1', pos: [2, 1] },
      { id: 's2', pos: [2, 2] },
      { id: 's3', pos: [2, 3] },
      { id: 's4', pos: [2, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 100,
    hints: [
      { en: "Instead of 8 blocks, use REPEAT! Put 'Move Right' inside the repeat block.", id: "Daripada 8 blok, gunakan ULANGI! Taruh 'Gerak Kanan' di dalam blok ulangi." },
      { en: "Set repeat to 4, and put 'Move Right' inside. That collects all stars in 3 blocks!", id: "Atur ulangi ke 4, dan taruh 'Gerak Kanan' di dalamnya. Itu mengumpulkan semua bintang dengan 3 blok!" },
    ],
    starThresholds: [8, 3],
  },
  {
    id: 'space-2',
    worldId: 'space',
    number: 2,
    title: { en: 'Orbit Path', id: 'Jalur Orbit' },
    story: {
      en: 'Astro needs to travel down a column of stars. They\'re all in a vertical line this time!',
      id: 'Astro perlu turun melalui kolom bintang. Semuanya dalam satu garis vertikal kali ini!',
    },
    mascotMessage: {
      en: 'Stars going DOWN! Can you use repeat again but with Move Down this time? 🚀',
      id: 'Bintang ke BAWAH! Bisa gunakan ulangi lagi tapi dengan Gerak Bawah kali ini? 🚀',
    },
    gridRows: 7,
    gridCols: 5,
    cells: emptyGrid(7, 5),
    startPos: [0, 2],
    items: [
      { id: 's1', pos: [1, 2] },
      { id: 's2', pos: [2, 2] },
      { id: 's3', pos: [3, 2] },
      { id: 's4', pos: [4, 2] },
      { id: 's5', pos: [5, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 110,
    hints: [
      { en: 'The stars are all below! Use repeat with Move Down.', id: 'Bintangnya semua di bawah! Gunakan ulangi dengan Gerak Bawah.' },
      { en: 'Repeat 5 times with Move Down inside. That\'s only 3 blocks!', id: 'Ulangi 5 kali dengan Gerak Bawah di dalamnya. Hanya 3 blok!' },
    ],
    starThresholds: [10, 3],
  },
  {
    id: 'space-3',
    worldId: 'space',
    number: 3,
    title: { en: 'Star Square', id: 'Kotak Bintang' },
    story: {
      en: 'Astro spotted stars forming a square border in space! Collect them all by moving in a square pattern.',
      id: 'Astro melihat bintang-bintang membentuk batas persegi di luar angkasa! Kumpulkan semuanya dengan pola persegi.',
    },
    mascotMessage: {
      en: 'Whoa, they make a SQUARE! 🌟 Use repeat for each side! Each side has the same number of steps!',
      id: 'Wah, mereka membentuk PERSEGI! 🌟 Gunakan ulangi untuk setiap sisi! Setiap sisi memiliki jumlah langkah yang sama!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: emptyGrid(6, 6),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] },
      { id: 's4', pos: [1, 3] }, { id: 's5', pos: [2, 3] }, { id: 's6', pos: [3, 3] },
      { id: 's7', pos: [3, 2] }, { id: 's8', pos: [3, 1] }, { id: 's9', pos: [3, 0] },
      { id: 's10', pos: [2, 0] }, { id: 's11', pos: [1, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 12,
    xpReward: 120,
    hints: [
      { en: 'Think of it as 4 sides of a square!', id: 'Bayangkan sebagai 4 sisi persegi!' },
      { en: 'Use 4 repeat blocks: repeat 3 right, repeat 3 down, repeat 3 left, repeat 3 up!', id: 'Gunakan 4 blok ulangi: ulangi 3 kanan, ulangi 3 bawah, ulangi 3 kiri, ulangi 3 atas!' },
    ],
    starThresholds: [20, 12],
  },
  {
    id: 'space-4',
    worldId: 'space',
    number: 4,
    title: { en: 'Asteroid Field', id: 'Medan Asteroid' },
    story: {
      en: 'Astro must navigate through an asteroid field and collect scattered stars. Watch out for obstacles!',
      id: 'Astro harus menavigasi ladang asteroid dan mengumpulkan bintang yang tersebar. Waspada rintangan!',
    },
    mascotMessage: {
      en: "Asteroids everywhere! ☄️ Move carefully — you can't go through the rocky asteroids!",
      id: 'Asteroid di mana-mana! ☄️ Bergerak hati-hati — kamu tidak bisa melewati asteroid berbatu!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(6, 6)
      g[1][2] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][4] = 'obstacle'
      g[4][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 3] },
      { id: 's2', pos: [3, 0] },
      { id: 's3', pos: [5, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 16,
    xpReward: 130,
    hints: [
      { en: 'Plan a path around the asteroids!', id: 'Rencanakan jalur menghindari asteroid!' },
      { en: "You can't go through asteroids. Find the open paths!", id: 'Kamu tidak bisa melewati asteroid. Cari jalur yang terbuka!' },
    ],
    starThresholds: [24, 16],
  },
  {
    id: 'space-5',
    worldId: 'space',
    number: 5,
    title: { en: 'Constellation', id: 'Rasi Bintang' },
    story: {
      en: 'Astro discovered a beautiful constellation pattern made of stars. Collect them all in the fewest moves!',
      id: 'Astro menemukan pola rasi bintang yang indah. Kumpulkan semuanya dengan gerakan paling sedikit!',
    },
    mascotMessage: {
      en: 'A constellation! ✨ This one needs clever loops. Think about the pattern before coding!',
      id: 'Sebuah rasi bintang! ✨ Ini butuh perulangan yang cerdik. Pikirkan polanya sebelum membuat kode!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: emptyGrid(7, 7),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 2] },
      { id: 's2', pos: [0, 4] },
      { id: 's3', pos: [2, 1] },
      { id: 's4', pos: [2, 3] },
      { id: 's5', pos: [2, 5] },
      { id: 's6', pos: [4, 2] },
      { id: 's7', pos: [4, 4] },
      { id: 's8', pos: [6, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 20,
    xpReward: 140,
    hints: [
      { en: 'Look for patterns in the star positions!', id: 'Cari pola dalam posisi bintang!' },
      { en: 'You can move to each star using a combination of moves. Plan a route first!', id: 'Kamu bisa bergerak ke setiap bintang menggunakan kombinasi gerakan. Rencanakan rutenya dulu!' },
    ],
    starThresholds: [30, 20],
  },
  {
    id: 'space-6',
    worldId: 'space',
    number: 6,
    title: { en: 'Space Marathon', id: 'Maraton Luar Angkasa' },
    story: {
      en: 'Final space mission! Astro needs to loop around a giant ring of stars. The biggest loop challenge yet!',
      id: 'Misi luar angkasa terakhir! Astro perlu mengelilingi cincin bintang raksasa. Tantangan perulangan terbesar!',
    },
    mascotMessage: {
      en: 'The BIGGEST loop yet! 🚀 Can you use just a few blocks to collect ALL these stars? Challenge accepted? 😄',
      id: 'Perulangan TERBESAR! 🚀 Bisakah kamu gunakan hanya beberapa blok untuk mengumpulkan SEMUA bintang ini? Tantangan diterima? 😄',
    },
    gridRows: 7,
    gridCols: 8,
    cells: emptyGrid(7, 8),
    startPos: [0, 0],
    items: Array.from({ length: 6 }, (_, i) => ({ id: `s${i + 1}`, pos: [0, i + 1] as [number, number] })),
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 150,
    hints: [
      { en: 'All stars are in a line — perfect for repeat!', id: 'Semua bintang dalam satu baris — sempurna untuk ulangi!' },
      { en: 'Repeat 6 times: move right. That\'s just 3 blocks!', id: 'Ulangi 6 kali: gerak kanan. Hanya 3 blok!' },
    ],
    starThresholds: [10, 3],
  },

  // ─────────────────────────────────────────────
  // WORLD 3: OCEAN DEEP — Variables
  // ─────────────────────────────────────────────
  {
    id: 'ocean-1',
    worldId: 'ocean',
    number: 1,
    title: { en: 'Count the Gems', id: 'Hitung Permata' },
    story: {
      en: 'Finn the diver found gems! He wants to count how many are in the row. Let\'s use a variable to count!',
      id: 'Finn si penyelam menemukan permata! Dia ingin menghitung berapa banyak yang ada. Ayo gunakan variabel untuk menghitung!',
    },
    mascotMessage: {
      en: 'Use a VARIABLE to count gems as you collect them! A variable is like a box that stores a number. 💎',
      id: 'Gunakan VARIABEL untuk menghitung permata saat kamu mengumpulkannya! Variabel itu seperti kotak yang menyimpan angka. 💎',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [
      { id: 'g1', pos: [2, 1] },
      { id: 'g2', pos: [2, 2] },
      { id: 'g3', pos: [2, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 6,
    xpReward: 150,
    hints: [
      { en: "Create a variable called 'count' and set it to 0!", id: "Buat variabel bernama 'hitung' dan atur ke 0!" },
      { en: "Each time you collect a gem, add 1 to 'count'!", id: "Setiap kali kamu mengumpulkan permata, tambahkan 1 ke 'hitung'!" },
    ],
    starThresholds: [10, 6],
  },
  {
    id: 'ocean-2',
    worldId: 'ocean',
    number: 2,
    title: { en: 'Deep Dive', id: 'Selam Dalam' },
    story: {
      en: 'The gems are scattered! Finn needs to store his position in variables to navigate efficiently.',
      id: 'Permatanya tersebar! Finn perlu menyimpan posisinya dalam variabel untuk navigasi yang efisien.',
    },
    mascotMessage: {
      en: 'Variables can store your position too! 🤿 This is like giving your program a memory!',
      id: 'Variabel juga bisa menyimpan posisimu! 🤿 Ini seperti memberikan memori pada programmu!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: emptyGrid(6, 6),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [1, 2] },
      { id: 'g2', pos: [3, 4] },
      { id: 'g3', pos: [5, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 15,
    xpReward: 160,
    hints: [
      { en: 'Plan your path from gem to gem!', id: 'Rencanakan jalurmu dari permata ke permata!' },
      { en: 'Go to gem 1 first, then gem 2, then gem 3!', id: 'Pergi ke permata 1 dulu, lalu permata 2, lalu permata 3!' },
    ],
    starThresholds: [22, 15],
  },
  {
    id: 'ocean-3',
    worldId: 'ocean',
    number: 3,
    title: { en: 'Treasure Hunt', id: 'Perburuan Harta' },
    story: {
      en: 'A treasure chest awaits at the bottom of the ocean! Finn must count gems along the way to unlock it.',
      id: 'Ada peti harta karun di dasar samudra! Finn harus menghitung permata di sepanjang jalan untuk membukanya.',
    },
    mascotMessage: {
      en: 'Use a variable to count gems! When count reaches 3, the treasure chest unlocks! 🐚',
      id: 'Gunakan variabel untuk menghitung permata! Ketika hitungan mencapai 3, peti harta terbuka! 🐚',
    },
    gridRows: 7,
    gridCols: 6,
    cells: emptyGrid(7, 6),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 2] },
      { id: 'g2', pos: [3, 1] },
      { id: 'g3', pos: [5, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 18,
    xpReward: 170,
    hints: [
      { en: 'Collect all gems to unlock the treasure!', id: 'Kumpulkan semua permata untuk membuka harta!' },
      { en: 'Plan a route: go to each gem, collecting as you go!', id: 'Rencanakan rute: pergi ke setiap permata, kumpulkan sambil berjalan!' },
    ],
    starThresholds: [26, 18],
  },
  {
    id: 'ocean-4',
    worldId: 'ocean',
    number: 4,
    title: { en: 'Coral Reef', id: 'Terumbu Karang' },
    story: {
      en: 'The coral reef is full of hidden gems! Some paths are blocked by coral. Finn must find the right way.',
      id: 'Terumbu karang penuh permata tersembunyi! Beberapa jalur diblokir karang. Finn harus menemukan jalan yang benar.',
    },
    mascotMessage: {
      en: 'Coral blocks some paths! 🪸 Navigate around them carefully!',
      id: 'Karang memblokir beberapa jalur! 🪸 Navigasi menghindarinya dengan hati-hati!',
    },
    gridRows: 6,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(6, 7)
      g[1][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [3, 1] },
      { id: 'g3', pos: [5, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 22,
    xpReward: 180,
    hints: [
      { en: 'Avoid the coral obstacles!', id: 'Hindari rintangan karang!' },
      { en: 'Find paths around the coral to reach each gem!', id: 'Cari jalur mengelilingi karang untuk mencapai setiap permata!' },
    ],
    starThresholds: [30, 22],
  },
  {
    id: 'ocean-5',
    worldId: 'ocean',
    number: 5,
    title: { en: 'Ocean Champion', id: 'Juara Samudra' },
    story: {
      en: 'The final ocean challenge! Finn must collect gems in a spiral pattern using smart variables and loops.',
      id: 'Tantangan samudra terakhir! Finn harus mengumpulkan permata dalam pola spiral menggunakan variabel dan perulangan!',
    },
    mascotMessage: {
      en: "The final ocean level! 🌊 Use everything you've learned — moves, loops, AND variables! You got this! 🤿",
      id: 'Level samudra terakhir! 🌊 Gunakan segalanya yang sudah kamu pelajari — gerakan, perulangan, DAN variabel! Kamu bisa! 🤿',
    },
    gridRows: 7,
    gridCols: 7,
    cells: emptyGrid(7, 7),
    startPos: [3, 3],
    items: [
      { id: 'g1', pos: [0, 0] },
      { id: 'g2', pos: [0, 6] },
      { id: 'g3', pos: [6, 0] },
      { id: 'g4', pos: [6, 6] },
      { id: 'g5', pos: [3, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 30,
    xpReward: 200,
    hints: [
      { en: 'Start from the center and plan your route to each gem!', id: 'Mulai dari tengah dan rencanakan rutenya ke setiap permata!' },
      { en: 'Visit each corner and the middle left gem!', id: 'Kunjungi setiap sudut dan permata tengah kiri!' },
    ],
    starThresholds: [45, 30],
  },

  // ─────────────────────────────────────────────
  // WORLD 4: CRYSTAL CAVES — Conditions (If/Else)
  // ─────────────────────────────────────────────
  {
    id: 'caves-1',
    worldId: 'caves',
    number: 1,
    title: { en: 'Magic Door', id: 'Pintu Ajaib' },
    story: {
      en: 'Zara found a magic door that only opens if she has at least 3 crystals. Use IF to check!',
      id: 'Zara menemukan pintu ajaib yang hanya terbuka jika dia memiliki minimal 3 kristal. Gunakan JIKA untuk memeriksa!',
    },
    mascotMessage: {
      en: 'IF I have 3 crystals, the door opens! IF is like making a decision. Try it! 🧝',
      id: 'JIKA aku punya 3 kristal, pintu terbuka! JIKA itu seperti membuat keputusan. Coba! 🧝',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [
      { id: 'c1', pos: [2, 1] },
      { id: 'c2', pos: [2, 2] },
      { id: 'c3', pos: [2, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    optimalBlockCount: 8,
    xpReward: 180,
    hints: [
      { en: 'Collect all crystals first, then check!', id: 'Kumpulkan semua kristal dulu, lalu periksa!' },
      { en: 'Use IF to check if your count is 3!', id: 'Gunakan JIKA untuk memeriksa apakah hitunganmu 3!' },
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'caves-2',
    worldId: 'caves',
    number: 2,
    title: { en: 'Choose Your Path', id: 'Pilih Jalurmu' },
    story: {
      en: 'The cave splits into two paths! Use IF-ELSE to choose the right one based on which path has crystals.',
      id: 'Gua terbagi menjadi dua jalur! Gunakan JIKA-SELAIN untuk memilih jalur yang benar berdasarkan kristal.',
    },
    mascotMessage: {
      en: 'IF-ELSE is for choosing! IF something is true, do this. ELSE, do something different! 💜',
      id: 'JIKA-SELAIN itu untuk memilih! JIKA sesuatu benar, lakukan ini. SELAIN itu, lakukan hal berbeda! 💜',
    },
    gridRows: 7,
    gridCols: 6,
    cells: emptyGrid(7, 6),
    startPos: [0, 2],
    items: [
      { id: 'c1', pos: [2, 1] },
      { id: 'c2', pos: [4, 3] },
      { id: 'c3', pos: [6, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    optimalBlockCount: 14,
    xpReward: 190,
    hints: [
      { en: 'Plan the path from top to bottom!', id: 'Rencanakan jalur dari atas ke bawah!' },
      { en: 'Navigate through the cave to collect all crystals!', id: 'Navigasi melalui gua untuk mengumpulkan semua kristal!' },
    ],
    starThresholds: [20, 14],
  },
  {
    id: 'caves-3',
    worldId: 'caves',
    number: 3,
    title: { en: 'Crystal Collector', id: 'Pengumpul Kristal' },
    story: {
      en: 'Magic crystals appear and disappear! Zara must use conditions to react to what she finds.',
      id: 'Kristal ajaib muncul dan menghilang! Zara harus menggunakan kondisi untuk bereaksi terhadap apa yang ditemukannya.',
    },
    mascotMessage: {
      en: "Conditions let you react to what's happening! Collect all the glowing crystals! 🔮",
      id: 'Kondisi membuatmu bereaksi terhadap apa yang terjadi! Kumpulkan semua kristal bercahaya! 🔮',
    },
    gridRows: 6,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(6, 7)
      g[1][3] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 3] },
      { id: 'c2', pos: [2, 5] },
      { id: 'c3', pos: [4, 1] },
      { id: 'c4', pos: [5, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    optimalBlockCount: 25,
    xpReward: 200,
    hints: [
      { en: 'Navigate around obstacles to reach each crystal!', id: 'Navigasi menghindari rintangan untuk mencapai setiap kristal!' },
      { en: 'Plan your route carefully to avoid blocked paths!', id: 'Rencanakan rutenya dengan hati-hati untuk menghindari jalur yang terblokir!' },
    ],
    starThresholds: [35, 25],
  },
  {
    id: 'caves-4',
    worldId: 'caves',
    number: 4,
    title: { en: 'The Guardian', id: 'Sang Penjaga' },
    story: {
      en: 'A cave guardian blocks the path! Only let past if you have exactly 5 crystals. Use conditions!',
      id: 'Penjaga gua menghalangi jalan! Hanya boleh lewat jika kamu memiliki tepat 5 kristal. Gunakan kondisi!',
    },
    mascotMessage: {
      en: 'The guardian checks: IF crystals == 5, you can pass! Collect exactly 5! 🧝💜',
      id: 'Penjaga memeriksa: JIKA kristal == 5, kamu bisa lewat! Kumpulkan tepat 5! 🧝💜',
    },
    gridRows: 7,
    gridCols: 6,
    cells: emptyGrid(7, 6),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 2] },
      { id: 'c2', pos: [1, 4] },
      { id: 'c3', pos: [3, 1] },
      { id: 'c4', pos: [4, 5] },
      { id: 'c5', pos: [6, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    optimalBlockCount: 30,
    xpReward: 210,
    hints: [
      { en: 'Collect all 5 crystals in order!', id: 'Kumpulkan semua 5 kristal secara urut!' },
      { en: 'Plan a route that visits each crystal position!', id: 'Rencanakan rute yang mengunjungi setiap posisi kristal!' },
    ],
    starThresholds: [42, 30],
  },
  {
    id: 'caves-5',
    worldId: 'caves',
    number: 5,
    title: { en: 'Cave Master', id: 'Master Gua' },
    story: {
      en: 'The final cave challenge! Use everything you know — loops, variables, AND conditions — to escape the cave!',
      id: 'Tantangan gua terakhir! Gunakan segalanya — perulangan, variabel, DAN kondisi — untuk keluar dari gua!',
    },
    mascotMessage: {
      en: "Final cave level! 💎 Use loops, variables, and if-else together! You're amazing! 🧝✨",
      id: 'Level gua terakhir! 💎 Gunakan perulangan, variabel, dan jika-selain bersama! Kamu luar biasa! 🧝✨',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[1][2] = 'obstacle'
      g[2][5] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 4] },
      { id: 'c2', pos: [2, 2] },
      { id: 'c3', pos: [3, 6] },
      { id: 'c4', pos: [5, 1] },
      { id: 'c5', pos: [6, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    optimalBlockCount: 40,
    xpReward: 250,
    hints: [
      { en: 'Navigate around obstacles to all crystals!', id: 'Navigasi menghindari rintangan ke semua kristal!' },
      { en: 'Plan the most efficient route through the cave!', id: 'Rencanakan rute paling efisien melalui gua!' },
    ],
    starThresholds: [55, 40],
  },

  // ─────────────────────────────────────────────
  // WORLD 5: ROBOT FACTORY — Functions
  // ─────────────────────────────────────────────
  {
    id: 'factory-1',
    worldId: 'factory',
    number: 1,
    title: { en: 'Build a Function', id: 'Buat Fungsi' },
    story: {
      en: 'Bolt the robot needs to assemble parts! Create a FUNCTION called "pickupGear" to reuse code!',
      id: 'Bolt si robot perlu merakit bagian! Buat FUNGSI bernama "ambilGear" untuk menggunakan kembali kode!',
    },
    mascotMessage: {
      en: 'A FUNCTION is like a mini-program you can use over and over! Make one and call it! 🤖⚙️',
      id: 'FUNGSI itu seperti mini-program yang bisa kamu gunakan berulang kali! Buat satu dan panggil! 🤖⚙️',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [
      { id: 'g1', pos: [2, 2] },
      { id: 'g2', pos: [2, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    optimalBlockCount: 8,
    xpReward: 200,
    hints: [
      { en: 'Create a function, then call it multiple times!', id: 'Buat fungsi, lalu panggil beberapa kali!' },
      { en: 'Define a function that moves right and collects, then call it twice!', id: 'Definisikan fungsi yang bergerak ke kanan dan mengumpulkan, lalu panggil dua kali!' },
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'factory-2',
    worldId: 'factory',
    number: 2,
    title: { en: 'Assembly Line', id: 'Lini Perakitan' },
    story: {
      en: 'The factory assembly line repeats the same task. Create a function and call it in a loop!',
      id: 'Lini perakitan pabrik mengulang tugas yang sama. Buat fungsi dan panggil dalam perulangan!',
    },
    mascotMessage: {
      en: 'Functions in loops are super powerful! 🏭 Define once, use many times!',
      id: 'Fungsi dalam perulangan sangat kuat! 🏭 Definisikan sekali, gunakan berkali-kali!',
    },
    gridRows: 5,
    gridCols: 8,
    cells: emptyGrid(5, 8),
    startPos: [2, 0],
    items: Array.from({ length: 5 }, (_, i) => ({
      id: `g${i + 1}`,
      pos: [2, i * 1 + 1] as [number, number],
    })),
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    optimalBlockCount: 5,
    xpReward: 210,
    hints: [
      { en: 'Create a function that moves right once and collects!', id: 'Buat fungsi yang bergerak ke kanan sekali dan mengumpulkan!' },
      { en: 'Then call that function in a repeat loop 5 times!', id: 'Lalu panggil fungsi itu dalam perulangan ulangi 5 kali!' },
    ],
    starThresholds: [15, 5],
  },
  {
    id: 'factory-3',
    worldId: 'factory',
    number: 3,
    title: { en: 'Robot Helpers', id: 'Pembantu Robot' },
    story: {
      en: 'Bolt needs helper functions to navigate complex factory floors. Define multiple functions!',
      id: 'Bolt membutuhkan fungsi pembantu untuk menavigasi lantai pabrik yang rumit. Definisikan beberapa fungsi!',
    },
    mascotMessage: {
      en: 'Multiple functions working together! 🤖🤖 Each function does one job!',
      id: 'Beberapa fungsi bekerja bersama! 🤖🤖 Setiap fungsi melakukan satu pekerjaan!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[2][2] = 'obstacle'
      g[3][4] = 'obstacle'
      g[5][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [3, 1] },
      { id: 'g3', pos: [5, 5] },
      { id: 'g4', pos: [6, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    optimalBlockCount: 30,
    xpReward: 230,
    hints: [
      { en: 'Create functions for common move patterns!', id: 'Buat fungsi untuk pola gerakan umum!' },
      { en: 'Use functions to organize your code neatly!', id: 'Gunakan fungsi untuk mengorganisir kodenya dengan rapi!' },
    ],
    starThresholds: [45, 30],
  },
  {
    id: 'factory-4',
    worldId: 'factory',
    number: 4,
    title: { en: 'Master Builder', id: 'Pembangun Master' },
    story: {
      en: 'Build a complex robot using functions with inputs! Functions can take parameters to be even more powerful.',
      id: 'Bangun robot kompleks menggunakan fungsi dengan input! Fungsi bisa menerima parameter untuk menjadi lebih kuat.',
    },
    mascotMessage: {
      en: 'Functions with INPUTS are even cooler! 🔧 Send different values to the same function!',
      id: 'Fungsi dengan INPUT lebih keren! 🔧 Kirim nilai berbeda ke fungsi yang sama!',
    },
    gridRows: 7,
    gridCols: 8,
    cells: emptyGrid(7, 8),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 3] },
      { id: 'g2', pos: [2, 6] },
      { id: 'g3', pos: [4, 2] },
      { id: 'g4', pos: [5, 7] },
      { id: 'g5', pos: [6, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    optimalBlockCount: 35,
    xpReward: 250,
    hints: [
      { en: 'Create reusable functions to navigate to each gear!', id: 'Buat fungsi yang dapat digunakan kembali untuk navigasi ke setiap gear!' },
      { en: 'Think about which movements repeat and turn them into functions!', id: 'Pikirkan gerakan mana yang berulang dan jadikan fungsi!' },
    ],
    starThresholds: [50, 35],
  },
  {
    id: 'factory-5',
    worldId: 'factory',
    number: 5,
    title: { en: 'Factory Champion', id: 'Juara Pabrik' },
    story: {
      en: 'The biggest factory challenge! Bolt must use functions, loops, and conditions to collect all gears.',
      id: 'Tantangan pabrik terbesar! Bolt harus menggunakan fungsi, perulangan, dan kondisi untuk mengumpulkan semua gear.',
    },
    mascotMessage: {
      en: "You're a function master! 🏆 Use everything you know to conquer the factory! 🤖",
      id: 'Kamu master fungsi! 🏆 Gunakan segalanya yang kamu tahu untuk menaklukkan pabrik! 🤖',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[1][3] = 'obstacle'
      g[2][6] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][5] = 'obstacle'
      g[6][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 5] },
      { id: 'g2', pos: [2, 2] },
      { id: 'g3', pos: [3, 7] },
      { id: 'g4', pos: [5, 0] },
      { id: 'g5', pos: [6, 4] },
      { id: 'g6', pos: [7, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    optimalBlockCount: 50,
    xpReward: 300,
    hints: [
      { en: 'Navigate carefully around obstacles!', id: 'Navigasi hati-hati menghindari rintangan!' },
      { en: 'Use functions to organize collecting each gear!', id: 'Gunakan fungsi untuk mengorganisir pengumpulan setiap gear!' },
    ],
    starThresholds: [70, 50],
  },

  // ─────────────────────────────────────────────
  // WORLD 6: TIME PORTAL — Arrays & Lists
  // ─────────────────────────────────────────────
  {
    id: 'portal-1',
    worldId: 'portal',
    number: 1,
    title: { en: 'Time List', id: 'Daftar Waktu' },
    story: {
      en: 'Nova the time traveler collects time crystals and stores them in a list! Lists can hold many items at once.',
      id: 'Nova si penjelajah waktu mengumpulkan kristal waktu dan menyimpannya dalam daftar! Daftar bisa menampung banyak barang sekaligus.',
    },
    mascotMessage: {
      en: 'A LIST is like a backpack that holds many things in order! Store time crystals in a list! ⏰',
      id: 'DAFTAR itu seperti ransel yang menampung banyak hal secara berurutan! Simpan kristal waktu dalam daftar! ⏰',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [
      { id: 't1', pos: [2, 1] },
      { id: 't2', pos: [2, 2] },
      { id: 't3', pos: [2, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    optimalBlockCount: 8,
    xpReward: 250,
    hints: [
      { en: 'Create a list to store collected items!', id: 'Buat daftar untuk menyimpan item yang dikumpulkan!' },
      { en: 'Add each crystal to your list as you collect it!', id: 'Tambahkan setiap kristal ke daftarmu saat mengumpulkannya!' },
    ],
    starThresholds: [14, 8],
  },
  {
    id: 'portal-2',
    worldId: 'portal',
    number: 2,
    title: { en: 'Time Warp', id: 'Pelintir Waktu' },
    story: {
      en: "The time portals shuffle the crystals! Nova must use a list to track which ones she's visited.",
      id: 'Portal waktu mengacak kristal! Nova harus menggunakan daftar untuk melacak mana yang sudah dikunjungi.',
    },
    mascotMessage: {
      en: "Use a list to track where you've been! Lists remember the order! 🌀",
      id: 'Gunakan daftar untuk melacak di mana kamu sudah berada! Daftar mengingat urutan! 🌀',
    },
    gridRows: 7,
    gridCols: 7,
    cells: emptyGrid(7, 7),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 3] },
      { id: 't2', pos: [2, 6] },
      { id: 't3', pos: [4, 1] },
      { id: 't4', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    optimalBlockCount: 25,
    xpReward: 280,
    hints: [
      { en: 'Use a list to keep track of collected crystals!', id: 'Gunakan daftar untuk melacak kristal yang sudah dikumpulkan!' },
      { en: 'Navigate to each crystal and add it to your list!', id: 'Navigasi ke setiap kristal dan tambahkan ke daftarmu!' },
    ],
    starThresholds: [38, 25],
  },
  {
    id: 'portal-3',
    worldId: 'portal',
    number: 3,
    title: { en: 'Dimension Jumper', id: 'Pelompat Dimensi' },
    story: {
      en: 'Nova must jump between dimensions! Each dimension has crystals. Use lists to organize which to visit.',
      id: 'Nova harus melompat antar dimensi! Setiap dimensi memiliki kristal. Gunakan daftar untuk mengorganisir mana yang harus dikunjungi.',
    },
    mascotMessage: {
      en: 'Lists make it easy to organize information! 🧑‍🚀 Store your plan in a list!',
      id: 'Daftar memudahkan pengorganisasian informasi! 🧑‍🚀 Simpan rencanamu dalam daftar!',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[1][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[5][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 5] },
      { id: 't2', pos: [2, 1] },
      { id: 't3', pos: [4, 6] },
      { id: 't4', pos: [5, 4] },
      { id: 't5', pos: [6, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    optimalBlockCount: 40,
    xpReward: 300,
    hints: [
      { en: 'Navigate around obstacles carefully!', id: 'Navigasi menghindari rintangan dengan hati-hati!' },
      { en: 'Use lists to organize your route planning!', id: 'Gunakan daftar untuk mengorganisir perencanaan rute!' },
    ],
    starThresholds: [60, 40],
  },
  {
    id: 'portal-4',
    worldId: 'portal',
    number: 4,
    title: { en: 'Master of Time', id: 'Master Waktu' },
    story: {
      en: 'The ultimate challenge! Nova must use arrays, loops, functions, and conditions to collect all time crystals!',
      id: 'Tantangan tertinggi! Nova harus menggunakan array, perulangan, fungsi, dan kondisi untuk mengumpulkan semua kristal waktu!',
    },
    mascotMessage: {
      en: "This is the FINAL LEVEL! 🌟 Use EVERYTHING you've learned! You're incredible! ⏰🧑‍🚀",
      id: 'Ini LEVEL TERAKHIR! 🌟 Gunakan SEGALANYA yang sudah kamu pelajari! Kamu luar biasa! ⏰🧑‍🚀',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][2] = 'obstacle'
      g[2][5] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 4] },
      { id: 't2', pos: [1, 8] },
      { id: 't3', pos: [3, 1] },
      { id: 't4', pos: [4, 6] },
      { id: 't5', pos: [6, 3] },
      { id: 't6', pos: [7, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    optimalBlockCount: 60,
    xpReward: 400,
    hints: [
      { en: 'Plan your full route before coding!', id: 'Rencanakan rute lengkapmu sebelum membuat kode!' },
      { en: 'Use functions, loops, and conditions together!', id: 'Gunakan fungsi, perulangan, dan kondisi bersama!' },
    ],
    starThresholds: [90, 60],
  },
]

export function getLessonsByWorld(worldId: string): Lesson[] {
  return LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id)
}

export function getLessonByNumber(worldId: string, number: number): Lesson | undefined {
  return LESSONS.find(l => l.worldId === worldId && l.number === number)
}
