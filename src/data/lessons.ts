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
    id: 'jungle-1',
    worldId: 'jungle',
    number: 1,
    title: 'First Steps',
    story: 'Bingo the monkey just woke up and spotted a yummy banana! It\'s 3 steps to the right — watch him walk all the way there!',
    mascotMessage: "Hi! I'm Bingo! 🐒 I see a banana over there! Use ➡️ Move Right blocks to walk me to it!",
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
      "Drag the ➡️ Move Right block into the workspace!",
      "The banana is 3 steps to the right. Use 3 ➡️ Move Right blocks!",
    ],
    starThresholds: [5, 3],
  },
  {
    id: 'jungle-2',
    worldId: 'jungle',
    number: 2,
    title: 'Morning Walk',
    story: 'Bingo is still hungry! There are more bananas further down the path. He needs to walk a bit further today.',
    mascotMessage: "The banana is further this time! I need to move right a few times. Can you help? 🍌🍌🍌",
    gridRows: 5,
    gridCols: 6,
    cells: emptyGrid(5, 6),
    startPos: [2, 0],
    items: [{ id: 'b1', pos: [2, 3] }],
    goalType: 'collect_all',
    availableCategories: ['move'],
    optimalBlockCount: 3,
    xpReward: 60,
    hints: [
      "Count how many steps to reach the banana!",
      "The banana is 3 steps to the right. Use 3 ➡️ blocks!",
    ],
    starThresholds: [5, 3],
  },
  {
    id: 'jungle-3',
    worldId: 'jungle',
    number: 3,
    title: 'Down the Slope',
    story: 'The jungle has hills! Bingo needs to go right AND down to find a banana hidden below.',
    mascotMessage: "Whoa, it's not just right this time! I need to go right AND down. Try combining blocks! 🌿",
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
      "You can mix different move blocks!",
      "Go right 3 times, then down 2 times!",
    ],
    starThresholds: [7, 5],
  },
  {
    id: 'jungle-4',
    worldId: 'jungle',
    number: 4,
    title: 'Two Bananas!',
    story: 'Today is Bingo\'s lucky day — there are TWO bananas! He needs to collect both. Plan your path carefully!',
    mascotMessage: "TWO bananas! 🍌🍌 I need to collect both! Think about the order — where should I go first?",
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
    optimalBlockCount: 7,
    xpReward: 80,
    hints: [
      "Collect the first banana, then plan the path to the second!",
      "Go right 3 times to get banana 1, then down 3 to get banana 2!",
    ],
    starThresholds: [10, 7],
  },
  {
    id: 'jungle-5',
    worldId: 'jungle',
    number: 5,
    title: 'Jungle Maze',
    story: 'Bingo finds a banana at the end of a winding jungle path. Navigate through the twists and turns!',
    mascotMessage: "This is tricky! 😅 The path goes right, down, right, down... I need your help to figure it out!",
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
      "Try to plan the path before coding it!",
      "Count: right 4, down 4 = 8 blocks total. Or find a shorter path!",
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'jungle-6',
    worldId: 'jungle',
    number: 6,
    title: 'Banana Bonanza',
    story: 'The jungle is full of bananas today! Bingo needs to collect ALL of them. This is the biggest challenge yet!',
    mascotMessage: "Wow, so many bananas! 🍌🍌🍌 Can you plan a path that collects them all? You're so smart!",
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
    optimalBlockCount: 12,
    xpReward: 100,
    hints: [
      "Plan the full path before adding blocks!",
      "Try right 2, down 2, right 2, down 2, right 2. That's 10 moves!",
    ],
    starThresholds: [16, 12],
  },

  // ─────────────────────────────────────────────
  // WORLD 2: SPACE STATION — Loops
  // ─────────────────────────────────────────────
  {
    id: 'space-1',
    worldId: 'space',
    number: 1,
    title: 'Star Line',
    story: 'Astro the rocket is on a mission to collect stars! They\'re lined up in a row. This looks like a pattern...',
    mascotMessage: "Stars in a line! 🚀⭐⭐⭐ Instead of moving right LOTS of times, try using the REPEAT block! It's like magic!",
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
    optimalBlockCount: 3,
    xpReward: 100,
    hints: [
      "Instead of 8 blocks, use REPEAT! Put 'Move Right' inside the repeat block.",
      "Set repeat to 4, and put 'Move Right' inside. That collects all stars in 3 blocks!",
    ],
    starThresholds: [8, 3],
  },
  {
    id: 'space-2',
    worldId: 'space',
    number: 2,
    title: 'Orbit Path',
    story: 'Astro needs to travel down a column of stars. They\'re all in a vertical line this time!',
    mascotMessage: "Stars going DOWN! Can you use repeat again but with Move Down this time? 🚀",
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
    optimalBlockCount: 3,
    xpReward: 110,
    hints: [
      "The stars are all below! Use repeat with Move Down.",
      "Repeat 5 times with Move Down inside. That's only 3 blocks!",
    ],
    starThresholds: [10, 3],
  },
  {
    id: 'space-3',
    worldId: 'space',
    number: 3,
    title: 'Star Square',
    story: 'Astro spotted stars forming a square border in space! Collect them all by moving in a square pattern.',
    mascotMessage: "Whoa, they make a SQUARE! 🌟 Use repeat for each side! Each side has the same number of steps!",
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
    optimalBlockCount: 12,
    xpReward: 120,
    hints: [
      "Think of it as 4 sides of a square!",
      "Use 4 repeat blocks: repeat 3 right, repeat 3 down, repeat 3 left, repeat 3 up!",
    ],
    starThresholds: [20, 12],
  },
  {
    id: 'space-4',
    worldId: 'space',
    number: 4,
    title: 'Asteroid Field',
    story: 'Astro must navigate through an asteroid field and collect scattered stars. Watch out for obstacles!',
    mascotMessage: "Asteroids everywhere! ☄️ Move carefully — you can\'t go through the rocky asteroids!",
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
    optimalBlockCount: 16,
    xpReward: 130,
    hints: [
      "Plan a path around the asteroids!",
      "You can't go through asteroids. Find the open paths!",
    ],
    starThresholds: [24, 16],
  },
  {
    id: 'space-5',
    worldId: 'space',
    number: 5,
    title: 'Constellation',
    story: 'Astro discovered a beautiful constellation pattern made of stars. Collect them all in the fewest moves!',
    mascotMessage: "A constellation! ✨ This one needs clever loops. Think about the pattern before coding!",
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
    optimalBlockCount: 20,
    xpReward: 140,
    hints: [
      "Look for patterns in the star positions!",
      "You can move to each star using a combination of moves. Plan a route first!",
    ],
    starThresholds: [30, 20],
  },
  {
    id: 'space-6',
    worldId: 'space',
    number: 6,
    title: 'Space Marathon',
    story: 'Final space mission! Astro needs to loop around a giant ring of stars. The biggest loop challenge yet!',
    mascotMessage: "The BIGGEST loop yet! 🚀 Can you use just a few blocks to collect ALL these stars? Challenge accepted? 😄",
    gridRows: 7,
    gridCols: 8,
    cells: emptyGrid(7, 8),
    startPos: [0, 0],
    items: Array.from({ length: 6 }, (_, i) => ({ id: `s${i + 1}`, pos: [0, i + 1] as [number, number] })),
    goalType: 'collect_all',
    availableCategories: ['move', 'loops'],
    optimalBlockCount: 3,
    xpReward: 150,
    hints: [
      "All stars are in a line — perfect for repeat!",
      "Repeat 6 times: move right. That's just 3 blocks!",
    ],
    starThresholds: [10, 3],
  },

  // ─────────────────────────────────────────────
  // WORLD 3: OCEAN DEEP — Variables
  // ─────────────────────────────────────────────
  {
    id: 'ocean-1',
    worldId: 'ocean',
    number: 1,
    title: 'Count the Gems',
    story: 'Finn the diver found gems! He wants to count how many are in the row. Let\'s use a variable to count!',
    mascotMessage: "Use a VARIABLE to count gems as you collect them! A variable is like a box that stores a number. 💎",
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
    optimalBlockCount: 6,
    xpReward: 150,
    hints: [
      "Create a variable called 'count' and set it to 0!",
      "Each time you collect a gem, add 1 to 'count'!",
    ],
    starThresholds: [10, 6],
  },
  {
    id: 'ocean-2',
    worldId: 'ocean',
    number: 2,
    title: 'Deep Dive',
    story: 'The gems are scattered! Finn needs to store his position in variables to navigate efficiently.',
    mascotMessage: "Variables can store your position too! 🤿 This is like giving your program a memory!",
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
    optimalBlockCount: 15,
    xpReward: 160,
    hints: [
      "Plan your path from gem to gem!",
      "Go to gem 1 first, then gem 2, then gem 3!",
    ],
    starThresholds: [22, 15],
  },
  {
    id: 'ocean-3',
    worldId: 'ocean',
    number: 3,
    title: 'Treasure Hunt',
    story: 'A treasure chest awaits at the bottom of the ocean! Finn must count gems along the way to unlock it.',
    mascotMessage: "Use a variable to count gems! When count reaches 3, the treasure chest unlocks! 🐚",
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
    optimalBlockCount: 18,
    xpReward: 170,
    hints: [
      "Collect all gems to unlock the treasure!",
      "Plan a route: go to each gem, collecting as you go!",
    ],
    starThresholds: [26, 18],
  },
  {
    id: 'ocean-4',
    worldId: 'ocean',
    number: 4,
    title: 'Coral Reef',
    story: 'The coral reef is full of hidden gems! Some paths are blocked by coral. Finn must find the right way.',
    mascotMessage: "Coral blocks some paths! 🪸 Navigate around them carefully!",
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
      "Avoid the coral obstacles!",
      "Find paths around the coral to reach each gem!",
    ],
    starThresholds: [30, 22],
  },
  {
    id: 'ocean-5',
    worldId: 'ocean',
    number: 5,
    title: 'Ocean Champion',
    story: 'The final ocean challenge! Finn must collect gems in a spiral pattern using smart variables and loops.',
    mascotMessage: "The final ocean level! 🌊 Use everything you\'ve learned — moves, loops, AND variables! You got this! 🤿",
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
    optimalBlockCount: 30,
    xpReward: 200,
    hints: [
      "Start from the center and plan your route to each gem!",
      "Visit each corner and the middle left gem!",
    ],
    starThresholds: [45, 30],
  },

  // ─────────────────────────────────────────────
  // WORLD 4: CRYSTAL CAVES — Conditions (If/Else)
  // ─────────────────────────────────────────────
  {
    id: 'caves-1',
    worldId: 'caves',
    number: 1,
    title: 'Magic Door',
    story: 'Zara found a magic door that only opens if she has at least 3 crystals. Use IF to check!',
    mascotMessage: "IF I have 3 crystals, the door opens! IF is like making a decision. Try it! 🧝",
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
    optimalBlockCount: 8,
    xpReward: 180,
    hints: [
      "Collect all crystals first, then check!",
      "Use IF to check if your count is 3!",
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'caves-2',
    worldId: 'caves',
    number: 2,
    title: 'Choose Your Path',
    story: 'The cave splits into two paths! Use IF-ELSE to choose the right one based on which path has crystals.',
    mascotMessage: "IF-ELSE is for choosing! IF something is true, do this. ELSE, do something different! 💜",
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
    optimalBlockCount: 14,
    xpReward: 190,
    hints: [
      "Plan the path from top to bottom!",
      "Navigate through the cave to collect all crystals!",
    ],
    starThresholds: [20, 14],
  },
  {
    id: 'caves-3',
    worldId: 'caves',
    number: 3,
    title: 'Crystal Collector',
    story: 'Magic crystals appear and disappear! Zara must use conditions to react to what she finds.',
    mascotMessage: "Conditions let you react to what\'s happening! Collect all the glowing crystals! 🔮",
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
    optimalBlockCount: 25,
    xpReward: 200,
    hints: [
      "Navigate around obstacles to reach each crystal!",
      "Plan your route carefully to avoid blocked paths!",
    ],
    starThresholds: [35, 25],
  },
  {
    id: 'caves-4',
    worldId: 'caves',
    number: 4,
    title: 'The Guardian',
    story: 'A cave guardian blocks the path! Only let past if you have exactly 5 crystals. Use conditions!',
    mascotMessage: "The guardian checks: IF crystals == 5, you can pass! Collect exactly 5! 🧝💜",
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
    optimalBlockCount: 30,
    xpReward: 210,
    hints: [
      "Collect all 5 crystals in order!",
      "Plan a route that visits each crystal position!",
    ],
    starThresholds: [42, 30],
  },
  {
    id: 'caves-5',
    worldId: 'caves',
    number: 5,
    title: 'Cave Master',
    story: 'The final cave challenge! Use everything you know — loops, variables, AND conditions — to escape the cave!',
    mascotMessage: "Final cave level! 💎 Use loops, variables, and if-else together! You're amazing! 🧝✨",
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
    optimalBlockCount: 40,
    xpReward: 250,
    hints: [
      "Navigate around obstacles to all crystals!",
      "Plan the most efficient route through the cave!",
    ],
    starThresholds: [55, 40],
  },

  // ─────────────────────────────────────────────
  // WORLD 5: ROBOT FACTORY — Functions
  // ─────────────────────────────────────────────
  {
    id: 'factory-1',
    worldId: 'factory',
    number: 1,
    title: 'Build a Function',
    story: 'Bolt the robot needs to assemble parts! Create a FUNCTION called "pickupGear" to reuse code!',
    mascotMessage: "A FUNCTION is like a mini-program you can use over and over! Make one and call it! 🤖⚙️",
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
    optimalBlockCount: 8,
    xpReward: 200,
    hints: [
      "Create a function, then call it multiple times!",
      "Define a function that moves right and collects, then call it twice!",
    ],
    starThresholds: [12, 8],
  },
  {
    id: 'factory-2',
    worldId: 'factory',
    number: 2,
    title: 'Assembly Line',
    story: 'The factory assembly line repeats the same task. Create a function and call it in a loop!',
    mascotMessage: "Functions in loops are super powerful! 🏭 Define once, use many times!",
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
    optimalBlockCount: 5,
    xpReward: 210,
    hints: [
      "Create a function that moves right once and collects!",
      "Then call that function in a repeat loop 5 times!",
    ],
    starThresholds: [15, 5],
  },
  {
    id: 'factory-3',
    worldId: 'factory',
    number: 3,
    title: 'Robot Helpers',
    story: 'Bolt needs helper functions to navigate complex factory floors. Define multiple functions!',
    mascotMessage: "Multiple functions working together! 🤖🤖 Each function does one job!",
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
    optimalBlockCount: 30,
    xpReward: 230,
    hints: [
      "Create functions for common move patterns!",
      "Use functions to organize your code neatly!",
    ],
    starThresholds: [45, 30],
  },
  {
    id: 'factory-4',
    worldId: 'factory',
    number: 4,
    title: 'Master Builder',
    story: 'Build a complex robot using functions with inputs! Functions can take parameters to be even more powerful.',
    mascotMessage: "Functions with INPUTS are even cooler! 🔧 Send different values to the same function!",
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
    optimalBlockCount: 35,
    xpReward: 250,
    hints: [
      "Create reusable functions to navigate to each gear!",
      "Think about which movements repeat and turn them into functions!",
    ],
    starThresholds: [50, 35],
  },
  {
    id: 'factory-5',
    worldId: 'factory',
    number: 5,
    title: 'Factory Champion',
    story: 'The biggest factory challenge! Bolt must use functions, loops, and conditions to collect all gears.',
    mascotMessage: "You\'re a function master! 🏆 Use everything you know to conquer the factory! 🤖",
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
    optimalBlockCount: 50,
    xpReward: 300,
    hints: [
      "Navigate carefully around obstacles!",
      "Use functions to organize collecting each gear!",
    ],
    starThresholds: [70, 50],
  },

  // ─────────────────────────────────────────────
  // WORLD 6: TIME PORTAL — Arrays & Lists
  // ─────────────────────────────────────────────
  {
    id: 'portal-1',
    worldId: 'portal',
    number: 1,
    title: 'Time List',
    story: 'Nova the time traveler collects time crystals and stores them in a list! Lists can hold many items at once.',
    mascotMessage: "A LIST is like a backpack that holds many things in order! Store time crystals in a list! ⏰",
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
    optimalBlockCount: 8,
    xpReward: 250,
    hints: [
      "Create a list to store collected items!",
      "Add each crystal to your list as you collect it!",
    ],
    starThresholds: [14, 8],
  },
  {
    id: 'portal-2',
    worldId: 'portal',
    number: 2,
    title: 'Time Warp',
    story: 'The time portals shuffle the crystals! Nova must use a list to track which ones she\'s visited.',
    mascotMessage: "Use a list to track where you\'ve been! Lists remember the order! 🌀",
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
    optimalBlockCount: 25,
    xpReward: 280,
    hints: [
      "Use a list to keep track of collected crystals!",
      "Navigate to each crystal and add it to your list!",
    ],
    starThresholds: [38, 25],
  },
  {
    id: 'portal-3',
    worldId: 'portal',
    number: 3,
    title: 'Dimension Jumper',
    story: 'Nova must jump between dimensions! Each dimension has crystals. Use lists to organize which to visit.',
    mascotMessage: "Lists make it easy to organize information! 🧑‍🚀 Store your plan in a list!",
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
    optimalBlockCount: 40,
    xpReward: 300,
    hints: [
      "Navigate around obstacles carefully!",
      "Use lists to organize your route planning!",
    ],
    starThresholds: [60, 40],
  },
  {
    id: 'portal-4',
    worldId: 'portal',
    number: 4,
    title: 'Master of Time',
    story: 'The ultimate challenge! Nova must use arrays, loops, functions, and conditions to collect all time crystals!',
    mascotMessage: "This is the FINAL LEVEL! 🌟 Use EVERYTHING you've learned! You're incredible! ⏰🧑‍🚀",
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
    optimalBlockCount: 60,
    xpReward: 400,
    hints: [
      "Plan your full route before coding!",
      "Use functions, loops, and conditions together!",
    ],
    starThresholds: [90, 60],
  },
]

export function getLessonsByWorld(worldId: string): Lesson[] {
  return LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find(l => l.id === id)
}
