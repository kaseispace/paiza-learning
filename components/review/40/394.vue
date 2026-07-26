<script setup lang="ts">
const lines = [
  '3',
  '3 2 1',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)
const MOD = 10000000000

const dp: number[] = Array(N + 1).fill(0)
const suf: number[] = Array(N + 2).fill(0)

dp[N] = 1
suf[N] = 1

for (let i = N - 1; i >= 0; i--) {
  const r = Math.min(N, i + A[i])

  dp[i] = (suf[i + 1] - suf[r + 1]) % MOD
  if (dp[i] < 0) dp[i] += MOD

  suf[i] = (dp[i] + suf[i + 1]) % MOD
}

console.log(dp[0])
</script>
