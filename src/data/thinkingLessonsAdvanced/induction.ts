import type { ThinkingLesson } from '../../types'

export const inductionLessonsAdvanced: ThinkingLesson[] = [
  // ── Rule Finder · tier two ───────────────────────────────────
  // Tier one: spot a rule that fits. Tier two: test a rule properly — one example never
  // proves it, two changes at once prove nothing, and a strong rule survives a hunt for
  // the example that would break it.
  {
    id: 'induction-10',
    worldId: 'induction',
    number: 10,
    title: { en: 'The Secret Machine', id: 'Mesin Rahasia' },
    mascotMessage: {
      en: 'Guess the rule, use the rule, then check whether a new example still obeys it. 🔬',
      id: 'Tebak aturannya, gunakan aturannya, lalu periksa apakah contoh baru masih menuruti. 🔬',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Finding a rule takes more than one thought. This puzzle asks you three questions in a row, keeping each answer on screen for the next one.',
        id: 'Menemukan aturan butuh lebih dari satu pikiran. Teka-teki ini menanyakan tiga pertanyaan berturut-turut, menyimpan setiap jawaban di layar untuk pertanyaan berikutnya.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A machine turned 2 into 5, then 3 into 7, then 4 into 9.',
        id: 'Sebuah mesin mengubah 2 menjadi 5, lalu 3 menjadi 7, lalu 4 menjadi 9.',
      },
      visual: '⚙️',
      steps: [
        {
          id: 'rule',
          prompt: { en: 'What is the machine doing?', id: 'Apa yang dilakukan mesin itu?' },
          options: [
            { id: 'doubleplus', emoji: '⚙️', label: { en: 'Doubling the number, then adding 1', id: 'Menggandakan angkanya, lalu menambah 1' } },
            { id: 'addthree', emoji: '➕', label: { en: 'Adding 3 every time', id: 'Menambah 3 setiap kali' } },
            { id: 'times', emoji: '✖️', label: { en: 'Just doubling the number', id: 'Hanya menggandakan angkanya' } },
            { id: 'square', emoji: '🔲', label: { en: 'Multiplying the number by itself', id: 'Mengalikan angka dengan dirinya sendiri' } },
          ],
          answerId: 'doubleplus',
        },
        {
          id: 'predict',
          prompt: { en: 'So what will it turn 10 into?', id: 'Jadi 10 akan diubah menjadi berapa?' },
          options: [
            { id: 'twentyone', emoji: '🎯', label: { en: '21', id: '21' } },
            { id: 'twenty', emoji: '🎯', label: { en: '20', id: '20' } },
            { id: 'thirteen', emoji: '🎯', label: { en: '13', id: '13' } },
            { id: 'hundred', emoji: '🎯', label: { en: '100', id: '100' } },
          ],
          answerId: 'twentyone',
        },
        {
          id: 'check',
          prompt: {
            en: 'Someone reports that it turned 6 into 12. Does that fit your rule?',
            id: 'Seseorang melaporkan mesin mengubah 6 menjadi 12. Apakah itu cocok dengan aturanmu?',
          },
          options: [
            { id: 'no', emoji: '❌', label: { en: 'No — the rule would give 13, so something is wrong', id: 'Tidak — aturannya memberi 13, jadi ada yang salah' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes, it fits perfectly', id: 'Ya, cocok sekali' } },
            { id: 'close', emoji: '🤏', label: { en: 'Close enough, so the rule still holds', id: 'Cukup dekat, jadi aturannya tetap berlaku' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'The rule cannot be checked with numbers', id: 'Aturannya tidak bisa diperiksa dengan angka' } },
          ],
          answerId: 'no',
        },
      ],
    },
  },
  {
    id: 'induction-11',
    worldId: 'induction',
    number: 11,
    title: { en: 'Which Ones Test the Rule?', id: 'Mana yang Menguji Aturannya?' },
    mascotMessage: {
      en: 'Only an animal WITH feathers can support a rule about feathers. The rest tell you nothing! 🪶',
      id: 'Hanya hewan BERBULU yang bisa mendukung aturan tentang bulu. Sisanya tidak memberitahu apa-apa! 🪶',
    },
    xpReward: 30,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Rule guess: "Animals with feathers lay eggs." Tap every animal that SUPPORTS this rule.',
        id: 'Tebakan aturan: "Hewan berbulu bertelur." Ketuk setiap hewan yang MENDUKUNG aturan ini.',
      },
      items: [
        { id: 'duck', emoji: '🦆', label: { en: 'Duck — feathers, lays eggs', id: 'Bebek — berbulu, bertelur' } },
        { id: 'eagle', emoji: '🦅', label: { en: 'Eagle — feathers, lays eggs', id: 'Elang — berbulu, bertelur' } },
        { id: 'cow', emoji: '🐄', label: { en: 'Cow — no feathers at all', id: 'Sapi — sama sekali tidak berbulu unggas' } },
        { id: 'owl', emoji: '🦉', label: { en: 'Owl — feathers, lays eggs', id: 'Burung hantu — berbulu, bertelur' } },
      ],
      correctIds: ['duck', 'eagle', 'owl'],
    },
  },
  {
    id: 'induction-12',
    worldId: 'induction',
    number: 12,
    title: { en: 'One Apple Is Not Enough', id: 'Satu Apel Tidak Cukup' },
    mascotMessage: {
      en: 'How many examples would you need before you could say "every single one"? 🍏',
      id: 'Berapa contoh yang kamu butuhkan sebelum bisa bilang "setiap satu-satunya"? 🍏',
    },
    xpReward: 32,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rafi tasted one green apple and it was sour. So he can be sure that every green apple in the world is sour.',
        id: 'Rafi mencicipi satu apel hijau dan rasanya asam. Jadi dia bisa yakin bahwa setiap apel hijau di dunia rasanya asam.',
      },
      answer: false,
    },
  },
  {
    id: 'induction-13',
    worldId: 'induction',
    number: 13,
    title: { en: 'Two Changes at Once', id: 'Dua Perubahan Sekaligus' },
    mascotMessage: {
      en: 'If you change two things together, you can never tell which one did the work. 🪴',
      id: 'Kalau kamu mengubah dua hal sekaligus, kamu tidak akan pernah tahu mana yang berperan. 🪴',
    },
    xpReward: 34,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'On the same day, Nia gave her plant more water AND moved it to a sunny window. A week later it had grown fast. What can she be sure of?',
        id: 'Di hari yang sama, Nia memberi tanamannya lebih banyak air DAN memindahkannya ke jendela yang cerah. Seminggu kemudian tanamannya tumbuh cepat. Apa yang bisa dia pastikan?',
      },
      options: [
        { id: 'cannot', emoji: '🤷', label: { en: 'She cannot tell which change helped', id: 'Dia tidak bisa tahu perubahan mana yang membantu' } },
        { id: 'water', emoji: '💧', label: { en: 'More water always makes plants grow fast', id: 'Lebih banyak air selalu membuat tanaman tumbuh cepat' } },
        { id: 'sun', emoji: '☀️', label: { en: 'Sunlight always makes plants grow fast', id: 'Sinar matahari selalu membuat tanaman tumbuh cepat' } },
        { id: 'neither', emoji: '🚫', label: { en: 'Neither change did anything', id: 'Kedua perubahan itu tidak berpengaruh' } },
      ],
      answerId: 'cannot',
    },
  },
  {
    id: 'induction-14',
    worldId: 'induction',
    number: 14,
    title: { en: 'Read the Table', id: 'Baca Tabelnya' },
    mascotMessage: {
      en: 'Look at how much the dots grow each time — then look for the extra bit that never changes. 🔵',
      id: 'Lihat berapa banyak titik bertambah setiap kali — lalu cari bagian tambahan yang tidak pernah berubah. 🔵',
    },
    xpReward: 35,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Shape 1 has 4 dots. Shape 2 has 7 dots. Shape 3 has 10 dots. How many dots does shape 6 have?',
        id: 'Bentuk 1 punya 4 titik. Bentuk 2 punya 7 titik. Bentuk 3 punya 10 titik. Berapa titik pada bentuk 6?',
      },
      answer: '19',
      inputType: 'numeric',
    },
  },
  {
    id: 'induction-15',
    worldId: 'induction',
    number: 15,
    title: { en: 'One More Than a Five', id: 'Satu Lebih dari Kelipatan Lima' },
    mascotMessage: {
      en: 'Take 1 away from each number. Does what is left divide neatly by 5? 🔢',
      id: 'Kurangi 1 dari setiap angka. Apakah sisanya habis dibagi 5? 🔢',
    },
    xpReward: 36,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Rule: every number in this group is exactly one more than a multiple of 5. Which number does NOT fit?',
        id: 'Aturan: setiap angka dalam kelompok ini tepat satu lebih besar dari kelipatan 5. Angka mana yang TIDAK cocok?',
      },
      items: [
        { id: 'six', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'eleven', emoji: '🔢', label: { en: '11', id: '11' } },
        { id: 'twentyone', emoji: '🔢', label: { en: '21', id: '21' } },
        { id: 'twentyfour', emoji: '🔢', label: { en: '24', id: '24' } },
      ],
      correctIds: ['twentyfour'],
    },
  },
  {
    id: 'induction-16',
    worldId: 'induction',
    number: 16,
    title: { en: 'The Bird Feeder Study', id: 'Studi Tempat Makan Burung' },
    mascotMessage: {
      en: 'A rule guess is only as good as the days you spent watching. Do not decide too early! 🐦',
      id: 'Tebakan aturan hanya sebaik jumlah hari kamu mengamati. Jangan buru-buru memutuskan! 🐦',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'For 5 mornings in a row, birds came to the feeder only when it held sunflower seeds.',
        id: 'Selama 5 pagi berturut-turut, burung datang ke tempat makan hanya saat berisi biji bunga matahari.',
      },
      visual: '🐦🌻',
      steps: [
        {
          id: 'guess',
          prompt: { en: 'What is the best rule guess so far?', id: 'Apa tebakan aturan terbaik sejauh ini?' },
          options: [
            { id: 'like', emoji: '🌻', label: { en: 'These birds prefer sunflower seeds', id: 'Burung-burung ini lebih suka biji bunga matahari' } },
            { id: 'all', emoji: '🌍', label: { en: 'All birds everywhere eat only sunflower seeds', id: 'Semua burung di mana pun hanya makan biji bunga matahari' } },
            { id: 'morning', emoji: '🌅', label: { en: 'Birds only ever eat in the morning', id: 'Burung hanya makan di pagi hari' } },
            { id: 'none', emoji: '🚫', label: { en: 'Nothing at all can be guessed', id: 'Tidak ada yang bisa ditebak sama sekali' } },
          ],
          answerId: 'like',
        },
        {
          id: 'sixth',
          prompt: {
            en: 'On the 6th morning there were seeds but no birds — and it was raining hard. What should you do?',
            id: 'Pagi ke-6 ada bijinya tapi tidak ada burung — dan saat itu hujan deras. Apa yang sebaiknya kamu lakukan?',
          },
          options: [
            { id: 'keep', emoji: '👀', label: { en: 'Keep watching before deciding anything', id: 'Terus mengamati sebelum memutuskan apa pun' } },
            { id: 'drop', emoji: '🗑️', label: { en: 'Throw the rule away straight away', id: 'Langsung buang aturannya' } },
            { id: 'ignore', emoji: '🙈', label: { en: 'Ignore that morning completely', id: 'Abaikan pagi itu sepenuhnya' } },
            { id: 'rain', emoji: '🌧️', label: { en: 'Decide that birds hate sunflower seeds', id: 'Putuskan bahwa burung benci biji bunga matahari' } },
          ],
          answerId: 'keep',
        },
        {
          id: 'stronger',
          prompt: {
            en: 'What would make this study stronger?',
            id: 'Apa yang akan membuat studi ini lebih kuat?',
          },
          options: [
            { id: 'more', emoji: '📅', label: { en: 'Watching many more days, in different weather', id: 'Mengamati jauh lebih banyak hari, dalam cuaca berbeda' } },
            { id: 'louder', emoji: '📢', label: { en: 'Telling more people about the rule', id: 'Menceritakan aturannya ke lebih banyak orang' } },
            { id: 'bigger', emoji: '🪶', label: { en: 'Using a bigger feeder', id: 'Memakai tempat makan yang lebih besar' } },
            { id: 'stop', emoji: '🛑', label: { en: 'Stopping now, five days is plenty', id: 'Berhenti sekarang, lima hari sudah cukup' } },
          ],
          answerId: 'more',
        },
      ],
    },
  },
  {
    id: 'induction-17',
    worldId: 'induction',
    number: 17,
    title: { en: 'What Makes a Rule Strong?', id: 'Apa yang Membuat Aturan Kuat?' },
    mascotMessage: {
      en: 'A good scientist tries hard to PROVE THEMSELVES WRONG — and then trusts what survives. 🧪',
      id: 'Ilmuwan yang baik berusaha keras MEMBUKTIKAN DIRINYA SALAH — lalu percaya pada apa yang bertahan. 🧪',
    },
    xpReward: 38,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A rule guess is stronger when many different examples fit it AND you have looked hard for an example that would break it.',
        id: 'Tebakan aturan menjadi lebih kuat ketika banyak contoh berbeda cocok dengannya DAN kamu sudah mencari keras contoh yang bisa mematahkannya.',
      },
      answer: true,
    },
  },
  {
    id: 'induction-18',
    worldId: 'induction',
    number: 18,
    title: { en: 'Does It Fit the Floating Rule?', id: 'Cocok dengan Aturan Mengapung?' },
    mascotMessage: {
      en: 'The rule is only about WATER. Anything happening in the air is not evidence for it. 🚢',
      id: 'Aturan ini hanya tentang AIR. Apa pun yang terjadi di udara bukan buktinya. 🚢',
    },
    xpReward: 38,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Rule: "Something floats when it is lighter than the water it pushes out of the way." Tap every observation that this rule explains.',
        id: 'Aturan: "Sesuatu mengapung ketika lebih ringan daripada air yang disingkirkannya." Ketuk setiap pengamatan yang dijelaskan aturan ini.',
      },
      items: [
        { id: 'log', emoji: '🪵', label: { en: 'A log floats on a river', id: 'Batang kayu mengapung di sungai' } },
        { id: 'stone', emoji: '🪨', label: { en: 'A stone sinks to the bottom', id: 'Batu tenggelam ke dasar' } },
        { id: 'ship', emoji: '🚢', label: { en: 'A heavy steel ship still floats', id: 'Kapal baja berat tetap mengapung' } },
        { id: 'balloon', emoji: '🎈', label: { en: 'A balloon rises up into the air', id: 'Balon naik ke udara' } },
      ],
      correctIds: ['log', 'stone', 'ship'],
    },
  },
  {
    id: 'induction-19',
    worldId: 'induction',
    number: 19,
    title: { en: 'The Growing Dot Shapes', id: 'Bentuk Titik yang Bertumbuh' },
    mascotMessage: {
      en: 'The jumps are not the same size. Look at how much the JUMPS themselves grow! 🔵',
      id: 'Lompatannya tidak sama besar. Lihat seberapa besar LOMPATANNYA sendiri bertambah! 🔵',
    },
    xpReward: 40,
    puzzle: {
      type: 'math',
      question: {
        en: 'Shape 1 has 3 dots, shape 2 has 8, shape 3 has 15 and shape 4 has 24. How many dots does shape 5 have?',
        id: 'Bentuk 1 punya 3 titik, bentuk 2 punya 8, bentuk 3 punya 15, dan bentuk 4 punya 24. Berapa titik pada bentuk 5?',
      },
      options: ['35', '33', '36', '32'],
      answer: '35',
    },
  },
]
