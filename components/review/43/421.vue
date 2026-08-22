<script setup lang="ts">
const lines = ['4']
const n = Number(lines[0])
const MOD = 1000000007
const dp: number[] = Array(n + 1).fill(0)

dp[0] = 1
dp[1] = 2

if (n >= 2) {
  dp[2] = 3

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 3]) % MOD
  }
}

console.log(dp[n])
</script>
