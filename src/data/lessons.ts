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
    id: 'jungle-0',
    worldId: 'jungle',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: How to Move!', id: 'Tutorial: Cara Bergerak!' },
    story: {
      en: "Welcome to Jungle Adventure! Let's learn how to use blocks. Drag a ➡️ Move Right block into the workspace, then press Run Code!",
      id: 'Selamat datang di Petualangan Hutan! Mari belajar cara menggunakan blok. Seret blok ➡️ Gerak Kanan ke area kerja, lalu tekan Jalankan!',
    },
    mascotMessage: {
      en: "Hi! I'm Bingo! 🐒 See the panel on the left? DRAG the ➡️ Move Right block into the middle area. Then press the green Run Code button!",
      id: 'Hei! Aku Bingo! 🐒 Lihat panel di kiri? SERET blok ➡️ Gerak Kanan ke area tengah. Lalu tekan tombol hijau Jalankan!',
    },
    gridRows: 3,
    gridCols: 5,
    cells: emptyGrid(3, 5),
    startPos: [1, 0],
    items: [{ id: 't1', pos: [1, 2] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 2,
    xpReward: 0,
    hints: [
      { en: 'Look at the left panel — drag the ➡️ Move Right block into the empty white area in the middle!', id: 'Lihat panel kiri — seret blok ➡️ Gerak Kanan ke area putih kosong di tengah!' },
      { en: 'The banana is 2 steps to the right. You need TWO ➡️ Move Right blocks!', id: 'Pisangnya 2 langkah ke kanan. Kamu butuh DUA blok ➡️ Gerak Kanan!' },
    ],
    starThresholds: [999, 999],
  },
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
    optimalBlockCount: 6,
    xpReward: 80,
    hints: [
      { en: 'Collect the first banana, then plan the path to the second!', id: 'Kumpulkan pisang pertama, lalu rencanakan jalan ke pisang kedua!' },
      { en: 'Go right 3 times to get banana 1, then down 3 to get banana 2!', id: 'Ke kanan 3 kali untuk pisang 1, lalu ke bawah 3 kali untuk pisang 2!' },
    ],
    starThresholds: [10, 6],
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
    optimalBlockCount: 10,
    xpReward: 100,
    hints: [
      { en: 'Plan the full path before adding blocks!', id: 'Rencanakan jalur lengkap sebelum menambahkan blok!' },
      { en: 'Try right 2, down 2, right 2, down 2, right 2. That\'s 10 moves!', id: 'Coba: kanan 2, bawah 2, kanan 2, bawah 2, kanan 2. Itu 10 gerakan!' },
    ],
    starThresholds: [16, 10],
  },

  // ─────────────────────────────────────────────
  // WORLD 2: SPACE STATION — Loops
  // ─────────────────────────────────────────────
  {
    id: 'space-0',
    worldId: 'space',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: Loops!', id: 'Tutorial: Perulangan!' },
    story: {
      en: "Welcome to Space Station! Loops repeat the same action many times. Instead of 3 Move Right blocks, try ONE Repeat block set to 3!",
      id: 'Selamat datang di Stasiun Luar Angkasa! Perulangan mengulangi aksi yang sama berkali-kali. Daripada 3 blok Gerak Kanan, coba SATU blok Ulangi diatur ke 3!',
    },
    mascotMessage: {
      en: "Those 3 stars are in a row! 🚀 You could use 3 Move Right blocks... OR open the 🔄 Loops section and use a Repeat block! Set it to repeat 3 times!",
      id: '3 bintang itu berjajar! 🚀 Kamu bisa pakai 3 blok Gerak Kanan... ATAU buka bagian 🔄 Ulangi dan pakai blok Repeat! Atur untuk ulangi 3 kali!',
    },
    gridRows: 3,
    gridCols: 6,
    cells: emptyGrid(3, 6),
    startPos: [1, 0],
    items: [
      { id: 's1', pos: [1, 1] },
      { id: 's2', pos: [1, 2] },
      { id: 's3', pos: [1, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 2,
    xpReward: 0,
    hints: [
      { en: 'Open the 🔄 Loops category on the left. Drag "Repeat X times" into the workspace and change the number to 3!', id: 'Buka kategori 🔄 Ulangi di kiri. Seret "Ulangi X kali" ke area kerja dan ubah angkanya menjadi 3!' },
      { en: 'Put a ➡️ Move Right block INSIDE the Repeat block. The blocks snap together like puzzle pieces!', id: 'Taruh blok ➡️ Gerak Kanan DI DALAM blok Repeat. Blok-blok itu akan terkunci bersama seperti kepingan puzzle!' },
    ],
    starThresholds: [999, 999],
  },
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
    requiredCategories: ['loops'],
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
    requiredCategories: ['loops'],
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
    requiredCategories: ['loops'],
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
    requiredCategories: ['loops'],
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
    requiredCategories: ['loops'],
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
    requiredCategories: ['loops'],
    optimalBlockCount: 3,
    xpReward: 150,
    hints: [
      { en: 'All stars are in a line — perfect for repeat!', id: 'Semua bintang dalam satu baris — sempurna untuk ulangi!' },
      { en: 'Repeat 6 times: move right. That\'s just 3 blocks!', id: 'Ulangi 6 kali: gerak kanan. Hanya 3 blok!' },
    ],
    starThresholds: [10, 3],
  },

  // ─────────────────────────────────────────────
  // WORLD 2b: LOOP LAND — Loop Efficiency
  // ─────────────────────────────────────────────
  {
    id: 'loops-0',
    worldId: 'loops',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: Fewer Blocks = More Stars!', id: 'Tutorial: Lebih Sedikit Blok = Lebih Banyak Bintang!' },
    story: {
      en: 'Welcome to Loop Land! Here, efficiency is everything. A Repeat block can replace 6 Move Right blocks with just ONE. Fewer blocks = more stars!',
      id: 'Selamat datang di Negeri Perulangan! Di sini, efisiensi adalah segalanya. Satu blok Ulangi bisa menggantikan 6 blok Gerak Kanan. Lebih sedikit blok = lebih banyak bintang!',
    },
    mascotMessage: {
      en: "Hi! I'm Dash! 🏎️ See those 6 stars? You COULD drag 6 Move Right blocks... or use ONE Repeat block set to 6! Open 🔄 Loops and try it!",
      id: 'Hei! Aku Dash! 🏎️ Lihat 6 bintang itu? Kamu BISA seret 6 blok Gerak Kanan... atau gunakan SATU blok Ulangi diatur ke 6! Buka 🔄 Perulangan dan coba!',
    },
    gridRows: 3,
    gridCols: 8,
    cells: emptyGrid(3, 8),
    startPos: [1, 0],
    items: [
      { id: 'l1', pos: [1, 1] },
      { id: 'l2', pos: [1, 2] },
      { id: 'l3', pos: [1, 3] },
      { id: 'l4', pos: [1, 4] },
      { id: 'l5', pos: [1, 5] },
      { id: 'l6', pos: [1, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 0,
    hints: [
      { en: 'Open 🔄 Loops on the left. Drag "Repeat X times" into the workspace and set it to 6!', id: 'Buka 🔄 Perulangan di kiri. Seret "Ulangi X kali" ke area kerja dan atur ke 6!' },
      { en: 'Put ONE Move Right block INSIDE the Repeat block. That replaces six blocks with just three!', id: 'Taruh SATU blok Gerak Kanan DI DALAM blok Ulangi. Itu menggantikan enam blok hanya dengan tiga!' },
    ],
    starThresholds: [999, 999],
  },
  {
    id: 'loops-1',
    worldId: 'loops',
    number: 1,
    title: { en: 'Star Lane', id: 'Jalur Bintang' },
    story: {
      en: '8 stars in a row! You could drag 8 Move Right blocks — or use a single Repeat block to race through them all. Which is faster to write?',
      id: '8 bintang berjajar! Kamu bisa seret 8 blok Gerak Kanan — atau gunakan satu blok Ulangi untuk melintasi semuanya. Mana yang lebih cepat ditulis?',
    },
    mascotMessage: {
      en: "8 stars in a line! 🏎️⭐⭐⭐ One Repeat block does the job in 3 blocks instead of 8. Try it!",
      id: '8 bintang berjajar! 🏎️⭐⭐⭐ Satu blok Ulangi menyelesaikan pekerjaan dengan 3 blok alih-alih 8. Coba!',
    },
    gridRows: 3,
    gridCols: 10,
    cells: emptyGrid(3, 10),
    startPos: [1, 0],
    items: [
      { id: 'l1', pos: [1, 1] }, { id: 'l2', pos: [1, 2] }, { id: 'l3', pos: [1, 3] },
      { id: 'l4', pos: [1, 4] }, { id: 'l5', pos: [1, 5] }, { id: 'l6', pos: [1, 6] },
      { id: 'l7', pos: [1, 7] }, { id: 'l8', pos: [1, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 3,
    xpReward: 200,
    hints: [
      { en: 'Use a Repeat block set to 8 with Move Right inside — that is only 3 blocks total!', id: 'Gunakan blok Ulangi diatur ke 8 dengan Gerak Kanan di dalamnya — itu hanya 3 blok total!' },
      { en: 'The number 8 inside the Repeat block counts as one block. Repeat + 8 + MoveRight = 3 blocks!', id: 'Angka 8 di dalam blok Ulangi dihitung sebagai satu blok. Ulangi + 8 + GerakKanan = 3 blok!' },
    ],
    starThresholds: [8, 3],
  },
  {
    id: 'loops-2',
    worldId: 'loops',
    number: 2,
    title: { en: 'Falling Stars', id: 'Bintang Jatuh' },
    story: {
      en: 'The stars are falling straight down! Dash must zoom down the column. Repeat is still your best friend — this time going down!',
      id: 'Bintang-bintang jatuh lurus ke bawah! Dash harus meluncur turun di kolom. Ulangi masih sahabat terbaikmu — kali ini ke bawah!',
    },
    mascotMessage: {
      en: 'Stars going DOWN this time! 🏎️ Repeat with Move Down — same idea, different direction! Can you do it in 3 blocks?',
      id: 'Bintang ke BAWAH kali ini! 🏎️ Ulangi dengan Gerak Bawah — ide yang sama, arah berbeda! Bisa 3 blok?',
    },
    gridRows: 9,
    gridCols: 5,
    cells: emptyGrid(9, 5),
    startPos: [0, 2],
    items: [
      { id: 'l1', pos: [1, 2] }, { id: 'l2', pos: [2, 2] }, { id: 'l3', pos: [3, 2] },
      { id: 'l4', pos: [4, 2] }, { id: 'l5', pos: [5, 2] }, { id: 'l6', pos: [6, 2] },
      { id: 'l7', pos: [7, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 3,
    xpReward: 210,
    hints: [
      { en: 'Same trick as before — Repeat 7 times with Move Down inside!', id: 'Trik yang sama seperti sebelumnya — Ulangi 7 kali dengan Gerak Bawah di dalamnya!' },
      { en: 'Repeat + 7 + MoveDown = 3 blocks. Look at how many blocks that saves!', id: 'Ulangi + 7 + GerakBawah = 3 blok. Lihat betapa banyak blok yang terhemat!' },
    ],
    starThresholds: [7, 3],
  },
  {
    id: 'loops-3',
    worldId: 'loops',
    number: 3,
    title: { en: 'Corner Sprint', id: 'Sprint Sudut' },
    story: {
      en: 'The track turns a corner! Dash zooms right, then down. Use TWO repeat blocks — one for each direction.',
      id: 'Lintasan berbelok di sudut! Dash meluncur ke kanan, lalu ke bawah. Gunakan DUA blok ulangi — satu untuk setiap arah.',
    },
    mascotMessage: {
      en: 'Two directions, two Repeat blocks! 🏎️ First Repeat right, then Repeat down. Can you beat 6 blocks total?',
      id: 'Dua arah, dua blok Ulangi! 🏎️ Pertama Ulangi kanan, lalu Ulangi bawah. Bisa kurang dari 6 blok total?',
    },
    gridRows: 6,
    gridCols: 8,
    cells: emptyGrid(6, 8),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [0, 1] }, { id: 'l2', pos: [0, 2] }, { id: 'l3', pos: [0, 3] },
      { id: 'l4', pos: [0, 4] }, { id: 'l5', pos: [0, 5] },
      { id: 'l6', pos: [1, 5] }, { id: 'l7', pos: [2, 5] }, { id: 'l8', pos: [3, 5] },
      { id: 'l9', pos: [4, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 6,
    xpReward: 225,
    hints: [
      { en: 'Use Repeat 5 times (right) then Repeat 4 times (down). That is 6 blocks!', id: 'Gunakan Ulangi 5 kali (kanan) lalu Ulangi 4 kali (bawah). Itu 6 blok!' },
      { en: 'Without loops: 5+4 = 9 individual blocks. With loops: just 6!', id: 'Tanpa perulangan: 5+4 = 9 blok individual. Dengan perulangan: hanya 6!' },
    ],
    starThresholds: [9, 6],
  },
  {
    id: 'loops-4',
    worldId: 'loops',
    number: 4,
    title: { en: 'Efficiency Race', id: 'Lomba Efisiensi' },
    story: {
      en: '12 stars in a row — the longest straight track yet! Without a loop: 12 blocks. With one Repeat: just 3. The difference is huge!',
      id: '12 bintang berjajar — lintasan lurus terpanjang! Tanpa perulangan: 12 blok. Dengan satu Ulangi: hanya 3. Perbedaannya sangat besar!',
    },
    mascotMessage: {
      en: '12 stars! 🏎️ If you use 12 Move Right blocks that is 12 blocks. ONE Repeat block set to 12 with Move Right inside is only 3 blocks. FOUR times more efficient!',
      id: '12 bintang! 🏎️ Kalau pakai 12 blok Gerak Kanan itu 12 blok. SATU blok Ulangi diatur ke 12 dengan Gerak Kanan di dalamnya hanya 3 blok. EMPAT kali lebih efisien!',
    },
    gridRows: 3,
    gridCols: 14,
    cells: emptyGrid(3, 14),
    startPos: [1, 0],
    items: Array.from({ length: 12 }, (_, i) => ({ id: `l${i + 1}`, pos: [1, i + 1] as [number, number] })),
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 3,
    xpReward: 240,
    hints: [
      { en: 'Repeat 12 times with Move Right inside. Count: Repeat block + 12 + MoveRight = just 3 blocks!', id: 'Ulangi 12 kali dengan Gerak Kanan di dalamnya. Hitung: blok Ulangi + 12 + GerakKanan = hanya 3 blok!' },
      { en: 'Remember: the number INSIDE the Repeat block is itself one block (a math block).', id: 'Ingat: angka DI DALAM blok Ulangi sendiri merupakan satu blok (blok matematika).' },
    ],
    starThresholds: [12, 3],
  },
  {
    id: 'loops-5',
    worldId: 'loops',
    number: 5,
    title: { en: 'Two-Row Sweep', id: 'Sapuan Dua Baris' },
    story: {
      en: 'Two rows of stars! Dash sweeps right across the first row, drops down, then sweeps back left. Three repeat blocks can handle it!',
      id: 'Dua baris bintang! Dash menyapu ke kanan di baris pertama, turun, lalu menyapu kembali ke kiri. Tiga blok ulangi bisa mengatasinya!',
    },
    mascotMessage: {
      en: 'Two rows! 🏎️ Repeat right 6 times, move down once, then Repeat left 6 times. That is just 7 blocks for 13 moves!',
      id: 'Dua baris! 🏎️ Ulangi kanan 6 kali, gerak bawah sekali, lalu Ulangi kiri 6 kali. Hanya 7 blok untuk 13 gerakan!',
    },
    gridRows: 4,
    gridCols: 8,
    cells: emptyGrid(4, 8),
    startPos: [1, 0],
    items: [
      { id: 'l1', pos: [1, 1] }, { id: 'l2', pos: [1, 2] }, { id: 'l3', pos: [1, 3] },
      { id: 'l4', pos: [1, 4] }, { id: 'l5', pos: [1, 5] }, { id: 'l6', pos: [1, 6] },
      { id: 'l7', pos: [2, 6] }, { id: 'l8', pos: [2, 5] }, { id: 'l9', pos: [2, 4] },
      { id: 'l10', pos: [2, 3] }, { id: 'l11', pos: [2, 2] }, { id: 'l12', pos: [2, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 7,
    xpReward: 260,
    hints: [
      { en: 'Repeat 6 right, then Move Down once, then Repeat 6 left. That is 3+1+3 = 7 blocks!', id: 'Ulangi 6 kanan, lalu Gerak Bawah sekali, lalu Ulangi 6 kiri. Itu 3+1+3 = 7 blok!' },
      { en: 'The items in row 2 are in reverse order — go left to collect them all!', id: 'Item di baris 2 dalam urutan terbalik — pergi ke kiri untuk mengumpulkan semuanya!' },
    ],
    starThresholds: [13, 7],
  },
  {
    id: 'loops-6',
    worldId: 'loops',
    number: 6,
    title: { en: 'Loop Champion', id: 'Juara Perulangan' },
    story: {
      en: 'The ultimate Loop Land challenge! Three separate track segments — right, then down, then right again. Three loops. Maximum efficiency!',
      id: 'Tantangan Negeri Perulangan tertinggi! Tiga segmen lintasan terpisah — kanan, lalu bawah, lalu kanan lagi. Tiga perulangan. Efisiensi maksimal!',
    },
    mascotMessage: {
      en: "Three-leg track! 🏎️🏁 Repeat right 4, Repeat down 5, Repeat right 6. That's 9 blocks vs 15 brute-force blocks. You're a Loop Champion!",
      id: 'Tiga segmen lintasan! 🏎️🏁 Ulangi kanan 4, Ulangi bawah 5, Ulangi kanan 6. Itu 9 blok vs 15 blok cara kasar. Kamu Juara Perulangan!',
    },
    gridRows: 7,
    gridCols: 12,
    cells: emptyGrid(7, 12),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [0, 1] }, { id: 'l2', pos: [0, 2] }, { id: 'l3', pos: [0, 3] }, { id: 'l4', pos: [0, 4] },
      { id: 'l5', pos: [1, 4] }, { id: 'l6', pos: [2, 4] }, { id: 'l7', pos: [3, 4] }, { id: 'l8', pos: [4, 4] }, { id: 'l9', pos: [5, 4] },
      { id: 'l10', pos: [5, 5] }, { id: 'l11', pos: [5, 6] }, { id: 'l12', pos: [5, 7] }, { id: 'l13', pos: [5, 8] }, { id: 'l14', pos: [5, 9] }, { id: 'l15', pos: [5, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 9,
    xpReward: 280,
    hints: [
      { en: 'Three track segments need three Repeat blocks: right 4, down 5, right 6!', id: 'Tiga segmen lintasan butuh tiga blok Ulangi: kanan 4, bawah 5, kanan 6!' },
      { en: 'Brute force = 15 blocks. Three repeat blocks = 9 blocks. Loops win every time!', id: 'Cara kasar = 15 blok. Tiga blok ulangi = 9 blok. Perulangan selalu menang!' },
    ],
    starThresholds: [15, 9],
  },

  // ─────────────────────────────────────────────
  // WORLD 3: OCEAN DEEP — Variables
  // ─────────────────────────────────────────────
  {
    id: 'ocean-0',
    worldId: 'ocean',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: Variables!', id: 'Tutorial: Variabel!' },
    story: {
      en: "Welcome to Ocean Deep! Variables are like boxes that store numbers. Create a 'steps' variable, set it to 4, then use it in a Repeat block to move Finn to the gem!",
      id: 'Selamat datang di Kedalaman Samudra! Variabel seperti kotak yang menyimpan angka. Buat variabel "langkah", atur ke 4, lalu gunakan dalam blok Repeat untuk menggerakkan Finn ke permata!',
    },
    mascotMessage: {
      en: "Variables store numbers for later! 📦 Open Variables → Create a variable called 'steps' → Set it to 4 → Then use Repeat with 'steps' and move right inside!",
      id: 'Variabel menyimpan angka untuk nanti! 📦 Buka Variabel → Buat variabel "langkah" → Atur ke 4 → Lalu gunakan Repeat dengan "langkah" dan gerak kanan di dalamnya!',
    },
    gridRows: 3,
    gridCols: 7,
    cells: emptyGrid(3, 7),
    startPos: [1, 0],
    items: [{ id: 't1', pos: [1, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'variables', 'loops'],
    optimalBlockCount: 3,
    xpReward: 0,
    hints: [
      { en: "Open 📦 Variables on the left → click 'Create variable' → name it 'steps'. Then drag 'Set steps to 4' into the workspace!", id: "Buka 📦 Variabel di kiri → klik 'Buat variabel' → beri nama 'langkah'. Lalu seret 'Atur langkah ke 4' ke area kerja!" },
      { en: "After setting 'steps = 4', add a Repeat block from Loops. Set it to repeat 'steps' times, with Move Right inside!", id: "Setelah mengatur 'langkah = 4', tambahkan blok Repeat dari Perulangan. Atur untuk ulangi sebanyak 'langkah' kali, dengan Gerak Kanan di dalamnya!" },
    ],
    starThresholds: [999, 999],
  },
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
    requiredCategories: ['variables'],
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
    requiredCategories: ['variables'],
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
    requiredCategories: ['variables'],
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
    requiredCategories: ['loops', 'variables'],
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
    id: 'caves-0',
    worldId: 'caves',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: If/Else!', id: 'Tutorial: Jika/Selain!' },
    story: {
      en: "Welcome to Crystal Caves! If blocks make decisions — 'IF something is true, do this, ELSE do something else'. Try wrapping your moves inside an IF block!",
      id: 'Selamat datang di Gua Kristal! Blok If membuat keputusan — "JIKA sesuatu benar, lakukan ini, SELAIN ITU lakukan hal lain". Coba bungkus gerakanmu di dalam blok IF!',
    },
    mascotMessage: {
      en: "IF blocks are like asking a question! 🤔 Open ❓ Logic → drag 'if true do' → put 'true' inside it → add your Move blocks inside the gap. Run it!",
      id: 'Blok IF seperti mengajukan pertanyaan! 🤔 Buka ❓ Kondisi → seret "jika benar lakukan" → taruh "benar" di dalamnya → tambahkan blok Gerak di celahnya. Jalankan!',
    },
    gridRows: 3,
    gridCols: 6,
    cells: emptyGrid(3, 6),
    startPos: [1, 0],
    items: [{ id: 't1', pos: [1, 3] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'logic', 'variables'],
    optimalBlockCount: 3,
    xpReward: 0,
    hints: [
      { en: 'Open ❓ Logic on the left. Drag the "if ... do" block into the workspace. Put the green "true" block into the diamond slot!', id: 'Buka ❓ Kondisi di kiri. Seret blok "jika ... lakukan" ke area kerja. Taruh blok hijau "benar" ke slot berlian!' },
      { en: 'Put 3 Move Right blocks INSIDE the if block. When the condition is true, all the blocks inside will run!', id: 'Taruh 3 blok Gerak Kanan DI DALAM blok if. Ketika kondisinya benar, semua blok di dalamnya akan berjalan!' },
    ],
    starThresholds: [999, 999],
  },
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
    requiredCategories: ['logic'],
    optimalBlockCount: 8,
    xpReward: 180,
    hints: [
      { en: 'Collect all crystals first, then check!', id: 'Kumpulkan semua kristal dulu, lalu periksa!' },
      { en: 'Use IF to check if your count is 3!', id: 'Gunakan JIKA untuk memeriksa apakah hitunganmu 3!' },
    ],
    starThresholds: [17, 12, 10, 8],
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
    requiredCategories: ['logic'],
    optimalBlockCount: 14,
    xpReward: 190,
    hints: [
      { en: 'Plan the path from top to bottom!', id: 'Rencanakan jalur dari atas ke bawah!' },
      { en: 'Navigate through the cave to collect all crystals!', id: 'Navigasi melalui gua untuk mengumpulkan semua kristal!' },
    ],
    starThresholds: [28, 20, 17, 14],
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
    requiredCategories: ['logic'],
    optimalBlockCount: 25,
    xpReward: 200,
    hints: [
      { en: 'Navigate around obstacles to reach each crystal!', id: 'Navigasi menghindari rintangan untuk mencapai setiap kristal!' },
      { en: 'Plan your route carefully to avoid blocked paths!', id: 'Rencanakan rutenya dengan hati-hati untuk menghindari jalur yang terblokir!' },
    ],
    starThresholds: [49, 35, 30, 25],
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
    requiredCategories: ['logic'],
    optimalBlockCount: 30,
    xpReward: 210,
    hints: [
      { en: 'Collect all 5 crystals in order!', id: 'Kumpulkan semua 5 kristal secara urut!' },
      { en: 'Plan a route that visits each crystal position!', id: 'Rencanakan rute yang mengunjungi setiap posisi kristal!' },
    ],
    starThresholds: [59, 42, 36, 30],
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
    requiredCategories: ['loops', 'logic'],
    optimalBlockCount: 40,
    xpReward: 250,
    hints: [
      { en: 'Navigate around obstacles to all crystals!', id: 'Navigasi menghindari rintangan ke semua kristal!' },
      { en: 'Plan the most efficient route through the cave!', id: 'Rencanakan rute paling efisien melalui gua!' },
    ],
    starThresholds: [77, 55, 48, 40],
  },
  {
    id: 'caves-6',
    worldId: 'caves',
    number: 6,
    isBuggy: true,
    title: { en: 'The Wrong Turn', id: 'Belokan yang Salah' },
    story: {
      en: "Zara's map has a mistake! The code is almost right, but one block is pointing the wrong way. Find it and fix it!",
      id: 'Peta Zara ada kesalahannya! Kodenya hampir benar, tapi satu blok mengarah ke arah yang salah. Temukan dan perbaiki!',
    },
    mascotMessage: {
      en: 'Look at where each block sends you. One of them takes a wrong turn! 🧝',
      id: 'Lihat ke mana setiap blok membawamu. Salah satunya berbelok ke arah yang salah! 🧝',
    },
    gridRows: 3,
    gridCols: 5,
    cells: emptyGrid(3, 5),
    startPos: [1, 0],
    items: [{ id: 'gem-1', pos: [1, 3] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 4,
    xpReward: 75,
    hints: [
      { en: 'Run the code and watch where the character goes wrong.', id: 'Jalankan kode dan perhatikan di mana karakter salah jalan.' },
      { en: 'Compare each block direction to the path on the grid.', id: 'Bandingkan arah setiap blok dengan jalur di grid.' },
    ],
    starThresholds: [10, 7, 5, 4],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'move_right',
            id: 'dbg_c6_1',
            x: 30,
            y: 50,
            next: {
              block: {
                type: 'move_down',
                id: 'dbg_c6_2',
                next: {
                  block: {
                    type: 'move_right',
                    id: 'dbg_c6_3',
                  },
                },
              },
            },
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // WORLD 5: ROBOT FACTORY — Functions
  // ─────────────────────────────────────────────
  {
    id: 'factory-0',
    worldId: 'factory',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: Functions!', id: 'Tutorial: Fungsi!' },
    story: {
      en: "Welcome to Robot Factory! Functions let you name a group of blocks and reuse them. Define a function called 'moveTwo', put 2 Move Right blocks inside, then call it twice to collect both gears!",
      id: 'Selamat datang di Pabrik Robot! Fungsi memungkinkanmu memberi nama pada sekelompok blok dan menggunakannya kembali. Definisikan fungsi "gerakDua", taruh 2 blok Gerak Kanan di dalamnya, lalu panggil 2 kali untuk mengumpulkan kedua roda gigi!',
    },
    mascotMessage: {
      en: "Functions are reusable code recipes! 🔧 Open Functions → 'Define function moveTwo' → put 2 Move Right blocks inside → then CALL moveTwo twice to reach both gears!",
      id: 'Fungsi adalah resep kode yang bisa dipakai ulang! 🔧 Buka Fungsi → "Definisikan fungsi gerakDua" → taruh 2 blok Gerak Kanan di dalamnya → lalu PANGGIL gerakDua dua kali untuk mencapai kedua roda gigi!',
    },
    gridRows: 3,
    gridCols: 8,
    cells: emptyGrid(3, 8),
    startPos: [1, 0],
    items: [
      { id: 't1', pos: [1, 2] },
      { id: 't2', pos: [1, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'functions'],
    optimalBlockCount: 4,
    xpReward: 0,
    hints: [
      { en: 'Open 🔧 Functions on the left. Click "Define a function" to create a new named block. Give it a name like moveTwo!', id: 'Buka 🔧 Fungsi di kiri. Klik "Definisikan fungsi" untuk membuat blok bernama baru. Beri nama seperti gerakDua!' },
      { en: "Put 2 Move Right blocks INSIDE the function definition. Then drag the 'call moveTwo' block into the main workspace and use it twice!", id: "Taruh 2 blok Gerak Kanan DI DALAM definisi fungsi. Lalu seret blok 'panggil gerakDua' ke area kerja utama dan gunakan dua kali!" },
    ],
    starThresholds: [999, 999],
  },
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
    requiredCategories: ['functions'],
    optimalBlockCount: 8,
    xpReward: 200,
    hints: [
      { en: 'Create a function, then call it multiple times!', id: 'Buat fungsi, lalu panggil beberapa kali!' },
      { en: 'Define a function that moves right and collects, then call it twice!', id: 'Definisikan fungsi yang bergerak ke kanan dan mengumpulkan, lalu panggil dua kali!' },
    ],
    starThresholds: [17, 12, 10, 8],
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
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 5,
    xpReward: 210,
    hints: [
      { en: 'Create a function that moves right once and collects!', id: 'Buat fungsi yang bergerak ke kanan sekali dan mengumpulkan!' },
      { en: 'Then call that function in a repeat loop 5 times!', id: 'Lalu panggil fungsi itu dalam perulangan ulangi 5 kali!' },
    ],
    starThresholds: [21, 15, 10, 5],
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
    requiredCategories: ['functions'],
    optimalBlockCount: 30,
    xpReward: 230,
    hints: [
      { en: 'Create functions for common move patterns!', id: 'Buat fungsi untuk pola gerakan umum!' },
      { en: 'Use functions to organize your code neatly!', id: 'Gunakan fungsi untuk mengorganisir kodenya dengan rapi!' },
    ],
    starThresholds: [63, 45, 38, 30],
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
    requiredCategories: ['functions'],
    optimalBlockCount: 35,
    xpReward: 250,
    hints: [
      { en: 'Create reusable functions to navigate to each gear!', id: 'Buat fungsi yang dapat digunakan kembali untuk navigasi ke setiap gear!' },
      { en: 'Think about which movements repeat and turn them into functions!', id: 'Pikirkan gerakan mana yang berulang dan jadikan fungsi!' },
    ],
    starThresholds: [70, 50, 43, 35],
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
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 50,
    xpReward: 300,
    hints: [
      { en: 'Navigate carefully around obstacles!', id: 'Navigasi hati-hati menghindari rintangan!' },
      { en: 'Use functions to organize collecting each gear!', id: 'Gunakan fungsi untuk mengorganisir pengumpulan setiap gear!' },
    ],
    starThresholds: [98, 70, 60, 50],
  },
  {
    id: 'factory-6',
    worldId: 'factory',
    number: 6,
    isBuggy: true,
    title: { en: 'The Assembly Error', id: 'Kesalahan Perakitan' },
    story: {
      en: "Bolt's assembly line has a bug! One repeat block is moving in the wrong direction. Fix the direction and collect the gear!",
      id: 'Lini perakitan Bolt punya bug! Satu blok perulangan bergerak ke arah yang salah. Perbaiki arahnya dan kumpulkan gear!',
    },
    mascotMessage: {
      en: "The first loop is going the wrong way! 🤖 Look at the move block inside it.",
      id: 'Perulangan pertama pergi ke arah yang salah! 🤖 Lihat blok gerak di dalamnya.',
    },
    gridRows: 5,
    gridCols: 5,
    cells: emptyGrid(5, 5),
    startPos: [0, 0],
    items: [{ id: 'gear-1', pos: [4, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 5,
    xpReward: 100,
    hints: [
      { en: 'Run the code — which direction does the character move first?', id: 'Jalankan kode — ke arah mana karakter bergerak pertama?' },
      { en: 'The goal is in the bottom-right corner. What two directions do you need?', id: 'Tujuan ada di sudut kanan bawah. Dua arah apa yang kamu butuhkan?' },
    ],
    starThresholds: [16, 11, 7, 5],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_f6_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 4 },
                },
              },
              DO: {
                block: {
                  type: 'move_left',
                  id: 'dbg_f6_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_f6_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 4 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_down',
                      id: 'dbg_f6_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // WORLD 6: TIME PORTAL — Arrays & Lists
  // ─────────────────────────────────────────────
  {
    id: 'portal-0',
    worldId: 'portal',
    number: 0,
    isTutorial: true,
    title: { en: 'Tutorial: Lists!', id: 'Tutorial: Daftar!' },
    story: {
      en: "Welcome to Time Portal! Lists hold multiple values — like a shopping list. Create a list with 3 numbers, then use a loop to read each one and move right that many times!",
      id: 'Selamat datang di Portal Waktu! Daftar menyimpan banyak nilai — seperti daftar belanja. Buat daftar dengan 3 angka, lalu gunakan perulangan untuk membaca masing-masing dan bergerak ke kanan sebanyak itu!',
    },
    mascotMessage: {
      en: "Lists store multiple things! 📋 Open Lists → drag 'create list with' → add 3 numbers. Then use a Repeat block to loop through them and collect all 3 time crystals!",
      id: 'Daftar menyimpan banyak hal! 📋 Buka Daftar → seret "buat daftar dengan" → tambahkan 3 angka. Lalu gunakan blok Repeat untuk mengulanginya dan kumpulkan semua 3 kristal waktu!',
    },
    gridRows: 3,
    gridCols: 7,
    cells: emptyGrid(3, 7),
    startPos: [1, 0],
    items: [
      { id: 't1', pos: [1, 1] },
      { id: 't2', pos: [1, 3] },
      { id: 't3', pos: [1, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'lists', 'loops', 'variables'],
    optimalBlockCount: 4,
    xpReward: 0,
    hints: [
      { en: 'Open 📋 Lists on the left. Try dragging "repeat 3 times" from Loops, with Move Right inside — this collects the crystals step by step!', id: 'Buka 📋 Daftar di kiri. Coba seret "ulangi 3 kali" dari Perulangan, dengan Gerak Kanan di dalamnya — ini mengumpulkan kristal satu per satu!' },
      { en: 'For a list challenge: create a list with 3 items, then use "for each item in list" with Move Right inside to loop through them all!', id: 'Untuk tantangan daftar: buat daftar dengan 3 item, lalu gunakan "untuk setiap item dalam daftar" dengan Gerak Kanan di dalamnya untuk mengulangnya semua!' },
    ],
    starThresholds: [999, 999],
  },
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
    requiredCategories: ['lists'],
    optimalBlockCount: 8,
    xpReward: 250,
    hints: [
      { en: 'Create a list to store collected items!', id: 'Buat daftar untuk menyimpan item yang dikumpulkan!' },
      { en: 'Add each crystal to your list as you collect it!', id: 'Tambahkan setiap kristal ke daftarmu saat mengumpulkannya!' },
    ],
    starThresholds: [20, 14, 11, 8],
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
    requiredCategories: ['lists'],
    optimalBlockCount: 25,
    xpReward: 280,
    hints: [
      { en: 'Use a list to keep track of collected crystals!', id: 'Gunakan daftar untuk melacak kristal yang sudah dikumpulkan!' },
      { en: 'Navigate to each crystal and add it to your list!', id: 'Navigasi ke setiap kristal dan tambahkan ke daftarmu!' },
    ],
    starThresholds: [53, 38, 32, 25],
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
    requiredCategories: ['lists'],
    optimalBlockCount: 40,
    xpReward: 300,
    hints: [
      { en: 'Navigate around obstacles carefully!', id: 'Navigasi menghindari rintangan dengan hati-hati!' },
      { en: 'Use lists to organize your route planning!', id: 'Gunakan daftar untuk mengorganisir perencanaan rute!' },
    ],
    starThresholds: [84, 60, 50, 40],
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
      en: "Incredible challenge! 🌟 Use EVERYTHING you've learned so far! You're amazing! ⏰🧑‍🚀",
      id: 'Tantangan yang luar biasa! 🌟 Gunakan SEGALANYA yang sudah kamu pelajari! Kamu menakjubkan! ⏰🧑‍🚀',
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
    requiredCategories: ['lists', 'loops'],
    optimalBlockCount: 60,
    xpReward: 400,
    hints: [
      { en: 'Plan your full route before coding!', id: 'Rencanakan rute lengkapmu sebelum membuat kode!' },
      { en: 'Use functions, loops, and conditions together!', id: 'Gunakan fungsi, perulangan, dan kondisi bersama!' },
    ],
    starThresholds: [126, 90, 75, 60],
  },

  {
    id: 'portal-5',
    worldId: 'portal',
    number: 5,
    title: { en: 'Array Sprint', id: 'Sprint Array' },
    story: {
      en: 'Nova discovers that arrays can encode entire journeys! Store distances in a list and race through the time stream.',
      id: 'Nova menemukan bahwa array bisa menyimpan seluruh perjalanan! Simpan jarak dalam daftar dan berlomba melintasi aliran waktu.',
    },
    mascotMessage: {
      en: 'Arrays are like a plan stored in a list! 📋 Build a list of moves, then loop through it to collect all the crystals!',
      id: 'Array itu seperti rencana yang tersimpan dalam daftar! 📋 Buat daftar gerakan, lalu ulangi untuk mengumpulkan semua kristal!',
    },
    gridRows: 5,
    gridCols: 8,
    cells: emptyGrid(5, 8),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 3] },
      { id: 't2', pos: [2, 7] },
      { id: 't3', pos: [4, 1] },
      { id: 't4', pos: [4, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists'],
    optimalBlockCount: 20,
    xpReward: 320,
    hints: [
      { en: 'Try storing your move counts in a list!', id: 'Coba simpan jumlah gerakanmu dalam daftar!' },
      { en: 'Loop through the list to execute each move sequence!', id: 'Ulangi daftar untuk menjalankan setiap urutan gerakan!' },
    ],
    starThresholds: [42, 30, 25, 20],
  },
  {
    id: 'portal-6',
    worldId: 'portal',
    number: 6,
    title: { en: 'Crystal Matrix', id: 'Matriks Kristal' },
    story: {
      en: 'The crystals form a matrix! Nova must loop through her array of coordinates to collect them all efficiently.',
      id: 'Kristal-kristal membentuk matriks! Nova harus mengulang array koordinatnya untuk mengumpulkan semuanya dengan efisien.',
    },
    mascotMessage: {
      en: 'Use a loop to go through your list one by one! 🔄 Each item in the list is your next target!',
      id: 'Gunakan perulangan untuk melalui daftarmu satu per satu! 🔄 Setiap item dalam daftar adalah target berikutmu!',
    },
    gridRows: 6,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(6, 8)
      g[2][3] = 'obstacle'
      g[3][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 5] },
      { id: 't2', pos: [1, 7] },
      { id: 't3', pos: [3, 1] },
      { id: 't4', pos: [4, 5] },
      { id: 't5', pos: [5, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops'],
    optimalBlockCount: 28,
    xpReward: 340,
    hints: [
      { en: 'Navigate around the time barriers carefully!', id: 'Navigasi menghindari penghalang waktu dengan hati-hati!' },
      { en: 'Use loops to iterate through your movement arrays!', id: 'Gunakan perulangan untuk mengiterasi array gerakanmu!' },
    ],
    starThresholds: [59, 42, 35, 28],
  },
  {
    id: 'portal-7',
    worldId: 'portal',
    number: 7,
    title: { en: 'Temporal Storm', id: 'Badai Temporal' },
    story: {
      en: 'A temporal storm has scattered the crystals! Create helper functions that use arrays to navigate the chaos.',
      id: 'Badai temporal telah menyebarkan kristal! Buat fungsi pembantu yang menggunakan array untuk menavigasi kekacauan.',
    },
    mascotMessage: {
      en: 'Write a FUNCTION that takes a list of moves! 🔧 Reuse it to reach crystals in different spots!',
      id: 'Tulis FUNGSI yang menerima daftar gerakan! 🔧 Gunakan ulang untuk mencapai kristal di tempat berbeda!',
    },
    gridRows: 7,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(7, 9)
      g[1][4] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 6] },
      { id: 't2', pos: [2, 0] },
      { id: 't3', pos: [2, 5] },
      { id: 't4', pos: [4, 1] },
      { id: 't5', pos: [5, 8] },
      { id: 't6', pos: [6, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'functions'],
    optimalBlockCount: 38,
    xpReward: 360,
    hints: [
      { en: 'Define a function with a list parameter for moves!', id: 'Definisikan fungsi dengan parameter daftar untuk gerakan!' },
      { en: 'Call your function multiple times with different move lists!', id: 'Panggil fungsimu beberapa kali dengan daftar gerakan berbeda!' },
    ],
    starThresholds: [80, 57, 48, 38],
  },
  {
    id: 'portal-8',
    worldId: 'portal',
    number: 8,
    title: { en: 'Paradox Loop', id: 'Perulangan Paradoks' },
    story: {
      en: 'Time paradoxes have created extra barriers! Nova needs smart conditions combined with arrays to find the safe route.',
      id: 'Paradoks waktu telah menciptakan lebih banyak penghalang! Nova butuh kondisi cerdas dikombinasikan dengan array untuk menemukan jalur aman.',
    },
    mascotMessage: {
      en: 'Use IF blocks to decide which direction to move! 🧠 Check your list index to choose the right path!',
      id: 'Gunakan blok JIKA untuk memutuskan arah gerakan! 🧠 Periksa indeks daftarmu untuk memilih jalur yang tepat!',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][3] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 5] },
      { id: 't2', pos: [1, 8] },
      { id: 't3', pos: [2, 3] },
      { id: 't4', pos: [4, 0] },
      { id: 't5', pos: [5, 7] },
      { id: 't6', pos: [6, 2] },
      { id: 't7', pos: [7, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'logic'],
    optimalBlockCount: 50,
    xpReward: 385,
    hints: [
      { en: 'Plan your full route to avoid all obstacles!', id: 'Rencanakan rute lengkapmu untuk menghindari semua rintangan!' },
      { en: 'Combine lists, loops, and conditions for an elegant solution!', id: 'Gabungkan daftar, perulangan, dan kondisi untuk solusi yang elegan!' },
    ],
    starThresholds: [105, 75, 63, 50],
  },
  {
    id: 'portal-9',
    worldId: 'portal',
    number: 9,
    title: { en: 'Time Lord', id: 'Penguasa Waktu' },
    story: {
      en: 'The true final challenge! Become the Time Lord — master arrays, loops, functions, and conditions to collect all 8 crystals!',
      id: 'Tantangan akhir yang sesungguhnya! Jadilah Penguasa Waktu — kuasai array, perulangan, fungsi, dan kondisi untuk mengumpulkan semua 8 kristal!',
    },
    mascotMessage: {
      en: "You're the TIME LORD now! 👑 Use EVERY skill — lists, loops, functions, conditions! This is your ultimate test! ⏰🌟",
      id: 'Kamu adalah PENGUASA WAKTU sekarang! 👑 Gunakan SETIAP kemampuan — daftar, perulangan, fungsi, kondisi! Ini ujian terakhirmu! ⏰🌟',
    },
    gridRows: 8,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(8, 10)
      g[1][4] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 4] },
      { id: 't2', pos: [1, 9] },
      { id: 't3', pos: [2, 2] },
      { id: 't4', pos: [3, 7] },
      { id: 't5', pos: [4, 0] },
      { id: 't6', pos: [5, 5] },
      { id: 't7', pos: [6, 8] },
      { id: 't8', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions'],
    optimalBlockCount: 65,
    xpReward: 450,
    hints: [
      { en: 'Divide the grid into zones and write a function for each!', id: 'Bagi grid menjadi zona dan tulis fungsi untuk setiap zona!' },
      { en: 'Use arrays of coordinates and loop through them systematically!', id: 'Gunakan array koordinat dan ulangi secara sistematis!' },
    ],
    starThresholds: [137, 98, 82, 65],
  },
  {
    id: 'portal-10',
    worldId: 'portal',
    number: 10,
    isBuggy: true,
    title: { en: 'The Loop Lag', id: 'Lingkaran yang Kurang' },
    story: {
      en: "Nova's time loop is one step short! The repeat count is wrong. Adjust it so the portal aligns.",
      id: 'Lingkaran waktu Nova kurang satu langkah! Jumlah pengulangan salah. Sesuaikan agar portal sejajar.',
    },
    mascotMessage: {
      en: "Count how many steps you need, then check the number in the repeat block. ⏰",
      id: 'Hitung berapa langkah yang kamu butuhkan, lalu periksa angka di blok pengulangan. ⏰',
    },
    gridRows: 3,
    gridCols: 5,
    cells: emptyGrid(3, 5),
    startPos: [1, 0],
    items: [{ id: 'clock-1', pos: [1, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 100,
    hints: [
      { en: 'How many columns are between the start and the goal?', id: 'Berapa kolom antara awal dan tujuan?' },
      { en: 'The repeat count controls how many times the block inside runs.', id: 'Jumlah pengulangan menentukan berapa kali blok di dalamnya berjalan.' },
    ],
    starThresholds: [9, 6, 4, 3],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_p10_1',
            x: 30,
            y: 50,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 3 },
                },
              },
              DO: {
                block: {
                  type: 'move_right',
                  id: 'dbg_p10_2',
                },
              },
            },
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // BONUS WORLD 1: JURASSIC PARK — Real-World Pathfinding
  // ─────────────────────────────────────────────
  {
    id: 'jurassic-1',
    worldId: 'jurassic',
    number: 1,
    title: { en: 'First Egg Hunt', id: 'Perburuan Telur Pertama' },
    story: {
      en: 'Dr. Rex discovers two dinosaur eggs hidden in the jungle! The eggs must be rescued before night falls — navigate around the dense foliage to reach them.',
      id: 'Dr. Rex menemukan dua telur dinosaurus tersembunyi di hutan! Telur harus diselamatkan sebelum malam tiba — navigasi menghindari dedaunan lebat untuk mencapainya.',
    },
    mascotMessage: {
      en: "Welcome to Jurassic Park, Dr. Rex! 🦕 Rescue the eggs 🥚 before the raptors find them! Use loops to move efficiently!",
      id: 'Selamat datang di Taman Jurassic, Dr. Rex! 🦕 Selamatkan telur 🥚 sebelum raptor menemukannya! Gunakan perulangan untuk bergerak efisien!',
    },
    gridRows: 6,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(6, 7)
      g[1][2] = 'obstacle'
      g[3][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 4] },
      { id: 'e2', pos: [5, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic'],
    optimalBlockCount: 12,
    xpReward: 200,
    hints: [
      { en: 'Plan your route to both eggs before coding!', id: 'Rencanakan rute ke kedua telur sebelum membuat kode!' },
      { en: 'Use loops to avoid repeating move blocks!', id: 'Gunakan perulangan untuk menghindari pengulangan blok gerak!' },
    ],
    starThresholds: [28, 20, 16, 12],
  },
  {
    id: 'jurassic-2',
    worldId: 'jurassic',
    number: 2,
    title: { en: 'Raptor Maze', id: 'Labirin Raptor' },
    story: {
      en: 'The raptors scattered three eggs across the maze! Use variables to track how many eggs you have collected as you navigate the prehistoric jungle.',
      id: 'Para raptor menyebarkan tiga telur ke seluruh labirin! Gunakan variabel untuk melacak berapa banyak telur yang sudah kamu kumpulkan saat menavigasi hutan prasejarah.',
    },
    mascotMessage: {
      en: "Three eggs, three locations! 🥚🥚🥚 Use a VARIABLE to count how many you've found — just like a real paleontologist uses a tally!",
      id: 'Tiga telur, tiga lokasi! 🥚🥚🥚 Gunakan VARIABEL untuk menghitung berapa yang sudah kamu temukan — seperti paleontolog sungguhan menggunakan catatan!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[0][3] = 'obstacle'
      g[2][1] = 'obstacle'
      g[4][4] = 'obstacle'
      return g
    })(),
    startPos: [3, 0],
    items: [
      { id: 'e1', pos: [0, 6] },
      { id: 'e2', pos: [6, 2] },
      { id: 'e3', pos: [3, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables'],
    optimalBlockCount: 25,
    xpReward: 250,
    hints: [
      { en: 'Use a variable to count collected eggs!', id: 'Gunakan variabel untuk menghitung telur yang sudah dikumpulkan!' },
      { en: 'Plan the most efficient route between all three eggs!', id: 'Rencanakan rute paling efisien di antara ketiga telur!' },
    ],
    starThresholds: [56, 40, 33, 25],
  },
  {
    id: 'jurassic-3',
    worldId: 'jurassic',
    number: 3,
    title: { en: 'Pterodactyl Watch', id: 'Pengawasan Pterodaktil' },
    story: {
      en: 'Pterodactyls are circling above! Dr. Rex must quickly collect four eggs using efficient functions. Write reusable code — every second counts in the Jurassic wilderness!',
      id: 'Pterodaktil melingkar di atas! Dr. Rex harus cepat mengumpulkan empat telur menggunakan fungsi yang efisien. Tulis kode yang dapat digunakan kembali — setiap detik berarti di alam liar Jurassic!',
    },
    mascotMessage: {
      en: "Pterodactyls spotted! ⏰ Use FUNCTIONS to write reusable code — just like real programmers write helper functions for repeated tasks!",
      id: 'Pterodaktil terlihat! ⏰ Gunakan FUNGSI untuk menulis kode yang dapat digunakan kembali — seperti programmer sungguhan yang menulis fungsi pembantu untuk tugas berulang!',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[0][4] = 'obstacle'
      g[2][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[6][3] = 'obstacle'
      g[3][0] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 7] },
      { id: 'e2', pos: [3, 4] },
      { id: 'e3', pos: [6, 1] },
      { id: 'e4', pos: [5, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions'],
    optimalBlockCount: 35,
    xpReward: 300,
    hints: [
      { en: 'Define a function for navigating to each egg!', id: 'Buat fungsi untuk navigasi ke setiap telur!' },
      { en: 'Reuse your function for similar paths!', id: 'Gunakan kembali fungsimu untuk jalur yang serupa!' },
    ],
    starThresholds: [77, 55, 45, 35],
  },
  {
    id: 'jurassic-4',
    worldId: 'jurassic',
    number: 4,
    title: { en: 'T-Rex Territory', id: 'Wilayah T-Rex' },
    story: {
      en: 'T-Rex has blocked large sections of the park! Dr. Rex must use conditional logic to find safe paths through the dinosaur territory and rescue five precious eggs.',
      id: 'T-Rex telah memblokir area besar di taman! Dr. Rex harus menggunakan logika kondisional untuk menemukan jalur aman melalui wilayah dinosaurus dan menyelamatkan lima telur berharga.',
    },
    mascotMessage: {
      en: "T-Rex danger zones ahead! 🦖 Use IF conditions and lists to track safe paths — just like GPS apps use conditions to avoid traffic!",
      id: 'Zona bahaya T-Rex di depan! 🦖 Gunakan kondisi IF dan daftar untuk melacak jalur aman — seperti aplikasi GPS menggunakan kondisi untuk menghindari kemacetan!',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[0][3] = 'obstacle'
      g[1][6] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][8] = 'obstacle'
      g[5][4] = 'obstacle'
      g[6][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 7] },
      { id: 'e2', pos: [2, 4] },
      { id: 'e3', pos: [5, 8] },
      { id: 'e4', pos: [7, 1] },
      { id: 'e5', pos: [4, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 50,
    xpReward: 350,
    hints: [
      { en: 'Store egg locations in a list before navigating!', id: 'Simpan lokasi telur dalam daftar sebelum menavigasi!' },
      { en: 'Use if-else to choose the best path around obstacles!', id: 'Gunakan if-else untuk memilih jalur terbaik menghindari rintangan!' },
    ],
    starThresholds: [105, 75, 63, 50],
  },
  {
    id: 'jurassic-5',
    worldId: 'jurassic',
    number: 5,
    title: { en: 'Volcano Eruption!', id: 'Gunung Berapi Meletus!' },
    story: {
      en: "The volcano is erupting! Dr. Rex has minutes to rescue all six eggs scattered across the park. This is the ultimate real-world algorithm challenge — plan the optimal path and execute it perfectly!",
      id: 'Gunung berapi meletus! Dr. Rex punya menit untuk menyelamatkan semua enam telur yang tersebar di seluruh taman. Ini tantangan algoritma dunia nyata tertinggi — rencanakan jalur optimal dan jalankan dengan sempurna!',
    },
    mascotMessage: {
      en: "VOLCANO ALERT! 🌋 This is the REAL-WORLD challenge! Real delivery apps solve this problem every day — finding the optimal route to visit multiple locations. Use EVERYTHING you know!",
      id: 'PERINGATAN GUNUNG BERAPI! 🌋 Ini adalah tantangan DUNIA NYATA! Aplikasi pengiriman nyata memecahkan masalah ini setiap hari — menemukan rute optimal untuk mengunjungi banyak lokasi. Gunakan SEGALANYA yang kamu ketahui!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][4] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][0] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][7] = 'obstacle'
      g[8][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 8] },
      { id: 'e2', pos: [2, 5] },
      { id: 'e3', pos: [4, 1] },
      { id: 'e4', pos: [6, 7] },
      { id: 'e5', pos: [8, 4] },
      { id: 'e6', pos: [3, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 65,
    xpReward: 400,
    hints: [
      { en: 'Plan the optimal route visiting all eggs before coding!', id: 'Rencanakan rute optimal mengunjungi semua telur sebelum membuat kode!' },
      { en: 'Use lists and functions to organize your approach!', id: 'Gunakan daftar dan fungsi untuk mengorganisir pendekatanmu!' },
    ],
    starThresholds: [140, 100, 83, 65],
  },
  {
    id: 'jurassic-6',
    worldId: 'jurassic',
    number: 6,
    title: { en: 'Fossil Valley', id: 'Lembah Fosil' },
    story: {
      en: "Deep in Fossil Valley, seven dino eggs are buried beneath the ferns! Dr. Rex must navigate a tangled prehistoric landscape to rescue them all before the dig site floods.",
      id: 'Jauh di Lembah Fosil, tujuh telur dino terkubur di bawah pakis! Dr. Rex harus menavigasi lanskap prasejarah yang kusut untuk menyelamatkan semuanya sebelum lokasi penggalian kebanjiran.',
    },
    mascotMessage: {
      en: "Seven eggs to save! 🥚🥚🥚🥚🥚🥚🥚 Real archaeologists plan their dig grid before excavating — plan your route with LISTS and FUNCTIONS before you start coding!",
      id: 'Tujuh telur yang harus diselamatkan! 🥚🥚🥚🥚🥚🥚🥚 Arkeolog sungguhan merencanakan kisi penggalian sebelum menggali — rencanakan rutemmu dengan DAFTAR dan FUNGSI sebelum mulai membuat kode!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][3] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][5] = 'obstacle'
      g[6][4] = 'obstacle'
      g[7][2] = 'obstacle'
      g[0][5] = 'obstacle'
      g[8][3] = 'obstacle'
      g[5][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 8] },
      { id: 'e2', pos: [2, 3] },
      { id: 'e3', pos: [4, 7] },
      { id: 'e4', pos: [6, 1] },
      { id: 'e5', pos: [8, 5] },
      { id: 'e6', pos: [3, 0] },
      { id: 'e7', pos: [7, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 80,
    xpReward: 450,
    hints: [
      { en: 'Store all egg positions in a list and loop through it!', id: 'Simpan semua posisi telur dalam daftar dan ulangi dengan perulangan!' },
      { en: 'Group nearby eggs so you travel less total distance!', id: 'Kelompokkan telur yang berdekatan agar jarak tempuh total lebih pendek!' },
    ],
    starThresholds: [168, 120, 100, 80],
  },
  {
    id: 'jurassic-7',
    worldId: 'jurassic',
    number: 7,
    title: { en: 'Pterodactyl Nest', id: 'Sarang Pterodaktil' },
    story: {
      en: "A pterodactyl nest guards the valley paths! Dr. Rex must outwit the patrols and collect seven precious eggs scattered across a treacherous grid of jungle obstacles.",
      id: 'Sarang pterodaktil menjaga jalur lembah! Dr. Rex harus mengecoh patroli dan mengumpulkan tujuh telur berharga yang tersebar di kisi hutan yang berbahaya.',
    },
    mascotMessage: {
      en: "Pterodactyls on patrol! 🦅 Use CONDITIONAL LOGIC to pick the best direction around each obstacle — real robots use sensors and if-else exactly like this!",
      id: 'Pterodaktil berpatroli! 🦅 Gunakan LOGIKA KONDISIONAL untuk memilih arah terbaik menghindari setiap rintangan — robot nyata menggunakan sensor dan if-else persis seperti ini!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][2] = 'obstacle'
      g[1][6] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][3] = 'obstacle'
      g[7][7] = 'obstacle'
      g[2][8] = 'obstacle'
      return g
    })(),
    startPos: [4, 0],
    items: [
      { id: 'e1', pos: [0, 4] },
      { id: 'e2', pos: [0, 8] },
      { id: 'e3', pos: [3, 6] },
      { id: 'e4', pos: [6, 3] },
      { id: 'e5', pos: [8, 0] },
      { id: 'e6', pos: [8, 8] },
      { id: 'e7', pos: [5, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 95,
    xpReward: 500,
    hints: [
      { en: 'Start from the middle — it gives you the shortest reach to all corners!', id: 'Mulai dari tengah — ini memberimu jangkauan terpendek ke semua sudut!' },
      { en: 'Use a list to store egg positions and a function to travel to each!', id: 'Gunakan daftar untuk menyimpan posisi telur dan fungsi untuk pergi ke masing-masing!' },
    ],
    starThresholds: [200, 143, 119, 95],
  },
  {
    id: 'jurassic-8',
    worldId: 'jurassic',
    number: 8,
    title: { en: 'Ice Age Crossing', id: 'Penyeberangan Zaman Es' },
    story: {
      en: "A sudden blizzard has frozen parts of the valley! Eight dino eggs are scattered across a wide 10-row grid. Dr. Rex must navigate icy obstacles in the largest landscape yet.",
      id: 'Badai salju tiba-tiba telah membekukan sebagian lembah! Delapan telur dino tersebar di kisi 10 baris yang lebar. Dr. Rex harus menavigasi rintangan beku di lanskap terbesar sejauh ini.',
    },
    mascotMessage: {
      en: "Frozen terrain! 🧊 Real autonomous vehicles use pathfinding algorithms across huge grids like this. Use LOOPS, FUNCTIONS, and LISTS to plan the optimal rescue route!",
      id: 'Medan yang membeku! 🧊 Kendaraan otonom nyata menggunakan algoritma pencarian jalur di kisi besar seperti ini. Gunakan PERULANGAN, FUNGSI, dan DAFTAR untuk merencanakan rute penyelamatan optimal!',
    },
    gridRows: 10,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(10, 9)
      g[1][3] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][2] = 'obstacle'
      g[8][7] = 'obstacle'
      g[3][0] = 'obstacle'
      g[1][7] = 'obstacle'
      g[9][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 8] },
      { id: 'e2', pos: [2, 4] },
      { id: 'e3', pos: [4, 8] },
      { id: 'e4', pos: [5, 2] },
      { id: 'e5', pos: [7, 6] },
      { id: 'e6', pos: [9, 0] },
      { id: 'e7', pos: [9, 8] },
      { id: 'e8', pos: [6, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 110,
    xpReward: 550,
    hints: [
      { en: 'With 10 rows to cover, loops save you the most blocks!', id: 'Dengan 10 baris yang harus dijangkau, perulangan menghemat paling banyak blok!' },
      { en: 'Group eggs by their column position to minimize backtracking!', id: 'Kelompokkan telur berdasarkan posisi kolomnya untuk meminimalkan jalan bolak-balik!' },
    ],
    starThresholds: [231, 165, 138, 110],
  },
  {
    id: 'jurassic-9',
    worldId: 'jurassic',
    number: 9,
    title: { en: 'Mega Herd', id: 'Kawanan Mega' },
    story: {
      en: "A mega herd of dinosaurs has trampled the landscape! Nine eggs are scattered across the massive 10×10 park. Dr. Rex must execute a perfect algorithm to rescue every last one.",
      id: 'Kawanan mega dinosaurus telah menginjak-injak lanskapnya! Sembilan telur tersebar di seluruh taman 10×10 yang besar. Dr. Rex harus menjalankan algoritma yang sempurna untuk menyelamatkan semuanya.',
    },
    mascotMessage: {
      en: "Nine eggs across a massive grid! 🦕🦕🦕 Real drone delivery systems solve exactly this every day — visiting many locations in the shortest path. Use ALL your skills!",
      id: 'Sembilan telur di kisi yang besar! 🦕🦕🦕 Sistem pengiriman drone nyata memecahkan hal ini setiap hari — mengunjungi banyak lokasi dalam jalur terpendek. Gunakan SEMUA keterampilanmu!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][4] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][6] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][7] = 'obstacle'
      g[1][7] = 'obstacle'
      g[4][5] = 'obstacle'
      g[6][7] = 'obstacle'
      g[9][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 9] },
      { id: 'e2', pos: [2, 5] },
      { id: 'e3', pos: [4, 1] },
      { id: 'e4', pos: [4, 9] },
      { id: 'e5', pos: [6, 4] },
      { id: 'e6', pos: [7, 8] },
      { id: 'e7', pos: [9, 2] },
      { id: 'e8', pos: [9, 7] },
      { id: 'e9', pos: [5, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 130,
    xpReward: 600,
    hints: [
      { en: 'Split the grid into zones and write a function per zone!', id: 'Bagi kisi menjadi zona dan tulis fungsi untuk setiap zona!' },
      { en: 'A list of positions processed in the right order cuts the total moves in half!', id: 'Daftar posisi yang diproses dalam urutan yang tepat memangkas total gerakan menjadi setengah!' },
    ],
    starThresholds: [273, 195, 163, 130],
  },
  {
    id: 'jurassic-10',
    worldId: 'jurassic',
    number: 10,
    title: { en: 'The Great Extinction', id: 'Kepunahan Besar' },
    story: {
      en: "The asteroid is hours away! Dr. Rex must save ten dinosaur eggs — the last of their kind — from across the entire 10×10 park. This is the ultimate real-world pathfinding challenge. Every move counts!",
      id: 'Asteroid tinggal beberapa jam lagi! Dr. Rex harus menyelamatkan sepuluh telur dinosaurus — yang terakhir dari jenisnya — dari seluruh taman 10×10. Ini adalah tantangan pencarian jalur dunia nyata tertinggi. Setiap gerakan sangat berarti!',
    },
    mascotMessage: {
      en: "THE GREAT EXTINCTION — final challenge! 🌋🦕 Ten eggs, one chance. This is the Travelling Salesman Problem — one of the most famous algorithms in computer science. Give it your BEST!",
      id: 'KEPUNAHAN BESAR — tantangan final! 🌋🦕 Sepuluh telur, satu kesempatan. Ini adalah Masalah Penjual Keliling — salah satu algoritma paling terkenal dalam ilmu komputer. Berikan yang TERBAIK!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[0][4] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][0] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][4] = 'obstacle'
      g[4][7] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][7] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][6] = 'obstacle'
      g[8][4] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1',  pos: [0, 9] },
      { id: 'e2',  pos: [1, 5] },
      { id: 'e3',  pos: [3, 8] },
      { id: 'e4',  pos: [4, 2] },
      { id: 'e5',  pos: [5, 6] },
      { id: 'e6',  pos: [6, 0] },
      { id: 'e7',  pos: [7, 4] },
      { id: 'e8',  pos: [8, 8] },
      { id: 'e9',  pos: [9, 3] },
      { id: 'e10', pos: [9, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 150,
    xpReward: 700,
    hints: [
      { en: 'Plan the full route on paper first — count every move before you code!', id: 'Rencanakan rute lengkap di atas kertas terlebih dahulu — hitung setiap gerakan sebelum membuat kode!' },
      { en: 'Functions + lists = the real programmer\'s toolkit for solving this problem!', id: 'Fungsi + daftar = perangkat programmer nyata untuk memecahkan masalah ini!' },
    ],
    starThresholds: [315, 225, 188, 150],
  },

  // ─────────────────────────────────────────────
  // BONUS WORLD 2: CITY PARKING — Sorting & Routing
  // ─────────────────────────────────────────────
  {
    id: 'parking-1',
    worldId: 'parking',
    number: 1,
    title: { en: 'First Shift', id: 'Giliran Pertama' },
    story: {
      en: "Parker the parking officer just started their shift! Guide Parker to mark two empty parking spaces before the rush hour crowd arrives.",
      id: 'Parker si petugas parkir baru saja memulai gilirannya! Pandu Parker untuk menandai dua tempat parkir kosong sebelum keramaian jam sibuk tiba.',
    },
    mascotMessage: {
      en: "Welcome to the parking lot! 🚗 Real parking apps use algorithms to find empty spots. Use loops to patrol the lot efficiently!",
      id: 'Selamat datang di tempat parkir! 🚗 Aplikasi parkir nyata menggunakan algoritma untuk menemukan tempat kosong. Gunakan perulangan untuk berpatroli secara efisien!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(6, 6)
      g[2][2] = 'obstacle'
      g[4][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [1, 4] },
      { id: 'p2', pos: [5, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic'],
    optimalBlockCount: 10,
    xpReward: 200,
    hints: [
      { en: 'Navigate around the construction barriers!', id: 'Navigasi menghindari penghalang konstruksi!' },
      { en: 'Use loops to move in straight lines quickly!', id: 'Gunakan perulangan untuk bergerak dalam garis lurus dengan cepat!' },
    ],
    starThresholds: [25, 18, 14, 10],
  },
  {
    id: 'parking-2',
    worldId: 'parking',
    number: 2,
    title: { en: 'Rush Hour', id: 'Jam Sibuk' },
    story: {
      en: "Rush hour chaos! Three parking zones need to be checked and confirmed. Parker must use variables to track which zones have been verified — just like real parking management software.",
      id: 'Kekacauan jam sibuk! Tiga zona parkir perlu diperiksa dan dikonfirmasi. Parker harus menggunakan variabel untuk melacak zona mana yang sudah diverifikasi — seperti perangkat lunak manajemen parkir nyata.',
    },
    mascotMessage: {
      en: "Rush hour! 🚦 Real parking apps use VARIABLES to track availability. Use variables to remember which spots you've checked!",
      id: 'Jam sibuk! 🚦 Aplikasi parkir nyata menggunakan VARIABEL untuk melacak ketersediaan. Gunakan variabel untuk mengingat tempat mana yang sudah kamu periksa!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[1][3] = 'obstacle'
      g[3][6] = 'obstacle'
      g[5][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 6] },
      { id: 'p2', pos: [4, 1] },
      { id: 'p3', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables'],
    optimalBlockCount: 22,
    xpReward: 250,
    hints: [
      { en: 'Use a variable to count confirmed parking zones!', id: 'Gunakan variabel untuk menghitung zona parkir yang sudah dikonfirmasi!' },
      { en: 'Plan the most direct path through all three zones!', id: 'Rencanakan jalur paling langsung melalui ketiga zona!' },
    ],
    starThresholds: [53, 38, 30, 22],
  },
  {
    id: 'parking-3',
    worldId: 'parking',
    number: 3,
    title: { en: 'Double Deck', id: 'Dua Lantai' },
    story: {
      en: "The parking garage expanded to four zones! Parker must use functions to handle each zone type — compact, standard, oversized, and VIP. Real parking garages use exactly this kind of categorization logic.",
      id: 'Gedung parkir diperluas menjadi empat zona! Parker harus menggunakan fungsi untuk menangani setiap jenis zona — kompak, standar, besar, dan VIP. Gedung parkir nyata menggunakan logika kategorisasi seperti ini.',
    },
    mascotMessage: {
      en: "Four zones to manage! 🅿️🅿️🅿️🅿️ Real garage software uses FUNCTIONS for each zone type. Write a function for each parking procedure!",
      id: 'Empat zona yang harus dikelola! 🅿️🅿️🅿️🅿️ Perangkat lunak garasi nyata menggunakan FUNGSI untuk setiap jenis zona. Tulis fungsi untuk setiap prosedur parkir!',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[0][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[4][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[3][0] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 7] },
      { id: 'p2', pos: [3, 4] },
      { id: 'p3', pos: [6, 0] },
      { id: 'p4', pos: [5, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions'],
    optimalBlockCount: 35,
    xpReward: 300,
    hints: [
      { en: 'Create a function to navigate to each parking zone!', id: 'Buat fungsi untuk navigasi ke setiap zona parkir!' },
      { en: 'Reuse the function by passing different zone positions!', id: 'Gunakan kembali fungsi dengan memberikan posisi zona yang berbeda!' },
    ],
    starThresholds: [77, 55, 45, 35],
  },
  {
    id: 'parking-4',
    worldId: 'parking',
    number: 4,
    title: { en: 'VIP Night', id: 'Malam VIP' },
    story: {
      en: "VIP event tonight! Five premium parking zones need to be reserved. Parker must use lists to manage the reservation order — the same technique used in real hotel and airport parking systems.",
      id: 'Acara VIP malam ini! Lima zona parkir premium perlu dipesan. Parker harus menggunakan daftar untuk mengelola urutan reservasi — teknik yang sama digunakan dalam sistem parkir hotel dan bandara nyata.',
    },
    mascotMessage: {
      en: "VIP event! 🌟 Airports and hotels use LISTS to manage parking reservations in order. Use a list to queue up the zones Parker visits!",
      id: 'Acara VIP! 🌟 Bandara dan hotel menggunakan DAFTAR untuk mengelola reservasi parkir secara berurutan. Gunakan daftar untuk mengantri zona yang dikunjungi Parker!',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[0][3] = 'obstacle'
      g[1][6] = 'obstacle'
      g[3][1] = 'obstacle'
      g[5][4] = 'obstacle'
      g[6][7] = 'obstacle'
      g[4][0] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 7] },
      { id: 'p2', pos: [2, 4] },
      { id: 'p3', pos: [4, 7] },
      { id: 'p4', pos: [7, 2] },
      { id: 'p5', pos: [5, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 50,
    xpReward: 350,
    hints: [
      { en: 'Store zone positions in a list before navigating!', id: 'Simpan posisi zona dalam daftar sebelum menavigasi!' },
      { en: 'Process the list in the most efficient order!', id: 'Proses daftar dalam urutan yang paling efisien!' },
    ],
    starThresholds: [105, 75, 63, 50],
  },
  {
    id: 'parking-5',
    worldId: 'parking',
    number: 5,
    title: { en: 'Grand Prix Day', id: 'Hari Grand Prix' },
    story: {
      en: "Race day! The entire parking grid must be optimized for thousands of spectators. Parker needs to use every tool — loops, functions, conditions, and lists — to manage all six zones. This is real-world logistics code!",
      id: 'Hari balapan! Seluruh grid parkir harus dioptimalkan untuk ribuan penonton. Parker perlu menggunakan semua alat — perulangan, fungsi, kondisi, dan daftar — untuk mengelola semua enam zona. Ini adalah kode logistik dunia nyata!',
    },
    mascotMessage: {
      en: "GRAND PRIX! 🏁 Real logistics companies write code exactly like this to optimize routes for delivery trucks. Use EVERYTHING to find the perfect path!",
      id: 'GRAND PRIX! 🏁 Perusahaan logistik nyata menulis kode seperti ini untuk mengoptimalkan rute truk pengiriman. Gunakan SEGALANYA untuk menemukan jalur yang sempurna!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][4] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][1] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][3] = 'obstacle'
      g[6][8] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 8] },
      { id: 'p2', pos: [2, 5] },
      { id: 'p3', pos: [4, 0] },
      { id: 'p4', pos: [6, 4] },
      { id: 'p5', pos: [8, 8] },
      { id: 'p6', pos: [3, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 70,
    xpReward: 400,
    hints: [
      { en: 'Use lists to plan the optimal visit order!', id: 'Gunakan daftar untuk merencanakan urutan kunjungan yang optimal!' },
      { en: 'Think like a GPS — find the shortest total path!', id: 'Berpikirlah seperti GPS — temukan total jalur terpendek!' },
    ],
    starThresholds: [147, 105, 88, 70],
  },
  {
    id: 'parking-6',
    worldId: 'parking',
    number: 6,
    title: { en: 'Holiday Rush', id: 'Hari Raya Padat' },
    story: {
      en: "The holiday season has begun! Seven parking zones across the city need to be checked and cleared before the parade starts. Parker must plan an efficient route through heavy decorations.",
      id: 'Musim liburan telah dimulai! Tujuh zona parkir di seluruh kota perlu diperiksa dan dibersihkan sebelum parade dimulai. Parker harus merencanakan rute yang efisien melalui dekorasi yang padat.',
    },
    mascotMessage: {
      en: "Holiday rush! 🎄 Real city parking managers use route-optimization software during events. Build a LIST of zones and loop through them with FUNCTIONS — just like the pros!",
      id: 'Keramaian hari raya! 🎄 Manajer parkir kota nyata menggunakan perangkat lunak optimasi rute selama acara. Buat DAFTAR zona dan ulangi dengan FUNGSI — seperti yang dilakukan para profesional!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][0] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][4] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][1] = 'obstacle'
      g[3][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 8] },
      { id: 'p2', pos: [2, 3] },
      { id: 'p3', pos: [4, 7] },
      { id: 'p4', pos: [6, 0] },
      { id: 'p5', pos: [8, 4] },
      { id: 'p6', pos: [1, 6] },
      { id: 'p7', pos: [7, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 80,
    xpReward: 450,
    hints: [
      { en: 'Put all zone positions in a list and process them in order!', id: 'Masukkan semua posisi zona ke dalam daftar dan proses berurutan!' },
      { en: 'Write a helper function to navigate between any two points!', id: 'Tulis fungsi pembantu untuk navigasi antara dua titik mana pun!' },
    ],
    starThresholds: [168, 120, 100, 80],
  },
  {
    id: 'parking-7',
    worldId: 'parking',
    number: 7,
    title: { en: 'Airport Terminal', id: 'Terminal Bandara' },
    story: {
      en: "A major flight lands in 20 minutes! Seven airport parking zones must be allocated and confirmed before the crowd arrives. Parker must navigate the sprawling terminal grounds efficiently.",
      id: 'Penerbangan besar mendarat dalam 20 menit! Tujuh zona parkir bandara harus dialokasikan dan dikonfirmasi sebelum keramaian tiba. Parker harus menavigasi area terminal yang luas secara efisien.',
    },
    mascotMessage: {
      en: "Airport parking! ✈️ Airports use AI-powered systems to direct thousands of cars every hour. Model that with FUNCTIONS for each terminal zone and LISTS to track the allocation order!",
      id: 'Parkir bandara! ✈️ Bandara menggunakan sistem berbasis AI untuk mengarahkan ribuan mobil setiap jam. Modelkan itu dengan FUNGSI untuk setiap zona terminal dan DAFTAR untuk melacak urutan alokasi!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][1] = 'obstacle'
      g[1][5] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][0] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][2] = 'obstacle'
      g[7][4] = 'obstacle'
      g[7][8] = 'obstacle'
      return g
    })(),
    startPos: [4, 0],
    items: [
      { id: 'p1', pos: [0, 2] },
      { id: 'p2', pos: [0, 7] },
      { id: 'p3', pos: [3, 5] },
      { id: 'p4', pos: [5, 3] },
      { id: 'p5', pos: [6, 8] },
      { id: 'p6', pos: [8, 1] },
      { id: 'p7', pos: [8, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 95,
    xpReward: 500,
    hints: [
      { en: 'Starting in the middle row lets you reach top and bottom zones efficiently!', id: 'Memulai dari baris tengah memungkinkanmu menjangkau zona atas dan bawah secara efisien!' },
      { en: 'Use a list sorted by distance from your current position!', id: 'Gunakan daftar yang diurutkan berdasarkan jarak dari posisimu saat ini!' },
    ],
    starThresholds: [200, 143, 119, 95],
  },
  {
    id: 'parking-8',
    worldId: 'parking',
    number: 8,
    title: { en: 'Shopping Mall Madness', id: 'Kegilaan Mall' },
    story: {
      en: "The mega mall opened today! Eight parking checkpoints across a 10-row lot must be verified. Parker must cover every section before closing time — this is large-scale logistics in action.",
      id: 'Mega mall dibuka hari ini! Delapan pos pemeriksaan parkir di area 10 baris harus diverifikasi. Parker harus mencakup setiap bagian sebelum waktu tutup — ini adalah logistik skala besar dalam tindakan.',
    },
    mascotMessage: {
      en: "Mall-scale logistics! 🛍️ Real mall operators track every parking zone in real time with sensors and code. Use LOOPS to sweep rows and LISTS to mark checkpoints!",
      id: 'Logistik skala mall! 🛍️ Operator mall nyata melacak setiap zona parkir secara real time dengan sensor dan kode. Gunakan PERULANGAN untuk menyapu baris dan DAFTAR untuk menandai pos pemeriksaan!',
    },
    gridRows: 10,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(10, 9)
      g[1][3] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][4] = 'obstacle'
      g[3][6] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][3] = 'obstacle'
      g[8][6] = 'obstacle'
      g[9][4] = 'obstacle'
      g[1][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 8] },
      { id: 'p2', pos: [2, 5] },
      { id: 'p3', pos: [4, 0] },
      { id: 'p4', pos: [5, 7] },
      { id: 'p5', pos: [7, 3] },
      { id: 'p6', pos: [8, 8] },
      { id: 'p7', pos: [9, 1] },
      { id: 'p8', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 110,
    xpReward: 550,
    hints: [
      { en: 'With 10 rows, a zigzag sweep pattern often beats jumping around!', id: 'Dengan 10 baris, pola sapuan zigzag sering kali lebih baik daripada melompat-lompat!' },
      { en: 'Write a reusable "go to checkpoint" function to save blocks!', id: 'Tulis fungsi "pergi ke pos pemeriksaan" yang dapat digunakan kembali untuk menghemat blok!' },
    ],
    starThresholds: [231, 165, 138, 110],
  },
  {
    id: 'parking-9',
    worldId: 'parking',
    number: 9,
    title: { en: 'Stadium Night', id: 'Malam Stadion' },
    story: {
      en: "Sold-out concert night! Nine VIP parking sectors around the massive stadium must be confirmed before the gates open. Parker needs a flawless algorithm to cover the entire 10×10 lot.",
      id: 'Malam konser terjual habis! Sembilan sektor parkir VIP di sekitar stadion besar harus dikonfirmasi sebelum pintu gerbang dibuka. Parker membutuhkan algoritma yang sempurna untuk mencakup seluruh area 10×10.',
    },
    mascotMessage: {
      en: "Stadium night! 🏟️ Major event venues run multi-agent parking algorithms so thousands of cars flow smoothly. Use ALL your tools — LISTS, FUNCTIONS, LOOPS, CONDITIONS — to master this grid!",
      id: 'Malam stadion! 🏟️ Venue acara besar menjalankan algoritma parkir multi-agen agar ribuan mobil mengalir lancar. Gunakan SEMUA alatmu — DAFTAR, FUNGSI, PERULANGAN, KONDISI — untuk menguasai kisi ini!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][1] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][4] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][8] = 'obstacle'
      g[8][5] = 'obstacle'
      g[9][2] = 'obstacle'
      g[9][6] = 'obstacle'
      g[1][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 9] },
      { id: 'p2', pos: [1, 5] },
      { id: 'p3', pos: [3, 2] },
      { id: 'p4', pos: [4, 8] },
      { id: 'p5', pos: [6, 1] },
      { id: 'p6', pos: [7, 6] },
      { id: 'p7', pos: [8, 3] },
      { id: 'p8', pos: [9, 8] },
      { id: 'p9', pos: [5, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 130,
    xpReward: 600,
    hints: [
      { en: 'Divide the 10×10 lot into four quadrants and tackle one at a time!', id: 'Bagi area 10×10 menjadi empat kuadran dan tangani satu per satu!' },
      { en: 'A function per quadrant makes your code readable and efficient!', id: 'Fungsi per kuadran membuat kode kamu mudah dibaca dan efisien!' },
    ],
    starThresholds: [273, 195, 163, 130],
  },
  {
    id: 'parking-10',
    worldId: 'parking',
    number: 10,
    title: { en: 'Mega City Grid', id: 'Kisi Kota Mega' },
    story: {
      en: "The entire city grid is yours to manage! Ten critical parking zones are spread across the 10×10 map. This is the Master Parking Officer final exam — only the most efficient algorithm will earn three stars!",
      id: 'Seluruh kisi kota menjadi tanggungjawabmu! Sepuluh zona parkir kritis tersebar di seluruh peta 10×10. Ini adalah ujian akhir Petugas Parkir Master — hanya algoritma yang paling efisien yang akan mendapatkan tiga bintang!',
    },
    mascotMessage: {
      en: "MEGA CITY final! 🏙️ Congratulations — you've mastered the routing algorithms that real smart-city systems use to manage millions of vehicles. Code the perfect path and BECOME the algorithm! 🚗",
      id: 'Final KOTA MEGA! 🏙️ Selamat — kamu telah menguasai algoritma perutean yang digunakan sistem kota cerdas nyata untuk mengelola jutaan kendaraan. Buat kode jalur yang sempurna dan JADILAH algoritmanya! 🚗',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[0][5] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][5] = 'obstacle'
      g[4][8] = 'obstacle'
      g[5][0] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][3] = 'obstacle'
      g[8][5] = 'obstacle'
      g[8][8] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1',  pos: [0, 9] },
      { id: 'p2',  pos: [1, 4] },
      { id: 'p3',  pos: [2, 8] },
      { id: 'p4',  pos: [4, 1] },
      { id: 'p5',  pos: [5, 6] },
      { id: 'p6',  pos: [6, 3] },
      { id: 'p7',  pos: [7, 9] },
      { id: 'p8',  pos: [8, 2] },
      { id: 'p9',  pos: [9, 5] },
      { id: 'p10', pos: [3, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 150,
    xpReward: 700,
    hints: [
      { en: 'Ten zones — build a list of all positions and process them in optimal order!', id: 'Sepuluh zona — buat daftar semua posisi dan proses dalam urutan optimal!' },
      { en: 'Think like a GPS: minimize total distance, not just hops between zones!', id: 'Berpikirlah seperti GPS: minimalkan total jarak, bukan hanya lompatan antar zona!' },
    ],
    starThresholds: [315, 225, 188, 150],
  },

  // ─────────────────────────────────────────────
  // BONUS WORLD 3: SPACE SORTING — Algorithms & Data
  // ─────────────────────────────────────────────
  {
    id: 'sorting-1',
    worldId: 'sorting',
    number: 1,
    title: { en: 'Package Sort', id: 'Penyortiran Paket' },
    story: {
      en: "Sorty the robot just powered up in the space warehouse! Two packages are out of place. Guide Sorty to collect and sort them — just like how Amazon and UPS use robots in their real warehouses.",
      id: 'Robot Sorty baru saja menyala di gudang luar angkasa! Dua paket tidak pada tempatnya. Pandu Sorty untuk mengumpulkan dan menyortirnya — seperti bagaimana Amazon dan UPS menggunakan robot di gudang nyata mereka.',
    },
    mascotMessage: {
      en: "Warehouse robots use the SAME code you're writing! 🤖 Real companies like Amazon use algorithms to sort millions of packages. Use loops to patrol the warehouse!",
      id: 'Robot gudang menggunakan kode YANG SAMA yang kamu tulis! 🤖 Perusahaan nyata seperti Amazon menggunakan algoritma untuk menyortir jutaan paket. Gunakan perulangan untuk berpatroli di gudang!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(6, 6)
      g[1][3] = 'obstacle'
      g[4][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 5] },
      { id: 's2', pos: [5, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables'],
    optimalBlockCount: 12,
    xpReward: 200,
    hints: [
      { en: 'Use loops to move across the warehouse rows!', id: 'Gunakan perulangan untuk bergerak di sepanjang baris gudang!' },
      { en: 'Find the most direct route to each package!', id: 'Temukan rute paling langsung ke setiap paket!' },
    ],
    starThresholds: [28, 20, 16, 12],
  },
  {
    id: 'sorting-2',
    worldId: 'sorting',
    number: 2,
    title: { en: 'Conveyor Chaos', id: 'Kekacauan Conveyor' },
    story: {
      en: "The conveyor belts broke down! Three packages are stuck in wrong sections. Sorty must use variables to track the sorting queue — real warehouse management systems use this exact technique.",
      id: 'Ban berjalan rusak! Tiga paket terjebak di bagian yang salah. Sorty harus menggunakan variabel untuk melacak antrian penyortiran — sistem manajemen gudang nyata menggunakan teknik yang persis ini.',
    },
    mascotMessage: {
      en: "Conveyor breakdown! 🔧 Real logistics software uses VARIABLES as counters and trackers. Use a variable to count sorted packages — that's exactly how inventory systems work!",
      id: 'Conveyor rusak! 🔧 Perangkat lunak logistik nyata menggunakan VARIABEL sebagai penghitung dan pelacak. Gunakan variabel untuk menghitung paket yang sudah disortir — begitulah cara sistem inventaris bekerja!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[0][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[5][1] = 'obstacle'
      return g
    })(),
    startPos: [3, 0],
    items: [
      { id: 's1', pos: [0, 6] },
      { id: 's2', pos: [4, 4] },
      { id: 's3', pos: [6, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions'],
    optimalBlockCount: 22,
    xpReward: 250,
    hints: [
      { en: 'Use a variable to track how many packages are sorted!', id: 'Gunakan variabel untuk melacak berapa banyak paket yang sudah disortir!' },
      { en: 'Create a function for the sorting routine!', id: 'Buat fungsi untuk rutinitas penyortiran!' },
    ],
    starThresholds: [53, 38, 30, 22],
  },
  {
    id: 'sorting-3',
    worldId: 'sorting',
    number: 3,
    title: { en: 'Priority Delivery', id: 'Pengiriman Prioritas' },
    story: {
      en: "Priority packages must be processed first! Sorty needs to sort four packages across a complex warehouse layout. Real priority queues in software work exactly like this — urgent items jump the line.",
      id: 'Paket prioritas harus diproses terlebih dahulu! Sorty perlu menyortir empat paket di seluruh tata letak gudang yang kompleks. Antrian prioritas nyata dalam perangkat lunak bekerja persis seperti ini — item mendesak melompat antrean.',
    },
    mascotMessage: {
      en: "Priority sorting! ⭐ Operating systems use priority queues to manage tasks — urgent tasks first! Use LISTS and FUNCTIONS to build your priority sorter!",
      id: 'Penyortiran prioritas! ⭐ Sistem operasi menggunakan antrian prioritas untuk mengelola tugas — tugas mendesak terlebih dahulu! Gunakan DAFTAR dan FUNGSI untuk membangun penyortir prioritasmu!',
    },
    gridRows: 8,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(8, 7)
      g[1][2] = 'obstacle'
      g[2][5] = 'obstacle'
      g[4][3] = 'obstacle'
      g[6][1] = 'obstacle'
      g[5][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 6] },
      { id: 's2', pos: [3, 2] },
      { id: 's3', pos: [5, 5] },
      { id: 's4', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 35,
    xpReward: 300,
    hints: [
      { en: 'Use a list to store the order packages should be sorted!', id: 'Gunakan daftar untuk menyimpan urutan paket yang harus disortir!' },
      { en: 'Write a function that sorts one package at a time!', id: 'Tulis fungsi yang menyortir satu paket sekaligus!' },
    ],
    starThresholds: [77, 55, 45, 35],
  },
  {
    id: 'sorting-4',
    worldId: 'sorting',
    number: 4,
    title: { en: 'Warehouse Run', id: 'Lari Gudang' },
    story: {
      en: "The warehouse is massive — five packages scattered across every corner! Sorty must navigate the largest layout yet, using all available tools. This mirrors how real distribution center robots handle end-of-day sweeps.",
      id: 'Gudang sangat besar — lima paket tersebar di setiap sudut! Sorty harus menavigasi tata letak terbesar hingga saat ini, menggunakan semua alat yang tersedia. Ini mencerminkan bagaimana robot pusat distribusi nyata menangani pemeriksaan akhir hari.',
    },
    mascotMessage: {
      en: "Warehouse sweep! 🏭 Real robots at fulfillment centers do exactly this — systematic coverage using algorithms. Use LOOPS and LISTS to cover the entire warehouse!",
      id: 'Sapu gudang! 🏭 Robot nyata di pusat pemenuhan melakukan hal yang persis ini — cakupan sistematis menggunakan algoritma. Gunakan PERULANGAN dan DAFTAR untuk mencakup seluruh gudang!',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[0][5] = 'obstacle'
      g[1][2] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 8] },
      { id: 's2', pos: [2, 3] },
      { id: 's3', pos: [4, 8] },
      { id: 's4', pos: [7, 0] },
      { id: 's5', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 55,
    xpReward: 350,
    hints: [
      { en: 'Map out a snake-pattern route to cover the warehouse!', id: 'Petakan rute pola ular untuk mencakup gudang!' },
      { en: 'Use lists to plan which packages to grab first!', id: 'Gunakan daftar untuk merencanakan paket mana yang harus diambil terlebih dahulu!' },
    ],
    starThresholds: [119, 85, 70, 55],
  },
  {
    id: 'sorting-5',
    worldId: 'sorting',
    number: 5,
    title: { en: 'Master Sorter', id: 'Penyortir Master' },
    story: {
      en: "Sorty has become the ultimate Master Sorter! Six packages in the most complex warehouse layout. This is the pinnacle of real-world robotics programming — the exact type of algorithm that autonomous warehouse robots run 24/7.",
      id: 'Sorty telah menjadi Penyortir Master terbaik! Enam paket di tata letak gudang paling kompleks. Ini adalah puncak dari pemrograman robotika dunia nyata — jenis algoritma yang persis dijalankan oleh robot gudang otonom 24/7.',
    },
    mascotMessage: {
      en: "MASTER SORTER challenge! 🏆 You've learned the algorithms that power real-world robots and apps. This is what professional programmers build! Use EVERYTHING — you've got this! 📦",
      id: 'Tantangan PENYORTIR MASTER! 🏆 Kamu telah mempelajari algoritma yang menggerakkan robot dan aplikasi dunia nyata. Ini yang dibangun oleh programmer profesional! Gunakan SEGALANYA — kamu bisa! 📦',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][3] = 'obstacle'
      g[1][6] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][8] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][0] = 'obstacle'
      g[8][7] = 'obstacle'
      g[4][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 8] },
      { id: 's2', pos: [2, 5] },
      { id: 's3', pos: [4, 0] },
      { id: 's4', pos: [6, 7] },
      { id: 's5', pos: [8, 3] },
      { id: 's6', pos: [3, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 75,
    xpReward: 450,
    hints: [
      { en: 'Plan the full optimal path before writing any code!', id: 'Rencanakan jalur optimal penuh sebelum menulis kode apapun!' },
      { en: 'Use all tools: lists, functions, loops, and conditions!', id: 'Gunakan semua alat: daftar, fungsi, perulangan, dan kondisi!' },
    ],
    starThresholds: [154, 110, 93, 75],
  },
  {
    id: 'sorting-6',
    worldId: 'sorting',
    number: 6,
    title: { en: 'Black Friday Surge', id: 'Lonjakan Jumat Hitam' },
    story: {
      en: "Black Friday sale! Seven misplaced packages are causing chaos in the space warehouse. Sorty must execute a high-speed sweep to sort them all before the delivery deadline hits.",
      id: 'Penjualan Jumat Hitam! Tujuh paket yang salah tempat menyebabkan kekacauan di gudang luar angkasa. Sorty harus melakukan sapuan berkecepatan tinggi untuk menyortir semuanya sebelum tenggat waktu pengiriman.',
    },
    mascotMessage: {
      en: "Black Friday surge! 📦📦📦📦📦📦📦 Real e-commerce warehouses run surge algorithms during sales events. Use LISTS to queue packages and FUNCTIONS to sort them — just like the pros!",
      id: 'Lonjakan Jumat Hitam! 📦📦📦📦📦📦📦 Gudang e-commerce nyata menjalankan algoritma lonjakan selama acara penjualan. Gunakan DAFTAR untuk mengantri paket dan FUNGSI untuk menyortirnya — seperti yang dilakukan para profesional!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][2] = 'obstacle'
      g[1][6] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][0] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][8] = 'obstacle'
      g[8][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 8] },
      { id: 's2', pos: [2, 4] },
      { id: 's3', pos: [4, 1] },
      { id: 's4', pos: [5, 7] },
      { id: 's5', pos: [7, 3] },
      { id: 's6', pos: [8, 6] },
      { id: 's7', pos: [3, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 85,
    xpReward: 500,
    hints: [
      { en: 'Store all package positions in a list, then loop through them!', id: 'Simpan semua posisi paket dalam daftar, lalu ulangi dengan perulangan!' },
      { en: 'Sort the list by row first to reduce backtracking!', id: 'Urutkan daftar berdasarkan baris terlebih dahulu untuk mengurangi jalan bolak-balik!' },
    ],
    starThresholds: [179, 128, 106, 85],
  },
  {
    id: 'sorting-7',
    worldId: 'sorting',
    number: 7,
    title: { en: 'International Hub', id: 'Hub Internasional' },
    story: {
      en: "The space hub receives packages from seven star systems! Each must be sorted and dispatched to the right quadrant. Sorty must navigate a crowded hub with obstacles at every junction.",
      id: 'Hub luar angkasa menerima paket dari tujuh sistem bintang! Setiap paket harus disortir dan dikirim ke kuadran yang tepat. Sorty harus menavigasi hub yang padat dengan rintangan di setiap persimpangan.',
    },
    mascotMessage: {
      en: "International hub! 🌌 Global logistics companies handle millions of cross-border packages daily using routing algorithms. Apply FUNCTIONS and CONDITIONAL LOGIC to manage each incoming parcel!",
      id: 'Hub internasional! 🌌 Perusahaan logistik global menangani jutaan paket lintas batas setiap hari menggunakan algoritma perutean. Terapkan FUNGSI dan LOGIKA KONDISIONAL untuk mengelola setiap paket masuk!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][5] = 'obstacle'
      g[1][1] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][8] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][2] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][2] = 'obstacle'
      return g
    })(),
    startPos: [4, 0],
    items: [
      { id: 's1', pos: [0, 3] },
      { id: 's2', pos: [0, 8] },
      { id: 's3', pos: [3, 6] },
      { id: 's4', pos: [5, 4] },
      { id: 's5', pos: [7, 1] },
      { id: 's6', pos: [8, 5] },
      { id: 's7', pos: [6, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 100,
    xpReward: 550,
    hints: [
      { en: 'Starting from the middle row, plan trips to upper and lower clusters separately!', id: 'Mulai dari baris tengah, rencanakan perjalanan ke kluster atas dan bawah secara terpisah!' },
      { en: 'A function that accepts a target position removes repeated move logic!', id: 'Fungsi yang menerima posisi target menghilangkan logika gerakan yang berulang!' },
    ],
    starThresholds: [210, 150, 125, 100],
  },
  {
    id: 'sorting-8',
    worldId: 'sorting',
    number: 8,
    title: { en: 'Mega Fulfillment', id: 'Pemenuhan Mega' },
    story: {
      en: "The mega fulfillment center has eight packages scattered across a vast 10-row warehouse. Sorty must execute a precise sweep to pick them all up before the launch window closes.",
      id: 'Pusat pemenuhan mega memiliki delapan paket tersebar di gudang 10 baris yang luas. Sorty harus melakukan sapuan presisi untuk mengambil semuanya sebelum jendela peluncuran ditutup.',
    },
    mascotMessage: {
      en: "Mega fulfillment! 🏭 Companies like Amazon run thousands of robot sorters simultaneously across huge warehouse floors. Coordinate your movements with LOOPS and LISTS — efficiency is everything!",
      id: 'Pemenuhan mega! 🏭 Perusahaan seperti Amazon menjalankan ribuan penyortir robot secara bersamaan di lantai gudang yang luas. Koordinasikan gerakanmu dengan PERULANGAN dan DAFTAR — efisiensi adalah segalanya!',
    },
    gridRows: 10,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(10, 9)
      g[1][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][0] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][1] = 'obstacle'
      g[9][3] = 'obstacle'
      g[1][7] = 'obstacle'
      g[6][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 8] },
      { id: 's2', pos: [2, 3] },
      { id: 's3', pos: [4, 0] },
      { id: 's4', pos: [5, 7] },
      { id: 's5', pos: [7, 3] },
      { id: 's6', pos: [8, 8] },
      { id: 's7', pos: [9, 1] },
      { id: 's8', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 115,
    xpReward: 600,
    hints: [
      { en: 'A snake-pattern sweep across rows picks up nearby packages automatically!', id: 'Sapuan pola ular di seluruh baris secara otomatis mengambil paket di dekatnya!' },
      { en: 'Use a list of the 8 positions and a function to navigate to each in sequence!', id: 'Gunakan daftar 8 posisi dan fungsi untuk navigasi ke masing-masing secara berurutan!' },
    ],
    starThresholds: [242, 173, 144, 115],
  },
  {
    id: 'sorting-9',
    worldId: 'sorting',
    number: 9,
    title: { en: 'Flash Sale Frenzy', id: 'Kegilaan Flash Sale' },
    story: {
      en: "Flash sale activated — nine packages across a 10×10 warehouse grid must be sorted in under the time limit! Sorty must apply the most advanced algorithms to achieve a perfect run.",
      id: 'Flash sale diaktifkan — sembilan paket di seluruh kisi gudang 10×10 harus disortir dalam batas waktu! Sorty harus menerapkan algoritma paling canggih untuk mencapai run yang sempurna.',
    },
    mascotMessage: {
      en: "Flash sale frenzy! ⚡ Time-sensitive logistics require optimal algorithms — no backtracking allowed! Use LISTS ordered by proximity and FUNCTIONS that reuse movement logic!",
      id: 'Kegilaan flash sale! ⚡ Logistik sensitif waktu memerlukan algoritma optimal — tidak ada jalan bolak-balik! Gunakan DAFTAR yang diurutkan berdasarkan kedekatan dan FUNGSI yang menggunakan kembali logika gerakan!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][3] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][4] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][3] = 'obstacle'
      g[6][0] = 'obstacle'
      g[6][8] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][6] = 'obstacle'
      g[9][2] = 'obstacle'
      g[9][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 9] },
      { id: 's2', pos: [2, 6] },
      { id: 's3', pos: [4, 2] },
      { id: 's4', pos: [5, 8] },
      { id: 's5', pos: [6, 5] },
      { id: 's6', pos: [8, 1] },
      { id: 's7', pos: [9, 4] },
      { id: 's8', pos: [9, 9] },
      { id: 's9', pos: [3, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 135,
    xpReward: 650,
    hints: [
      { en: 'Nine packages — map the optimal visiting order before you write a single block!', id: 'Sembilan paket — petakan urutan kunjungan optimal sebelum kamu menulis satu blok pun!' },
      { en: 'Group packages into two columns (left side / right side) for a clean divide-and-conquer!', id: 'Kelompokkan paket menjadi dua kolom (sisi kiri / sisi kanan) untuk divide-and-conquer yang bersih!' },
    ],
    starThresholds: [284, 203, 169, 135],
  },
  {
    id: 'sorting-10',
    worldId: 'sorting',
    number: 10,
    title: { en: 'Galactic Dispatch', id: 'Pengiriman Galaktik' },
    story: {
      en: "Final mission: ten packages scattered across the entire 10×10 space warehouse. This is the Galactic Dispatch — Sorty's ultimate test of algorithmic mastery. Code the perfect route and become a true Master Sorter!",
      id: 'Misi terakhir: sepuluh paket tersebar di seluruh gudang luar angkasa 10×10. Ini adalah Pengiriman Galaktik — ujian penguasaan algoritma Sorty yang tertinggi. Buat kode rute yang sempurna dan jadilah Penyortir Master sejati!',
    },
    mascotMessage: {
      en: "GALACTIC DISPATCH — the final challenge! 🚀📦 You've learned the algorithms that power real robots, apps, and AI systems. Ten packages, one perfect run. Show the galaxy what a true programmer can do! 🌌",
      id: 'PENGIRIMAN GALAKTIK — tantangan final! 🚀📦 Kamu telah mempelajari algoritma yang menggerakkan robot nyata, aplikasi, dan sistem AI. Sepuluh paket, satu run yang sempurna. Tunjukkan kepada galaksi apa yang bisa dilakukan programmer sejati! 🌌',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[0][4] = 'obstacle'
      g[1][2] = 'obstacle'
      g[1][7] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][4] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][2] = 'obstacle'
      g[7][7] = 'obstacle'
      g[8][4] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1',  pos: [0, 9] },
      { id: 's2',  pos: [1, 5] },
      { id: 's3',  pos: [3, 8] },
      { id: 's4',  pos: [4, 3] },
      { id: 's5',  pos: [5, 1] },
      { id: 's6',  pos: [6, 7] },
      { id: 's7',  pos: [7, 4] },
      { id: 's8',  pos: [8, 0] },
      { id: 's9',  pos: [9, 6] },
      { id: 's10', pos: [2, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 160,
    xpReward: 700,
    hints: [
      { en: 'Build a complete list of all ten positions — then find the greedy nearest-neighbour order!', id: 'Buat daftar lengkap semua sepuluh posisi — lalu temukan urutan tetangga terdekat yang serakah!' },
      { en: 'A reusable "goTo(row, col)" function removes almost all repeated code!', id: 'Fungsi "goTo(baris, kolom)" yang dapat digunakan kembali menghapus hampir semua kode berulang!' },
    ],
    starThresholds: [336, 240, 200, 160],
  },

  // ─────────────────────────────────────────────
  // BONUS WORLD 4: BUG LAB — Debugging
  // ─────────────────────────────────────────────
  {
    id: 'debugging-1',
    worldId: 'debugging',
    number: 1,
    isBuggy: true,
    title: { en: 'Wrong Way, Robot!', id: 'Jalan Salah, Robot!' },
    story: {
      en: "Bugsy left a move block pointing the wrong way! The robot keeps backtracking instead of reaching the wrench. Find the bad block and flip it.",
      id: 'Bugsy meninggalkan blok gerak yang mengarah ke arah yang salah! Robot terus berbalik arah dan tidak bisa mencapai kunci. Temukan blok yang salah dan balikkan.',
    },
    mascotMessage: {
      en: "Watch where the robot goes — one block sends it the wrong way! 🐛 The fix is just one block.",
      id: 'Perhatikan ke mana robot pergi — satu blok mengirimnya ke arah yang salah! 🐛 Perbaikannya hanya satu blok.',
    },
    gridRows: 3,
    gridCols: 6,
    cells: emptyGrid(3, 6),
    startPos: [1, 0],
    items: [{ id: 'wrench-1', pos: [1, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 4,
    xpReward: 75,
    hints: [
      { en: 'Run the code and watch which step goes backwards.', id: 'Jalankan kode dan perhatikan langkah mana yang berbalik.' },
      { en: 'The robot needs to go right 4 times total.', id: 'Robot perlu bergerak ke kanan sebanyak 4 kali.' },
    ],
    starThresholds: [10, 7, 5, 4],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'move_right',
            id: 'dbg_d1_1',
            x: 30,
            y: 50,
            next: {
              block: {
                type: 'move_right',
                id: 'dbg_d1_2',
                next: {
                  block: {
                    type: 'move_left',
                    id: 'dbg_d1_3',
                    next: {
                      block: {
                        type: 'move_right',
                        id: 'dbg_d1_4',
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-2',
    worldId: 'debugging',
    number: 2,
    isBuggy: true,
    title: { en: 'Short Circuit', id: 'Sirkuit Pendek' },
    story: {
      en: "Bugsy's loop stops too early — the repeat count is wrong! The robot runs out of steps before reaching the wrench. Find the number and fix it.",
      id: 'Perulangan Bugsy berhenti terlalu awal — jumlah pengulangannya salah! Robot kehabisan langkah sebelum mencapai kunci. Temukan angkanya dan perbaiki.',
    },
    mascotMessage: {
      en: "Count the columns between start and goal, then check the number inside the repeat block. 🐛",
      id: 'Hitung kolom antara awal dan tujuan, lalu periksa angka di dalam blok pengulangan. 🐛',
    },
    gridRows: 3,
    gridCols: 8,
    cells: emptyGrid(3, 8),
    startPos: [1, 0],
    items: [{ id: 'wrench-2', pos: [1, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 80,
    hints: [
      { en: 'The robot stops at column 3. Where does it need to go?', id: 'Robot berhenti di kolom 3. Di mana seharusnya ia pergi?' },
      { en: 'Change the number in the repeat block to the right count.', id: 'Ubah angka di blok pengulangan ke jumlah yang benar.' },
    ],
    starThresholds: [9, 6, 4, 3],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d2_1',
            x: 30,
            y: 50,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 3 },
                },
              },
              DO: {
                block: {
                  type: 'move_right',
                  id: 'dbg_d2_2',
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-3',
    worldId: 'debugging',
    number: 3,
    isBuggy: true,
    title: { en: 'Wrong Order', id: 'Urutan Salah' },
    story: {
      en: "The two loops are in the wrong order! Going right first sends the robot straight into a warning sign. Swap the loops and the path opens up.",
      id: 'Dua perulangan berada dalam urutan yang salah! Bergerak ke kanan lebih dulu mengirim robot langsung ke tanda peringatan. Tukar perulangan dan jalan pun terbuka.',
    },
    mascotMessage: {
      en: "There's a blocker on row 0 — think about which direction to move first! 🐛",
      id: 'Ada penghalang di baris 0 — pikirkan arah mana yang harus digerakkan terlebih dahulu! 🐛',
    },
    gridRows: 4,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(4, 6)
      g[0][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-3', pos: [3, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 90,
    hints: [
      { en: 'Run the code — on which step does the robot crash?', id: 'Jalankan kode — pada langkah mana robot bertabrakan?' },
      { en: 'Try moving down first to avoid the obstacle on row 0.', id: 'Coba bergerak ke bawah terlebih dahulu untuk menghindari rintangan di baris 0.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d3_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 5 },
                },
              },
              DO: {
                block: {
                  type: 'move_right',
                  id: 'dbg_d3_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d3_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 3 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_down',
                      id: 'dbg_d3_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-4',
    worldId: 'debugging',
    number: 4,
    isBuggy: true,
    title: { en: 'Upside-Down Loop', id: 'Perulangan Terbalik' },
    story: {
      en: "Bugsy mixed up the directions! The loop moves the robot up instead of down — and it crashes on the very first step. Flip the direction block inside the loop.",
      id: 'Bugsy mengacaukan arahnya! Perulangan menggerakkan robot ke atas dan bukan ke bawah — dan robot langsung bertabrakan pada langkah pertama. Balikkan blok arah di dalam perulangan.',
    },
    mascotMessage: {
      en: "The wrench is below — so which direction should the robot go? 🐛",
      id: 'Kunci ada di bawah — jadi ke arah mana seharusnya robot bergerak? 🐛',
    },
    gridRows: 6,
    gridCols: 4,
    cells: emptyGrid(6, 4),
    startPos: [0, 1],
    items: [{ id: 'wrench-4', pos: [4, 1] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 90,
    hints: [
      { en: "The robot crashes immediately. What direction causes an instant crash from row 0?", id: 'Robot langsung bertabrakan. Arah mana yang menyebabkan tabrakan langsung dari baris 0?' },
      { en: 'The wrench is 4 rows below the start.', id: 'Kunci berada 4 baris di bawah posisi awal.' },
    ],
    starThresholds: [9, 6, 4, 3],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d4_1',
            x: 30,
            y: 50,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 4 },
                },
              },
              DO: {
                block: {
                  type: 'move_up',
                  id: 'dbg_d4_2',
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-5',
    worldId: 'debugging',
    number: 5,
    isBuggy: true,
    title: { en: 'Almost There', id: 'Hampir Sampai' },
    story: {
      en: "The robot moves down the right number of steps — but the second loop is too short! It stops two squares away from the wrench. Fix the count in the second loop.",
      id: 'Robot bergerak ke bawah dengan jumlah langkah yang benar — tapi perulangan kedua terlalu pendek! Robot berhenti dua kotak dari kunci. Perbaiki jumlah di perulangan kedua.',
    },
    mascotMessage: {
      en: "Run the code and count how many squares short the robot falls. 🐛 Check the second loop's number.",
      id: 'Jalankan kode dan hitung berapa kotak kurangnya robot. 🐛 Periksa angka perulangan kedua.',
    },
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [0, 0],
    items: [{ id: 'wrench-5', pos: [4, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 100,
    hints: [
      { en: 'The robot ends up at row 4, column 2. Where does it need to be?', id: 'Robot berakhir di baris 4, kolom 2. Di mana seharusnya ia berada?' },
      { en: 'Count the columns between column 0 and the wrench to find the right loop count.', id: 'Hitung kolom antara kolom 0 dan kunci untuk menemukan jumlah perulangan yang benar.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d5_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 4 },
                },
              },
              DO: {
                block: {
                  type: 'move_down',
                  id: 'dbg_d5_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d5_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 2 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_right',
                      id: 'dbg_d5_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-6',
    worldId: 'debugging',
    number: 6,
    isBuggy: true,
    title: { en: 'Double Trouble', id: 'Masalah Ganda' },
    story: {
      en: "Two bugs — one in each loop! The directions are completely backwards. Fix both loop directions to guide the robot up and to the right.",
      id: 'Dua bug — satu di setiap perulangan! Arahnya sepenuhnya terbalik. Perbaiki kedua arah perulangan untuk mengarahkan robot ke atas dan ke kanan.',
    },
    mascotMessage: {
      en: "Fix the first crash, then run again — there's a second bug waiting! 🐛",
      id: 'Perbaiki tabrakan pertama, lalu jalankan lagi — ada bug kedua yang menunggu! 🐛',
    },
    gridRows: 5,
    gridCols: 7,
    cells: emptyGrid(5, 7),
    startPos: [4, 0],
    items: [{ id: 'wrench-6', pos: [0, 6] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 110,
    hints: [
      { en: 'The robot starts at the bottom-left. The wrench is at the top-right.', id: 'Robot mulai di kiri bawah. Kunci ada di kanan atas.' },
      { en: 'After fixing the first loop, run again to discover the second bug.', id: 'Setelah memperbaiki perulangan pertama, jalankan lagi untuk menemukan bug kedua.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d6_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 4 },
                },
              },
              DO: {
                block: {
                  type: 'move_down',
                  id: 'dbg_d6_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d6_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 6 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_left',
                      id: 'dbg_d6_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-7',
    worldId: 'debugging',
    number: 7,
    isBuggy: true,
    title: { en: 'Two Wrong Counts', id: 'Dua Jumlah Salah' },
    story: {
      en: "Both loops have the wrong count! The robot stops far short of the wrench. You need to find the right number for each loop.",
      id: 'Kedua perulangan memiliki jumlah yang salah! Robot berhenti jauh sebelum mencapai kunci. Kamu perlu menemukan angka yang benar untuk setiap perulangan.',
    },
    mascotMessage: {
      en: "The goal is at row 5, column 6. How far down and right does the robot need to go? 🐛",
      id: 'Tujuan ada di baris 5, kolom 6. Seberapa jauh ke bawah dan ke kanan robot harus pergi? 🐛',
    },
    gridRows: 6,
    gridCols: 7,
    cells: emptyGrid(6, 7),
    startPos: [0, 0],
    items: [{ id: 'wrench-7', pos: [5, 6] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 120,
    hints: [
      { en: 'Count the rows between start and goal for the first loop.', id: 'Hitung baris antara awal dan tujuan untuk perulangan pertama.' },
      { en: 'Count the columns between start and goal for the second loop.', id: 'Hitung kolom antara awal dan tujuan untuk perulangan kedua.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d7_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 2 },
                },
              },
              DO: {
                block: {
                  type: 'move_down',
                  id: 'dbg_d7_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d7_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 3 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_right',
                      id: 'dbg_d7_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-8',
    worldId: 'debugging',
    number: 8,
    isBuggy: true,
    title: { en: 'Direction AND Count Bug', id: 'Bug Arah DAN Jumlah' },
    story: {
      en: "The first loop has two bugs at once — the direction is wrong AND the count is off! Fix both to reach the wrench in the corner.",
      id: 'Perulangan pertama memiliki dua bug sekaligus — arahnya salah DAN jumlahnya meleset! Perbaiki keduanya untuk mencapai kunci di sudut.',
    },
    mascotMessage: {
      en: "Even after fixing the direction, the robot won't reach the goal. Keep debugging! 🐛",
      id: 'Bahkan setelah memperbaiki arahnya, robot tidak akan mencapai tujuan. Terus debug! 🐛',
    },
    gridRows: 5,
    gridCols: 7,
    cells: emptyGrid(5, 7),
    startPos: [0, 0],
    items: [{ id: 'wrench-8', pos: [4, 6] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 130,
    hints: [
      { en: 'Run the code. The robot crashes right away — what direction causes that?', id: 'Jalankan kode. Robot langsung bertabrakan — arah mana yang menyebabkan itu?' },
      { en: 'After fixing the direction, run again. Is the count right for reaching row 4?', id: 'Setelah memperbaiki arahnya, jalankan lagi. Apakah jumlahnya benar untuk mencapai baris 4?' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d8_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 3 },
                },
              },
              DO: {
                block: {
                  type: 'move_up',
                  id: 'dbg_d8_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d8_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 6 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_right',
                      id: 'dbg_d8_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-9',
    worldId: 'debugging',
    number: 9,
    isBuggy: true,
    title: { en: 'Triple Mismatch', id: 'Tiga Ketidakcocokan' },
    story: {
      en: "Three loops — three wrong counts! Each number is off. The robot crashes on the third loop trying to go past the grid edge. Fix all three counts to complete the L-shaped path.",
      id: 'Tiga perulangan — tiga jumlah yang salah! Setiap angka meleset. Robot bertabrakan pada perulangan ketiga saat mencoba melewati tepi grid. Perbaiki ketiga jumlahnya untuk menyelesaikan jalur berbentuk L.',
    },
    mascotMessage: {
      en: "Fix one count, run again, check progress. Repeat until all three are right! 🐛",
      id: 'Perbaiki satu jumlah, jalankan lagi, periksa kemajuan. Ulangi sampai ketiganya benar! 🐛',
    },
    gridRows: 6,
    gridCols: 8,
    cells: emptyGrid(6, 8),
    startPos: [0, 0],
    items: [{ id: 'wrench-9', pos: [5, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 140,
    hints: [
      { en: 'The path goes: down to row 2, right to column 7, then down to row 5.', id: 'Jalurnya: turun ke baris 2, kanan ke kolom 7, lalu turun ke baris 5.' },
      { en: 'Work out the count for each leg of the path one at a time.', id: 'Hitung jumlah untuk setiap segmen jalur satu per satu.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d9_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 5 },
                },
              },
              DO: {
                block: {
                  type: 'move_down',
                  id: 'dbg_d9_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d9_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 3 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_right',
                      id: 'dbg_d9_4',
                    },
                  },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d9_5',
                    inputs: {
                      TIMES: {
                        shadow: {
                          type: 'math_number',
                          fields: { NUM: 2 },
                        },
                      },
                      DO: {
                        block: {
                          type: 'move_down',
                          id: 'dbg_d9_6',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-10',
    worldId: 'debugging',
    number: 10,
    isBuggy: true,
    title: { en: 'The Final Bug Hunt', id: 'Perburuan Bug Terakhir' },
    story: {
      en: "Two separate bugs hidden in two loops — one makes the robot fall off the edge, and the other leaves it short. Watch out for the warning sign blocking row 0! Fix both counts to finish the mission.",
      id: 'Dua bug tersembunyi di dua perulangan — satu membuat robot jatuh dari tepi, dan yang lain membuatnya kurang. Hati-hati dengan tanda peringatan yang menghalangi baris 0! Perbaiki kedua jumlahnya untuk menyelesaikan misi.',
    },
    mascotMessage: {
      en: "Two bugs, two fixes. Find the first crash, fix it, then track down the second bug. 🐛",
      id: 'Dua bug, dua perbaikan. Temukan tabrakan pertama, perbaiki, lalu lacak bug kedua. 🐛',
    },
    gridRows: 5,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(5, 8)
      g[0][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-10', pos: [4, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 150,
    hints: [
      { en: 'The first loop crashes going down. How many rows to the goal row?', id: 'Perulangan pertama bertabrakan saat turun. Berapa baris menuju baris tujuan?' },
      { en: 'After fixing the crash, run again — the robot stops short. Fix the second count too.', id: 'Setelah memperbaiki tabrakan, jalankan lagi — robot berhenti sebelum sampai. Perbaiki jumlah kedua juga.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d10_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: {
                shadow: {
                  type: 'math_number',
                  fields: { NUM: 6 },
                },
              },
              DO: {
                block: {
                  type: 'move_down',
                  id: 'dbg_d10_2',
                },
              },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d10_3',
                inputs: {
                  TIMES: {
                    shadow: {
                      type: 'math_number',
                      fields: { NUM: 5 },
                    },
                  },
                  DO: {
                    block: {
                      type: 'move_right',
                      id: 'dbg_d10_4',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  },
  // ─────────────────────────────────────────────
  // BONUS WORLD 5: CODE ORCHESTRA — Loops & Functions
  // ─────────────────────────────────────────────
  {
    id: 'orchestra-0', worldId: 'orchestra', number: 0, isTutorial: true,
    title: { en: 'Tutorial: Compose with Code!', id: 'Tutorial: Menggubah dengan Kode!' },
    story: { en: 'Welcome to Code Orchestra! Learn how loops repeat a beat and functions replay a whole musical phrase.', id: 'Selamat datang di Orkestra Kode! Pelajari cara perulangan mengulang ketukan dan fungsi memainkan kembali seluruh frasa musik.' },
    mascotMessage: { en: 'I am Melody! Let me show you how loops and functions compose a tune. 🎵', id: 'Aku Melody! Akan kutunjukkan cara perulangan dan fungsi menggubah lagu. 🎵' },
    gridRows: 3, gridCols: 5, cells: emptyGrid(3, 5), startPos: [1, 0], items: [{ id: 'tutorial-note', pos: [1, 4] }],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], optimalBlockCount: 3, xpReward: 0,
    hints: [{ en: 'Put Move Right inside a loop and repeat it 4 times.', id: 'Taruh Gerak Kanan di dalam perulangan dan ulangi 4 kali.' }, { en: 'One Repeat block plus one Move Right block reaches the note.', id: 'Satu blok Ulangi ditambah satu blok Gerak Kanan mencapai nada.' }], starThresholds: [999,999],
  },
  {
    id: 'orchestra-1', worldId: 'orchestra', number: 1,
    title: { en: 'Opening Beat', id: 'Ketukan Pembuka' },
    story: { en: 'Melody needs four notes for the opening line. Collect them with one repeating move!', id: 'Melody membutuhkan empat nada untuk baris pembuka. Kumpulkan dengan satu gerakan berulang!' },
    mascotMessage: { en: 'Four notes in a row! Can you collect them with one loop? 🎵', id: 'Empat nada berurutan! Bisakah kamu mengumpulkannya dengan satu perulangan? 🎵' },
    gridRows: 3, gridCols: 6, cells: emptyGrid(3, 6), startPos: [1, 0],
    items: [1, 2, 3, 4].map(col => ({ id: `note-${col}`, pos: [1, col] as [number, number] })),
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 3, xpReward: 100,
    hints: [{ en: 'Put Move Right inside a Repeat block.', id: 'Taruh Gerak Kanan di dalam blok Ulangi.' }, { en: 'Repeat Move Right 4 times.', id: 'Ulangi Gerak Kanan 4 kali.' }], starThresholds: [9, 6, 4, 3],
  },
  {
    id: 'orchestra-2', worldId: 'orchestra', number: 2,
    title: { en: 'Corner Rhythm', id: 'Ritme di Tikungan' },
    story: { en: 'The melody turns a corner. Loop each straight part of the tune.', id: 'Melodinya berbelok. Ulangi setiap bagian lurus dari lagu.' },
    mascotMessage: { en: 'Play four notes right, then two notes down! 🎶', id: 'Mainkan empat nada ke kanan, lalu dua nada ke bawah! 🎶' },
    gridRows: 5, gridCols: 6, cells: emptyGrid(5, 6), startPos: [1, 0],
    items: [{ id: 'n1', pos: [1,1] },{ id: 'n2', pos: [1,2] },{ id: 'n3', pos: [1,3] },{ id: 'n4', pos: [1,4] },{ id: 'n5', pos: [2,4] },{ id: 'n6', pos: [3,4] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 6, xpReward: 110,
    hints: [{ en: 'Use one loop for each straight line.', id: 'Gunakan satu perulangan untuk setiap garis lurus.' }, { en: 'Repeat right 4 times, then repeat down 2 times.', id: 'Ulangi ke kanan 4 kali, lalu ke bawah 2 kali.' }], starThresholds: [13, 9, 7, 6],
  },
  {
    id: 'orchestra-3', worldId: 'orchestra', number: 3,
    title: { en: 'Echo Bars', id: 'Birama Gema' },
    story: { en: 'A two-move rhythm echoes down the stage. Repeat the whole phrase.', id: 'Ritme dua gerakan bergema menuruni panggung. Ulangi seluruh frasa.' },
    mascotMessage: { en: 'Right, down — right, down! Loop that little echo! 🎼', id: 'Kanan, bawah — kanan, bawah! Ulangi gema kecil itu! 🎼' },
    gridRows: 5, gridCols: 5, cells: emptyGrid(5, 5), startPos: [0, 0],
    items: [{ id: 'n1', pos: [0,1] },{ id: 'n2', pos: [1,1] },{ id: 'n3', pos: [1,2] },{ id: 'n4', pos: [2,2] },{ id: 'n5', pos: [2,3] },{ id: 'n6', pos: [3,3] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 4, xpReward: 120,
    hints: [{ en: 'A loop can hold more than one move.', id: 'Satu perulangan bisa berisi lebih dari satu gerakan.' }, { en: 'Repeat Move Right, then Move Down, 3 times.', id: 'Ulangi Gerak Kanan, lalu Gerak Bawah, 3 kali.' }], starThresholds: [12, 8, 5, 4],
  },
  {
    id: 'orchestra-4', worldId: 'orchestra', number: 4,
    title: { en: 'Twin Melody', id: 'Melodi Kembar' },
    story: { en: 'Two matching stair phrases cross the stage. Repeat the same rhythm twice.', id: 'Dua frasa tangga yang sama melintasi panggung. Ulangi ritme yang sama dua kali.' },
    mascotMessage: { en: 'The second stair matches the first. Loop the four-move phrase! 🎵', id: 'Tangga kedua sama dengan yang pertama. Ulangi frasa empat gerakan! 🎵' },
    gridRows: 5, gridCols: 5, cells: emptyGrid(5, 5), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[1,1]},{id:'n3',pos:[1,2]},{id:'n4',pos:[2,2]},{id:'n5',pos:[2,3]},{id:'n6',pos:[3,3]},{id:'n7',pos:[3,4]},{id:'n8',pos:[4,4]}],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 6, xpReward: 130,
    hints: [{ en: 'Find the four-move stair phrase that appears twice.', id: 'Temukan frasa tangga empat gerakan yang muncul dua kali.' }, { en: 'Repeat Right, Down, Right, Down 2 times.', id: 'Ulangi Kanan, Bawah, Kanan, Bawah 2 kali.' }], starThresholds: [14, 10, 8, 6],
  },
  {
    id: 'orchestra-5', worldId: 'orchestra', number: 5,
    title: { en: 'Three-Bar Beat', id: 'Ketukan Tiga Birama' },
    story: { en: 'Three matching bars each contain two quick notes. Loop the whole bar!', id: 'Tiga birama yang sama masing-masing berisi dua nada cepat. Ulangi seluruh birama!' },
    mascotMessage: { en: 'Two notes right, one step down — repeat that bar! 🥁', id: 'Dua nada ke kanan, satu langkah ke bawah — ulangi birama itu! 🥁' },
    gridRows: 5, gridCols: 7, cells: emptyGrid(5, 7), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[1,2]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[2,5]},{id:'n8',pos:[2,6]},{id:'n9',pos:[3,6]}],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 5, xpReward: 140,
    hints: [{ en: 'One loop can repeat the complete three-move bar.', id: 'Satu perulangan bisa mengulang birama tiga gerakan secara utuh.' }, { en: 'Repeat 3 times: Right, Right, then Down.', id: 'Ulangi 3 kali: Kanan, Kanan, lalu Bawah.' }], starThresholds: [15, 10, 7, 5],
  },
  {
    id: 'orchestra-6', worldId: 'orchestra', number: 6,
    title: { en: 'Chorus Function', id: 'Fungsi Refrain' },
    story: { en: 'The chorus returns three times. Define it once and call it again!', id: 'Refrain kembali tiga kali. Definisikan sekali dan panggil lagi!' },
    mascotMessage: { en: 'Give the two-step chorus a name, then play it three times! 🎤', id: 'Beri nama refrain dua langkah, lalu mainkan tiga kali! 🎤' },
    gridRows: 3, gridCols: 7, cells: emptyGrid(3, 7), startPos: [1, 0], items: [{id:'n1',pos:[1,2]},{id:'n2',pos:[1,4]},{id:'n3',pos:[1,6]}],
    goalType: 'collect_all', availableCategories: ['move', 'functions'], requiredCategories: ['functions'], optimalBlockCount: 6, xpReward: 150,
    hints: [{ en: 'Define a function containing two Move Right blocks.', id: 'Definisikan fungsi yang berisi dua blok Gerak Kanan.' }, { en: 'Call your two-step function 3 times.', id: 'Panggil fungsi dua langkahmu 3 kali.' }], starThresholds: [15, 11, 8, 6],
  },
  {
    id: 'orchestra-7', worldId: 'orchestra', number: 7,
    title: { en: 'Chorus Encore', id: 'Refrain Ulangan' },
    story: { en: 'The same corner phrase returns from a new place on stage.', id: 'Frasa tikungan yang sama kembali dari tempat baru di panggung.' },
    mascotMessage: { en: 'One corner function works twice without changing a note! 🎶', id: 'Satu fungsi tikungan bekerja dua kali tanpa mengubah satu nada pun! 🎶' },
    gridRows: 6, gridCols: 6, cells: emptyGrid(6, 6), startPos: [0, 0], items: [{id:'n1',pos:[0,2]},{id:'n2',pos:[2,2]},{id:'n3',pos:[2,4]},{id:'n4',pos:[4,4]}],
    goalType: 'collect_all', availableCategories: ['move', 'functions'], requiredCategories: ['functions'], optimalBlockCount: 7, xpReward: 160,
    hints: [{ en: 'Make one function that moves right twice and down twice.', id: 'Buat satu fungsi yang bergerak kanan dua kali dan bawah dua kali.' }, { en: 'Define the four-move corner, then call it twice.', id: 'Definisikan tikungan empat gerakan, lalu panggil dua kali.' }], starThresholds: [18, 13, 9, 7],
  },
  {
    id: 'orchestra-8', worldId: 'orchestra', number: 8,
    title: { en: 'Loop the Chorus', id: 'Ulangi Refrain' },
    story: { en: 'A tiny chorus climbs across the whole stage. Call a function from inside a loop.', id: 'Refrain kecil melintasi seluruh panggung. Panggil fungsi dari dalam perulangan.' },
    mascotMessage: { en: 'Function inside a loop — now the chorus really soars! 🎵', id: 'Fungsi di dalam perulangan — sekarang refrain benar-benar melesat! 🎵' },
    gridRows: 7, gridCols: 7, cells: emptyGrid(7, 7), startPos: [0, 0],
    items: Array.from({length:6},(_,i)=>[{id:`r${i}`,pos:[i,i+1] as [number,number]},{id:`d${i}`,pos:[i+1,i+1] as [number,number]}]).flat(),
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 6, xpReward: 175,
    hints: [{ en: 'Define a function with Right then Down.', id: 'Definisikan fungsi dengan Kanan lalu Bawah.' }, { en: 'Repeat your function call 6 times.', id: 'Ulangi panggilan fungsimu 6 kali.' }], starThresholds: [17, 12, 8, 6],
  },
  {
    id: 'orchestra-9', worldId: 'orchestra', number: 9,
    title: { en: 'Shortest Arrangement', id: 'Aransemen Terpendek' },
    story: { en: 'Two identical waves fill the score. Compose the shortest arrangement you can.', id: 'Dua gelombang yang sama memenuhi partitur. Susun aransemen sependek mungkin.' },
    mascotMessage: { en: 'Name the whole wave, reuse it, then add the final note! 🌊🎵', id: 'Beri nama seluruh gelombang, gunakan lagi, lalu tambahkan nada terakhir! 🌊🎵' },
    gridRows: 5, gridCols: 10, cells: emptyGrid(5, 10), startPos: [1, 0],
    items: [{id:'n1',pos:[1,2]},{id:'n2',pos:[3,2]},{id:'n3',pos:[3,4]},{id:'n4',pos:[1,4]},{id:'n5',pos:[1,6]},{id:'n6',pos:[3,6]},{id:'n7',pos:[3,8]},{id:'n8',pos:[1,8]},{id:'n9',pos:[1,9]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 14, xpReward: 190,
    hints: [{ en: 'Make a wave function from four repeated straight lines.', id: 'Buat fungsi gelombang dari empat garis lurus berulang.' }, { en: 'In the function: right 2, down 2, right 2, up 2. Call it twice, then move right once.', id: 'Dalam fungsi: kanan 2, bawah 2, kanan 2, atas 2. Panggil dua kali, lalu kanan sekali.' }], starThresholds: [30, 22, 17, 14],
  },
  {
    id: 'orchestra-10', worldId: 'orchestra', number: 10,
    title: { en: 'Grand Finale', id: 'Final Akbar' },
    story: { en: 'Compose a zigzag verse, sweep across the stage, and collect every grand-finale note!', id: 'Susun bait zigzag, melintas panggung, dan kumpulkan setiap nada final akbar!' },
    mascotMessage: { en: 'Loops and a function together — collect the whole finale! 🎭', id: 'Perulangan dan fungsi bersama — kumpulkan seluruh final! 🎭' },
    gridRows: 8, gridCols: 8, cells: emptyGrid(8, 8), startPos: [0, 0], items: [{id:'n1',pos:[0,2]},{id:'n2',pos:[2,2]},{id:'n3',pos:[2,0]},{id:'n4',pos:[4,0]},{id:'n5',pos:[4,7]},{id:'n6',pos:[6,7]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 17, xpReward: 220,
    hints: [{ en: 'Put four two-step lines into one zigzag function.', id: 'Taruh empat garis dua langkah ke dalam satu fungsi zigzag.' }, { en: 'Call the zigzag once, repeat Right 7 times, then repeat Down 2 times.', id: 'Panggil zigzag sekali, ulangi Kanan 7 kali, lalu ulangi Bawah 2 kali.' }], starThresholds: [36, 27, 21, 17],
  },
  // ─────────────────────────────────────────────
  // BONUS WORLD 6: ECO CITY — Decomposition & Reuse
  // ─────────────────────────────────────────────
  {
    id: 'eco-0', worldId: 'eco', number: 0, isTutorial: true,
    title: { en: 'Tutorial: Plan the Round!', id: 'Tutorial: Rencanakan Rutenya!' },
    story: { en: 'Welcome to Eco City! Sol never plans one long route. He breaks the mission into small pieces, then reuses the pieces that repeat.', id: 'Selamat datang di Kota Hijau! Sol tidak pernah merencanakan satu rute panjang. Dia memecah misi menjadi bagian kecil, lalu memakai ulang bagian yang berulang.' },
    mascotMessage: { en: 'I am Sol, the city builder. 👷 Small pieces first — then reuse them. Drive me to the recycling token!', id: 'Aku Sol, pembangun kota. 👷 Bagian kecil dulu — lalu pakai ulang. Antar aku ke token daur ulang!' },
    gridRows: 3, gridCols: 5, cells: emptyGrid(3, 5), startPos: [1, 0], items: [{ id: 'tutorial-token', pos: [1, 4] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'functions'], optimalBlockCount: 3, xpReward: 0,
    hints: [
      { en: 'The token is 4 steps to the right. Put Move Right inside a Repeat block.', id: 'Tokennya 4 langkah ke kanan. Taruh Gerak Kanan di dalam blok Ulangi.' },
      { en: 'One Repeat block set to 4, with one Move Right inside it.', id: 'Satu blok Ulangi diatur ke 4, dengan satu Gerak Kanan di dalamnya.' },
    ],
    starThresholds: [999, 999],
  },
  {
    id: 'eco-1', worldId: 'eco', number: 1,
    title: { en: 'Two Deliveries', id: 'Dua Pengiriman' },
    story: { en: 'Two drop-offs today: the paper bank at the end of the street, then the water tank two blocks south of it. Two small legs, one round.', id: 'Dua pengantaran hari ini: bank kertas di ujung jalan, lalu tangki air dua blok di selatannya. Dua kaki kecil, satu putaran.' },
    mascotMessage: { en: 'Do not think about the whole round at once. Solve leg one, then leg two. 👷', id: 'Jangan pikirkan seluruh putaran sekaligus. Selesaikan kaki pertama, lalu kaki kedua. 👷' },
    gridRows: 4, gridCols: 5, cells: emptyGrid(4, 5), startPos: [0, 0],
    items: [{ id: 'paper', pos: [0, 3] }, { id: 'water', pos: [2, 3] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], optimalBlockCount: 5, xpReward: 100,
    hints: [
      { en: 'Leg one goes right along the street. Leg two goes straight down.', id: 'Kaki pertama ke kanan menyusuri jalan. Kaki kedua lurus ke bawah.' },
      { en: 'Move Right 3 times, then Move Down 2 times.', id: 'Gerak Kanan 3 kali, lalu Gerak Bawah 2 kali.' },
    ],
    starThresholds: [12, 8, 6, 5],
  },
  {
    id: 'eco-2', worldId: 'eco', number: 2,
    title: { en: 'Solar Street', id: 'Jalan Surya' },
    story: { en: 'Six identical solar panels line one straight street. The same step repeats six times — so write it once.', id: 'Enam panel surya identik berjajar di satu jalan lurus. Langkah yang sama berulang enam kali — jadi tulis sekali saja.' },
    mascotMessage: { en: 'Six houses, one move repeated. A loop is shorter than six blocks! ☀️', id: 'Enam rumah, satu gerakan berulang. Perulangan lebih pendek dari enam blok! ☀️' },
    gridRows: 3, gridCols: 8, cells: emptyGrid(3, 8), startPos: [1, 0],
    items: [1, 2, 3, 4, 5, 6].map(col => ({ id: `panel-${col}`, pos: [1, col] as [number, number] })),
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 3, xpReward: 110,
    hints: [
      { en: 'Every panel is one step further right. Put Move Right inside a Repeat.', id: 'Setiap panel satu langkah lebih ke kanan. Taruh Gerak Kanan di dalam Ulangi.' },
      { en: 'Repeat Move Right 6 times.', id: 'Ulangi Gerak Kanan 6 kali.' },
    ],
    starThresholds: [9, 6, 4, 3],
  },
  {
    id: 'eco-3', worldId: 'eco', number: 3,
    title: { en: 'One Way Round', id: 'Sekali Putar' },
    story: { en: 'Five bins sit around the edge of one neighbourhood. Pick the order that keeps the truck rolling one way instead of doubling back.', id: 'Lima tempat sampah berada di tepi satu lingkungan. Pilih urutan yang membuat truk terus melaju satu arah, bukan bolak-balik.' },
    mascotMessage: { en: 'Same bins, different orders. The order you choose decides how long your code is. 🚛', id: 'Tempat sampah sama, urutan berbeda. Urutan yang kamu pilih menentukan panjang kodemu. 🚛' },
    gridRows: 5, gridCols: 7, cells: emptyGrid(5, 7), startPos: [0, 0],
    items: [{ id: 'b1', pos: [0, 2] }, { id: 'b2', pos: [0, 5] }, { id: 'b3', pos: [2, 5] }, { id: 'b4', pos: [4, 5] }, { id: 'b5', pos: [4, 2] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 9, xpReward: 120,
    hints: [
      { en: 'Sort the bins into three straight runs: across the top, down the side, back along the bottom.', id: 'Kelompokkan tempat sampah menjadi tiga lintasan lurus: menyusuri atas, turun di sisi, kembali di bawah.' },
      { en: 'Repeat Right 5 times, then Repeat Down 4 times, then Repeat Left 3 times.', id: 'Ulangi Kanan 5 kali, lalu Ulangi Bawah 4 kali, lalu Ulangi Kiri 3 kali.' },
    ],
    starThresholds: [20, 14, 11, 9],
  },
  {
    id: 'eco-4', worldId: 'eco', number: 4,
    title: { en: 'Same Street Twice', id: 'Jalan Sama Dua Kali' },
    story: { en: 'Three streets on this plan are all exactly three blocks long. Store that length in a variable once, then let every loop read it.', id: 'Tiga jalan di rencana ini panjangnya persis tiga blok. Simpan panjang itu di sebuah variabel sekali, lalu biarkan setiap perulangan membacanya.' },
    mascotMessage: { en: 'One number, three streets. Name it, then reuse the name. 📦', id: 'Satu angka, tiga jalan. Beri nama, lalu pakai ulang namanya. 📦' },
    gridRows: 4, gridCols: 7, cells: emptyGrid(4, 7), startPos: [0, 0],
    items: [{ id: 'glass', pos: [0, 3] }, { id: 'pump', pos: [3, 3] }, { id: 'grid', pos: [3, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables'], requiredCategories: ['variables'], optimalBlockCount: 11, xpReward: 130,
    hints: [
      { en: 'Make a variable called length and set it to 3, then use it in every Repeat.', id: 'Buat variabel bernama panjang dan atur ke 3, lalu gunakan di setiap Ulangi.' },
      { en: 'Repeat Right length times, Repeat Down length times, Repeat Right length times.', id: 'Ulangi Kanan sebanyak panjang, Ulangi Bawah sebanyak panjang, Ulangi Kanan sebanyak panjang.' },
    ],
    starThresholds: [24, 17, 13, 11],
  },
  {
    id: 'eco-5', worldId: 'eco', number: 5,
    title: { en: 'Gate Closed Today', id: 'Gerbang Tutup Hari Ini' },
    story: { en: 'The sign says the north gate is closed for repairs today, so the top of the street is blocked. Check the sign in your code, then take the open lane two blocks south.', id: 'Papan tanda menyebut gerbang utara tutup untuk perbaikan hari ini, jadi ujung atas jalan terhalang. Periksa papan itu di kodemu, lalu ambil jalur terbuka dua blok ke selatan.' },
    mascotMessage: { en: 'You already know the gate is shut. Let an IF block say so, then drive the open lane. 🚧', id: 'Kamu sudah tahu gerbangnya tertutup. Biarkan blok JIKA menyatakannya, lalu lewati jalur terbuka. 🚧' },
    gridRows: 5, gridCols: 7,
    cells: (() => { const g = emptyGrid(5, 7); g[0][3] = 'obstacle'; g[1][3] = 'obstacle'; return g })(),
    startPos: [0, 0],
    items: [{ id: 'compost', pos: [2, 3] }, { id: 'water', pos: [2, 6] }, { id: 'power', pos: [4, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'logic'], requiredCategories: ['logic'], optimalBlockCount: 13, xpReward: 140,
    hints: [
      { en: 'The open lane is row 2. Drop down to it before you head east.', id: 'Jalur terbuka ada di baris ke-2. Turun ke sana sebelum menuju timur.' },
      { en: 'Inside an IF: Repeat Down 2 times, Repeat Right 6 times, Repeat Down 2 times.', id: 'Di dalam JIKA: Ulangi Bawah 2 kali, Ulangi Kanan 6 kali, Ulangi Bawah 2 kali.' },
    ],
    starThresholds: [28, 20, 16, 13],
  },
  {
    id: 'eco-6', worldId: 'eco', number: 6,
    title: { en: 'Name the Block', id: 'Beri Nama Blok' },
    story: { en: 'Every city block on this plan has the same shape: one house east, cut down the alley, one more house east. Give that shape a name and stop rewriting it.', id: 'Setiap blok kota di rencana ini bentuknya sama: satu rumah ke timur, memotong gang, satu rumah lagi ke timur. Beri nama bentuk itu dan berhenti menulis ulang.' },
    mascotMessage: { en: 'Three blocks, one shape. Make a function and call it three times. 🔧', id: 'Tiga blok, satu bentuk. Buat fungsi dan panggil tiga kali. 🔧' },
    gridRows: 5, gridCols: 7, cells: emptyGrid(5, 7), startPos: [0, 0],
    items: [{ id: 'blk1', pos: [1, 2] }, { id: 'blk2', pos: [2, 4] }, { id: 'blk3', pos: [3, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'functions'], requiredCategories: ['functions'], optimalBlockCount: 7, xpReward: 150,
    hints: [
      { en: 'Look at the route between two tokens — it is always the same three moves.', id: 'Lihat rute antara dua token — selalu tiga gerakan yang sama.' },
      { en: 'Define a function with Right, Down, Right. Call it 3 times.', id: 'Definisikan fungsi dengan Kanan, Bawah, Kanan. Panggil 3 kali.' },
    ],
    starThresholds: [16, 12, 9, 7],
  },
  {
    id: 'eco-7', worldId: 'eco', number: 7,
    title: { en: 'Three Districts', id: 'Tiga Distrik' },
    story: { en: 'Three districts were built from the same plan, joined by one link road. Reuse the district function and put the link road inside the loop with it.', id: 'Tiga distrik dibangun dari rencana yang sama, dihubungkan satu jalan penghubung. Pakai ulang fungsi distrik dan taruh jalan penghubung di dalam perulangan bersamanya.' },
    mascotMessage: { en: 'A loop can hold a function call AND the road that gets you to the next district. 🏘️', id: 'Perulangan bisa memuat panggilan fungsi DAN jalan menuju distrik berikutnya. 🏘️' },
    gridRows: 7, gridCols: 10, cells: emptyGrid(7, 10), startPos: [0, 0],
    items: [{ id: 'd1', pos: [2, 2] }, { id: 'd2', pos: [4, 5] }, { id: 'd3', pos: [6, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'functions'], requiredCategories: ['functions'], optimalBlockCount: 9, xpReward: 170,
    hints: [
      { en: 'One district is Right, Down, Right, Down. The link road east is one more move.', id: 'Satu distrik adalah Kanan, Bawah, Kanan, Bawah. Jalan penghubung ke timur satu gerakan lagi.' },
      { en: 'Define the district function, then Repeat 3 times: call it, then Move Right.', id: 'Definisikan fungsi distrik, lalu Ulangi 3 kali: panggil fungsinya, lalu Gerak Kanan.' },
    ],
    starThresholds: [22, 16, 12, 9],
  },
  {
    id: 'eco-8', worldId: 'eco', number: 8,
    title: { en: "Sol's Stop List", id: 'Daftar Henti Sol' },
    story: { en: "Sol's tablet holds today's round as a list of three stops: the glass bank, the roof garden, the power hub. Keep the list, then work through it in order.", id: 'Tablet Sol menyimpan putaran hari ini sebagai daftar tiga perhentian: bank kaca, taman atap, pusat listrik. Simpan daftarnya, lalu kerjakan berurutan.' },
    mascotMessage: { en: 'Write the plan down as a list first. Then the code just follows the list. 📋', id: 'Tulis dulu rencananya sebagai daftar. Lalu kodenya tinggal mengikuti daftar itu. 📋' },
    gridRows: 5, gridCols: 9, cells: emptyGrid(5, 9), startPos: [2, 0],
    items: [{ id: 'stop1', pos: [2, 2] }, { id: 'stop2', pos: [0, 5] }, { id: 'stop3', pos: [4, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'lists'], requiredCategories: ['lists'], optimalBlockCount: 19, xpReward: 180,
    hints: [
      { en: 'Build a list of the three stops first, then write one leg of the route per stop.', id: 'Buat dulu daftar tiga perhentian, lalu tulis satu kaki rute untuk tiap perhentian.' },
      { en: 'Right 2, then Up 2 and Right 3, then Down 4 and Right 3.', id: 'Kanan 2, lalu Atas 2 dan Kanan 3, lalu Bawah 4 dan Kanan 3.' },
    ],
    starThresholds: [40, 29, 23, 19],
  },
  {
    id: 'eco-9', worldId: 'eco', number: 9,
    title: { en: 'Two Gates, One Plan', id: 'Dua Gerbang, Satu Rencana' },
    story: { en: 'The tram line splits the city and only two gates cross it. The north gate is 2 blocks away and has the last recycling token on it; the south gate is 3 blocks away and has nothing. Both plans work — write the cheaper one.', id: 'Jalur trem membelah kota dan hanya dua gerbang yang menyeberanginya. Gerbang utara berjarak 2 blok dan token daur ulang terakhir ada di sana; gerbang selatan berjarak 3 blok dan kosong. Kedua rencana bisa jalan — tulis yang lebih murah.' },
    mascotMessage: { en: 'Two plans, both correct. Count the moves in each before you build one. 🚋', id: 'Dua rencana, keduanya benar. Hitung gerakan masing-masing sebelum membangun salah satunya. 🚋' },
    gridRows: 7, gridCols: 7,
    cells: (() => { const g = emptyGrid(7, 7); [0, 2, 3, 4, 5].forEach(row => { g[row][3] = 'obstacle' }); return g })(),
    startPos: [3, 0],
    items: [{ id: 'gate', pos: [1, 3] }, { id: 'depot', pos: [3, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'functions'], requiredCategories: ['loops'], optimalBlockCount: 9, xpReward: 190,
    hints: [
      { en: 'Only one gate has a token on it, and it is the closer one.', id: 'Hanya satu gerbang yang memiliki token, dan itu yang lebih dekat.' },
      { en: 'Repeat Up 2 times, Repeat Right 6 times, Repeat Down 2 times.', id: 'Ulangi Atas 2 kali, Ulangi Kanan 6 kali, Ulangi Bawah 2 kali.' },
    ],
    starThresholds: [20, 14, 11, 9],
  },
  {
    id: 'eco-10', worldId: 'eco', number: 10,
    title: { en: 'Eco City Finale', id: 'Final Kota Hijau' },
    story: { en: 'Last mission: three identical districts, a link road east, then the drop at the city hub. The river across the low streets is closed to trucks, so stay above it until the far side.', id: 'Misi terakhir: tiga distrik identik, jalan penghubung ke timur, lalu pengantaran di pusat kota. Sungai yang melintasi jalan-jalan bawah tertutup untuk truk, jadi tetaplah di atasnya sampai sisi terjauh.' },
    mascotMessage: { en: 'Everything you learned in one round: a function, a loop over it, and two more loops home. 🏙️', id: 'Semua yang kamu pelajari dalam satu putaran: sebuah fungsi, perulangan atasnya, dan dua perulangan lagi menuju pulang. 🏙️' },
    gridRows: 7, gridCols: 9,
    cells: (() => { const g = emptyGrid(7, 9); [0, 1, 2, 3, 4, 5].forEach(col => { g[4][col] = 'obstacle' }); return g })(),
    startPos: [0, 0],
    items: [{ id: 'dist1', pos: [1, 2] }, { id: 'dist2', pos: [2, 4] }, { id: 'dist3', pos: [3, 6] }, { id: 'hub', pos: [6, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'], requiredCategories: ['functions', 'loops'], optimalBlockCount: 13, xpReward: 220,
    hints: [
      { en: 'One district is Right, Right, Down — the same three moves each time.', id: 'Satu distrik adalah Kanan, Kanan, Bawah — tiga gerakan yang sama setiap kali.' },
      { en: 'Define the district, Repeat the call 3 times, then Repeat Right 2 times and Repeat Down 3 times.', id: 'Definisikan distriknya, Ulangi panggilannya 3 kali, lalu Ulangi Kanan 2 kali dan Ulangi Bawah 3 kali.' },
    ],
    starThresholds: [28, 20, 16, 13],
  },

]

export function getLessonsByWorld(worldId: string): Lesson[] {
  return LESSONS.filter(l => l.worldId === worldId && !l.isTutorial).sort((a, b) => a.number - b.number)
}

export function getWorldTutorial(worldId: string): Lesson | undefined {
  return LESSONS.find(l => l.worldId === worldId && l.isTutorial)
}

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id)
}

export function getLessonByNumber(worldId: string, number: number): Lesson | undefined {
  return LESSONS.find(l => l.worldId === worldId && l.number === number)
}
