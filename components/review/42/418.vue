<script setup lang="ts">
const lines = ['7']
const L = Number(lines[0])
const MOD = 10000000000n

if (L % 2 === 1) {
  console.log(0)
  process.exit(0)
}

let dp: bigint[] = Array(L + 1).fill(0n)
dp[0] = 1n

for (let i = 0; i < L; i++) {
  const next: bigint[] = Array(L + 1).fill(0n)

  for (let balance = 0; balance <= L; balance++) {
    if (dp[balance] === 0n) continue

    if (balance + 1 <= L) {
      next[balance + 1] = (next[balance + 1] + dp[balance]) % MOD
    }

    if (balance > 0) {
      next[balance - 1] = (next[balance - 1] + dp[balance]) % MOD
    }
  }

  dp = next
}

console.log(dp[0].toString())
</script>
