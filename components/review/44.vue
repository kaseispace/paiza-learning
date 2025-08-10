<script setup lang="ts">
const lines = [
  '4 2',
  '2 3 4 1',
]
const [N, X] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
let sum = 0

for (let i = 0; i < X; i++) {
  sum += A[i]
}

let maxSum = sum
let leftValue = A[0]

for (let i = X; i < N; i++) {
  sum = sum - A[i - X] + A[i]
  if (sum > maxSum) {
    maxSum = sum
    leftValue = A[i - X + 1]
  }
}

console.log(`${maxSum} ${leftValue}`)
</script>
