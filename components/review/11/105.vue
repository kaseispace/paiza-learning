<script setup lang="ts">
const lines = [
  '4 2 1 4',
  '1 2 1',
  '3 4 1',
]
const [N, , X, Y] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const fromX: number[] = Array(N).fill(999)
const toY: number[] = Array(N).fill(999)

for (const [a, b, c] of edges) {
  if (a === X) {
    fromX[b - 1] = c
  }
  else if (b === Y) {
    toY[a - 1] = c
  }
}

let minDist = 999
const result: number[] = []

for (let i = 0; i < N; i++) {
  if (fromX[i] !== 999 && toY[i] !== 999) {
    const dist = fromX[i] + toY[i]
    if (dist < minDist) {
      minDist = dist
      result.length = 0
      result.push(i + 1)
    }
    else if (dist === minDist) {
      result.push(i + 1)
    }
  }
}

console.log(result.length > 0 ? result.sort((a, b) => a - b).join(' ') : '999')
</script>
