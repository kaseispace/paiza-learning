<script setup lang="ts">
const lines = ['3']
const N = Number(lines[0])
const MOD = 10 ** 10

let dp1 = 1 // dp[0]
let dp2 = 1 // dp[1]
let result = 1

for (let i = 2; i <= N; i++) {
  result = (dp1 + dp2) % MOD
  dp1 = dp2
  dp2 = result
}

console.log(result % MOD)
</script>
