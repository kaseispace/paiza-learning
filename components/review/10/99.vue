<script setup lang="ts">
const lines = [
  '4',
  '1 10 100 1000',
  '3',
  '1 10',
  '1 1000',
  '5 105',
]
const prices = lines[1].split(' ').map(Number)
const queries = lines.slice(3).map(line => line.split(' ').map(Number))

for (const [l, r] of queries) {
  const count = prices.filter(p => l <= p && p <= r).length
  console.log(count)
}
</script>
