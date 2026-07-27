<script setup lang="ts">
const lines = ['2']
const MOD = 1000000007
const d = Number(lines[0])

let pow10 = 1
let pow9 = 1
let ans = 0

for (let len = 1; len <= d; len++) {
  if (len > 1) {
    pow10 = (pow10 * 10) % MOD
    pow9 = (pow9 * 9) % MOD
  }

  const total = (9 * pow10) % MOD
  const good = (9 * pow9) % MOD

  ans = (ans + total - good + MOD) % MOD
}

console.log(ans)
</script>
