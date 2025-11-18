<script setup lang="ts">
const lines = [
  '4',
  '1 2 3 4',
  '2 3 4 1',
  '3 4 1 2',
  '4 1 2 3',
]
const N = Number(lines[0])
const A: number[][] = []

for (let i = 0; i < N; i++) {
  A[i] = lines[i + 1].split(' ').map(Number)
}

let maxSum = 0

for (let i = 0; i < N; i++) {
  const sum = A[i].reduce((acc, v) => acc + v, 0)
  if (sum > maxSum) maxSum = sum
}

for (let j = 0; j < N; j++) {
  let sum = 0
  for (let i = 0; i < N; i++) sum += A[i][j]
  if (sum > maxSum) maxSum = sum
}

let diag1 = 0
for (let i = 0; i < N; i++) diag1 += A[i][i]
if (diag1 > maxSum) maxSum = diag1

let diag2 = 0
for (let i = 0; i < N; i++) diag2 += A[i][N - 1 - i]
if (diag2 > maxSum) maxSum = diag2

console.log(maxSum)
</script>
