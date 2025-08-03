<script setup lang="ts">
const lines = [
  '10 2',
  '6 2 0 7 1 3 5 3 2 6',
]
const [n, k] = lines[0].split(' ').map(Number)
const visitors = lines[1].split(' ').map(Number)
let currentSum = visitors.slice(0, k).reduce((acr, cur) => acr + cur, 0)
const result = [currentSum]

for (let i = k; i < n; i++) {
  currentSum += visitors[i] - visitors[i - k]
  result.push(currentSum)
}

const maxSum = Math.max(...result)
const count = result.filter(num => num === maxSum)
const firstIndex = result.indexOf(maxSum)

console.log(count.length, firstIndex + 1)
</script>
