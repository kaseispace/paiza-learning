<script setup lang="ts">
const lines = [
  '23 5 7',
  '2 6 9 10 12 15 19',
]
const [L, n, k] = lines[0].split(' ').map(Number)
const cuts = k === 0 ? [] : lines[1].split(' ').map(Number)

function canDivide(maxLength: number) {
  let currentPosition = 0
  let cutIndex = 0
  let pieceCount = 0

  while (currentPosition < L) {
    if (L - currentPosition <= maxLength) {
      pieceCount++
      break
    }

    let nextPosition = currentPosition

    while (cutIndex < k && cuts[cutIndex] <= currentPosition + maxLength) {
      nextPosition = cuts[cutIndex]
      cutIndex++
    }

    if (nextPosition === currentPosition) {
      return false
    }

    currentPosition = nextPosition
    pieceCount++

    if (pieceCount > n) {
      return false
    }
  }

  return pieceCount <= n
}

let low = 0
let high = L

while (low < high) {
  const mid = Math.floor((low + high) / 2)

  if (canDivide(mid)) {
    high = mid
  }
  else {
    low = mid + 1
  }
}

console.log(low)
</script>
