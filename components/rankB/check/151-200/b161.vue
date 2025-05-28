<script setup lang="ts">
const lines = [
  '10 10',
  '5',
  '2 2 4 2',
  '3 9 3 1',
  '5 5 6 3',
  '8 3 4 1',
  '9 7 3 1',
  '5',
  '5 5',
  '2 8',
  '7 7',
  '3 3',
  '8 3',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid: number[][] = Array.from({ length: H }, () => Array(W).fill(0))
const N = Number(lines[1])
const targets = lines.slice(2, N + 2).map(line => line.split(' ').map(Number))
const hits = lines.slice(N + 3).map(line => line.split(' ').map(Number))
let score = 0

targets.forEach(([r, c, p, q]) => {
  const newRow = r - 2
  const newCol = c - 2

  // 周り
  for (let j = newRow; j < newRow + 3; j++) {
    for (let k = newCol; k < newCol + 3; k++) {
      if (j >= 0 && j < H && k >= 0 && k < W) {
        grid[j][k] = q
      }
    }
  }

  grid[r - 1][c - 1] = p
})

hits.forEach(([a, b]) => {
  score += grid[a - 1][b - 1]
})

console.log(score)
</script>
