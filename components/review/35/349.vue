<script setup lang="ts">
const lines = [
  '7 3 2 1 5',
  '..#',
  '...',
  '...',
  '...',
  '..#',
  '.#.',
  '##.',
  'L',
  'L',
  'L',
  'L',
  'L',

]
const [H, W, sy, sx, N] = lines[0].split(' ').map(Number)

const map: string[] = []
for (let i = 0; i < H; i++) {
  map.push(lines[i + 1])
}

let y = sy
let x = sx

let dir = 0

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

const answer: string[] = []

for (let i = 0; i < N; i++) {
  const move = lines[H + 1 + i]

  if (move === 'L') {
    dir = (dir + 3) % 4
  }
  else {
    dir = (dir + 1) % 4
  }

  const ny = y + dy[dir]
  const nx = x + dx[dir]

  if (ny < 0 || ny >= H || nx < 0 || nx >= W || map[ny][nx] === '#') {
    answer.push('Stop')
    break
  }

  y = ny
  x = nx

  answer.push(`${y} ${x}`)
}

console.log(answer.join('\n'))
</script>
