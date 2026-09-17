<script setup lang="ts">
const lines = [
  '3 5 1',
  'L',
]
const [startX, startY, N] = lines[0].split(' ').map(Number)

let x = startX
let y = startY

const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]

let directionIndex = 0
const answer: string[] = []

for (let i = 0; i < N; i++) {
  const move = lines[i + 1]

  if (move === 'L') {
    directionIndex = (directionIndex + 3) % 4
  }
  else {
    directionIndex = (directionIndex + 1) % 4
  }

  x += directions[directionIndex][0]
  y += directions[directionIndex][1]

  answer.push(`${x} ${y}`)
}

console.log(answer.join('\n'))
</script>
