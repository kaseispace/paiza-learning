<script setup lang="ts">
const lines = ['0']
const N = BigInt(lines['0'])
const MOD = 1000003n

function modPow(base: bigint, exp: bigint, mod: bigint) {
  let result = 1n
  let b = base % mod
  let e = exp

  while (e > 0n) {
    if (e & 1n) {
      result = (result * b) % mod
    }

    b = (b * b) % mod
    e >>= 1n
  }

  return result
}

const ans = modPow(2n, N, MOD)
console.log(ans.toString())
</script>
