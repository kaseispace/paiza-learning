<script setup lang="ts">
type Tree = {
  a: bigint
  b: bigint
  c: bigint
}

const lines = [
  '2 1000',
  '1 1 500',
  '2 1 100',
]
const [NStr, KStr] = lines[0].split(' ')
const N = Number(NStr)
const K = BigInt(KStr)

const ABC: Tree[] = []
for (let i = 0; i < N; i++) {
  const [a, b, c] = lines[i + 1].split(' ').map(BigInt)
  ABC.push({ a, b, c })
}

const ok = (t: bigint) => {
  const T = BigInt(t)
  for (const { a, b, c } of ABC) {
    const h = a * T * T + b * T + c
    if (h < K) return false
  }
  return true
}

let low = 0n
let high = 1000000n

while (low < high) {
  const mid = (low + high) >> 1n
  if (ok(mid)) {
    high = mid
  }
  else {
    low = mid + 1n
  }
}

console.log(low.toString())
</script>
