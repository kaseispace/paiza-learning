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

let bestKinds = 0
let bestSum = 0

const total = 1 << N

for (let mask = 0; mask < total; mask++) {
  let sum = 0
  let kinds = 0

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      sum += price[i]
      kinds++
    }
  }

  if (sum > X) continue

  if (kinds > bestKinds) {
    bestKinds = kinds
    bestSum = sum
  }
  else if (kinds === bestKinds && sum > bestSum) {
    bestSum = sum
  }
}

console.log(X - bestSum)
</script>
