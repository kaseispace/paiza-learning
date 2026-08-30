<script setup lang="ts">
const lines = [
  '2 3',
  '3 -2',
]
const [a1, a2] = lines[0].split(' ').map(Number)
const [b1, b2] = lines[1].split(' ').map(Number)

const dotProduct = a1 * b1 + a2 * b2

if (dotProduct === 0) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
