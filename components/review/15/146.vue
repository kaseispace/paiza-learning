<script setup lang="ts">
const lines = [
  '3 5',
  '__\\_/',
  '___/_',
  '\\/\\_/',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1)

let x = 0, y = 0
let dx = 0, dy = 1
let count = 0

while (0 <= x && x < H && 0 <= y && y < W) {
  count++
  const cell = grid[x][y]

  if (cell === '/') {
    [dx, dy] = [-dy, -dx]
  }
  else if (cell === '\\') {
    [dx, dy] = [dy, dx]
  }
  x += dx
  y += dy
}

console.log(count)
</script>
