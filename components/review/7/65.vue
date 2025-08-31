<script setup lang="ts">
const lines = [
  '4 3 3',
  '10 100 1',
  '10 100 11',
  '10 200 2',
  '20 200 1',
]
const [, m, k] = lines[0].split(' ').map(Number)
const table = lines.slice(1).map(line => line.split(' ').map(Number))

table.sort((rowA, rowB) => {
  for (let i = 0; i < m; i++) {
    const colA = i === 0 ? rowA[k - 1] : rowA[i - 1]
    const colB = i === 0 ? rowB[k - 1] : rowB[i - 1]
    if (colA !== colB) return colA - colB
  }
  return 0
})

for (const row of table) {
  console.log(row.join(' '))
}
</script>
