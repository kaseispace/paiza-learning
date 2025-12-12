<script setup lang="ts">
const lines = [
  '10 2',
  '6 2 0 7 1 3 5 3 2 6',
]
const [n, k] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

let sum = 0
for (let i = 0; i < k; i++) sum += a[i]

let maxSum = sum
let count = 1
let earliest = 1

for (let i = k; i < n; i++) {
  sum += a[i] - a[i - k]
  if (sum > maxSum) {
    maxSum = sum
    count = 1
    earliest = i - k + 2
  }
  else if (sum === maxSum) {
    count++
  }
}

console.log(count + ' ' + earliest)
</script>
