import type { ThinkingLesson } from '../../types'

export const deductionLessonsAdvanced: ThinkingLesson[] = [
  // ── Logic Detective · tier two ───────────────────────────────
  // Tier one: single valid conclusions. Tier two: elimination across several clues,
  // negative clues, a three-by-three grid puzzle, the pigeonhole idea, and telling a
  // valid conclusion apart from one that only sounds valid.
  {
    id: 'deduction-10',
    worldId: 'deduction',
    number: 10,
    title: { en: 'Who Ate the Cake?', id: 'Siapa Memakan Kuenya?' },
    mascotMessage: {
      en: 'A detective does not look for who DID it. She rules out everyone who could NOT have. 🕵️',
      id: 'Detektif tidak mencari siapa PELAKUNYA. Dia mencoret semua yang TIDAK MUNGKIN melakukannya. 🕵️',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'A deduction is a chain: each clue narrows things down for the next one. This puzzle asks you one clue at a time and keeps your answers on screen.',
        id: 'Deduksi adalah rantai: setiap petunjuk mempersempit untuk petunjuk berikutnya. Teka-teki ini menanyakan satu petunjuk sekaligus dan menyimpan jawabanmu di layar.',
      },
      example: {
        en: 'Break one link and the whole chain starts again from clue 1.',
        id: 'Patahkan satu mata rantai dan seluruh rantainya diulang dari petunjuk 1.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Three people were in the kitchen: Ana, Budi and Cici. Ana and Cici were wearing hats; Budi was not. Ana is taller than Cici, and Cici is taller than Budi.',
        id: 'Tiga orang ada di dapur: Ana, Budi, dan Cici. Ana dan Cici memakai topi; Budi tidak. Ana lebih tinggi dari Cici, dan Cici lebih tinggi dari Budi.',
      },
      visual: '🍰',
      steps: [
        {
          id: 'hat',
          prompt: {
            en: 'Clue 1: the person who ate the cake was wearing a hat. Who can you rule OUT?',
            id: 'Petunjuk 1: orang yang memakan kue itu memakai topi. Siapa yang bisa kamu CORET?',
          },
          options: [
            { id: 'budi', emoji: '🧑', label: { en: 'Budi', id: 'Budi' } },
            { id: 'ana', emoji: '👩', label: { en: 'Ana', id: 'Ana' } },
            { id: 'cici', emoji: '👧', label: { en: 'Cici', id: 'Cici' } },
            { id: 'none', emoji: '🚫', label: { en: 'Nobody yet', id: 'Belum ada' } },
          ],
          answerId: 'budi',
        },
        {
          id: 'taller',
          prompt: {
            en: 'Clue 2: the person is taller than Cici. Who is left?',
            id: 'Petunjuk 2: orangnya lebih tinggi dari Cici. Siapa yang tersisa?',
          },
          options: [
            { id: 'ana', emoji: '👩', label: { en: 'Ana', id: 'Ana' } },
            { id: 'cici', emoji: '👧', label: { en: 'Cici', id: 'Cici' } },
            { id: 'budi', emoji: '🧑', label: { en: 'Budi', id: 'Budi' } },
            { id: 'twoleft', emoji: '👥', label: { en: 'Two people are still possible', id: 'Masih ada dua orang yang mungkin' } },
          ],
          answerId: 'ana',
        },
        {
          id: 'sure',
          prompt: {
            en: 'How sure can you be?',
            id: 'Seberapa yakin kamu bisa merasa?',
          },
          options: [
            { id: 'certain', emoji: '✅', label: { en: 'Certain — only one person fits every clue', id: 'Pasti — hanya satu orang yang cocok dengan semua petunjuk' } },
            { id: 'likely', emoji: '🤔', label: { en: 'Only likely — someone else might still fit', id: 'Hanya mungkin — orang lain bisa saja masih cocok' } },
            { id: 'guess', emoji: '🎲', label: { en: 'It is a pure guess', id: 'Itu tebakan murni' } },
            { id: 'none', emoji: '🚫', label: { en: 'The clues contradict each other', id: 'Petunjuknya saling bertentangan' } },
          ],
          answerId: 'certain',
        },
      ],
    },
  },
  {
    id: 'deduction-11',
    worldId: 'deduction',
    number: 11,
    title: { en: 'Three Clues, One Number', id: 'Tiga Petunjuk, Satu Angka' },
    mascotMessage: {
      en: 'A number has to pass ALL three clues. Test each one against every clue in turn. 🔢',
      id: 'Sebuah angka harus lolos KETIGA petunjuk. Uji masing-masing terhadap setiap petunjuk. 🔢',
    },
    xpReward: 32,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'The secret number is even, AND less than 20, AND a multiple of 3. Tap every number that could still be it.',
        id: 'Angka rahasianya genap, DAN kurang dari 20, DAN kelipatan 3. Ketuk setiap angka yang masih mungkin.',
      },
      items: [
        { id: 'six', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'fifteen', emoji: '🔢', label: { en: '15', id: '15' } },
        { id: 'eighteen', emoji: '🔢', label: { en: '18', id: '18' } },
        { id: 'twentyfour', emoji: '🔢', label: { en: '24', id: '24' } },
      ],
      correctIds: ['six', 'eighteen'],
    },
  },
  {
    id: 'deduction-12',
    worldId: 'deduction',
    number: 12,
    title: { en: 'Under Which Cup?', id: 'Di Bawah Cangkir Mana?' },
    mascotMessage: {
      en: 'Clues that say where the ball is NOT can still tell you exactly where it IS. 🥤',
      id: 'Petunjuk yang menyebutkan di mana bolanya TIDAK berada tetap bisa memberitahu di mana bolanya BERADA. 🥤',
    },
    xpReward: 33,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Four cups sit in a row: red, blue, green, yellow. One ball is hidden under one of them. Clue 1: it is not under the red cup. Clue 2: it is not under the cup right beside the red one. Clue 3: it is not under the yellow cup. Where is it?',
        id: 'Empat cangkir berjajar: merah, biru, hijau, kuning. Satu bola disembunyikan di bawah salah satunya. Petunjuk 1: bukan di bawah cangkir merah. Petunjuk 2: bukan di bawah cangkir tepat di sebelah cangkir merah. Petunjuk 3: bukan di bawah cangkir kuning. Di mana bolanya?',
      },
      options: [
        { id: 'green', emoji: '🟢', label: { en: 'Under the green cup', id: 'Di bawah cangkir hijau' } },
        { id: 'blue', emoji: '🔵', label: { en: 'Under the blue cup', id: 'Di bawah cangkir biru' } },
        { id: 'red', emoji: '🔴', label: { en: 'Under the red cup', id: 'Di bawah cangkir merah' } },
        { id: 'unknown', emoji: '🤷', label: { en: 'The clues are not enough to say', id: 'Petunjuknya tidak cukup untuk memastikan' } },
      ],
      answerId: 'green',
    },
  },
  {
    id: 'deduction-13',
    worldId: 'deduction',
    number: 13,
    title: { en: 'The Number in Disguise', id: 'Angka yang Menyamar' },
    mascotMessage: {
      en: 'Start with the narrowest clue: which two-digit numbers are even and between 50 and 70? 🔍',
      id: 'Mulai dari petunjuk paling sempit: angka dua digit mana yang genap dan antara 50 dan 70? 🔍',
    },
    xpReward: 34,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'I am a two-digit number. My two digits add up to 9. I am an even number. I am bigger than 50 and smaller than 70. What number am I?',
        id: 'Aku angka dua digit. Kedua digitku berjumlah 9. Aku angka genap. Aku lebih besar dari 50 dan lebih kecil dari 70. Angka berapakah aku?',
      },
      answer: '54',
      inputType: 'numeric',
    },
  },
  {
    id: 'deduction-14',
    worldId: 'deduction',
    number: 14,
    title: { en: 'Three Houses', id: 'Tiga Rumah' },
    mascotMessage: {
      en: 'Once a house is taken, nobody else can have it. Cross things off as you go! 🏠',
      id: 'Begitu sebuah rumah terisi, tidak ada lagi yang bisa menempatinya. Coret sambil berjalan! 🏠',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Ana, Budi and Cici each live in a different house: one red, one blue, one green.',
        id: 'Ana, Budi, dan Cici masing-masing tinggal di rumah berbeda: satu merah, satu biru, satu hijau.',
      },
      visual: '🏠🏠🏠',
      steps: [
        {
          id: 'ana',
          prompt: {
            en: 'Ana lives in neither the red house nor the green house. Which is hers?',
            id: 'Ana tidak tinggal di rumah merah maupun hijau. Yang mana rumahnya?',
          },
          options: [
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'Not enough clues yet', id: 'Petunjuknya belum cukup' } },
          ],
          answerId: 'blue',
        },
        {
          id: 'budi',
          prompt: {
            en: 'Budi does not live in the green house. Which is his?',
            id: 'Budi tidak tinggal di rumah hijau. Yang mana rumahnya?',
          },
          options: [
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'Still impossible to say', id: 'Masih belum bisa dipastikan' } },
          ],
          answerId: 'red',
        },
        {
          id: 'cici',
          prompt: { en: 'So which house is Cici\'s?', id: 'Jadi rumah mana milik Cici?' },
          options: [
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It could be any of them', id: 'Bisa yang mana saja' } },
          ],
          answerId: 'green',
        },
      ],
    },
  },
  {
    id: 'deduction-15',
    worldId: 'deduction',
    number: 15,
    title: { en: 'Turn the Rule Around', id: 'Balikkan Aturannya' },
    mascotMessage: {
      en: 'If a rule says EVERY member can do something, then someone who cannot do it is not a member. 🎼',
      id: 'Kalau aturan berkata SETIAP anggota bisa melakukan sesuatu, maka yang tidak bisa melakukannya bukan anggota. 🎼',
    },
    xpReward: 36,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'It is true that every child in the choir can read music. Sari cannot read music. So Sari is definitely not in the choir.',
        id: 'Benar bahwa setiap anak di paduan suara bisa membaca not. Sari tidak bisa membaca not. Jadi Sari pasti bukan anggota paduan suara.',
      },
      answer: true,
    },
  },
  {
    id: 'deduction-16',
    worldId: 'deduction',
    number: 16,
    title: { en: 'Which Conclusion Is Wrong?', id: 'Kesimpulan Mana yang Salah?' },
    mascotMessage: {
      en: 'Three of these really do follow from the fact. One only SOUNDS as if it does. 🧐',
      id: 'Tiga di antaranya benar-benar mengikuti faktanya. Satu hanya TERDENGAR seolah begitu. 🧐',
    },
    xpReward: 38,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Fact: every pupil in Class 6 walks to school. Which conclusion does NOT follow?',
        id: 'Fakta: setiap murid Kelas 6 berjalan kaki ke sekolah. Kesimpulan mana yang TIDAK mengikuti?',
      },
      items: [
        { id: 'rian', emoji: '🚶', label: { en: 'Rian is in Class 6, so Rian walks to school', id: 'Rian di Kelas 6, jadi Rian berjalan kaki ke sekolah' } },
        { id: 'sinta', emoji: '🚶', label: { en: 'Sinta walks to school, so Sinta is in Class 6', id: 'Sinta berjalan kaki ke sekolah, jadi Sinta di Kelas 6' } },
        { id: 'tono', emoji: '🚌', label: { en: 'Tono does not walk, so Tono is not in Class 6', id: 'Tono tidak berjalan kaki, jadi Tono bukan Kelas 6' } },
        { id: 'bus', emoji: '🚍', label: { en: 'No pupil in Class 6 comes by bus', id: 'Tidak ada murid Kelas 6 yang datang naik bus' } },
      ],
      correctIds: ['sinta'],
    },
  },
  {
    id: 'deduction-17',
    worldId: 'deduction',
    number: 17,
    title: { en: 'Three From the Box', id: 'Tiga dari Kotak' },
    mascotMessage: {
      en: 'Imagine the worst luck possible: what if you grabbed every red ball first? 🔴',
      id: 'Bayangkan nasib paling sial: bagaimana kalau kamu mengambil semua bola merah lebih dulu? 🔴',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A box holds 5 balls: 2 red and 3 blue. You take out 3 balls without looking. What MUST be true?',
        id: 'Sebuah kotak berisi 5 bola: 2 merah dan 3 biru. Kamu mengambil 3 bola tanpa melihat. Apa yang PASTI benar?',
      },
      options: [
        { id: 'blue', emoji: '🔵', label: { en: 'At least one of them is blue', id: 'Setidaknya satu di antaranya biru' } },
        { id: 'allred', emoji: '🔴', label: { en: 'All three of them are red', id: 'Ketiganya merah' } },
        { id: 'tworeds', emoji: '🟥', label: { en: 'At least two of them are red', id: 'Setidaknya dua di antaranya merah' } },
        { id: 'oneblue', emoji: '🟦', label: { en: 'Exactly one of them is blue', id: 'Tepat satu di antaranya biru' } },
      ],
      answerId: 'blue',
    },
  },
  {
    id: 'deduction-18',
    worldId: 'deduction',
    number: 18,
    title: { en: 'The Book Stack', id: 'Tumpukan Buku' },
    mascotMessage: {
      en: 'Two clues pin down the ends of the stack. The other clue glues two books together. 📚',
      id: 'Dua petunjuk mengunci ujung-ujung tumpukan. Petunjuk satunya merekatkan dua buku. 📚',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Four books are stacked up. The maths book sits directly above the atlas. The novel is at the very bottom. The comic is on top. Which book is 2nd from the top?',
        id: 'Empat buku ditumpuk. Buku matematika tepat di atas atlas. Novel ada di paling bawah. Komik ada di paling atas. Buku mana yang ke-2 dari atas?',
      },
      options: [
        { id: 'maths', emoji: '📗', label: { en: 'The maths book', id: 'Buku matematika' } },
        { id: 'atlas', emoji: '🗺️', label: { en: 'The atlas', id: 'Atlas' } },
        { id: 'novel', emoji: '📕', label: { en: 'The novel', id: 'Novel' } },
        { id: 'comic', emoji: '📘', label: { en: 'The comic', id: 'Komik' } },
      ],
      answerId: 'maths',
    },
  },
  {
    id: 'deduction-19',
    worldId: 'deduction',
    number: 19,
    title: { en: 'The Race Result', id: 'Hasil Balapan' },
    mascotMessage: {
      en: 'Fix the order from the clues first. Then a new clue either fits it — or cannot possibly be true. 🏁',
      id: 'Tetapkan dulu urutannya dari petunjuk. Lalu petunjuk baru bisa cocok — atau tidak mungkin benar. 🏁',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Three friends ran a race. We know two things: Rina was not last, and Sam finished ahead of Rina.',
        id: 'Tiga teman ikut balapan. Kita tahu dua hal: Rina bukan yang terakhir, dan Sam finis lebih dulu dari Rina.',
      },
      visual: '🏃🏃🏃',
      steps: [
        {
          id: 'first',
          prompt: { en: 'Who came first?', id: 'Siapa yang datang pertama?' },
          options: [
            { id: 'sam', emoji: '🥇', label: { en: 'Sam', id: 'Sam' } },
            { id: 'rina', emoji: '🥇', label: { en: 'Rina', id: 'Rina' } },
            { id: 'tia', emoji: '🥇', label: { en: 'Tia', id: 'Tia' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It cannot be worked out', id: 'Tidak bisa ditentukan' } },
          ],
          answerId: 'sam',
        },
        {
          id: 'last',
          prompt: { en: 'So who came last?', id: 'Jadi siapa yang datang terakhir?' },
          options: [
            { id: 'tia', emoji: '🥉', label: { en: 'Tia', id: 'Tia' } },
            { id: 'rina', emoji: '🥉', label: { en: 'Rina', id: 'Rina' } },
            { id: 'sam', emoji: '🥉', label: { en: 'Sam', id: 'Sam' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It cannot be worked out', id: 'Tidak bisa ditentukan' } },
          ],
          answerId: 'tia',
        },
        {
          id: 'newclue',
          prompt: {
            en: 'Someone now says "Tia finished ahead of Rina". Can that be true?',
            id: 'Seseorang kini berkata "Tia finis lebih dulu dari Rina". Mungkinkah itu benar?',
          },
          options: [
            { id: 'no', emoji: '❌', label: { en: 'No — it contradicts the earlier clues', id: 'Tidak — itu bertentangan dengan petunjuk sebelumnya' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes, it fits with everything else', id: 'Ya, cocok dengan semuanya' } },
            { id: 'maybe', emoji: '🤷', label: { en: 'Maybe — the clues do not decide it', id: 'Mungkin — petunjuknya tidak menentukan' } },
            { id: 'redo', emoji: '🔁', label: { en: 'Only if the race is run again', id: 'Hanya kalau balapannya diulang' } },
          ],
          answerId: 'no',
        },
      ],
    },
  },
]
