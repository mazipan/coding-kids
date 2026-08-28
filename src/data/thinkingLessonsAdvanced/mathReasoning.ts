import type { ThinkingLesson } from '../../types'

export const mathReasoningLessonsAdvanced: ThinkingLesson[] = [
  // ── Math Reasoning · tier two ────────────────────────────────
  // Tier one: one clue, one calculation. Tier two: work backwards, compare two ways of
  // arranging the same amount, rates, part-whole with a unit, and problems whose answer
  // is not the number you just worked out.
  {
    id: 'math_reasoning-10',
    worldId: 'math_reasoning',
    number: 10,
    title: { en: 'The Fair Share', id: 'Bagian yang Adil' },
    mascotMessage: {
      en: 'Share once, then share again. Keep track of who has what! 🍪',
      id: 'Bagi sekali, lalu bagi lagi. Catat siapa punya berapa! 🍪',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Real problems often hide two or three smaller problems inside them. This puzzle asks them one at a time, and keeps your answers on screen.',
        id: 'Soal nyata sering menyembunyikan dua atau tiga soal kecil di dalamnya. Teka-teki ini menanyakannya satu per satu, dan menyimpan jawabanmu di layar.',
      },
      example: {
        en: 'One wrong link and the whole chain restarts, so check each answer before you tap.',
        id: 'Satu mata rantai salah dan seluruh rantainya diulang, jadi periksa setiap jawaban sebelum mengetuk.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: '18 cookies are shared equally between 3 friends.',
        id: '18 kue dibagi rata untuk 3 teman.',
      },
      visual: '🍪🍪🍪',
      steps: [
        {
          id: 'each',
          prompt: { en: 'How many cookies does each friend get?', id: 'Berapa kue yang didapat setiap teman?' },
          options: [
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies', id: '6 kue' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 cookies', id: '5 kue' } },
            { id: 'nine', emoji: '9️⃣', label: { en: '9 cookies', id: '9 kue' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 cookies', id: '3 kue' } },
          ],
          answerId: 'six',
        },
        {
          id: 'gives',
          prompt: {
            en: 'One friend gives 2 of hers away. How many does SHE have now?',
            id: 'Satu teman memberikan 2 kuenya. Berapa yang DIA punya sekarang?',
          },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 cookies', id: '4 kue' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies', id: '6 kue' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 cookies', id: '8 kue' } },
            { id: 'two', emoji: '2️⃣', label: { en: '2 cookies', id: '2 kue' } },
          ],
          answerId: 'four',
        },
        {
          id: 'others',
          prompt: {
            en: 'She shared those 2 cookies equally with the other two friends. How many does each of THEM have now?',
            id: 'Dua kue itu dia bagikan rata ke dua teman lainnya. Berapa yang MEREKA punya masing-masing sekarang?',
          },
          options: [
            { id: 'seven', emoji: '7️⃣', label: { en: '7 cookies each', id: '7 kue masing-masing' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies each', id: '6 kue masing-masing' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 cookies each', id: '8 kue masing-masing' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 cookies each', id: '4 kue masing-masing' } },
          ],
          answerId: 'seven',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-11',
    worldId: 'math_reasoning',
    number: 11,
    title: { en: 'Rewind the Spending', id: 'Putar Balik Belanjanya' },
    mascotMessage: {
      en: 'Begin at the end. Undo the juice first, then undo the half. 🧃',
      id: 'Mulai dari akhir. Batalkan jusnya dulu, lalu batalkan yang setengah. 🧃',
    },
    xpReward: 30,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Rina spent half her coins on a book, then 3 more coins on juice. She has 7 coins left. How many coins did she start with?',
        id: 'Rina menghabiskan setengah koinnya untuk buku, lalu 3 koin lagi untuk jus. Sisanya 7 koin. Berapa koin yang dia punya di awal?',
      },
      answer: '20',
      inputType: 'numeric',
    },
  },
  {
    id: 'math_reasoning-12',
    worldId: 'math_reasoning',
    number: 12,
    title: { en: 'Which Box Wins?', id: 'Kotak Mana yang Menang?' },
    mascotMessage: {
      en: 'Count both boxes fully before you compare. The question asks for the DIFFERENCE, not the total! ✏️',
      id: 'Hitung kedua kotak sampai selesai sebelum membandingkan. Yang ditanya SELISIHNYA, bukan totalnya! ✏️',
    },
    xpReward: 32,
    puzzle: {
      type: 'math',
      question: {
        en: 'Box A has 4 rows of 6 pencils. Box B has 5 rows of 5 pencils. How many MORE pencils are in the bigger box?',
        id: 'Kotak A punya 4 baris berisi 6 pensil. Kotak B punya 5 baris berisi 5 pensil. Berapa pensil LEBIH BANYAK di kotak yang lebih besar?',
      },
      options: ['1', '2', '3', '49'],
      answer: '1',
    },
  },
  {
    id: 'math_reasoning-13',
    worldId: 'math_reasoning',
    number: 13,
    title: { en: 'Nearly Ten Each', id: 'Hampir Sepuluh Masing-masing' },
    mascotMessage: {
      en: 'If every price is UNDER 10, what is the most the four of them could possibly cost? 🧮',
      id: 'Kalau setiap harga DI BAWAH 10, berapa paling banyak keempatnya bisa berharga? 🧮',
    },
    xpReward: 33,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'You buy 4 things and each one costs a little UNDER 10 coins. So you will definitely need more than 40 coins.',
        id: 'Kamu membeli 4 barang dan masing-masing harganya sedikit DI BAWAH 10 koin. Jadi kamu pasti butuh lebih dari 40 koin.',
      },
      answer: false,
    },
  },
  {
    id: 'math_reasoning-14',
    worldId: 'math_reasoning',
    number: 14,
    title: { en: 'How Long for Ten?', id: 'Berapa Lama untuk Sepuluh?' },
    mascotMessage: {
      en: 'Find the time for ONE bucket first. That single number unlocks the rest. 🪣',
      id: 'Cari dulu waktu untuk SATU ember. Angka tunggal itu membuka sisanya. 🪣',
    },
    xpReward: 34,
    puzzle: {
      type: 'math',
      question: {
        en: 'A tap fills 3 buckets in 6 minutes. How many minutes does it take to fill 10 buckets?',
        id: 'Sebuah keran mengisi 3 ember dalam 6 menit. Berapa menit untuk mengisi 10 ember?',
      },
      options: ['20', '30', '18', '60'],
      answer: '20',
    },
  },
  {
    id: 'math_reasoning-15',
    worldId: 'math_reasoning',
    number: 15,
    title: { en: 'The Almost-Full Shelf', id: 'Rak yang Hampir Penuh' },
    mascotMessage: {
      en: 'Dividing gives you a whole number and a remainder — and BOTH of them are part of the answer. 📚',
      id: 'Pembagian memberimu bilangan bulat dan sisa — dan KEDUANYA bagian dari jawabannya. 📚',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A shelf holds exactly 12 books. The library has 50 books to put away.',
        id: 'Satu rak memuat tepat 12 buku. Perpustakaan punya 50 buku untuk disusun.',
      },
      visual: '📚',
      steps: [
        {
          id: 'shelves',
          prompt: {
            en: 'How many shelves are needed so that every book has a place?',
            id: 'Berapa rak yang dibutuhkan agar setiap buku dapat tempat?',
          },
          options: [
            { id: 'five', emoji: '5️⃣', label: { en: '5 shelves', id: '5 rak' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 shelves', id: '4 rak' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 shelves', id: '6 rak' } },
            { id: 'twelve', emoji: '🔢', label: { en: '12 shelves', id: '12 rak' } },
          ],
          answerId: 'five',
        },
        {
          id: 'last',
          prompt: { en: 'How many books end up on the LAST shelf?', id: 'Berapa buku yang berakhir di rak TERAKHIR?' },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 books', id: '2 buku' } },
            { id: 'twelve', emoji: '🔢', label: { en: '12 books', id: '12 buku' } },
            { id: 'ten', emoji: '🔟', label: { en: '10 books', id: '10 buku' } },
            { id: 'none', emoji: '0️⃣', label: { en: 'None at all', id: 'Tidak ada sama sekali' } },
          ],
          answerId: 'two',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-16',
    worldId: 'math_reasoning',
    number: 16,
    title: { en: 'Three Out of Every Five', id: 'Tiga dari Setiap Lima' },
    mascotMessage: {
      en: 'Split the class into groups of 5 first. Then count 3 from each group. 🚶',
      id: 'Bagi dulu kelasnya menjadi kelompok berisi 5. Lalu hitung 3 dari setiap kelompok. 🚶',
    },
    xpReward: 36,
    puzzle: {
      type: 'fill-in',
      question: {
        en: '3 out of every 5 children in a class walk to school. There are 30 children in the class. How many walk to school?',
        id: '3 dari setiap 5 anak di sebuah kelas berjalan kaki ke sekolah. Ada 30 anak di kelas itu. Berapa yang berjalan kaki?',
      },
      answer: '18',
      inputType: 'numeric',
    },
  },
  {
    id: 'math_reasoning-17',
    worldId: 'math_reasoning',
    number: 17,
    title: { en: 'Two Pens and a Book', id: 'Dua Pena dan Sebuah Buku' },
    mascotMessage: {
      en: 'You know the total and you know one part. Take the parts you know away from the total! 📓',
      id: 'Kamu tahu totalnya dan tahu satu bagiannya. Kurangkan bagian yang kamu tahu dari totalnya! 📓',
    },
    xpReward: 37,
    puzzle: {
      type: 'math',
      question: {
        en: 'Two pens and one book together cost 17 coins. One pen costs 4 coins. How much is the book?',
        id: 'Dua pena dan satu buku bersama-sama berharga 17 koin. Satu pena berharga 4 koin. Berapa harga bukunya?',
      },
      options: ['9', '13', '8', '17'],
      answer: '9',
    },
  },
  {
    id: 'math_reasoning-18',
    worldId: 'math_reasoning',
    number: 18,
    title: { en: 'Posts Around the Garden', id: 'Tiang Keliling Kebun' },
    mascotMessage: {
      en: 'Careful — the number of posts is not always the same as the number of gaps! 🪵',
      id: 'Hati-hati — jumlah tiang tidak selalu sama dengan jumlah celah! 🪵',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A square garden has sides of 7 metres, and you want a fence all the way round it.',
        id: 'Sebuah kebun berbentuk persegi punya sisi 7 meter, dan kamu ingin memagarinya sekeliling.',
      },
      visual: '🟩',
      steps: [
        {
          id: 'perimeter',
          prompt: {
            en: 'What is the distance all the way round the garden?',
            id: 'Berapa jarak sekeliling kebun itu?',
          },
          options: [
            { id: 'twentyeight', emoji: '📏', label: { en: '28 metres', id: '28 meter' } },
            { id: 'fortynine', emoji: '📏', label: { en: '49 metres', id: '49 meter' } },
            { id: 'fourteen', emoji: '📏', label: { en: '14 metres', id: '14 meter' } },
            { id: 'twentyone', emoji: '📏', label: { en: '21 metres', id: '21 meter' } },
          ],
          answerId: 'twentyeight',
        },
        {
          id: 'corners',
          prompt: {
            en: 'You put a post every 7 metres, with one at each corner. How many posts?',
            id: 'Kamu memasang tiang setiap 7 meter, satu di setiap sudut. Berapa tiangnya?',
          },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 posts', id: '4 tiang' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 posts', id: '5 tiang' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 posts', id: '8 tiang' } },
            { id: 'seven', emoji: '7️⃣', label: { en: '7 posts', id: '7 tiang' } },
          ],
          answerId: 'four',
        },
        {
          id: 'metre',
          prompt: {
            en: 'Now you use a post every 1 metre instead. How many posts do you need?',
            id: 'Sekarang kamu memasang tiang setiap 1 meter. Berapa tiang yang kamu butuhkan?',
          },
          options: [
            { id: 'twentyeight', emoji: '🪵', label: { en: '28 posts', id: '28 tiang' } },
            { id: 'twentynine', emoji: '🪵', label: { en: '29 posts', id: '29 tiang' } },
            { id: 'twentyfour', emoji: '🪵', label: { en: '24 posts', id: '24 tiang' } },
            { id: 'thirtytwo', emoji: '🪵', label: { en: '32 posts', id: '32 tiang' } },
          ],
          answerId: 'twentyeight',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-19',
    worldId: 'math_reasoning',
    number: 19,
    title: { en: 'Three Times as Old', id: 'Tiga Kali Lebih Tua' },
    mascotMessage: {
      en: 'Think of their ages as 4 equal parts: her brother is 1 part, Ayu is 3. 🎂',
      id: 'Bayangkan umur mereka sebagai 4 bagian sama: adiknya 1 bagian, Ayu 3 bagian. 🎂',
    },
    xpReward: 40,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Ayu is 3 times as old as her brother. Their two ages add up to 16. How old is Ayu?',
        id: 'Ayu berumur 3 kali lipat adiknya. Jumlah umur mereka berdua 16. Berapa umur Ayu?',
      },
      answer: '12',
      inputType: 'numeric',
    },
  },
]
