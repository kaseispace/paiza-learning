<script setup lang="ts">
const lines = [
  '4 18',
  '9 6',
  '3 2',
  '11 7',
  '4 3',
]
const [N, W] = lines[0].split(' ').map(Number)
const w: number[] = []
const v: number[] = []

for (let i = 0; i < N; i++) {
  const [wi, vi] = lines[i + 1].split(' ').map(Number)
  w.push(wi)
  v.push(vi)
}

const dp: number[][] = Array.from({ length: N + 1 }, () => Array(W + 1).fill(0))

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= W; j++) {
    dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j])

    if (j + w[i] <= W) {
      dp[i + 1][j + w[i]] = Math.max(dp[i + 1][j + w[i]], dp[i][j] + v[i])
    }
  }
}

let ans = 0
for (let j = 0; j <= W; j++) ans = Math.max(ans, dp[N][j])

console.log(ans)
</script>
