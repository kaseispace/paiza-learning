<script setup lang="ts">
const lines = [
  '3 3',
  '2 2',
  '2#2',
  '#1#',
  '2#2',
]
const [H, W] = lines[0].split(' ').map(Number)
const [Y, X] = lines[1].split(' ').map(Number)
const grid = lines.slice(2).map(line => line.split(''))

const y0 = Y - 1
const x0 = X - 1

const directionScores: [string, number][] = []

// 北
let sumN = 0
for (let y = 0; y < y0; y++) {
  for (let x = 0; x < W; x++) {
    const cell = grid[y][x]
    if (cell !== '#') sumN += Number(cell)
  }
}
directionScores.push(['N', sumN])

// 東
let sumE = 0
for (let y = 0; y < H; y++) {
  for (let x = x0 + 1; x < W; x++) {
    const cell = grid[y][x]
    if (cell !== '#') sumE += Number(cell)
  }
}
directionScores.push(['E', sumE])

// 南
let sumS = 0
for (let y = y0 + 1; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const cell = grid[y][x]
    if (cell !== '#') sumS += Number(cell)
  }
}
directionScores.push(['S', sumS])

// 西
let sumW = 0
for (let y = 0; y < H; y++) {
  for (let x = 0; x < x0; x++) {
    const cell = grid[y][x]
    if (cell !== '#') sumW += Number(cell)
  }
}
directionScores.push(['W', sumW])

// 方角優先
directionScores.sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1]
  const scores: { [key: string]: number } = { N: 10, E: 5, S: 7, W: 3 }
  return scores[a[0]] - scores[b[0]]
})

console.log(`${directionScores[0][0]} ${directionScores[0][1]}`)
</script>
