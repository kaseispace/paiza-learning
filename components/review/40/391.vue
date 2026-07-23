<script setup lang="ts">
const lines = [
  '2 5',
  '2',
  '3',
]
const [N, K] = lines[0].split(' ').map(BigInt)
const A: bigint[] = []
let maxA = 0n

for (let i = 0; i < Number(N); i++) {
  const x = BigInt(lines[i + 1])
  A.push(x)
  if (x > maxA) maxA = x
}

const check = (h: bigint) => {
  let need = 0n

  for (const a of A) {
    need += (h + a - 1n) / a
    if (need > K) return false
  }

  return true
}

let left = 0n
let right = maxA * K

while (left < right) {
  const mid = (left + right + 1n) / 2n

  if (check(mid)) {
    left = mid
  }
  else {
    right = mid - 1n
  }
}

console.log(left.toString())
</script>
