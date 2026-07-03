<script setup lang="ts">
const lines = ['10']
const A = Number(lines[0])
const INF = 1 << 30

const dp = Array.from({ length: A + 13 }, () => [INF, INF])
dp[0][0] = 0

for (let i = 0; i <= A; i++) {
  for (let used = 0; used <= 1; used++) {
    if (dp[i][used] === INF) continue

    dp[i + 1][used] = Math.min(dp[i + 1][used], dp[i][used] + 880)

    if (used === 0) {
      dp[i + 2][1] = Math.min(dp[i + 2][1], dp[i][0] + 880)
    }

    dp[i + 6][used] = Math.min(dp[i + 6][used], dp[i][used] + 4080)

    dp[i + 12][used] = Math.min(dp[i + 12][used], dp[i][used] + 7200)
  }
}

let ans = INF

for (let i = A; i < dp.length; i++) {
  ans = Math.min(ans, dp[i][0], dp[i][1])
}

console.log(ans)
</script>
