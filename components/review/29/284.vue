<script setup lang="ts">
const lines = [
  '5 2',
  '1 2',
]
const [N, M] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const MOD = 10n ** 10n

const dp: bigint[] = new Array(N + 1).fill(0n)
dp[0] = 1n

for (let i = 1; i <= N; i++) {
  let sum = 0n

  for (let j = 0; j < M; j++) {
    const step = a[j]
    if (i - step >= 0) {
      sum += dp[i - step]
    }
  }

  dp[i] = sum % MOD
}

console.log(dp[N].toString())
</script>
