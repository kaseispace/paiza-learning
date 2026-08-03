<script setup lang="ts">
const lines = ['2 3 5 7']
const [P1, P2, P3, K] = lines[0].split(' ').map(Number)
const dp: bigint[] = new Array(K)

dp[0] = 1n

let i1 = 0
let i2 = 0
let i3 = 0

const p1 = BigInt(P1)
const p2 = BigInt(P2)
const p3 = BigInt(P3)

for (let i = 1; i < K; i++) {
  const a = dp[i1] * p1
  const b = dp[i2] * p2
  const c = dp[i3] * p3

  let next = a
  if (b < next) next = b
  if (c < next) next = c

  dp[i] = next

  if (a === next) i1++
  if (b === next) i2++
  if (c === next) i3++
}

console.log(dp[K - 1].toString())
</script>
