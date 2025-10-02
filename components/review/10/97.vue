<script setup lang="ts">
const lines = [
  '3 3',
  '1 2',
  '2 3',
  '3 1',
]
const [N] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const matrix: number[][] = Array.from({ length: N }, () => Array(N).fill(0))
const list: number[][] = Array.from({ length: N }, () => [])

for (const [a, b] of edges) {
  matrix[a - 1][b - 1] = 1
  list[a - 1].push(b - 1)
}

for (const row of matrix) {
  console.log(row.join(''))
}

for (const neighbors of list) {
  neighbors.sort((a, b) => a - b)
  console.log(neighbors.join(''))
}
</script>
