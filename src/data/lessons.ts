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
      en: 'The jungle is full of bananas today! Bingo needs to collect ALL of them. This was one of his toughest days yet!',
      id: 'Hutan penuh pisang hari ini! Bingo perlu mengumpulkan SEMUA pisang. Ini salah satu hari tersulitnya!',
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
  {
    id: 'jungle-7',
    worldId: 'jungle',
    number: 7,
    title: { en: 'Bush Detour', id: 'Jalan Memutar' },
    story: {
      en: 'A thorny bush blocks the straight path! Bingo has never had to go AROUND something before. Find a way past it!',
      id: 'Semak berduri menghalangi jalan lurus! Bingo belum pernah harus MEMUTAR sebelumnya. Cari jalan untuk melewatinya!',
    },
    mascotMessage: {
      en: "Ouch, thorns! 🌿 I can't walk through the bush. Go around it — down, then right, then back up!",
      id: 'Aduh, duri! 🌿 Aku tidak bisa lewat semak. Putar arah — turun, lalu kanan, lalu naik lagi!',
    },
    gridRows: 6,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(6, 6)
      g[0][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'b1', pos: [0, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 6,
    xpReward: 110,
    hints: [
      { en: 'You cannot walk through the thorny bush — find a way around it!', id: 'Kamu tidak bisa lewat semak berduri — cari jalan memutarnya!' },
      { en: 'Go down 1, right 4, then up 1 to land right on the banana!', id: 'Turun 1, kanan 4, lalu naik 1 untuk sampai tepat di pisang!' },
    ],
    starThresholds: [9, 6],
  },
  {
    id: 'jungle-8',
    worldId: 'jungle',
    number: 8,
    title: { en: 'Banana Trail', id: 'Jejak Pisang' },
    story: {
      en: 'Two bushes block the jungle floor today! Bingo must find two bananas, weaving around the thorns each time.',
      id: 'Dua semak menghalangi lantai hutan hari ini! Bingo harus menemukan dua pisang, memutar duri setiap kali.',
    },
    mascotMessage: {
      en: 'Two bushes this time! 🌿🌿 Plan carefully before you collect each banana!',
      id: 'Dua semak kali ini! 🌿🌿 Rencanakan dengan cermat sebelum mengumpulkan setiap pisang!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[1][3] = 'obstacle'
      g[4][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 5] },
      { id: 'b2', pos: [6, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 13,
    xpReward: 125,
    hints: [
      { en: 'Get the first banana by going straight across the top row!', id: 'Ambil pisang pertama dengan berjalan lurus di baris atas!' },
      { en: 'From the first banana, go down 6 then left 2 to reach the second — the bushes are out of the way!', id: 'Dari pisang pertama, turun 6 lalu kiri 2 untuk sampai ke pisang kedua — semaknya tidak menghalangi!' },
    ],
    starThresholds: [19, 13],
  },
  {
    id: 'jungle-9',
    worldId: 'jungle',
    number: 9,
    title: { en: 'Deep Jungle Trek', id: 'Trekking Hutan Dalam' },
    story: {
      en: 'Bingo treks deep into the jungle, finding three bananas scattered past thorny bushes. His longest journey yet!',
      id: 'Bingo trekking jauh ke dalam hutan, menemukan tiga pisang tersebar melewati semak berduri. Perjalanan terpanjangnya!',
    },
    mascotMessage: {
      en: 'Three bananas, deep in the jungle! 🍌🍌🍌 Take it one banana at a time and watch out for thorns!',
      id: 'Tiga pisang, jauh di dalam hutan! 🍌🍌🍌 Kumpulkan satu per satu dan waspada duri!',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[2][2] = 'obstacle'
      g[4][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 3] },
      { id: 'b2', pos: [3, 6] },
      { id: 'b3', pos: [6, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 16,
    xpReward: 140,
    hints: [
      { en: 'Get banana 1 first: right 3 along the top row.', id: 'Ambil pisang 1 dulu: kanan 3 di baris atas.' },
      { en: 'Banana 1 → 2 is down 3, right 3. Banana 2 → 3 is down 3, left 4. Plan it all before you build!', id: 'Pisang 1 → 2 adalah turun 3, kanan 3. Pisang 2 → 3 adalah turun 3, kiri 4. Rencanakan semuanya sebelum menyusun blok!' },
    ],
    starThresholds: [22, 16],
  },
  {
    id: 'jungle-10',
    worldId: 'jungle',
    number: 10,
    title: { en: 'Jungle Champion', id: 'Juara Hutan' },
    story: {
      en: "One of Bingo's biggest banana hunts yet! Four bananas, three thorny bushes, and one of the longest paths Bingo has walked. Are you ready to become a Jungle Champion?",
      id: 'Salah satu perburuan pisang terbesar Bingo! Empat pisang, tiga semak berduri, dan salah satu jalur terpanjang yang pernah Bingo lalui. Siap menjadi Juara Hutan?',
    },
    mascotMessage: {
      en: "This is one of my biggest adventures yet! 🏆 Plan your whole path first, then build it step by step. You've got this! 🐒🍌",
      id: 'Ini salah satu petualangan terbesarku! 🏆 Rencanakan seluruh jalurmu dulu, lalu susun langkah demi langkah. Kamu pasti bisa! 🐒🍌',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[1][4] = 'obstacle'
      g[3][2] = 'obstacle'
      g[5][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 6] },
      { id: 'b2', pos: [2, 1] },
      { id: 'b3', pos: [4, 7] },
      { id: 'b4', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 28,
    xpReward: 170,
    hints: [
      { en: 'Break it into four legs: to banana 1, then 2, then 3, then 4. Count the steps for each leg!', id: 'Bagi menjadi empat bagian: ke pisang 1, lalu 2, lalu 3, lalu 4. Hitung langkah untuk setiap bagian!' },
      { en: 'Leg 1: right 6. Leg 2: down 2, left 5. Leg 3: down 2, right 6. Leg 4: down 3, left 4.', id: 'Bagian 1: kanan 6. Bagian 2: turun 2, kiri 5. Bagian 3: turun 2, kanan 6. Bagian 4: turun 3, kiri 4.' },
    ],
    starThresholds: [40, 28],
  },
  {
    id: 'jungle-11',
    worldId: 'jungle',
    number: 11,
    title: { en: 'Every Direction', id: 'Segala Arah' },
    story: {
      en: 'Bingo spots four bananas scattered in every direction today — some make him walk back the way he came, and one even needs him to climb back UP the jungle path!',
      id: 'Bingo melihat empat pisang tersebar ke segala arah hari ini — beberapa membuatnya berjalan kembali ke arah semula, dan satu bahkan membutuhkan dia naik kembali ke atas jalur hutan!',
    },
    mascotMessage: {
      en: "Whoa, this time I need EVERY direction — right, left, down, AND up! Let's map out the whole trail before we build it. 🐒",
      id: 'Wah, kali ini aku butuh SEGALA arah — kanan, kiri, bawah, DAN atas! Ayo petakan seluruh jalur dulu sebelum kita menyusun bloknya. 🐒',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[0][4] = 'obstacle'
      g[4][5] = 'obstacle'
      g[7][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [2, 6] },
      { id: 'b2', pos: [2, 1] },
      { id: 'b3', pos: [6, 3] },
      { id: 'b4', pos: [5, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 24,
    xpReward: 185,
    hints: [
      { en: "This time you'll need to use all four directions — plan the whole route before you start building blocks!", id: 'Kali ini kamu butuh keempat arah — rencanakan seluruh jalurnya sebelum mulai menyusun blok!' },
      { en: 'Try: down 2, right 6 for the first banana. Then left 5 for the second. Then down 4, right 2 for the third. Finally up 1, right 4 for the last one!', id: 'Coba: turun 2, kanan 6 untuk pisang pertama. Lalu kiri 5 untuk pisang kedua. Lalu turun 4, kanan 2 untuk pisang ketiga. Terakhir naik 1, kanan 4 untuk pisang terakhir!' },
    ],
    starThresholds: [34, 24],
  },
  {
    id: 'jungle-12',
    worldId: 'jungle',
    number: 12,
    title: { en: 'Zigzag Vines', id: 'Zigzag di Hutan' },
    story: {
      en: 'The vines crisscross the whole jungle floor today, and Bingo must zigzag right, then left, then right, then left again to reach four bananas hidden along the winding trail.',
      id: 'Sulur tanaman merambat menyilang di seluruh lantai hutan hari ini, dan Bingo harus zigzag kanan, lalu kiri, lalu kanan, lalu kiri lagi untuk mencapai empat pisang yang tersembunyi di sepanjang jalur berliku.',
    },
    mascotMessage: {
      en: 'Zigzag time! 🌿 Right, left, right, left — let\'s follow the winding vine trail together!',
      id: 'Waktunya zigzag! 🌿 Kanan, kiri, kanan, kiri — ayo ikuti jalur berliku ini bersama!',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[0][4] = 'obstacle'
      g[2][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[6][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [1, 6] },
      { id: 'b2', pos: [3, 1] },
      { id: 'b3', pos: [5, 7] },
      { id: 'b4', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 31,
    xpReward: 200,
    hints: [
      { en: 'Follow the zigzag — right and down, then left and down, then right and down, then left and down again!', id: 'Ikuti pola zigzag — kanan lalu bawah, kiri lalu bawah, kanan lalu bawah, kiri lalu bawah lagi!' },
      { en: 'Try: down 1, right 6. Then down 2, left 5. Then down 2, right 6. Finally down 2, left 7!', id: 'Coba: turun 1, kanan 6. Lalu turun 2, kiri 5. Lalu turun 2, kanan 6. Terakhir turun 2, kiri 7!' },
    ],
    starThresholds: [44, 31],
  },
  {
    id: 'jungle-13',
    worldId: 'jungle',
    number: 13,
    title: { en: 'Twin Patches', id: 'Dua Rumpun Pisang' },
    story: {
      en: 'Bananas grow in pairs today! Bingo finds two bananas huddled close together near the top of the jungle, then two more huddled close together all the way at the bottom.',
      id: 'Pisang tumbuh berpasangan hari ini! Bingo menemukan dua pisang berdekatan di bagian atas hutan, lalu dua pisang lagi berdekatan jauh di bagian bawah.',
    },
    mascotMessage: {
      en: 'Pairs of bananas! 🍌🍌 Grab the close ones together, then make the long trip to the far pair!',
      id: 'Pisang berpasangan! 🍌🍌 Ambil yang dekat dulu, lalu lakukan perjalanan jauh ke pasangan yang di bawah!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[3][3] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [1, 8] },
      { id: 'b2', pos: [2, 8] },
      { id: 'b3', pos: [8, 0] },
      { id: 'b4', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 25,
    xpReward: 215,
    hints: [
      { en: 'Grab the close pair together first, then make one long trip to the far pair!', id: 'Ambil pasangan yang dekat dulu, lalu lakukan satu perjalanan panjang ke pasangan yang jauh!' },
      { en: 'Try: down 1, right 8 for the first banana, then down 1 for the second. Then down 6, left 8 for the third, then up 1 for the fourth!', id: 'Coba: turun 1, kanan 8 untuk pisang pertama, lalu turun 1 untuk pisang kedua. Lalu turun 6, kiri 8 untuk pisang ketiga, lalu naik 1 untuk pisang keempat!' },
    ],
    starThresholds: [35, 25],
  },
  {
    id: 'jungle-14',
    worldId: 'jungle',
    number: 14,
    title: { en: 'Thorn Wall', id: 'Tembok Duri' },
    story: {
      en: 'A long wall of thorny bushes stretches across the jungle, blocking the direct path to the first banana! Bingo must find the gap far below before he can continue his trek.',
      id: 'Tembok panjang semak berduri membentang di hutan, menghalangi jalan langsung ke pisang pertama! Bingo harus mencari celah jauh di bawah sebelum bisa melanjutkan perjalanannya.',
    },
    mascotMessage: {
      en: "Ouch, a whole WALL of thorns this time! 🌿 I have to go all the way down to find the gap. Let's plan it together!",
      id: 'Aduh, ada TEMBOK penuh duri kali ini! 🌿 Aku harus turun jauh ke bawah untuk menemukan celahnya. Ayo rencanakan bersama!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][4] = 'obstacle'
      g[1][4] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [1, 8] },
      { id: 'b2', pos: [6, 1] },
      { id: 'b3', pos: [8, 6] },
      { id: 'b4', pos: [4, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 40,
    xpReward: 230,
    hints: [
      { en: "The thorn wall blocks the straight path to the first banana — you'll need to go all the way down to find the gap!", id: 'Tembok duri menghalangi jalan lurus ke pisang pertama — kamu harus turun jauh untuk menemukan celahnya!' },
      { en: 'Try: down 4, right 8, up 3 for the first banana. Then down 5, left 7. Then down 2, right 5. Finally up 4, right 2!', id: 'Coba: turun 4, kanan 8, naik 3 untuk pisang pertama. Lalu turun 5, kiri 7. Lalu turun 2, kanan 5. Terakhir naik 4, kanan 2!' },
    ],
    starThresholds: [56, 40],
  },
  {
    id: 'jungle-15',
    worldId: 'jungle',
    number: 15,
    title: { en: 'Banana Festival', id: 'Festival Pisang' },
    story: {
      en: "Five bananas ripened at once for the jungle's biggest banana festival! Bingo has never had to collect this many before.",
      id: 'Lima pisang matang sekaligus untuk festival pisang terbesar di hutan! Bingo belum pernah harus mengumpulkan sebanyak ini sebelumnya.',
    },
    mascotMessage: {
      en: "FIVE bananas?! 🍌🍌🍌🍌🍌 This is my biggest festival ever — let's plan every single step!",
      id: 'LIMA pisang?! 🍌🍌🍌🍌🍌 Ini festival terbesarku — ayo rencanakan setiap langkahnya!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[4][0] = 'obstacle'
      g[6][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 4] },
      { id: 'b2', pos: [3, 7] },
      { id: 'b3', pos: [5, 2] },
      { id: 'b4', pos: [7, 8] },
      { id: 'b5', pos: [8, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 31,
    xpReward: 245,
    hints: [
      { en: 'Five bananas is a lot to track — plan the whole path before you start if it helps!', id: 'Lima pisang itu banyak untuk diingat — coba rencanakan jalurnya sebelum mulai jika membantu!' },
      { en: 'Try: right 4, then down 3 right 3, then down 2 left 5, then down 2 right 6, then down 1 left 5!', id: 'Coba: kanan 4, lalu turun 3 kanan 3, lalu turun 2 kiri 5, lalu turun 2 kanan 6, lalu turun 1 kiri 5!' },
    ],
    starThresholds: [43, 31],
  },
  {
    id: 'jungle-16',
    worldId: 'jungle',
    number: 16,
    title: { en: 'Early Thorns', id: 'Duri di Awal Jalan' },
    story: {
      en: "Right from the very first steps, thorny bushes block Bingo's way! He must head down to find the gap before he can even start collecting bananas.",
      id: 'Sejak langkah pertama, semak berduri langsung menghalangi jalan Bingo! Dia harus turun ke bawah dulu untuk menemukan celah sebelum bisa mulai mengumpulkan pisang.',
    },
    mascotMessage: {
      en: "Thorns right at the start?! 😮 I can't even take my first steps forward. Help me find the gap below!",
      id: 'Duri sudah menghalangi sejak awal?! 😮 Aku bahkan belum bisa melangkah maju. Bantu aku menemukan celah di bawah!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][2] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][2] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [2, 6] },
      { id: 'b2', pos: [1, 8] },
      { id: 'b3', pos: [6, 1] },
      { id: 'b4', pos: [8, 7] },
      { id: 'b5', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 42,
    xpReward: 260,
    hints: [
      { en: 'A row of thorny bushes blocks the way right from the start — head down first to find the gap!', id: 'Sederet semak berduri menghalangi jalan sejak awal — turun dulu untuk menemukan celahnya!' },
      { en: 'Try: down 5, right 6, up 3 for the first banana. Then up 1, right 2. Then down 5, left 7. Then down 2, right 6. Finally up 1, left 4!', id: 'Coba: turun 5, kanan 6, naik 3 untuk pisang pertama. Lalu naik 1, kanan 2. Lalu turun 5, kiri 7. Lalu turun 2, kanan 6. Terakhir naik 1, kiri 4!' },
    ],
    starThresholds: [59, 42],
  },
  {
    id: 'jungle-17',
    worldId: 'jungle',
    number: 17,
    title: { en: 'Two Thorn Walls', id: 'Dua Tembok Duri' },
    story: {
      en: "Not one but TWO long walls of thorns cut across the jungle today. Bingo must find the gap in each wall — and remember which way to turn so he doesn't get stuck the second time.",
      id: 'Bukan cuma satu, tapi DUA tembok panjang semak berduri melintasi hutan hari ini. Bingo harus menemukan celah di setiap tembok — dan ingat ke mana harus berbelok agar tidak terjebak untuk kedua kalinya.',
    },
    mascotMessage: {
      en: 'Two thorn walls this time! 🌿🌿 One gap is easy to spot, but watch out for the second wall later in the trail!',
      id: 'Dua tembok duri kali ini! 🌿🌿 Celah pertama mudah ditemukan, tapi hati-hati dengan tembok kedua nanti!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[0][3] = 'obstacle'
      g[1][3] = 'obstacle'
      g[2][3] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [1, 7] },
      { id: 'b2', pos: [4, 1] },
      { id: 'b3', pos: [7, 8] },
      { id: 'b4', pos: [6, 4] },
      { id: 'b5', pos: [8, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 41,
    xpReward: 280,
    hints: [
      { en: "There are two thorn walls this time — the first wall's gap is further down, and watch for the second wall later on!", id: 'Ada dua tembok duri kali ini — celah tembok pertama ada jauh di bawah, dan waspada tembok kedua nanti!' },
      { en: 'Try: down 3, right 7, up 2 for the first banana. Then down 3, left 6. Then down 3, right 7. Then left 4, up 1. Finally down 2, left 3!', id: 'Coba: turun 3, kanan 7, naik 2 untuk pisang pertama. Lalu turun 3, kiri 6. Lalu turun 3, kanan 7. Lalu kiri 4, naik 1. Terakhir turun 2, kiri 3!' },
    ],
    starThresholds: [57, 41],
  },
  {
    id: 'jungle-18',
    worldId: 'jungle',
    number: 18,
    title: { en: "Closer Isn't Faster", id: 'Dekat Belum Tentu Cepat' },
    story: {
      en: 'The first banana looks close by, but a wall of thorns forces Bingo on a long detour to reach it! The banana that looks far away, though, turns out to be a quick and easy walk. Looks can be deceiving in the jungle!',
      id: 'Pisang pertama terlihat dekat, tapi tembok duri memaksa Bingo memutar jauh untuk mencapainya! Sementara pisang yang terlihat jauh justru bisa dicapai dengan cepat dan mudah. Penampilan bisa menipu di hutan ini!',
    },
    mascotMessage: {
      en: "That first banana looks SO close... but thorns make it a long trip! 😅 Don't judge a banana by its distance!",
      id: 'Pisang pertama itu terlihat SANGAT dekat... tapi duri membuatnya jadi perjalanan jauh! 😅 Jangan menilai pisang hanya dari jaraknya!',
    },
    gridRows: 10,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(10, 9)
      g[0][2] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][2] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [2, 4] },
      { id: 'b2', pos: [8, 7] },
      { id: 'b3', pos: [9, 2] },
      { id: 'b4', pos: [6, 0] },
      { id: 'b5', pos: [5, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 41,
    xpReward: 300,
    hints: [
      { en: "Don't be fooled by distance — the closest-looking banana might take the longest path because of the thorn wall!", id: 'Jangan tertipu jarak — pisang yang terlihat paling dekat bisa jadi butuh jalur paling panjang karena tembok duri!' },
      { en: 'Try: down 5, right 4, up 3 for the first banana. Then down 6, right 3. Then down 1, left 5. Then up 3, left 2. Finally up 1, right 8!', id: 'Coba: turun 5, kanan 4, naik 3 untuk pisang pertama. Lalu turun 6, kanan 3. Lalu turun 1, kiri 5. Lalu naik 3, kiri 2. Terakhir naik 1, kanan 8!' },
    ],
    starThresholds: [57, 41],
  },
  {
    id: 'jungle-19',
    worldId: 'jungle',
    number: 19,
    title: { en: 'Banana Harvest', id: 'Panen Pisang' },
    story: {
      en: "Six bananas ripened all at once — Bingo's biggest harvest yet! He'll need to plan a long path with many turns to gather every single one.",
      id: 'Enam pisang matang sekaligus — panen terbesar Bingo sejauh ini! Dia perlu merencanakan jalur panjang dengan banyak belokan untuk mengumpulkan semuanya.',
    },
    mascotMessage: {
      en: "SIX bananas?! 🍌🍌🍌🍌🍌🍌 My biggest harvest ever! Let's map out the whole path together!",
      id: 'ENAM pisang?! 🍌🍌🍌🍌🍌🍌 Panen terbesarku! Ayo petakan seluruh jalurnya bersama!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][2] = 'obstacle'
      g[2][7] = 'obstacle'
      g[4][1] = 'obstacle'
      g[7][2] = 'obstacle'
      g[9][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [0, 5] },
      { id: 'b2', pos: [3, 9] },
      { id: 'b3', pos: [5, 3] },
      { id: 'b4', pos: [6, 8] },
      { id: 'b5', pos: [8, 1] },
      { id: 'b6', pos: [9, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 42,
    xpReward: 325,
    hints: [
      { en: "This is Bingo's biggest harvest yet — take it one banana at a time and count the steps for each leg!", id: 'Ini panen terbesar Bingo — kumpulkan satu per satu dan hitung langkah untuk setiap bagian!' },
      { en: 'Try: right 5, then down 3 right 4, then down 2 left 6, then down 1 right 5, then down 2 left 7, then down 1 right 6!', id: 'Coba: kanan 5, lalu turun 3 kanan 4, lalu turun 2 kiri 6, lalu turun 1 kanan 5, lalu turun 2 kiri 7, lalu turun 1 kanan 6!' },
    ],
    starThresholds: [59, 42],
  },
  {
    id: 'jungle-20',
    worldId: 'jungle',
    number: 20,
    title: { en: 'Ultimate Jungle Trek', id: 'Trekking Hutan Terhebat' },
    story: {
      en: "Six bananas, a long wall of thorns, and Bingo's longest, twistiest trek through the whole jungle. This trek brings together everything Bingo has learned — are you ready for the ultimate challenge?",
      id: 'Enam pisang, tembok panjang semak berduri, dan perjalanan terpanjang serta paling berliku yang pernah dilalui Bingo di seluruh hutan. Trekking ini menggabungkan semua yang telah dipelajari Bingo — siap untuk tantangan terhebat ini?',
    },
    mascotMessage: {
      en: "This is one of my greatest treks ever! 🏆 Six bananas, a big thorn wall, lots of turns — let's plan every step and go! 🐒🍌",
      id: 'Ini salah satu trekking terhebatku! 🏆 Enam pisang, tembok duri besar, banyak belokan — ayo rencanakan setiap langkah dan mulai! 🐒🍌',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[0][5] = 'obstacle'
      g[1][5] = 'obstacle'
      g[2][5] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'b1', pos: [2, 8] },
      { id: 'b2', pos: [0, 2] },
      { id: 'b3', pos: [6, 1] },
      { id: 'b4', pos: [9, 9] },
      { id: 'b5', pos: [7, 4] },
      { id: 'b6', pos: [9, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 61,
    xpReward: 350,
    hints: [
      { en: "This is Bingo's longest journey ever! A wall of thorns blocks the way more than once — dip down to find each gap before continuing.", id: 'Ini perjalanan terpanjang Bingo! Tembok duri menghalangi jalan lebih dari sekali — turun dulu untuk menemukan setiap celah sebelum melanjutkan.' },
      { en: 'Try: down 5, right 8, up 3 for banana 1. Then down 3, left 6, up 5 for banana 2. Then down 6, left 1. Then down 3, right 8. Then up 2, left 5. Finally down 2, left 4!', id: 'Coba: turun 5, kanan 8, naik 3 untuk pisang 1. Lalu turun 3, kiri 6, naik 5 untuk pisang 2. Lalu turun 6, kiri 1. Lalu turun 3, kanan 8. Lalu naik 2, kiri 5. Terakhir turun 2, kiri 4!' },
    ],
    starThresholds: [87, 61],
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
      en: 'A big loop challenge! 🚀 Can you use just a few blocks to collect ALL these stars? Challenge accepted? 😄',
      id: 'Tantangan perulangan besar! 🚀 Bisakah kamu gunakan hanya beberapa blok untuk mengumpulkan SEMUA bintang ini? Tantangan diterima? 😄',
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
  {
    id: 'space-7',
    worldId: 'space',
    number: 7,
    title: { en: 'Meteor Belt', id: 'Sabuk Meteor' },
    story: {
      en: 'Astro flies into a meteor belt with stars scattered between the rocks! Careful navigation and a loop or two will get them all.',
      id: 'Astro terbang ke sabuk meteor dengan bintang tersebar di antara batu! Navigasi hati-hati dan satu-dua perulangan akan mengumpulkan semuanya.',
    },
    mascotMessage: {
      en: 'Rocks everywhere! ☄️ Weave between them to reach every star — and use a loop somewhere along the way!',
      id: 'Batu di mana-mana! ☄️ Berkelok di antaranya untuk mencapai setiap bintang — dan gunakan perulangan di sepanjang jalan!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[1][3] = 'obstacle'
      g[2][5] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 4] },
      { id: 's2', pos: [3, 1] },
      { id: 's3', pos: [4, 6] },
      { id: 's4', pos: [6, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 21,
    xpReward: 160,
    hints: [
      { en: 'Plan a route between the rocks before you start dragging blocks!', id: 'Rencanakan rute di antara batu sebelum mulai menyeret blok!' },
      { en: 'Star 1 is a straight line right — perfect for a Repeat block!', id: 'Bintang 1 adalah garis lurus ke kanan — cocok untuk blok Ulangi!' },
    ],
    starThresholds: [32, 21],
  },
  {
    id: 'space-8',
    worldId: 'space',
    number: 8,
    title: { en: 'Twin Comet Trails', id: 'Jejak Komet Kembar' },
    story: {
      en: 'Two comets left star trails — one straight across, one straight down. Two Repeat blocks are all Astro needs!',
      id: 'Dua komet meninggalkan jejak bintang — satu lurus melintang, satu lurus ke bawah. Dua blok Ulangi saja yang Astro butuhkan!',
    },
    mascotMessage: {
      en: 'Two straight trails! 🚀 Repeat right for the first, then Repeat down for the second. Simple and efficient!',
      id: 'Dua jejak lurus! 🚀 Ulangi kanan untuk yang pertama, lalu Ulangi bawah untuk yang kedua. Sederhana dan efisien!',
    },
    gridRows: 6,
    gridCols: 9,
    cells: emptyGrid(6, 9),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] },
      { id: 's4', pos: [0, 4] }, { id: 's5', pos: [0, 5] },
      { id: 's6', pos: [1, 5] }, { id: 's7', pos: [2, 5] }, { id: 's8', pos: [3, 5] }, { id: 's9', pos: [4, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 6,
    xpReward: 170,
    hints: [
      { en: 'Repeat 5 times with Move Right — that collects the whole top trail!', id: 'Ulangi 5 kali dengan Gerak Kanan — itu mengumpulkan seluruh jejak atas!' },
      { en: 'Then Repeat 4 times with Move Down for the second trail. Two Repeat blocks, 6 blocks total!', id: 'Lalu Ulangi 4 kali dengan Gerak Bawah untuk jejak kedua. Dua blok Ulangi, total 6 blok!' },
    ],
    starThresholds: [9, 6],
  },
  {
    id: 'space-9',
    worldId: 'space',
    number: 9,
    title: { en: 'Solar Flare Sprint', id: 'Sprint Suar Matahari' },
    story: {
      en: 'A solar flare scattered debris across the station! Astro must dodge five obstacles to reach five stars.',
      id: 'Suar matahari menyebarkan puing di sekitar stasiun! Astro harus menghindari lima rintangan untuk mencapai lima bintang.',
    },
    mascotMessage: {
      en: 'This is the trickiest field yet! ☄️ Take it one star at a time and dodge the debris.',
      id: 'Ini medan paling rumit! ☄️ Kumpulkan satu bintang setiap kali dan hindari puingnya.',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[1][2] = 'obstacle'
      g[2][5] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 4] },
      { id: 's2', pos: [2, 7] },
      { id: 's3', pos: [4, 2] },
      { id: 's4', pos: [6, 6] },
      { id: 's5', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 31,
    xpReward: 185,
    hints: [
      { en: 'Draw the route on paper first — five stars means five legs of the journey!', id: 'Gambar dulu rutenya di kertas — lima bintang berarti lima bagian perjalanan!' },
      { en: 'Use a loop for the long straight legs of your route to keep your block count down!', id: 'Gunakan perulangan untuk bagian rute yang lurus dan panjang agar jumlah blok tetap sedikit!' },
    ],
    starThresholds: [46, 31],
  },
  {
    id: 'space-10',
    worldId: 'space',
    number: 10,
    title: { en: 'Galactic Voyage', id: 'Perjalanan Galaksi' },
    story: {
      en: 'One of the biggest space voyages yet! Six stars, six obstacles, and one of the biggest stations Astro has explored so far.',
      id: 'Salah satu perjalanan luar angkasa terbesar sejauh ini! Enam bintang, enam rintangan, dan salah satu stasiun terbesar yang pernah Astro jelajahi.',
    },
    mascotMessage: {
      en: "This is the big one! 🌌 Plan your whole voyage, star by star, and use loops wherever the path runs straight. You've trained for this! 🚀",
      id: 'Ini yang besar! 🌌 Rencanakan seluruh perjalananmu, bintang demi bintang, dan gunakan perulangan ketika jalurnya lurus. Kamu sudah berlatih untuk ini! 🚀',
    },
    gridRows: 8,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(8, 10)
      g[1][3] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 6] },
      { id: 's2', pos: [2, 2] },
      { id: 's3', pos: [3, 9] },
      { id: 's4', pos: [5, 4] },
      { id: 's5', pos: [6, 7] },
      { id: 's6', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 39,
    xpReward: 220,
    hints: [
      { en: 'Six stars, six legs. Write down the route between each pair before you build anything!', id: 'Enam bintang, enam bagian. Tuliskan rute antara setiap pasang sebelum membangun apa pun!' },
      { en: 'Whenever a leg is a straight line, use a Repeat block — it keeps your ship\'s code light!', id: 'Setiap kali satu bagian berupa garis lurus, gunakan blok Ulangi — itu membuat kode pesawatmu ringan!' },
    ],
    starThresholds: [59, 39],
  },
  {
    id: 'space-11',
    worldId: 'space',
    number: 11,
    title: { en: 'Comet Zigzag', id: 'Zigzag Komet' },
    story: {
      en: "Astro spots a comet trail that zigzags through space — right, then down, then right again! Three straight legs, three loops.",
      id: 'Astro melihat jejak komet yang berkelok-kelok di luar angkasa — kanan, lalu bawah, lalu kanan lagi! Tiga bagian lurus, tiga perulangan.',
    },
    mascotMessage: {
      en: "Three straight legs in a row! 🚀 A Repeat block for each leg keeps your code short. Can you spot where each leg starts and ends?",
      id: 'Tiga bagian lurus berturut-turut! 🚀 Satu blok Ulangi untuk setiap bagian membuat kodemu singkat. Bisakah kamu menemukan awal dan akhir setiap bagian?',
    },
    gridRows: 5,
    gridCols: 9,
    cells: emptyGrid(5, 9),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] }, { id: 's4', pos: [0, 4] },
      { id: 's5', pos: [1, 4] }, { id: 's6', pos: [2, 4] }, { id: 's7', pos: [3, 4] },
      { id: 's8', pos: [3, 5] }, { id: 's9', pos: [3, 6] }, { id: 's10', pos: [3, 7] }, { id: 's11', pos: [3, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 9,
    xpReward: 230,
    hints: [
      { en: 'This trail has three straight parts — right, then down, then right again. Look for each straight run!', id: 'Jejak ini punya tiga bagian lurus — kanan, lalu bawah, lalu kanan lagi. Cari setiap bagian lurusnya!' },
      { en: 'Repeat 4 (right), Repeat 3 (down), Repeat 4 (right) — three Repeat blocks, 9 blocks total!', id: 'Ulangi 4 (kanan), Ulangi 3 (bawah), Ulangi 4 (kanan) — tiga blok Ulangi, total 9 blok!' },
    ],
    starThresholds: [13, 9],
  },
  {
    id: 'space-12',
    worldId: 'space',
    number: 12,
    title: { en: 'Meteor Detour', id: 'Putaran Meteor' },
    story: {
      en: "A lone meteor drifts right into the middle of Astro's straight trail! Loop through the clear parts, then steer around the meteor by hand.",
      id: 'Sebuah meteor tunggal melayang tepat di tengah jejak lurus Astro! Gunakan perulangan di bagian yang bersih, lalu kemudikan berputar mengelilingi meteor secara manual.',
    },
    mascotMessage: {
      en: "Uh oh, a meteor blocks the path! ☄️ Loop through the first stretch, then go up, right, right, down to get around it — then loop again to finish!",
      id: 'Waduh, ada meteor menghalangi jalan! ☄️ Gunakan perulangan di bagian pertama, lalu jalan atas, kanan, kanan, bawah untuk memutarnya — lalu ulangi lagi untuk selesai!',
    },
    gridRows: 5,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(5, 11)
      g[2][5] = 'obstacle'
      return g
    })(),
    startPos: [2, 0],
    items: [
      { id: 's1', pos: [2, 1] }, { id: 's2', pos: [2, 2] }, { id: 's3', pos: [2, 3] }, { id: 's4', pos: [2, 4] },
      { id: 's5', pos: [2, 6] }, { id: 's6', pos: [2, 7] }, { id: 's7', pos: [2, 8] }, { id: 's8', pos: [2, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 10,
    xpReward: 248,
    hints: [
      { en: 'The trail is straight until a meteor blocks it partway through. Loop for the clean part first!', id: 'Jejaknya lurus sampai sebuah meteor menghalanginya di tengah jalan. Gunakan perulangan dulu untuk bagian yang bersih!' },
      { en: 'Repeat right 4, then go around the meteor by hand (up, right, right, down), then Repeat right 3 to finish!', id: 'Ulangi kanan 4, lalu putar mengelilingi meteor secara manual (atas, kanan, kanan, bawah), lalu Ulangi kanan 3 untuk selesai!' },
    ],
    starThresholds: [15, 10],
  },
  {
    id: 'space-13',
    worldId: 'space',
    number: 13,
    title: { en: 'Nebula Cluster', id: 'Gugus Nebula' },
    story: {
      en: "A shimmering nebula scattered seven stars among seven drifting rocks! This is Astro's biggest star field yet — plan every leg of the route.",
      id: 'Nebula yang berkilau menyebarkan tujuh bintang di antara tujuh batu yang melayang! Ini medan bintang terbesar Astro sejauh ini — rencanakan setiap bagian rute.',
    },
    mascotMessage: {
      en: "Seven stars, seven rocks! 🌌 Take it slow, one star at a time, and loop wherever you can fly in a straight line.",
      id: 'Tujuh bintang, tujuh batu! 🌌 Pelan-pelan, satu bintang setiap kali, dan gunakan perulangan setiap kali kamu bisa terbang lurus.',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[0][8] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][7] = 'obstacle'
      g[4][9] = 'obstacle'
      g[5][4] = 'obstacle'
      g[6][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 6] },
      { id: 's2', pos: [3, 3] },
      { id: 's3', pos: [2, 8] },
      { id: 's4', pos: [5, 6] },
      { id: 's5', pos: [4, 1] },
      { id: 's6', pos: [6, 6] },
      { id: 's7', pos: [8, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 40,
    xpReward: 260,
    hints: [
      { en: 'Draw the route on paper first — with seven stars, a clear plan saves you from getting lost among the rocks!', id: 'Gambar dulu rutenya di kertas — dengan tujuh bintang, rencana yang jelas menghindarkanmu tersesat di antara batu!' },
      { en: 'The very first leg is a clean straight line — use a Repeat block there. The rest need careful step-by-step moves around the rocks!', id: 'Bagian pertama adalah garis lurus bersih — gunakan blok Ulangi di situ. Sisanya butuh gerakan langkah demi langkah yang hati-hati di sekitar batu!' },
    ],
    starThresholds: [58, 40],
  },
  {
    id: 'space-14',
    worldId: 'space',
    number: 14,
    title: { en: 'Quad Comet Relay', id: 'Estafet Komet Berempat' },
    story: {
      en: "Four comets left a relay of straight trails — right, down, right, down! Four Repeat blocks will fly Astro through the whole relay.",
      id: 'Empat komet meninggalkan estafet jejak lurus — kanan, bawah, kanan, bawah! Empat blok Ulangi akan menerbangkan Astro melewati seluruh estafet.',
    },
    mascotMessage: {
      en: "Four straight legs this time! 🚀 One Repeat block per leg — right, down, right, down. Keep your code light with 12 blocks!",
      id: 'Empat bagian lurus kali ini! 🚀 Satu blok Ulangi untuk setiap bagian — kanan, bawah, kanan, bawah. Buat kodemu ringan dengan 12 blok!',
    },
    gridRows: 9,
    gridCols: 11,
    cells: emptyGrid(9, 11),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] }, { id: 's4', pos: [0, 4] }, { id: 's5', pos: [0, 5] },
      { id: 's6', pos: [1, 5] }, { id: 's7', pos: [2, 5] }, { id: 's8', pos: [3, 5] }, { id: 's9', pos: [4, 5] },
      { id: 's10', pos: [4, 6] }, { id: 's11', pos: [4, 7] }, { id: 's12', pos: [4, 8] }, { id: 's13', pos: [4, 9] }, { id: 's14', pos: [4, 10] },
      { id: 's15', pos: [5, 10] }, { id: 's16', pos: [6, 10] }, { id: 's17', pos: [7, 10] }, { id: 's18', pos: [8, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 12,
    xpReward: 280,
    hints: [
      { en: 'Four straight legs means four Repeat blocks — right, down, right, down. Spot where each leg begins!', id: 'Empat bagian lurus berarti empat blok Ulangi — kanan, bawah, kanan, bawah. Temukan di mana setiap bagian dimulai!' },
      { en: 'Repeat 5 (right), Repeat 4 (down), Repeat 5 (right), Repeat 4 (down) — 12 blocks total for the whole relay!', id: 'Ulangi 5 (kanan), Ulangi 4 (bawah), Ulangi 5 (kanan), Ulangi 4 (bawah) — 12 blok total untuk seluruh estafet!' },
    ],
    starThresholds: [17, 12],
  },
  {
    id: 'space-15',
    worldId: 'space',
    number: 15,
    title: { en: 'Twin Meteor Detours', id: 'Dua Putaran Meteor' },
    story: {
      en: "Two lone meteors drift into Astro's long straight trail this time! Loop through each clear stretch, then steer around each meteor by hand.",
      id: 'Dua meteor tunggal melayang ke jejak lurus panjang Astro kali ini! Gunakan perulangan di setiap bagian yang bersih, lalu kemudikan berputar mengelilingi setiap meteor secara manual.',
    },
    mascotMessage: {
      en: "Double trouble! ☄️☄️ Two meteors, two detours. Loop, detour, loop, detour, loop — five parts, one long trail!",
      id: 'Masalah ganda! ☄️☄️ Dua meteor, dua putaran. Ulangi, putar, ulangi, putar, ulangi — lima bagian, satu jejak panjang!',
    },
    gridRows: 4,
    gridCols: 15,
    cells: (() => {
      const g = emptyGrid(4, 15)
      g[2][4] = 'obstacle'
      g[2][10] = 'obstacle'
      return g
    })(),
    startPos: [2, 0],
    items: [
      { id: 's1', pos: [2, 1] }, { id: 's2', pos: [2, 2] }, { id: 's3', pos: [2, 3] },
      { id: 's4', pos: [2, 5] },
      { id: 's5', pos: [2, 6] }, { id: 's6', pos: [2, 7] }, { id: 's7', pos: [2, 8] }, { id: 's8', pos: [2, 9] },
      { id: 's9', pos: [2, 11] },
      { id: 's10', pos: [2, 12] }, { id: 's11', pos: [2, 13] }, { id: 's12', pos: [2, 14] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 17,
    xpReward: 300,
    hints: [
      { en: 'The trail is broken TWICE this time. Handle each meteor the same way — loop up to it, detour around it, then keep going.', id: 'Jejaknya rusak DUA kali kali ini. Tangani setiap meteor dengan cara yang sama — ulangi sampai dekat, putar mengelilinginya, lalu lanjutkan.' },
      { en: 'Repeat right 3, detour (up, right, right, down), Repeat right 4, detour again (up, right, right, down), then Repeat right 3 to finish!', id: 'Ulangi kanan 3, putar (atas, kanan, kanan, bawah), Ulangi kanan 4, putar lagi (atas, kanan, kanan, bawah), lalu Ulangi kanan 3 untuk selesai!' },
    ],
    starThresholds: [25, 17],
  },
  {
    id: 'space-16',
    worldId: 'space',
    number: 16,
    title: { en: 'Asteroid Swarm', id: 'Kawanan Asteroid' },
    story: {
      en: "A swarm of eight asteroids drifts through the sector, with seven stars scattered between them. Astro's biggest dodge-and-collect mission yet!",
      id: 'Kawanan delapan asteroid melayang melintasi sektor, dengan tujuh bintang tersebar di antaranya. Misi menghindar-dan-kumpulkan terbesar Astro sejauh ini!',
    },
    mascotMessage: {
      en: "Eight asteroids! 🌠 Plot your course star by star, and use a loop for every straight stretch you find.",
      id: 'Delapan asteroid! 🌠 Rencanakan jalurmu bintang demi bintang, dan gunakan perulangan untuk setiap bagian lurus yang kamu temukan.',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[0][9] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][2] = 'obstacle'
      g[9][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 7] },
      { id: 's2', pos: [3, 4] },
      { id: 's3', pos: [2, 9] },
      { id: 's4', pos: [5, 2] },
      { id: 's5', pos: [4, 10] },
      { id: 's6', pos: [7, 6] },
      { id: 's7', pos: [9, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 48,
    xpReward: 320,
    hints: [
      { en: 'Map out all seven stars in order before dragging a single block — the swarm has more rocks than ever!', id: 'Petakan ketujuh bintang secara berurutan sebelum menyeret satu blok pun — kawanan ini punya lebih banyak batu dari sebelumnya!' },
      { en: 'The first leg to star one is a clean straight line — loop it. After that, move one leg at a time and watch for rocks!', id: 'Bagian pertama menuju bintang satu adalah garis lurus bersih — gunakan perulangan. Setelah itu, bergerak satu bagian setiap kali dan waspada batu!' },
    ],
    starThresholds: [70, 48],
  },
  {
    id: 'space-17',
    worldId: 'space',
    number: 17,
    title: { en: 'Solar Wind Corridor', id: 'Koridor Angin Matahari' },
    story: {
      en: "A corridor of solar wind traces a staircase path through space — right, down, right, down, right! Five straight legs, five loops.",
      id: 'Koridor angin matahari membentuk jalur tangga melintasi luar angkasa — kanan, bawah, kanan, bawah, kanan! Lima bagian lurus, lima perulangan.',
    },
    mascotMessage: {
      en: "Five straight legs now! 🚀 A Repeat block for each leg keeps this long corridor short in code. You've got this!",
      id: 'Lima bagian lurus sekarang! 🚀 Satu blok Ulangi untuk setiap bagian membuat koridor panjang ini singkat dalam kode. Kamu pasti bisa!',
    },
    gridRows: 8,
    gridCols: 14,
    cells: emptyGrid(8, 14),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] }, { id: 's4', pos: [0, 4] },
      { id: 's5', pos: [1, 4] }, { id: 's6', pos: [2, 4] }, { id: 's7', pos: [3, 4] },
      { id: 's8', pos: [3, 5] }, { id: 's9', pos: [3, 6] }, { id: 's10', pos: [3, 7] }, { id: 's11', pos: [3, 8] },
      { id: 's12', pos: [4, 8] }, { id: 's13', pos: [5, 8] }, { id: 's14', pos: [6, 8] },
      { id: 's15', pos: [6, 9] }, { id: 's16', pos: [6, 10] }, { id: 's17', pos: [6, 11] }, { id: 's18', pos: [6, 12] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 15,
    xpReward: 340,
    hints: [
      { en: 'Five straight legs alternating right and down. Trace them with your finger on screen before you build!', id: 'Lima bagian lurus berselang-seling kanan dan bawah. Telusuri dengan jarimu di layar sebelum membangun!' },
      { en: 'Repeat 4 (right), Repeat 3 (down), Repeat 4 (right), Repeat 3 (down), Repeat 4 (right) — 15 blocks for the whole corridor!', id: 'Ulangi 4 (kanan), Ulangi 3 (bawah), Ulangi 4 (kanan), Ulangi 3 (bawah), Ulangi 4 (kanan) — 15 blok untuk seluruh koridor!' },
    ],
    starThresholds: [22, 15],
  },
  {
    id: 'space-18',
    worldId: 'space',
    number: 18,
    title: { en: 'Comet Graveyard', id: 'Kuburan Komet' },
    story: {
      en: "Old comet debris and drifting rocks fill this sector — even the first stretch has a rock blocking the way! Loop, detour, then weave through the graveyard beyond.",
      id: 'Puing komet lama dan batu yang melayang memenuhi sektor ini — bahkan bagian pertama pun ada batu yang menghalangi jalan! Ulangi, putar, lalu berkelok melewati kuburan di baliknya.',
    },
    mascotMessage: {
      en: "This sector mixes everything you've learned! 🪐 A detour right at the start, then a scattered field of rocks and stars. Take your time, Astro!",
      id: 'Sektor ini mencampur semua yang sudah kamu pelajari! 🪐 Ada putaran tepat di awal, lalu medan batu dan bintang yang tersebar. Santai saja, Astro!',
    },
    gridRows: 9,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(9, 12)
      g[0][4] = 'obstacle'
      g[1][1] = 'obstacle'
      g[2][2] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][4] = 'obstacle'
      g[6][9] = 'obstacle'
      g[8][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 1] }, { id: 's2', pos: [0, 2] }, { id: 's3', pos: [0, 3] },
      { id: 's4', pos: [0, 5] },
      { id: 's5', pos: [0, 6] }, { id: 's6', pos: [0, 7] }, { id: 's7', pos: [0, 8] },
      { id: 's8', pos: [3, 5] },
      { id: 's9', pos: [2, 10] },
      { id: 's10', pos: [5, 6] },
      { id: 's11', pos: [7, 9] },
      { id: 's12', pos: [8, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 43,
    xpReward: 355,
    hints: [
      { en: 'A rock breaks the very first straight line — loop up to it, detour around it (down, right, right, up), then loop again before the scattered field begins.', id: 'Sebuah batu memutus garis lurus pertama — ulangi sampai dekat, putar mengelilinginya (bawah, kanan, kanan, atas), lalu ulangi lagi sebelum medan yang tersebar dimulai.' },
      { en: 'After the detour, treat the rest like a scattered field: one star at a time, careful steps around every rock!', id: 'Setelah putaran, perlakukan sisanya seperti medan tersebar: satu bintang setiap kali, langkah hati-hati di sekitar setiap batu!' },
    ],
    starThresholds: [62, 43],
  },
  {
    id: 'space-19',
    worldId: 'space',
    number: 19,
    title: { en: 'Deep Space Relay', id: 'Estafet Luar Angkasa Dalam' },
    story: {
      en: "Astro pushes deeper into space than ever — nine asteroids drift between eight stars scattered across the biggest field yet.",
      id: 'Astro terbang lebih dalam ke luar angkasa dari sebelumnya — sembilan asteroid melayang di antara delapan bintang yang tersebar di medan terbesar sejauh ini.',
    },
    mascotMessage: {
      en: "This is deep space! 🌌 Nine rocks, eight stars — the biggest scattered field before the final voyage. Plan carefully, star by star.",
      id: 'Ini luar angkasa dalam! 🌌 Sembilan batu, delapan bintang — medan tersebar terbesar sebelum perjalanan terakhir. Rencanakan dengan hati-hati, bintang demi bintang.',
    },
    gridRows: 10,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(10, 12)
      g[0][11] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][9] = 'obstacle'
      g[5][4] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][3] = 'obstacle'
      g[8][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 9] },
      { id: 's2', pos: [3, 5] },
      { id: 's3', pos: [1, 11] },
      { id: 's4', pos: [6, 8] },
      { id: 's5', pos: [4, 1] },
      { id: 's6', pos: [8, 6] },
      { id: 's7', pos: [7, 10] },
      { id: 's8', pos: [9, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 58,
    xpReward: 380,
    hints: [
      { en: 'Eight stars means eight legs of the journey. Write the route down before you touch a single block!', id: 'Delapan bintang berarti delapan bagian perjalanan. Tuliskan rutenya sebelum menyentuh satu blok pun!' },
      { en: 'The first leg is a clean straight line — loop it. Every leg after that needs careful manual steps around the asteroids!', id: 'Bagian pertama adalah garis lurus bersih — gunakan perulangan. Setiap bagian setelahnya butuh langkah manual yang hati-hati di sekitar asteroid!' },
    ],
    starThresholds: [84, 58],
  },
  {
    id: 'space-20',
    worldId: 'space',
    number: 20,
    title: { en: 'Final Frontier', id: 'Perbatasan Akhir' },
    story: {
      en: "This is it — the final frontier of Astro's space journey! Ten asteroids, nine stars, and the trickiest field the station has ever seen.",
      id: 'Inilah dia — perbatasan akhir perjalanan luar angkasa Astro! Sepuluh asteroid, sembilan bintang, dan medan paling rumit yang pernah dilihat stasiun ini.',
    },
    mascotMessage: {
      en: "You've made it to the final frontier! 🌌🚀 Everything you've learned — straight loops, detours, careful scattered fields — comes together right here. Good luck, space pilot!",
      id: 'Kamu sudah sampai di perbatasan akhir! 🌌🚀 Semua yang sudah kamu pelajari — perulangan lurus, putaran, medan tersebar yang hati-hati — menyatu di sini. Semoga berhasil, pilot luar angkasa!',
    },
    gridRows: 10,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(10, 12)
      g[0][11] = 'obstacle'
      g[1][2] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][4] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][11] = 'obstacle'
      g[9][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [4, 6] },
      { id: 's3', pos: [2, 2] },
      { id: 's4', pos: [6, 4] },
      { id: 's5', pos: [5, 9] },
      { id: 's6', pos: [9, 10] },
      { id: 's7', pos: [8, 0] },
      { id: 's8', pos: [1, 4] },
      { id: 's9', pos: [1, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 59,
    xpReward: 420,
    hints: [
      { en: 'Nine stars is the most yet — map the whole route on paper first, leg by leg, before you touch a single block!', id: 'Sembilan bintang adalah yang terbanyak sejauh ini — petakan seluruh rute di kertas dulu, bagian demi bagian, sebelum menyentuh satu blok pun!' },
      { en: 'The first leg and the very last leg are both clean straight lines — loop those two! Every leg in between needs careful manual navigation around the asteroids.', id: 'Bagian pertama dan bagian terakhir sama-sama garis lurus bersih — gunakan perulangan untuk keduanya! Setiap bagian di antaranya butuh navigasi manual yang hati-hati di sekitar asteroid.' },
    ],
    starThresholds: [86, 59],
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
      en: 'A three-segment Loop Land track! Right, then down, then right again. Three loops. Maximum efficiency!',
      id: 'Lintasan Negeri Perulangan tiga segmen! Kanan, lalu bawah, lalu kanan lagi. Tiga perulangan. Efisiensi maksimal!',
    },
    mascotMessage: {
      en: "Three-leg track! 🏎️🏁 Repeat right 4, Repeat down 5, Repeat right 6. That's 9 blocks vs 15 brute-force blocks. Great efficiency!",
      id: 'Tiga segmen lintasan! 🏎️🏁 Ulangi kanan 4, Ulangi bawah 5, Ulangi kanan 6. Itu 9 blok vs 15 blok cara kasar. Efisiensi yang hebat!',
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
  {
    id: 'loops-7',
    worldId: 'loops',
    number: 7,
    title: { en: 'Staircase Sprint', id: 'Sprint Tangga' },
    story: {
      en: 'The stars form a staircase — down 2, right 2, down 2, right 2, down 2, right 2! One Repeat block holding TWO smaller Repeat blocks can trace the whole thing.',
      id: 'Bintang-bintang membentuk tangga — bawah 2, kanan 2, bawah 2, kanan 2, bawah 2, kanan 2! Satu blok Ulangi berisi DUA blok Ulangi kecil bisa melacak semuanya.',
    },
    mascotMessage: {
      en: "A NESTED loop! 🏎️ Put a Repeat-down-2 and a Repeat-right-2 INSIDE a bigger Repeat-3. That one outer loop does all three staircase steps!",
      id: 'Perulangan BERSARANG! 🏎️ Taruh Ulangi-bawah-2 dan Ulangi-kanan-2 DI DALAM Ulangi-3 yang lebih besar. Satu perulangan luar itu melakukan ketiga langkah tangga!',
    },
    gridRows: 7,
    gridCols: 7,
    cells: emptyGrid(7, 7),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [2, 0] }, { id: 'l2', pos: [2, 2] },
      { id: 'l3', pos: [4, 2] }, { id: 'l4', pos: [4, 4] },
      { id: 'l5', pos: [6, 4] }, { id: 'l6', pos: [6, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 8,
    xpReward: 300,
    hints: [
      { en: 'The staircase repeats the same shape 3 times: down 2, then right 2. Put ONE inner loop for down and ONE for right, both inside an outer Repeat 3!', id: 'Tangganya mengulang bentuk yang sama 3 kali: turun 2, lalu kanan 2. Taruh SATU perulangan dalam untuk turun dan SATU untuk kanan, keduanya di dalam Ulangi 3 luar!' },
      { en: 'Nested: Repeat 3 times [ Repeat 2 (Move Down), Repeat 2 (Move Right) ]. That is only 8 blocks for the whole staircase!', id: 'Bersarang: Ulangi 3 kali [ Ulangi 2 (Gerak Bawah), Ulangi 2 (Gerak Kanan) ]. Itu hanya 8 blok untuk seluruh tangga!' },
    ],
    starThresholds: [18, 8],
  },
  {
    id: 'loops-8',
    worldId: 'loops',
    number: 8,
    title: { en: 'Grand Staircase', id: 'Tangga Besar' },
    story: {
      en: 'An even longer staircase — 4 steps this time! Here\'s the surprise: the SAME nested-loop trick still only needs 8 blocks, no matter how many steps.',
      id: 'Tangga yang lebih panjang lagi — 4 langkah kali ini! Kejutannya: trik perulangan bersarang yang SAMA tetap hanya butuh 8 blok, berapa pun jumlah langkahnya.',
    },
    mascotMessage: {
      en: 'More steps, SAME block count! 🤯 Just change the outer Repeat from 3 to 4 — the nested trick scales for free!',
      id: 'Lebih banyak langkah, jumlah blok SAMA! 🤯 Cukup ubah Ulangi luar dari 3 menjadi 4 — trik bersarang berskala gratis!',
    },
    gridRows: 9,
    gridCols: 9,
    cells: emptyGrid(9, 9),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [2, 0] }, { id: 'l2', pos: [2, 2] },
      { id: 'l3', pos: [4, 2] }, { id: 'l4', pos: [4, 4] },
      { id: 'l5', pos: [6, 4] }, { id: 'l6', pos: [6, 6] },
      { id: 'l7', pos: [8, 6] }, { id: 'l8', pos: [8, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 8,
    xpReward: 320,
    hints: [
      { en: 'Same nested pattern as before, just one more step. Change the outer Repeat number to 4!', id: 'Pola bersarang yang sama seperti sebelumnya, cuma satu langkah lagi. Ubah angka Ulangi luar menjadi 4!' },
      { en: 'Without nesting you would need four separate down-2/right-2 pairs — 24 blocks! Nesting keeps it at 8.', id: 'Tanpa bersarang kamu butuh empat pasang turun-2/kanan-2 terpisah — 24 blok! Bersarang membuatnya tetap 8.' },
    ],
    starThresholds: [24, 8],
  },
  {
    id: 'loops-9',
    worldId: 'loops',
    number: 9,
    title: { en: 'Wave Track', id: 'Lintasan Gelombang' },
    story: {
      en: 'The track dips down then rises back up in a wave! That\'s TWO nested staircases back to back — one going down-right, one going up-right.',
      id: 'Lintasannya turun lalu naik lagi membentuk gelombang! Itu DUA tangga bersarang berurutan — satu turun-kanan, satu naik-kanan.',
    },
    mascotMessage: {
      en: 'A wave needs TWO nested loops! 🌊 First nest a down-right staircase, then nest an up-right staircase after it.',
      id: 'Gelombang butuh DUA perulangan bersarang! 🌊 Pertama sarangkan tangga turun-kanan, lalu sarangkan tangga naik-kanan setelahnya.',
    },
    gridRows: 7,
    gridCols: 13,
    cells: emptyGrid(7, 13),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [2, 0] }, { id: 'l2', pos: [2, 2] },
      { id: 'l3', pos: [4, 2] }, { id: 'l4', pos: [4, 4] },
      { id: 'l5', pos: [6, 4] }, { id: 'l6', pos: [6, 6] },
      { id: 'l7', pos: [4, 6] }, { id: 'l8', pos: [4, 8] },
      { id: 'l9', pos: [2, 8] }, { id: 'l10', pos: [2, 10] },
      { id: 'l11', pos: [0, 10] }, { id: 'l12', pos: [0, 12] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 16,
    xpReward: 340,
    hints: [
      { en: 'First nested loop: Repeat 3 [ Repeat 2 Down, Repeat 2 Right ] takes you down the first half.', id: 'Perulangan bersarang pertama: Ulangi 3 [ Ulangi 2 Bawah, Ulangi 2 Kanan ] membawamu turun di separuh pertama.' },
      { en: 'Second nested loop: Repeat 3 [ Repeat 2 Up, Repeat 2 Right ] takes you back up. 8 blocks + 8 blocks = 16 total!', id: 'Perulangan bersarang kedua: Ulangi 3 [ Ulangi 2 Atas, Ulangi 2 Kanan ] membawamu naik lagi. 8 blok + 8 blok = 16 total!' },
    ],
    starThresholds: [36, 16],
  },
  {
    id: 'loops-10',
    worldId: 'loops',
    number: 10,
    title: { en: 'Loop Grandmaster', id: 'Grandmaster Perulangan' },
    story: {
      en: 'A nested staircase — right 3, down 2, three times — but a barrier breaks the pattern on the final step! Use your nested loop for the first two steps, then handle the broken step by hand.',
      id: 'Tangga bersarang — kanan 3, bawah 2, tiga kali — tapi penghalang merusak pola di langkah terakhir! Gunakan perulangan bersarangmu untuk dua langkah pertama, lalu tangani langkah yang rusak secara manual.',
    },
    mascotMessage: {
      en: "A real Grandmaster knows when to break the pattern! 🏆 Nest a loop for the clean steps, then go around the barrier by hand for the last one.",
      id: 'Grandmaster sejati tahu kapan harus keluar dari pola! 🏆 Sarangkan perulangan untuk langkah yang bersih, lalu putar arah penghalang secara manual untuk yang terakhir.',
    },
    gridRows: 9,
    gridCols: 13,
    cells: (() => {
      const g = emptyGrid(9, 13)
      g[6][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [0, 3] }, { id: 'l2', pos: [2, 3] },
      { id: 'l3', pos: [2, 6] }, { id: 'l4', pos: [4, 6] },
      { id: 'l5', pos: [4, 9] }, { id: 'l6', pos: [6, 9] },
      { id: 'l7', pos: [6, 12] }, { id: 'l8', pos: [8, 12] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 16,
    xpReward: 360,
    hints: [
      { en: 'The first two staircase steps are clean — nest Repeat 2 [ Repeat 3 Right, Repeat 2 Down ] for those. That is 8 blocks.', id: 'Dua langkah tangga pertama bersih — sarangkan Ulangi 2 [ Ulangi 3 Kanan, Ulangi 2 Bawah ] untuk itu. Itu 8 blok.' },
      { en: 'A barrier blocks the third step! Go right, down, down, left by hand to get around it, then Repeat 2 down to finish.', id: 'Penghalang menutup langkah ketiga! Jalan kanan, bawah, bawah, kiri secara manual untuk memutarnya, lalu Ulangi 2 bawah untuk selesai.' },
    ],
    starThresholds: [26, 16],
  },
  {
    id: 'loops-11',
    worldId: 'loops',
    number: 11,
    title: { en: 'Long Drop, Short Shift', id: 'Turun Panjang, Geser Pendek' },
    story: {
      en: "A steep hill! Dash drops down 3 squares, then nudges right just 1 — over and over. The two Repeat blocks inside don't have to match in size to nest!",
      id: 'Bukit yang curam! Dash turun 3 kotak, lalu bergeser kanan hanya 1 — berulang-ulang. Dua blok Ulangi di dalam tidak harus sama besar untuk bisa bersarang!',
    },
    mascotMessage: {
      en: "Nested loops don't need matching numbers! 🏎️ Repeat 4 times [ Repeat 3 (Move Down), Repeat 1 (Move Right) ] — still only 8 blocks!",
      id: 'Perulangan bersarang tidak perlu angka yang sama! 🏎️ Ulangi 4 kali [ Ulangi 3 (Gerak Bawah), Ulangi 1 (Gerak Kanan) ] — tetap hanya 8 blok!',
    },
    gridRows: 10,
    gridCols: 4,
    cells: emptyGrid(10, 4),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [3, 0] }, { id: 'l2', pos: [3, 1] },
      { id: 'l3', pos: [6, 1] }, { id: 'l4', pos: [6, 2] },
      { id: 'l5', pos: [9, 2] }, { id: 'l6', pos: [9, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 8,
    xpReward: 365,
    hints: [
      { en: 'The pattern is down 3, right 1, repeated 4 times. Nest a Repeat-3-down and a Repeat-1-right inside an outer Repeat 4!', id: 'Polanya adalah turun 3, kanan 1, diulang 4 kali. Sarangkan Ulangi-3-bawah dan Ulangi-1-kanan di dalam Ulangi 4 luar!' },
      { en: 'Outer Repeat 4 [ Repeat 3 (Move Down), Repeat 1 (Move Right) ] = 2+3+3 = 8 blocks, no matter how many times it repeats!', id: 'Ulangi 4 luar [ Ulangi 3 (Gerak Bawah), Ulangi 1 (Gerak Kanan) ] = 2+3+3 = 8 blok, berapa pun jumlah pengulangannya!' },
    ],
    starThresholds: [18, 8],
  },
  {
    id: 'loops-12',
    worldId: 'loops',
    number: 12,
    title: { en: 'Spiral Circuit', id: 'Sirkuit Spiral' },
    story: {
      en: 'The track curves three times, tracing a spiral: down-and-right, then right-and-up, then up-and-left. Each curve needs its own nested loop chained after the last!',
      id: 'Lintasan berbelok tiga kali, membentuk spiral: turun-lalu-kanan, lalu kanan-lalu-atas, lalu atas-lalu-kiri. Setiap belokan butuh perulangan bersarangnya sendiri, dirangkai setelah yang sebelumnya!',
    },
    mascotMessage: {
      en: "THREE nested loops chained together! 🏎️🌀 One for each curve of the spiral. 8 blocks per curve, 24 total!",
      id: 'TIGA perulangan bersarang dirangkai bersama! 🏎️🌀 Satu untuk setiap belokan spiral. 8 blok per belokan, 24 total!',
    },
    gridRows: 5,
    gridCols: 5,
    cells: emptyGrid(5, 5),
    startPos: [2, 0],
    items: [
      { id: 'l1', pos: [3, 0] }, { id: 'l2', pos: [3, 1] },
      { id: 'l3', pos: [4, 1] }, { id: 'l4', pos: [4, 2] },
      { id: 'l5', pos: [4, 3] }, { id: 'l6', pos: [3, 3] },
      { id: 'l7', pos: [3, 4] }, { id: 'l8', pos: [2, 4] },
      { id: 'l9', pos: [1, 4] }, { id: 'l10', pos: [1, 3] },
      { id: 'l11', pos: [0, 3] }, { id: 'l12', pos: [0, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 24,
    xpReward: 385,
    hints: [
      { en: 'Build THREE separate nested Repeat structures, one after another: down+right, then right+up, then up+left, each repeated twice.', id: 'Bangun TIGA struktur Ulangi bersarang terpisah, satu demi satu: bawah+kanan, lalu kanan+atas, lalu atas+kiri, masing-masing diulang dua kali.' },
      { en: 'Each nested segment is 8 blocks (outer Repeat 2 + two inner Repeat blocks). Three segments = 24 blocks total.', id: 'Setiap segmen bersarang adalah 8 blok (Ulangi 2 luar + dua blok Ulangi dalam). Tiga segmen = 24 blok total.' },
    ],
    starThresholds: [36, 24],
  },
  {
    id: 'loops-13',
    worldId: 'loops',
    number: 13,
    title: { en: 'Double Trouble Track', id: 'Lintasan Dua Rintangan' },
    story: {
      en: 'Three clean staircase steps, then TWO barriers break the last two! Nest a loop for the clean part, then handle each broken step by hand — twice.',
      id: 'Tiga langkah tangga yang bersih, lalu DUA penghalang merusak dua langkah terakhir! Sarangkan perulangan untuk bagian bersih, lalu tangani setiap langkah yang rusak secara manual — dua kali.',
    },
    mascotMessage: {
      en: "Double trouble means double detours! 🏎️🚧🚧 Nest the first 3 clean steps (8 blocks), then go around each barrier by hand.",
      id: 'Dua rintangan berarti dua putaran! 🏎️🚧🚧 Sarangkan 3 langkah bersih pertama (8 blok), lalu putar setiap penghalang secara manual.',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[4][3] = 'obstacle'
      g[7][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [1, 0] }, { id: 'l2', pos: [1, 1] },
      { id: 'l3', pos: [2, 1] }, { id: 'l4', pos: [2, 2] },
      { id: 'l5', pos: [3, 2] }, { id: 'l6', pos: [3, 3] },
      { id: 'l7', pos: [5, 3] }, { id: 'l8', pos: [5, 5] },
      { id: 'l9', pos: [7, 5] }, { id: 'l10', pos: [7, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 22,
    xpReward: 405,
    hints: [
      { en: 'The first 3 steps are clean — nest Repeat 3 [ Repeat 1 (Move Down), Repeat 1 (Move Right) ] for those, just 8 blocks.', id: 'Tiga langkah pertama bersih — sarangkan Ulangi 3 [ Ulangi 1 (Gerak Bawah), Ulangi 1 (Gerak Kanan) ] untuk itu, hanya 8 blok.' },
      { en: 'Barrier 1: go right, down, down, left by hand, then Repeat 2 right. Barrier 2: Repeat 2 down, then up, right, right, down by hand.', id: 'Penghalang 1: jalan kanan, bawah, bawah, kiri secara manual, lalu Ulangi 2 kanan. Penghalang 2: Ulangi 2 bawah, lalu atas, kanan, kanan, bawah secara manual.' },
    ],
    starThresholds: [32, 22],
  },
  {
    id: 'loops-14',
    worldId: 'loops',
    number: 14,
    title: { en: 'Short Drop, Long Shift', id: 'Turun Pendek, Geser Panjang' },
    story: {
      en: 'A long bridge! Dash drops down just 1 square, then dashes right 4 — over and over. Flip the ratio from before: now the SHIFT is the long part.',
      id: 'Jembatan yang panjang! Dash turun hanya 1 kotak, lalu melesat kanan 4 — berulang-ulang. Balikkan rasio dari sebelumnya: kali ini GESERAN yang panjang.',
    },
    mascotMessage: {
      en: "Mirror image of the hill! 🏎️ Repeat 3 times [ Repeat 1 (Move Down), Repeat 4 (Move Right) ] — still just 8 blocks, whichever side is long!",
      id: 'Kebalikan dari bukit! 🏎️ Ulangi 3 kali [ Ulangi 1 (Gerak Bawah), Ulangi 4 (Gerak Kanan) ] — tetap hanya 8 blok, sisi mana pun yang panjang!',
    },
    gridRows: 4,
    gridCols: 13,
    cells: emptyGrid(4, 13),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [1, 0] }, { id: 'l2', pos: [1, 4] },
      { id: 'l3', pos: [2, 4] }, { id: 'l4', pos: [2, 8] },
      { id: 'l5', pos: [3, 8] }, { id: 'l6', pos: [3, 12] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 8,
    xpReward: 420,
    hints: [
      { en: 'Down 1, right 4, repeated 3 times. Nest Repeat 1 (down) and Repeat 4 (right) inside an outer Repeat 3.', id: 'Bawah 1, kanan 4, diulang 3 kali. Sarangkan Ulangi 1 (bawah) dan Ulangi 4 (kanan) di dalam Ulangi 3 luar.' },
      { en: 'Outer Repeat 3 [ Repeat 1 (Move Down), Repeat 4 (Move Right) ] = 8 blocks total, same trick as Long Drop, Short Shift.', id: 'Ulangi 3 luar [ Ulangi 1 (Gerak Bawah), Ulangi 4 (Gerak Kanan) ] = 8 blok total, trik yang sama seperti Turun Panjang, Geser Pendek.' },
    ],
    starThresholds: [18, 8],
  },
  {
    id: 'loops-15',
    worldId: 'loops',
    number: 15,
    title: { en: 'Square Loop', id: 'Putaran Persegi' },
    story: {
      en: 'Four turns bring Dash all the way back to the start line! Down-right, right-up, up-left, left-down — four nested loops forming one closed square.',
      id: 'Empat belokan membawa Dash kembali ke garis start! Turun-kanan, kanan-atas, atas-kiri, kiri-bawah — empat perulangan bersarang membentuk satu persegi tertutup.',
    },
    mascotMessage: {
      en: "A full square loop back to where you started! 🏎️🔁 Four nested segments, 8 blocks each, 32 total — and you finish right back at the start line!",
      id: 'Putaran persegi penuh kembali ke tempat awal! 🏎️🔁 Empat segmen bersarang, 8 blok masing-masing, 32 total — dan kamu selesai tepat di garis start!',
    },
    gridRows: 5,
    gridCols: 5,
    cells: emptyGrid(5, 5),
    startPos: [2, 0],
    items: [
      { id: 'l1', pos: [3, 0] }, { id: 'l2', pos: [3, 1] },
      { id: 'l3', pos: [4, 1] }, { id: 'l4', pos: [4, 2] },
      { id: 'l5', pos: [4, 3] }, { id: 'l6', pos: [3, 3] },
      { id: 'l7', pos: [3, 4] }, { id: 'l8', pos: [2, 4] },
      { id: 'l9', pos: [1, 4] }, { id: 'l10', pos: [1, 3] },
      { id: 'l11', pos: [0, 3] }, { id: 'l12', pos: [0, 2] },
      { id: 'l13', pos: [0, 1] }, { id: 'l14', pos: [1, 1] },
      { id: 'l15', pos: [1, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 32,
    xpReward: 440,
    hints: [
      { en: 'Four turns, four nested loops: down+right, right+up, up+left, left+down — each repeated twice.', id: 'Empat belokan, empat perulangan bersarang: bawah+kanan, kanan+atas, atas+kiri, kiri+bawah — masing-masing diulang dua kali.' },
      { en: '4 segments x 8 blocks = 32. The very last step lands you back on the start square — no star there, just the finish!', id: '4 segmen x 8 blok = 32. Langkah terakhir membawamu kembali ke kotak start — tidak ada bintang di situ, hanya garis finis!' },
    ],
    starThresholds: [48, 32],
  },
  {
    id: 'loops-16',
    worldId: 'loops',
    number: 16,
    title: { en: 'Triple Trouble', id: 'Tiga Rintangan' },
    story: {
      en: 'Three barriers this time, breaking three different steps of the staircase! Nest the clean start, then handle THREE broken steps by hand, one after another.',
      id: 'Tiga penghalang kali ini, merusak tiga langkah berbeda dari tangga! Sarangkan bagian awal yang bersih, lalu tangani TIGA langkah rusak secara manual, satu demi satu.',
    },
    mascotMessage: {
      en: "Triple trouble, triple detours! 🏎️🚧🚧🚧 Nest the clean start (8 blocks), then three separate hand-coded detours around three barriers.",
      id: 'Tiga rintangan, tiga putaran! 🏎️🚧🚧🚧 Sarangkan bagian awal yang bersih (8 blok), lalu tiga putaran manual di sekitar tiga penghalang.',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[4][3] = 'obstacle'
      g[7][6] = 'obstacle'
      g[8][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 9],
    items: [
      { id: 'l1', pos: [1, 9] }, { id: 'l2', pos: [1, 8] },
      { id: 'l3', pos: [2, 8] }, { id: 'l4', pos: [2, 7] },
      { id: 'l5', pos: [3, 7] }, { id: 'l6', pos: [3, 6] },
      { id: 'l7', pos: [5, 6] }, { id: 'l8', pos: [5, 4] },
      { id: 'l9', pos: [7, 4] }, { id: 'l10', pos: [7, 2] },
      { id: 'l11', pos: [9, 2] }, { id: 'l12', pos: [9, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 29,
    xpReward: 460,
    hints: [
      { en: 'The first 3 steps are clean — nest Repeat 3 [ Repeat 1 (Move Down), Repeat 1 (Move Left) ] for those, 8 blocks.', id: 'Tiga langkah pertama bersih — sarangkan Ulangi 3 [ Ulangi 1 (Gerak Bawah), Ulangi 1 (Gerak Kiri) ] untuk itu, 8 blok.' },
      { en: 'Each barrier costs 7 blocks: one clean Repeat-2 side plus a 4-move hand-coded detour around the blocked side.', id: 'Setiap penghalang membutuhkan 7 blok: satu sisi Ulangi-2 yang bersih ditambah putaran manual 4 langkah di sisi yang terhalang.' },
    ],
    starThresholds: [39, 29],
  },
  {
    id: 'loops-17',
    worldId: 'loops',
    number: 17,
    title: { en: 'Wave and Barrier', id: 'Gelombang dan Penghalang' },
    story: {
      en: 'The track dips down then rises back up — but a barrier breaks the very last rise! Nest the down-wave and most of the up-wave, then detour around the barrier.',
      id: 'Lintasan turun lalu naik lagi — tapi penghalang merusak kenaikan terakhir! Sarangkan gelombang turun dan sebagian besar gelombang naik, lalu putar penghalang.',
    },
    mascotMessage: {
      en: "A wave AND a barrier?! 🏎️🌊🚧 Nest the down-right wave (8 blocks), then the up-right wave hits a barrier on its last stretch.",
      id: 'Gelombang DAN penghalang?! 🏎️🌊🚧 Sarangkan gelombang turun-kanan (8 blok), lalu gelombang naik-kanan menabrak penghalang di bagian terakhirnya.',
    },
    gridRows: 5,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(5, 9)
      g[1][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [2, 0] }, { id: 'l2', pos: [2, 2] },
      { id: 'l3', pos: [4, 2] }, { id: 'l4', pos: [4, 4] },
      { id: 'l5', pos: [2, 4] }, { id: 'l6', pos: [2, 6] },
      { id: 'l7', pos: [0, 6] }, { id: 'l8', pos: [0, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 21,
    xpReward: 480,
    hints: [
      { en: 'The down-right wave is clean — nest Repeat 2 [ Repeat 2 (Move Down), Repeat 2 (Move Right) ] for that, 8 blocks.', id: 'Gelombang turun-kanan bersih — sarangkan Ulangi 2 [ Ulangi 2 (Gerak Bawah), Ulangi 2 (Gerak Kanan) ] untuk itu, 8 blok.' },
      { en: 'The up-right wave: first Repeat 2 up + Repeat 2 right (6 blocks), then a barrier blocks the second up-move — detour left, up, up, right by hand.', id: 'Gelombang atas-kanan: pertama Ulangi 2 atas + Ulangi 2 kanan (6 blok), lalu penghalang menutup gerak atas kedua — putar kiri, atas, atas, kanan secara manual.' },
    ],
    starThresholds: [25, 21],
  },
  {
    id: 'loops-18',
    worldId: 'loops',
    number: 18,
    title: { en: 'Uneven Spiral', id: 'Spiral Tak Setara' },
    story: {
      en: 'A spiral where every curve is lopsided — long drop/short shift, short shift/long climb, short climb/long slide. Three nested loops, each with its own uneven ratio.',
      id: 'Spiral di mana setiap belokan tidak seimbang — turun panjang/geser pendek, geser pendek/naik panjang, naik pendek/geser panjang. Tiga perulangan bersarang, masing-masing dengan rasionya sendiri yang tak seimbang.',
    },
    mascotMessage: {
      en: "Every curve has its own uneven ratio! 🏎️🌀 Three nested loops, none of them matching — still just 8 blocks each, 24 total.",
      id: 'Setiap belokan punya rasio tak seimbangnya sendiri! 🏎️🌀 Tiga perulangan bersarang, tidak ada yang sama — tetap hanya 8 blok masing-masing, 24 total.',
    },
    gridRows: 9,
    gridCols: 5,
    cells: emptyGrid(9, 5),
    startPos: [4, 0],
    items: [
      { id: 'l1', pos: [6, 0] }, { id: 'l2', pos: [6, 1] },
      { id: 'l3', pos: [8, 1] }, { id: 'l4', pos: [8, 2] },
      { id: 'l5', pos: [8, 3] }, { id: 'l6', pos: [6, 3] },
      { id: 'l7', pos: [6, 4] }, { id: 'l8', pos: [4, 4] },
      { id: 'l9', pos: [3, 4] }, { id: 'l10', pos: [3, 2] },
      { id: 'l11', pos: [2, 2] }, { id: 'l12', pos: [2, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 24,
    xpReward: 500,
    hints: [
      { en: 'Curve 1: Repeat 2 down, Repeat 1 right. Curve 2: Repeat 1 right, Repeat 2 up. Curve 3: Repeat 1 up, Repeat 2 left. Each nested, each repeated twice.', id: 'Belokan 1: Ulangi 2 bawah, Ulangi 1 kanan. Belokan 2: Ulangi 1 kanan, Ulangi 2 atas. Belokan 3: Ulangi 1 atas, Ulangi 2 kiri. Masing-masing bersarang, masing-masing diulang dua kali.' },
      { en: 'The ratio does not matter for the block count — every nested curve costs 8 blocks (outer 2 + two inner Repeats of 3 each).', id: 'Rasionya tidak memengaruhi jumlah blok — setiap belokan bersarang tetap 8 blok (luar 2 + dua Ulangi dalam masing-masing 3).' },
    ],
    starThresholds: [36, 24],
  },
  {
    id: 'loops-19',
    worldId: 'loops',
    number: 19,
    title: { en: 'The Gauntlet', id: 'Lintasan Cobaan' },
    story: {
      en: 'A long uneven staircase — down 1, right 2, six times — with TWO barriers on non-adjacent steps and one clean step wedged between them. Nest what you can, then handle each barrier by hand.',
      id: 'Tangga panjang yang tak seimbang — bawah 1, kanan 2, enam kali — dengan DUA penghalang di langkah yang tidak berurutan dan satu langkah bersih terselip di antaranya. Sarangkan yang bisa, lalu tangani setiap penghalang secara manual.',
    },
    mascotMessage: {
      en: "The ultimate gauntlet! 🏎️🏆 Nest the first 3 clean steps, detour around a barrier, breeze through a clean step, then detour around one more barrier.",
      id: 'Lintasan cobaan sesungguhnya! 🏎️🏆 Sarangkan 3 langkah bersih pertama, putar satu penghalang, lewati satu langkah bersih dengan mudah, lalu putar satu penghalang lagi.',
    },
    gridRows: 7,
    gridCols: 13,
    cells: (() => {
      const g = emptyGrid(7, 13)
      g[4][7] = 'obstacle'
      g[6][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'l1', pos: [1, 0] }, { id: 'l2', pos: [1, 2] },
      { id: 'l3', pos: [2, 2] }, { id: 'l4', pos: [2, 4] },
      { id: 'l5', pos: [3, 4] }, { id: 'l6', pos: [3, 6] },
      { id: 'l7', pos: [4, 6] }, { id: 'l8', pos: [4, 8] },
      { id: 'l9', pos: [5, 8] }, { id: 'l10', pos: [5, 10] },
      { id: 'l11', pos: [6, 10] }, { id: 'l12', pos: [6, 12] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 28,
    xpReward: 525,
    hints: [
      { en: 'Steps 1-3 are clean — nest Repeat 3 [ Repeat 1 (Move Down), Repeat 2 (Move Right) ] for those, 8 blocks.', id: 'Langkah 1-3 bersih — sarangkan Ulangi 3 [ Ulangi 1 (Gerak Bawah), Ulangi 2 (Gerak Kanan) ] untuk itu, 8 blok.' },
      { en: 'Step 4 and step 6 each hit a barrier on the right-move — detour up, right, right, down by hand each time. Step 5 in between is fully clean.', id: 'Langkah 4 dan langkah 6 masing-masing menabrak penghalang di gerak kanan — putar atas, kanan, kanan, bawah secara manual setiap kali. Langkah 5 di antaranya sepenuhnya bersih.' },
    ],
    starThresholds: [38, 28],
  },
  {
    id: 'loops-20',
    worldId: 'loops',
    number: 20,
    title: { en: 'Master of the Spiral', id: 'Penguasa Spiral' },
    story: {
      en: 'The full square loop returns — but this time TWO of its four turns are broken by barriers! Nest the two clean turns, then hand-detour around each barrier on the other two.',
      id: 'Putaran persegi penuh kembali — tapi kali ini DUA dari empat belokannya rusak oleh penghalang! Sarangkan dua belokan bersih, lalu putar manual di sekitar setiap penghalang pada dua belokan lainnya.',
    },
    mascotMessage: {
      en: "The true test of a Loop Master! 🏎️🏆🌀 Two clean nested turns, two barrier-broken turns — combine everything you've learned in Loop Land.",
      id: 'Ujian sejati seorang Penguasa Perulangan! 🏎️🏆🌀 Dua belokan bersarang yang bersih, dua belokan yang rusak penghalang — gabungkan semua yang telah kamu pelajari di Negeri Perulangan.',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[3][6] = 'obstacle'
      g[3][0] = 'obstacle'
      return g
    })(),
    startPos: [4, 0],
    items: [
      { id: 'l1', pos: [5, 0] }, { id: 'l2', pos: [5, 1] },
      { id: 'l3', pos: [6, 1] }, { id: 'l4', pos: [6, 2] },
      { id: 'l5', pos: [6, 4] }, { id: 'l6', pos: [4, 4] },
      { id: 'l7', pos: [4, 6] }, { id: 'l8', pos: [2, 6] },
      { id: 'l9', pos: [1, 6] }, { id: 'l10', pos: [1, 5] },
      { id: 'l11', pos: [0, 5] }, { id: 'l12', pos: [0, 4] },
      { id: 'l13', pos: [0, 2] }, { id: 'l14', pos: [2, 2] },
      { id: 'l15', pos: [2, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    requiredCategories: ['loops'],
    optimalBlockCount: 42,
    xpReward: 560,
    hints: [
      { en: 'Turn 1 (down-right) and Turn 3 (up-left) are clean — nest Repeat 2 [ Repeat 1, Repeat 1 ] for each, 8 blocks apiece.', id: 'Belokan 1 (bawah-kanan) dan Belokan 3 (atas-kiri) bersih — sarangkan Ulangi 2 [ Ulangi 1, Ulangi 1 ] untuk masing-masing, 8 blok per belokan.' },
      { en: 'Turn 2 and Turn 4 each have one clean rep plus one barrier-broken rep: 6 blocks + (3 blocks + a 4-move hand detour) = 13 blocks each.', id: 'Belokan 2 dan Belokan 4 masing-masing punya satu repetisi bersih dan satu repetisi rusak penghalang: 6 blok + (3 blok + putaran manual 4 langkah) = 13 blok masing-masing.' },
    ],
    starThresholds: [50, 42],
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
      en: 'Variables can store your position too! 🏊 This is like giving your program a memory!',
      id: 'Variabel juga bisa menyimpan posisimu! 🏊 Ini seperti memberikan memori pada programmu!',
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
      en: 'A tough ocean challenge! Finn must collect gems in a spiral pattern using smart variables and loops.',
      id: 'Tantangan samudra yang berat! Finn harus mengumpulkan permata dalam pola spiral menggunakan variabel dan perulangan!',
    },
    mascotMessage: {
      en: "A big ocean level! 🌊 Use everything you've learned — moves, loops, AND variables! You got this! 🏊",
      id: 'Level samudra yang besar! 🌊 Gunakan segalanya yang sudah kamu pelajari — gerakan, perulangan, DAN variabel! Kamu bisa! 🏊',
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
  {
    id: 'ocean-6',
    worldId: 'ocean',
    number: 6,
    title: { en: 'Reusable Steps', id: 'Langkah yang Dipakai Ulang' },
    story: {
      en: 'Finn learns a new trick — the SAME variable can hold different numbers at different times! Set "steps" to 5 to swim right, then set it to 3 to dive down.',
      id: 'Finn mempelajari trik baru — variabel yang SAMA bisa menyimpan angka berbeda di waktu berbeda! Atur "langkah" ke 5 untuk berenang kanan, lalu atur ke 3 untuk menyelam turun.',
    },
    mascotMessage: {
      en: 'One variable, two jobs! 📦 Set "steps" to 5, repeat right. Then set "steps" to 3 again, repeat down!',
      id: 'Satu variabel, dua tugas! 📦 Atur "langkah" ke 5, ulangi kanan. Lalu atur "langkah" ke 3 lagi, ulangi turun!',
    },
    gridRows: 6,
    gridCols: 8,
    cells: emptyGrid(6, 8),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 5] },
      { id: 'g2', pos: [3, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables'],
    optimalBlockCount: 10,
    xpReward: 210,
    hints: [
      { en: 'Create a variable called "steps". Set it to 5, then use it inside a Repeat block with Move Right.', id: 'Buat variabel bernama "langkah". Atur ke 5, lalu gunakan di dalam blok Ulangi dengan Gerak Kanan.' },
      { en: 'Now set "steps" to 3 (the SAME variable, a new value) and repeat with Move Down!', id: 'Sekarang atur "langkah" ke 3 (variabel yang SAMA, nilai baru) dan ulangi dengan Gerak Bawah!' },
    ],
    starThresholds: [14, 10],
  },
  {
    id: 'ocean-7',
    worldId: 'ocean',
    number: 7,
    title: { en: 'Twin Currents', id: 'Arus Kembar' },
    story: {
      en: 'Three ocean currents pull Finn right, down, then right again. Reuse the "steps" variable for every current — and dodge two patches of coral along the way!',
      id: 'Tiga arus laut menarik Finn ke kanan, bawah, lalu kanan lagi. Pakai ulang variabel "langkah" untuk setiap arus — dan hindari dua bongkah karang di sepanjang jalan!',
    },
    mascotMessage: {
      en: 'Three currents, one variable! 🌊 Set "steps" fresh before each current and repeat in that direction.',
      id: 'Tiga arus, satu variabel! 🌊 Atur "langkah" baru sebelum setiap arus dan ulangi ke arah itu.',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[2][3] = 'obstacle'
      g[3][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [4, 4] },
      { id: 'g3', pos: [4, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables'],
    optimalBlockCount: 15,
    xpReward: 225,
    hints: [
      { en: 'Three legs: right 4, down 4, right 3. Reset "steps" to a new number before each one.', id: 'Tiga bagian: kanan 4, bawah 4, kanan 3. Atur ulang "langkah" ke angka baru sebelum masing-masing.' },
      { en: 'The coral is out of the way if you go straight for each leg — no need to dodge if you follow the plan!', id: 'Karangnya tidak menghalangi jika kamu berjalan lurus untuk setiap bagian — tidak perlu menghindar jika mengikuti rencana!' },
    ],
    starThresholds: [20, 15],
  },
  {
    id: 'ocean-8',
    worldId: 'ocean',
    number: 8,
    title: { en: 'Deep Current Maze', id: 'Labirin Arus Dalam' },
    story: {
      en: 'The deepest reef yet — four obstacles and four gems scattered across a wide stretch of ocean floor. Plan every leg of the journey!',
      id: 'Terumbu terdalam — empat rintangan dan empat permata tersebar di dasar samudra yang luas. Rencanakan setiap bagian perjalanan!',
    },
    mascotMessage: {
      en: "So many rocks down here! 🪨 Take it gem by gem and plan a safe route around each obstacle.",
      id: 'Banyak sekali batu di sini! 🪨 Kumpulkan permata satu demi satu dan rencanakan rute aman di sekitar setiap rintangan.',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[1][2] = 'obstacle'
      g[3][5] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [3, 7] },
      { id: 'g3', pos: [5, 3] },
      { id: 'g4', pos: [7, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 21,
    xpReward: 240,
    hints: [
      { en: 'Gem 1 is a straight swim right along the top. Then head right and down to gem 2.', id: 'Permata 1 adalah renang lurus ke kanan di bagian atas. Lalu ke kanan dan turun ke permata 2.' },
      { en: 'From gem 2, go down then left to gem 3. From gem 3, go down then right to gem 4 — watch the rocks!', id: 'Dari permata 2, turun lalu kiri ke permata 3. Dari permata 3, turun lalu kanan ke permata 4 — waspada batunya!' },
    ],
    starThresholds: [31, 21],
  },
  {
    id: 'ocean-9',
    worldId: 'ocean',
    number: 9,
    title: { en: 'Tide Pool Challenge', id: 'Tantangan Kolam Pasang' },
    story: {
      en: 'A tide pool blocks the straight route to the second gem! Reuse your "steps" variable for the clear stretches, then swim around the coral by hand.',
      id: 'Kolam pasang menghalangi rute lurus ke permata kedua! Pakai ulang variabel "langkah" untuk bagian yang bersih, lalu berenang mengitari karang secara manual.',
    },
    mascotMessage: {
      en: 'Not every stretch is clear! 🪸 Use your variable trick where you can swim straight, and swim around the coral by hand where you can\'t.',
      id: 'Tidak semua bagian bersih! 🪸 Gunakan trik variabelmu di bagian yang bisa berenang lurus, dan berenang mengitari karang secara manual di bagian yang tidak.',
    },
    gridRows: 7,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(7, 10)
      g[3][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [6, 6] },
      { id: 'g3', pos: [6, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables'],
    optimalBlockCount: 18,
    xpReward: 255,
    hints: [
      { en: 'Set "steps" to 6 and repeat right to reach gem 1 — the top row is clear.', id: 'Atur "langkah" ke 6 dan ulangi kanan untuk mencapai permata 1 — baris atas bersih.' },
      { en: 'Coral blocks the straight dive down! Go down 2, right 1, down 3, left 1, down 1 by hand instead, then set "steps" to 3 and repeat right for gem 3.', id: 'Karang menghalangi selaman lurus ke bawah! Turun 2, kanan 1, turun 3, kiri 1, turun 1 secara manual, lalu atur "langkah" ke 3 dan ulangi kanan untuk permata 3.' },
    ],
    starThresholds: [25, 18],
  },
  {
    id: 'ocean-10',
    worldId: 'ocean',
    number: 10,
    title: { en: 'Ocean Grandmaster', id: 'Grandmaster Samudra' },
    story: {
      en: 'The deepest, widest dive yet! Three rocky obstacles, four gems, and every trick Finn has learned — variables, loops, and careful navigation.',
      id: 'Selaman terdalam dan terluas! Tiga rintangan berbatu, empat permata, dan semua trik yang dipelajari Finn — variabel, perulangan, dan navigasi cermat.',
    },
    mascotMessage: {
      en: "This is one of my deepest dives yet! 🌊🏆 Reuse your variable for the clear stretches, and navigate the rocks by hand where you must. You're an Ocean Grandmaster!",
      id: 'Ini salah satu selaman terdalamku! 🌊🏆 Pakai ulang variabelmu di bagian bersih, dan navigasi batu secara manual jika perlu. Kamu Grandmaster Samudra!',
    },
    gridRows: 9,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(9, 8)
      g[2][5] = 'obstacle'
      g[4][2] = 'obstacle'
      g[6][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 7] },
      { id: 'g2', pos: [4, 4] },
      { id: 'g3', pos: [7, 2] },
      { id: 'g4', pos: [8, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 22,
    xpReward: 280,
    hints: [
      { en: 'Set "steps" to 7 and repeat right for gem 1 — the top row is clear all the way.', id: 'Atur "langkah" ke 7 dan ulangi kanan untuk permata 1 — baris atas bersih sepanjang jalan.' },
      { en: 'For gem 2, go down 4, left 3. For gem 3, go down 3, left 2. For gem 4, go down 1, right 4 — no obstacle sits on any of these three legs.', id: 'Untuk permata 2, turun 4, kiri 3. Untuk permata 3, turun 3, kiri 2. Untuk permata 4, turun 1, kanan 4 — tidak ada rintangan di ketiga bagian ini.' },
    ],
    starThresholds: [32, 22],
  },
  {
    id: 'ocean-11',
    worldId: 'ocean',
    number: 11,
    title: { en: 'Rip Current Detour', id: 'Memutari Arus Deras' },
    story: {
      en: 'A powerful rip current pulls Finn along, but sharp coral blocks the straight path — twice! Reuse your "steps" variable for the clear stretches, and swim around the coral by hand where you must.',
      id: 'Arus deras yang kuat menarik Finn, tapi karang tajam memblokir jalur lurus — dua kali! Pakai ulang variabel "langkah" untuk bagian yang bersih, dan berenang mengitari karang secara manual jika perlu.',
    },
    mascotMessage: {
      en: 'Two patches of coral this time! 🪸 Reset "steps" before each clear stretch, and swim around by hand when the coral gets in the way.',
      id: 'Dua bongkah karang kali ini! 🪸 Atur ulang "langkah" sebelum setiap bagian bersih, dan berenang mengitari secara manual saat karang menghalangi.',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][8] = 'obstacle'
      g[3][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 8] },
      { id: 'g2', pos: [2, 3] },
      { id: 'g3', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 23,
    xpReward: 300,
    hints: [
      { en: 'Set "steps" to 8 and repeat right for gem 1 — the top row is clear all the way.', id: 'Atur "langkah" ke 8 dan ulangi kanan untuk permata 1 — baris atas bersih sepanjang jalan.' },
      { en: 'Coral blocks the dive straight down after gem 1! Go left 1, down 2, right 1 by hand, then set "steps" to 5 and repeat left for gem 2. Coral blocks the next dive too — go right 1, down 2, left 1 by hand, then set "steps" to 3 and repeat down for gem 3.', id: 'Karang menghalangi selaman lurus ke bawah setelah permata 1! Jalan kiri 1, bawah 2, kanan 1 secara manual, lalu atur "langkah" ke 5 dan ulangi kiri untuk permata 2. Karang menghalangi lagi — jalan kanan 1, bawah 2, kiri 1 secara manual, lalu atur "langkah" ke 3 dan ulangi bawah untuk permata 3.' },
    ],
    starThresholds: [33, 23],
  },
  {
    id: 'ocean-12',
    worldId: 'ocean',
    number: 12,
    title: { en: 'Rising Tide', id: 'Pasang Naik' },
    story: {
      en: 'The tide is rising, and each swim needs to be longer than the last! Finn discovers a new trick: set "steps" to steps PLUS a little more before each stretch, instead of picking a fresh number every time.',
      id: 'Air pasang sedang naik, dan setiap renang perlu lebih jauh dari sebelumnya! Finn menemukan trik baru: atur "langkah" menjadi langkah DITAMBAH sedikit lagi sebelum setiap bagian, bukan memilih angka baru setiap kali.',
    },
    mascotMessage: {
      en: 'New trick! 🌊 Instead of a fresh number, set "steps" to "steps + 2" — the SAME variable, built on its own last value!',
      id: 'Trik baru! 🌊 Alih-alih angka baru, atur "langkah" menjadi "langkah + 2" — variabel yang SAMA, dibangun dari nilai terakhirnya sendiri!',
    },
    gridRows: 5,
    gridCols: 9,
    cells: emptyGrid(5, 9),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 2] },
      { id: 'g2', pos: [4, 2] },
      { id: 'g3', pos: [4, 8] },
      { id: 'g4', pos: [4, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 26,
    xpReward: 320,
    hints: [
      { en: 'Set "steps" to 2 and repeat right for gem 1. For gem 2, find "steps + 2" in Variables/Math, plug in "steps" and 2, and set "steps" to that — then repeat down.', id: 'Atur "langkah" ke 2 dan ulangi kanan untuk permata 1. Untuk permata 2, cari "langkah + 2" di Variabel/Matematika, pasang "langkah" dan 2, lalu atur "langkah" ke hasilnya — kemudian ulangi bawah.' },
      { en: 'Keep adding 2 each time: gem 3 needs "steps + 2" again (repeat right), and gem 4 needs "steps + 2" once more (repeat left) — steps grows 2, 4, 6, 8!', id: 'Terus tambahkan 2 setiap kali: permata 3 butuh "langkah + 2" lagi (ulangi kanan), dan permata 4 butuh "langkah + 2" sekali lagi (ulangi kiri) — langkah bertambah 2, 4, 6, 8!' },
    ],
    starThresholds: [38, 26],
  },
  {
    id: 'ocean-13',
    worldId: 'ocean',
    number: 13,
    title: { en: 'Shipwreck Salvage', id: 'Penyelamatan Kapal Karam' },
    story: {
      en: 'An old shipwreck rests on the ocean floor, its broken hull scattered everywhere. Finn must salvage gems from the wreckage, weaving carefully between the debris.',
      id: 'Kapal karam tua beristirahat di dasar samudra, lambungnya yang pecah tersebar di mana-mana. Finn harus menyelamatkan permata dari puing-puing, berkelok hati-hati di antara reruntuhan.',
    },
    mascotMessage: {
      en: 'So much wreckage down here! ⚓ Take it piece by piece and find a safe path around every broken plank.',
      id: 'Banyak sekali reruntuhan di sini! ⚓ Ambil satu per satu dan cari jalur aman di sekitar setiap papan yang patah.',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][5] = 'obstacle'
      g[2][5] = 'obstacle'
      g[2][1] = 'obstacle'
      g[4][4] = 'obstacle'
      g[6][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 5] },
      { id: 'g2', pos: [3, 5] },
      { id: 'g3', pos: [6, 2] },
      { id: 'g4', pos: [7, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    optimalBlockCount: 22,
    xpReward: 340,
    hints: [
      { en: 'Gem 1 is a straight swim right along the top. Then go right 1, down 3, left 1 to reach gem 2 — the wreckage blocks a straight dive down.', id: 'Permata 1 adalah renang lurus ke kanan di bagian atas. Lalu jalan kanan 1, bawah 3, kiri 1 untuk mencapai permata 2 — reruntuhan menghalangi selaman lurus ke bawah.' },
      { en: 'From gem 2, go down 2, left 3, down 1 to gem 3. From gem 3, go down 1, right 5 to gem 4 — the bottom row is clear all the way.', id: 'Dari permata 2, jalan bawah 2, kiri 3, bawah 1 ke permata 3. Dari permata 3, jalan bawah 1, kanan 5 ke permata 4 — baris bawah bersih sepanjang jalan.' },
    ],
    starThresholds: [32, 22],
  },
  {
    id: 'ocean-14',
    worldId: 'ocean',
    number: 14,
    title: { en: 'Bioluminescent Bay', id: 'Teluk Bercahaya' },
    story: {
      en: 'Glowing plankton light up the night water! Finn follows their trail across five long stretches, reusing "steps" each time and swimming around one dark patch of coral by hand.',
      id: 'Plankton bercahaya menerangi air malam! Finn mengikuti jejaknya melintasi lima bagian panjang, memakai ulang "langkah" setiap kali dan berenang mengitari satu bongkah karang gelap secara manual.',
    },
    mascotMessage: {
      en: 'Five glowing stretches to swim! ✨ Reuse "steps" for each one, and hand-navigate around the one dark patch of coral in the middle.',
      id: 'Lima bagian bercahaya untuk direnangi! ✨ Pakai ulang "langkah" untuk masing-masing, dan navigasi manual mengitari satu bongkah karang gelap di tengah.',
    },
    gridRows: 9,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(9, 8)
      g[4][4] = 'obstacle'
      g[7][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [4, 6] },
      { id: 'g3', pos: [4, 2] },
      { id: 'g4', pos: [8, 2] },
      { id: 'g5', pos: [8, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 26,
    xpReward: 365,
    hints: [
      { en: 'Set "steps" to 6, repeat right for gem 1. Set "steps" to 4, repeat down for gem 2. Coral blocks the straight swim left after that — go down 1, left 4, up 1 by hand for gem 3.', id: 'Atur "langkah" ke 6, ulangi kanan untuk permata 1. Atur "langkah" ke 4, ulangi bawah untuk permata 2. Karang menghalangi renang lurus ke kiri setelah itu — jalan bawah 1, kiri 4, atas 1 secara manual untuk permata 3.' },
      { en: 'Set "steps" to 4 again and repeat down for gem 4. Then set "steps" to 3 and repeat right for the fifth and final gem!', id: 'Atur "langkah" ke 4 lagi dan ulangi bawah untuk permata 4. Lalu atur "langkah" ke 3 dan ulangi kanan untuk permata kelima dan terakhir!' },
    ],
    starThresholds: [38, 26],
  },
  {
    id: 'ocean-15',
    worldId: 'ocean',
    number: 15,
    title: { en: 'Anglerfish Alley', id: 'Lorong Ikan Angler' },
    story: {
      en: "Deep in a dark alley of rock, an anglerfish's glow is the only light. Finn combines his growing-steps trick with a hand-swum detour around a jagged rock.",
      id: 'Jauh di lorong batu yang gelap, cahaya ikan angler adalah satu-satunya penerangan. Finn menggabungkan trik langkah-yang-bertambah dengan jalan memutar manual di sekitar batu tajam.',
    },
    mascotMessage: {
      en: 'Growing steps AND a detour in one level! 🐟 Add to "steps" for the clear stretches, and swim around the rock by hand in between.',
      id: 'Langkah bertambah DAN jalan memutar dalam satu level! 🐟 Tambahkan ke "langkah" untuk bagian bersih, dan berenang mengitari batu secara manual di antaranya.',
    },
    gridRows: 8,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(8, 11)
      g[4][4] = 'obstacle'
      g[1][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 3] },
      { id: 'g2', pos: [4, 3] },
      { id: 'g3', pos: [4, 5] },
      { id: 'g4', pos: [4, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 23,
    xpReward: 390,
    hints: [
      { en: 'Set "steps" to 3, repeat right for gem 1. Set "steps" to "steps + 1" (now 4), repeat down for gem 2.', id: 'Atur "langkah" ke 3, ulangi kanan untuk permata 1. Atur "langkah" ke "langkah + 1" (sekarang 4), ulangi bawah untuk permata 2.' },
      { en: 'A rock blocks the straight path from gem 2! Go down 1, right 2, up 1 by hand for gem 3. Then set "steps" to "steps + 1" again (now 5) and repeat right for the final gem.', id: 'Batu menghalangi jalur lurus dari permata 2! Jalan bawah 1, kanan 2, atas 1 secara manual untuk permata 3. Lalu atur "langkah" ke "langkah + 1" lagi (sekarang 5) dan ulangi kanan untuk permata terakhir.' },
    ],
    starThresholds: [33, 23],
  },
  {
    id: 'ocean-16',
    worldId: 'ocean',
    number: 16,
    title: { en: 'Octopus Maze', id: 'Labirin Gurita' },
    story: {
      en: 'A shy octopus has tangled the currents into a winding maze. Finn must reuse "steps" across four long stretches and swim around two stretches of rock by hand.',
      id: 'Gurita pemalu telah mengusutkan arus menjadi labirin berliku. Finn harus memakai ulang "langkah" di empat bagian panjang dan berenang mengitari dua bagian berbatu secara manual.',
    },
    mascotMessage: {
      en: 'This maze has FOUR variable stretches and TWO rocky detours! 🐙 Take your time and plan each turn carefully.',
      id: 'Labirin ini punya EMPAT bagian variabel dan DUA jalan memutar berbatu! 🐙 Ambil waktumu dan rencanakan setiap belokan dengan hati-hati.',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[5][4] = 'obstacle'
      g[8][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [5, 6] },
      { id: 'g3', pos: [5, 2] },
      { id: 'g4', pos: [8, 2] },
      { id: 'g5', pos: [8, 4] },
      { id: 'g6', pos: [8, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 32,
    xpReward: 420,
    hints: [
      { en: 'Set "steps" to 6, repeat right for gem 1. Set "steps" to 5, repeat down for gem 2. Rock blocks the swim left — go down 1, left 4, up 1 by hand for gem 3.', id: 'Atur "langkah" ke 6, ulangi kanan untuk permata 1. Atur "langkah" ke 5, ulangi bawah untuk permata 2. Batu menghalangi renang ke kiri — jalan bawah 1, kiri 4, atas 1 secara manual untuk permata 3.' },
      { en: 'Set "steps" to 3, repeat down for gem 4. Set "steps" to 2, repeat right for gem 5. One more rock blocks the swim right — go up 1, right 4, down 1 by hand for the final gem!', id: 'Atur "langkah" ke 3, ulangi bawah untuk permata 4. Atur "langkah" ke 2, ulangi kanan untuk permata 5. Satu batu lagi menghalangi renang ke kanan — jalan atas 1, kanan 4, bawah 1 secara manual untuk permata terakhir!' },
    ],
    starThresholds: [46, 32],
  },
  {
    id: 'ocean-17',
    worldId: 'ocean',
    number: 17,
    title: { en: 'Whirlpool Vortex', id: 'Pusaran Air' },
    story: {
      en: "A whirlpool spins Finn in a zigzag path, with jagged rock at every turn. He'll need his growing-steps trick twice, and two hand-swum detours to get past the rocks.",
      id: 'Pusaran air memutar Finn dalam jalur zigzag, dengan batu tajam di setiap belokan. Dia perlu trik langkah-bertambah dua kali, dan dua jalan memutar manual untuk melewati batu-batu itu.',
    },
    mascotMessage: {
      en: 'Rocks at every turn! 🌀 Use "steps + 2" or "steps + 1" to grow your variable, and swim around each rock by hand when you reach it.',
      id: 'Batu di setiap belokan! 🌀 Gunakan "langkah + 2" atau "langkah + 1" untuk menumbuhkan variabelmu, dan berenang mengitari setiap batu secara manual saat mencapainya.',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][3] = 'obstacle'
      g[7][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 3] },
      { id: 'g2', pos: [2, 3] },
      { id: 'g3', pos: [7, 3] },
      { id: 'g4', pos: [7, 5] },
      { id: 'g5', pos: [3, 5] },
      { id: 'g6', pos: [3, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 32,
    xpReward: 450,
    hints: [
      { en: 'Set "steps" to 3, repeat right for gem 1. A rock blocks the dive straight down — go right 1, down 2, left 1 by hand for gem 2. Set "steps" to "steps + 2" (now 5) and repeat down for gem 3.', id: 'Atur "langkah" ke 3, ulangi kanan untuk permata 1. Batu menghalangi selaman lurus ke bawah — jalan kanan 1, bawah 2, kiri 1 secara manual untuk permata 2. Atur "langkah" ke "langkah + 2" (sekarang 5) dan ulangi bawah untuk permata 3.' },
      { en: 'Another rock blocks the swim right — go up 1, right 2, down 1 by hand for gem 4. Set "steps" to 4 and repeat up for gem 5. Set "steps" to "steps + 1" (now 5) and repeat left for the final gem.', id: 'Batu lain menghalangi renang ke kanan — jalan atas 1, kanan 2, bawah 1 secara manual untuk permata 4. Atur "langkah" ke 4 dan ulangi atas untuk permata 5. Atur "langkah" ke "langkah + 1" (sekarang 5) dan ulangi kiri untuk permata terakhir.' },
    ],
    starThresholds: [46, 32],
  },
  {
    id: 'ocean-18',
    worldId: 'ocean',
    number: 18,
    title: { en: 'Abyssal Trench', id: 'Palung Terdalam' },
    story: {
      en: 'The deepest trench yet — seven long stretches wind past three rocky hazards. Finn reuses "steps" five times and hand-swims around two real blockages.',
      id: 'Palung terdalam sejauh ini — tujuh bagian panjang berkelok melewati tiga bahaya berbatu. Finn memakai ulang "langkah" lima kali dan berenang manual mengitari dua penghalang sungguhan.',
    },
    mascotMessage: {
      en: 'Seven stretches in one dive! 🌑 Five use your "steps" variable, and two need a careful hand-swum detour around the rocks.',
      id: 'Tujuh bagian dalam satu selaman! 🌑 Lima menggunakan variabel "langkah"-mu, dan dua butuh jalan memutar manual yang hati-hati mengitari batu.',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[6][6] = 'obstacle'
      g[8][7] = 'obstacle'
      g[2][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 5] },
      { id: 'g2', pos: [6, 5] },
      { id: 'g3', pos: [6, 8] },
      { id: 'g4', pos: [8, 8] },
      { id: 'g5', pos: [8, 4] },
      { id: 'g6', pos: [8, 0] },
      { id: 'g7', pos: [5, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 36,
    xpReward: 490,
    hints: [
      { en: 'Set "steps" to 5, repeat right for gem 1. Set "steps" to 6, repeat down for gem 2. Rock blocks the swim right — go down 1, right 3, up 1 by hand for gem 3.', id: 'Atur "langkah" ke 5, ulangi kanan untuk permata 1. Atur "langkah" ke 6, ulangi bawah untuk permata 2. Batu menghalangi renang ke kanan — jalan bawah 1, kanan 3, atas 1 secara manual untuk permata 3.' },
      { en: 'Set "steps" to 2, repeat down for gem 4. Another rock blocks the swim left — go up 1, left 4, down 1 by hand for gem 5. Then set "steps" to 4, repeat left for gem 6, and set "steps" to 3, repeat up for the final gem.', id: 'Atur "langkah" ke 2, ulangi bawah untuk permata 4. Batu lain menghalangi renang ke kiri — jalan atas 1, kiri 4, bawah 1 secara manual untuk permata 5. Lalu atur "langkah" ke 4, ulangi kiri untuk permata 6, dan atur "langkah" ke 3, ulangi atas untuk permata terakhir.' },
    ],
    starThresholds: [52, 36],
  },
  {
    id: 'ocean-19',
    worldId: 'ocean',
    number: 19,
    title: { en: "Leviathan's Path", id: 'Jejak Leviathan' },
    story: {
      en: 'A legendary leviathan once swam this exact trench! Finn follows its ancient path — resetting "steps" fresh twice, growing it three times, and hand-swimming around two real blockages.',
      id: 'Leviathan legendaris pernah berenang di palung ini! Finn mengikuti jalur kunonya — mengatur ulang "langkah" dengan angka baru dua kali, menumbuhkannya tiga kali, dan berenang manual mengitari dua penghalang sungguhan.',
    },
    mascotMessage: {
      en: 'This is the leviathan\'s own path! 🐋 Some stretches need a fresh number for "steps", others need "steps + 1" or "steps + 2" — read carefully!',
      id: 'Ini jalur milik sang leviathan sendiri! 🐋 Beberapa bagian butuh angka baru untuk "langkah", yang lain butuh "langkah + 1" atau "langkah + 2" — baca dengan cermat!',
    },
    gridRows: 10,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(10, 9)
      g[6][5] = 'obstacle'
      g[9][6] = 'obstacle'
      g[2][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [6, 4] },
      { id: 'g3', pos: [6, 7] },
      { id: 'g4', pos: [9, 7] },
      { id: 'g5', pos: [9, 3] },
      { id: 'g6', pos: [5, 3] },
      { id: 'g7', pos: [5, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 42,
    xpReward: 530,
    hints: [
      { en: 'Set "steps" to 4, repeat right for gem 1. Set "steps" to "steps + 2" (now 6), repeat down for gem 2. Rock blocks the swim right — go down 1, right 3, up 1 by hand for gem 3.', id: 'Atur "langkah" ke 4, ulangi kanan untuk permata 1. Atur "langkah" ke "langkah + 2" (sekarang 6), ulangi bawah untuk permata 2. Batu menghalangi renang ke kanan — jalan bawah 1, kanan 3, atas 1 secara manual untuk permata 3.' },
      { en: 'Set "steps" to 3 (a fresh number), repeat down for gem 4. Another rock blocks the swim left — go up 1, left 4, down 1 by hand for gem 5. Set "steps" to "steps + 1" (now 4), repeat up for gem 6, then "steps + 1" again (now 5), repeat right for the final gem.', id: 'Atur "langkah" ke 3 (angka baru), ulangi bawah untuk permata 4. Batu lain menghalangi renang ke kiri — jalan atas 1, kiri 4, bawah 1 secara manual untuk permata 5. Atur "langkah" ke "langkah + 1" (sekarang 4), ulangi atas untuk permata 6, lalu "langkah + 1" lagi (sekarang 5), ulangi kanan untuk permata terakhir.' },
    ],
    starThresholds: [61, 42],
  },
  {
    id: 'ocean-20',
    worldId: 'ocean',
    number: 20,
    title: { en: 'Ocean Sovereign', id: 'Penguasa Samudra' },
    story: {
      en: 'The widest, deepest dive of all — eight long stretches, three real rocky blockages, and every trick Finn has ever learned. Master this, and you rule the ocean itself.',
      id: 'Selaman terluas dan terdalam dari semuanya — delapan bagian panjang, tiga penghalang berbatu sungguhan, dan semua trik yang pernah dipelajari Finn. Kuasai ini, dan kamu menguasai samudra itu sendiri.',
    },
    mascotMessage: {
      en: 'This is it — the biggest dive of all! 🌊👑 Reuse and grow "steps" for every clear stretch, and swim around all three rocks by hand. You\'re an Ocean Sovereign!',
      id: 'Inilah dia — selaman terbesar dari semuanya! 🌊👑 Pakai ulang dan tumbuhkan "langkah" untuk setiap bagian bersih, dan berenang mengitari ketiga batu secara manual. Kamu Penguasa Samudra!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[7][6] = 'obstacle'
      g[9][7] = 'obstacle'
      g[6][4] = 'obstacle'
      g[2][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 5] },
      { id: 'g2', pos: [7, 5] },
      { id: 'g3', pos: [7, 8] },
      { id: 'g4', pos: [9, 8] },
      { id: 'g5', pos: [9, 3] },
      { id: 'g6', pos: [6, 3] },
      { id: 'g7', pos: [6, 5] },
      { id: 'g8', pos: [6, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables'],
    requiredCategories: ['variables', 'loops'],
    optimalBlockCount: 47,
    xpReward: 600,
    hints: [
      { en: 'Set "steps" to 5, repeat right for gem 1. Set "steps" to "steps + 2" (now 7), repeat down for gem 2. Rock blocks the swim right — go down 1, right 3, up 1 by hand for gem 3. Set "steps" to 2, repeat down for gem 4.', id: 'Atur "langkah" ke 5, ulangi kanan untuk permata 1. Atur "langkah" ke "langkah + 2" (sekarang 7), ulangi bawah untuk permata 2. Batu menghalangi renang ke kanan — jalan bawah 1, kanan 3, atas 1 secara manual untuk permata 3. Atur "langkah" ke 2, ulangi bawah untuk permata 4.' },
      { en: 'Another rock blocks the swim left — go up 1, left 5, down 1 by hand for gem 5. Set "steps" to "steps + 1" (now 3), repeat up for gem 6. A third rock blocks the swim right — go up 1, right 2, down 1 by hand for gem 7. Set "steps" to "steps + 1" (now 4), repeat right for the final gem!', id: 'Batu lain menghalangi renang ke kiri — jalan atas 1, kiri 5, bawah 1 secara manual untuk permata 5. Atur "langkah" ke "langkah + 1" (sekarang 3), ulangi atas untuk permata 6. Batu ketiga menghalangi renang ke kanan — jalan atas 1, kanan 2, bawah 1 secara manual untuk permata 7. Atur "langkah" ke "langkah + 1" (sekarang 4), ulangi kanan untuk permata terakhir!' },
    ],
    starThresholds: [68, 47],
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
      en: 'A tough cave challenge! Use everything you know — loops, variables, AND conditions — to make it through!',
      id: 'Tantangan gua yang berat! Gunakan segalanya — perulangan, variabel, DAN kondisi — untuk melewatinya!',
    },
    mascotMessage: {
      en: "A big cave level! 💎 Use loops, variables, and if-else together! You're amazing! 🧝✨",
      id: 'Level gua yang besar! 💎 Gunakan perulangan, variabel, dan jika-selain bersama! Kamu luar biasa! 🧝✨',
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
  {
    id: 'caves-7',
    worldId: 'caves',
    number: 7,
    title: { en: 'The Fork', id: 'Persimpangan' },
    story: {
      en: 'The cave splits into a fork of tunnels, each holding a crystal. Zara must use IF blocks to check her path at every turn.',
      id: 'Gua terbagi menjadi persimpangan terowongan, masing-masing menyimpan kristal. Zara harus menggunakan blok JIKA untuk memeriksa jalurnya di setiap belokan.',
    },
    mascotMessage: {
      en: 'Every tunnel needs a decision! 🧝 Wrap each leg of your journey in an IF block to check you\'re on the right path.',
      id: 'Setiap terowongan butuh keputusan! 🧝 Bungkus setiap bagian perjalananmu dalam blok JIKA untuk memeriksa kamu di jalur yang benar.',
    },
    gridRows: 8,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(8, 7)
      g[1][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 5] },
      { id: 'c2', pos: [3, 2] },
      { id: 'c3', pos: [5, 6] },
      { id: 'c4', pos: [7, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 22,
    xpReward: 260,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top of the cave.', id: 'Kristal 1 adalah jalan lurus ke kanan di bagian atas gua.' },
      { en: 'From crystal 1, go left then down to crystal 2. From crystal 2, down then right to crystal 3. From crystal 3, down then left to crystal 4.', id: 'Dari kristal 1, kiri lalu turun ke kristal 2. Dari kristal 2, turun lalu kanan ke kristal 3. Dari kristal 3, turun lalu kiri ke kristal 4.' },
    ],
    starThresholds: [42, 30, 26, 22],
  },
  {
    id: 'caves-8',
    worldId: 'caves',
    number: 8,
    title: { en: 'Crystal Vault', id: 'Ruang Kristal' },
    story: {
      en: 'A vault deep in the caves holds five crystals, guarded by five scattered boulders. Zara must think carefully at every step.',
      id: 'Ruang bawah tanah di dalam gua menyimpan lima kristal, dijaga oleh lima batu besar yang tersebar. Zara harus berpikir cermat di setiap langkah.',
    },
    mascotMessage: {
      en: 'Five crystals, five boulders! 💜 Take your time — plan the safe route to each one before you build your code.',
      id: 'Lima kristal, lima batu besar! 💜 Luangkan waktu — rencanakan rute aman ke masing-masing sebelum menyusun kode.',
    },
    gridRows: 9,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(9, 8)
      g[1][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[4][1] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 6] },
      { id: 'c2', pos: [2, 2] },
      { id: 'c3', pos: [4, 6] },
      { id: 'c4', pos: [6, 2] },
      { id: 'c5', pos: [8, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 29,
    xpReward: 270,
    hints: [
      { en: 'Crystal 1 is a straight walk right. Then go left then down to crystal 2.', id: 'Kristal 1 adalah jalan lurus ke kanan. Lalu kiri lalu turun ke kristal 2.' },
      { en: 'Crystal 2 → 3: down, then right. Crystal 3 → 4: left, then down. Crystal 4 → 5: down, then right.', id: 'Kristal 2 → 3: turun, lalu kanan. Kristal 3 → 4: kiri, lalu turun. Kristal 4 → 5: turun, lalu kanan.' },
    ],
    starThresholds: [56, 40, 35, 29],
  },
  {
    id: 'caves-9',
    worldId: 'caves',
    number: 9,
    title: { en: 'The Deep Vault', id: 'Ruang Bawah Tanah' },
    story: {
      en: 'The deepest vault yet — six crystals scattered across a maze of seven boulders. Every decision matters down here.',
      id: 'Ruang bawah tanah terdalam — enam kristal tersebar di antara labirin tujuh batu besar. Setiap keputusan penting di sini.',
    },
    mascotMessage: {
      en: "So many boulders! 🪨 Break the journey into legs, one crystal at a time, and check your path before each move.",
      id: 'Banyak sekali batu besar! 🪨 Bagi perjalanan menjadi beberapa bagian, satu kristal setiap kali, dan periksa jalurmu sebelum setiap gerakan.',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[1][5] = 'obstacle'
      g[2][2] = 'obstacle'
      g[3][7] = 'obstacle'
      g[5][4] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][6] = 'obstacle'
      g[8][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 7] },
      { id: 'c2', pos: [2, 5] },
      { id: 'c3', pos: [4, 8] },
      { id: 'c4', pos: [6, 3] },
      { id: 'c5', pos: [8, 7] },
      { id: 'c6', pos: [8, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 31,
    xpReward: 280,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top. Then down, then left to crystal 2.', id: 'Kristal 1 adalah jalan lurus ke kanan di bagian atas. Lalu turun, lalu kiri ke kristal 2.' },
      { en: 'Crystal 2 → 3: down, then right. 3 → 4: left, then down. 4 → 5: right, then down. 5 → 6: just right!', id: 'Kristal 2 → 3: turun, lalu kanan. 3 → 4: kiri, lalu turun. 4 → 5: kanan, lalu turun. 5 → 6: cukup kanan!' },
    ],
    starThresholds: [60, 43, 37, 31],
  },
  {
    id: 'caves-10',
    worldId: 'caves',
    number: 10,
    title: { en: 'Cave Grandmaster', id: 'Grandmaster Gua' },
    story: {
      en: 'One of the toughest cave trials yet! Six crystals, eight boulders, and one of the biggest caverns Zara has explored so far. Every skill she has learned comes together here.',
      id: 'Salah satu uji coba gua tersulit sejauh ini! Enam kristal, delapan batu besar, dan salah satu gua terbesar yang pernah Zara jelajahi. Semua keahlian yang dia pelajari bersatu di sini.',
    },
    mascotMessage: {
      en: "This is one of the deepest caverns yet! 🔮 Use loops for the straight legs and if-else to guide every decision. You're a true Cave Grandmaster! 🧝✨",
      id: 'Ini salah satu gua terdalam yang pernah ada! 🔮 Gunakan perulangan untuk bagian lurus dan jika-selain untuk memandu setiap keputusan. Kamu Grandmaster Gua sejati! 🧝✨',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][6] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][8] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][5] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][2] = 'obstacle'
      g[8][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 8] },
      { id: 'c2', pos: [2, 5] },
      { id: 'c3', pos: [4, 9] },
      { id: 'c4', pos: [6, 2] },
      { id: 'c5', pos: [8, 8] },
      { id: 'c6', pos: [9, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 41,
    xpReward: 320,
    hints: [
      { en: 'Crystal 1 is a straight walk right. Then down, then left to crystal 2.', id: 'Kristal 1 adalah jalan lurus ke kanan. Lalu turun, lalu kiri ke kristal 2.' },
      { en: 'Crystal 2 → 3: down, then right. 3 → 4: left, then down. 4 → 5: right, then down. 5 → 6: down, then left.', id: 'Kristal 2 → 3: turun, lalu kanan. 3 → 4: kiri, lalu turun. 4 → 5: kanan, lalu turun. 5 → 6: turun, lalu kiri.' },
    ],
    starThresholds: [78, 56, 49, 41],
  },
  {
    id: 'caves-11',
    worldId: 'caves',
    number: 11,
    title: { en: 'Sunken Chamber', id: 'Ruang Tenggelam' },
    story: {
      en: 'A flooded chamber sits below the vault, its crystals scattered around water-worn boulders. Zara wades carefully, checking every path before she steps.',
      id: 'Ruang yang terendam air berada di bawah ruang bawah tanah, kristalnya tersebar di antara batu besar yang terkikis air. Zara melangkah hati-hati, memeriksa setiap jalur sebelum melangkah.',
    },
    mascotMessage: {
      en: 'Six crystals wait below the waterline! 💧 Use if-else to check your path around every boulder before you commit to a move.',
      id: 'Enam kristal menanti di bawah permukaan air! 💧 Gunakan jika-selain untuk memeriksa jalurmu di sekitar setiap batu besar sebelum melangkah.',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][1] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][7] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][7] = 'obstacle'
      g[8][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 8] },
      { id: 'c2', pos: [3, 5] },
      { id: 'c3', pos: [5, 9] },
      { id: 'c4', pos: [7, 2] },
      { id: 'c5', pos: [9, 6] },
      { id: 'c6', pos: [9, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 38,
    xpReward: 330,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'From crystal 1 to 2: down 3, left 3. Crystal 2 to 3: down 2, right 4. Crystal 3 to 4: down 2, left 7. Crystal 4 to 5: down 2, right 4. Crystal 5 to 6: right 3.', id: 'Dari kristal 1 ke 2: turun 3, kiri 3. Kristal 2 ke 3: turun 2, kanan 4. Kristal 3 ke 4: turun 2, kiri 7. Kristal 4 ke 5: turun 2, kanan 4. Kristal 5 ke 6: kanan 3.' },
    ],
    starThresholds: [72, 53, 46, 38],
  },
  {
    id: 'caves-12',
    worldId: 'caves',
    number: 12,
    title: { en: 'Whispering Tunnel', id: 'Terowongan Berbisik' },
    story: {
      en: 'A long tunnel hums with echoes as Zara moves through it. Six crystals glow faintly among the boulders, each one asking for a careful decision.',
      id: 'Terowongan panjang bergema saat Zara melewatinya. Enam kristal bersinar samar di antara batu besar, masing-masing membutuhkan keputusan yang cermat.',
    },
    mascotMessage: {
      en: 'Listen to the echoes and plan each turn! 👂 Wrap your moves in if-else so you never bump a boulder in the dark.',
      id: 'Dengarkan gemanya dan rencanakan setiap belokan! 👂 Bungkus gerakanmu dalam jika-selain agar tidak menabrak batu besar dalam gelap.',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[1][2] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][8] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][5] = 'obstacle'
      g[8][6] = 'obstacle'
      g[8][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 9] },
      { id: 'c2', pos: [3, 6] },
      { id: 'c3', pos: [5, 10] },
      { id: 'c4', pos: [7, 3] },
      { id: 'c5', pos: [9, 7] },
      { id: 'c6', pos: [9, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 39,
    xpReward: 345,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'From crystal 1 to 2: down 3, left 3. Crystal 2 to 3: down 2, right 4. Crystal 3 to 4: down 2, left 7. Crystal 4 to 5: down 2, right 4. Crystal 5 to 6: right 3.', id: 'Dari kristal 1 ke 2: turun 3, kiri 3. Kristal 2 ke 3: turun 2, kanan 4. Kristal 3 ke 4: turun 2, kiri 7. Kristal 4 ke 5: turun 2, kanan 4. Kristal 5 ke 6: kanan 3.' },
    ],
    starThresholds: [74, 55, 47, 39],
  },
  {
    id: 'caves-13',
    worldId: 'caves',
    number: 13,
    title: { en: 'Obsidian Hall', id: 'Aula Obsidian' },
    story: {
      en: 'A vast hall of black glass stretches ahead, seven crystals scattered across it. Zara must combine loops and conditions to cross it safely.',
      id: 'Aula luas dari kaca hitam terbentang di depan, tujuh kristal tersebar di dalamnya. Zara harus menggabungkan perulangan dan kondisi untuk melewatinya dengan aman.',
    },
    mascotMessage: {
      en: 'The obsidian hall is huge! 🖤 Use loops for the long straight stretches and if-else at every boulder.',
      id: 'Aula obsidian ini sangat besar! 🖤 Gunakan perulangan untuk bagian lurus yang panjang dan jika-selain di setiap batu besar.',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][1] = 'obstacle'
      g[1][4] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][8] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][6] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 8] },
      { id: 'c2', pos: [2, 5] },
      { id: 'c3', pos: [4, 9] },
      { id: 'c4', pos: [6, 2] },
      { id: 'c5', pos: [7, 7] },
      { id: 'c6', pos: [9, 1] },
      { id: 'c7', pos: [9, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 50,
    xpReward: 365,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 2, left 3. 2 to 3: down 2, right 4. 3 to 4: down 2, left 7. 4 to 5: down 1, right 5. 5 to 6: down 2, left 6. 6 to 7: right 8.', id: 'Kristal 1 ke 2: turun 2, kiri 3. 2 ke 3: turun 2, kanan 4. 3 ke 4: turun 2, kiri 7. 4 ke 5: turun 1, kanan 5. 5 ke 6: turun 2, kiri 6. 6 ke 7: kanan 8.' },
    ],
    starThresholds: [95, 70, 60, 50],
  },
  {
    id: 'caves-14',
    worldId: 'caves',
    number: 14,
    title: { en: 'Glowing Abyss', id: 'Jurang Bercahaya' },
    story: {
      en: 'The tunnel opens onto a glowing abyss, its light reflecting off seven crystals and eight scattered boulders far below.',
      id: 'Terowongan terbuka menuju jurang yang bercahaya, cahayanya memantul dari tujuh kristal dan delapan batu besar yang tersebar di bawah.',
    },
    mascotMessage: {
      en: 'The glow lights the way, but the boulders are everywhere! 🔦 Check your path with if-else at every turn.',
      id: 'Cahaya menerangi jalan, tapi batu besar ada di mana-mana! 🔦 Periksa jalurmu dengan jika-selain di setiap belokan.',
    },
    gridRows: 11,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(11, 10)
      g[1][2] = 'obstacle'
      g[1][5] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][9] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][7] = 'obstacle'
      g[7][6] = 'obstacle'
      g[9][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 9] },
      { id: 'c2', pos: [2, 6] },
      { id: 'c3', pos: [4, 9] },
      { id: 'c4', pos: [6, 2] },
      { id: 'c5', pos: [8, 7] },
      { id: 'c6', pos: [10, 1] },
      { id: 'c7', pos: [10, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 51,
    xpReward: 380,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 2, left 3. 2 to 3: down 2, right 3. 3 to 4: down 2, left 7. 4 to 5: down 2, right 5. 5 to 6: down 2, left 6. 6 to 7: right 8.', id: 'Kristal 1 ke 2: turun 2, kiri 3. 2 ke 3: turun 2, kanan 3. 3 ke 4: turun 2, kiri 7. 4 ke 5: turun 2, kanan 5. 5 ke 6: turun 2, kiri 6. 6 ke 7: kanan 8.' },
    ],
    starThresholds: [97, 71, 61, 51],
  },
  {
    id: 'caves-15',
    worldId: 'caves',
    number: 15,
    title: { en: 'Molten Passage', id: 'Lorong Lava' },
    story: {
      en: 'Heat shimmers through a molten passage lined with seven crystals and nine boulders. Zara needs loops for the long stretches and if-else for every turn.',
      id: 'Panas berkilau di sepanjang lorong lava yang dipenuhi tujuh kristal dan sembilan batu besar. Zara butuh perulangan untuk bagian panjang dan jika-selain di setiap belokan.',
    },
    mascotMessage: {
      en: "It's getting hot in here! 🔥 Use loops on the long legs and if-else to dodge every boulder.",
      id: 'Semakin panas di sini! 🔥 Gunakan perulangan di bagian panjang dan jika-selain untuk menghindari setiap batu besar.',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[1][3] = 'obstacle'
      g[1][6] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][10] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][6] = 'obstacle'
      g[7][6] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 10] },
      { id: 'c2', pos: [2, 7] },
      { id: 'c3', pos: [4, 10] },
      { id: 'c4', pos: [6, 3] },
      { id: 'c5', pos: [8, 8] },
      { id: 'c6', pos: [9, 2] },
      { id: 'c7', pos: [9, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 51,
    xpReward: 395,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 2, left 3. 2 to 3: down 2, right 3. 3 to 4: down 2, left 7. 4 to 5: down 2, right 5. 5 to 6: down 1, left 6. 6 to 7: right 8.', id: 'Kristal 1 ke 2: turun 2, kiri 3. 2 ke 3: turun 2, kanan 3. 3 ke 4: turun 2, kiri 7. 4 ke 5: turun 2, kanan 5. 5 ke 6: turun 1, kiri 6. 6 ke 7: kanan 8.' },
    ],
    starThresholds: [97, 71, 61, 51],
  },
  {
    id: 'caves-16',
    worldId: 'caves',
    number: 16,
    title: { en: 'Frozen Grotto', id: 'Gua Beku' },
    story: {
      en: 'Ice coats every wall of this grotto. Seven crystals shimmer between nine frozen boulders, and one wrong step means starting the route over.',
      id: 'Es melapisi setiap dinding gua ini. Tujuh kristal berkilau di antara sembilan batu besar yang membeku, dan satu langkah salah berarti mengulang rute dari awal.',
    },
    mascotMessage: {
      en: "It's slippery in here! ❄️ Take it slow — plan every leg with if-else before you build your code.",
      id: 'Licin sekali di sini! ❄️ Pelan-pelan — rencanakan setiap bagian dengan jika-selain sebelum menyusun kode.',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][2] = 'obstacle'
      g[1][5] = 'obstacle'
      g[3][2] = 'obstacle'
      g[3][10] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][7] = 'obstacle'
      g[7][6] = 'obstacle'
      g[7][9] = 'obstacle'
      g[9][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 10] },
      { id: 'c2', pos: [2, 7] },
      { id: 'c3', pos: [4, 10] },
      { id: 'c4', pos: [6, 3] },
      { id: 'c5', pos: [8, 9] },
      { id: 'c6', pos: [10, 2] },
      { id: 'c7', pos: [10, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 54,
    xpReward: 410,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 2, left 3. 2 to 3: down 2, right 3. 3 to 4: down 2, left 7. 4 to 5: down 2, right 6. 5 to 6: down 2, left 7. 6 to 7: right 8.', id: 'Kristal 1 ke 2: turun 2, kiri 3. 2 ke 3: turun 2, kanan 3. 3 ke 4: turun 2, kiri 7. 4 ke 5: turun 2, kanan 6. 5 ke 6: turun 2, kiri 7. 6 ke 7: kanan 8.' },
    ],
    starThresholds: [103, 76, 65, 54],
  },
  {
    id: 'caves-17',
    worldId: 'caves',
    number: 17,
    title: { en: 'Echo Cavern', id: 'Gua Gema' },
    story: {
      en: 'Every footstep echoes eight times in this vast cavern. Eight crystals hide among the boulders, and Zara must think through every decision before she moves.',
      id: 'Setiap langkah kaki bergema delapan kali di gua yang luas ini. Delapan kristal tersembunyi di antara batu besar, dan Zara harus berpikir matang sebelum bergerak.',
    },
    mascotMessage: {
      en: 'Eight crystals echoing through the dark! 🗣️ Combine loops and if-else to zigzag through safely.',
      id: 'Delapan kristal bergema dalam gelap! 🗣️ Gabungkan perulangan dan jika-selain untuk zigzag dengan aman.',
    },
    gridRows: 11,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(11, 10)
      g[2][1] = 'obstacle'
      g[2][5] = 'obstacle'
      g[5][4] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][4] = 'obstacle'
      g[8][8] = 'obstacle'
      g[10][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 9] },
      { id: 'c2', pos: [1, 3] },
      { id: 'c3', pos: [3, 9] },
      { id: 'c4', pos: [4, 2] },
      { id: 'c5', pos: [6, 8] },
      { id: 'c6', pos: [7, 1] },
      { id: 'c7', pos: [9, 9] },
      { id: 'c8', pos: [10, 2] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 66,
    xpReward: 430,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 1, left 6. 2 to 3: down 2, right 6. 3 to 4: down 1, left 7. 4 to 5: down 2, right 6. 5 to 6: down 1, left 7. 6 to 7: down 2, right 8. 7 to 8: down 1, left 7.', id: 'Kristal 1 ke 2: turun 1, kiri 6. 2 ke 3: turun 2, kanan 6. 3 ke 4: turun 1, kiri 7. 4 ke 5: turun 2, kanan 6. 5 ke 6: turun 1, kiri 7. 6 ke 7: turun 2, kanan 8. 7 ke 8: turun 1, kiri 7.' },
    ],
    starThresholds: [125, 92, 79, 66],
  },
  {
    id: 'caves-18',
    worldId: 'caves',
    number: 18,
    title: { en: 'Shattered Spire', id: 'Menara Retak' },
    story: {
      en: 'A collapsed spire has scattered ten boulders and eight crystals across the widest cavern Zara has ever seen.',
      id: 'Menara yang runtuh telah menyebarkan sepuluh batu besar dan delapan kristal di gua terluas yang pernah Zara lihat.',
    },
    mascotMessage: {
      en: 'So much rubble! 🪨 Break this into small legs and check each one with if-else before you move on.',
      id: 'Banyak sekali reruntuhan! 🪨 Bagi ini menjadi bagian-bagian kecil dan periksa setiap bagian dengan jika-selain sebelum lanjut.',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][1] = 'obstacle'
      g[2][2] = 'obstacle'
      g[2][7] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][1] = 'obstacle'
      g[8][5] = 'obstacle'
      g[9][1] = 'obstacle'
      g[10][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 10] },
      { id: 'c2', pos: [1, 4] },
      { id: 'c3', pos: [3, 10] },
      { id: 'c4', pos: [4, 3] },
      { id: 'c5', pos: [6, 9] },
      { id: 'c6', pos: [7, 2] },
      { id: 'c7', pos: [9, 10] },
      { id: 'c8', pos: [10, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic'],
    optimalBlockCount: 67,
    xpReward: 445,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 1, left 6. 2 to 3: down 2, right 6. 3 to 4: down 1, left 7. 4 to 5: down 2, right 6. 5 to 6: down 1, left 7. 6 to 7: down 2, right 8. 7 to 8: down 1, left 7.', id: 'Kristal 1 ke 2: turun 1, kiri 6. 2 ke 3: turun 2, kanan 6. 3 ke 4: turun 1, kiri 7. 4 ke 5: turun 2, kanan 6. 5 ke 6: turun 1, kiri 7. 6 ke 7: turun 2, kanan 8. 7 ke 8: turun 1, kiri 7.' },
    ],
    starThresholds: [127, 94, 80, 67],
  },
  {
    id: 'caves-19',
    worldId: 'caves',
    number: 19,
    title: { en: 'Crystal Labyrinth', id: 'Labirin Kristal' },
    story: {
      en: 'A true labyrinth of tunnels and boulders spreads across the widest cavern yet. Eight crystals wait at its farthest corners.',
      id: 'Labirin sesungguhnya berupa terowongan dan batu besar terbentang di gua terluas yang pernah ada. Delapan kristal menanti di sudut-sudut terjauhnya.',
    },
    mascotMessage: {
      en: 'A real labyrinth! 🌀 Combine loops and if-else for every long stretch — you can do this!',
      id: 'Labirin sungguhan! 🌀 Gabungkan perulangan dan jika-selain untuk setiap bagian panjang — kamu pasti bisa!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][0] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][7] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][9] = 'obstacle'
      g[8][0] = 'obstacle'
      g[9][0] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 10] },
      { id: 'c2', pos: [1, 2] },
      { id: 'c3', pos: [3, 10] },
      { id: 'c4', pos: [5, 1] },
      { id: 'c5', pos: [7, 10] },
      { id: 'c6', pos: [8, 2] },
      { id: 'c7', pos: [9, 10] },
      { id: 'c8', pos: [10, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 79,
    xpReward: 460,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Crystal 1 to 2: down 1, left 8. 2 to 3: down 2, right 8. 3 to 4: down 2, left 9. 4 to 5: down 2, right 9. 5 to 6: down 1, left 8. 6 to 7: down 1, right 8. 7 to 8: down 1, left 9.', id: 'Kristal 1 ke 2: turun 1, kiri 8. 2 ke 3: turun 2, kanan 8. 3 ke 4: turun 2, kiri 9. 4 ke 5: turun 2, kanan 9. 5 ke 6: turun 1, kiri 8. 6 ke 7: turun 1, kanan 8. 7 ke 8: turun 1, kiri 9.' },
    ],
    starThresholds: [150, 111, 95, 79],
  },
  {
    id: 'caves-20',
    worldId: 'caves',
    number: 20,
    title: { en: 'Cave Sovereign', id: 'Penguasa Gua' },
    story: {
      en: "Beyond even the Grandmaster trial lies the Sovereign's Cavern — the widest, most boulder-choked chamber in all of Crystal Caves. Eight crystals wait at its farthest edges, and every leg of the journey demands a decision.",
      id: 'Melampaui bahkan uji coba Grandmaster terletak Gua Sang Penguasa — ruang terluas dan paling dipenuhi batu besar di seluruh Gua Kristal. Delapan kristal menanti di ujung-ujung terjauhnya, dan setiap bagian perjalanan membutuhkan sebuah keputusan.',
    },
    mascotMessage: {
      en: "This is it — the Sovereign's Cavern! 👑 Loops for every long stretch, if-else for every decision. Prove you're ready to rule the caves! 🧝✨",
      id: 'Inilah dia — Gua Sang Penguasa! 👑 Perulangan untuk setiap bagian panjang, jika-selain untuk setiap keputusan. Buktikan kamu siap menguasai gua ini! 🧝✨',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][6] = 'obstacle'
      g[2][9] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][5] = 'obstacle'
      g[5][8] = 'obstacle'
      g[8][3] = 'obstacle'
      g[8][6] = 'obstacle'
      g[8][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'c1', pos: [0, 10] },
      { id: 'c2', pos: [1, 0] },
      { id: 'c3', pos: [3, 10] },
      { id: 'c4', pos: [4, 0] },
      { id: 'c5', pos: [6, 10] },
      { id: 'c6', pos: [7, 0] },
      { id: 'c7', pos: [9, 10] },
      { id: 'c8', pos: [10, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic'],
    requiredCategories: ['logic', 'loops'],
    optimalBlockCount: 90,
    xpReward: 490,
    hints: [
      { en: 'Crystal 1 is a straight walk right along the entire top row.', id: 'Kristal 1 adalah jalan lurus ke kanan di sepanjang baris atas.' },
      { en: 'Every leg zigzags full width: down, then all the way left; down, then all the way right — alternating right to left all the way to the final corner.', id: 'Setiap bagian zigzag selebar penuh: turun, lalu kiri sepenuhnya; turun, lalu kanan sepenuhnya — bergantian kanan dan kiri sampai sudut terakhir.' },
    ],
    starThresholds: [171, 126, 108, 90],
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
      en: 'A huge factory challenge! Bolt must use functions, loops, and conditions to collect all gears.',
      id: 'Tantangan pabrik yang besar! Bolt harus menggunakan fungsi, perulangan, dan kondisi untuk mengumpulkan semua gear.',
    },
    mascotMessage: {
      en: "You're a function master! 🏆 Use everything you know to tackle the factory floor! 🤖",
      id: 'Kamu master fungsi! 🏆 Gunakan segalanya yang kamu tahu untuk menaklukkan lantai pabrik! 🤖',
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
  {
    id: 'factory-7',
    worldId: 'factory',
    number: 7,
    title: { en: 'Function Factory', id: 'Pabrik Fungsi' },
    story: {
      en: 'A new factory wing has four gears scattered behind scattered machinery. Bolt writes a function for the moves he repeats most.',
      id: 'Sayap pabrik baru memiliki empat gear tersebar di balik mesin yang tersebar. Bolt menulis fungsi untuk gerakan yang paling sering diulang.',
    },
    mascotMessage: {
      en: 'Write a function for the moves you use again and again! 🔧 Then call it whenever you need that pattern.',
      id: 'Tulis fungsi untuk gerakan yang kamu gunakan berulang-ulang! 🔧 Lalu panggil kapan pun kamu butuh pola itu.',
    },
    gridRows: 7,
    gridCols: 7,
    cells: (() => {
      const g = emptyGrid(7, 7)
      g[2][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[6][2] = 'obstacle'
      g[1][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [4, 2] },
      { id: 'g3', pos: [2, 6] },
      { id: 'g4', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions'],
    optimalBlockCount: 21,
    xpReward: 310,
    hints: [
      { en: 'Gear 1 is a straight walk right along the top of the factory floor.', id: 'Gear 1 adalah jalan lurus ke kanan di lantai pabrik bagian atas.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: right then up. Gear 3 → 4: down then left.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: kanan lalu naik. Gear 3 → 4: turun lalu kiri.' },
    ],
    starThresholds: [44, 32, 27, 21],
  },
  {
    id: 'factory-8',
    worldId: 'factory',
    number: 8,
    title: { en: 'Multi-Function Grid', id: 'Grid Multi-Fungsi' },
    story: {
      en: 'Five machines block five different paths to five gears. Bolt needs more than one function to handle this section.',
      id: 'Lima mesin memblokir lima jalur berbeda ke lima gear. Bolt membutuhkan lebih dari satu fungsi untuk menangani bagian ini.',
    },
    mascotMessage: {
      en: 'This floor is complex! 🤖🤖 Write a function for each kind of move you repeat, then call the right one at the right time.',
      id: 'Lantai ini rumit! 🤖🤖 Tulis fungsi untuk setiap jenis gerakan yang kamu ulangi, lalu panggil yang tepat pada waktu yang tepat.',
    },
    gridRows: 9,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(9, 8)
      g[1][4] = 'obstacle'
      g[3][6] = 'obstacle'
      g[4][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [3, 3] },
      { id: 'g3', pos: [5, 7] },
      { id: 'g4', pos: [6, 1] },
      { id: 'g5', pos: [8, 4] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions'],
    optimalBlockCount: 30,
    xpReward: 330,
    hints: [
      { en: 'Gear 1 is a straight walk right. Then left then down to gear 2.', id: 'Gear 1 adalah jalan lurus ke kanan. Lalu kiri lalu turun ke gear 2.' },
      { en: 'Gear 2 → 3: down then right. Gear 3 → 4: left then down. Gear 4 → 5: right then down.', id: 'Gear 2 → 3: turun lalu kanan. Gear 3 → 4: kiri lalu turun. Gear 4 → 5: kanan lalu turun.' },
    ],
    starThresholds: [58, 42, 36, 30],
  },
  {
    id: 'factory-9',
    worldId: 'factory',
    number: 9,
    title: { en: 'Function Overdrive', id: 'Overdrive Fungsi' },
    story: {
      en: 'The factory kicks into overdrive! Six gears, six machines in the way. Bolt must combine functions WITH loops to keep his code clean.',
      id: 'Pabrik masuk mode overdrive! Enam gear, enam mesin menghalangi. Bolt harus menggabungkan fungsi DENGAN perulangan agar kodenya tetap rapi.',
    },
    mascotMessage: {
      en: 'Functions AND loops together now! ⚙️🔄 Use a function for repeated shapes, and a loop for repeated straight legs.',
      id: 'Fungsi DAN perulangan sekarang bersama! ⚙️🔄 Gunakan fungsi untuk bentuk berulang, dan perulangan untuk bagian lurus berulang.',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][4] = 'obstacle'
      g[2][7] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [2, 3] },
      { id: 'g3', pos: [4, 7] },
      { id: 'g4', pos: [6, 2] },
      { id: 'g5', pos: [8, 6] },
      { id: 'g6', pos: [8, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 32,
    xpReward: 345,
    hints: [
      { en: 'Gear 1 is a straight walk right — great spot for a loop. Then down then left to gear 2.', id: 'Gear 1 adalah jalan lurus ke kanan — cocok untuk perulangan. Lalu turun lalu kiri ke gear 2.' },
      { en: 'Gear 2 → 3: down then right. 3 → 4: left then down. 4 → 5: right then down. 5 → 6: just right!', id: 'Gear 2 → 3: turun lalu kanan. 3 → 4: kiri lalu turun. 4 → 5: kanan lalu turun. 5 → 6: cukup kanan!' },
    ],
    starThresholds: [62, 45, 38, 32],
  },
  {
    id: 'factory-10',
    worldId: 'factory',
    number: 10,
    title: { en: 'Factory Grandmaster', id: 'Grandmaster Pabrik' },
    story: {
      en: 'A massive assembly line — one of the biggest, busiest floors in the factory! Six gears, eight machines, and every skill Bolt has learned: functions, loops, AND conditions together.',
      id: 'Lini perakitan raksasa — salah satu lantai terbesar dan tersibuk di pabrik! Enam gear, delapan mesin, dan semua keahlian yang dipelajari Bolt: fungsi, perulangan, DAN kondisi bersama.',
    },
    mascotMessage: {
      en: "This is the grandest assembly line yet! 🏭🏆 Combine functions, loops, and if-else — you're a true Factory Grandmaster! 🤖",
      id: 'Ini lini perakitan terbesar! 🏭🏆 Gabungkan fungsi, perulangan, dan jika-selain — kamu Grandmaster Pabrik sejati! 🤖',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][7] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][8] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 9] },
      { id: 'g2', pos: [2, 6] },
      { id: 'g3', pos: [4, 9] },
      { id: 'g4', pos: [6, 3] },
      { id: 'g5', pos: [8, 9] },
      { id: 'g6', pos: [9, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 42,
    xpReward: 380,
    hints: [
      { en: 'Gear 1 is a straight walk right. Then down then left to gear 2. Then down then right to gear 3.', id: 'Gear 1 adalah jalan lurus ke kanan. Lalu turun lalu kiri ke gear 2. Lalu turun lalu kanan ke gear 3.' },
      { en: 'From gear 3, go left, down, left, down to gear 4 around the machinery. Gear 4 → 5: down 3, right 6, up 1. Gear 5 → 6: down 1, left 4.', id: 'Dari gear 3, jalan kiri, turun, kiri, turun ke gear 4 mengitari mesin. Gear 4 → 5: turun 3, kanan 6, naik 1. Gear 5 → 6: turun 1, kiri 4.' },
    ],
    starThresholds: [80, 58, 50, 42],
  },
  {
    id: 'factory-11',
    worldId: 'factory',
    number: 11,
    title: { en: 'Welding Bay', id: 'Bengkel Las' },
    story: {
      en: 'A new welding bay hums with robotic arms! Bolt writes one function to handle the tricky turns and calls it wherever he needs it.',
      id: 'Bengkel las baru berdengung dengan lengan robot! Bolt menulis satu fungsi untuk menangani belokan sulit dan memanggilnya kapan pun dibutuhkan.',
    },
    mascotMessage: {
      en: 'Spot the moves you repeat and wrap them in a function! 🔧⚡ One good function saves you from writing the same blocks over and over.',
      id: 'Kenali gerakan yang berulang dan bungkus dalam sebuah fungsi! 🔧⚡ Satu fungsi yang baik menghemat kamu dari menulis blok yang sama berulang kali.',
    },
    gridRows: 7,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(7, 8)
      g[1][3] = 'obstacle'
      g[2][6] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][5] = 'obstacle'
      g[6][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 4] },
      { id: 'g2', pos: [3, 1] },
      { id: 'g3', pos: [2, 7] },
      { id: 'g4', pos: [6, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions'],
    optimalBlockCount: 25,
    xpReward: 390,
    hints: [
      { en: 'Gear 1 is a straight walk right across the top of the welding bay.', id: 'Gear 1 adalah jalan lurus ke kanan di bagian atas bengkel las.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: right then up. Gear 3 → 4: down then left.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: kanan lalu naik. Gear 3 → 4: turun lalu kiri.' },
    ],
    starThresholds: [48, 35, 30, 25],
  },
  {
    id: 'factory-12',
    worldId: 'factory',
    number: 12,
    title: { en: 'Circuit Row', id: 'Baris Sirkuit' },
    story: {
      en: 'Circuit Row is lined with buzzing control panels. Bolt combines a function with a loop to zip along each straight row of wiring.',
      id: 'Baris Sirkuit dipenuhi panel kontrol yang berdengung. Bolt menggabungkan fungsi dengan perulangan untuk melaju cepat di sepanjang setiap baris kabel lurus.',
    },
    mascotMessage: {
      en: 'Straight stretches are perfect for a loop — wrap your function call inside repeat! 🔄⚙️',
      id: 'Bagian lurus sangat cocok untuk perulangan — bungkus panggilan fungsimu di dalam ulangi! 🔄⚙️',
    },
    gridRows: 8,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(8, 8)
      g[1][5] = 'obstacle'
      g[2][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][3] = 'obstacle'
      g[6][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 6] },
      { id: 'g2', pos: [3, 3] },
      { id: 'g3', pos: [5, 7] },
      { id: 'g4', pos: [7, 2] },
      { id: 'g5', pos: [6, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 29,
    xpReward: 400,
    hints: [
      { en: 'Gear 1 is a straight walk right — perfect for a loop!', id: 'Gear 1 adalah jalan lurus ke kanan — cocok untuk perulangan!' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: right then down. Gear 3 → 4: down then left. Gear 4 → 5: up then right.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: kanan lalu turun. Gear 3 → 4: turun lalu kiri. Gear 4 → 5: naik lalu kanan.' },
    ],
    starThresholds: [55, 41, 35, 29],
  },
  {
    id: 'factory-13',
    worldId: 'factory',
    number: 13,
    title: { en: 'Conveyor Alley', id: 'Lorong Konveyor' },
    story: {
      en: 'The conveyor alley splits into two paths at every junction. Bolt must decide — with an if-else — which function to call at each fork.',
      id: 'Lorong konveyor pabrik terbagi menjadi dua jalur di setiap persimpangan. Bolt harus memutuskan — dengan jika-selain — fungsi mana yang dipanggil di setiap persimpangan.',
    },
    mascotMessage: {
      en: 'Not every path needs a loop — sometimes you just need to CHOOSE the right function! 🔀🔧',
      id: 'Tidak semua jalur butuh perulangan — kadang kamu hanya perlu MEMILIH fungsi yang tepat! 🔀🔧',
    },
    gridRows: 8,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      g[1][2] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][4] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 7] },
      { id: 'g2', pos: [3, 5] },
      { id: 'g3', pos: [5, 8] },
      { id: 'g4', pos: [7, 2] },
      { id: 'g5', pos: [6, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'logic'],
    optimalBlockCount: 30,
    xpReward: 410,
    hints: [
      { en: 'Gear 1 is a straight walk right along the top of the alley.', id: 'Gear 1 adalah jalan lurus ke kanan di sepanjang atas lorong.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: right then down. Gear 3 → 4: down then left. Gear 4 → 5: right then up.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: kanan lalu turun. Gear 3 → 4: turun lalu kiri. Gear 4 → 5: kanan lalu naik.' },
    ],
    starThresholds: [57, 42, 36, 30],
  },
  {
    id: 'factory-14',
    worldId: 'factory',
    number: 14,
    title: { en: 'Paint Shop Puzzle', id: 'Teka-Teki Bengkel Cat' },
    story: {
      en: "The paint shop's robotic sprayers move in tight, repeating patterns. Bolt writes a function for the pattern and loops it across the room.",
      id: 'Penyembur robotik di bengkel cat bergerak dalam pola berulang yang rapat. Bolt menulis fungsi untuk pola itu dan mengulanginya di seluruh ruangan.',
    },
    mascotMessage: {
      en: "See a shape you'll need again? Function it. See a straight stretch? Loop it! 🎨🔁",
      id: 'Lihat bentuk yang akan kamu perlukan lagi? Jadikan fungsi. Lihat bagian lurus? Ulangi dengan perulangan! 🎨🔁',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][6] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][7] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 8] },
      { id: 'g2', pos: [2, 5] },
      { id: 'g3', pos: [4, 8] },
      { id: 'g4', pos: [6, 2] },
      { id: 'g5', pos: [8, 6] },
      { id: 'g6', pos: [7, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 34,
    xpReward: 420,
    hints: [
      { en: 'Gear 1 is a straight walk right across the top — great spot for a loop.', id: 'Gear 1 adalah jalan lurus ke kanan di bagian atas — cocok untuk perulangan.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: down then right. Gear 3 → 4: left then down. Gear 4 → 5 → 6: weave carefully around the machines near the bottom.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: turun lalu kanan. Gear 3 → 4: kiri lalu turun. Gear 4 → 5 → 6: berkelok hati-hati mengitari mesin di dekat bawah.' },
    ],
    starThresholds: [65, 48, 41, 34],
  },
  {
    id: 'factory-15',
    worldId: 'factory',
    number: 15,
    title: { en: 'Power Grid Overhaul', id: 'Perombakan Jaringan Daya' },
    story: {
      en: "The power grid room is Bolt's toughest yet — functions for repeated shapes, loops for straight runs, and if-else to dodge the trickiest machines.",
      id: 'Ruang jaringan daya adalah tantangan tersulit Bolt sejauh ini — fungsi untuk bentuk berulang, perulangan untuk bagian lurus, dan jika-selain untuk menghindari mesin paling rumit.',
    },
    mascotMessage: {
      en: 'Now combine ALL three: functions, loops, AND if-else! 💡🔧🔄 This is where real coders shine.',
      id: 'Sekarang gabungkan SEMUA: fungsi, perulangan, DAN jika-selain! 💡🔧🔄 Di sinilah coder sejati bersinar.',
    },
    gridRows: 9,
    gridCols: 9,
    cells: (() => {
      const g = emptyGrid(9, 9)
      g[1][4] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][3] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 7] },
      { id: 'g2', pos: [3, 4] },
      { id: 'g3', pos: [5, 7] },
      { id: 'g4', pos: [7, 2] },
      { id: 'g5', pos: [8, 8] },
      { id: 'g6', pos: [4, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 38,
    xpReward: 435,
    hints: [
      { en: 'Gear 1 is a straight walk right along the top row.', id: 'Gear 1 adalah jalan lurus ke kanan di baris atas.' },
      { en: 'Weave down and left carefully to gear 2 around the machines. Gear 2 → 3: down then right. Gear 3 → 4: down then left. Gear 4 → 5: down then right. Gear 5 → 6: loop back up and around to the last gear.', id: 'Berkelok turun dan kiri hati-hati ke gear 2 mengitari mesin. Gear 2 → 3: turun lalu kanan. Gear 3 → 4: turun lalu kiri. Gear 4 → 5: turun lalu kanan. Gear 5 → 6: putar kembali naik dan mengitari ke gear terakhir.' },
    ],
    starThresholds: [72, 53, 46, 38],
  },
  {
    id: 'factory-16',
    worldId: 'factory',
    number: 16,
    title: { en: 'Sorting Depot', id: 'Depot Penyortiran' },
    story: {
      en: 'Crates roll through the sorting depot on crisscrossing belts. Bolt needs every trick — functions, loops, and if-else — to reach every gear.',
      id: 'Peti bergulir melalui depot penyortiran di sabuk yang saling silang. Bolt membutuhkan semua trik — fungsi, perulangan, dan jika-selain — untuk mencapai setiap gear.',
    },
    mascotMessage: {
      en: 'Belts cross everywhere here! Plan your route leg by leg before you code. 📦🔀',
      id: 'Sabuk saling silang di mana-mana! Rencanakan rutemu selangkah demi selangkah sebelum menulis kode. 📦🔀',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[1][5] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 8] },
      { id: 'g2', pos: [3, 5] },
      { id: 'g3', pos: [5, 8] },
      { id: 'g4', pos: [7, 2] },
      { id: 'g5', pos: [8, 9] },
      { id: 'g6', pos: [4, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 41,
    xpReward: 450,
    hints: [
      { en: 'Gear 1 is a straight walk right across the top of the depot.', id: 'Gear 1 adalah jalan lurus ke kanan di bagian atas depot.' },
      { en: 'Weave left and down to gear 2 around the machines. Gear 2 → 3: down then right. Gear 3 → 4: right then down. Gear 4 → 5: down then right. Gear 5 → 6: loop back up and around.', id: 'Berkelok kiri dan turun ke gear 2 mengitari mesin. Gear 2 → 3: turun lalu kanan. Gear 3 → 4: kanan lalu turun. Gear 4 → 5: turun lalu kanan. Gear 5 → 6: putar kembali naik dan mengitari.' },
    ],
    starThresholds: [78, 57, 49, 41],
  },
  {
    id: 'factory-17',
    worldId: 'factory',
    number: 17,
    title: { en: 'Loading Dock Chaos', id: 'Kekacauan Dermaga Muat' },
    story: {
      en: 'Crates and forklifts crowd the loading dock. Bolt writes functions for each detour and loops the long straight hauls.',
      id: 'Peti dan forklift memenuhi dermaga muat. Bolt menulis fungsi untuk setiap belokan dan mengulangi bagian lurus yang panjang dengan perulangan.',
    },
    mascotMessage: {
      en: 'Seven gears, eight machines — the biggest dock yet! Break it into functions, piece by piece. 📦🤖',
      id: 'Tujuh gear, delapan mesin — dermaga terbesar sejauh ini! Pecah menjadi fungsi, sepotong demi sepotong. 📦🤖',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][7] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][8] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 9] },
      { id: 'g2', pos: [2, 6] },
      { id: 'g3', pos: [4, 9] },
      { id: 'g4', pos: [6, 3] },
      { id: 'g5', pos: [8, 7] },
      { id: 'g6', pos: [9, 1] },
      { id: 'g7', pos: [9, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops'],
    optimalBlockCount: 48,
    xpReward: 465,
    hints: [
      { en: 'Gear 1 is a straight walk right across the top — loop it!', id: 'Gear 1 adalah jalan lurus ke kanan di bagian atas — gunakan perulangan!' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: right then down. Gear 3 → 4: weave down and left around the machines. Gear 4 → 5: right then down. Gear 5 → 6: down then left. Gear 6 → 7: straight right along the bottom.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: kanan lalu turun. Gear 3 → 4: berkelok turun dan kiri mengitari mesin. Gear 4 → 5: kanan lalu turun. Gear 5 → 6: turun lalu kiri. Gear 6 → 7: lurus kanan di sepanjang bawah.' },
    ],
    starThresholds: [91, 67, 58, 48],
  },
  {
    id: 'factory-18',
    worldId: 'factory',
    number: 18,
    title: { en: 'Control Room Circuit', id: 'Sirkuit Ruang Kontrol' },
    story: {
      en: "The control room's panels blink in patterns Bolt must decode. Functions, loops, and if-else all come together for this circuit.",
      id: 'Panel di ruang kontrol berkedip dalam pola yang harus dipecahkan Bolt. Fungsi, perulangan, dan jika-selain semua bersatu untuk sirkuit ini.',
    },
    mascotMessage: {
      en: "This circuit needs everything you've learned! 💡 Plan each leg, then code it piece by piece.",
      id: 'Sirkuit ini membutuhkan semua yang telah kamu pelajari! 💡 Rencanakan setiap bagian, lalu kode sepotong demi sepotong.',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][3] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][5] = 'obstacle'
      g[4][1] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][3] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 8] },
      { id: 'g2', pos: [3, 3] },
      { id: 'g3', pos: [5, 8] },
      { id: 'g4', pos: [7, 4] },
      { id: 'g5', pos: [9, 1] },
      { id: 'g6', pos: [8, 9] },
      { id: 'g7', pos: [2, 6] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 54,
    xpReward: 480,
    hints: [
      { en: 'Gear 1 is a straight walk right across the top of the control room.', id: 'Gear 1 adalah jalan lurus ke kanan di bagian atas ruang kontrol.' },
      { en: "Weave around the machines for each leg — gear 2 needs a careful path down-left, gear 3 zigzags down-right, then it's down-left, down-left, right-up, and left-up to the last gear.", id: 'Berkelok mengitari mesin untuk setiap bagian — gear 2 butuh jalur turun-kiri yang hati-hati, gear 3 berkelok turun-kanan, lalu turun-kiri, turun-kiri, kanan-naik, dan kiri-naik ke gear terakhir.' },
    ],
    starThresholds: [103, 76, 65, 54],
  },
  {
    id: 'factory-19',
    worldId: 'factory',
    number: 19,
    title: { en: 'Turbo Assembly Line', id: 'Lini Perakitan Turbo' },
    story: {
      en: 'The assembly line shifts into turbo mode across an even wider factory floor. Bolt needs sharp functions, tight loops, and smart if-else to keep up.',
      id: 'Lini perakitan beralih ke mode turbo di lantai pabrik yang lebih luas. Bolt membutuhkan fungsi yang tajam, perulangan yang rapat, dan jika-selain yang cerdas untuk mengikuti.',
    },
    mascotMessage: {
      en: 'Turbo mode means more gears, more machines, and no room for messy code! 🚀🔧',
      id: 'Mode turbo berarti lebih banyak gear, lebih banyak mesin, dan tidak ada ruang untuk kode berantakan! 🚀🔧',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[1][8] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][10] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][1] = 'obstacle'
      g[9][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 10] },
      { id: 'g2', pos: [2, 7] },
      { id: 'g3', pos: [4, 10] },
      { id: 'g4', pos: [6, 3] },
      { id: 'g5', pos: [8, 8] },
      { id: 'g6', pos: [9, 2] },
      { id: 'g7', pos: [9, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 53,
    xpReward: 500,
    hints: [
      { en: 'Gear 1 is a straight walk right across the wide top row.', id: 'Gear 1 adalah jalan lurus ke kanan di baris atas yang lebar.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: down then right. Gear 3 → 4: weave down and left around the machines. Gear 4 → 5: down then right. Gear 5 → 6: weave left and down around the machines. Gear 6 → 7: weave up, right, then down to the final gear.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: turun lalu kanan. Gear 3 → 4: berkelok turun dan kiri mengitari mesin. Gear 4 → 5: turun lalu kanan. Gear 5 → 6: berkelok kiri dan turun mengitari mesin. Gear 6 → 7: berkelok naik, kanan, lalu turun ke gear terakhir.' },
    ],
    starThresholds: [101, 74, 64, 53],
  },
  {
    id: 'factory-20',
    worldId: 'factory',
    number: 20,
    title: { en: 'Factory Legend', id: 'Legenda Pabrik' },
    story: {
      en: 'Bolt takes on the widest factory floor yet — eight gears scattered among ten humming machines. Every skill counts: functions, loops, and if-else, all working together.',
      id: 'Bolt menghadapi lantai pabrik terluas yang pernah ada — delapan gear tersebar di antara sepuluh mesin yang berdengung. Setiap keahlian dibutuhkan: fungsi, perulangan, dan jika-selain, semua bekerja bersama.',
    },
    mascotMessage: {
      en: "Eight gears, ten machines — this is Bolt's toughest run yet! 🏭⭐ Show everything you've learned and become a Factory Legend!",
      id: 'Delapan gear, sepuluh mesin — ini lari tersulit Bolt sejauh ini! 🏭⭐ Tunjukkan semua yang telah kamu pelajari dan jadilah Legenda Pabrik!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][9] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][10] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][3] = 'obstacle'
      g[9][6] = 'obstacle'
      g[10][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'g1', pos: [0, 10] },
      { id: 'g2', pos: [2, 7] },
      { id: 'g3', pos: [4, 10] },
      { id: 'g4', pos: [6, 3] },
      { id: 'g5', pos: [8, 9] },
      { id: 'g6', pos: [10, 4] },
      { id: 'g7', pos: [9, 10] },
      { id: 'g8', pos: [1, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions'],
    requiredCategories: ['functions', 'loops', 'logic'],
    optimalBlockCount: 70,
    xpReward: 520,
    hints: [
      { en: 'Gear 1 is a straight walk right across the very top row.', id: 'Gear 1 adalah jalan lurus ke kanan di baris paling atas.' },
      { en: 'Gear 1 → 2: down then left. Gear 2 → 3: down then right. Gear 3 → 4: down then left, all the way across. Gear 4 → 5: right then down then right, weaving around a machine. Gear 5 → 6: left then down. Gear 6 → 7: up then right then down. Gear 7 → 8: the big final haul — up and left back toward the corner.', id: 'Gear 1 → 2: turun lalu kiri. Gear 2 → 3: turun lalu kanan. Gear 3 → 4: turun lalu kiri, sepanjang jalan. Gear 4 → 5: kanan lalu turun lalu kanan, berkelok mengitari mesin. Gear 5 → 6: kiri lalu turun. Gear 6 → 7: naik lalu kanan lalu turun. Gear 7 → 8: perjalanan akhir yang besar — naik dan kiri kembali ke sudut.' },
    ],
    starThresholds: [133, 98, 84, 70],
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
      en: 'One of the toughest challenges yet! Become the Time Lord — master arrays, loops, functions, and conditions to collect all 8 crystals!',
      id: 'Salah satu tantangan tersulit sejauh ini! Jadilah Penguasa Waktu — kuasai array, perulangan, fungsi, dan kondisi untuk mengumpulkan semua 8 kristal!',
    },
    mascotMessage: {
      en: "You're becoming a true TIME LORD! 👑 Use EVERY skill — lists, loops, functions, conditions! This is one of your toughest tests yet! ⏰🌟",
      id: 'Kamu semakin dekat menjadi PENGUASA WAKTU! 👑 Gunakan SETIAP kemampuan — daftar, perulangan, fungsi, kondisi! Ini salah satu ujian tersulitmu sejauh ini! ⏰🌟',
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
  {
    id: 'portal-11',
    worldId: 'portal',
    number: 11,
    title: { en: 'Rift Runner', id: 'Pelari Retakan' },
    story: {
      en: 'A time rift has torn open across the corridor! Nova must write reusable functions that loop through her crystal list to seal it before it spreads.',
      id: 'Sebuah retakan waktu terbuka di lorong! Nova harus menulis fungsi yang bisa dipakai ulang dan mengulang daftar kristalnya untuk menutupnya sebelum menyebar.',
    },
    mascotMessage: {
      en: 'Write a FUNCTION that loops through a list of moves! 🔧🔁 Call it wherever the rift pattern repeats!',
      id: 'Tulis FUNGSI yang mengulang daftar gerakan! 🔧🔁 Panggil fungsi itu setiap kali pola retakan muncul lagi!',
    },
    gridRows: 8,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(8, 10)
      g[2][7] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][5] = 'obstacle'
      g[7][4] = 'obstacle'
      g[3][1] = 'obstacle'
      g[6][8] = 'obstacle'
      g[0][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 3] },
      { id: 't2', pos: [3, 3] },
      { id: 't3', pos: [3, 7] },
      { id: 't4', pos: [6, 7] },
      { id: 't5', pos: [6, 2] },
      { id: 't6', pos: [1, 2] },
      { id: 't7', pos: [1, 9] },
      { id: 't8', pos: [7, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions'],
    optimalBlockCount: 36,
    xpReward: 465,
    hints: [
      { en: "Look for a repeating pattern in the crystal layout — that's a job for a function!", id: 'Perhatikan pola berulang dalam susunan kristal — itu tugas untuk sebuah fungsi!' },
      { en: 'Define one function with a loop inside that handles a full lane, then call it for each lane of the rift.', id: 'Definisikan satu fungsi dengan perulangan di dalamnya untuk satu jalur penuh, lalu panggil fungsi itu untuk setiap jalur retakan.' },
    ],
    starThresholds: [76, 54, 45, 36],
  },
  {
    id: 'portal-12',
    worldId: 'portal',
    number: 12,
    title: { en: 'Chrono Vault', id: 'Brankas Waktu' },
    story: {
      en: 'Deep inside a sealed chrono-vault, crystals sit behind logic locks. Nova must check conditions before her loop can safely move to the next crystal in the list.',
      id: 'Di dalam brankas waktu yang terkunci, kristal-kristal berada di balik kunci logika. Nova harus memeriksa kondisi sebelum perulangannya bisa aman melangkah ke kristal berikutnya dalam daftar.',
    },
    mascotMessage: {
      en: 'Use an IF block inside your loop to check before you move! 🔐🧠 Combine logic with your crystal list to unlock the vault!',
      id: 'Gunakan blok JIKA di dalam perulanganmu untuk memeriksa sebelum bergerak! 🔐🧠 Gabungkan logika dengan daftar kristalmu untuk membuka brankas!',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[1][7] = 'obstacle'
      g[3][6] = 'obstacle'
      g[5][5] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][6] = 'obstacle'
      g[0][7] = 'obstacle'
      g[2][1] = 'obstacle'
      g[4][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 4] },
      { id: 't2', pos: [4, 4] },
      { id: 't3', pos: [4, 9] },
      { id: 't4', pos: [8, 9] },
      { id: 't5', pos: [8, 3] },
      { id: 't6', pos: [2, 3] },
      { id: 't7', pos: [2, 8] },
      { id: 't8', pos: [6, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'logic'],
    optimalBlockCount: 38,
    xpReward: 480,
    hints: [
      { en: 'Some paths need a check first — not every move is automatically safe.', id: 'Beberapa jalur perlu diperiksa dulu — tidak semua gerakan otomatis aman.' },
      { en: 'Put an IF condition inside your repeat loop to decide when to turn.', id: 'Letakkan kondisi JIKA di dalam perulanganmu untuk memutuskan kapan harus berbelok.' },
    ],
    starThresholds: [80, 57, 48, 38],
  },
  {
    id: 'portal-13',
    worldId: 'portal',
    number: 13,
    title: { en: 'Quantum Timeline', id: 'Garis Waktu Kuantum' },
    story: {
      en: 'The timeline has split into branches! Nova writes a function that uses logic to decide which branch of the list to follow.',
      id: 'Garis waktu terpecah menjadi cabang-cabang! Nova menulis fungsi yang menggunakan logika untuk memutuskan cabang daftar mana yang harus diikuti.',
    },
    mascotMessage: {
      en: 'Build a FUNCTION with an IF inside! 🧩🧠 Let it decide which crystal from your list to grab next!',
      id: 'Buat FUNGSI dengan JIKA di dalamnya! 🧩🧠 Biarkan fungsi itu memutuskan kristal mana dari daftarmu yang harus diambil berikutnya!',
    },
    gridRows: 9,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(9, 10)
      g[0][7] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][2] = 'obstacle'
      g[7][7] = 'obstacle'
      g[8][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 5] },
      { id: 't2', pos: [3, 5] },
      { id: 't3', pos: [3, 9] },
      { id: 't4', pos: [8, 9] },
      { id: 't5', pos: [8, 4] },
      { id: 't6', pos: [5, 4] },
      { id: 't7', pos: [5, 0] },
      { id: 't8', pos: [1, 0] },
      { id: 't9', pos: [1, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'functions', 'logic'],
    optimalBlockCount: 41,
    xpReward: 495,
    hints: [
      { en: "Not every branch leads the same way — your function needs to decide.", id: 'Tidak semua cabang mengarah ke jalur yang sama — fungsimu perlu memutuskan.' },
      { en: 'Write one function with a condition inside, then call it once per branch of the timeline.', id: 'Tulis satu fungsi dengan kondisi di dalamnya, lalu panggil sekali untuk setiap cabang garis waktu.' },
    ],
    starThresholds: [86, 62, 52, 41],
  },
  {
    id: 'portal-14',
    worldId: 'portal',
    number: 14,
    title: { en: 'Echo Chamber', id: 'Ruang Gema' },
    story: {
      en: 'Sound echoes fold back on themselves in this ancient chamber. Nova must combine everything — lists, loops, functions, and logic — to navigate the folding paths.',
      id: 'Gema suara melipat kembali ke dirinya sendiri di ruang kuno ini. Nova harus menggabungkan semuanya — daftar, perulangan, fungsi, dan logika — untuk menavigasi jalur yang melipat.',
    },
    mascotMessage: {
      en: 'Time to combine ALL FOUR skills! 📋🔁🔧🧠 Lists, loops, functions, AND logic working together!',
      id: 'Saatnya menggabungkan SEMUA EMPAT kemampuan! 📋🔁🔧🧠 Daftar, perulangan, fungsi, DAN logika bekerja bersama!',
    },
    gridRows: 9,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(9, 11)
      g[0][9] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][8] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][8] = 'obstacle'
      g[8][1] = 'obstacle'
      g[1][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 6] },
      { id: 't2', pos: [4, 6] },
      { id: 't3', pos: [4, 10] },
      { id: 't4', pos: [8, 10] },
      { id: 't5', pos: [8, 3] },
      { id: 't6', pos: [3, 3] },
      { id: 't7', pos: [3, 0] },
      { id: 't8', pos: [1, 0] },
      { id: 't9', pos: [1, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 44,
    xpReward: 510,
    hints: [
      { en: "This chamber needs every tool you've learned — don't leave any out!", id: 'Ruang ini butuh semua alat yang sudah kamu pelajari — jangan ada yang tertinggal!' },
      { en: 'Write a function with a loop and an IF inside, built from your crystal list.', id: 'Tulis fungsi dengan perulangan dan JIKA di dalamnya, dibangun dari daftar kristalmu.' },
    ],
    starThresholds: [92, 66, 55, 44],
  },
  {
    id: 'portal-15',
    worldId: 'portal',
    number: 15,
    title: { en: 'Fractured Era', id: 'Era Retak' },
    story: {
      en: 'This era has fractured into shifting fragments! Nova needs sharp logic inside her loops and functions to keep the list of crystals in order.',
      id: 'Era ini pecah menjadi pecahan-pecahan yang berpindah! Nova butuh logika yang tajam di dalam perulangan dan fungsinya agar daftar kristal tetap teratur.',
    },
    mascotMessage: {
      en: 'The fragments keep shifting! 🧩 Use logic to check your position before each loop step!',
      id: 'Pecahan-pecahan terus berpindah! 🧩 Gunakan logika untuk memeriksa posisimu sebelum setiap langkah perulangan!',
    },
    gridRows: 9,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(9, 11)
      g[0][9] = 'obstacle'
      g[1][4] = 'obstacle'
      g[2][2] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][7] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 7] },
      { id: 't2', pos: [3, 7] },
      { id: 't3', pos: [3, 2] },
      { id: 't4', pos: [7, 2] },
      { id: 't5', pos: [7, 9] },
      { id: 't6', pos: [2, 9] },
      { id: 't7', pos: [2, 4] },
      { id: 't8', pos: [5, 4] },
      { id: 't9', pos: [5, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 45,
    xpReward: 525,
    hints: [
      { en: 'Some fragments are trickier than others — plan your function calls carefully.', id: 'Beberapa pecahan lebih rumit dari yang lain — rencanakan pemanggilan fungsimu dengan hati-hati.' },
      { en: 'Use a function for each fragment, with a loop and IF check inside handling the list of moves.', id: 'Gunakan fungsi untuk setiap pecahan, dengan perulangan dan pengecekan JIKA di dalamnya yang menangani daftar gerakan.' },
    ],
    starThresholds: [95, 68, 57, 45],
  },
  {
    id: 'portal-16',
    worldId: 'portal',
    number: 16,
    title: { en: 'Nested Timestream', id: 'Aliran Waktu Bersarang' },
    story: {
      en: 'Timestreams flow inside other timestreams here! Nova must nest her loops and functions carefully while tracking everything in lists.',
      id: 'Aliran waktu mengalir di dalam aliran waktu lain di sini! Nova harus menyusun perulangan dan fungsinya secara bertingkat sambil melacak semuanya dalam daftar.',
    },
    mascotMessage: {
      en: 'Loops inside loops, functions inside functions! 🌀 Keep your lists organized so nothing gets lost in the nesting!',
      id: 'Perulangan di dalam perulangan, fungsi di dalam fungsi! 🌀 Jaga daftarmu tetap teratur agar tidak ada yang hilang di dalam susunan bertingkat ini!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[0][10] = 'obstacle'
      g[1][5] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][10] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][2] = 'obstacle'
      g[7][0] = 'obstacle'
      g[8][4] = 'obstacle'
      g[9][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 8] },
      { id: 't2', pos: [4, 8] },
      { id: 't3', pos: [4, 1] },
      { id: 't4', pos: [9, 1] },
      { id: 't5', pos: [9, 9] },
      { id: 't6', pos: [3, 9] },
      { id: 't7', pos: [3, 3] },
      { id: 't8', pos: [7, 3] },
      { id: 't9', pos: [7, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 55,
    xpReward: 540,
    hints: [
      { en: 'Layers within layers — break the journey into smaller functions.', id: 'Lapisan di dalam lapisan — pecah perjalanan menjadi fungsi-fungsi yang lebih kecil.' },
      { en: 'Write a function per layer, call one from inside another, and use logic to know when to stop.', id: 'Tulis satu fungsi per lapisan, panggil satu dari dalam yang lain, dan gunakan logika untuk tahu kapan harus berhenti.' },
    ],
    starThresholds: [116, 83, 69, 55],
  },
  {
    id: 'portal-17',
    worldId: 'portal',
    number: 17,
    title: { en: 'Singularity Sprint', id: 'Sprint Singularitas' },
    story: {
      en: 'A singularity is collapsing the corridors fast! Nova must sprint through her full toolkit — lists, loops, functions, logic — before time runs out.',
      id: 'Sebuah singularitas dengan cepat meruntuhkan lorong-lorong! Nova harus berlari cepat menggunakan semua perangkatnya — daftar, perulangan, fungsi, logika — sebelum waktu habis.',
    },
    mascotMessage: {
      en: 'No time to waste! ⚡ Combine your lists, loops, functions, and logic into one fast efficient plan!',
      id: 'Tidak ada waktu untuk buang-buang! ⚡ Gabungkan daftar, perulangan, fungsi, dan logikamu menjadi satu rencana yang cepat dan efisien!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[0][10] = 'obstacle'
      g[1][4] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][10] = 'obstacle'
      g[4][9] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][0] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][7] = 'obstacle'
      g[9][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 9] },
      { id: 't2', pos: [3, 9] },
      { id: 't3', pos: [3, 1] },
      { id: 't4', pos: [6, 1] },
      { id: 't5', pos: [6, 10] },
      { id: 't6', pos: [9, 10] },
      { id: 't7', pos: [9, 2] },
      { id: 't8', pos: [5, 2] },
      { id: 't9', pos: [5, 7] },
      { id: 't10', pos: [1, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 56,
    xpReward: 555,
    hints: [
      { en: 'Speed matters here — reuse functions instead of repeating blocks.', id: 'Kecepatan penting di sini — gunakan ulang fungsi daripada mengulang blok.' },
      { en: 'Write compact functions with loops and IF checks, and call them in the right order from your list.', id: 'Tulis fungsi yang ringkas dengan perulangan dan pengecekan JIKA, lalu panggil dalam urutan yang tepat dari daftarmu.' },
    ],
    starThresholds: [118, 84, 71, 56],
  },
  {
    id: 'portal-18',
    worldId: 'portal',
    number: 18,
    title: { en: 'Multiverse Merge', id: 'Peleburan Multisemesta' },
    story: {
      en: 'Two versions of the same corridor are merging into one! Nova must reconcile both lists of crystals using loops, functions, and logic.',
      id: 'Dua versi lorong yang sama sedang bergabung menjadi satu! Nova harus menyatukan kedua daftar kristal menggunakan perulangan, fungsi, dan logika.',
    },
    mascotMessage: {
      en: 'Two timelines becoming one! 🌌 Use logic to tell which crystals are new and functions to collect them efficiently!',
      id: 'Dua garis waktu menyatu menjadi satu! 🌌 Gunakan logika untuk mengetahui kristal mana yang baru dan fungsi untuk mengumpulkannya secara efisien!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[1][5] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][6] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][1] = 'obstacle'
      g[7][4] = 'obstacle'
      g[8][3] = 'obstacle'
      g[1][8] = 'obstacle'
      g[3][2] = 'obstacle'
      g[7][6] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 10] },
      { id: 't2', pos: [4, 10] },
      { id: 't3', pos: [4, 0] },
      { id: 't4', pos: [9, 0] },
      { id: 't5', pos: [9, 10] },
      { id: 't6', pos: [6, 10] },
      { id: 't7', pos: [6, 3] },
      { id: 't8', pos: [2, 3] },
      { id: 't9', pos: [2, 8] },
      { id: 't10', pos: [7, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 63,
    xpReward: 570,
    hints: [
      { en: "Not everything doubles up — check before you count a crystal twice.", id: 'Tidak semuanya berlipat ganda — periksa dulu sebelum menghitung kristal dua kali.' },
      { en: 'Loop through your list, use an IF to check each crystal, and call a function to grab it.', id: 'Ulangi daftarmu, gunakan JIKA untuk memeriksa setiap kristal, dan panggil fungsi untuk mengambilnya.' },
    ],
    starThresholds: [132, 95, 79, 63],
  },
  {
    id: 'portal-19',
    worldId: 'portal',
    number: 19,
    title: { en: 'Vortex Convergence', id: 'Konvergensi Vorteks' },
    story: {
      en: 'Every path in the vortex converges toward the center! Nova must weave together every list, loop, function, and condition she knows to survive the pull.',
      id: 'Setiap jalur di dalam pusaran mengarah ke pusat! Nova harus merajut semua daftar, perulangan, fungsi, dan kondisi yang ia ketahui untuk bertahan dari tarikannya.',
    },
    mascotMessage: {
      en: 'The vortex pulls everything together! 🌀 So should your code — lists, loops, functions, and logic, all working as one!',
      id: 'Pusaran menarik semuanya menjadi satu! 🌀 Begitu juga kodemu — daftar, perulangan, fungsi, dan logika, semua bekerja bersama!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[3][3] = 'obstacle'
      g[3][6] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][4] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][6] = 'obstacle'
      g[7][2] = 'obstacle'
      g[7][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [0, 10] },
      { id: 't2', pos: [9, 10] },
      { id: 't3', pos: [9, 0] },
      { id: 't4', pos: [1, 0] },
      { id: 't5', pos: [1, 9] },
      { id: 't6', pos: [8, 9] },
      { id: 't7', pos: [8, 1] },
      { id: 't8', pos: [2, 1] },
      { id: 't9', pos: [2, 8] },
      { id: 't10', pos: [7, 8] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 79,
    xpReward: 585,
    hints: [
      { en: 'The outer ring is easy, but the pull gets stronger the deeper you go.', id: 'Cincin luar mudah, tapi tarikannya makin kuat semakin dalam kamu masuk.' },
      { en: 'Write nested functions for each ring of the vortex, using loops and IF checks with your crystal list.', id: 'Tulis fungsi bertingkat untuk setiap cincin pusaran, gunakan perulangan dan pengecekan JIKA dengan daftar kristalmu.' },
    ],
    starThresholds: [166, 119, 100, 79],
  },
  {
    id: 'portal-20',
    worldId: 'portal',
    number: 20,
    title: { en: 'Chrono Master', id: 'Sang Kronomaster' },
    story: {
      en: 'The final convergence point where all timelines meet! To become the true Chrono Master, Nova must command lists, loops, functions, and logic together, flawlessly, one more time.',
      id: 'Titik pertemuan akhir tempat semua garis waktu bersatu! Untuk menjadi Sang Kronomaster sejati, Nova harus menguasai daftar, perulangan, fungsi, dan logika sekaligus, dengan sempurna, sekali lagi.',
    },
    mascotMessage: {
      en: "This is it — the Chrono Master trial! 👑⏰ Every skill you've built comes together here. You've got this, Nova!",
      id: 'Inilah dia — ujian Sang Kronomaster! 👑⏰ Semua kemampuan yang sudah kamu bangun berkumpul di sini. Kamu pasti bisa, Nova!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[0][2] = 'obstacle'
      g[0][6] = 'obstacle'
      g[0][10] = 'obstacle'
      g[1][4] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][0] = 'obstacle'
      g[4][2] = 'obstacle'
      g[5][6] = 'obstacle'
      g[6][4] = 'obstacle'
      g[7][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 't1', pos: [9, 1] },
      { id: 't2', pos: [0, 3] },
      { id: 't3', pos: [9, 5] },
      { id: 't4', pos: [0, 7] },
      { id: 't5', pos: [9, 9] },
      { id: 't6', pos: [4, 10] },
      { id: 't7', pos: [4, 8] },
      { id: 't8', pos: [9, 8] },
      { id: 't9', pos: [9, 4] },
      { id: 't10', pos: [9, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['lists', 'loops', 'functions', 'logic'],
    optimalBlockCount: 75,
    xpReward: 610,
    hints: [
      { en: 'Break the whole journey into zones, and write one function per zone.', id: 'Pecah seluruh perjalanan menjadi beberapa zona, dan tulis satu fungsi untuk setiap zona.' },
      { en: 'Use lists for your zone coordinates, loops to move through each one, and IF checks to handle the tricky turns.', id: 'Gunakan daftar untuk koordinat setiap zona, perulangan untuk bergerak melalui masing-masing, dan pengecekan JIKA untuk menangani belokan yang rumit.' },
    ],
    starThresholds: [158, 113, 95, 75],
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
      en: "The asteroid is hours away! Dr. Rex must save ten dinosaur eggs — the last of their kind — from across the entire 10×10 park. This is one of the toughest real-world pathfinding challenges yet. Every move counts!",
      id: 'Asteroid tinggal beberapa jam lagi! Dr. Rex harus menyelamatkan sepuluh telur dinosaurus — yang terakhir dari jenisnya — dari seluruh taman 10×10. Ini adalah salah satu tantangan pencarian jalur dunia nyata tersulit sejauh ini. Setiap gerakan sangat berarti!',
    },
    mascotMessage: {
      en: "THE GREAT EXTINCTION! 🌋🦕 Ten eggs, one of your toughest tests yet. This is the Travelling Salesman Problem — one of the most famous algorithms in computer science. Give it your BEST!",
      id: 'KEPUNAHAN BESAR! 🌋🦕 Sepuluh telur, salah satu ujian tersulitmu sejauh ini. Ini adalah Masalah Penjual Keliling — salah satu algoritma paling terkenal dalam ilmu komputer. Berikan yang TERBAIK!',
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
  {
    id: 'jurassic-11',
    worldId: 'jurassic',
    number: 11,
    title: { en: 'Flash Flood Rescue', id: 'Penyelamatan Banjir Bandang' },
    story: {
      en: 'A flash flood is rising through the lowlands! Dr. Rex must rescue eleven eggs scattered across the park before the water reaches the nests — just like a ride-share app grouping multiple pickups into one smart route.',
      id: 'Banjir bandang naik melalui dataran rendah! Dr. Rex harus menyelamatkan sebelas telur yang tersebar di taman sebelum air mencapai sarang — seperti aplikasi ride-share yang mengelompokkan banyak titik jemput menjadi satu rute cerdas.',
    },
    mascotMessage: {
      en: 'Flash flood rising! 🌊🦕 Real ride-sharing apps group multiple pickups into one efficient route — use LOOPS, FUNCTIONS, and LISTS to plan your rescue stops before the water rises!',
      id: 'Banjir bandang naik! 🌊🦕 Aplikasi ride-sharing nyata mengelompokkan banyak titik jemput menjadi satu rute efisien — gunakan PERULANGAN, FUNGSI, dan DAFTAR untuk merencanakan titik penyelamatanmu sebelum air naik!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[1][1] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][5] = 'obstacle'
      g[1][7] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][7] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][7] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][3] = 'obstacle'
      g[8][5] = 'obstacle'
      g[8][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 9] },
      { id: 'e2', pos: [2, 8] },
      { id: 'e3', pos: [2, 4] },
      { id: 'e4', pos: [4, 6] },
      { id: 'e5', pos: [4, 0] },
      { id: 'e6', pos: [5, 9] },
      { id: 'e7', pos: [5, 2] },
      { id: 'e8', pos: [7, 8] },
      { id: 'e9', pos: [7, 4] },
      { id: 'e10', pos: [9, 6] },
      { id: 'e11', pos: [9, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 165,
    xpReward: 750,
    hints: [
      { en: 'Group nearby eggs together like a rideshare app pools nearby passengers!', id: 'Kelompokkan telur yang berdekatan seperti aplikasi rideshare mengumpulkan penumpang yang berdekatan!' },
      { en: 'Sweep row by row in a zigzag — down one row, across, down again — to catch every egg with minimal backtracking!', id: 'Sisir baris demi baris secara zigzag — turun satu baris, menyeberang, turun lagi — untuk menangkap setiap telur dengan jalan bolak-balik minimal!' },
    ],
    starThresholds: [347, 248, 207, 165],
  },
  {
    id: 'jurassic-12',
    worldId: 'jurassic',
    number: 12,
    title: { en: 'Stampede Season', id: 'Musim Kawanan Berlari' },
    story: {
      en: 'A stampede of dinosaurs is thundering across the plains, blocking paths as it moves! Dr. Rex must reroute on the fly to rescue eleven eggs — exactly like a GPS app recalculating your route around live traffic.',
      id: 'Kawanan dinosaurus berlari kencang melintasi dataran, memblokir jalur saat bergerak! Dr. Rex harus mengubah rute secara langsung untuk menyelamatkan sebelas telur — persis seperti aplikasi GPS yang menghitung ulang rutemu di sekitar lalu lintas langsung.',
    },
    mascotMessage: {
      en: 'Stampede alert! 🦕💨 Real GPS apps recalculate your route the instant a road closes. Use IF conditions and FUNCTIONS to reroute around the herd!',
      id: 'Peringatan kawanan berlari! 🦕💨 Aplikasi GPS nyata menghitung ulang rutemu begitu jalan ditutup. Gunakan kondisi IF dan FUNGSI untuk mengubah rute di sekitar kawanan!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][6] = 'obstacle'
      g[2][8] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][8] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][6] = 'obstacle'
      g[6][8] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][3] = 'obstacle'
      g[8][6] = 'obstacle'
      g[8][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 10] },
      { id: 'e2', pos: [1, 4] },
      { id: 'e3', pos: [1, 9] },
      { id: 'e4', pos: [3, 0] },
      { id: 'e5', pos: [3, 7] },
      { id: 'e6', pos: [5, 2] },
      { id: 'e7', pos: [5, 10] },
      { id: 'e8', pos: [7, 4] },
      { id: 'e9', pos: [7, 9] },
      { id: 'e10', pos: [9, 0] },
      { id: 'e11', pos: [9, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 190,
    xpReward: 800,
    hints: [
      { en: 'When a direct path looks blocked, use IF conditions to pick a different direction — just like GPS rerouting!', id: 'Saat jalur langsung terlihat terhalang, gunakan kondisi IF untuk memilih arah lain — persis seperti GPS yang mengubah rute!' },
      { en: 'Visit eggs in the order they appear across the rows, alternating left and right, to keep your route short!', id: 'Kunjungi telur sesuai urutan munculnya di setiap baris, berselang-seling kiri dan kanan, agar rutemu tetap pendek!' },
    ],
    starThresholds: [399, 285, 238, 190],
  },
  {
    id: 'jurassic-13',
    worldId: 'jurassic',
    number: 13,
    title: { en: 'Amber Mine Collapse', id: 'Runtuhnya Tambang Amber' },
    story: {
      en: 'The amber mine has collapsed, trapping twelve eggs behind fallen rock! Dr. Rex must navigate the rubble like a warehouse robot picking items off shelves — efficient, precise, and never wasting a step.',
      id: 'Tambang amber runtuh, memerangkap dua belas telur di balik bebatuan yang jatuh! Dr. Rex harus menavigasi puing seperti robot gudang yang mengambil barang dari rak — efisien, presisi, dan tidak membuang satu langkah pun.',
    },
    mascotMessage: {
      en: 'Mine collapse! ⛏️🦕 Real warehouse robots plan their picking route before they move an inch. Use FUNCTIONS and LISTS to plan your dig-and-rescue route!',
      id: 'Tambang runtuh! ⛏️🦕 Robot gudang nyata merencanakan rute pengambilan sebelum bergerak sedikit pun. Gunakan FUNGSI dan DAFTAR untuk merencanakan rute penggalian dan penyelamatanmu!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[2][8] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][4] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][8] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][4] = 'obstacle'
      g[6][6] = 'obstacle'
      g[6][8] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 10] },
      { id: 'e2', pos: [1, 2] },
      { id: 'e3', pos: [1, 7] },
      { id: 'e4', pos: [3, 4] },
      { id: 'e5', pos: [3, 9] },
      { id: 'e6', pos: [5, 0] },
      { id: 'e7', pos: [5, 5] },
      { id: 'e8', pos: [7, 2] },
      { id: 'e9', pos: [7, 9] },
      { id: 'e10', pos: [9, 4] },
      { id: 'e11', pos: [9, 7] },
      { id: 'e12', pos: [9, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 215,
    xpReward: 850,
    hints: [
      { en: "Write one function for 'go collect an egg' and call it for each one — real robots reuse the same routine!", id: "Tulis satu fungsi untuk 'pergi ambil telur' dan panggil untuk setiap telur — robot nyata menggunakan kembali rutin yang sama!" },
      { en: "Handle each row's eggs before moving to the next row — it mirrors how a warehouse robot clears one aisle at a time!", id: 'Selesaikan telur di satu baris sebelum pindah ke baris berikutnya — ini meniru cara robot gudang membersihkan satu lorong pada satu waktu!' },
    ],
    starThresholds: [452, 323, 269, 215],
  },
  {
    id: 'jurassic-14',
    worldId: 'jurassic',
    number: 14,
    title: { en: 'Canopy Wildfire', id: 'Kebakaran Kanopi Hutan' },
    story: {
      en: 'Wildfire is racing through the jungle canopy! Dr. Rex commands a rescue route to save twelve eggs before the flames spread — just like a drone swarm coordinating flight paths to fight a wildfire from above.',
      id: 'Kebakaran hutan menjalar cepat melalui kanopi hutan! Dr. Rex memandu rute penyelamatan untuk menyelamatkan dua belas telur sebelum api menyebar — persis seperti kawanan drone yang mengoordinasikan jalur terbang untuk memadamkan kebakaran dari atas.',
    },
    mascotMessage: {
      en: 'Wildfire spreading! 🔥🦕 Real firefighting drone swarms split up the sky into routes so no area is missed. Use LOOPS and FUNCTIONS to cover the canopy fast!',
      id: 'Kebakaran menyebar! 🔥🦕 Kawanan drone pemadam kebakaran nyata membagi langit menjadi rute agar tidak ada area yang terlewat. Gunakan PERULANGAN dan FUNGSI untuk menjangkau kanopi dengan cepat!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][1] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][5] = 'obstacle'
      g[1][7] = 'obstacle'
      g[1][9] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][7] = 'obstacle'
      g[3][9] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][5] = 'obstacle'
      g[5][7] = 'obstacle'
      g[5][9] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 10] },
      { id: 'e2', pos: [2, 2] },
      { id: 'e3', pos: [2, 8] },
      { id: 'e4', pos: [4, 0] },
      { id: 'e5', pos: [4, 6] },
      { id: 'e6', pos: [6, 2] },
      { id: 'e7', pos: [6, 10] },
      { id: 'e8', pos: [8, 0] },
      { id: 'e9', pos: [8, 8] },
      { id: 'e10', pos: [10, 2] },
      { id: 'e11', pos: [10, 6] },
      { id: 'e12', pos: [10, 10] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 240,
    xpReward: 900,
    hints: [
      { en: 'Store all egg positions in a list first — plan the whole flight path before you launch!', id: 'Simpan semua posisi telur dalam daftar terlebih dahulu — rencanakan seluruh jalur penerbangan sebelum kamu berangkat!' },
      { en: 'Move down through the rows in order, sweeping left-right-left across each one, just like a drone covering a grid!', id: 'Bergerak turun melalui baris secara berurutan, menyapu kiri-kanan-kiri di setiap baris, persis seperti drone yang menjangkau sebuah kisi!' },
    ],
    starThresholds: [504, 360, 301, 240],
  },
  {
    id: 'jurassic-15',
    worldId: 'jurassic',
    number: 15,
    title: { en: 'River Surge Crossing', id: 'Penyeberangan Arus Sungai' },
    story: {
      en: 'An underground river has surged beneath Fossil Valley, flooding the tunnels! Dr. Rex must find a route across the surface like a subway dispatcher rerouting trains around a flooded line — twelve eggs, one connected path.',
      id: 'Sungai bawah tanah meluap di bawah Lembah Fosil, membanjiri terowongan! Dr. Rex harus menemukan rute di permukaan seperti operator kereta bawah tanah yang mengalihkan jalur di sekitar rel yang banjir — dua belas telur, satu jalur yang terhubung.',
    },
    mascotMessage: {
      en: 'River surge! 🌊🚇 Real metro networks reroute entire train lines around a single flooded tunnel. Use FUNCTIONS and LISTS to connect every egg into one smooth route!',
      id: 'Arus sungai meluap! 🌊🚇 Jaringan kereta bawah tanah nyata mengalihkan seluruh jalur kereta di sekitar satu terowongan yang banjir. Gunakan FUNGSI dan DAFTAR untuk menghubungkan setiap telur menjadi satu rute yang mulus!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[1][1] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][4] = 'obstacle'
      g[1][6] = 'obstacle'
      g[1][8] = 'obstacle'
      g[1][10] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][3] = 'obstacle'
      g[3][4] = 'obstacle'
      g[3][6] = 'obstacle'
      g[3][8] = 'obstacle'
      g[3][10] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][4] = 'obstacle'
      g[5][6] = 'obstacle'
      g[5][8] = 'obstacle'
      g[5][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [2, 2] },
      { id: 'e3', pos: [2, 9] },
      { id: 'e4', pos: [4, 5] },
      { id: 'e5', pos: [4, 11] },
      { id: 'e6', pos: [6, 0] },
      { id: 'e7', pos: [6, 7] },
      { id: 'e8', pos: [8, 2] },
      { id: 'e9', pos: [8, 9] },
      { id: 'e10', pos: [10, 5] },
      { id: 'e11', pos: [10, 11] },
      { id: 'e12', pos: [10, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 265,
    xpReward: 950,
    hints: [
      { en: 'Think of each row as a train line — finish collecting on one line before switching to the next!', id: 'Anggap setiap baris sebagai jalur kereta — selesaikan pengumpulan di satu jalur sebelum berpindah ke jalur berikutnya!' },
      { en: 'Twelve eggs span six rows — visit them two at a time per row for the shortest connected route!', id: 'Dua belas telur tersebar di enam baris — kunjungi dua per baris untuk rute terhubung terpendek!' },
    ],
    starThresholds: [557, 398, 332, 265],
  },
  {
    id: 'jurassic-16',
    worldId: 'jurassic',
    number: 16,
    title: { en: 'Migration Corridor', id: 'Koridor Migrasi' },
    story: {
      en: 'A herd is migrating straight through the heart of the park, cutting off the usual trails! Dr. Rex must chart a new corridor for twelve eggs — just like satellite networks recalculate coverage paths as satellites move in orbit.',
      id: 'Kawanan bermigrasi tepat melintasi jantung taman, memutus jalur biasa! Dr. Rex harus memetakan koridor baru untuk dua belas telur — persis seperti jaringan satelit yang menghitung ulang jalur cakupan saat satelit bergerak di orbit.',
    },
    mascotMessage: {
      en: 'Migration corridor! 🛰️🦕 Real satellite networks constantly recalculate the best path as things move. Use LOOPS, FUNCTIONS, and LISTS to chart your corridor!',
      id: 'Koridor migrasi! 🛰️🦕 Jaringan satelit nyata terus menghitung ulang jalur terbaik saat sesuatu bergerak. Gunakan PERULANGAN, FUNGSI, dan DAFTAR untuk memetakan koridormu!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][5] = 'obstacle'
      g[2][6] = 'obstacle'
      g[2][8] = 'obstacle'
      g[2][10] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][5] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][8] = 'obstacle'
      g[4][10] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][5] = 'obstacle'
      g[5][6] = 'obstacle'
      g[5][8] = 'obstacle'
      g[5][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [1, 2] },
      { id: 'e3', pos: [1, 9] },
      { id: 'e4', pos: [3, 7] },
      { id: 'e5', pos: [3, 11] },
      { id: 'e6', pos: [6, 0] },
      { id: 'e7', pos: [6, 4] },
      { id: 'e8', pos: [8, 9] },
      { id: 'e9', pos: [8, 2] },
      { id: 'e10', pos: [10, 7] },
      { id: 'e11', pos: [10, 0] },
      { id: 'e12', pos: [10, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 295,
    xpReward: 1000,
    hints: [
      { en: 'A satellite recalculates its path every time it passes a new position — recalculate yours after every egg!', id: 'Satelit menghitung ulang jalurnya setiap kali melewati posisi baru — hitung ulang jalurmu setelah setiap telur!' },
      { en: 'Follow the rows top to bottom, picking up both eggs in a row before dropping to the next!', id: 'Ikuti baris dari atas ke bawah, ambil kedua telur di satu baris sebelum turun ke baris berikutnya!' },
    ],
    starThresholds: [620, 443, 370, 295],
  },
  {
    id: 'jurassic-17',
    worldId: 'jurassic',
    number: 17,
    title: { en: 'Poacher Lockdown', id: 'Penguncian Pemburu Liar' },
    story: {
      en: 'Poachers have triggered a park-wide lockdown! Dr. Rex must reach thirteen eggs before the gates seal — exactly like an emergency dispatcher routing the fastest ambulance to every call at once.',
      id: 'Pemburu liar memicu penguncian seluruh taman! Dr. Rex harus mencapai tiga belas telur sebelum gerbang tertutup — persis seperti operator gawat darurat yang mengarahkan ambulans tercepat ke setiap panggilan sekaligus.',
    },
    mascotMessage: {
      en: 'Lockdown triggered! 🚨🦕 Real emergency dispatch systems route responders to every call in the smartest order. Use everything you know — LOOPS, FUNCTIONS, LISTS, and LOGIC!',
      id: 'Penguncian dipicu! 🚨🦕 Sistem gawat darurat nyata mengarahkan petugas ke setiap panggilan dalam urutan paling cerdas. Gunakan semua yang kamu tahu — PERULANGAN, FUNGSI, DAFTAR, dan LOGIKA!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][1] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][5] = 'obstacle'
      g[1][7] = 'obstacle'
      g[1][9] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][3] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][7] = 'obstacle'
      g[3][9] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][5] = 'obstacle'
      g[5][7] = 'obstacle'
      g[5][9] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][3] = 'obstacle'
      g[7][5] = 'obstacle'
      g[7][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [2, 2] },
      { id: 'e3', pos: [2, 8] },
      { id: 'e4', pos: [4, 0] },
      { id: 'e5', pos: [4, 6] },
      { id: 'e6', pos: [4, 11] },
      { id: 'e7', pos: [6, 2] },
      { id: 'e8', pos: [6, 10] },
      { id: 'e9', pos: [8, 0] },
      { id: 'e10', pos: [8, 8] },
      { id: 'e11', pos: [10, 4] },
      { id: 'e12', pos: [10, 11] },
      { id: 'e13', pos: [10, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 325,
    xpReward: 1050,
    hints: [
      { en: 'An ambulance dispatcher never backtracks unnecessarily — plan your full route with a list before moving!', id: 'Operator ambulans tidak pernah bolak-balik tanpa perlu — rencanakan seluruh rutemu dengan daftar sebelum bergerak!' },
      { en: "Thirteen eggs across seven rows — clear each row's eggs left-to-right or right-to-left before dropping down!", id: 'Tiga belas telur di tujuh baris — selesaikan telur di setiap baris dari kiri ke kanan atau sebaliknya sebelum turun!' },
    ],
    starThresholds: [683, 488, 407, 325],
  },
  {
    id: 'jurassic-18',
    worldId: 'jurassic',
    number: 18,
    title: { en: 'Meteor Shower Warning', id: 'Peringatan Hujan Meteor' },
    story: {
      en: 'A meteor shower is streaking overhead! Dr. Rex deploys a rescue plan across the whole park to save thirteen eggs — just like a drone delivery fleet assigning the shortest route to each drone in its fleet.',
      id: 'Hujan meteor melintas di langit! Dr. Rex menerapkan rencana penyelamatan di seluruh taman untuk menyelamatkan tiga belas telur — persis seperti armada drone pengiriman yang menetapkan rute terpendek untuk setiap drone dalam armadanya.',
    },
    mascotMessage: {
      en: 'Meteor shower warning! ☄️🦕 Real delivery drone fleets split routes so every drone flies the shortest possible path. Plan yours the same way!',
      id: 'Peringatan hujan meteor! ☄️🦕 Armada drone pengiriman nyata membagi rute agar setiap drone terbang di jalur sesingkat mungkin. Rencanakan rutemu dengan cara yang sama!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][5] = 'obstacle'
      g[2][7] = 'obstacle'
      g[2][8] = 'obstacle'
      g[2][10] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][5] = 'obstacle'
      g[4][7] = 'obstacle'
      g[4][8] = 'obstacle'
      g[4][10] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][7] = 'obstacle'
      g[6][8] = 'obstacle'
      g[6][10] = 'obstacle'
      g[8][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [1, 4] },
      { id: 'e3', pos: [3, 9] },
      { id: 'e4', pos: [3, 2] },
      { id: 'e5', pos: [5, 11] },
      { id: 'e6', pos: [5, 6] },
      { id: 'e7', pos: [7, 0] },
      { id: 'e8', pos: [7, 9] },
      { id: 'e9', pos: [9, 4] },
      { id: 'e10', pos: [9, 11] },
      { id: 'e11', pos: [11, 2] },
      { id: 'e12', pos: [11, 9] },
      { id: 'e13', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 355,
    xpReward: 1100,
    hints: [
      { en: 'Split the park into sections like a drone fleet splits the sky — one function per section!', id: 'Bagi taman menjadi beberapa bagian seperti armada drone membagi langit — satu fungsi per bagian!' },
      { en: 'Work through the rows from top to bottom, alternating direction each row, to cover all thirteen eggs efficiently!', id: 'Kerjakan baris dari atas ke bawah, berganti arah setiap baris, untuk menjangkau ketiga belas telur secara efisien!' },
    ],
    starThresholds: [746, 533, 445, 355],
  },
  {
    id: 'jurassic-19',
    worldId: 'jurassic',
    number: 19,
    title: { en: 'Last Nest Standing', id: 'Sarang Terakhir yang Bertahan' },
    story: {
      en: 'The nest is under siege — this is the last clutch of thirteen eggs left in the valley! Dr. Rex must plan the ultimate last-mile route, just like delivery companies optimize the final stretch to every doorstep.',
      id: 'Sarang dikepung — ini adalah kumpulan terakhir dari tiga belas telur yang tersisa di lembah! Dr. Rex harus merencanakan rute mil terakhir yang sempurna, persis seperti perusahaan pengiriman yang mengoptimalkan bagian akhir ke setiap pintu.',
    },
    mascotMessage: {
      en: "Last nest standing! 📦🦕 Real delivery companies obsess over the 'last mile' — the final stretch to each stop. Make every one of your last moves count!",
      id: "Sarang terakhir yang bertahan! 📦🦕 Perusahaan pengiriman nyata sangat memperhatikan 'mil terakhir' — bagian akhir ke setiap tujuan. Buat setiap gerakan terakhirmu berarti!",
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][2] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][5] = 'obstacle'
      g[1][7] = 'obstacle'
      g[1][9] = 'obstacle'
      g[1][10] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][5] = 'obstacle'
      g[4][7] = 'obstacle'
      g[4][9] = 'obstacle'
      g[4][10] = 'obstacle'
      g[6][2] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][7] = 'obstacle'
      g[6][9] = 'obstacle'
      g[6][10] = 'obstacle'
      g[8][2] = 'obstacle'
      g[8][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [2, 4] },
      { id: 'e3', pos: [2, 8] },
      { id: 'e4', pos: [3, 1] },
      { id: 'e5', pos: [3, 11] },
      { id: 'e6', pos: [5, 6] },
      { id: 'e7', pos: [5, 0] },
      { id: 'e8', pos: [7, 8] },
      { id: 'e9', pos: [7, 4] },
      { id: 'e10', pos: [9, 1] },
      { id: 'e11', pos: [9, 11] },
      { id: 'e12', pos: [11, 6] },
      { id: 'e13', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 385,
    xpReward: 1150,
    hints: [
      { en: "The 'last mile' is the hardest part — plan the final rows first since they're the trickiest to reach!", id: "'Mil terakhir' adalah bagian tersulit — rencanakan baris terakhir lebih dulu karena paling sulit dijangkau!" },
      { en: "Move row by row from top to bottom, collecting every egg in a row before continuing — that's the shortest connected path here!", id: 'Bergerak baris demi baris dari atas ke bawah, kumpulkan setiap telur di satu baris sebelum melanjutkan — itulah jalur terhubung terpendek di sini!' },
    ],
    starThresholds: [809, 578, 482, 385],
  },
  {
    id: 'jurassic-20',
    worldId: 'jurassic',
    number: 20,
    title: { en: 'Dawn of a New Era', id: 'Fajar Era Baru' },
    story: {
      en: 'Life returns to the park! Dr. Rex now builds a sanctuary for a new generation — thirteen eggs across the biggest park yet, guarded by every real-world routing system working together: GPS, drones, warehouse robots, and dispatch, all at once. This is the new benchmark for real-world pathfinding.',
      id: 'Kehidupan kembali ke taman! Dr. Rex kini membangun suaka untuk generasi baru — tiga belas telur di taman terbesar sejauh ini, dijaga oleh setiap sistem perutean dunia nyata yang bekerja bersama: GPS, drone, robot gudang, dan dispatch, semuanya sekaligus. Ini adalah standar baru untuk pencarian jalur dunia nyata.',
    },
    mascotMessage: {
      en: "DAWN OF A NEW ERA! 🌅🦕 Every system you've learned — GPS routing, drone fleets, warehouse robots, dispatch — comes together here. Thirteen eggs, the biggest park yet. Show me your best algorithm!",
      id: 'FAJAR ERA BARU! 🌅🦕 Semua sistem yang sudah kamu pelajari — perutean GPS, armada drone, robot gudang, dispatch — menyatu di sini. Tiga belas telur, taman terbesar sejauh ini. Tunjukkan algoritma terbaikmu!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[2][1] = 'obstacle'
      g[2][3] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][6] = 'obstacle'
      g[2][8] = 'obstacle'
      g[2][10] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][4] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][8] = 'obstacle'
      g[4][10] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][3] = 'obstacle'
      g[6][4] = 'obstacle'
      g[6][6] = 'obstacle'
      g[6][8] = 'obstacle'
      g[6][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'e1', pos: [0, 11] },
      { id: 'e2', pos: [1, 2] },
      { id: 'e3', pos: [3, 9] },
      { id: 'e4', pos: [3, 5] },
      { id: 'e5', pos: [5, 0] },
      { id: 'e6', pos: [5, 11] },
      { id: 'e7', pos: [7, 2] },
      { id: 'e8', pos: [7, 9] },
      { id: 'e9', pos: [9, 5] },
      { id: 'e10', pos: [9, 11] },
      { id: 'e11', pos: [11, 0] },
      { id: 'e12', pos: [11, 7] },
      { id: 'e13', pos: [11, 9] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 430,
    xpReward: 1300,
    hints: [
      { en: 'This is every skill combined — start with a list of all thirteen positions and a function to travel between them!', id: 'Ini adalah gabungan semua keterampilan — mulai dengan daftar ketiga belas posisi dan fungsi untuk bergerak di antaranya!' },
      { en: "Sweep the rows from top to bottom in order, collecting each row's eggs before dropping to the next — the biggest park yet needs the most disciplined route!", id: 'Sisir baris dari atas ke bawah secara berurutan, kumpulkan telur di setiap baris sebelum turun ke baris berikutnya — taman terbesar sejauh ini butuh rute paling disiplin!' },
    ],
    starThresholds: [903, 645, 539, 430],
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
      en: "The entire city grid is yours to manage! Ten critical parking zones are spread across the 10×10 map. This is one of the toughest parking challenges yet — only the most efficient algorithm will earn three stars!",
      id: 'Seluruh kisi kota menjadi tanggungjawabmu! Sepuluh zona parkir kritis tersebar di seluruh peta 10×10. Ini adalah salah satu tantangan parkir tersulit sejauh ini — hanya algoritma yang paling efisien yang akan mendapatkan tiga bintang!',
    },
    mascotMessage: {
      en: "MEGA CITY challenge! 🏙️ Congratulations — you've mastered the routing algorithms that real smart-city systems use to manage millions of vehicles. Code the perfect path and BECOME the algorithm! 🚗",
      id: 'Tantangan KOTA MEGA! 🏙️ Selamat — kamu telah menguasai algoritma perutean yang digunakan sistem kota cerdas nyata untuk mengelola jutaan kendaraan. Buat kode jalur yang sempurna dan JADILAH algoritmanya! 🚗',
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
  {
    id: 'parking-11',
    worldId: 'parking',
    number: 11,
    title: { en: 'Snow Day Closures', id: 'Penutupan Hari Salju' },
    story: {
      en: 'A surprise snowstorm has closed sections of the parking district overnight! Ten zones must be re-checked before the plows finish clearing the streets. Parker needs a route that dodges every snowdrift and closed lane.',
      id: 'Badai salju dadakan telah menutup beberapa bagian distrik parkir semalaman! Sepuluh zona harus diperiksa ulang sebelum mobil salju selesai membersihkan jalan. Parker membutuhkan rute yang menghindari setiap tumpukan salju dan jalur tertutup.',
    },
    mascotMessage: {
      en: 'Snow day chaos! ❄️ Real city plow routes are calculated by algorithms that avoid closed roads automatically. Combine LOOPS, FUNCTIONS, and LISTS to route around every snowdrift!',
      id: 'Kekacauan hari salju! ❄️ Rute mobil salju kota nyata dihitung oleh algoritma yang secara otomatis menghindari jalan tertutup. Gabungkan PERULANGAN, FUNGSI, dan DAFTAR untuk mengelilingi setiap tumpukan salju!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[0][6] = 'obstacle'
      g[1][2] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][7] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][6] = 'obstacle'
      g[5][0] = 'obstacle'
      g[5][8] = 'obstacle'
      g[6][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][3] = 'obstacle'
      g[8][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 10] },
      { id: 'p2', pos: [1, 5] },
      { id: 'p3', pos: [2, 9] },
      { id: 'p4', pos: [3, 3] },
      { id: 'p5', pos: [4, 8] },
      { id: 'p6', pos: [5, 2] },
      { id: 'p7', pos: [6, 9] },
      { id: 'p8', pos: [7, 4] },
      { id: 'p9', pos: [8, 10] },
      { id: 'p10', pos: [9, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 155,
    xpReward: 750,
    hints: [
      { en: 'Snowdrifts block some direct paths — plan a route around them before you start coding!', id: 'Tumpukan salju menghalangi beberapa jalur langsung — rencanakan rute mengelilinginya sebelum mulai membuat kode!' },
      { en: 'Group nearby zones into short functions so your path stays efficient block by block!', id: 'Kelompokkan zona-zona yang berdekatan ke dalam fungsi pendek agar jalurmu tetap efisien blok demi blok!' },
    ],
    starThresholds: [326, 232, 194, 155],
  },
  {
    id: 'parking-12',
    worldId: 'parking',
    number: 12,
    title: { en: 'EV Charging Rush', id: 'Buru-Buru Isi Daya EV' },
    story: {
      en: 'Electric vehicles are flooding in for a discount charging window! Eleven charging stalls across the lot must be checked and activated before the promotion ends. Parker must move fast and smart.',
      id: 'Mobil listrik membanjiri tempat parkir demi jendela diskon pengisian daya! Sebelas stasiun pengisian di area parkir harus diperiksa dan diaktifkan sebelum promo berakhir. Parker harus bergerak cepat dan cerdas.',
    },
    mascotMessage: {
      en: 'EV charging rush! 🔌 Real charging networks use smart routing to send drivers to the nearest free stall. Use VARIABLES to track which stalls are activated and FUNCTIONS to speed up the route!',
      id: 'Buru-buru isi daya EV! 🔌 Jaringan pengisian daya nyata menggunakan rute cerdas untuk mengarahkan pengemudi ke stasiun kosong terdekat. Gunakan VARIABEL untuk melacak stasiun yang sudah diaktifkan dan FUNGSI untuk mempercepat rute!',
    },
    gridRows: 11,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(11, 10)
      g[0][3] = 'obstacle'
      g[1][7] = 'obstacle'
      g[1][1] = 'obstacle'
      g[2][5] = 'obstacle'
      g[3][8] = 'obstacle'
      g[3][2] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][0] = 'obstacle'
      g[5][4] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][2] = 'obstacle'
      g[6][7] = 'obstacle'
      g[7][5] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][8] = 'obstacle'
      g[9][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 9] },
      { id: 'p2', pos: [1, 4] },
      { id: 'p3', pos: [2, 8] },
      { id: 'p4', pos: [2, 1] },
      { id: 'p5', pos: [3, 5] },
      { id: 'p6', pos: [4, 9] },
      { id: 'p7', pos: [5, 2] },
      { id: 'p8', pos: [6, 9] },
      { id: 'p9', pos: [7, 0] },
      { id: 'p10', pos: [8, 5] },
      { id: 'p11', pos: [10, 3] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 174,
    xpReward: 800,
    hints: [
      { en: 'Eleven stalls means eleven trips — a list keeps your plan organized!', id: 'Sebelas stasiun berarti sebelas perjalanan — daftar akan membuat rencanamu tetap teratur!' },
      { en: 'Write one function that drives to a stall, then reuse it for each position in your list!', id: 'Tulis satu fungsi yang menuju ke sebuah stasiun, lalu gunakan kembali untuk setiap posisi dalam daftarmu!' },
    ],
    starThresholds: [365, 261, 218, 174],
  },
  {
    id: 'parking-13',
    worldId: 'parking',
    number: 13,
    title: { en: 'Music Festival Weekend', id: 'Akhir Pekan Festival Musik' },
    story: {
      en: "The city's biggest music festival has taken over downtown! Eleven scattered stage-side parking zones must be cleared between sets. Parker has to sweep the whole festival grounds without missing a single stage.",
      id: 'Festival musik terbesar kota telah mengambil alih pusat kota! Sebelas zona parkir di sekitar panggung yang tersebar harus dibersihkan di antara pertunjukan. Parker harus menyapu seluruh area festival tanpa melewatkan satu panggung pun.',
    },
    mascotMessage: {
      en: 'Festival weekend! 🎸 Event organizers sweep huge grounds row by row with the same zigzag logic delivery robots use. Build a LIST of every stage zone and LOOP through your sweep pattern!',
      id: 'Akhir pekan festival! 🎸 Penyelenggara acara menyapu area luas baris demi baris dengan logika zigzag yang sama seperti yang digunakan robot pengiriman. Buat DAFTAR setiap zona panggung dan gunakan PERULANGAN untuk pola sapuanmu!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[0][5] = 'obstacle'
      g[1][2] = 'obstacle'
      g[1][8] = 'obstacle'
      g[2][4] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][0] = 'obstacle'
      g[3][6] = 'obstacle'
      g[4][3] = 'obstacle'
      g[4][8] = 'obstacle'
      g[5][1] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][2] = 'obstacle'
      g[7][7] = 'obstacle'
      g[8][4] = 'obstacle'
      g[9][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 10] },
      { id: 'p2', pos: [1, 5] },
      { id: 'p3', pos: [2, 1] },
      { id: 'p4', pos: [3, 9] },
      { id: 'p5', pos: [4, 2] },
      { id: 'p6', pos: [5, 9] },
      { id: 'p7', pos: [6, 1] },
      { id: 'p8', pos: [7, 9] },
      { id: 'p9', pos: [8, 1] },
      { id: 'p10', pos: [9, 9] },
      { id: 'p11', pos: [10, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 216,
    xpReward: 850,
    hints: [
      { en: 'Sweep the grounds row by row — zigzagging left-right-left wastes fewer steps than jumping randomly!', id: 'Sapu area baris demi baris — zigzag kiri-kanan-kiri membuang lebih sedikit langkah daripada melompat sembarangan!' },
      { en: 'Store all eleven stage zones in a list ordered by row, then loop through it top to bottom!', id: 'Simpan semua sebelas zona panggung dalam daftar yang diurutkan berdasarkan baris, lalu lakukan perulangan dari atas ke bawah!' },
    ],
    starThresholds: [454, 324, 271, 216],
  },
  {
    id: 'parking-14',
    worldId: 'parking',
    number: 14,
    title: { en: 'Downtown Marathon', id: 'Maraton Pusat Kota' },
    story: {
      en: 'Marathon day has closed half the downtown streets! Eleven checkpoint zones along the wide race route must be confirmed clear before runners arrive. Parker must navigate a much bigger course than ever before.',
      id: 'Hari maraton telah menutup separuh jalan pusat kota! Sebelas zona pos pemeriksaan di sepanjang rute lomba yang luas harus dipastikan bersih sebelum pelari tiba. Parker harus menavigasi lintasan yang jauh lebih besar dari sebelumnya.',
    },
    mascotMessage: {
      en: 'Marathon closures! 🏃 Cities plan road-closure routes with the same pathfinding logic as GPS apps. Use FUNCTIONS for each checkpoint and a LIST to keep the whole route in order!',
      id: 'Penutupan jalan maraton! 🏃 Kota merencanakan rute penutupan jalan dengan logika pencarian jalur yang sama seperti aplikasi GPS. Gunakan FUNGSI untuk setiap pos pemeriksaan dan DAFTAR untuk menjaga seluruh rute tetap berurutan!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[0][6] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][10] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][8] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][11] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][9] = 'obstacle'
      g[5][0] = 'obstacle'
      g[5][7] = 'obstacle'
      g[6][4] = 'obstacle'
      g[6][11] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][6] = 'obstacle'
      g[9][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 1] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 1] },
      { id: 'p5', pos: [4, 11] },
      { id: 'p6', pos: [5, 1] },
      { id: 'p7', pos: [6, 10] },
      { id: 'p8', pos: [7, 2] },
      { id: 'p9', pos: [8, 11] },
      { id: 'p10', pos: [9, 1] },
      { id: 'p11', pos: [10, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 275,
    xpReward: 900,
    hints: [
      { en: "The course is wider than anything you've coded before — double-check every checkpoint's row and column!", id: 'Lintasan ini lebih luas dari apa pun yang pernah kamu buat kodenya — periksa kembali baris dan kolom setiap pos pemeriksaan!' },
      { en: "Write a reusable function for 'travel to checkpoint' and call it once per zone in your list!", id: "Tulis fungsi yang dapat digunakan kembali untuk 'pergi ke pos pemeriksaan' dan panggil sekali untuk setiap zona dalam daftarmu!" },
    ],
    starThresholds: [578, 412, 345, 275],
  },
  {
    id: 'parking-15',
    worldId: 'parking',
    number: 15,
    title: { en: 'Cruise Ship Terminal', id: 'Terminal Kapal Pesiar' },
    story: {
      en: "A cruise ship the size of a small city has just docked! Twelve passenger drop-off zones across the sprawling terminal must be confirmed before boarding begins. This is Parker's biggest single terminal yet.",
      id: 'Kapal pesiar sebesar kota kecil baru saja berlabuh! Dua belas zona penurunan penumpang di terminal yang luas harus dipastikan sebelum boarding dimulai. Ini adalah terminal tunggal terbesar yang pernah dihadapi Parker.',
    },
    mascotMessage: {
      en: "Cruise terminal! 🛳️ Ports track thousands of arriving passengers with the same list-and-loop systems you're learning. Use LISTS to queue all twelve drop-off zones and LOOPS to visit them fast!",
      id: 'Terminal kapal pesiar! 🛳️ Pelabuhan melacak ribuan penumpang yang datang dengan sistem daftar-dan-perulangan yang sama seperti yang kamu pelajari. Gunakan DAFTAR untuk mengantri kedua belas zona penurunan dan PERULANGAN untuk mengunjunginya dengan cepat!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[0][7] = 'obstacle'
      g[1][4] = 'obstacle'
      g[1][11] = 'obstacle'
      g[2][2] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][6] = 'obstacle'
      g[3][0] = 'obstacle'
      g[4][10] = 'obstacle'
      g[4][3] = 'obstacle'
      g[5][8] = 'obstacle'
      g[5][1] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][11] = 'obstacle'
      g[7][2] = 'obstacle'
      g[7][9] = 'obstacle'
      g[8][6] = 'obstacle'
      g[9][3] = 'obstacle'
      g[9][10] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 1] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 1] },
      { id: 'p5', pos: [4, 11] },
      { id: 'p6', pos: [5, 2] },
      { id: 'p7', pos: [5, 11] },
      { id: 'p8', pos: [6, 1] },
      { id: 'p9', pos: [7, 11] },
      { id: 'p10', pos: [8, 1] },
      { id: 'p11', pos: [9, 11] },
      { id: 'p12', pos: [10, 1] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 317,
    xpReward: 950,
    hints: [
      { en: 'Twelve zones is your biggest list yet — sort it by row before you start moving!', id: 'Dua belas zona adalah daftar terbesarmu sejauh ini — urutkan berdasarkan baris sebelum kamu mulai bergerak!' },
      { en: 'Alternate between the left and right edges of the terminal as you sweep down each row!', id: 'Berpindah bergantian antara tepi kiri dan kanan terminal saat kamu menyapu setiap baris ke bawah!' },
    ],
    starThresholds: [666, 476, 397, 317],
  },
  {
    id: 'parking-16',
    worldId: 'parking',
    number: 16,
    title: { en: 'Black Friday Blitz', id: 'Serbuan Black Friday' },
    story: {
      en: "It's the biggest shopping day of the year! Twelve retail bays across a packed 12-row lot must be secured before doors open. Parker faces the densest crowd of obstacles yet.",
      id: 'Ini adalah hari belanja terbesar tahun ini! Dua belas area ritel di area parkir 12 baris yang padat harus diamankan sebelum pintu dibuka. Parker menghadapi kepadatan rintangan terpadat sejauh ini.',
    },
    mascotMessage: {
      en: 'Black Friday blitz! 🛒 Retailers plan parking flow months in advance using route simulations just like this one. Combine every tool — LOOPS, FUNCTIONS, VARIABLES, LISTS — to beat the rush!',
      id: 'Serbuan Black Friday! 🛒 Peritel merencanakan alur parkir berbulan-bulan sebelumnya menggunakan simulasi rute seperti ini. Gabungkan semua alat — PERULANGAN, FUNGSI, VARIABEL, DAFTAR — untuk mengalahkan keramaian!',
    },
    gridRows: 12,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(12, 11)
      g[0][5] = 'obstacle'
      g[1][2] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][7] = 'obstacle'
      g[2][0] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][4] = 'obstacle'
      g[3][10] = 'obstacle'
      g[4][1] = 'obstacle'
      g[4][8] = 'obstacle'
      g[5][6] = 'obstacle'
      g[5][3] = 'obstacle'
      g[6][9] = 'obstacle'
      g[6][0] = 'obstacle'
      g[7][5] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][2] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][7] = 'obstacle'
      g[10][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 10] },
      { id: 'p2', pos: [1, 0] },
      { id: 'p3', pos: [2, 10] },
      { id: 'p4', pos: [3, 0] },
      { id: 'p5', pos: [4, 10] },
      { id: 'p6', pos: [5, 0] },
      { id: 'p7', pos: [6, 10] },
      { id: 'p8', pos: [7, 0] },
      { id: 'p9', pos: [8, 10] },
      { id: 'p10', pos: [9, 0] },
      { id: 'p11', pos: [10, 10] },
      { id: 'p12', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 326,
    xpReward: 1000,
    hints: [
      { en: 'With 12 rows and this many obstacles, plan your sweep direction before writing a single block!', id: 'Dengan 12 baris dan rintangan sebanyak ini, rencanakan arah sapuanmu sebelum menulis satu blok pun!' },
      { en: "Alternate left-edge and right-edge zones row by row — it's the fastest way to cover a tall lot!", id: 'Berpindah antara zona tepi kiri dan tepi kanan baris demi baris — ini cara tercepat untuk mencakup area parkir yang tinggi!' },
    ],
    starThresholds: [685, 489, 408, 326],
  },
  {
    id: 'parking-17',
    worldId: 'parking',
    number: 17,
    title: { en: "New Year's Eve Countdown", id: 'Hitung Mundur Malam Tahun Baru' },
    story: {
      en: "Fireworks launch at midnight and the whole city is parking at once! Twelve crowd-control zones across a full 12×12 grid must be locked down before the countdown begins. There's no room for wasted moves tonight.",
      id: 'Kembang api akan diluncurkan tepat tengah malam dan seluruh kota sedang parkir bersamaan! Dua belas zona pengendalian keramaian di seluruh kisi 12×12 harus diamankan sebelum hitung mundur dimulai. Tidak ada ruang untuk gerakan yang sia-sia malam ini.',
    },
    mascotMessage: {
      en: "Countdown to midnight! 🎆 Big cities run crowd-control software that reroutes traffic in real time on New Year's Eve. Use everything you've learned to lock down all twelve zones before the ball drops!",
      id: 'Hitung mundur menuju tengah malam! 🎆 Kota-kota besar menjalankan perangkat lunak pengendalian keramaian yang mengalihkan lalu lintas secara real time saat malam Tahun Baru. Gunakan semua yang telah kamu pelajari untuk mengamankan kedua belas zona sebelum hitung mundur berakhir!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[0][6] = 'obstacle'
      g[1][3] = 'obstacle'
      g[1][10] = 'obstacle'
      g[2][8] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][11] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][9] = 'obstacle'
      g[5][7] = 'obstacle'
      g[5][0] = 'obstacle'
      g[6][4] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][8] = 'obstacle'
      g[8][6] = 'obstacle'
      g[8][11] = 'obstacle'
      g[9][3] = 'obstacle'
      g[10][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 0] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 0] },
      { id: 'p5', pos: [4, 11] },
      { id: 'p6', pos: [5, 1] },
      { id: 'p7', pos: [6, 11] },
      { id: 'p8', pos: [7, 0] },
      { id: 'p9', pos: [8, 10] },
      { id: 'p10', pos: [9, 0] },
      { id: 'p11', pos: [10, 11] },
      { id: 'p12', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 342,
    xpReward: 1050,
    hints: [
      { en: 'A full 12×12 grid means longer trips between zones — budget extra moves for the far corners!', id: 'Kisi 12×12 penuh berarti perjalanan lebih panjang antar zona — sisakan lebih banyak gerakan untuk sudut-sudut jauh!' },
      { en: 'Sweep zigzag from edge to edge, row by row, to cover the whole grid without backtracking!', id: 'Sapu secara zigzag dari tepi ke tepi, baris demi baris, untuk mencakup seluruh kisi tanpa mundur ke belakang!' },
    ],
    starThresholds: [718, 513, 429, 342],
  },
  {
    id: 'parking-18',
    worldId: 'parking',
    number: 18,
    title: { en: 'Convention Center Expo', id: 'Ekspo Pusat Konvensi' },
    story: {
      en: "A massive trade expo has taken over the convention center! Twelve exhibitor loading docks must be checked before the show floor opens to the public. The obstacle-filled loading yard is Parker's trickiest maze yet.",
      id: 'Ekspo dagang besar-besaran telah mengambil alih pusat konvensi! Dua belas dermaga bongkar muat peserta pameran harus diperiksa sebelum lantai pameran dibuka untuk umum. Halaman bongkar muat yang penuh rintangan ini adalah labirin tersulit Parker sejauh ini.',
    },
    mascotMessage: {
      en: 'Expo day! 📦 Convention centers schedule loading docks with routing software to avoid gridlock backstage. Chain FUNCTIONS and LISTS together to clear all twelve docks efficiently!',
      id: 'Hari ekspo! 📦 Pusat konvensi menjadwalkan dermaga bongkar muat dengan perangkat lunak perutean untuk menghindari kemacetan di belakang panggung. Rangkai FUNGSI dan DAFTAR bersama untuk membersihkan kedua belas dermaga secara efisien!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[0][3] = 'obstacle'
      g[0][8] = 'obstacle'
      g[1][6] = 'obstacle'
      g[1][10] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][9] = 'obstacle'
      g[3][4] = 'obstacle'
      g[3][11] = 'obstacle'
      g[4][7] = 'obstacle'
      g[4][0] = 'obstacle'
      g[5][10] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][5] = 'obstacle'
      g[6][11] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][8] = 'obstacle'
      g[8][4] = 'obstacle'
      g[9][9] = 'obstacle'
      g[10][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 0] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 0] },
      { id: 'p5', pos: [4, 11] },
      { id: 'p6', pos: [5, 0] },
      { id: 'p7', pos: [6, 10] },
      { id: 'p8', pos: [7, 0] },
      { id: 'p9', pos: [8, 11] },
      { id: 'p10', pos: [9, 0] },
      { id: 'p11', pos: [10, 11] },
      { id: 'p12', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 346,
    xpReward: 1100,
    hints: [
      { en: 'The loading yard is packed with obstacles — trace your route around them before coding!', id: 'Halaman bongkar muat penuh dengan rintangan — telusuri rutemu mengelilinginya sebelum membuat kode!' },
      { en: 'Visit docks in row order and let a single helper function carry you between each one!', id: 'Kunjungi dermaga secara berurutan berdasarkan baris dan biarkan satu fungsi pembantu membawamu di antara masing-masing!' },
    ],
    starThresholds: [727, 519, 434, 346],
  },
  {
    id: 'parking-19',
    worldId: 'parking',
    number: 19,
    title: { en: 'State Fair Weekend', id: 'Akhir Pekan Pekan Raya' },
    story: {
      en: 'The state fair has rolled into town with rides, vendors, and record crowds! Thirteen vendor and visitor zones spread across the fairgrounds must be checked before the gates open. Parker has never managed this many zones at once.',
      id: 'Pekan raya telah tiba di kota dengan wahana, pedagang, dan kerumunan rekor! Tiga belas zona pedagang dan pengunjung yang tersebar di area pekan raya harus diperiksa sebelum gerbang dibuka. Parker belum pernah mengelola zona sebanyak ini sekaligus.',
    },
    mascotMessage: {
      en: 'State fair weekend! 🎡 Large events like this run on route-planning software that handles dozens of zones at once. Use LISTS to hold all thirteen zones and FUNCTIONS to visit them one by one!',
      id: 'Akhir pekan pekan raya! 🎡 Acara besar seperti ini berjalan dengan perangkat lunak perencanaan rute yang menangani puluhan zona sekaligus. Gunakan DAFTAR untuk menyimpan ketiga belas zona dan FUNGSI untuk mengunjunginya satu per satu!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[0][8] = 'obstacle'
      g[1][5] = 'obstacle'
      g[1][0] = 'obstacle'
      g[2][10] = 'obstacle'
      g[2][3] = 'obstacle'
      g[3][7] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][11] = 'obstacle'
      g[4][4] = 'obstacle'
      g[5][9] = 'obstacle'
      g[5][2] = 'obstacle'
      g[6][6] = 'obstacle'
      g[6][0] = 'obstacle'
      g[7][10] = 'obstacle'
      g[7][3] = 'obstacle'
      g[8][8] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][11] = 'obstacle'
      g[10][5] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 1] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 0] },
      { id: 'p5', pos: [4, 10] },
      { id: 'p6', pos: [5, 0] },
      { id: 'p7', pos: [6, 11] },
      { id: 'p8', pos: [6, 1] },
      { id: 'p9', pos: [7, 11] },
      { id: 'p10', pos: [8, 0] },
      { id: 'p11', pos: [9, 10] },
      { id: 'p12', pos: [10, 0] },
      { id: 'p13', pos: [11, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 353,
    xpReward: 1150,
    hints: [
      { en: 'Thirteen zones is a lot to track — write your list first, then code the movement!', id: 'Tiga belas zona adalah jumlah yang banyak untuk dilacak — tulis daftarmu dulu, baru buat kode gerakannya!' },
      { en: 'Sweep the fairgrounds zigzag style, alternating sides as you move down each row!', id: 'Sapu area pekan raya dengan gaya zigzag, berpindah sisi saat kamu bergerak turun di setiap baris!' },
    ],
    starThresholds: [741, 530, 442, 353],
  },
  {
    id: 'parking-20',
    worldId: 'parking',
    number: 20,
    title: { en: 'Smart-City Command Center', id: 'Pusat Komando Kota Cerdas' },
    story: {
      en: "You've been promoted to lead a real smart-city command center! Thirteen critical zones across the largest, most obstacle-packed grid yet must be routed perfectly. This is the biggest routing challenge City Parking has ever thrown at you!",
      id: 'Kamu telah dipromosikan untuk memimpin pusat komando kota cerdas yang sesungguhnya! Tiga belas zona kritis di kisi terbesar dan paling penuh rintangan sejauh ini harus dirutekan dengan sempurna. Ini adalah tantangan perutean terbesar yang pernah diberikan City Parking kepadamu!',
    },
    mascotMessage: {
      en: "SMART-CITY COMMAND CENTER! 🌆 Real smart cities run routing algorithms exactly like the one you just wrote to manage millions of vehicles every day. You've mastered every tool in the parking officer's toolkit — congratulations, Master Router! 🚦",
      id: 'PUSAT KOMANDO KOTA CERDAS! 🌆 Kota cerdas nyata menjalankan algoritma perutean persis seperti yang baru saja kamu tulis untuk mengelola jutaan kendaraan setiap hari. Kamu telah menguasai setiap alat dalam perangkat petugas parkir — selamat, Sang Master Perutean! 🚦',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[0][3] = 'obstacle'
      g[0][9] = 'obstacle'
      g[1][6] = 'obstacle'
      g[1][1] = 'obstacle'
      g[2][10] = 'obstacle'
      g[2][4] = 'obstacle'
      g[3][8] = 'obstacle'
      g[3][1] = 'obstacle'
      g[4][6] = 'obstacle'
      g[4][11] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][7] = 'obstacle'
      g[7][4] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][2] = 'obstacle'
      g[8][8] = 'obstacle'
      g[9][6] = 'obstacle'
      g[10][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 'p1', pos: [0, 11] },
      { id: 'p2', pos: [1, 0] },
      { id: 'p3', pos: [2, 11] },
      { id: 'p4', pos: [3, 0] },
      { id: 'p5', pos: [4, 10] },
      { id: 'p6', pos: [5, 0] },
      { id: 'p7', pos: [6, 11] },
      { id: 'p8', pos: [6, 0] },
      { id: 'p9', pos: [7, 11] },
      { id: 'p10', pos: [8, 0] },
      { id: 'p11', pos: [9, 11] },
      { id: 'p12', pos: [10, 0] },
      { id: 'p13', pos: [11, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 399,
    xpReward: 1300,
    hints: [
      { en: 'This is the largest grid yet — sketch your full zigzag sweep on paper before writing any blocks!', id: 'Ini adalah kisi terbesar sejauh ini — sketsakan seluruh pola sapuan zigzagmu di atas kertas sebelum menulis blok apa pun!' },
      { en: 'Store all thirteen zones in one list, sweep row by row alternating edges, and let functions carry the repeated legs!', id: 'Simpan ketiga belas zona dalam satu daftar, sapu baris demi baris berpindah sisi, dan biarkan fungsi menangani perjalanan yang berulang!' },
    ],
    starThresholds: [838, 598, 500, 399],
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
      en: "One of the toughest dispatch runs yet: ten packages scattered across the entire 10×10 space warehouse. This is the Galactic Dispatch — a serious test of Sorty's algorithmic mastery. Code the perfect route and become a true Master Sorter!",
      id: 'Salah satu run pengiriman tersulit sejauh ini: sepuluh paket tersebar di seluruh gudang luar angkasa 10×10. Ini adalah Pengiriman Galaktik — ujian serius penguasaan algoritma Sorty. Buat kode rute yang sempurna dan jadilah Penyortir Master sejati!',
    },
    mascotMessage: {
      en: "GALACTIC DISPATCH — one of the toughest challenges yet! 🚀📦 You've learned the algorithms that power real robots, apps, and AI systems. Ten packages, one perfect run. Show the galaxy what a true programmer can do! 🌌",
      id: 'PENGIRIMAN GALAKTIK — salah satu tantangan tersulit sejauh ini! 🚀📦 Kamu telah mempelajari algoritma yang menggerakkan robot nyata, aplikasi, dan sistem AI. Sepuluh paket, satu run yang sempurna. Tunjukkan kepada galaksi apa yang bisa dilakukan programmer sejati! 🌌',
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
  {
    id: 'sorting-11',
    worldId: 'sorting',
    number: 11,
    title: { en: 'Return Processing Rush', id: 'Kejar Proses Retur' },
    story: {
      en: "Customers sent packages back! Ten returned items are scattered around the warehouse waiting to be re-shelved before the next shipping cycle. Sorty must sweep through and reclaim every one — reverse logistics is just as tricky as forward dispatch.",
      id: 'Pelanggan mengirim paket kembali! Sepuluh barang retur tersebar di gudang menunggu untuk disimpan ulang sebelum siklus pengiriman berikutnya. Sorty harus menyapu dan mengambil semuanya — logistik terbalik sama rumitnya dengan pengiriman biasa.',
    },
    mascotMessage: {
      en: "Return rush! 🔄📦 Real warehouses run reverse-logistics algorithms just like forward ones — the packages just flow the other way. Plan your sweep route before you start coding!",
      id: 'Kejar retur! 🔄📦 Gudang nyata menjalankan algoritma logistik terbalik sama seperti yang maju — paketnya saja mengalir ke arah sebaliknya. Rencanakan rute sapuanmu sebelum mulai menulis kode!',
    },
    gridRows: 10,
    gridCols: 10,
    cells: (() => {
      const g = emptyGrid(10, 10)
      g[0][8] = 'obstacle'
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][5] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][8] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][9] = 'obstacle'
      g[6][1] = 'obstacle'
      g[6][7] = 'obstacle'
      g[6][9] = 'obstacle'
      g[7][1] = 'obstacle'
      g[7][9] = 'obstacle'
      g[9][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 7] },
      { id: 's2', pos: [2, 9] },
      { id: 's3', pos: [4, 6] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [5, 8] },
      { id: 's7', pos: [7, 5] },
      { id: 's8', pos: [6, 2] },
      { id: 's9', pos: [9, 9] },
      { id: 's10', pos: [8, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 180,
    xpReward: 750,
    hints: [
      { en: 'Store all ten return positions in a list before you plan your sweep!', id: 'Simpan semua sepuluh posisi retur dalam daftar sebelum merencanakan sapuanmu!' },
      { en: 'A reusable "goTo(row, col)" function handles every stop with the same few blocks!', id: 'Fungsi "goTo(baris, kolom)" yang dapat digunakan kembali menangani setiap pemberhentian dengan blok yang sama!' },
    ],
    starThresholds: [378, 270, 225, 180],
  },
  {
    id: 'sorting-12',
    worldId: 'sorting',
    number: 12,
    title: { en: 'Cross-Dock Relay', id: 'Relay Cross-Dock' },
    story: {
      en: "Ten packages arrive at one dock and must go straight to another — no shelving, just a fast relay across a wider warehouse floor. Sorty has to plan the handoff route through a busier layout than ever before.",
      id: 'Sepuluh paket tiba di satu dermaga dan harus langsung menuju dermaga lain — tanpa disimpan di rak, hanya relay cepat melintasi lantai gudang yang lebih luas. Sorty harus merencanakan rute serah terima melalui tata letak yang lebih ramai dari sebelumnya.',
    },
    mascotMessage: {
      en: "Cross-dock relay! 🚚 Real distribution centers skip storage entirely for fast-moving freight — straight from inbound to outbound. Use FUNCTIONS so your relay code stays clean across a bigger floor!",
      id: 'Relay cross-dock! 🚚 Pusat distribusi nyata melewatkan penyimpanan sepenuhnya untuk kargo yang bergerak cepat — langsung dari masuk ke keluar. Gunakan FUNGSI agar kodemu tetap rapi di lantai yang lebih besar!',
    },
    gridRows: 10,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(10, 11)
      g[1][0] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[3][1] = 'obstacle'
      g[3][6] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][10] = 'obstacle'
      g[5][3] = 'obstacle'
      g[5][8] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][2] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][5] = 'obstacle'
      g[9][7] = 'obstacle'
      g[9][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [3, 10] },
      { id: 's3', pos: [2, 4] },
      { id: 's4', pos: [5, 7] },
      { id: 's5', pos: [4, 1] },
      { id: 's6', pos: [7, 9] },
      { id: 's7', pos: [6, 3] },
      { id: 's8', pos: [9, 0] },
      { id: 's9', pos: [8, 7] },
      { id: 's10', pos: [1, 5] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 200,
    xpReward: 800,
    hints: [
      { en: 'The floor is wider now — plan which side to clear first before writing blocks!', id: 'Lantainya sekarang lebih lebar — rencanakan sisi mana yang dibereskan lebih dulu sebelum menulis blok!' },
      { en: 'Keep a list of relay stops and loop through it with one shared function!', id: 'Simpan daftar pemberhentian relay dan ulangi dengan satu fungsi bersama!' },
    ],
    starThresholds: [420, 300, 250, 200],
  },
  {
    id: 'sorting-13',
    worldId: 'sorting',
    number: 13,
    title: { en: 'Cold-Chain Priority', id: 'Prioritas Rantai Dingin' },
    story: {
      en: "Eleven perishable packages must reach cold storage before they spoil! Sorty must find the fastest route across an even larger warehouse — every wasted move counts when the cargo is time-sensitive.",
      id: 'Sebelas paket yang mudah rusak harus mencapai penyimpanan dingin sebelum busuk! Sorty harus menemukan rute tercepat melintasi gudang yang lebih besar lagi — setiap gerakan yang terbuang sangat berarti ketika kargo sensitif waktu.',
    },
    mascotMessage: {
      en: "Cold-chain priority! ❄️📦 Real supply chains race against the clock for perishable goods. Use LISTS to order your stops by urgency and FUNCTIONS to keep your route efficient!",
      id: 'Prioritas rantai dingin! ❄️📦 Rantai pasok nyata berpacu dengan waktu untuk barang yang mudah rusak. Gunakan DAFTAR untuk mengurutkan pemberhentianmu berdasarkan urgensi dan FUNGSI agar rutemu tetap efisien!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][8] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][4] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [2, 10] },
      { id: 's3', pos: [4, 7] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [6, 9] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [8, 2] },
      { id: 's9', pos: [10, 10] },
      { id: 's10', pos: [9, 6] },
      { id: 's11', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 220,
    xpReward: 850,
    hints: [
      { en: 'Eleven packages, one clock — sketch your full route on paper before coding!', id: 'Sebelas paket, satu jam — buat sketsa rute lengkapmu di kertas sebelum menulis kode!' },
      { en: 'A function that takes a target row and column removes almost all repeated movement code!', id: 'Fungsi yang menerima baris dan kolom target menghapus hampir semua kode gerakan yang berulang!' },
    ],
    starThresholds: [462, 330, 275, 220],
  },
  {
    id: 'sorting-14',
    worldId: 'sorting',
    number: 14,
    title: { en: 'Overnight Express', id: 'Ekspres Semalam' },
    story: {
      en: "The overnight express truck leaves at dawn! Eleven packages are scattered across a warehouse in a completely different pattern than Sorty has seen before, and every one must be aboard before the doors close.",
      id: 'Truk ekspres semalam berangkat saat fajar! Sebelas paket tersebar di gudang dengan pola yang sama sekali berbeda dari yang pernah Sorty lihat, dan setiap paket harus naik sebelum pintu ditutup.',
    },
    mascotMessage: {
      en: "Overnight express! 🌙🚚 Real shipping networks run their busiest routes while everyone sleeps. Plan carefully — the layout has changed, so your old route won't work here!",
      id: 'Ekspres semalam! 🌙🚚 Jaringan pengiriman nyata menjalankan rute tersibuknya saat semua orang tidur. Rencanakan dengan hati-hati — tata letaknya berubah, jadi rute lamamu tidak akan berhasil di sini!',
    },
    gridRows: 11,
    gridCols: 11,
    cells: (() => {
      const g = emptyGrid(11, 11)
      g[1][1] = 'obstacle'
      g[9][1] = 'obstacle'
      g[1][2] = 'obstacle'
      g[6][2] = 'obstacle'
      g[5][3] = 'obstacle'
      g[9][3] = 'obstacle'
      g[2][4] = 'obstacle'
      g[5][4] = 'obstacle'
      g[2][5] = 'obstacle'
      g[10][5] = 'obstacle'
      g[10][6] = 'obstacle'
      g[8][7] = 'obstacle'
      g[10][7] = 'obstacle'
      g[1][8] = 'obstacle'
      g[9][8] = 'obstacle'
      g[1][9] = 'obstacle'
      g[4][9] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [10, 0] },
      { id: 's2', pos: [10, 2] },
      { id: 's3', pos: [7, 4] },
      { id: 's4', pos: [3, 1] },
      { id: 's5', pos: [0, 3] },
      { id: 's6', pos: [9, 6] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [2, 8] },
      { id: 's9', pos: [10, 10] },
      { id: 's10', pos: [6, 9] },
      { id: 's11', pos: [0, 7] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 240,
    xpReward: 900,
    hints: [
      { en: "This warehouse is laid out differently — don't reuse your old route, plan a fresh one!", id: 'Gudang ini tata letaknya berbeda — jangan pakai ulang rute lamamu, rencanakan yang baru!' },
      { en: 'Group nearby packages into small clusters and visit one cluster at a time!', id: 'Kelompokkan paket-paket terdekat menjadi kluster kecil dan kunjungi satu kluster dalam satu waktu!' },
    ],
    starThresholds: [504, 360, 300, 240],
  },
  {
    id: 'sorting-15',
    worldId: 'sorting',
    number: 15,
    title: { en: 'Zero-G Exchange Hub', id: 'Hub Pertukaran Gravitasi-Nol' },
    story: {
      en: "The zero-gravity exchange hub just opened a new wing! Eleven packages float across an even wider floor, and Sorty must extend its usual route into unfamiliar territory to collect them all.",
      id: 'Hub pertukaran gravitasi-nol baru saja membuka sayap baru! Sebelas paket melayang di lantai yang lebih lebar, dan Sorty harus memperluas rute biasanya ke wilayah yang belum dikenal untuk mengumpulkan semuanya.',
    },
    mascotMessage: {
      en: "Zero-G exchange! 🛰️📦 New wing, wider floor, same great algorithms. Extend your list of stops and let your function handle the extra distance!",
      id: 'Pertukaran gravitasi-nol! 🛰️📦 Sayap baru, lantai lebih lebar, algoritma tetap hebat. Perluas daftar pemberhentianmu dan biarkan fungsimu menangani jarak tambahan!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][8] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][4] = 'obstacle'
      g[5][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [2, 11] },
      { id: 's3', pos: [4, 7] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [6, 9] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [8, 2] },
      { id: 's9', pos: [10, 10] },
      { id: 's10', pos: [9, 6] },
      { id: 's11', pos: [7, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 260,
    xpReward: 950,
    hints: [
      { en: "The new wing adds an extra column on the right — don't forget to route through it!", id: 'Sayap baru menambahkan satu kolom ekstra di kanan — jangan lupa untuk melewatinya!' },
      { en: 'Reuse the same goTo(row, col) function for every stop, including the new wing!', id: 'Gunakan kembali fungsi goTo(baris, kolom) yang sama untuk setiap pemberhentian, termasuk sayap baru!' },
    ],
    starThresholds: [546, 390, 325, 260],
  },
  {
    id: 'sorting-16',
    worldId: 'sorting',
    number: 16,
    title: { en: 'Peak Season Overflow', id: 'Luapan Musim Puncak' },
    story: {
      en: "Peak season overflow — twelve packages now, the most Sorty has ever handled at once! The zero-G hub is packed corner to corner, and a single missed package means the whole shipment is late.",
      id: 'Luapan musim puncak — dua belas paket sekarang, jumlah terbanyak yang pernah ditangani Sorty sekaligus! Hub gravitasi-nol penuh sesak dari sudut ke sudut, dan satu paket yang terlewat berarti seluruh pengiriman terlambat.',
    },
    mascotMessage: {
      en: "Peak season! 📦📦📦 Twelve packages is a real logistics challenge — even professional warehouse software struggles here. Build a solid list, loop through it, and trust your function!",
      id: 'Musim puncak! 📦📦📦 Dua belas paket adalah tantangan logistik sesungguhnya — bahkan perangkat lunak gudang profesional kesulitan di sini. Buat daftar yang solid, ulangi dengan perulangan, dan percayai fungsimu!',
    },
    gridRows: 11,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(11, 12)
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][8] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][4] = 'obstacle'
      g[5][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [2, 11] },
      { id: 's3', pos: [4, 7] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [6, 9] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [8, 2] },
      { id: 's9', pos: [10, 10] },
      { id: 's10', pos: [9, 6] },
      { id: 's11', pos: [7, 0] },
      { id: 's12', pos: [0, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 280,
    xpReward: 1000,
    hints: [
      { en: 'Twelve stops — write the full list of positions before touching a single move block!', id: 'Dua belas pemberhentian — tulis daftar lengkap posisinya sebelum menyentuh satu blok gerak pun!' },
      { en: "The twelfth package sits in the far corner — save it for last so you don't backtrack!", id: 'Paket kedua belas ada di sudut terjauh — simpan untuk yang terakhir agar tidak jalan bolak-balik!' },
    ],
    starThresholds: [588, 420, 350, 280],
  },
  {
    id: 'sorting-17',
    worldId: 'sorting',
    number: 17,
    title: { en: 'Orbital Transfer Station', id: 'Stasiun Transfer Orbital' },
    story: {
      en: "Welcome to the orbital transfer station — a full extra row has been added to the warehouse floor for the biggest handoff yet. Twelve packages, nineteen obstacles, and a route that stretches further than ever.",
      id: 'Selamat datang di stasiun transfer orbital — satu baris ekstra penuh telah ditambahkan ke lantai gudang untuk serah terima terbesar sejauh ini. Dua belas paket, sembilan belas rintangan, dan rute yang membentang lebih jauh dari sebelumnya.',
    },
    mascotMessage: {
      en: "Orbital transfer! 🛰️ The floor just grew again. Real space stations coordinate transfers across huge modules using the exact same routing logic you're building!",
      id: 'Transfer orbital! 🛰️ Lantainya baru saja bertambah lagi. Stasiun luar angkasa nyata mengoordinasikan transfer di modul-modul besar menggunakan logika perutean yang persis sama dengan yang kamu bangun!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][8] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][4] = 'obstacle'
      g[5][11] = 'obstacle'
      g[11][1] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [2, 11] },
      { id: 's3', pos: [4, 7] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [6, 9] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [8, 2] },
      { id: 's9', pos: [11, 10] },
      { id: 's10', pos: [9, 6] },
      { id: 's11', pos: [7, 0] },
      { id: 's12', pos: [0, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 300,
    xpReward: 1050,
    hints: [
      { en: 'The extra bottom row holds one package — route through it without doubling back!', id: 'Baris bawah ekstra menyimpan satu paket — lewati tanpa jalan bolak-balik!' },
      { en: 'Sort your list by distance from the last stop for a true nearest-neighbour sweep!', id: 'Urutkan daftarmu berdasarkan jarak dari pemberhentian terakhir untuk sapuan tetangga terdekat yang sesungguhnya!' },
    ],
    starThresholds: [630, 450, 375, 300],
  },
  {
    id: 'sorting-18',
    worldId: 'sorting',
    number: 18,
    title: { en: 'Interstellar Consolidation', id: 'Konsolidasi Antarbintang' },
    story: {
      en: "Before the interstellar jump, every scattered package must be consolidated into one shipment. Twelve packages sit across a station laid out completely differently from anything Sorty has sorted before.",
      id: 'Sebelum lompatan antarbintang, setiap paket yang tersebar harus dikonsolidasikan menjadi satu pengiriman. Dua belas paket berada di stasiun dengan tata letak yang sama sekali berbeda dari yang pernah disortir Sorty sebelumnya.',
    },
    mascotMessage: {
      en: "Interstellar consolidation! 🚀 Every package must be aboard before the jump — no exceptions. Trust the algorithm you've built and let your function do the heavy lifting!",
      id: 'Konsolidasi antarbintang! 🚀 Setiap paket harus sudah naik sebelum lompatan — tanpa kecuali. Percayai algoritma yang telah kamu bangun dan biarkan fungsimu melakukan kerja berat!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][1] = 'obstacle'
      g[9][1] = 'obstacle'
      g[1][2] = 'obstacle'
      g[6][2] = 'obstacle'
      g[5][3] = 'obstacle'
      g[9][3] = 'obstacle'
      g[2][4] = 'obstacle'
      g[5][4] = 'obstacle'
      g[2][5] = 'obstacle'
      g[10][5] = 'obstacle'
      g[10][6] = 'obstacle'
      g[8][7] = 'obstacle'
      g[10][7] = 'obstacle'
      g[1][8] = 'obstacle'
      g[9][8] = 'obstacle'
      g[1][9] = 'obstacle'
      g[4][9] = 'obstacle'
      g[11][5] = 'obstacle'
      g[1][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [10, 0] },
      { id: 's2', pos: [11, 2] },
      { id: 's3', pos: [7, 4] },
      { id: 's4', pos: [3, 1] },
      { id: 's5', pos: [0, 3] },
      { id: 's6', pos: [9, 6] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [2, 8] },
      { id: 's9', pos: [10, 11] },
      { id: 's10', pos: [6, 9] },
      { id: 's11', pos: [0, 7] },
      { id: 's12', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 320,
    xpReward: 1100,
    hints: [
      { en: "A completely new layout — don't assume anything, map every stop fresh!", id: 'Tata letak yang sama sekali baru — jangan berasumsi apa pun, petakan setiap pemberhentian dari awal!' },
      { en: 'Two packages sit in far corners of the bottom row — visit them back to back!', id: 'Dua paket berada di sudut jauh baris bawah — kunjungi keduanya secara berurutan!' },
    ],
    starThresholds: [672, 480, 400, 320],
  },
  {
    id: 'sorting-19',
    worldId: 'sorting',
    number: 19,
    title: { en: 'Quantum Route Optimization', id: 'Optimisasi Rute Kuantum' },
    story: {
      en: "Thirteen packages, twenty obstacles, one warehouse floor. Sorty must apply true nearest-neighbour routing — greedily choosing the closest unsorted package at every step — to beat the clock on the busiest floor yet.",
      id: 'Tiga belas paket, dua puluh rintangan, satu lantai gudang. Sorty harus menerapkan perutean tetangga terdekat sesungguhnya — memilih paket terdekat yang belum disortir secara serakah di setiap langkah — untuk mengalahkan waktu di lantai tersibuk sejauh ini.',
    },
    mascotMessage: {
      en: "Quantum routing! ⚛️📦 Thirteen packages — the greedy nearest-neighbour algorithm real robots use is your best friend here. Pick the closest package, sort it, repeat!",
      id: 'Perutean kuantum! ⚛️📦 Tiga belas paket — algoritma tetangga terdekat serakah yang digunakan robot nyata adalah teman terbaikmu di sini. Pilih paket terdekat, sortir, ulangi!',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][1] = 'obstacle'
      g[1][9] = 'obstacle'
      g[2][1] = 'obstacle'
      g[2][6] = 'obstacle'
      g[3][5] = 'obstacle'
      g[3][9] = 'obstacle'
      g[4][2] = 'obstacle'
      g[4][5] = 'obstacle'
      g[5][2] = 'obstacle'
      g[5][10] = 'obstacle'
      g[6][10] = 'obstacle'
      g[7][8] = 'obstacle'
      g[7][10] = 'obstacle'
      g[8][1] = 'obstacle'
      g[8][9] = 'obstacle'
      g[9][1] = 'obstacle'
      g[9][4] = 'obstacle'
      g[5][11] = 'obstacle'
      g[11][1] = 'obstacle'
      g[11][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [0, 10] },
      { id: 's2', pos: [2, 11] },
      { id: 's3', pos: [4, 7] },
      { id: 's4', pos: [1, 3] },
      { id: 's5', pos: [3, 0] },
      { id: 's6', pos: [6, 9] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [8, 2] },
      { id: 's9', pos: [11, 10] },
      { id: 's10', pos: [11, 3] },
      { id: 's11', pos: [9, 6] },
      { id: 's12', pos: [7, 0] },
      { id: 's13', pos: [0, 11] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 340,
    xpReward: 1150,
    hints: [
      { en: 'Thirteen packages — build the full list first, then greedily pick the nearest one each time!', id: 'Tiga belas paket — buat daftar lengkap dulu, lalu pilih yang terdekat secara serakah setiap kali!' },
      { en: 'The new package in the bottom row connects best to its two nearest neighbours — route it between them!', id: 'Paket baru di baris bawah tersambung terbaik dengan dua tetangga terdekatnya — rutekan di antara keduanya!' },
    ],
    starThresholds: [714, 510, 425, 340],
  },
  {
    id: 'sorting-20',
    worldId: 'sorting',
    number: 20,
    title: { en: 'Omega Protocol', id: 'Protokol Omega' },
    story: {
      en: "The Omega Protocol has activated — thirteen packages across the largest, most obstacle-dense warehouse floor Sorty has ever faced. Every algorithm learned so far — loops, lists, functions, nearest-neighbour routing — must work together for one flawless final run.",
      id: 'Protokol Omega telah aktif — tiga belas paket di lantai gudang terbesar dan terpadat rintangan yang pernah dihadapi Sorty. Setiap algoritma yang telah dipelajari — perulangan, daftar, fungsi, perutean tetangga terdekat — harus bekerja sama untuk satu run terakhir yang sempurna.',
    },
    mascotMessage: {
      en: "OMEGA PROTOCOL! ⚡🌌📦 Beyond Galactic Dispatch, beyond anything before — this is where every algorithm you've learned comes together. Build your list, greedily route the nearest package, and reuse one clean function. You're ready. 🏆",
      id: 'PROTOKOL OMEGA! ⚡🌌📦 Melampaui Pengiriman Galaktik, melampaui apa pun sebelumnya — di sinilah setiap algoritma yang telah kamu pelajari bersatu. Buat daftarmu, rutekan paket terdekat secara serakah, dan gunakan kembali satu fungsi yang rapi. Kamu siap. 🏆',
    },
    gridRows: 12,
    gridCols: 12,
    cells: (() => {
      const g = emptyGrid(12, 12)
      g[1][1] = 'obstacle'
      g[9][1] = 'obstacle'
      g[1][2] = 'obstacle'
      g[6][2] = 'obstacle'
      g[5][3] = 'obstacle'
      g[9][3] = 'obstacle'
      g[2][4] = 'obstacle'
      g[5][4] = 'obstacle'
      g[2][5] = 'obstacle'
      g[10][5] = 'obstacle'
      g[10][6] = 'obstacle'
      g[8][7] = 'obstacle'
      g[10][7] = 'obstacle'
      g[1][8] = 'obstacle'
      g[9][8] = 'obstacle'
      g[1][9] = 'obstacle'
      g[4][9] = 'obstacle'
      g[11][5] = 'obstacle'
      g[1][11] = 'obstacle'
      g[11][11] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [
      { id: 's1', pos: [10, 0] },
      { id: 's2', pos: [11, 2] },
      { id: 's3', pos: [7, 4] },
      { id: 's4', pos: [3, 1] },
      { id: 's5', pos: [0, 3] },
      { id: 's6', pos: [9, 6] },
      { id: 's7', pos: [5, 5] },
      { id: 's8', pos: [2, 8] },
      { id: 's9', pos: [10, 11] },
      { id: 's10', pos: [3, 11] },
      { id: 's11', pos: [6, 9] },
      { id: 's12', pos: [0, 7] },
      { id: 's13', pos: [11, 0] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'logic', 'variables', 'functions', 'lists'],
    optimalBlockCount: 400,
    xpReward: 1250,
    hints: [
      { en: 'Thirteen packages, twenty obstacles — this is everything you know, combined. Plan the whole route on paper first!', id: 'Tiga belas paket, dua puluh rintangan — ini semua yang kamu tahu, digabungkan. Rencanakan seluruh rute di kertas terlebih dahulu!' },
      { en: 'One reusable goTo(row, col) function plus a list sorted by nearest-neighbour distance solves the entire floor!', id: 'Satu fungsi goTo(baris, kolom) yang dapat digunakan kembali ditambah daftar yang diurutkan berdasarkan jarak tetangga terdekat menyelesaikan seluruh lantai!' },
    ],
    starThresholds: [840, 600, 500, 400],
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
    title: { en: 'The Warning Sign Bug', id: 'Bug Tanda Peringatan' },
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
  {
    id: 'debugging-11',
    worldId: 'debugging',
    number: 11,
    isBuggy: true,
    title: { en: 'Four-Leg Journey', id: 'Perjalanan Empat Kaki' },
    story: {
      en: "The robot's journey now has FOUR loops instead of two or three! One of them has the wrong count and the robot stops short partway through the third turn.",
      id: 'Perjalanan robot sekarang punya EMPAT perulangan, bukan dua atau tiga! Salah satunya punya jumlah yang salah dan robot berhenti di tengah belokan ketiga.',
    },
    mascotMessage: {
      en: "Run it and watch closely — the robot does two legs perfectly, then the third leg stops too soon. 🐛", id: 'Jalankan dan perhatikan baik-baik — robot menyelesaikan dua kaki perjalanan dengan sempurna, lalu kaki ketiga berhenti terlalu cepat. 🐛',
    },
    gridRows: 6,
    gridCols: 8,
    cells: emptyGrid(6, 8),
    startPos: [0, 0],
    items: [{ id: 'wrench-11', pos: [5, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 12,
    xpReward: 165,
    hints: [
      { en: 'The path is: right 3, down 2, right 4, down 3. Which loop\'s count does not match?', id: 'Jalurnya: kanan 3, bawah 2, kanan 4, bawah 3. Jumlah perulangan mana yang tidak cocok?' },
      { en: 'The third loop should repeat 4 times, not 2.', id: 'Perulangan ketiga seharusnya berulang 4 kali, bukan 2.' },
    ],
    starThresholds: [36, 24, 16, 12],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d11_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d11_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d11_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                  DO: { block: { type: 'move_down', id: 'dbg_d11_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d11_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                      DO: { block: { type: 'move_right', id: 'dbg_d11_6' } },
                    },
                    next: {
                      block: {
                        type: 'controls_repeat_ext',
                        id: 'dbg_d11_7',
                        inputs: {
                          TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                          DO: { block: { type: 'move_down', id: 'dbg_d11_8' } },
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
    id: 'debugging-12',
    worldId: 'debugging',
    number: 12,
    isBuggy: true,
    title: { en: 'The Missing Segment', id: 'Segmen yang Hilang' },
    story: {
      en: "This time the bug isn't a wrong number — a WHOLE loop is missing! The robot does two legs of the journey perfectly, then just... stops. It never turns the final corner.",
      id: 'Kali ini bug-nya bukan angka yang salah — SATU perulangan seluruhnya hilang! Robot menyelesaikan dua kaki perjalanan dengan sempurna, lalu... berhenti begitu saja. Ia tidak pernah berbelok di sudut terakhir.',
    },
    mascotMessage: {
      en: "Nothing is broken in the two loops you see — something is just missing after them. Add the final loop yourself! 🐛",
      id: 'Tidak ada yang rusak di dua perulangan yang kamu lihat — ada sesuatu yang hilang setelahnya. Tambahkan perulangan terakhir sendiri! 🐛',
    },
    gridRows: 4,
    gridCols: 8,
    cells: emptyGrid(4, 8),
    startPos: [0, 0],
    items: [{ id: 'wrench-12', pos: [3, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 180,
    hints: [
      { en: 'The robot ends at row 3, column 4 — but the wrench is at column 7.', id: 'Robot berakhir di baris 3, kolom 4 — tapi kuncinya ada di kolom 7.' },
      { en: 'Add a new Repeat block after the last one: repeat 3 times, Move Right.', id: 'Tambahkan blok Ulangi baru setelah yang terakhir: ulangi 3 kali, Gerak Kanan.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d12_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d12_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d12_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                  DO: { block: { type: 'move_down', id: 'dbg_d12_4' } },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-13',
    worldId: 'debugging',
    number: 13,
    isBuggy: true,
    title: { en: 'Extra Detour', id: 'Jalan Memutar Tambahan' },
    story: {
      en: "There's an extra loop that shouldn't be there at all! It sends the robot straight into a warning sign. Find the whole block that doesn't belong and remove it.",
      id: 'Ada perulangan tambahan yang seharusnya tidak ada! Itu mengirim robot langsung ke tanda peringatan. Temukan blok yang tidak seharusnya ada dan hapus.',
    },
    mascotMessage: {
      en: "The robot crashes partway through — but this time the fix isn't a number, it's a whole block that needs to go. 🐛",
      id: 'Robot bertabrakan di tengah jalan — tapi kali ini perbaikannya bukan angka, melainkan satu blok utuh yang harus dihapus. 🐛',
    },
    gridRows: 5,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(5, 8)
      g[0][7] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-13', pos: [4, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 195,
    hints: [
      { en: 'Run the code — the robot crashes into a warning sign partway along the top row.', id: 'Jalankan kode — robot bertabrakan ke tanda peringatan di tengah baris atas.' },
      { en: 'Delete the middle Repeat block entirely — the robot only needs to go right 5 times, then down 4 times.', id: 'Hapus blok Ulangi yang di tengah sepenuhnya — robot hanya perlu ke kanan 5 kali, lalu ke bawah 4 kali.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d13_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 5 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d13_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d13_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                  DO: { block: { type: 'move_right', id: 'dbg_d13_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d13_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
                      DO: { block: { type: 'move_down', id: 'dbg_d13_6' } },
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
    id: 'debugging-14',
    worldId: 'debugging',
    number: 14,
    isBuggy: true,
    title: { en: 'Double Direction Swap', id: 'Tukar Arah Ganda' },
    story: {
      en: "Two loops out of three point the wrong way! The robot crashes instantly on the very first move — and even after that's fixed, a second wrong direction is still hiding at the end.",
      id: 'Dua dari tiga perulangan mengarah ke arah yang salah! Robot langsung bertabrakan pada gerakan pertama — dan bahkan setelah itu diperbaiki, arah salah kedua masih bersembunyi di akhir.',
    },
    mascotMessage: {
      en: "Fix the first crash, run again, then look closely at the LAST loop too. 🐛", id: 'Perbaiki tabrakan pertama, jalankan lagi, lalu perhatikan baik-baik perulangan TERAKHIR juga. 🐛',
    },
    gridRows: 6,
    gridCols: 5,
    cells: emptyGrid(6, 5),
    startPos: [0, 0],
    items: [{ id: 'wrench-14', pos: [5, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 210,
    hints: [
      { en: 'The robot crashes off the top edge immediately. The path should start by going DOWN.', id: 'Robot langsung bertabrakan keluar tepi atas. Jalurnya seharusnya dimulai dengan bergerak ke BAWAH.' },
      { en: 'The middle loop (right 4) is correct. The last loop should also move DOWN, not up.', id: 'Perulangan tengah (kanan 4) sudah benar. Perulangan terakhir juga seharusnya bergerak ke BAWAH, bukan atas.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d14_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
              DO: { block: { type: 'move_up', id: 'dbg_d14_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d14_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
                  DO: { block: { type: 'move_right', id: 'dbg_d14_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d14_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                      DO: { block: { type: 'move_up', id: 'dbg_d14_6' } },
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
    id: 'debugging-15',
    worldId: 'debugging',
    number: 15,
    isBuggy: true,
    title: { en: 'Loop Order Chaos', id: 'Kekacauan Urutan Perulangan' },
    story: {
      en: "All three loop counts and directions are correct — but the first two are in the WRONG ORDER! Running right before going down sends the robot straight into a warning sign.",
      id: 'Ketiga jumlah dan arah perulangan sudah benar — tapi dua yang pertama dalam URUTAN YANG SALAH! Bergerak ke kanan sebelum ke bawah mengirim robot langsung ke tanda peringatan.',
    },
    mascotMessage: {
      en: "Nothing needs a NEW number here — just drag two blocks into the right order! 🐛", id: 'Tidak ada yang butuh angka BARU di sini — cukup seret dua blok ke urutan yang benar! 🐛',
    },
    gridRows: 6,
    gridCols: 5,
    cells: (() => {
      const g = emptyGrid(6, 5)
      g[0][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-15', pos: [5, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 225,
    hints: [
      { en: 'The robot crashes into the warning sign on row 0 — it goes right before it should go down.', id: 'Robot bertabrakan ke tanda peringatan di baris 0 — ia bergerak ke kanan sebelum seharusnya ke bawah.' },
      { en: 'Swap the first two loop blocks: down 3 should come before right 4. The last loop (down 2) is already in the right place.', id: 'Tukar dua blok perulangan pertama: bawah 3 harus sebelum kanan 4. Perulangan terakhir (bawah 2) sudah di tempat yang benar.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d15_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d15_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d15_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                  DO: { block: { type: 'move_down', id: 'dbg_d15_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d15_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                      DO: { block: { type: 'move_down', id: 'dbg_d15_6' } },
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
    id: 'debugging-16',
    worldId: 'debugging',
    number: 16,
    isBuggy: true,
    title: { en: 'Count and Direction', id: 'Jumlah dan Arah' },
    story: {
      en: "The second loop has TWO bugs stacked in one block — the wrong direction AND the wrong count. The first loop is perfect, but don't stop checking there!",
      id: 'Perulangan kedua punya DUA bug bertumpuk dalam satu blok — arah yang salah DAN jumlah yang salah. Perulangan pertama sudah sempurna, tapi jangan berhenti memeriksa di situ!',
    },
    mascotMessage: {
      en: "One loop, two mistakes. Fix the direction first, then check if the count is still wrong. 🐛", id: 'Satu perulangan, dua kesalahan. Perbaiki arahnya dulu, lalu periksa apakah jumlahnya masih salah. 🐛',
    },
    gridRows: 6,
    gridCols: 5,
    cells: emptyGrid(6, 5),
    startPos: [0, 0],
    items: [{ id: 'wrench-16', pos: [5, 4] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 6,
    xpReward: 240,
    hints: [
      { en: 'The first loop (right 4) is correct. The second loop moves the robot the wrong way — it should go DOWN.', id: 'Perulangan pertama (kanan 4) sudah benar. Perulangan kedua menggerakkan robot ke arah yang salah — seharusnya ke BAWAH.' },
      { en: 'After fixing the direction, the count is also wrong — it should repeat 5 times, not 3.', id: 'Setelah memperbaiki arahnya, jumlahnya juga salah — seharusnya berulang 5 kali, bukan 3.' },
    ],
    starThresholds: [18, 12, 9, 6],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d16_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d16_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d16_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                  DO: { block: { type: 'move_up', id: 'dbg_d16_4' } },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-17',
    worldId: 'debugging',
    number: 17,
    isBuggy: true,
    title: { en: 'The Long Chain', id: 'Rantai Panjang' },
    story: {
      en: "Four loops chained together — the longest chain yet! The second loop points the wrong way and crashes the robot, and the last loop's count leaves it short.",
      id: 'Empat perulangan yang berantai — rantai terpanjang sejauh ini! Perulangan kedua mengarah ke arah yang salah dan membuat robot bertabrakan, dan jumlah perulangan terakhir membuatnya kurang.',
    },
    mascotMessage: {
      en: "Long chains mean more places for bugs to hide. Fix one crash at a time and keep running the code. 🐛", id: 'Rantai panjang berarti lebih banyak tempat bug bersembunyi. Perbaiki satu tabrakan setiap kali dan terus jalankan kodenya. 🐛',
    },
    gridRows: 8,
    gridCols: 6,
    cells: emptyGrid(8, 6),
    startPos: [0, 0],
    items: [{ id: 'wrench-17', pos: [7, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 12,
    xpReward: 260,
    hints: [
      { en: 'The path is: right 3, down 4, right 2, down 3. The robot crashes right after the first turn — check the second loop\'s direction.', id: 'Jalurnya: kanan 3, bawah 4, kanan 2, bawah 3. Robot bertabrakan tepat setelah belokan pertama — periksa arah perulangan kedua.' },
      { en: 'After that\'s fixed, the robot stops one row short at the very end — the last loop should repeat 3 times, not 2.', id: 'Setelah itu diperbaiki, robot berhenti satu baris sebelum akhir — perulangan terakhir seharusnya berulang 3 kali, bukan 2.' },
    ],
    starThresholds: [36, 24, 16, 12],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d17_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d17_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d17_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
                  DO: { block: { type: 'move_up', id: 'dbg_d17_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d17_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                      DO: { block: { type: 'move_right', id: 'dbg_d17_6' } },
                    },
                    next: {
                      block: {
                        type: 'controls_repeat_ext',
                        id: 'dbg_d17_7',
                        inputs: {
                          TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                          DO: { block: { type: 'move_down', id: 'dbg_d17_8' } },
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
    id: 'debugging-18',
    worldId: 'debugging',
    number: 18,
    isBuggy: true,
    title: { en: 'Obstacle Course Bugs', id: 'Bug Lintasan Rintangan' },
    story: {
      en: "Warning signs dot the whole grid this time! The middle loop stops short of its mark, and the last loop points the wrong way — but the signs don't lie about which direction is safe.",
      id: 'Tanda peringatan tersebar di seluruh grid kali ini! Perulangan tengah berhenti sebelum tandanya, dan perulangan terakhir mengarah ke arah yang salah — tapi tanda-tanda itu tidak berbohong tentang arah mana yang aman.',
    },
    mascotMessage: {
      en: "Two bugs among three loops. The signs are just decoration this time — focus on the counts and directions. 🐛", id: 'Dua bug di antara tiga perulangan. Tanda-tandanya cuma dekorasi kali ini — fokus pada jumlah dan arahnya. 🐛',
    },
    gridRows: 7,
    gridCols: 6,
    cells: (() => {
      const g = emptyGrid(7, 6)
      g[2][5] = 'obstacle'
      g[5][2] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-18', pos: [6, 5] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 280,
    hints: [
      { en: 'The path is: down 4, right 5, down 2. The middle loop stops short — check its count.', id: 'Jalurnya: bawah 4, kanan 5, bawah 2. Perulangan tengah berhenti terlalu cepat — periksa jumlahnya.' },
      { en: 'The last loop points the wrong way — it should move DOWN, not up, to reach the wrench.', id: 'Perulangan terakhir mengarah ke arah yang salah — seharusnya bergerak ke BAWAH, bukan atas, untuk mencapai kunci.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d18_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
              DO: { block: { type: 'move_down', id: 'dbg_d18_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d18_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                  DO: { block: { type: 'move_right', id: 'dbg_d18_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d18_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                      DO: { block: { type: 'move_up', id: 'dbg_d18_6' } },
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
    id: 'debugging-19',
    worldId: 'debugging',
    number: 19,
    isBuggy: true,
    title: { en: 'The Missing And The Wrong', id: 'Yang Hilang Dan Yang Salah' },
    story: {
      en: "This one combines two kinds of bugs at once: the second loop's count is wrong, AND the entire third loop is missing. Fix the number, then build the missing piece yourself.",
      id: 'Yang ini menggabungkan dua jenis bug sekaligus: jumlah perulangan kedua salah, DAN seluruh perulangan ketiga hilang. Perbaiki angkanya, lalu bangun sendiri bagian yang hilang.',
    },
    mascotMessage: {
      en: "Fix what's broken first, then look for what's not there at all. 🐛", id: 'Perbaiki dulu yang rusak, lalu cari yang sama sekali tidak ada. 🐛',
    },
    gridRows: 5,
    gridCols: 8,
    cells: emptyGrid(5, 8),
    startPos: [0, 0],
    items: [{ id: 'wrench-19', pos: [4, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 9,
    xpReward: 305,
    hints: [
      { en: 'The robot should go: right 3, down 4, right 4 — but it stops at row 2, and never turns right again.', id: 'Robot seharusnya: kanan 3, bawah 4, kanan 4 — tapi ia berhenti di baris 2, dan tidak pernah berbelok kanan lagi.' },
      { en: 'Fix the second loop\'s count to 4, then ADD a brand new loop after it: repeat 4 times, Move Right.', id: 'Perbaiki jumlah perulangan kedua menjadi 4, lalu TAMBAHKAN perulangan baru setelahnya: ulangi 4 kali, Gerak Kanan.' },
    ],
    starThresholds: [27, 18, 12, 9],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d19_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d19_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d19_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                  DO: { block: { type: 'move_down', id: 'dbg_d19_4' } },
                },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 'debugging-20',
    worldId: 'debugging',
    number: 20,
    isBuggy: true,
    title: { en: 'The Grand Bug Hunt', id: 'Perburuan Bug Akbar' },
    story: {
      en: "Every kind of bug you've ever fixed is hiding in this one program: a wrong order, a wrong count, a wrong direction, AND a whole missing loop. This is the biggest bug hunt Bugsy has ever assembled!",
      id: 'Setiap jenis bug yang pernah kamu perbaiki bersembunyi dalam satu program ini: urutan salah, jumlah salah, arah salah, DAN satu perulangan yang hilang seluruhnya. Ini perburuan bug terbesar yang pernah Bugsy susun!',
    },
    mascotMessage: {
      en: "Take it one bug at a time, just like always. Run, spot one problem, fix it, run again. You've got this! 🐛🔧", id: 'Kerjakan satu bug setiap kali, seperti biasa. Jalankan, temukan satu masalah, perbaiki, jalankan lagi. Kamu pasti bisa! 🐛🔧',
    },
    gridRows: 6,
    gridCols: 8,
    cells: (() => {
      const g = emptyGrid(6, 8)
      g[0][3] = 'obstacle'
      return g
    })(),
    startPos: [0, 0],
    items: [{ id: 'wrench-20', pos: [5, 7] }],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 12,
    xpReward: 340,
    hints: [
      { en: 'The correct path is: down 3, right 4, down 2, right 3. Right now the first two loops are swapped in order, which crashes the robot into the warning sign.', id: 'Jalur yang benar: bawah 3, kanan 4, bawah 2, kanan 3. Saat ini dua perulangan pertama tertukar urutannya, yang membuat robot bertabrakan ke tanda peringatan.' },
      { en: 'After reordering, fix the down-loop\'s count to 3, fix the third loop to move down 2 times (not up 3), then ADD the final loop: repeat 3 times, Move Right.', id: 'Setelah mengurutkan ulang, perbaiki jumlah perulangan bawah menjadi 3, perbaiki perulangan ketiga agar bergerak bawah 2 kali (bukan atas 3 kali), lalu TAMBAHKAN perulangan terakhir: ulangi 3 kali, Gerak Kanan.' },
    ],
    starThresholds: [36, 24, 16, 12],
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [
          {
            type: 'controls_repeat_ext',
            id: 'dbg_d20_1',
            x: 30,
            y: 30,
            inputs: {
              TIMES: { shadow: { type: 'math_number', fields: { NUM: 4 } } },
              DO: { block: { type: 'move_right', id: 'dbg_d20_2' } },
            },
            next: {
              block: {
                type: 'controls_repeat_ext',
                id: 'dbg_d20_3',
                inputs: {
                  TIMES: { shadow: { type: 'math_number', fields: { NUM: 2 } } },
                  DO: { block: { type: 'move_down', id: 'dbg_d20_4' } },
                },
                next: {
                  block: {
                    type: 'controls_repeat_ext',
                    id: 'dbg_d20_5',
                    inputs: {
                      TIMES: { shadow: { type: 'math_number', fields: { NUM: 3 } } },
                      DO: { block: { type: 'move_up', id: 'dbg_d20_6' } },
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
    title: { en: 'Zigzag Verse', id: 'Bait Zigzag' },
    story: { en: 'Compose a zigzag verse, sweep across the stage, and collect every note in this dazzling passage!', id: 'Susun bait zigzag, melintas panggung, dan kumpulkan setiap nada dalam bagian yang memukau ini!' },
    mascotMessage: { en: 'Loops and a function together — collect the whole passage! 🎭', id: 'Perulangan dan fungsi bersama — kumpulkan seluruh bagian! 🎭' },
    gridRows: 8, gridCols: 8, cells: emptyGrid(8, 8), startPos: [0, 0], items: [{id:'n1',pos:[0,2]},{id:'n2',pos:[2,2]},{id:'n3',pos:[2,0]},{id:'n4',pos:[4,0]},{id:'n5',pos:[4,7]},{id:'n6',pos:[6,7]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 17, xpReward: 220,
    hints: [{ en: 'Put four two-step lines into one zigzag function.', id: 'Taruh empat garis dua langkah ke dalam satu fungsi zigzag.' }, { en: 'Call the zigzag once, repeat Right 7 times, then repeat Down 2 times.', id: 'Panggil zigzag sekali, ulangi Kanan 7 kali, lalu ulangi Bawah 2 kali.' }], starThresholds: [36, 27, 21, 17],
  },
  {
    id: 'orchestra-11', worldId: 'orchestra', number: 11,
    title: { en: 'Uneven Bar', id: 'Birama Tak Rata' },
    story: { en: 'A new bar shape: one note right, then two notes down — four times in a row.', id: 'Bentuk birama baru: satu nada kanan, lalu dua nada bawah — empat kali berturut-turut.' },
    mascotMessage: { en: 'This bar is uneven — one step then two! Loop the whole three-move bar 4 times. 🎵', id: 'Birama ini tidak rata — satu langkah lalu dua! Ulangi seluruh birama tiga gerakan 4 kali. 🎵' },
    gridRows: 9, gridCols: 5, cells: emptyGrid(9, 5), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[1,1]},{id:'n3',pos:[2,1]},{id:'n4',pos:[2,2]},{id:'n5',pos:[3,2]},{id:'n6',pos:[4,2]},{id:'n7',pos:[4,3]},{id:'n8',pos:[5,3]},{id:'n9',pos:[6,3]},{id:'n10',pos:[6,4]},{id:'n11',pos:[7,4]},{id:'n12',pos:[8,4]}],
    goalType: 'collect_all', availableCategories: ['move','loops'], requiredCategories: ['loops'], optimalBlockCount: 5, xpReward: 235,
    hints: [{ en: 'The bar is: right once, down twice. Put all three moves inside one Repeat block.', id: 'Biramanya: kanan sekali, bawah dua kali. Taruh ketiga gerakan di dalam satu blok Ulangi.' }, { en: 'Repeat 4 times: Move Right, Move Down, Move Down. Just 5 blocks total!', id: 'Ulangi 4 kali: Gerak Kanan, Gerak Bawah, Gerak Bawah. Hanya 5 blok total!' }], starThresholds: [12, 5],
  },
  {
    id: 'orchestra-12', worldId: 'orchestra', number: 12,
    title: { en: 'Triple Step Bar', id: 'Birama Tiga Langkah' },
    story: { en: 'Three quick notes right, then one note down — repeated three times across the stage.', id: 'Tiga nada cepat ke kanan, lalu satu nada bawah — diulang tiga kali melintasi panggung.' },
    mascotMessage: { en: 'Three-and-one this time! Loop the whole four-move bar 3 times. 🎶', id: 'Tiga-dan-satu kali ini! Ulangi seluruh birama empat gerakan 3 kali. 🎶' },
    gridRows: 4, gridCols: 10, cells: emptyGrid(4, 10), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[0,3]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[1,5]},{id:'n7',pos:[1,6]},{id:'n8',pos:[2,6]},{id:'n9',pos:[2,7]},{id:'n10',pos:[2,8]},{id:'n11',pos:[2,9]},{id:'n12',pos:[3,9]}],
    goalType: 'collect_all', availableCategories: ['move','loops'], requiredCategories: ['loops'], optimalBlockCount: 6, xpReward: 250,
    hints: [{ en: 'The bar is: right three times, down once. Put all four moves inside one Repeat block.', id: 'Biramanya: kanan tiga kali, bawah sekali. Taruh keempat gerakan di dalam satu blok Ulangi.' }, { en: 'Repeat 3 times: Move Right, Move Right, Move Right, Move Down. Just 6 blocks!', id: 'Ulangi 3 kali: Gerak Kanan, Gerak Kanan, Gerak Kanan, Gerak Bawah. Hanya 6 blok!' }], starThresholds: [14, 6],
  },
  {
    id: 'orchestra-13', worldId: 'orchestra', number: 13,
    title: { en: 'Four-Call Refrain', id: 'Refrain Empat Panggilan' },
    story: { en: 'The two-step refrain returns four times this time, not three. Name it once, call it four times.', id: 'Refrain dua langkah kembali empat kali kali ini, bukan tiga. Beri nama sekali, panggil empat kali.' },
    mascotMessage: { en: 'One function, FOUR calls! Define the two-step refrain, then call it four times. 🎤', id: 'Satu fungsi, EMPAT panggilan! Definisikan refrain dua langkah, lalu panggil empat kali. 🎤' },
    gridRows: 1, gridCols: 9, cells: emptyGrid(1, 9), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[0,3]},{id:'n4',pos:[0,4]},{id:'n5',pos:[0,5]},{id:'n6',pos:[0,6]},{id:'n7',pos:[0,7]},{id:'n8',pos:[0,8]}],
    goalType: 'collect_all', availableCategories: ['move','functions'], requiredCategories: ['functions'], optimalBlockCount: 7, xpReward: 260,
    hints: [{ en: 'Define a function with two Move Right blocks inside.', id: 'Definisikan fungsi dengan dua blok Gerak Kanan di dalamnya.' }, { en: 'Call your two-step function 4 times — that reaches all 8 notes in 7 blocks!', id: 'Panggil fungsi dua langkahmu 4 kali — itu mencapai semua 8 nada dengan 7 blok!' }], starThresholds: [15, 7],
  },
  {
    id: 'orchestra-14', worldId: 'orchestra', number: 14,
    title: { en: 'Double Chorus', id: 'Refrain Ganda' },
    story: { en: 'Two different choruses this time, one after another — first a right-hand run, then a down-hand run.', id: 'Dua refrain berbeda kali ini, satu demi satu — pertama larik tangan kanan, lalu larik tangan bawah.' },
    mascotMessage: { en: 'Name TWO different choruses! One for right, one for down — call each twice, in order. 🎼', id: 'Beri nama DUA refrain berbeda! Satu untuk kanan, satu untuk bawah — panggil masing-masing dua kali, berurutan. 🎼' },
    gridRows: 5, gridCols: 5, cells: emptyGrid(5, 5), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[0,3]},{id:'n4',pos:[0,4]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[3,4]},{id:'n8',pos:[4,4]}],
    goalType: 'collect_all', availableCategories: ['move','functions'], requiredCategories: ['functions'], optimalBlockCount: 10, xpReward: 275,
    hints: [{ en: 'Define a "right chorus" function (two Move Right) and a "down chorus" function (two Move Down).', id: 'Definisikan fungsi "refrain kanan" (dua Gerak Kanan) dan fungsi "refrain bawah" (dua Gerak Bawah).' }, { en: 'Call the right chorus twice, THEN call the down chorus twice. Order matters!', id: 'Panggil refrain kanan dua kali, LALU panggil refrain bawah dua kali. Urutan penting!' }], starThresholds: [22, 10],
  },
  {
    id: 'orchestra-15', worldId: 'orchestra', number: 15,
    title: { en: 'Long Refrain', id: 'Refrain Panjang' },
    story: { en: 'A three-step refrain climbs across the whole stage, repeating five times — the longest yet.', id: 'Refrain tiga langkah melintasi seluruh panggung, berulang lima kali — terpanjang sejauh ini.' },
    mascotMessage: { en: 'Function inside a loop, five times! Define the three-step refrain, then repeat calling it 5 times. 🎵', id: 'Fungsi di dalam perulangan, lima kali! Definisikan refrain tiga langkah, lalu ulangi memanggilnya 5 kali. 🎵' },
    gridRows: 6, gridCols: 11, cells: emptyGrid(6, 11), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[1,2]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[2,5]},{id:'n8',pos:[2,6]},{id:'n9',pos:[3,6]},{id:'n10',pos:[3,7]},{id:'n11',pos:[3,8]},{id:'n12',pos:[4,8]},{id:'n13',pos:[4,9]},{id:'n14',pos:[4,10]},{id:'n15',pos:[5,10]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 7, xpReward: 290,
    hints: [{ en: 'Define a function: Move Right, Move Right, Move Down.', id: 'Definisikan fungsi: Gerak Kanan, Gerak Kanan, Gerak Bawah.' }, { en: 'Put the function call inside a Repeat block set to 5. Just 7 blocks for the whole long refrain!', id: 'Taruh panggilan fungsi di dalam blok Ulangi yang diatur ke 5. Hanya 7 blok untuk seluruh refrain panjang!' }], starThresholds: [18, 7],
  },
  {
    id: 'orchestra-16', worldId: 'orchestra', number: 16,
    title: { en: 'Falling Refrain', id: 'Refrain Jatuh' },
    story: { en: 'This refrain falls first, then steps right twice — repeated four times down the stage.', id: 'Refrain ini jatuh dulu, lalu melangkah kanan dua kali — diulang empat kali menuruni panggung.' },
    mascotMessage: { en: 'Down first this time! Define Move Down, Move Right, Move Right — then repeat calling it 4 times. 🎶', id: 'Bawah dulu kali ini! Definisikan Gerak Bawah, Gerak Kanan, Gerak Kanan — lalu ulangi memanggilnya 4 kali. 🎶' },
    gridRows: 5, gridCols: 9, cells: emptyGrid(5, 9), startPos: [0, 0],
    items: [{id:'n1',pos:[1,0]},{id:'n2',pos:[1,1]},{id:'n3',pos:[1,2]},{id:'n4',pos:[2,2]},{id:'n5',pos:[2,3]},{id:'n6',pos:[2,4]},{id:'n7',pos:[3,4]},{id:'n8',pos:[3,5]},{id:'n9',pos:[3,6]},{id:'n10',pos:[4,6]},{id:'n11',pos:[4,7]},{id:'n12',pos:[4,8]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 7, xpReward: 305,
    hints: [{ en: 'Define a function: Move Down, Move Right, Move Right.', id: 'Definisikan fungsi: Gerak Bawah, Gerak Kanan, Gerak Kanan.' }, { en: 'Put the function call inside a Repeat block set to 4. 7 blocks total!', id: 'Taruh panggilan fungsi di dalam blok Ulangi yang diatur ke 4. Total 7 blok!' }], starThresholds: [18, 7],
  },
  {
    id: 'orchestra-17', worldId: 'orchestra', number: 17,
    title: { en: 'Two-Part Invention', id: 'Invensi Dua Bagian' },
    story: { en: 'Two different refrains, each in its own loop — first right-then-down four times, then down-then-right three times.', id: 'Dua refrain berbeda, masing-masing dalam perulangannya sendiri — pertama kanan-lalu-bawah empat kali, lalu bawah-lalu-kanan tiga kali.' },
    mascotMessage: { en: 'Two parts, two function-and-loop pairs! Part one: right-down, looped 4 times. Part two: down-right, looped 3 times. 🎻', id: 'Dua bagian, dua pasangan fungsi-dan-perulangan! Bagian satu: kanan-bawah, diulang 4 kali. Bagian dua: bawah-kanan, diulang 3 kali. 🎻' },
    gridRows: 8, gridCols: 8, cells: emptyGrid(8, 8), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[1,1]},{id:'n3',pos:[1,2]},{id:'n4',pos:[2,2]},{id:'n5',pos:[2,3]},{id:'n6',pos:[3,3]},{id:'n7',pos:[3,4]},{id:'n8',pos:[4,4]},{id:'n9',pos:[5,4]},{id:'n10',pos:[5,5]},{id:'n11',pos:[6,5]},{id:'n12',pos:[6,6]},{id:'n13',pos:[7,6]},{id:'n14',pos:[7,7]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 12, xpReward: 320,
    hints: [{ en: 'Part one function: Move Right, Move Down. Loop it 4 times. Part two function: Move Down, Move Right. Loop it 3 times.', id: 'Fungsi bagian satu: Gerak Kanan, Gerak Bawah. Ulangi 4 kali. Fungsi bagian dua: Gerak Bawah, Gerak Kanan. Ulangi 3 kali.' }, { en: 'Play part one completely before starting part two. 6 blocks + 6 blocks = 12 total!', id: 'Mainkan bagian satu sepenuhnya sebelum memulai bagian dua. 6 blok + 6 blok = 12 total!' }], starThresholds: [30, 12],
  },
  {
    id: 'orchestra-18', worldId: 'orchestra', number: 18,
    title: { en: 'Triple Movement', id: 'Gerakan Tiga Babak' },
    story: { en: 'A symphony in three movements: right-right-down, then down-right-right, then right-down-down — each looped twice.', id: 'Simfoni dalam tiga babak: kanan-kanan-bawah, lalu bawah-kanan-kanan, lalu kanan-bawah-bawah — masing-masing diulang dua kali.' },
    mascotMessage: { en: 'THREE movements now! Three functions, three loops, each repeated twice. Play them in order. 🎼', id: 'TIGA babak sekarang! Tiga fungsi, tiga perulangan, masing-masing diulang dua kali. Mainkan berurutan. 🎼' },
    gridRows: 9, gridCols: 11, cells: emptyGrid(9, 11), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[1,2]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[3,4]},{id:'n8',pos:[3,5]},{id:'n9',pos:[3,6]},{id:'n10',pos:[4,6]},{id:'n11',pos:[4,7]},{id:'n12',pos:[4,8]},{id:'n13',pos:[4,9]},{id:'n14',pos:[5,9]},{id:'n15',pos:[6,9]},{id:'n16',pos:[6,10]},{id:'n17',pos:[7,10]},{id:'n18',pos:[8,10]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 21, xpReward: 335,
    hints: [{ en: 'Movement 1: right-right-down, looped 2 times. Movement 2: down-right-right, looped 2 times. Movement 3: right-down-down, looped 2 times.', id: 'Babak 1: kanan-kanan-bawah, diulang 2 kali. Babak 2: bawah-kanan-kanan, diulang 2 kali. Babak 3: kanan-bawah-bawah, diulang 2 kali.' }, { en: 'Each movement is its own function+loop pair: 7 blocks each, 21 blocks for the whole symphony!', id: 'Setiap babak adalah pasangan fungsi+perulangannya sendiri: 7 blok masing-masing, 21 blok untuk seluruh simfoni!' }], starThresholds: [42, 21],
  },
  {
    id: 'orchestra-19', worldId: 'orchestra', number: 19,
    title: { en: 'Grand Movement', id: 'Gerakan Akbar' },
    story: { en: 'The three-movement symphony grows grander: the first movement now repeats three times instead of two.', id: 'Simfoni tiga babak tumbuh lebih megah: babak pertama sekarang diulang tiga kali, bukan dua.' },
    mascotMessage: { en: 'The first movement got longer! 🎭 Same three functions, but movement one loops 3 times now instead of 2.', id: 'Babak pertama menjadi lebih panjang! 🎭 Fungsi yang sama, tapi babak satu kini diulang 3 kali, bukan 2.' },
    gridRows: 10, gridCols: 13, cells: emptyGrid(10, 13), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[1,2]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[2,5]},{id:'n8',pos:[2,6]},{id:'n9',pos:[3,6]},{id:'n10',pos:[4,6]},{id:'n11',pos:[4,7]},{id:'n12',pos:[4,8]},{id:'n13',pos:[5,8]},{id:'n14',pos:[5,9]},{id:'n15',pos:[5,10]},{id:'n16',pos:[5,11]},{id:'n17',pos:[6,11]},{id:'n18',pos:[7,11]},{id:'n19',pos:[7,12]},{id:'n20',pos:[8,12]},{id:'n21',pos:[9,12]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 21, xpReward: 350,
    hints: [{ en: 'Movement 1: right-right-down, looped 3 times. Movement 2: down-right-right, looped 2 times. Movement 3: right-down-down, looped 2 times.', id: 'Babak 1: kanan-kanan-bawah, diulang 3 kali. Babak 2: bawah-kanan-kanan, diulang 2 kali. Babak 3: kanan-bawah-bawah, diulang 2 kali.' }, { en: 'The block count stays the same — 7 blocks per movement — even though movement 1 covers more ground!', id: 'Jumlah blok tetap sama — 7 blok per babak — walaupun babak 1 mencakup jarak yang lebih jauh!' }], starThresholds: [42, 21],
  },
  {
    id: 'orchestra-20', worldId: 'orchestra', number: 20,
    title: { en: "Maestro's Symphony", id: 'Simfoni Sang Maestro' },
    story: { en: 'The grandest symphony yet — three movements, the first two looped three times each, the last twice. Every trick you\'ve learned, together at last.', id: 'Simfoni termegah sejauh ini — tiga babak, dua babak pertama diulang tiga kali masing-masing, yang terakhir dua kali. Semua trik yang telah kamu pelajari, bersatu akhirnya.' },
    mascotMessage: { en: "You're a true maestro now! 🎭🏆 Three functions, three loops, orchestrated together. Play your masterpiece!", id: 'Kamu maestro sejati sekarang! 🎭🏆 Tiga fungsi, tiga perulangan, diorkestrasi bersama. Mainkan mahakaryamu!' },
    gridRows: 11, gridCols: 15, cells: emptyGrid(11, 15), startPos: [0, 0],
    items: [{id:'n1',pos:[0,1]},{id:'n2',pos:[0,2]},{id:'n3',pos:[1,2]},{id:'n4',pos:[1,3]},{id:'n5',pos:[1,4]},{id:'n6',pos:[2,4]},{id:'n7',pos:[2,5]},{id:'n8',pos:[2,6]},{id:'n9',pos:[3,6]},{id:'n10',pos:[4,6]},{id:'n11',pos:[4,7]},{id:'n12',pos:[4,8]},{id:'n13',pos:[5,8]},{id:'n14',pos:[5,9]},{id:'n15',pos:[5,10]},{id:'n16',pos:[6,10]},{id:'n17',pos:[6,11]},{id:'n18',pos:[6,12]},{id:'n19',pos:[6,13]},{id:'n20',pos:[7,13]},{id:'n21',pos:[8,13]},{id:'n22',pos:[8,14]},{id:'n23',pos:[9,14]},{id:'n24',pos:[10,14]}],
    goalType: 'collect_all', availableCategories: ['move','loops','functions'], requiredCategories: ['functions','loops'], optimalBlockCount: 21, xpReward: 375,
    hints: [{ en: 'Movement 1: right-right-down, looped 3 times. Movement 2: down-right-right, looped 3 times. Movement 3: right-down-down, looped 2 times.', id: 'Babak 1: kanan-kanan-bawah, diulang 3 kali. Babak 2: bawah-kanan-kanan, diulang 3 kali. Babak 3: kanan-bawah-bawah, diulang 2 kali.' }, { en: 'Three functions, three loops — 7 blocks each, 21 total, no matter how grand the symphony grows!', id: 'Tiga fungsi, tiga perulangan — 7 blok masing-masing, 21 total, seberapa pun megahnya simfoni ini tumbuh!' }], starThresholds: [48, 21],
  },

  // ─────────────────────────────────────────────
  // BONUS WORLD 6: COORDINATE COVE — Coordinates & Position
  // Grid labels and the 🧭 sensor blocks are both 1-based, so the number a
  // child reads off the chart is the number the block returns.
  // ─────────────────────────────────────────────
  {
    id: 'cove-0', worldId: 'cove', number: 0, isTutorial: true, showCoords: true,
    title: { en: 'Tutorial: Read the Chart', id: 'Tutorial: Baca Peta' },
    story: { en: 'Numbers around the chart name every square. Coral is at Row 1, Column 1. The marker is at Row 1, Column 3.', id: 'Angka di tepi peta menamai setiap kotak. Coral ada di Baris 1, Kolom 1. Penandanya ada di Baris 1, Kolom 3.' },
    mascotMessage: { en: "Ahoy! ⛵ Look at the numbers on the edge of the chart. I'm at Row 1, Column 1. The 📍 is at Row 1, Column 3 — two squares to my right!", id: 'Ahoi! ⛵ Lihat angka di tepi peta. Aku di Baris 1, Kolom 1. 📍-nya di Baris 1, Kolom 3 — dua kotak di kananku!' },
    gridRows: 4, gridCols: 5, cells: emptyGrid(4, 5), startPos: [0, 0], items: [{ id: 'm1', pos: [0, 2] }],
    goalType: 'collect_all', availableCategories: ['move', 'sensors'], optimalBlockCount: 2, xpReward: 0,
    hints: [
      { en: 'Column 1 to Column 3 is two squares. Use two ➡️ Move Right blocks.', id: 'Kolom 1 ke Kolom 3 berjarak dua kotak. Pakai dua blok ➡️ Gerak Kanan.' },
      { en: 'Open the 🧭 Position drawer too — those blocks tell you your own row and column while you sail.', id: 'Buka juga laci 🧭 Posisi — blok itu memberitahu baris dan kolommu sendiri saat berlayar.' },
    ], starThresholds: [999, 999],
  },
  {
    id: 'cove-1', worldId: 'cove', number: 1, showCoords: true,
    title: { en: 'Marker at Row 2, Column 5', id: 'Penanda di Baris 2, Kolom 5' },
    story: { en: 'A single marker floats on open water. Read its coordinate off the chart and sail straight to it.', id: 'Satu penanda mengapung di laut lepas. Baca koordinatnya dari peta dan berlayarlah lurus ke sana.' },
    mascotMessage: { en: "I'm at Row 2, Column 1. The marker is at Row 2, Column 5. Same row — so I only need to change my column! 🧭", id: 'Aku di Baris 2, Kolom 1. Penandanya di Baris 2, Kolom 5. Baris sama — jadi aku hanya perlu mengubah kolomku! 🧭' },
    gridRows: 4, gridCols: 6, cells: emptyGrid(4, 6), startPos: [1, 0], items: [{ id: 'm1', pos: [1, 4] }],
    goalType: 'collect_all', availableCategories: ['move'], optimalBlockCount: 4, xpReward: 120,
    hints: [
      { en: 'Column 5 minus Column 1 is 4. That is how many steps right you need.', id: 'Kolom 5 dikurangi Kolom 1 sama dengan 4. Itulah jumlah langkah ke kanan yang kamu butuhkan.' },
      { en: 'Four ➡️ Move Right blocks, nothing else.', id: 'Empat blok ➡️ Gerak Kanan, tidak ada yang lain.' },
    ], starThresholds: [10, 7, 5, 4],
  },
  {
    id: 'cove-2', worldId: 'cove', number: 2, showCoords: true,
    title: { en: 'Two Rows Above the Island', id: 'Dua Baris di Atas Pulau' },
    story: { en: 'The chart does not name the marker. It says: 2 rows above the island, 3 columns to its right.', id: 'Peta tidak menyebut penandanya. Katanya: 2 baris di atas pulau, 3 kolom di kanannya.' },
    mascotMessage: { en: 'The island 🏝️ sits at Row 4, Column 2. Two rows above is Row 2. Three columns right is Column 5. Work out where I must land! 🧭', id: 'Pulau 🏝️ ada di Baris 4, Kolom 2. Dua baris di atasnya adalah Baris 2. Tiga kolom di kanannya adalah Kolom 5. Hitung ke mana aku harus mendarat! 🧭' },
    gridRows: 5, gridCols: 6,
    cells: (() => { const g = emptyGrid(5, 6); g[3][1] = 'obstacle'; return g })(),
    startPos: [3, 0], items: [{ id: 'm1', pos: [1, 4] }],
    goalType: 'collect_all', availableCategories: ['move'], optimalBlockCount: 6, xpReward: 130,
    hints: [
      { en: 'The marker is at Row 2, Column 5. You start at Row 4, Column 1.', id: 'Penandanya di Baris 2, Kolom 5. Kamu mulai di Baris 4, Kolom 1.' },
      { en: 'Sail up 2 first — the island is right beside you — then right 4.', id: 'Berlayarlah ke atas 2 dulu — pulaunya tepat di sebelahmu — lalu ke kanan 4.' },
    ], starThresholds: [14, 10, 7, 6],
  },
  {
    id: 'cove-3', worldId: 'cove', number: 3, showCoords: true,
    title: { en: 'Name the Step Count', id: 'Beri Nama Jumlah Langkah' },
    story: { en: 'Store the distance in a variable, then let a loop use it.', id: 'Simpan jaraknya dalam sebuah variabel, lalu biarkan perulangan memakainya.' },
    mascotMessage: { en: 'From Column 1 to Column 6 is 5 squares. Make a variable called steps, set it to 5, and repeat that many times! 📦', id: 'Dari Kolom 1 ke Kolom 6 ada 5 kotak. Buat variabel bernama langkah, isi dengan 5, lalu ulangi sebanyak itu! 📦' },
    gridRows: 3, gridCols: 8, cells: emptyGrid(3, 8), startPos: [1, 0], items: [{ id: 'm1', pos: [1, 5] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables'], requiredCategories: ['variables'], optimalBlockCount: 5, xpReward: 140,
    hints: [
      { en: 'In 📦 Variables, create steps and set it to 5.', id: 'Di 📦 Variabel, buat langkah dan isi dengan 5.' },
      { en: 'Then use 🔄 Repeat with your steps variable in the count slot, and one ➡️ Move Right inside.', id: 'Lalu pakai 🔄 Ulangi dengan variabel langkah di slot jumlah, dan satu ➡️ Gerak Kanan di dalamnya.' },
    ], starThresholds: [12, 9, 6, 5],
  },
  {
    id: 'cove-4', worldId: 'cove', number: 4, showCoords: true,
    title: { en: 'The Widening Gap', id: 'Jarak yang Melebar' },
    story: { en: 'The second marker is further away than the first. Change the value you stored instead of writing a new one.', id: 'Penanda kedua lebih jauh dari yang pertama. Ubah nilai yang kamu simpan, jangan menulis yang baru.' },
    mascotMessage: { en: 'First gap: 3 squares. Then the gap grows by 2. Set gap to 3, sail it, add 2 to gap, and sail again! 📦', id: 'Jarak pertama: 3 kotak. Lalu jaraknya bertambah 2. Isi jarak dengan 3, berlayarlah, tambahkan 2 ke jarak, lalu berlayar lagi! 📦' },
    gridRows: 3, gridCols: 10, cells: emptyGrid(3, 10), startPos: [1, 0], items: [{ id: 'm1', pos: [1, 3] }, { id: 'm2', pos: [1, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables'], requiredCategories: ['variables'], optimalBlockCount: 12, xpReward: 150,
    hints: [
      { en: 'Set gap to 3 and repeat gap times. The first marker is at Column 4.', id: 'Isi jarak dengan 3 dan ulangi sebanyak jarak. Penanda pertama ada di Kolom 4.' },
      { en: 'Now set gap to gap + 2, and repeat gap times again. That lands you on Column 9.', id: 'Sekarang isi jarak dengan jarak + 2, dan ulangi sebanyak jarak lagi. Itu membawamu ke Kolom 9.' },
    ], starThresholds: [28, 20, 15, 12],
  },
  {
    id: 'cove-5', worldId: 'cove', number: 5, showCoords: true,
    title: { en: 'Sail Down to Row 5', id: 'Berlayar Turun ke Baris 5' },
    story: { en: 'Let the boat check its own row and stop by itself.', id: 'Biarkan perahu memeriksa barisnya sendiri dan berhenti sendiri.' },
    mascotMessage: { en: 'New blocks in 🧭 Position! "my row" tells me which row I am on right now. Keep sailing down while my row is less than 5.', id: 'Blok baru di 🧭 Posisi! "barisku" memberitahu aku sedang di baris berapa sekarang. Terus berlayar turun selama barisku kurang dari 5.' },
    gridRows: 6, gridCols: 5, cells: emptyGrid(6, 5), startPos: [0, 2], items: [{ id: 'm1', pos: [4, 2] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 5, xpReward: 160,
    hints: [
      { en: 'Use 🔄 repeat while, and drop a comparison into its test slot.', id: 'Pakai 🔄 ulangi selama, dan taruh perbandingan di slot ujinya.' },
      { en: 'The test is: 🧭 my row < 5. Inside the loop, one ⬇️ Move Down.', id: 'Ujinya adalah: 🧭 barisku < 5. Di dalam perulangan, satu ⬇️ Gerak Bawah.' },
    ], starThresholds: [12, 9, 6, 5],
  },
  {
    id: 'cove-6', worldId: 'cove', number: 6, showCoords: true,
    title: { en: 'Channel to Column 8', id: 'Alur ke Kolom 8' },
    story: { en: 'A narrow channel runs east. Sail until your column is exactly 8, picking up the buoy on the way.', id: 'Alur sempit membentang ke timur. Berlayarlah sampai kolommu tepat 8, sambil mengambil pelampung di jalan.' },
    mascotMessage: { en: 'This time use "repeat until" with an equals test: sail until 🧭 my column equals 8. Not less than — equals! 🧭', id: 'Kali ini pakai "ulangi sampai" dengan uji sama dengan: berlayar sampai 🧭 kolomku sama dengan 8. Bukan kurang dari — sama dengan!' },
    gridRows: 5, gridCols: 8, cells: emptyGrid(5, 8), startPos: [2, 0], items: [{ id: 'm1', pos: [2, 3] }, { id: 'm2', pos: [2, 7] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 5, xpReward: 170,
    hints: [
      { en: 'Switch the loop block from "while" to "until" using its dropdown.', id: 'Ubah blok perulangan dari "selama" menjadi "sampai" lewat dropdown-nya.' },
      { en: 'The test is: 🧭 my column = 8. Inside, one ➡️ Move Right. The first buoy is collected on the way.', id: 'Ujinya adalah: 🧭 kolomku = 8. Di dalamnya, satu ➡️ Gerak Kanan. Pelampung pertama terambil di jalan.' },
    ], starThresholds: [14, 10, 7, 5],
  },
  {
    id: 'cove-7', worldId: 'cove', number: 7, showCoords: true,
    title: { en: 'Reef Bar, Two Tests', id: 'Beting Karang, Dua Uji' },
    story: { en: 'A reef blocks the top row. Fix your row first, then your column — the other order runs aground.', id: 'Beting menghalangi baris teratas. Betulkan barismu dulu, baru kolommu — urutan sebaliknya akan kandas.' },
    mascotMessage: { en: 'Two loops this time: one that watches 🧭 my row, then one that watches 🧭 my column. Order matters — the reef is straight ahead!', id: 'Dua perulangan kali ini: satu mengawasi 🧭 barisku, lalu satu mengawasi 🧭 kolomku. Urutan itu penting — betingnya tepat di depan!' },
    gridRows: 6, gridCols: 7,
    cells: (() => { const g = emptyGrid(6, 7); g[0][2] = 'obstacle'; g[0][3] = 'obstacle'; g[0][4] = 'obstacle'; g[0][5] = 'obstacle'; return g })(),
    startPos: [0, 0], items: [{ id: 'm1', pos: [3, 5] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 10, xpReward: 180,
    hints: [
      { en: 'The marker is at Row 4, Column 6. Sail down before you sail east.', id: 'Penandanya di Baris 4, Kolom 6. Berlayarlah turun sebelum ke timur.' },
      { en: 'Loop 1: while 🧭 my row < 4, move down. Loop 2: while 🧭 my column < 6, move right.', id: 'Perulangan 1: selama 🧭 barisku < 4, gerak bawah. Perulangan 2: selama 🧭 kolomku < 6, gerak kanan.' },
    ], starThresholds: [24, 17, 13, 10],
  },
  {
    id: 'cove-8', worldId: 'cove', number: 8, showCoords: true,
    title: { en: 'Three Chart Markers', id: 'Tiga Penanda Peta' },
    story: { en: 'Two markers share a column. Reach the first row target, then push on to the second.', id: 'Dua penanda berbagi kolom yang sama. Capai target baris pertama, lalu lanjut ke yang kedua.' },
    mascotMessage: { en: 'Markers at Row 3 Column 4 and Row 6 Column 4. Line up my column once, then chase two different rows! 🧭', id: 'Penanda di Baris 3 Kolom 4 dan Baris 6 Kolom 4. Luruskan kolomku sekali, lalu kejar dua baris berbeda! 🧭' },
    gridRows: 7, gridCols: 6, cells: emptyGrid(7, 6), startPos: [0, 0], items: [{ id: 'm1', pos: [2, 3] }, { id: 'm2', pos: [5, 3] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 15, xpReward: 190,
    hints: [
      { en: 'Start with: while 🧭 my column < 4, move right.', id: 'Mulai dengan: selama 🧭 kolomku < 4, gerak kanan.' },
      { en: 'Then two row loops: while 🧭 my row < 3 move down, then while 🧭 my row < 6 move down.', id: 'Lalu dua perulangan baris: selama 🧭 barisku < 3 gerak bawah, lalu selama 🧭 barisku < 6 gerak bawah.' },
    ], starThresholds: [35, 25, 19, 15],
  },
  {
    id: 'cove-9', worldId: 'cove', number: 9, isBuggy: true, showCoords: true,
    title: { en: 'Off by One', id: 'Meleset Satu' },
    story: { en: 'The survey loop already sails east, but it stops one square short of the marker.', id: 'Perulangan survei sudah berlayar ke timur, tapi berhenti satu kotak sebelum penanda.' },
    mascotMessage: { en: 'The blocks are already here — and they are wrong! The marker is at Column 6, but the loop stops at Column 5. Find the number and fix it! 🐛', id: 'Bloknya sudah ada di sini — dan salah! Penandanya di Kolom 6, tapi perulangannya berhenti di Kolom 5. Temukan angkanya dan perbaiki! 🐛' },
    gridRows: 3, gridCols: 7, cells: emptyGrid(3, 7), startPos: [1, 0], items: [{ id: 'm1', pos: [1, 5] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 5, xpReward: 200,
    buggyState: {
      blocks: {
        languageVersion: 0,
        blocks: [{
          type: 'controls_whileUntil', x: 40, y: 30,
          fields: { MODE: 'WHILE' },
          inputs: {
            BOOL: {
              block: {
                type: 'logic_compare',
                fields: { OP: 'LT' },
                inputs: {
                  A: { block: { type: 'sensor_col' } },
                  B: { block: { type: 'math_number', fields: { NUM: 5 } } },
                },
              },
            },
            DO: { block: { type: 'move_right' } },
          },
        }],
      },
    },
    hints: [
      { en: 'Read the loop out loud: "while my column is less than 5". Where does that stop?', id: 'Bacakan perulangannya: "selama kolomku kurang dari 5". Berhenti di mana itu?' },
      { en: 'Click the number 5 and type 6. Now the loop stops on Column 6, right on the marker.', id: 'Klik angka 5 dan ketik 6. Sekarang perulangannya berhenti di Kolom 6, tepat di penanda.' },
    ], starThresholds: [12, 9, 6, 5],
  },
  {
    id: 'cove-10', worldId: 'cove', number: 10, showCoords: true,
    title: { en: 'The Deep Chart', id: 'Peta Dalam' },
    story: { en: 'Four legs, three markers, and reefs that punish every overshoot. Read each coordinate before you sail it.', id: 'Empat tahap, tiga penanda, dan beting yang menghukum setiap kelebihan langkah. Baca setiap koordinat sebelum berlayar.' },
    mascotMessage: { en: 'Column 4, then Row 5, then Column 8, then Row 8. One sensor loop for each leg — and do not overshoot, the reefs are close! 🗺️', id: 'Kolom 4, lalu Baris 5, lalu Kolom 8, lalu Baris 8. Satu perulangan sensor untuk tiap tahap — dan jangan kelebihan, betingnya dekat! 🗺️' },
    gridRows: 8, gridCols: 9,
    cells: (() => {
      const g = emptyGrid(8, 9)
      for (let c = 4; c < 9; c++) g[0][c] = 'obstacle'
      g[5][3] = 'obstacle'
      g[4][8] = 'obstacle'
      return g
    })(),
    startPos: [0, 0], items: [{ id: 'm1', pos: [4, 3] }, { id: 'm2', pos: [4, 7] }, { id: 'm3', pos: [7, 7] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 20, xpReward: 240,
    hints: [
      { en: 'Leg 1: while 🧭 my column < 4, move right. Leg 2: while 🧭 my row < 5, move down.', id: 'Tahap 1: selama 🧭 kolomku < 4, gerak kanan. Tahap 2: selama 🧭 barisku < 5, gerak bawah.' },
      { en: 'Leg 3: while 🧭 my column < 8, move right. Leg 4: while 🧭 my row < 8, move down.', id: 'Tahap 3: selama 🧭 kolomku < 8, gerak kanan. Tahap 4: selama 🧭 barisku < 8, gerak bawah.' },
    ], starThresholds: [46, 33, 26, 20],
  },
  {
    id: 'cove-11', worldId: 'cove', number: 11, showCoords: true,
    title: { en: 'Chart a Longer Course', id: 'Susun Rute Lebih Panjang' },
    story: { en: 'Open water stretches further this time — two sensor legs, one after another, carry you to the marker.', id: 'Laut lepas kali ini terbentang lebih jauh — dua tahap sensor, satu demi satu, membawamu ke penanda.' },
    mascotMessage: { en: 'First sail east while my column is less than 7. Then sail south while my row is less than 5. Same trick, just a longer voyage! 🧭', id: 'Pertama berlayar timur selama kolomku kurang dari 7. Lalu berlayar selatan selama barisku kurang dari 5. Trik yang sama, cuma perjalanannya lebih panjang! 🧭' },
    gridRows: 6, gridCols: 8, cells: emptyGrid(6, 8), startPos: [0, 0], items: [{ id: 'm1', pos: [4, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 10, xpReward: 250,
    hints: [
      { en: 'Leg 1: while 🧭 my column < 7, move right.', id: 'Tahap 1: selama 🧭 kolomku < 7, gerak kanan.' },
      { en: 'Leg 2: while 🧭 my row < 5, move down.', id: 'Tahap 2: selama 🧭 barisku < 5, gerak bawah.' },
    ], starThresholds: [24, 17, 13, 10],
  },
  {
    id: 'cove-12', worldId: 'cove', number: 12, showCoords: true,
    title: { en: 'Row, Column, Row', id: 'Baris, Kolom, Baris' },
    story: { en: 'Three legs this time: sail down, then east, then down again. Each leg watches a different number.', id: 'Tiga tahap kali ini: berlayar turun, lalu ke timur, lalu turun lagi. Setiap tahap mengawasi angka yang berbeda.' },
    mascotMessage: { en: 'Row less than 3, then column less than 7, then row less than 6. Three loops, three sensors, one voyage! 🧭', id: 'Baris kurang dari 3, lalu kolom kurang dari 7, lalu baris kurang dari 6. Tiga perulangan, tiga sensor, satu perjalanan! 🧭' },
    gridRows: 7, gridCols: 8, cells: emptyGrid(7, 8), startPos: [0, 0], items: [{ id: 'm1', pos: [2, 6] }, { id: 'm2', pos: [5, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 15, xpReward: 260,
    hints: [
      { en: 'Leg 1: while 🧭 my row < 3, move down. Leg 2: while 🧭 my column < 7, move right.', id: 'Tahap 1: selama 🧭 barisku < 3, gerak bawah. Tahap 2: selama 🧭 kolomku < 7, gerak kanan.' },
      { en: 'Leg 3: while 🧭 my row < 6, move down.', id: 'Tahap 3: selama 🧭 barisku < 6, gerak bawah.' },
    ], starThresholds: [35, 25, 19, 15],
  },
  {
    id: 'cove-13', worldId: 'cove', number: 13, showCoords: true,
    title: { en: 'Sail Back West', id: 'Berlayar Kembali ke Barat' },
    story: { en: 'The current pushed you too far east. This time the sensor counts down, not up — sail west until your column is small enough.', id: 'Arus mendorongmu terlalu jauh ke timur. Kali ini sensornya menghitung mundur, bukan naik — berlayarlah ke barat sampai kolommu cukup kecil.' },
    mascotMessage: { en: 'A new test: while my column is greater than 3! Keep sailing west until that stops being true. 🧭', id: 'Uji baru: selama kolomku lebih besar dari 3! Terus berlayar barat sampai itu tidak lagi benar. 🧭' },
    gridRows: 5, gridCols: 9, cells: emptyGrid(5, 9), startPos: [2, 8], items: [{ id: 'm1', pos: [2, 2] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 5, xpReward: 270,
    hints: [
      { en: 'Use "repeat while" with 🧭 my column > 3 as the test.', id: 'Pakai "ulangi selama" dengan uji 🧭 kolomku > 3.' },
      { en: 'Inside the loop, one ⬅️ Move Left — sailing west lowers your column number.', id: 'Di dalam perulangan, satu ⬅️ Gerak Kiri — berlayar ke barat menurunkan angka kolommu.' },
    ], starThresholds: [12, 9, 6, 5],
  },
  {
    id: 'cove-14', worldId: 'cove', number: 14, showCoords: true,
    title: { en: 'Fixed Steps, Then a Sensor', id: 'Langkah Tetap, Lalu Sensor' },
    story: { en: 'The first leg is always the same four steps east. The second leg depends on where the reef sits — read your row and stop yourself.', id: 'Tahap pertama selalu sama: empat langkah ke timur. Tahap kedua bergantung di mana beting berada — baca barismu dan berhentilah sendiri.' },
    mascotMessage: { en: 'A steps variable set to 4 handles the first leg. Then switch to a sensor loop for the second — while my row < 4! 📦🧭', id: 'Variabel langkah diisi 4 menangani tahap pertama. Lalu ganti ke perulangan sensor untuk tahap kedua — selama barisku < 4! 📦🧭' },
    gridRows: 5, gridCols: 6, cells: emptyGrid(5, 6), startPos: [0, 0], items: [{ id: 'm1', pos: [0, 4] }, { id: 'm2', pos: [3, 4] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors', 'variables'], requiredCategories: ['variables', 'sensors'], optimalBlockCount: 10, xpReward: 280,
    hints: [
      { en: 'Set steps to 4, repeat steps times with one ➡️ Move Right inside.', id: 'Isi langkah dengan 4, ulangi sebanyak langkah dengan satu ➡️ Gerak Kanan di dalamnya.' },
      { en: 'Then: while 🧭 my row < 4, move down.', id: 'Lalu: selama 🧭 barisku < 4, gerak bawah.' },
    ], starThresholds: [24, 17, 13, 10],
  },
  {
    id: 'cove-15', worldId: 'cove', number: 15, showCoords: true,
    title: { en: 'The Wider Chart', id: 'Peta yang Lebih Luas' },
    story: { en: 'A bigger version of the deep chart — four legs, four sensors, and every test has to be exact.', id: 'Versi lebih besar dari peta dalam — empat tahap, empat sensor, dan setiap uji harus tepat.' },
    mascotMessage: { en: 'Column 5, then row 6, then column 9, then row 9. Four sensor loops, one after another! 🧭', id: 'Kolom 5, lalu baris 6, lalu kolom 9, lalu baris 9. Empat perulangan sensor, satu demi satu! 🧭' },
    gridRows: 9, gridCols: 10, cells: emptyGrid(9, 10), startPos: [0, 0], items: [{ id: 'm1', pos: [5, 4] }, { id: 'm2', pos: [5, 8] }, { id: 'm3', pos: [8, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 20, xpReward: 300,
    hints: [
      { en: 'Leg 1: while 🧭 my column < 5, move right. Leg 2: while 🧭 my row < 6, move down.', id: 'Tahap 1: selama 🧭 kolomku < 5, gerak kanan. Tahap 2: selama 🧭 barisku < 6, gerak bawah.' },
      { en: 'Leg 3: while 🧭 my column < 9, move right. Leg 4: while 🧭 my row < 9, move down.', id: 'Tahap 3: selama 🧭 kolomku < 9, gerak kanan. Tahap 4: selama 🧭 barisku < 9, gerak bawah.' },
    ], starThresholds: [46, 33, 26, 20],
  },
  {
    id: 'cove-16', worldId: 'cove', number: 16, showCoords: true,
    title: { en: 'Grow the Steps Twice', id: 'Tambahkan Langkah Dua Kali' },
    story: { en: 'Set steps once, sail it, grow the number, sail again — then finish with a sensor leg south.', id: 'Isi langkah sekali, berlayar, tambah angkanya, berlayar lagi — lalu selesaikan dengan tahap sensor ke selatan.' },
    mascotMessage: { en: 'Steps starts at 3. Sail east. Add 2 to steps. Sail east again. Then: while my row < 5, move down. 📦🧭', id: 'Langkah dimulai dari 3. Berlayar timur. Tambahkan 2 ke langkah. Berlayar timur lagi. Lalu: selama barisku < 5, gerak bawah. 📦🧭' },
    gridRows: 6, gridCols: 9, cells: emptyGrid(6, 9), startPos: [0, 0], items: [{ id: 'm1', pos: [0, 3] }, { id: 'm2', pos: [0, 8] }, { id: 'm3', pos: [4, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors', 'variables'], requiredCategories: ['variables', 'sensors'], optimalBlockCount: 17, xpReward: 310,
    hints: [
      { en: 'Set steps to 3, repeat and sail east. Then set steps to steps + 2, repeat and sail east again.', id: 'Isi langkah dengan 3, ulangi dan berlayar timur. Lalu isi langkah dengan langkah + 2, ulangi dan berlayar timur lagi.' },
      { en: 'Finish with: while 🧭 my row < 5, move down.', id: 'Selesaikan dengan: selama 🧭 barisku < 5, gerak bawah.' },
    ], starThresholds: [41, 29, 22, 17],
  },
  {
    id: 'cove-17', worldId: 'cove', number: 17, showCoords: true,
    title: { en: 'Five Bearings', id: 'Lima Arah' },
    story: { en: 'The longest chart yet — five legs, alternating east and south, each one a sensor loop.', id: 'Peta terpanjang sejauh ini — lima tahap, bergantian timur dan selatan, masing-masing perulangan sensor.' },
    mascotMessage: { en: 'Column 4, row 3, column 8, row 6, column 11. Five loops in a row — take it one bearing at a time! 🧭', id: 'Kolom 4, baris 3, kolom 8, baris 6, kolom 11. Lima perulangan berturut-turut — kerjakan satu arah dalam satu waktu! 🧭' },
    gridRows: 7, gridCols: 12, cells: emptyGrid(7, 12), startPos: [0, 0], items: [{ id: 'm1', pos: [2, 3] }, { id: 'm2', pos: [2, 7] }, { id: 'm3', pos: [5, 7] }, { id: 'm4', pos: [5, 10] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 25, xpReward: 330,
    hints: [
      { en: 'Leg 1: column < 4. Leg 2: row < 3. Leg 3: column < 8.', id: 'Tahap 1: kolom < 4. Tahap 2: baris < 3. Tahap 3: kolom < 8.' },
      { en: 'Leg 4: row < 6. Leg 5: column < 11. Same pattern every time — while, sensor, move.', id: 'Tahap 4: baris < 6. Tahap 5: kolom < 11. Pola yang sama setiap kali — selama, sensor, gerak.' },
    ], starThresholds: [60, 43, 33, 25],
  },
  {
    id: 'cove-18', worldId: 'cove', number: 18, showCoords: true,
    title: { en: 'The Zigzag Reef', id: 'Beting Zigzag' },
    story: { en: 'This reef bends the course sideways. Sail east, then south, then back west, then south again — reefs guard every turn.', id: 'Beting ini membelokkan rute ke samping. Berlayar timur, lalu selatan, lalu kembali barat, lalu selatan lagi — beting menjaga setiap belokan.' },
    mascotMessage: { en: 'Column 6, then row 4, then column 2 — going backwards — then row 7. Watch which way you are counting! 🧭', id: 'Kolom 6, lalu baris 4, lalu kolom 2 — berbalik arah — lalu baris 7. Perhatikan ke arah mana kamu menghitung! 🧭' },
    gridRows: 8, gridCols: 7,
    cells: (() => { const g = emptyGrid(8, 7); g[0][6] = 'obstacle'; g[4][5] = 'obstacle'; g[3][0] = 'obstacle'; g[7][1] = 'obstacle'; return g })(),
    startPos: [0, 0], items: [{ id: 'm1', pos: [3, 5] }, { id: 'm2', pos: [3, 1] }, { id: 'm3', pos: [6, 1] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 20, xpReward: 350,
    hints: [
      { en: 'Leg 1: column < 6. Leg 2: row < 4. Leg 3: column > 2 — this one counts down while sailing west.', id: 'Tahap 1: kolom < 6. Tahap 2: baris < 4. Tahap 3: kolom > 2 — ini menghitung turun saat berlayar barat.' },
      { en: 'Leg 4: row < 7. The reefs sit right where an overshoot would run you aground.', id: 'Tahap 4: baris < 7. Betingnya ada tepat di tempat kelebihan langkah akan mengandaskanmu.' },
    ], starThresholds: [46, 33, 26, 20],
  },
  {
    id: 'cove-19', worldId: 'cove', number: 19, showCoords: true,
    title: { en: 'Six-Leg Expedition', id: 'Ekspedisi Enam Tahap' },
    story: { en: 'The biggest chart in the cove — six legs, six sensor tests, no shortcuts.', id: 'Peta terbesar di teluk ini — enam tahap, enam uji sensor, tanpa jalan pintas.' },
    mascotMessage: { en: 'Column 3, row 3, column 7, row 6, column 10, row 9. Six loops — same pattern, just more of it! 🧭', id: 'Kolom 3, baris 3, kolom 7, baris 6, kolom 10, baris 9. Enam perulangan — pola yang sama, cuma lebih banyak! 🧭' },
    gridRows: 9, gridCols: 11, cells: emptyGrid(9, 11), startPos: [0, 0], items: [{ id: 'm1', pos: [2, 2] }, { id: 'm2', pos: [2, 6] }, { id: 'm3', pos: [5, 6] }, { id: 'm4', pos: [5, 9] }, { id: 'm5', pos: [8, 9] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors'], requiredCategories: ['sensors', 'loops'], optimalBlockCount: 30, xpReward: 380,
    hints: [
      { en: 'Column 3, row 3, column 7 — the first half of the expedition.', id: 'Kolom 3, baris 3, kolom 7 — separuh pertama ekspedisi.' },
      { en: 'Row 6, column 10, row 9 — finish the second half the same way.', id: 'Baris 6, kolom 10, baris 9 — selesaikan separuh kedua dengan cara yang sama.' },
    ], starThresholds: [72, 51, 39, 30],
  },
  {
    id: 'cove-20', worldId: 'cove', number: 20, showCoords: true,
    title: { en: "Navigator's Masterpiece", id: 'Mahakarya Navigator' },
    story: { en: 'Every trick you have learned, in one voyage: a steps variable that grows, then a zigzag of sensor legs to the final marker.', id: 'Semua trik yang telah kamu pelajari, dalam satu perjalanan: variabel langkah yang bertambah, lalu zigzag tahap sensor ke penanda terakhir.' },
    mascotMessage: { en: 'Steps starts at 3, sails east, then grows by 3 and sails again. Then row 4, column 2 — backwards — and row 8. You are a true navigator now! 🧭📦🏆', id: 'Langkah dimulai dari 3, berlayar timur, lalu bertambah 3 dan berlayar lagi. Lalu baris 4, kolom 2 — berbalik arah — dan baris 8. Kamu navigator sejati sekarang! 🧭📦🏆' },
    gridRows: 9, gridCols: 10,
    cells: (() => { const g = emptyGrid(9, 10); g[4][9] = 'obstacle'; g[3][0] = 'obstacle'; g[8][1] = 'obstacle'; return g })(),
    startPos: [0, 0], items: [{ id: 'm1', pos: [0, 9] }, { id: 'm2', pos: [3, 9] }, { id: 'm3', pos: [3, 1] }, { id: 'm4', pos: [7, 1] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'sensors', 'variables'], requiredCategories: ['variables', 'sensors'], optimalBlockCount: 27, xpReward: 420,
    hints: [
      { en: 'Set steps to 3, sail east. Set steps to steps + 3, sail east again.', id: 'Isi langkah dengan 3, berlayar timur. Isi langkah dengan langkah + 3, berlayar timur lagi.' },
      { en: 'Then three sensor legs: row < 4, column > 2, row < 8.', id: 'Lalu tiga tahap sensor: baris < 4, kolom > 2, baris < 8.' },
    ], starThresholds: [65, 46, 35, 27],
  },
  // ─────────────────────────────────────────────
  // BONUS WORLD 7: ECO CITY — Decomposition & Reuse
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
    title: { en: 'City Hub Run', id: 'Rute Pusat Kota' },
    story: { en: 'One of the bigger rounds yet: three identical districts, a link road east, then the drop at the city hub. The river across the low streets is closed to trucks, so stay above it until the far side.', id: 'Salah satu putaran lebih besar sejauh ini: tiga distrik identik, jalan penghubung ke timur, lalu pengantaran di pusat kota. Sungai yang melintasi jalan-jalan bawah tertutup untuk truk, jadi tetaplah di atasnya sampai sisi terjauh.' },
    mascotMessage: { en: 'Everything you have learned so far, in one round: a function, a loop over it, and two more loops home. 🏙️', id: 'Semua yang sudah kamu pelajari sejauh ini, dalam satu putaran: sebuah fungsi, perulangan atasnya, dan dua perulangan lagi menuju pulang. 🏙️' },
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
  {
    id: 'eco-11', worldId: 'eco', number: 11,
    title: { en: 'Recycling Alley', id: 'Gang Daur Ulang' },
    story: { en: 'A side street off the main road holds seven identical recycling bins in a row. Turn into the alley first, then loop your way down it.', id: 'Sebuah gang di samping jalan utama menyimpan tujuh tempat sampah daur ulang berjajar. Belok ke gang dulu, lalu susuri dengan perulangan.' },
    mascotMessage: { en: 'Two moves to turn into the alley, then one loop for all seven bins. 🔄♻️', id: 'Dua gerakan untuk belok ke gang, lalu satu perulangan untuk ketujuh tempat sampah. 🔄♻️' },
    gridRows: 4, gridCols: 9, cells: emptyGrid(4, 9), startPos: [0, 0],
    items: [1, 2, 3, 4, 5, 6, 7].map(col => ({ id: `bin-${col}`, pos: [2, col] as [number, number] })),
    goalType: 'collect_all', availableCategories: ['move', 'loops'], requiredCategories: ['loops'], optimalBlockCount: 5, xpReward: 230,
    hints: [
      { en: 'Drive down 2 to turn into the alley — no loop needed for that short a stretch.', id: 'Jalan turun 2 untuk belok ke gang — tidak perlu perulangan untuk jarak sependek itu.' },
      { en: 'Then Repeat Move Right 7 times for every bin in a row.', id: 'Lalu Ulangi Gerak Kanan 7 kali untuk setiap tempat sampah berjajar.' },
    ],
    starThresholds: [11, 8, 6, 5],
  },
  {
    id: 'eco-12', worldId: 'eco', number: 12,
    title: { en: 'Three Growing Blocks', id: 'Tiga Blok yang Membesar' },
    story: { en: 'Three streets on this plan each get longer than the last. Store the length in a variable, then grow it twice as you go.', id: 'Tiga jalan di rencana ini masing-masing makin panjang dari yang sebelumnya. Simpan panjangnya dalam variabel, lalu besarkan dua kali seiring perjalanan.' },
    mascotMessage: { en: 'Length starts at 2. Sail it, add 1, sail it, add 2 more, sail it once more. The same variable, growing each time. 📦', id: 'Panjang dimulai dari 2. Jalani, tambah 1, jalani, tambah 2 lagi, jalani sekali lagi. Variabel yang sama, membesar setiap kali. 📦' },
    gridRows: 8, gridCols: 4, cells: emptyGrid(8, 4), startPos: [0, 0],
    items: [{ id: 'glass', pos: [2, 0] }, { id: 'pump', pos: [2, 3] }, { id: 'grid', pos: [7, 3] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables'], requiredCategories: ['variables'], optimalBlockCount: 19, xpReward: 250,
    hints: [
      { en: 'Set length to 2 and repeat Down. Then set length to length + 1 (now 3) and repeat Right.', id: 'Isi panjang dengan 2 dan ulangi Bawah. Lalu isi panjang dengan panjang + 1 (sekarang 3) dan ulangi Kanan.' },
      { en: 'Finally set length to length + 2 (now 5) and repeat Down once more.', id: 'Terakhir isi panjang dengan panjang + 2 (sekarang 5) dan ulangi Bawah sekali lagi.' },
    ],
    starThresholds: [41, 29, 23, 19],
  },
  {
    id: 'eco-13', worldId: 'eco', number: 13,
    title: { en: 'Both Gates Closed', id: 'Kedua Gerbang Tutup' },
    story: { en: 'Two signs today: the north gate is shut, and further on the middle gate is shut too. Check each sign in your code and take the open lane both times.', id: 'Dua papan tanda hari ini: gerbang utara tutup, dan lebih jauh gerbang tengah juga tutup. Periksa tiap papan di kodemu dan ambil jalur terbuka dua kali.' },
    mascotMessage: { en: 'Two IF blocks this time, one for each closed gate. Solve the first detour, then the second one further down the road. 🚧🚧', id: 'Dua blok JIKA kali ini, satu untuk tiap gerbang tertutup. Selesaikan putaran pertama, lalu yang kedua lebih jauh di jalan. 🚧🚧' },
    gridRows: 6, gridCols: 9,
    cells: (() => { const g = emptyGrid(6, 9); g[0][3] = 'obstacle'; g[1][3] = 'obstacle'; g[2][7] = 'obstacle'; g[3][7] = 'obstacle'; return g })(),
    startPos: [0, 0],
    items: [{ id: 'compost', pos: [2, 6] }, { id: 'power', pos: [4, 8] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'logic'], requiredCategories: ['logic'], optimalBlockCount: 13, xpReward: 270,
    hints: [
      { en: 'Inside the first IF: Repeat Down 2 times, then Repeat Right 6 times to clear the north gate.', id: 'Di dalam JIKA pertama: Ulangi Bawah 2 kali, lalu Ulangi Kanan 6 kali untuk melewati gerbang utara.' },
      { en: 'Inside the second IF: Repeat Down 2 times, then Move Right twice to clear the middle gate.', id: 'Di dalam JIKA kedua: Ulangi Bawah 2 kali, lalu Gerak Kanan dua kali untuk melewati gerbang tengah.' },
    ],
    starThresholds: [28, 20, 16, 13],
  },
  {
    id: 'eco-14', worldId: 'eco', number: 14,
    title: { en: 'Four Identical Corners', id: 'Empat Sudut Identik' },
    story: { en: 'Four new corners were built from the exact same shape: right, right, down. Name that shape once, then call it four times with a link road east after each.', id: 'Empat sudut baru dibangun dari bentuk yang persis sama: kanan, kanan, bawah. Beri nama bentuk itu sekali, lalu panggil empat kali dengan jalan penghubung ke timur setelah tiap panggilan.' },
    mascotMessage: { en: 'One corner function, called four times, with a link road after each call. 🔧', id: 'Satu fungsi sudut, dipanggil empat kali, dengan jalan penghubung setelah tiap panggilan. 🔧' },
    gridRows: 6, gridCols: 13, cells: emptyGrid(6, 13), startPos: [0, 0],
    items: [{ id: 'c1', pos: [1, 3] }, { id: 'c2', pos: [2, 6] }, { id: 'c3', pos: [3, 9] }, { id: 'c4', pos: [4, 12] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'functions'], requiredCategories: ['functions'], optimalBlockCount: 8, xpReward: 290,
    hints: [
      { en: 'Define a function with Right, Right, Down.', id: 'Definisikan fungsi dengan Kanan, Kanan, Bawah.' },
      { en: 'Repeat 4 times: call the function, then Move Right.', id: 'Ulangi 4 kali: panggil fungsinya, lalu Gerak Kanan.' },
    ],
    starThresholds: [17, 12, 10, 8],
  },
  {
    id: 'eco-15', worldId: 'eco', number: 15,
    title: { en: 'Five-Stop Recycling Route', id: 'Rute Daur Ulang Lima Henti' },
    story: { en: "Sol's tablet now holds five stops instead of three. Keep the list, then work through every leg between them in order.", id: 'Tablet Sol kini menyimpan lima perhentian, bukan tiga. Simpan daftarnya, lalu kerjakan setiap kaki di antaranya secara berurutan.' },
    mascotMessage: { en: 'A longer list this time — five stops, six legs between them. Write the plan down first. 📋', id: 'Daftar lebih panjang kali ini — lima perhentian, enam kaki di antaranya. Tulis dulu rencananya. 📋' },
    gridRows: 6, gridCols: 11, cells: emptyGrid(6, 11), startPos: [0, 0],
    items: [{ id: 'stop1', pos: [0, 3] }, { id: 'stop2', pos: [3, 3] }, { id: 'stop3', pos: [3, 7] }, { id: 'stop4', pos: [0, 7] }, { id: 'stop5', pos: [5, 9] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'lists'], requiredCategories: ['lists'], optimalBlockCount: 26, xpReward: 310,
    hints: [
      { en: 'Build a list of the five stops first, then write the leg between each pair.', id: 'Buat dulu daftar lima perhentian, lalu tulis kaki di antara tiap pasang.' },
      { en: 'Right 3, down 3, right 4, up 3, right 2, then down 5.', id: 'Kanan 3, turun 3, kanan 4, naik 3, kanan 2, lalu turun 5.' },
    ],
    starThresholds: [56, 40, 32, 26],
  },
  {
    id: 'eco-16', worldId: 'eco', number: 16,
    title: { en: 'Detour Function', id: 'Fungsi Jalan Putar' },
    story: { en: 'A short wall blocks the direct road. Name the detour around it as a function, then call it once from inside an IF before finishing the drive.', id: 'Tembok pendek menghalangi jalan langsung. Beri nama jalan putar di sekitarnya sebagai fungsi, lalu panggil sekali dari dalam JIKA sebelum menyelesaikan perjalanan.' },
    mascotMessage: { en: 'Define detour as down, right-right-right-right, up. Call it inside an IF, then two more moves right to finish. 🔧🚧', id: 'Definisikan jalanPutar sebagai bawah, kanan-kanan-kanan-kanan, atas. Panggil di dalam JIKA, lalu dua gerakan lagi ke kanan untuk selesai. 🔧🚧' },
    gridRows: 3, gridCols: 7,
    cells: (() => { const g = emptyGrid(3, 7); g[0][2] = 'obstacle'; g[0][3] = 'obstacle'; return g })(),
    startPos: [0, 0],
    items: [{ id: 'mid', pos: [1, 4] }, { id: 'final', pos: [0, 6] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'logic', 'functions'], requiredCategories: ['logic', 'functions'], optimalBlockCount: 9, xpReward: 330,
    hints: [
      { en: 'Define detour: Move Down, Move Right 4 times, Move Up. That dips under the wall and back up.', id: 'Definisikan jalanPutar: Gerak Bawah, Gerak Kanan 4 kali, Gerak Atas. Itu turun di bawah tembok dan naik lagi.' },
      { en: 'Put the call inside an IF block, then two more Move Right blocks to reach the final token.', id: 'Taruh panggilannya di dalam blok JIKA, lalu dua blok Gerak Kanan lagi untuk mencapai token terakhir.' },
    ],
    starThresholds: [19, 14, 11, 9],
  },
  {
    id: 'eco-17', worldId: 'eco', number: 17,
    title: { en: 'How Long Is the Detour?', id: 'Seberapa Panjang Jalan Putarnya?' },
    story: { en: 'A single blocked square needs only a one-square dip to clear. Store that dip length in a variable and use it on both sides of the detour.', id: 'Satu kotak terhalang hanya butuh turun satu kotak untuk lewat. Simpan panjang turunnya dalam variabel dan pakai di kedua sisi jalan putar.' },
    mascotMessage: { en: 'dipLength is 1. Inside an IF, dip down dipLength, cross 4, then rise up dipLength. Same variable, both ends. 📦🚧', id: 'panjangTurun adalah 1. Di dalam JIKA, turun sebanyak panjangTurun, lintasi 4, lalu naik sebanyak panjangTurun. Variabel yang sama, kedua ujung. 📦🚧' },
    gridRows: 2, gridCols: 5,
    cells: (() => { const g = emptyGrid(2, 5); g[0][2] = 'obstacle'; return g })(),
    startPos: [0, 0],
    items: [{ id: 'mid', pos: [1, 4] }, { id: 'final', pos: [0, 4] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'logic'], requiredCategories: ['variables', 'logic'], optimalBlockCount: 13, xpReward: 350,
    hints: [
      { en: 'Set dipLength to 1. Inside an IF, repeat dipLength times Down.', id: 'Isi panjangTurun dengan 1. Di dalam JIKA, ulangi sebanyak panjangTurun kali Bawah.' },
      { en: 'Then Repeat Right 4 times to cross, then repeat dipLength times Up to finish the detour.', id: 'Lalu Ulangi Kanan 4 kali untuk melintasi, lalu ulangi sebanyak panjangTurun kali Atas untuk selesaikan jalan putar.' },
    ],
    starThresholds: [28, 20, 16, 13],
  },
  {
    id: 'eco-18', worldId: 'eco', number: 18,
    title: { en: 'The Route List Calls Home', id: 'Daftar Rute Menelepon Pusat' },
    story: { en: 'Three stops on the list, and after each one Sol calls in a quick check-in before moving on to the next leg.', id: 'Tiga perhentian di daftar, dan setelah tiap perhentian Sol menelepon pusat sebentar sebelum lanjut ke kaki berikutnya.' },
    mascotMessage: { en: 'Define checkIn as one Move Right. Call it after every stop except the last one. 📋🔧', id: 'Definisikan lapor sebagai satu Gerak Kanan. Panggil setelah tiap perhentian kecuali yang terakhir. 📋🔧' },
    gridRows: 4, gridCols: 10, cells: emptyGrid(4, 10), startPos: [0, 0],
    items: [{ id: 'stop1', pos: [0, 4] }, { id: 'stop2', pos: [3, 5] }, { id: 'stop3', pos: [3, 9] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'functions', 'lists'], requiredCategories: ['lists', 'functions'], optimalBlockCount: 18, xpReward: 370,
    hints: [
      { en: 'Build a list of the three stops. Define checkIn as one Move Right.', id: 'Buat daftar tiga perhentian. Definisikan lapor sebagai satu Gerak Kanan.' },
      { en: 'Right 4, call checkIn, down 3, call checkIn, right 3 to the final stop.', id: 'Kanan 4, panggil lapor, turun 3, panggil lapor, kanan 3 ke perhentian terakhir.' },
    ],
    starThresholds: [39, 28, 22, 18],
  },
  {
    id: 'eco-19', worldId: 'eco', number: 19,
    title: { en: 'The Growing District', id: 'Distrik yang Bertambah' },
    story: { en: 'Three districts share the same shape again, but this time the number of repeats lives in a variable, not a fixed number.', id: 'Tiga distrik berbagi bentuk yang sama lagi, tapi kali ini jumlah pengulangannya disimpan di variabel, bukan angka tetap.' },
    mascotMessage: { en: 'reps is 3. Repeat reps times: call the district function, then move right. The count itself is a variable now! 📦🔧', id: 'ulangan adalah 3. Ulangi sebanyak ulangan kali: panggil fungsi distrik, lalu gerak kanan. Jumlahnya sendiri sekarang variabel! 📦🔧' },
    gridRows: 4, gridCols: 10, cells: emptyGrid(4, 10), startPos: [0, 0],
    items: [{ id: 'd1', pos: [1, 3] }, { id: 'd2', pos: [2, 6] }, { id: 'd3', pos: [3, 9] }],
    goalType: 'collect_all', availableCategories: ['move', 'loops', 'variables', 'functions'], requiredCategories: ['variables', 'functions'], optimalBlockCount: 10, xpReward: 390,
    hints: [
      { en: 'Define the district as Right, Right, Down. Set reps to 3.', id: 'Definisikan distrik sebagai Kanan, Kanan, Bawah. Isi ulangan dengan 3.' },
      { en: 'Repeat reps times: call the district, then Move Right.', id: 'Ulangi sebanyak ulangan kali: panggil distriknya, lalu Gerak Kanan.' },
    ],
    starThresholds: [22, 15, 12, 10],
  },
  {
    id: 'eco-20', worldId: 'eco', number: 20,
    title: { en: 'Eco City Grand Tour', id: 'Tur Besar Kota Hijau' },
    story: { en: 'Every trick Sol has learned, in one long round: a variable-controlled function loop through four districts, an IF-guarded detour around the river, and a final list of two stops home.', id: 'Semua trik yang telah dipelajari Sol, dalam satu putaran panjang: perulangan fungsi terkendali variabel melalui empat distrik, jalan putar berpenjaga JIKA di sekitar sungai, dan daftar akhir dua perhentian pulang.' },
    mascotMessage: { en: 'reps is 4, looping the district function with a link road. Then an IF dips around the river. Then two more stops home. Everything, together! 🏙️👷', id: 'ulangan adalah 4, mengulang fungsi distrik dengan jalan penghubung. Lalu JIKA turun di sekitar sungai. Lalu dua perhentian lagi pulang. Semuanya, bersama! 🏙️👷' },
    gridRows: 12, gridCols: 17,
    cells: (() => { const g = emptyGrid(12, 17); g[8][13] = 'obstacle'; g[8][14] = 'obstacle'; return g })(),
    startPos: [0, 0],
    items: [
      { id: 'd1', pos: [2, 3] }, { id: 'd2', pos: [4, 6] }, { id: 'd3', pos: [6, 9] }, { id: 'd4', pos: [8, 12] },
      { id: 'river', pos: [8, 15] }, { id: 'hub', pos: [11, 16] },
    ],
    goalType: 'collect_all',
    availableCategories: ['move', 'loops', 'variables', 'logic', 'functions', 'lists'],
    requiredCategories: ['functions', 'variables', 'logic'],
    optimalBlockCount: 24, xpReward: 430,
    hints: [
      { en: 'Define the district as Right, Down, Right, Down. Set reps to 4. Repeat reps times: call it, then Move Right.', id: 'Definisikan distrik sebagai Kanan, Bawah, Kanan, Bawah. Isi ulangan dengan 4. Ulangi sebanyak ulangan kali: panggil, lalu Gerak Kanan.' },
      { en: 'Then inside an IF: down 2, right 3, up 2 around the river. Finally down 3, right 1 to the hub.', id: 'Lalu di dalam JIKA: turun 2, kanan 3, naik 2 mengelilingi sungai. Terakhir turun 3, kanan 1 ke pusat.' },
    ],
    starThresholds: [52, 37, 29, 24],
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
