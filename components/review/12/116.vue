<script setup lang="ts">
const lines = [
  '3 3 1 1 E',
  '..#',
  '..#',
  '...',
]
const [H, W, sy, sx, m] = lines[0].split(' ')
const map = lines.slice(1)
const h = Number(H)
const w = Number(W)
const y = Number(sy)
const x = Number(sx)

let dy = 0, dx = 0
if (m === 'N') dy = -1
if (m === 'S') dy = 1
if (m === 'E') dx = 1
if (m === 'W') dx = -1

const ny = y + dy
const nx = x + dx

if (ny >= 0 && ny < h && nx >= 0 && nx < w && map[ny][nx] === '.') {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
