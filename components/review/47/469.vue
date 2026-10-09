<script setup lang="ts">
const lines = [
  '8 3',
  '813 138 318 111 888 333 381 831',
]
const [N, K] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const cumulativeSum: number[] = Array(N + 1).fill(0)

for (let i = 0; i < N; i++) {
  cumulativeSum[i + 1] = cumulativeSum[i] + a[i]
}

let answer = 0

for (let left = 0; left <= N - K; left++) {
  const right = left + K

  const sum = cumulativeSum[right] - cumulativeSum[left]

  answer = Math.max(answer, sum)
}

console.log(answer)
</script>
