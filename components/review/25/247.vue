<script setup lang="ts">
const lines = [
  '2 9',
  '2 3',
]
const [, C] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const countPress = (t: number) => {
  let sum = 0n
  const T = BigInt(t)

  for (const a of A) {
    sum += T / BigInt(a)
    if (sum >= BigInt(C)) return sum
  }
  return sum
}

let left = 0n
let right = 10n ** 18n

while (left < right) {
  const mid = (left + right) >> 1n
  if (countPress(mid) >= BigInt(C)) {
    right = mid
  }
  else {
    left = mid + 1n
  }
}

console.log(left.toString())
</script>
