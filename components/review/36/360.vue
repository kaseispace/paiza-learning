<script setup lang="ts">
const lines = [
  '5 3',
  '2 1 3 5 4',
  '2 2 4 3 5',
]
const [n, k] = lines[0].split(' ').map(Number)
const W = lines[1].split(' ').map(Number)
const V = lines[2].split(' ').map(Number)

const check = (x: number) => {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr.push(V[i] - x * W[i])
  }

  arr.sort((a, b) => b - a)

  let sum = 0

  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  return sum >= 0
}

let left = 0
let right = 5000

for (let iter = 0; iter < 100; iter++) {
  const mid = (left + right) / 2

  if (check(mid)) {
    left = mid
  }
  else {
    right = mid
  }
}

console.log(left.toFixed(10))
</script>
