<script setup lang="ts">
const lines = [
  '3 5',
  '__\_/',
  '___/_',
  '\/\_/',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1)

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]
let dir = 0
let x = 0, y = 0
let count = 0

while (0 <= x && x < H && 0 <= y && y < W) {
  count++
  const cell = grid[x][y]
  if (cell === '/') {
    dir = [3, 2, 1, 0][dir]
  }
  else if (cell === '\\') {
    dir = [1, 0, 3, 2][dir]
  }
  x += dx[dir]
  y += dy[dir]
}

console.log(count)
</script>
