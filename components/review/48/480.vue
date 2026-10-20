<script setup lang="ts">
const lines = [
  '4',
  '17',
  '188',
  '38',
  '77777',
]
const n = Number(lines[0])
const table: number[] = new Array(10).fill(-1)

for (let i = 1; i <= n; i++) {
  const x = Number(lines[i])
  let h = x % 10

  while (table[h] !== -1) {
    h = (h + 1) % 10
  }

  table[h] = x
}

console.log(table.join('\n'))
</script>
