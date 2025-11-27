<script setup lang="ts">
const lines = [
  '3 3',
  '1 2 3',
]
const [n, k] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const MOD = 1000000000

const dp: number[] = Array(k + 1).fill(0)
dp[0] = 1

for (let i = 0; i < n; i++) {
  const x = a[i]
  for (let s = k; s >= x; s--) {
    dp[s] = (dp[s] + dp[s - x]) % MOD
  }
}

console.log(dp[k] % MOD)
</script>
