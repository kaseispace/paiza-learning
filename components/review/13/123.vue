<script setup lang="ts">
const lines = [
  '17 13',
  '10',
  '1 1',
  '1 2',
  '1 3',
  '1 4',
  '1 5',
  '2 4',
  '2 7',
  '2 2',
  '2 1',
  '2 6',
]
const [a, b] = lines[0].split(' ').map(Number)
const queries = lines.slice(2)

const table: number[][] = Array.from({ length: 100 }, () => [])

for (const line of queries) {
  const [type, xStr] = line.split(' ')
  const x = parseInt(xStr)
  const h = (a * x + b) % 100

  if (type === '1') {
    table[h].push(x)
  }
  else if (type === '2') {
    const found = table[h].includes(x)
    console.log(found ? 'Yes' : 'No')
  }
}

for (const bucket of table) {
  console.log(bucket.join(' '))
}
</script>
