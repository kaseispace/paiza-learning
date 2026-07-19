<script setup lang="ts">
const lines = [
  '10 4',
  '30',
  '30',
  '40',
  '100',
  '80',
  '60',
  '50',
  '70',
  '70',
  '30',

]
const [N, K] = lines[0].split(' ').map(Number)
const A: number[] = []
let maxWeight = 0
let sum = 0

for (let i = 0; i < N; i++) {
  const w = Number(lines[i + 1])
  A.push(w)
  maxWeight = Math.max(maxWeight, w)
  sum += w
}

const check = (limit: number) => {
  let count = 1
  let current = 0

  for (const w of A) {
    if (current + w <= limit) {
      current += w
    }
    else {
      count++
      current = w
    }
  }

  return count <= K
}

let left = maxWeight
let right = sum

while (left < right) {
  const mid = Math.floor((left + right) / 2)

  if (check(mid)) {
    right = mid
  }
  else {
    left = mid + 1
  }
}

console.log(left)
</script>
