<script setup lang="ts">
const lines = [
  '5 5',
  '1 2 4',
  '1 3 9',
  '2 4 1',
  '4 5 3',
  '5 2 3',
]
const [N] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const matrix: number[][] = Array.from({ length: N }, (_, i) =>
  Array.from({ length: N }, (_, j) => (i === j ? 0 : 999)),
)

for (const [a, b, c] of edges) {
  matrix[a - 1][b - 1] = c
}

for (const row of matrix) {
  console.log(row.join(' '))
}
</script>
