import type { ThinkingLesson } from '../../types'

export const probabilityLessons: ThinkingLesson[] = [
  // ── Chance Camp ──────────────────────────────────────────────
  // Uncertainty: impossible, possible, certain, likely, and fair.
  // True-false answers deliberately run false, true, false, true (INV-Q3).
  {
    id: 'probability-0',
    worldId: 'probability',
    number: 0,
    title: { en: 'Can It Happen?', id: 'Mungkinkah Terjadi?' },
    mascotMessage: {
      en: 'Lucky never peeks inside the bag. He only thinks about what is in there. 🎒',
      id: 'Lucky tidak pernah mengintip ke dalam kantong. Ia hanya memikirkan apa isinya. 🎒',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'Impossible, Possible, Certain', id: 'Mustahil, Mungkin, Pasti' },
      body: {
        en: 'Some things can never happen, some might happen, and some always happen. Impossible means there is no way. Certain means there is no other way. Everything in between is possible.',
        id: 'Ada hal yang tidak akan pernah terjadi, ada yang mungkin terjadi, dan ada yang selalu terjadi. Mustahil berarti tidak ada caranya. Pasti berarti tidak ada kemungkinan lain. Di antaranya adalah mungkin.',
      },
      example: {
        en: 'A bag of only green marbles: pulling green is certain, pulling red is impossible.',
        id: 'Kantong berisi kelereng hijau saja: mengambil hijau itu pasti, mengambil merah itu mustahil.',
      },
    },
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'This bag holds only red marbles 🔴🔴🔴. Lucky can still pull out a blue one.',
        id: 'Kantong ini hanya berisi kelereng merah 🔴🔴🔴. Lucky tetap bisa mengambil yang biru.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-1',
    worldId: 'probability',
    number: 1,
    title: { en: 'Sure Thing', id: 'Pasti Terjadi' },
    mascotMessage: {
      en: 'When every marble is the same colour, there is no surprise left. 🟡',
      id: 'Kalau semua kelereng warnanya sama, tidak ada kejutan lagi. 🟡',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Every marble in this bag is yellow 🟡🟡🟡🟡. Lucky pulls one out without looking. What will he get?',
        id: 'Semua kelereng di kantong ini kuning 🟡🟡🟡🟡. Lucky mengambil satu tanpa melihat. Apa yang ia dapat?',
      },
      options: [
        { id: 'yellow', emoji: '🟡', label: { en: 'Yellow, for certain', id: 'Kuning, sudah pasti' } },
        { id: 'maybe_red', emoji: '🔴', label: { en: 'Maybe red', id: 'Mungkin merah' } },
        { id: 'blue', emoji: '🔵', label: { en: 'Blue, for certain', id: 'Biru, sudah pasti' } },
        { id: 'either', emoji: '🟠', label: { en: 'Yellow or orange', id: 'Kuning atau oranye' } },
      ],
      answerId: 'yellow',
    },
  },
  {
    id: 'probability-2',
    worldId: 'probability',
    number: 2,
    title: { en: 'Mystery Bag', id: 'Kantong Misteri' },
    mascotMessage: {
      en: 'More of a colour means a better chance of that colour. But better is not the same as sure! 🎯',
      id: 'Semakin banyak suatu warna, semakin besar peluangnya. Tapi lebih besar bukan berarti pasti! 🎯',
    },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'The bag has 7 red 🔴 and 3 blue 🔵 marbles. Lucky pulls one without looking. What is true?',
        id: 'Kantong berisi 7 kelereng merah 🔴 dan 3 biru 🔵. Lucky mengambil satu tanpa melihat. Apa yang benar?',
      },
      options: [
        { id: 'red_likely', emoji: '🔴', label: { en: 'Red is more likely', id: 'Merah lebih mungkin' } },
        { id: 'blue_likely', emoji: '🔵', label: { en: 'Blue is more likely', id: 'Biru lebih mungkin' } },
        { id: 'red_certain', emoji: '💯', label: { en: 'Red is certain', id: 'Merah sudah pasti' } },
        { id: 'same', emoji: '⚖️', label: { en: 'Both have the same chance', id: 'Peluang keduanya sama' } },
      ],
      answerId: 'red_likely',
    },
  },
  {
    id: 'probability-3',
    worldId: 'probability',
    number: 3,
    title: { en: 'Fair Spinner', id: 'Roda Adil' },
    mascotMessage: {
      en: 'Look at the size of the parts, not at your favourite colour. 🎡',
      id: 'Lihat ukuran bagiannya, bukan warna kesukaanmu. 🎡',
    },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'This spinner has 4 parts of exactly the same size: 🟥 🟦 🟩 🟨. Which colour is it most likely to land on?',
        id: 'Roda ini punya 4 bagian yang ukurannya sama persis: 🟥 🟦 🟩 🟨. Warna mana yang paling mungkin didapat?',
      },
      options: [
        { id: 'equal', emoji: '⚖️', label: { en: 'All four have the same chance', id: 'Keempatnya punya peluang sama' } },
        { id: 'red', emoji: '🟥', label: { en: 'Red, because it is first', id: 'Merah, karena paling depan' } },
        { id: 'yellow', emoji: '🟨', label: { en: 'Yellow, because it is last', id: 'Kuning, karena paling belakang' } },
        { id: 'green', emoji: '🟩', label: { en: 'Green, because it is lucky', id: 'Hijau, karena warna keberuntungan' } },
      ],
      answerId: 'equal',
    },
  },
  {
    id: 'probability-4',
    worldId: 'probability',
    number: 4,
    title: { en: 'What Could Happen?', id: 'Apa yang Mungkin Terjadi?' },
    mascotMessage: {
      en: 'A result can only happen if it is actually on the spinner. 🎡',
      id: 'Sebuah hasil hanya mungkin terjadi kalau memang ada di roda. 🎡',
    },
    xpReward: 14,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Lucky\'s spinner has only frog, butterfly and ladybug sections. Tap every result that is possible.',
        id: 'Roda Lucky hanya punya bagian katak, kupu-kupu, dan kepik. Ketuk semua hasil yang mungkin terjadi.',
      },
      items: [
        { id: 'frog', emoji: '🐸', label: { en: 'Frog', id: 'Katak' } },
        { id: 'fish', emoji: '🐟', label: { en: 'Fish', id: 'Ikan' } },
        { id: 'butterfly', emoji: '🦋', label: { en: 'Butterfly', id: 'Kupu-kupu' } },
        { id: 'bee', emoji: '🐝', label: { en: 'Bee', id: 'Lebah' } },
        { id: 'ladybug', emoji: '🐞', label: { en: 'Ladybug', id: 'Kepik' } },
      ],
      correctIds: ['frog', 'butterfly', 'ladybug'],
    },
  },
  {
    id: 'probability-5',
    worldId: 'probability',
    number: 5,
    title: { en: 'Possible, Not Certain', id: 'Mungkin, Belum Pasti' },
    mascotMessage: {
      en: 'Rare is not the same as impossible. Think carefully! 🟣',
      id: 'Jarang bukan berarti mustahil. Pikirkan baik-baik! 🟣',
    },
    xpReward: 16,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bag has 5 green 🟢 and 1 purple 🟣 marble. Lucky might pull the purple one, but it is not certain.',
        id: 'Kantong berisi 5 kelereng hijau 🟢 dan 1 ungu 🟣. Lucky mungkin mengambil yang ungu, tetapi belum pasti.',
      },
      answer: true,
    },
  },
  {
    id: 'probability-6',
    worldId: 'probability',
    number: 6,
    title: { en: 'Count the Chances', id: 'Hitung Peluangnya' },
    mascotMessage: {
      en: 'Sometimes it is easier to count the parts you do not want. 🎡',
      id: 'Kadang lebih mudah menghitung bagian yang tidak kamu inginkan. 🎡',
    },
    xpReward: 16,
    puzzle: {
      type: 'math',
      question: {
        en: 'A spinner has 8 equal sections: 5 green, 2 red and 1 blue. How many sections are not green?',
        id: 'Sebuah roda punya 8 bagian sama besar: 5 hijau, 2 merah, dan 1 biru. Berapa bagian yang bukan hijau?',
      },
      visual: '🎡',
      options: ['5', '3', '2', '8'],
      answer: '3',
    },
  },
  {
    id: 'probability-7',
    worldId: 'probability',
    number: 7,
    title: { en: 'Is the Game Fair?', id: 'Adilkah Permainannya?' },
    mascotMessage: {
      en: 'A game is fair when every player has the same chance to win, not just a rule of their own. 🎲',
      id: 'Permainan itu adil kalau setiap pemain punya peluang menang yang sama, bukan sekadar punya aturan sendiri. 🎲',
    },
    xpReward: 18,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Ana wins if the dice shows 1, 2, 3, 4 or 5. Budi wins only if it shows 6. This game is fair for both of them.',
        id: 'Ana menang jika dadu menunjukkan 1, 2, 3, 4, atau 5. Budi menang hanya jika muncul 6. Permainan ini adil bagi keduanya.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-8',
    worldId: 'probability',
    number: 8,
    title: { en: 'Put It Back', id: 'Kembalikan Lagi' },
    mascotMessage: {
      en: 'Ask yourself: after the marble goes back in, what is inside the bag now? 🎒',
      id: 'Tanyakan pada dirimu: setelah kelereng dikembalikan, apa isi kantong sekarang? 🎒',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bag has 4 red 🔴 and 4 blue 🔵 marbles. Lucky pulls one out, looks at it, and puts it back. The next pull has exactly the same chances as the first.',
        id: 'Kantong berisi 4 kelereng merah 🔴 dan 4 biru 🔵. Lucky mengambil satu, melihatnya, lalu mengembalikannya. Pengambilan berikutnya punya peluang yang sama persis dengan yang pertama.',
      },
      answer: true,
    },
  },
  {
    id: 'probability-9',
    worldId: 'probability',
    number: 9,
    title: { en: 'Read the Tally', id: 'Baca Catatan Hasil' },
    mascotMessage: {
      en: 'Results give you a good guess about a hidden spinner, but never a promise about the next spin. 📊',
      id: 'Hasil percobaan memberi tebakan bagus tentang roda tersembunyi, tapi tidak pernah menjanjikan putaran berikutnya. 📊',
    },
    xpReward: 22,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Lucky spun a hidden spinner 20 times: orange 🟠 came up 12 times, green 🟢 5 times and blue 🔵 3 times. Which is the best guess about the spinner?',
        id: 'Lucky memutar roda tersembunyi 20 kali: oranye 🟠 muncul 12 kali, hijau 🟢 5 kali, dan biru 🔵 3 kali. Tebakan mana yang paling masuk akal tentang roda itu?',
      },
      options: [
        { id: 'orange_biggest', emoji: '🟠', label: { en: 'The orange part is probably the biggest', id: 'Bagian oranye mungkin yang paling besar' } },
        { id: 'no_blue', emoji: '🚫', label: { en: 'There is no blue part at all', id: 'Tidak ada bagian biru sama sekali' } },
        { id: 'all_equal', emoji: '⚖️', label: { en: 'All three parts are the same size', id: 'Ketiga bagian sama besar' } },
        { id: 'blue_due', emoji: '⏳', label: { en: 'Blue must come next, it has waited long enough', id: 'Biru pasti muncul berikutnya, sudah lama tidak keluar' } },
      ],
      answerId: 'orange_biggest',
    },
  },
]
