<script setup lang="ts">
const lines = ['10']
const A = Number(lines[0])

const plans = [
  { m: 1, cost: 880 },
  { m: 6, cost: 4080 },
  { m: 12, cost: 7200 },
]

const MAX = A + 12
const INF = 1e18

const dp: number[] = Array(MAX + 1).fill(INF)
dp[0] = 0

for (let i = 0; i <= MAX; i++) {
  if (dp[i] === INF) continue

  for (const p of plans) {
    const ni = i + p.m
    if (ni <= MAX) {
      dp[ni] = Math.min(dp[ni], dp[i] + p.cost)
    }
  }
}

let ans = INF
for (let i = A; i <= MAX; i++) {
  ans = Math.min(ans, dp[i])
}

console.log(ans)
</script>
