<script setup lang="ts">
const lines = [
  '6 7',
  '5 0',
  '5 1',
  '5 2',
  '5 3',
  '5 4',
  '5 5',
]
const [n, pNum] = lines[0].split(' ').map(Number)
const p = BigInt(pNum)

const queries: [number, number][] = []
let maxA = 0

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  queries.push([a, b])
  if (a > maxA) maxA = a
}

function modPow(base: bigint, exp: bigint) {
  let result = 1n
  base %= p

  while (exp > 0n) {
    if (exp & 1n) result = result * base % p
    base = base * base % p
    exp >>= 1n
  }

  return result
}

const fact: bigint[] = new Array(maxA + 1)
fact[0] = 1n

for (let i = 1; i <= maxA; i++) {
  fact[i] = fact[i - 1] * BigInt(i) % p
}

const invFact: bigint[] = new Array(maxA + 1)
invFact[maxA] = modPow(fact[maxA], p - 2n)

for (let i = maxA; i >= 1; i--) {
  invFact[i - 1] = invFact[i] * BigInt(i) % p
}

const out: string[] = []

for (const [a, b] of queries) {
  out.push((fact[a] * invFact[b] % p * invFact[a - b] % p).toString())
}

console.log(out.join('\n'))
</script>
