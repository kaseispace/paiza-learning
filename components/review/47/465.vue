<script setup lang="ts">
const lines = [
  '5 5',
  'S..#.',
  '1.#..',
  '.2.2.',
  '.#.#.',
  '..31G',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid: string[] = []

let start = -1
let goal = -1

for (let y = 0; y < H; y++) {
  const row = lines[y + 1]
  grid.push(row)

  for (let x = 0; x < W; x++) {
    if (row[x] === 'S') {
      start = y * W + x
    }

    if (row[x] === 'G') {
      goal = y * W + x
    }
  }
}

const cellCount = H * W
const keyStates = 1 << 9
const totalStates = cellCount * keyStates

const visited = new Uint8Array(totalStates)
const queue = new Int32Array(totalStates)

let head = 0
let tail = 0

const startState = start

visited[startState] = 1
queue[tail] = startState
tail++

let steps = 0
let answer = -1

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while (head < tail && answer === -1) {
  const levelEnd = tail

  while (head < levelEnd) {
    const state = queue[head]
    head++

    const position = state % cellCount
    const usedKeys = Math.floor(state / cellCount)

    if (position === goal) {
      answer = steps
      break
    }

    const y = Math.floor(position / W)
    const x = position % W

    for (const [dy, dx] of directions) {
      const nextY = y + dy
      const nextX = x + dx

      if (nextY < 0 || nextY >= H || nextX < 0 || nextX >= W) {
        continue
      }

      const cell = grid[nextY][nextX]

      if (cell === '#') {
        continue
      }

      let nextUsedKeys = usedKeys

      if (cell >= '1' && cell <= '9') {
        const keyBit = 1 << (Number(cell) - 1)

        if ((usedKeys & keyBit) !== 0) {
          continue
        }

        nextUsedKeys |= keyBit
      }

      const nextPosition = nextY * W + nextX
      const nextState = nextUsedKeys * cellCount + nextPosition

      if (visited[nextState] === 1) {
        continue
      }

      visited[nextState] = 1
      queue[tail] = nextState
      tail++
    }
  }

  steps++
}

console.log(answer)
</script>
