<script setup lang="ts">
const lines = [
  '3 300',
  '150',
  '120',
  '130',
]
const [N, X] = lines[0].split(' ').map(Number)
const price: number[] = []

for (let i = 0; i < N; i++) {
  price.push(Number(lines[1 + i]))
}

let bestCount = -1
let bestSum = -1

const total = 1 << N

for (let mask = 0; mask < total; mask++) {
  let sum = 0
  let cnt = 0

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      sum += price[i]
      cnt++
    }
  }

  if (sum > X) continue

  if (cnt > bestCount) {
    bestCount = cnt
    bestSum = sum
  }
  else if (cnt === bestCount && sum > bestSum) {
    bestSum = sum
  }
}

const change = X - bestSum
console.log(change)
</script>
