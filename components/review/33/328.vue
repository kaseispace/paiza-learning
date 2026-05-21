<script setup lang="ts">
const lines = [
  '10 20',
  '7 1 9 6 6 6 10 9 7 10 10 6 4 1 6 9 2 5 9 3',
]
const [N, T] = lines[0].split(' ').map(Number)
const X = lines[1].split(' ').map(Number)

const NEG = -1e15
const dp: number[][] = Array.from({ length: T + 1 }, () => Array(N + 1).fill(NEG))

dp[0][1] = 0

for (let t = 1; t <= T; t++) {
  const coinPos = X[t - 1]

  for (let i = 1; i <= N; i++) {
    let best = dp[t - 1][i]
    if (i > 1) best = Math.max(best, dp[t - 1][i - 1])

    if (best === NEG) continue

    if (i === coinPos) best += 1

    dp[t][i] = Math.max(dp[t][i], best)
  }
}

let ans = 0
for (let i = 1; i <= N; i++) ans = Math.max(ans, dp[T][i])
console.log(ans)
</script>
