<script setup lang="ts">
const lines = [
  '3',
  '1 2 3',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

const MOD = 1000000000
let dp = [1, 0, 0]

for (let i = 0; i < N; i++) {
  const t = A[i] % 3
  const ndp = [0, 0, 0]

  for (let r = 0; r < 3; r++) {
    ndp[r] = (ndp[r] + dp[r]) % MOD
    const from = (r - t + 3) % 3
    ndp[r] = (ndp[r] + dp[from]) % MOD
  }

  dp = ndp
}

console.log(dp[0] % MOD)
</script>
