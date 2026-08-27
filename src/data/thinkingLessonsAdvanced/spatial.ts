import type { ThinkingLesson } from '../../types'

export const spatialLessonsAdvanced: ThinkingLesson[] = [
  // ── Spatial Studio · tier two ────────────────────────────────
  // Tier one: one transformation at a time. Tier two: telling a turn from a flip,
  // building a mirror image square by square, fitting a shape into a hole, composing two
  // flips, seeing from someone else's side, and folding a flat net into a cube.
  {
    id: 'spatial-10',
    worldId: 'spatial',
    number: 10,
    title: { en: 'Turned, or Flipped?', id: 'Diputar, atau Dibalik?' },
    mascotMessage: {
      en: 'A turn keeps a shape the same way round. A flip makes its mirror twin — and the two can never match. 🪞',
      id: 'Putaran menjaga bentuknya tetap sama. Balikan membuat kembaran cerminnya — dan keduanya tidak akan pernah cocok. 🪞',
    },
    xpReward: 28,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Three of these frames show the very same piece simply turned around. Tap the ONE that has been flipped instead.',
        id: 'Tiga bingkai ini menunjukkan potongan yang sama persis, hanya diputar. Ketuk SATU yang justru dibalik.',
      },
      figure: ['o#.', '.##', '...'],
      options: [
        { id: 'a', grid: ['..o', '.##', '.#.'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['...', '##.', '.#o'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['.#.', '##.', 'o..'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['.#o', '##.', '...'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'd',
    },
  },
  {
    id: 'spatial-11',
    worldId: 'spatial',
    number: 11,
    title: { en: 'Finish the Mirror', id: 'Selesaikan Cerminnya' },
    mascotMessage: {
      en: 'A square close to the mirror line has its twin close to the line too. Work outwards! 🪞',
      id: 'Kotak yang dekat garis cermin punya kembaran yang juga dekat garisnya. Kerjakan dari dalam ke luar! 🪞',
    },
    tutorial: {
      title: { en: 'Tap the squares yourself', id: 'Ketuk sendiri kotaknya' },
      body: {
        en: 'This puzzle has no four frames to choose between — you draw the answer. Tap the squares you want filled in, then press Check. Tap a square again to clear it.',
        id: 'Teka-teki ini tidak punya empat bingkai pilihan — kamu yang menggambar jawabannya. Ketuk kotak yang ingin kamu isi, lalu tekan Cek. Ketuk lagi sebuah kotak untuk mengosongkannya.',
      },
    },
    xpReward: 32,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'The left half of this picture is finished. Tap the squares on the right half so it becomes a perfect mirror image.',
        id: 'Separuh kiri gambar ini sudah selesai. Ketuk kotak di separuh kanan supaya menjadi pantulan cermin yang sempurna.',
      },
      note: {
        en: 'The mirror line runs straight down the middle, between the 2nd and the 3rd column.',
        id: 'Garis cerminnya lurus di tengah, antara kolom ke-2 dan ke-3.',
      },
      cells: [
        ['🟪', '', '', ''],
        ['🟪', '🟪', '', ''],
        ['', '🟪', '', ''],
        ['🟪', '', '', ''],
      ],
      answer: ['0-3', '1-2', '1-3', '2-2', '3-3'],
    },
  },
  {
    id: 'spatial-12',
    worldId: 'spatial',
    number: 12,
    title: { en: 'Fill the Hole in the Wall', id: 'Tambal Lubang di Dinding' },
    mascotMessage: {
      en: 'Look at the SHAPE of the gap, not its place. Then find the piece with exactly that shape. 🧱',
      id: 'Lihat BENTUK lubangnya, bukan letaknya. Lalu cari potongan dengan bentuk yang persis sama. 🧱',
    },
    xpReward: 34,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The wall above has a gap in it. Which piece would fill that gap exactly, with nothing left over?',
        id: 'Dinding di atas punya lubang. Potongan mana yang akan menutup lubang itu dengan pas, tanpa sisa?',
      },
      figure: ['####', '##.#', '#..#', '####'],
      note: {
        en: 'In the wall above, the solid squares are bricks and the dotted squares are the gap. Each answer shows one loose piece.',
        id: 'Di dinding atas, kotak penuh adalah bata dan kotak putus-putus adalah lubangnya. Setiap jawaban menunjukkan satu potongan lepas.',
      },
      options: [
        { id: 'a', grid: ['.#..', '##..', '....', '....'], label: { en: 'Piece A', id: 'Potongan A' } },
        { id: 'b', grid: ['##..', '##..', '....', '....'], label: { en: 'Piece B', id: 'Potongan B' } },
        { id: 'c', grid: ['###.', '....', '....', '....'], label: { en: 'Piece C', id: 'Potongan C' } },
        { id: 'd', grid: ['#...', '##..', '....', '....'], label: { en: 'Piece D', id: 'Potongan D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-13',
    worldId: 'spatial',
    number: 13,
    title: { en: 'Which Way Now?', id: 'Menghadap Ke Mana Sekarang?' },
    mascotMessage: {
      en: 'Turn your body in your head. After every turn, your left and right point somewhere new! 🧭',
      id: 'Putar tubuhmu dalam bayangan. Setelah setiap putaran, kiri dan kananmu menunjuk ke arah baru! 🧭',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks three questions in a row. Each turn starts from where the last one left you facing, so keep your answers in mind.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan berturut-turut. Setiap putaran dimulai dari arah terakhir yang kamu hadapi, jadi ingat jawabanmu.',
      },
    },
    xpReward: 35,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You are standing on a map, facing north.',
        id: 'Kamu berdiri di sebuah peta, menghadap utara.',
      },
      visual: '🧭',
      steps: [
        {
          id: 'one',
          prompt: { en: 'You turn once to the right. Which way do you face?', id: 'Kamu berputar sekali ke kanan. Menghadap ke mana kamu?' },
          options: [
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
          ],
          answerId: 'east',
        },
        {
          id: 'two',
          prompt: { en: 'Now you turn right twice more. Which way now?', id: 'Sekarang kamu berputar ke kanan dua kali lagi. Menghadap ke mana?' },
          options: [
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
          ],
          answerId: 'west',
        },
        {
          id: 'three',
          prompt: {
            en: 'You walk 3 steps forwards, then turn LEFT. Which way are you facing?',
            id: 'Kamu berjalan 3 langkah ke depan, lalu berbelok KIRI. Menghadap ke mana kamu?',
          },
          options: [
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
          ],
          answerId: 'south',
        },
      ],
    },
  },
  {
    id: 'spatial-14',
    worldId: 'spatial',
    number: 14,
    title: { en: 'The Same After a Half Turn', id: 'Sama Setelah Setengah Putaran' },
    mascotMessage: {
      en: 'Turn each frame upside down in your head. Only one of them lands exactly on itself. 🔄',
      id: 'Putar setiap bingkai terbalik dalam bayanganmu. Hanya satu yang mendarat persis pada dirinya sendiri. 🔄',
    },
    xpReward: 36,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The plus shape above looks exactly the same after a half turn. Which of these frames also does?',
        id: 'Bentuk tambah di atas terlihat sama persis setelah setengah putaran. Bingkai mana yang juga begitu?',
      },
      figure: ['.#.', '###', '.#.'],
      note: {
        en: 'A half turn means turning the whole frame upside down.',
        id: 'Setengah putaran berarti membalik seluruh bingkai menjadi terbalik.',
      },
      options: [
        { id: 'a', grid: ['#..', '.#.', '..#'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['##.', '.#.', '...'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['#.#', '...', '.#.'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['..#', '.##', '...'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-15',
    worldId: 'spatial',
    number: 15,
    title: { en: 'From Her Side', id: 'Dari Sisinya' },
    mascotMessage: {
      en: 'When someone faces you, their left is on YOUR right. Turn yourself around in your head! 🙋',
      id: 'Ketika seseorang menghadapmu, kirinya ada di KANANmu. Putar dirimu dalam bayangan! 🙋',
    },
    xpReward: 36,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A friend stands facing you, close enough to touch. She raises the hand that is on YOUR left side. Which of her hands is it?',
        id: 'Seorang teman berdiri menghadapmu, cukup dekat untuk bersentuhan. Dia mengangkat tangan yang ada di sisi KIRImu. Tangan yang mana itu miliknya?',
      },
      options: [
        { id: 'right', emoji: '🤚', label: { en: 'Her right hand', id: 'Tangan kanannya' } },
        { id: 'left', emoji: '✋', label: { en: 'Her left hand', id: 'Tangan kirinya' } },
        { id: 'both', emoji: '🙌', label: { en: 'It could be either hand', id: 'Bisa tangan yang mana saja' } },
        { id: 'neither', emoji: '🙅', label: { en: 'Neither — she would face away first', id: 'Bukan keduanya — dia akan membelakangimu dulu' } },
      ],
      answerId: 'right',
    },
  },
  {
    id: 'spatial-16',
    worldId: 'spatial',
    number: 16,
    title: { en: 'Flip, Then Flip Again', id: 'Balik, Lalu Balik Lagi' },
    mascotMessage: {
      en: 'Do one flip in your head, then the other on the result. Two flips together do something surprising! 🔃',
      id: 'Lakukan satu balikan dalam bayanganmu, lalu yang kedua pada hasilnya. Dua balikan bersama menghasilkan sesuatu yang mengejutkan! 🔃',
    },
    xpReward: 37,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Flip the shape above top-to-bottom, and then flip that result left-to-right. Which frame is the answer?',
        id: 'Balik bentuk di atas dari atas ke bawah, lalu balik hasilnya dari kiri ke kanan. Bingkai mana jawabannya?',
      },
      figure: ['o#.', '.#.', '.##'],
      options: [
        { id: 'a', grid: ['##.', '.#.', '.#o'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['.#o', '.#.', '##.'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['.##', '.#.', 'o#.'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['..o', '###', '#..'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-17',
    worldId: 'spatial',
    number: 17,
    title: { en: 'Two East, One South', id: 'Dua ke Timur, Satu ke Selatan' },
    mascotMessage: {
      en: 'Find the palm tree first. Then count the squares across, and only after that count down. 🌴',
      id: 'Temukan pohon palem dulu. Lalu hitung kotak ke samping, dan baru setelah itu hitung ke bawah. 🌴',
    },
    xpReward: 38,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'The treasure is buried 2 squares EAST of the palm tree and then 1 square SOUTH. Tap the square where you should dig.',
        id: 'Harta karun terkubur 2 kotak ke TIMUR dari pohon palem lalu 1 kotak ke SELATAN. Ketuk kotak tempat kamu harus menggali.',
      },
      note: {
        en: 'On this map east is to the right and south is downwards. The shell and the statue are only landmarks.',
        id: 'Di peta ini timur ada di kanan dan selatan ada di bawah. Kerang dan patung hanyalah penanda.',
      },
      cells: [
        ['', '', '🐚', '', ''],
        ['', '🌴', '', '', ''],
        ['', '', '', '', ''],
        ['🗿', '', '', '', ''],
      ],
      answer: ['2-3'],
    },
  },
  {
    id: 'spatial-18',
    worldId: 'spatial',
    number: 18,
    title: { en: 'Folded Twice', id: 'Dilipat Dua Kali' },
    mascotMessage: {
      en: 'Every fold doubles the layers. One punch goes through every layer at once! 📄',
      id: 'Setiap lipatan menggandakan lapisannya. Satu lubang menembus semua lapisan sekaligus! 📄',
    },
    xpReward: 39,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You have one square sheet of paper, lying flat.',
        id: 'Kamu punya selembar kertas persegi, terhampar rata.',
      },
      visual: '📄',
      steps: [
        {
          id: 'fold1',
          prompt: { en: 'You fold it exactly in half. How many layers are there now?', id: 'Kamu melipatnya tepat menjadi dua. Ada berapa lapisan sekarang?' },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 layers', id: '2 lapisan' } },
            { id: 'one', emoji: '1️⃣', label: { en: 'Still 1 layer', id: 'Tetap 1 lapisan' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 layers', id: '4 lapisan' } },
            { id: 'half', emoji: '➗', label: { en: 'Half a layer', id: 'Setengah lapisan' } },
          ],
          answerId: 'two',
        },
        {
          id: 'fold2',
          prompt: { en: 'You fold it in half again. How many layers now?', id: 'Kamu melipatnya menjadi dua lagi. Ada berapa lapisan sekarang?' },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 layers', id: '4 lapisan' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 layers', id: '3 lapisan' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 layers', id: '8 lapisan' } },
            { id: 'two', emoji: '2️⃣', label: { en: 'Still 2 layers', id: 'Tetap 2 lapisan' } },
          ],
          answerId: 'four',
        },
        {
          id: 'punch',
          prompt: {
            en: 'You punch ONE hole straight through and unfold the paper. How many holes are in it?',
            id: 'Kamu melubangi SATU kali menembus semuanya lalu membuka lipatannya. Ada berapa lubang di kertasnya?',
          },
          options: [
            { id: 'four', emoji: '🕳️', label: { en: '4 holes', id: '4 lubang' } },
            { id: 'one', emoji: '🕳️', label: { en: '1 hole', id: '1 lubang' } },
            { id: 'two', emoji: '🕳️', label: { en: '2 holes', id: '2 lubang' } },
            { id: 'eight', emoji: '🕳️', label: { en: '8 holes', id: '8 lubang' } },
          ],
          answerId: 'four',
        },
      ],
    },
  },
  {
    id: 'spatial-19',
    worldId: 'spatial',
    number: 19,
    title: { en: 'Folds Into a Cube', id: 'Terlipat Menjadi Kubus' },
    mascotMessage: {
      en: 'Fold each flat shape up in your head. Watch out for two squares that would land on the same face! 📦',
      id: 'Lipat setiap bentuk datar dalam bayanganmu. Awas dua kotak yang akan mendarat di sisi yang sama! 📦',
    },
    xpReward: 40,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The flat shape above folds up into a perfect cube. Which of these frames ALSO folds into a cube?',
        id: 'Bentuk datar di atas terlipat menjadi kubus sempurna. Bingkai mana yang JUGA terlipat menjadi kubus?',
      },
      figure: ['.#.', '###', '.#.', '.#.'],
      note: {
        en: 'Each solid square is one face of the cube. A cube needs 6 faces, and no two of them may end up in the same place.',
        id: 'Setiap kotak penuh adalah satu sisi kubus. Kubus butuh 6 sisi, dan tidak boleh ada dua yang berakhir di tempat yang sama.',
      },
      options: [
        { id: 'a', grid: ['###', '.#.', '.#.', '.#.'], label: { en: 'Net A', id: 'Jaring A' } },
        { id: 'b', grid: ['###', '###', '...', '...'], label: { en: 'Net B', id: 'Jaring B' } },
        { id: 'c', grid: ['#..', '#..', '#..', '###'], label: { en: 'Net C', id: 'Jaring C' } },
        { id: 'd', grid: ['.##', '.##', '.#.', '.#.'], label: { en: 'Net D', id: 'Jaring D' } },
      ],
      answerId: 'a',
    },
  },
]
