import type { ThinkingLesson } from '../../types'

export const spatialLessons: ThinkingLesson[] = [
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
