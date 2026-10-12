<script setup lang="ts">
const lines = [
  '10 10 6 4 3',
  '..#.....#.',
  '..........',
  '##.#......',
  '#.##....#.',
  '.##.#.....',
  '........#.',
  '.#......#.',
  '.#........',
  '...#......',
  '#.#.......',
  'L 2',
  'R 1',
  'L 4',
]
const [H, W, startY, startX, N] = lines[0].split(' ').map(Number)
const map: string[] = []

for (let y = 0; y < H; y++) {
  map.push(lines[y + 1])
}

let y = startY
let x = startX

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

let directionIndex = 0
const answer: string[] = []

for (let i = 0; i < N; i++) {
  const [move, length] = lines[H + 1 + i].split(' ')

  if (move === 'L') {
    directionIndex = (directionIndex + 3) % 4
  }
  else {
    directionIndex = (directionIndex + 1) % 4
  }

  const [dy, dx] = directions[directionIndex]
  let canMove = true

  for (let step = 0; step < Number(length); step++) {
    const nextY = y + dy
    const nextX = x + dx

    if (nextY < 0 || nextY >= H || nextX < 0 || nextX >= W || map[nextY][nextX] === '#') {
      canMove = false
      break
    }

    y = nextY
    x = nextX
  }

  answer.push(`${y} ${x}`)

  if (!canMove) {
    answer.push('Stop')
    break
  }
}

console.log(answer.join('\n'))
</script>
