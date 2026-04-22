<script setup lang="ts">
const lines = ['2 2']
const [N, K] = lines[0].split(' ').map(BigInt)

function value(i: bigint) {
  const r = i % 3n

  if (r === 1n) return 1n

  if (r === 2n) return 0n

  return -1n
}

let sum = 0n

for (let i = N; i <= K && i < N + 3n; i++) {
  sum += value(i)
}

console.log(sum.toString())
</script>
