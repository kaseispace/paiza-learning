<script setup lang="ts">
const lines = [
  '7',
  '8 12 13 7 2 17 6',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

let total = 0
for (let i = 0; i < N; i++) total += A[i]

let left = 0
let ans = Infinity

for (let i = 0; i < N - 1; i++) {
  left += A[i]
  const right = total - left
  const diff = Math.abs(left - right)
  if (diff < ans) ans = diff
}

console.log(ans)
</script>
