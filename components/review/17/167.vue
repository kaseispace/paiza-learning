<script setup lang="ts">
const lines = [
  '2',
  '15',
]
const K = Number(lines[0])
const N = Number(lines[1])

const MOD = 10000
const dp: number[] = Array(N + 1).fill(0)

for (let i = 1; i <= K; i++) {
  dp[i] = 1
}

for (let i = K + 1; i <= N; i++) {
  let sum = 0
  for (let j = 1; j <= K; j++) {
    sum += dp[i - j]
  }
  dp[i] = sum % MOD
}

console.log(dp[N])
</script>
