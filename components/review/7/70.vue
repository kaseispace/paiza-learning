<script setup lang="ts">
const lines = [
  '3',
  '-99 -59 99',
]
const n = Number(lines[0])
const A = lines[1].split(' ').map(Number)

let maxSum = -Infinity
let bestIndex = 0

for (let i = 0; i <= n - 3; i++) {
  const sum = A[i] + A[i + 1] + A[i + 2]
  if (sum > maxSum) {
    maxSum = sum
    bestIndex = i
  }
}

console.log(bestIndex + 1)
</script>
