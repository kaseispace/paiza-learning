<script setup lang="ts">
const lines = [
  '4',
  '17',
  '188',
  '38',
  '77777',
]
const n = Number(lines[0])
const table: number[][] = Array.from({ length: 10 }, () => [])

for (let i = 1; i <= n; i++) {
  const x = Number(lines[i])
  const h = x % 10
  table[h].push(x)
}

for (let i = 0; i < 10; i++) {
  console.log(table[i].join(' '))
}
</script>
