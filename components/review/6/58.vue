<script setup lang="ts">
const lines = [
  '3',
  'add 264',
  'add 742',
  'add 737',
]
const operations = lines.slice(1)
const shelf: number[] = []

for (const op of operations) {
  const parts = op.split(' ')
  if (parts[0] === 'add') {
    shelf.push(Number(parts[1]))
  }
  else if (parts[0] === 'buy') {
    const count = Number(parts[1])
    for (let i = 0; i < count; i++) {
      shelf.shift()
    }
  }
}

for (const item of shelf) {
  console.log(item)
}
</script>
