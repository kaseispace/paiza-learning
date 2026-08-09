<script setup lang="ts">
const lines = [
  '6 8',
  '4 6 5 1 5 3',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

A.sort((a, b) => a - b)

let left = 0
let right = N - 1
let answer = 0

while (left < right) {
  if (A[left] + A[right] >= K) {
    answer++
    left++
    right--
  }
  else {
    left++
  }
}

console.log(answer)
</script>
