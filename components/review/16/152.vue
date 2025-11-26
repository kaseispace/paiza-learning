<script setup lang="ts">
const lines = [
  '5 100',
  '99',
  '98',
  '97',
  '96',
  '5',
]
const [N, X] = lines[0].split(' ').map(Number)
const w = lines.slice(1).map(Number)

let maxSum = 0

for (let mask = 0; mask < (1 << N); mask++) {
  let sum = 0
  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) sum += w[i]
  }

  if (sum <= X && sum > maxSum) {
    maxSum = sum
  }
}

console.log(maxSum)
</script>
