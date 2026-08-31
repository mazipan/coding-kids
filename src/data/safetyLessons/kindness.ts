import type { SafetyLesson } from '../../types'

export const kindnessLessons: SafetyLesson[] = [
  // ── Kindness Kingdom ─────────────────────────────────────────
  {
    id: 'kindness-0',
    worldId: 'kindness',
    number: 0,
    title: { en: 'A Mean Comment', id: 'Komentar yang Jahat' },
    mascotMessage: { en: 'Someone was unkind in the game chat. 💛', id: 'Seseorang bersikap tidak baik di obrolan game. 💛' },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Someone posts a mean comment about your friend\'s drawing in game chat. What\'s the kind move?',
        id: 'Seseorang memposting komentar jahat tentang gambar temanmu di obrolan game. Apa tindakan yang baik?',
      },
      options: [
        { id: 'joinin', emoji: '😬', label: { en: 'Add a mean comment too', id: 'Ikut menambahkan komentar jahat' } },
        { id: 'support', emoji: '💬', label: { en: 'Tell them it hurt, or report it', id: 'Bilang itu menyakitkan, atau laporkan' } },
        { id: 'ignore-all', emoji: '🙉', label: { en: 'Ignore it forever, say nothing to anyone', id: 'Abaikan selamanya, jangan bilang siapa-siapa' } },
        { id: 'laugh', emoji: '😂', label: { en: 'Laugh along with it', id: 'Ikut tertawa' } },
      ],
      answerId: 'support',
    },
  },
  {
    id: 'kindness-1',
    worldId: 'kindness',
    number: 1,
    title: { en: 'Would You Say It?', id: 'Apakah Kamu Akan Mengatakannya?' },
    mascotMessage: { en: 'Think about how words feel, online and off. 🗨️', id: 'Pikirkan bagaimana rasanya kata-kata, online maupun langsung. 🗨️' },
    xpReward: 10,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Typing something online you\'d never say to someone\'s face is still unkind.', id: 'Mengetik sesuatu online yang tidak akan pernah kamu katakan langsung tetap tidak baik.' },
      answer: true,
    },
  },
  {
    id: 'kindness-2',
    worldId: 'kindness',
    number: 2,
    title: { en: 'Helps or Hurts?', id: 'Membantu atau Menyakiti?' },
    mascotMessage: { en: 'Match each message to what it does. 🧩', id: 'Cocokkan setiap pesan dengan apa yang dilakukannya. 🧩' },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'encourage', leftEmoji: '🌟', leftLabel: { en: '"Great job on that level!"', id: '"Kerja bagus di level itu!"' },
          rightId: 'helps', rightEmoji: '💛', rightLabel: { en: 'Helps someone feel good', id: 'Membuat seseorang merasa senang' },
        },
        {
          leftId: 'tease', leftEmoji: '😒', leftLabel: { en: '"You\'re so bad at this game."', id: '"Kamu payah banget di game ini."' },
          rightId: 'hurts', rightEmoji: '💔', rightLabel: { en: 'Hurts someone\'s feelings', id: 'Menyakiti perasaan seseorang' },
        },
        {
          leftId: 'invite', leftEmoji: '🎉', leftLabel: { en: '"Want to team up with us?"', id: '"Mau gabung tim bareng kita?"' },
          rightId: 'includes', rightEmoji: '🤝', rightLabel: { en: 'Includes someone', id: 'Melibatkan seseorang' },
        },
      ],
    },
  },
  {
    id: 'kindness-3',
    worldId: 'kindness',
    number: 3,
    title: { en: 'A Private Screenshot', id: 'Tangkapan Layar Pribadi' },
    mascotMessage: { en: 'Someone wants to share a chat to embarrass a friend. 📱', id: 'Seseorang ingin membagikan obrolan untuk mempermalukan teman. 📱' },
    xpReward: 12,
    puzzle: {
      type: 'true-false',
      statement: { en: 'It\'s okay to share a screenshot of a private chat to embarrass someone.', id: 'Tidak apa-apa membagikan tangkapan layar obrolan pribadi untuk mempermalukan seseorang.' },
      answer: false,
    },
  },
  {
    id: 'kindness-4',
    worldId: 'kindness',
    number: 4,
    title: { en: 'Someone Is Being Teased', id: 'Seseorang Sedang Diejek' },
    mascotMessage: { en: 'A classmate is being teased in a group chat. 😟', id: 'Teman sekelas sedang diejek di obrolan grup. 😟' },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You see a classmate being teased in a group chat. What\'s the best first step?',
        id: 'Kamu melihat teman sekelas diejek di obrolan grup. Apa langkah pertama yang terbaik?',
      },
      options: [
        { id: 'support', emoji: '🤝', label: { en: 'Don\'t join in — support them, tell an adult', id: 'Jangan ikut — dukung mereka, beri tahu orang dewasa' } },
        { id: 'joinin2', emoji: '😬', label: { en: 'Join in so you don\'t get teased too', id: 'Ikut mengejek supaya kamu tidak diejek juga' } },
        { id: 'watch', emoji: '👀', label: { en: 'Just watch and say nothing', id: 'Hanya menonton dan diam saja' } },
        { id: 'leave-chat', emoji: '🚪', label: { en: 'Leave the chat without telling anyone', id: 'Keluar dari obrolan tanpa bilang siapa-siapa' } },
      ],
      answerId: 'support',
    },
  },
  {
    id: 'kindness-5',
    worldId: 'kindness',
    number: 5,
    title: { en: 'Silent, But Not Joining In', id: 'Diam, Tapi Tidak Ikut Mengejek' },
    mascotMessage: { en: 'This one takes some real thinking. 🧠', id: 'Yang satu ini butuh pemikiran yang sungguh-sungguh. 🧠' },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Staying silent while someone is bullied online, without joining in, still means no one helped them.',
        id: 'Diam saja saat seseorang di-bully online, meski tidak ikut mengejek, tetap berarti tidak ada yang menolongnya.',
      },
      answer: true,
    },
  },
  {
    id: 'kindness-6',
    worldId: 'kindness',
    number: 6,
    title: { en: 'The Unkind Reply', id: 'Balasan yang Tidak Baik' },
    mascotMessage: { en: 'A friend posted something sad. Which reply doesn\'t belong? 😔', id: 'Seorang teman memposting sesuatu yang sedih. Balasan mana yang tidak seharusnya? 😔' },
    xpReward: 18,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which reply to a friend\'s sad post doesn\'t belong?', id: 'Balasan mana untuk postingan sedih temanmu yang tidak seharusnya?' },
      items: [
        { id: 'hug', emoji: '🫂', label: { en: '"I\'m here for you!"', id: '"Aku ada untukmu!"' } },
        { id: 'mock', emoji: '🙄', label: { en: '"Wow, so dramatic."', id: '"Wah, lebay banget."' } },
        { id: 'listen', emoji: '👂', label: { en: '"Want to talk about it?"', id: '"Mau cerita?"' } },
        { id: 'cheer', emoji: '🌈', label: { en: '"Sending good vibes!"', id: '"Semangat, ya!"' } },
      ],
      correctIds: ['mock'],
    },
  },
  {
    id: 'kindness-7',
    worldId: 'kindness',
    number: 7,
    title: { en: 'Wait Before You Reply', id: 'Tunggu Sebelum Membalas' },
    mascotMessage: { en: 'Sometimes the best reply is a slower one. ⏳', id: 'Terkadang balasan terbaik adalah yang lebih lambat. ⏳' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Waiting a bit before replying when you\'re upset can help you avoid saying something you regret.',
        id: 'Menunggu sebentar sebelum membalas saat kamu kesal bisa membantumu menghindari kata-kata yang kamu sesali.',
      },
      answer: true,
    },
  },
  {
    id: 'kindness-8',
    worldId: 'kindness',
    number: 8,
    title: { en: 'A Mean DM', id: 'Pesan Pribadi yang Jahat' },
    mascotMessage: { en: 'Your friend just got an unkind message. Answer both steps! 💌', id: 'Temanmu baru saja menerima pesan yang tidak baik. Jawab kedua langkahnya! 💌' },
    xpReward: 22,
    puzzle: {
      type: 'multi-step',
      intro: { en: 'Your friend shows you a mean DM someone sent them.', id: 'Temanmu menunjukkan pesan pribadi jahat yang dikirim seseorang.' },
      steps: [
        {
          id: 'step1',
          prompt: { en: 'What should you NOT do?', id: 'Apa yang TIDAK boleh kamu lakukan?' },
          options: [
            { id: 'forward', emoji: '📤', label: { en: 'Forward it around to laugh at it', id: 'Sebarkan untuk ditertawakan bersama' } },
            { id: 'listen2', emoji: '👂', label: { en: 'Listen to how they feel', id: 'Dengarkan perasaan mereka' } },
          ],
          answerId: 'forward',
        },
        {
          id: 'step2',
          prompt: { en: 'What SHOULD you do?', id: 'Apa yang SEHARUSNYA kamu lakukan?' },
          options: [
            { id: 'screenshot', emoji: '📸', label: { en: 'Keep it and tell a trusted adult', id: 'Simpan dan beri tahu orang dewasa yang dipercaya' } },
            { id: 'reply-mean', emoji: '😠', label: { en: 'Reply to the sender with something mean', id: 'Balas pengirimnya dengan sesuatu yang jahat' } },
          ],
          answerId: 'screenshot',
        },
      ],
    },
  },
  {
    id: 'kindness-9',
    worldId: 'kindness',
    number: 9,
    title: { en: 'The Bravest Move', id: 'Tindakan Paling Berani' },
    mascotMessage: { en: 'The whole group chat turned on one kid. What now? 🛡️', id: 'Seluruh obrolan grup menyerang satu anak. Sekarang apa? 🛡️' },
    xpReward: 25,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Everyone in a group chat starts making fun of one kid. What\'s the bravest kind move?',
        id: 'Semua orang di obrolan grup mulai mengejek satu anak. Apa tindakan baik paling berani?',
      },
      options: [
        { id: 'private-support', emoji: '💛', label: { en: 'Privately support them, and tell an adult', id: 'Dukung diam-diam, dan beri tahu orang dewasa' } },
        { id: 'stay-silent', emoji: '😶', label: { en: 'Stay in the chat and say nothing', id: 'Tetap di obrolan dan diam saja' } },
        { id: 'leave-quiet', emoji: '🚪', label: { en: 'Leave the chat quietly, tell no one', id: 'Keluar diam-diam, tidak bilang siapa-siapa' } },
        { id: 'joinin3', emoji: '😬', label: { en: 'Join in a little so you fit in', id: 'Ikut sedikit supaya diterima' } },
      ],
      answerId: 'private-support',
    },
  },
]
