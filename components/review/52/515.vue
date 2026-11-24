<script setup lang="ts">
const lines = [
  '2 100',
  '20 1000',
  '30 1000',
]
const [, K] = lines[0].split(' ').map(Number)
const workers = lines.slice(1).map(line => line.split(' ').map(Number))

const can = (x: number) => {
  let total = 0

  for (const [A, B] of workers) {
    total += Math.floor((B + x + A - 1) / A)

    if (total > K) {
      return false
    }
  }

  return true
}

let left = 0
let right = 10 ** 18

while (right - left > 1) {
  const mid = Math.floor((left + right) / 2)

  if (can(mid)) {
    left = mid
  }
  else {
    right = mid
  }
}

console.log(left)
</script>
