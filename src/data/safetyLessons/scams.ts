import type { SafetyLesson } from '../../types'

export const scamsLessons: SafetyLesson[] = [
  // ── Scam Detectors ───────────────────────────────────────────
  {
    id: 'scams-0',
    worldId: 'scams',
    number: 0,
    title: { en: 'You Won... What?', id: 'Kamu Menang... Apa?' },
    mascotMessage: { en: 'A message just showed up with big news. 🕵️', id: 'Sebuah pesan baru saja muncul dengan kabar besar. 🕵️' },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You get a message: "You won a free game console! Click here now!" What\'s the safest response?',
        id: 'Kamu dapat pesan: "Kamu menang konsol game gratis! Klik di sini sekarang!" Apa respons yang paling aman?',
      },
      options: [
        { id: 'click', emoji: '👆', label: { en: 'Click it right away before it expires', id: 'Klik segera sebelum kadaluarsa' } },
        { id: 'no-click', emoji: '🛑', label: { en: "Don't click — it's likely a scam", id: 'Jangan klik — ini kemungkinan penipuan' } },
        { id: 'forward', emoji: '📤', label: { en: 'Forward it to friends so they can win too', id: 'Teruskan ke teman supaya mereka juga menang' } },
        { id: 'reply-info', emoji: '✍️', label: { en: 'Reply with your name to claim it', id: 'Balas dengan namamu untuk mengklaim' } },
      ],
      answerId: 'no-click',
    },
  },
  {
    id: 'scams-1',
    worldId: 'scams',
    number: 1,
    title: { en: 'A Fee to Get a Prize?', id: 'Bayar Biaya untuk Dapat Hadiah?' },
    mascotMessage: { en: 'Real prizes work a certain way. 🎁', id: 'Hadiah asli bekerja dengan cara tertentu. 🎁' },
    xpReward: 12,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A real prize you actually entered to win would never ask you to pay a "small fee" first.',
        id: 'Hadiah asli yang benar-benar kamu ikuti undiannya tidak akan pernah meminta "biaya kecil" terlebih dahulu.',
      },
      answer: true,
    },
  },
  {
    id: 'scams-2',
    worldId: 'scams',
    number: 2,
    title: { en: 'Spot the Normal One', id: 'Temukan yang Normal' },
    mascotMessage: { en: 'Three of these are scams. One is normal. 🔎', id: 'Tiga dari ini adalah penipuan. Satu normal. 🔎' },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which message is the normal one, not a scam?', id: 'Pesan mana yang normal, bukan penipuan?' },
      items: [
        { id: 'urgent', emoji: '⏰', label: { en: '"ACT NOW or lose your account forever!"', id: '"BERTINDAK SEKARANG atau akunmu hilang selamanya!"' } },
        { id: 'update', emoji: '📲', label: { en: '"Your homework app has an update."', id: '"Aplikasi PR-mu ada pembaruan."' } },
        { id: 'toogood', emoji: '💰', label: { en: '"Get 10x your allowance instantly!"', id: '"Dapatkan 10x uang jajanmu langsung!"' } },
        { id: 'password', emoji: '🔑', label: { en: '"Confirm your password here to continue."', id: '"Konfirmasi kata sandimu di sini untuk lanjut."' } },
      ],
      correctIds: ['update'],
    },
  },
  {
    id: 'scams-3',
    worldId: 'scams',
    number: 3,
    title: { en: 'Perfect Grammar?', id: 'Tata Bahasa Sempurna?' },
    mascotMessage: { en: 'Does good spelling always mean it\'s safe? 📝', id: 'Apakah ejaan yang bagus selalu berarti aman? 📝' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Scam messages always have spelling mistakes, so a message with perfect grammar is definitely safe.',
        id: 'Pesan penipuan selalu punya kesalahan ejaan, jadi pesan dengan tata bahasa sempurna pasti aman.',
      },
      answer: false,
    },
  },
  {
    id: 'scams-4',
    worldId: 'scams',
    number: 4,
    title: { en: 'Check the Real Address', id: 'Periksa Alamat Aslinya' },
    mascotMessage: { en: 'A message claims to be from school. Is it really? 🏫', id: 'Sebuah pesan mengaku dari sekolah. Benarkah? 🏫' },
    xpReward: 18,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A message claims to be from your school\'s official account, but the link\'s address doesn\'t match the school\'s real website. What should you check first?',
        id: 'Sebuah pesan mengaku dari akun resmi sekolahmu, tapi alamat tautannya tidak cocok dengan situs asli sekolah. Apa yang harus kamu periksa dulu?',
      },
      options: [
        { id: 'check-url', emoji: '🔗', label: { en: 'The actual URL/domain, before clicking', id: 'URL/domain aslinya, sebelum mengeklik' } },
        { id: 'trust-name', emoji: '✅', label: { en: 'Trust it — the display name says school', id: 'Percaya saja — nama yang muncul bilang sekolah' } },
        { id: 'click-first', emoji: '👆', label: { en: 'Click first, check the link after', id: 'Klik dulu, periksa tautannya nanti' } },
        { id: 'ask-friend', emoji: '🗣️', label: { en: 'Ask a friend to click it for you', id: 'Minta teman mengekliknya untukmu' } },
      ],
      answerId: 'check-url',
    },
  },
  {
    id: 'scams-5',
    worldId: 'scams',
    number: 5,
    title: { en: 'The Deleted Account Trick', id: 'Trik Akun yang Akan Dihapus' },
    mascotMessage: { en: 'A scary countdown message just arrived. ⏳', id: 'Pesan hitung mundur yang menakutkan baru saja masuk. ⏳' },
    xpReward: 22,
    puzzle: {
      type: 'multi-step',
      intro: { en: 'An email says: "Your account will be deleted in 1 hour unless you click this link."', id: 'Sebuah email bilang: "Akunmu akan dihapus dalam 1 jam kecuali kamu klik tautan ini."' },
      steps: [
        {
          id: 'step1',
          prompt: { en: 'Is this urgency a red flag?', id: 'Apakah rasa terburu-buru ini tanda bahaya?' },
          options: [
            { id: 'yes', emoji: '🚩', label: { en: 'Yes, urgency is a classic scam trick', id: 'Ya, rasa terburu-buru itu trik penipuan klasik' } },
            { id: 'no', emoji: '👍', label: { en: 'No, real companies always rush you', id: 'Tidak, perusahaan asli selalu terburu-buru' } },
          ],
          answerId: 'yes',
        },
        {
          id: 'step2',
          prompt: { en: 'The link goes to "schooI-portal-login.com" instead of the real domain. What do you do?', id: 'Tautannya menuju "sekoIah-portal-login.com", bukan domain asli. Apa yang kamu lakukan?' },
          options: [
            { id: 'no-click2', emoji: '🛑', label: { en: "Don't click it, report it", id: 'Jangan klik, laporkan' } },
            { id: 'click2', emoji: '👆', label: { en: 'Click it to see what happens', id: 'Klik untuk melihat apa yang terjadi' } },
          ],
          answerId: 'no-click2',
        },
      ],
    },
  },
  {
    id: 'scams-6',
    worldId: 'scams',
    number: 6,
    title: { en: 'A Friend\'s Weird Link', id: 'Tautan Aneh dari Teman' },
    mascotMessage: { en: 'This link doesn\'t sound like your friend at all. 🤖', id: 'Tautan ini sama sekali tidak terdengar seperti temanmu. 🤖' },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'If a friend\'s account suddenly sends you a weird link out of character for them, their account could be hacked, and you shouldn\'t assume it\'s really them.',
        id: 'Jika akun temanmu tiba-tiba mengirim tautan aneh yang tidak seperti biasanya, akunnya bisa saja diretas, dan kamu tidak boleh langsung yakin itu benar-benar mereka.',
      },
      answer: true,
    },
  },
  {
    id: 'scams-7',
    worldId: 'scams',
    number: 7,
    title: { en: 'Red Flag or Normal?', id: 'Tanda Bahaya atau Normal?' },
    mascotMessage: { en: 'Sort each message snippet into the right pile. 🚩', id: 'Kelompokkan setiap potongan pesan ke tumpukan yang tepat. 🚩' },
    xpReward: 22,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Which of these are red flags for a scam?', id: 'Mana dari ini yang menjadi tanda bahaya penipuan?' },
      items: [
        { id: 'urgent2', emoji: '⏰', label: { en: '"Act now or else!"', id: '"Bertindak sekarang atau!"' } },
        { id: 'update2', emoji: '📲', label: { en: '"Your app was updated."', id: '"Aplikasimu telah diperbarui."' } },
        { id: 'password2', emoji: '🔑', label: { en: '"Enter your password to verify."', id: '"Masukkan kata sandi untuk verifikasi."' } },
        { id: 'shortlink', emoji: '🔗', label: { en: 'A strange shortened link from a stranger', id: 'Tautan pendek aneh dari orang asing' } },
        { id: 'normal-msg', emoji: '💬', label: { en: 'A normal message from a friend you know', id: 'Pesan biasa dari teman yang kamu kenal' } },
      ],
      correctIds: ['urgent2', 'password2', 'shortlink'],
    },
  },
  {
    id: 'scams-8',
    worldId: 'scams',
    number: 8,
    title: { en: 'Not Sure About a Link', id: 'Tidak Yakin dengan Tautan' },
    mascotMessage: { en: 'When in doubt, what\'s the smartest move? 🤔', id: 'Kalau ragu, apa langkah paling cerdas? 🤔' },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You\'re not sure if a link is safe. What\'s the smartest move before clicking?',
        id: 'Kamu tidak yakin apakah sebuah tautan aman. Apa langkah paling cerdas sebelum mengeklik?',
      },
      options: [
        { id: 'check-first', emoji: '🔍', label: { en: 'Check the real address, or ask an adult', id: 'Periksa alamat aslinya, atau tanya orang dewasa' } },
        { id: 'click-fast', emoji: '⚡', label: { en: 'Click it fast before it expires', id: 'Klik cepat sebelum kadaluarsa' } },
        { id: 'click-curious', emoji: '🤷', label: { en: "Click it — you're just curious", id: 'Klik saja — kamu penasaran' } },
        { id: 'share-first', emoji: '📤', label: { en: 'Share it with friends first to see', id: 'Bagikan ke teman dulu untuk melihat' } },
      ],
      answerId: 'check-first',
    },
  },
  {
    id: 'scams-9',
    worldId: 'scams',
    number: 9,
    title: { en: 'Spot It and Stop It', id: 'Kenali dan Hentikan' },
    mascotMessage: { en: 'The final scam message — put it all together! 🏆', id: 'Pesan penipuan terakhir — gabungkan semua yang kamu tahu! 🏆' },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: { en: 'A message says: "URGENT! You won a prize! Click this link now to claim it before it\'s gone!"', id: 'Sebuah pesan bilang: "PENTING! Kamu menang hadiah! Klik tautan ini sekarang sebelum hilang!"' },
      steps: [
        {
          id: 'step1',
          prompt: { en: 'What scam signals do you spot?', id: 'Tanda penipuan apa yang kamu kenali?' },
          options: [
            { id: 'signals', emoji: '🚩', label: { en: 'Urgency + a surprise prize + a link', id: 'Terburu-buru + hadiah kejutan + tautan' } },
            { id: 'nothing', emoji: '🤷', label: { en: 'Nothing looks unusual', id: 'Tidak ada yang aneh' } },
          ],
          answerId: 'signals',
        },
        {
          id: 'step2',
          prompt: { en: 'What\'s the right action?', id: 'Apa tindakan yang benar?' },
          options: [
            { id: 'right-action', emoji: '🛡️', label: { en: "Don't click, tell an adult, don't reply", id: 'Jangan klik, beri tahu orang dewasa, jangan balas' } },
            { id: 'wrong-action', emoji: '👆', label: { en: 'Click it to see if it\'s real', id: 'Klik untuk melihat apakah asli' } },
          ],
          answerId: 'right-action',
        },
      ],
    },
  },
]
