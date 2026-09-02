<script setup lang="ts">
const lines = ['38 47 27']
const [startX, startY, N] = lines[0].split(' ').map(Number)
let x = startX
let y = startY

const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

let directionIndex = 0
let moveLength = 1
let movedInDirection = 0
let turnCount = 0

for (let i = 0; i < N; i++) {
  x += directions[directionIndex][0]
  y += directions[directionIndex][1]

  movedInDirection++

  if (movedInDirection === moveLength) {
    movedInDirection = 0
    directionIndex = (directionIndex + 1) % 4
    turnCount++

    if (turnCount % 2 === 0) {
      moveLength++
    }
  }
}

console.log(x, y)
</script>
