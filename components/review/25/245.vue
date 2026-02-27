<script setup lang="ts">
const lines = [
  '3 5',
  '5',
  '4',
  '4',

]
const [N, X] = lines[0].split(' ').map(Number)

let maxPrice = 0

for (let i = 1; i <= N; i++) {
  const price = Number(lines[i])
  if (price <= X && price > maxPrice) {
    maxPrice = price
  }
}

console.log(X - maxPrice)
</script>
