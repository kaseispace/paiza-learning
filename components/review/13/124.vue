<script setup lang="ts">
const lines = ['23917 23929 8731 109861231']
const [p, q, e, E] = lines[0].split(' ').map(BigInt)

const n = p * q
const phi = (p - 1n) * (q - 1n)

const modInverse = (a: bigint, m: bigint): bigint => {
  let m0 = m, x0 = 0n, x1 = 1n
  while (a > 1n) {
    const q = a / m;
    [a, m] = [m, a % m];
    [x0, x1] = [x1 - q * x0, x0]
  }
  return x1 < 0n ? x1 + m0 : x1
}

const d = modInverse(e, phi)

const modPow = (base: bigint, exponent: bigint, mod: bigint) => {
  let result = 1n
  base = base % mod
  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % mod
    }
    base = (base * base) % mod
    exponent = exponent / 2n
  }
  return result
}

const M = modPow(E, d, n)
console.log(String.fromCharCode(Number(M)))
</script>
