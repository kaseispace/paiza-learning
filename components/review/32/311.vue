<script setup lang="ts">
const lines = [
  '3 3 3',
  '1 2',
  '3 1',
  '2 3',
]
const [H, W, M] = lines[0].split(' ').map(Number)
const chk: number[][] = Array.from({ length: H + 1 }, () => Array(W + 1).fill(0))

for (let i = 0; i < M; i++) {
  const [p, q] = lines[1 + i].split(' ').map(Number)
  chk[p][q] = 1
}

const dp: number[][] = Array.from({ length: H + 1 }, () => Array(W + 1).fill(0))

for (let i = 1; i <= H; i++) {
  for (let j = 1; j <= W; j++) {
    if (i === 1 && j === 1) continue

    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + chk[i][j]
  }
}

console.log(dp[H][W])
</script>
