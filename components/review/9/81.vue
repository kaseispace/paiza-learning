<script setup lang="ts">
const lines = [
  '4 4',
  'SSSD',
  'SLDS',
  'SSSS',
  'UUSL',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H).map(s => s.trim())

let x = 0, y = 0
let dx = 1, dy = 0
let count = 0

while (0 <= x && x < W && 0 <= y && y < H) {
  count++
  const c = grid[y][x]
  if (c === 'R') {
    dx = 1
    dy = 0
  }
  else if (c === 'L') {
    dx = -1
    dy = 0
  }
  else if (c === 'U') {
    dx = 0
    dy = -1
  }
  else if (c === 'D') {
    dx = 0
    dy = 1
  }

  x += dx
  y += dy
}

console.log(count)
</script>
