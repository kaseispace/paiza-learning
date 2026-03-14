<script setup lang="ts">
const lines = [
  '3 4 1',
  '3',
  '4',
  '5',
]
const [N, X, K] = lines[0].split(' ').map(Number)
const x: number[] = []

for (let i = 0; i < N; i++) {
  x.push(Number(lines[1 + i]))
}

let bestSum = 0
const total = 1 << N

for (let mask = 0; mask < total; mask++) {
  let cnt = 0
  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) cnt++
  }

  if (cnt !== K) continue

  let sum = 0
  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) sum += x[i]
  }

  if (sum <= X && sum > bestSum) {
    bestSum = sum
  }
}

console.log(X - bestSum)
</script>
