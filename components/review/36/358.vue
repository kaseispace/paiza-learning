<script setup lang="ts">
const lines = [
  '5 4',
  '9 12 1 29 8',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
const dp: number[] = Array(N).fill(1)

let ans = 1

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (Math.abs(A[i] - A[j]) <= K) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }

  ans = Math.max(ans, dp[i])
}

console.log(ans)
</script>
