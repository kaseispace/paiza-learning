<script setup lang="ts">
const lines = [
  '10 10 5 5 22',
  '........#.',
  '..........',
  '..........',
  '..........',
  '#.........',
  '..........',
  '..........',
  '........#.',
  '..........',
  '..........',
  '0 L',
  '3 R',
  '4 L',
  '7 L',
  '10 R',
  '12 R',
  '21 L',
  '24 L',
  '26 R',
  '28 R',
  '35',
]
const [H, W, sy, sx, N] = lines[0].split(' ').map(Number)
const map = lines.slice(1, H + 1)

const turns = new Map(lines.slice(H + 1, H + 1 + N).map((line) => {
  const [t, d] = line.split(' ')
  return [Number(t), d]
}),
)

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

let y = sy
let x = sx
let dir = 0

const result: string[] = []

for (let time = 0; time < 100; time++) {
  if (turns.has(time)) {
    const turn = turns.get(time)

    if (turn === 'L') {
      dir = (dir + 3) % 4
    }
    else {
      dir = (dir + 1) % 4
    }
  }

  const ny = y + dy[dir]
  const nx = x + dx[dir]

  if (ny < 0 || ny >= H || nx < 0 || nx >= W || map[ny][nx] === '#') {
    result.push('Stop')
    break
  }

  y = ny
  x = nx

  result.push(`${y} ${x}`)
}

console.log(result.join('\n'))
</script>
