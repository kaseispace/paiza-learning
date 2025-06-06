<script setup lang="ts">
const lines = [
  '6',
  '1 0 1 1 0 0',
  '0 0 0 1 0 0',
  '1 1 1 0 1 0',
  '1 0 1 0 1 1',
  '0 0 0 0 0 0',
  '0 1 1 1 1 1',
]
const N = Number(lines[0])
const grid = lines.slice(1).map(line => line.split(' ').map(Number))
const dp: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

dp[0][0] = grid[0][0]

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + grid[i][j])
    if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + grid[i][j])
  }
}

console.log(dp[N - 1][N - 1])
</script>
