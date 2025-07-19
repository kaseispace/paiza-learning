<script setup lang="ts">
const lines = ['100.02651']
const r = Number(lines[0])

const countCoveredSquares = (r: number) => {
  const r2 = r * r
  let count = 0
  const limit = Math.ceil(r)

  for (let i = -limit; i < limit; i++) {
    for (let j = -limit; j < limit; j++) {
      const minDist = minDistanceToSquare(i, j)
      if (minDist <= r2) {
        count++
      }
    }
  }

  return count
}

const minDistanceToSquare = (x: number, y: number) => {
  let dx = 0, dy = 0

  if (0 < x) dx = x
  else if (0 > x + 1) dx = 0 - (x + 1)

  if (0 < y) dy = y
  else if (0 > y + 1) dy = 0 - (y + 1)

  return dx * dx + dy * dy
}

console.log(countCoveredSquares(r))
</script>
