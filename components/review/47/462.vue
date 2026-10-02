<script setup lang="ts">
const lines = [
  '3 5',
  '2 2 3',
  '2 2 3',
  '2 1 2',
  '2 5 6',
  '1 5 7',
]
const [, Q] = lines[0].split(' ').map(Number)
let ballPosition = 1

for (let i = 0; i < Q; i++) {
  const [operation, X, Y] = lines[i + 1].split(' ').map(Number)

  if (operation === 1) {
    if (ballPosition === X) {
      ballPosition = Y
    }
    else if (ballPosition === Y) {
      ballPosition = X
    }
  }
  else if (ballPosition >= Y) {
    ballPosition++
  }
}

console.log(ballPosition)
</script>
