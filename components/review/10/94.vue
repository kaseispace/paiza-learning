<script setup lang="ts">
const lines = [
  '9',
  '1 2 1 3 1 4 1 5 1',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

const dp: number[] = Array(N).fill(1)

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(Math.max(...dp))
</script>
