<script setup lang="ts">
const lines = [
  '5 5',
  '1 2',
  '1 3',
  '2 4',
  '2 5',
  '4 5',
]
const [n, m] = lines[0].split(' ').map(Number)
const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0))

for (let i = 1; i <= m; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  matrix[a - 1][b - 1] = 1
  matrix[b - 1][a - 1] = 1
}

for (let i = 0; i < n; i++) {
  console.log(matrix[i].join(' '))
}
</script>
