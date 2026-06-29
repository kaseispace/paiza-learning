<script setup lang="ts">
const lines = ['2']
const d = Number(lines[0])
const MOD = 1000000007

const modPow = (base: number, exp: number) => {
  let result = 1n
  let b = BigInt(base)
  let e = BigInt(exp)
  const mod = BigInt(MOD)

  while (e > 0n) {
    if (e & 1n) {
      result = (result * b) % mod
    }

    b = (b * b) % mod
    e >>= 1n
  }

  return Number(result)
}

const total = (9 * modPow(10, d - 1)) % MOD
const distinct = modPow(9, d)
const ans = (total - distinct + MOD) % MOD

console.log(ans)
</script>
