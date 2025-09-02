<script setup lang="ts">
const lines = [
  '26',
  '6',
  '6',
  '10',
  '9',
]
const K = Number(lines[0])
const A = lines.slice(1).map(Number)
let found = false

for (let bit = 0; bit < (1 << 4); bit++) {
  let sum = 0
  for (let i = 0; i < 4; i++) {
    if (bit & (1 << i)) {
      sum += A[i]
    }
  }
  if (sum === K) {
    found = true
    break
  }
}

console.log(found ? 'Yes' : 'No')
</script>
