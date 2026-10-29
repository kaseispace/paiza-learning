<script setup lang="ts">
const lines = [
  '10',
  '7 6 10 2 5 1 8 3 9 4',
]
const n = Number(lines[0])
const A = lines[1].split(' ').map(Number)
let count = 0

const stack = [[0, n]]
while (stack.length > 0) {
  const [left, right] = stack.pop()!
  if (left + 1 >= right) continue

  const pivot = A[right - 1]
  let cur = left

  for (let i = left; i < right - 1; i++) {
    if (A[i] < pivot) {
      const t = A[cur]
      A[cur] = A[i]
      A[i] = t
      cur++
      count++
    }
  }

  const t = A[cur]
  A[cur] = A[right - 1]
  A[right - 1] = t

  stack.push([cur + 1, right])
  stack.push([left, cur])
}

console.log(A.join(' '))
console.log(String(count))
</script>
