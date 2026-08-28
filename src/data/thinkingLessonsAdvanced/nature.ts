import type { ThinkingLesson } from '../../types'

export const natureLessonsAdvanced: ThinkingLesson[] = [
  // ── Nature Quest · tier two ──────────────────────────────────
  // Tier one: single cause and effect. Tier two: whole systems — food chains, cycles,
  // adaptation, decomposers, and how a fair experiment is actually set up.
  {
    id: 'nature-10',
    worldId: 'nature',
    number: 10,
    title: { en: 'The Food Chain', id: 'Rantai Makanan' },
    mascotMessage: {
      en: 'Pull one link out of a food chain and everything above and below it feels it. 🌿',
      id: 'Cabut satu mata rantai makanan dan semua yang di atas dan di bawahnya ikut terasa. 🌿',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you three questions in a row about the same chain. Each answer you give sets up the next question.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan berturut-turut tentang rantai yang sama. Setiap jawabanmu menyiapkan pertanyaan berikutnya.',
      },
      example: {
        en: 'One wrong link and the chain restarts from step 1 — think each step through first.',
        id: 'Satu mata rantai salah dan rantainya diulang dari langkah 1 — pikirkan dulu setiap langkahnya.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'In a meadow the grass is eaten by rabbits, and the rabbits are hunted by foxes.',
        id: 'Di sebuah padang rumput, rumput dimakan kelinci, dan kelinci diburu rubah.',
      },
      visual: '🌿🐇🦊',
      steps: [
        {
          id: 'eats',
          prompt: { en: 'Where does the fox get its energy from?', id: 'Dari mana rubah mendapat energinya?' },
          options: [
            { id: 'rabbit', emoji: '🐇', label: { en: 'From eating the rabbits', id: 'Dari memakan kelinci' } },
            { id: 'grass', emoji: '🌿', label: { en: 'From eating the grass', id: 'Dari memakan rumput' } },
            { id: 'sun', emoji: '☀️', label: { en: 'Straight from the sunlight', id: 'Langsung dari sinar matahari' } },
            { id: 'soil', emoji: '🟫', label: { en: 'From the soil', id: 'Dari tanah' } },
          ],
          answerId: 'rabbit',
        },
        {
          id: 'foxesleave',
          prompt: {
            en: 'Every fox leaves the meadow. What happens to the rabbits FIRST?',
            id: 'Semua rubah meninggalkan padang rumput. Apa yang PERTAMA terjadi pada kelinci?',
          },
          options: [
            { id: 'more', emoji: '📈', label: { en: 'There are more and more rabbits', id: 'Kelincinya makin banyak' } },
            { id: 'fewer', emoji: '📉', label: { en: 'There are fewer rabbits', id: 'Kelincinya makin sedikit' } },
            { id: 'same', emoji: '➖', label: { en: 'Nothing changes at all', id: 'Tidak ada yang berubah' } },
            { id: 'grass', emoji: '🌿', label: { en: 'They start eating foxes', id: 'Mereka mulai memakan rubah' } },
          ],
          answerId: 'more',
        },
        {
          id: 'grassafter',
          prompt: { en: 'And then what happens to the grass?', id: 'Lalu apa yang terjadi pada rumputnya?' },
          options: [
            { id: 'less', emoji: '🍂', label: { en: 'Much less grass is left', id: 'Rumput yang tersisa jauh lebih sedikit' } },
            { id: 'more', emoji: '🌱', label: { en: 'The grass grows thicker', id: 'Rumputnya tumbuh makin lebat' } },
            { id: 'same', emoji: '➖', label: { en: 'The grass is not affected', id: 'Rumputnya tidak terpengaruh' } },
            { id: 'color', emoji: '🎨', label: { en: 'The grass changes colour', id: 'Rumputnya berubah warna' } },
          ],
          answerId: 'less',
        },
      ],
    },
  },
  {
    id: 'nature-11',
    worldId: 'nature',
    number: 11,
    title: { en: 'Not a Plant', id: 'Bukan Tumbuhan' },
    mascotMessage: {
      en: 'Plants make their own food from sunlight. Ask yourself whether this one can do that! 🍄',
      id: 'Tumbuhan membuat makanannya sendiri dari sinar matahari. Tanyakan apakah yang ini bisa melakukannya! 🍄',
    },
    xpReward: 28,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Mushrooms are plants, because they grow out of the ground and do not move about.',
        id: 'Jamur adalah tumbuhan, karena tumbuh dari tanah dan tidak berpindah-pindah.',
      },
      answer: false,
    },
  },
  {
    id: 'nature-12',
    worldId: 'nature',
    number: 12,
    title: { en: 'The Water Cycle', id: 'Siklus Air' },
    mascotMessage: {
      en: 'Water goes round and round forever. Start where the sun touches the sea. 💧',
      id: 'Air berputar terus selamanya. Mulailah dari tempat matahari menyentuh laut. 💧',
    },
    xpReward: 30,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'heat', emoji: '☀️', label: { en: 'The sun warms the sea', id: 'Matahari menghangatkan laut' } },
        { id: 'rise', emoji: '💨', label: { en: 'Water rises as invisible vapour', id: 'Air naik sebagai uap tak terlihat' } },
        { id: 'cloud', emoji: '☁️', label: { en: 'The vapour cools into clouds', id: 'Uap mendingin menjadi awan' } },
        { id: 'rain', emoji: '🌧️', label: { en: 'Rain falls from the clouds', id: 'Hujan turun dari awan' } },
        { id: 'river', emoji: '🏞️', label: { en: 'Rivers carry the water back to the sea', id: 'Sungai membawa air kembali ke laut' } },
      ],
    },
  },
  {
    id: 'nature-13',
    worldId: 'nature',
    number: 13,
    title: { en: 'Built for the Desert', id: 'Dibuat untuk Gurun' },
    mascotMessage: {
      en: 'In a desert, water is the treasure. Which body part would help a plant KEEP water? 🌵',
      id: 'Di gurun, air adalah harta. Bagian tubuh mana yang membantu tanaman MENYIMPAN air? 🌵',
    },
    xpReward: 32,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'IF a plant must survive months with almost no rain, which feature helps it most?',
        id: 'JIKA sebuah tanaman harus bertahan berbulan-bulan hampir tanpa hujan, ciri mana yang paling membantunya?',
      },
      options: [
        { id: 'thick', emoji: '🌵', label: { en: 'A thick stem that stores water inside', id: 'Batang tebal yang menyimpan air di dalamnya' } },
        { id: 'leaves', emoji: '🍃', label: { en: 'Very large soft leaves', id: 'Daun besar yang lembut' } },
        { id: 'shallow', emoji: '🌱', label: { en: 'Roots that stay right at the surface', id: 'Akar yang hanya di permukaan' } },
        { id: 'petals', emoji: '🌸', label: { en: 'Bright thin petals all year round', id: 'Kelopak tipis cerah sepanjang tahun' } },
      ],
      answerId: 'thick',
    },
  },
  {
    id: 'nature-14',
    worldId: 'nature',
    number: 14,
    title: { en: 'Who Clears the Forest Floor?', id: 'Siapa Membersihkan Lantai Hutan?' },
    mascotMessage: {
      en: 'Something has to break dead leaves down, or the forest would be buried. Tap every living helper. 🍂',
      id: 'Ada yang harus mengurai daun mati, kalau tidak hutan akan tertimbun. Ketuk setiap penolong yang hidup. 🍂',
    },
    xpReward: 33,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap everything that helps a dead leaf rot away.',
        id: 'Ketuk semua yang membantu daun mati membusuk.',
      },
      items: [
        { id: 'fungus', emoji: '🍄', label: { en: 'Fungus', id: 'Jamur' } },
        { id: 'worm', emoji: '🪱', label: { en: 'Earthworm', id: 'Cacing tanah' } },
        { id: 'bacteria', emoji: '🦠', label: { en: 'Bacteria', id: 'Bakteri' } },
        { id: 'rock', emoji: '🪨', label: { en: 'A rock', id: 'Batu' } },
      ],
      correctIds: ['fungus', 'worm', 'bacteria'],
    },
  },
  {
    id: 'nature-15',
    worldId: 'nature',
    number: 15,
    title: { en: 'Leaves All Year', id: 'Daun Sepanjang Tahun' },
    mascotMessage: {
      en: 'Cold is one reason leaves drop — but is it the ONLY reason anywhere in the world? 🌴',
      id: 'Dingin adalah satu alasan daun gugur — tapi apakah itu SATU-SATUNYA alasan di seluruh dunia? 🌴',
    },
    xpReward: 34,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Trees drop their leaves only because it gets cold, so in a warm rainforest no tree ever loses a leaf.',
        id: 'Pohon menggugurkan daunnya hanya karena udara menjadi dingin, jadi di hutan hujan yang hangat tidak ada pohon yang pernah kehilangan daun.',
      },
      answer: false,
    },
  },
  {
    id: 'nature-16',
    worldId: 'nature',
    number: 16,
    title: { en: 'A Fair Test', id: 'Uji yang Adil' },
    mascotMessage: {
      en: 'A fair test changes ONE thing and keeps everything else the same. Otherwise you never know what did it! 🔬',
      id: 'Uji yang adil mengubah SATU hal dan menjaga sisanya tetap sama. Kalau tidak, kamu tidak akan pernah tahu penyebabnya! 🔬',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Nia wants to find out whether plants really need light. She has two pots of the same seedling.',
        id: 'Nia ingin tahu apakah tanaman benar-benar butuh cahaya. Dia punya dua pot berisi bibit yang sama.',
      },
      visual: '🪴🪴',
      steps: [
        {
          id: 'different',
          prompt: {
            en: 'What must be DIFFERENT between the two pots?',
            id: 'Apa yang harus BERBEDA antara kedua pot itu?',
          },
          options: [
            { id: 'light', emoji: '💡', label: { en: 'Only how much light each one gets', id: 'Hanya seberapa banyak cahaya yang diterima masing-masing' } },
            { id: 'water', emoji: '💧', label: { en: 'How much water each one gets', id: 'Seberapa banyak air yang diterima masing-masing' } },
            { id: 'soil', emoji: '🟫', label: { en: 'The kind of soil in each pot', id: 'Jenis tanah di setiap pot' } },
            { id: 'plant', emoji: '🌱', label: { en: 'The kind of plant in each pot', id: 'Jenis tanaman di setiap pot' } },
          ],
          answerId: 'light',
        },
        {
          id: 'same',
          prompt: { en: 'And what must be kept the SAME?', id: 'Dan apa yang harus dijaga tetap SAMA?' },
          options: [
            { id: 'everything', emoji: '⚖️', label: { en: 'Water, soil and pot size — everything else', id: 'Air, tanah, dan ukuran pot — semua yang lain' } },
            { id: 'nothing', emoji: '🎲', label: { en: 'Nothing needs to match', id: 'Tidak ada yang perlu sama' } },
            { id: 'light', emoji: '💡', label: { en: 'The amount of light', id: 'Jumlah cahayanya' } },
            { id: 'time', emoji: '⏱️', label: { en: 'Only the time of day she looks at them', id: 'Hanya jam berapa dia melihatnya' } },
          ],
          answerId: 'everything',
        },
        {
          id: 'conclude',
          prompt: {
            en: 'The dark pot turned yellow and the bright pot stayed green. What has she shown?',
            id: 'Pot yang gelap menguning dan pot yang terang tetap hijau. Apa yang sudah dia buktikan?',
          },
          options: [
            { id: 'needlight', emoji: '🌞', label: { en: 'These plants need light to stay green', id: 'Tanaman ini butuh cahaya untuk tetap hijau' } },
            { id: 'needwater', emoji: '💧', label: { en: 'These plants need more water', id: 'Tanaman ini butuh lebih banyak air' } },
            { id: 'nothing', emoji: '🤷', label: { en: 'Nothing — the test was unfair', id: 'Tidak ada — ujinya tidak adil' } },
            { id: 'yellow', emoji: '🟡', label: { en: 'Yellow plants grow faster', id: 'Tanaman kuning tumbuh lebih cepat' } },
          ],
          answerId: 'needlight',
        },
      ],
    },
  },
  {
    id: 'nature-17',
    worldId: 'nature',
    number: 17,
    title: { en: 'Built for the Job', id: 'Diciptakan untuk Tugasnya' },
    mascotMessage: {
      en: 'Every animal here carries a tool for the place it lives. Match the tool to the animal! 🐫',
      id: 'Setiap hewan di sini membawa alat untuk tempat tinggalnya. Cocokkan alat dengan hewannya! 🐫',
    },
    xpReward: 36,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'camel',
          leftEmoji: '🐫',
          leftLabel: { en: 'Camel', id: 'Unta' },
          rightId: 'hump',
          rightEmoji: '🏜️',
          rightLabel: { en: 'Stores fat for long journeys without food', id: 'Menyimpan lemak untuk perjalanan panjang tanpa makanan' },
        },
        {
          leftId: 'penguin',
          leftEmoji: '🐧',
          leftLabel: { en: 'Penguin', id: 'Penguin' },
          rightId: 'blubber',
          rightEmoji: '🧊',
          rightLabel: { en: 'A thick fat layer for swimming in icy water', id: 'Lapisan lemak tebal untuk berenang di air es' },
        },
        {
          leftId: 'bat',
          leftEmoji: '🦇',
          leftLabel: { en: 'Bat', id: 'Kelelawar' },
          rightId: 'sound',
          rightEmoji: '🔊',
          rightLabel: { en: 'Finds food using sound in total darkness', id: 'Menemukan makanan dengan suara dalam gelap total' },
        },
        {
          leftId: 'chameleon',
          leftEmoji: '🦎',
          leftLabel: { en: 'Chameleon', id: 'Bunglon' },
          rightId: 'colour',
          rightEmoji: '🎨',
          rightLabel: { en: 'Changes colour to hide against branches', id: 'Berubah warna untuk bersembunyi di antara ranting' },
        },
      ],
    },
  },
  {
    id: 'nature-18',
    worldId: 'nature',
    number: 18,
    title: { en: 'The Bare Hillside', id: 'Lereng yang Gundul' },
    mascotMessage: {
      en: 'Tree roots hold the soil together like a net. Take the net away, then add heavy rain... ⛰️',
      id: 'Akar pohon menahan tanah seperti jaring. Hilangkan jaringnya, lalu tambahkan hujan deras... ⛰️',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'IF every tree on a steep hill is cut down and then heavy rain falls, what is most likely to happen?',
        id: 'JIKA semua pohon di lereng curam ditebang lalu turun hujan deras, apa yang paling mungkin terjadi?',
      },
      options: [
        { id: 'slide', emoji: '⛰️', label: { en: 'The soil slides down the hillside', id: 'Tanahnya longsor menuruni lereng' } },
        { id: 'taller', emoji: '📏', label: { en: 'The hill grows taller', id: 'Bukitnya menjadi lebih tinggi' } },
        { id: 'stops', emoji: '🌤️', label: { en: 'The rain stops early', id: 'Hujannya berhenti lebih awal' } },
        { id: 'richer', emoji: '🌾', label: { en: 'The soil becomes much richer', id: 'Tanahnya menjadi jauh lebih subur' } },
      ],
      answerId: 'slide',
    },
  },
  {
    id: 'nature-19',
    worldId: 'nature',
    number: 19,
    title: { en: 'One Pond, One System', id: 'Satu Kolam, Satu Sistem' },
    mascotMessage: {
      en: 'Nothing in a pond lives on its own. Everything is joined to everything else. 🪷',
      id: 'Tidak ada yang hidup sendirian di kolam. Semuanya terhubung satu sama lain. 🪷',
    },
    xpReward: 40,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A pond, its fish, its plants, its insects and even its mud all work together as one system — so if every plant died, the fish would be in danger too.',
        id: 'Kolam, ikannya, tumbuhannya, seranggannya, bahkan lumpurnya bekerja bersama sebagai satu sistem — jadi kalau semua tumbuhannya mati, ikannya juga terancam.',
      },
      answer: true,
    },
  },
]
