<script setup lang="ts">
const lines = [
  '5 12',
  '5 9 7 6 7',
]
const [n, k] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const can = (x: number) => {
  if (x <= 0) return true
  let cnt = 0
  for (let i = 0; i < n; i++) {
    cnt += Math.floor(A[i] / x)
    if (cnt >= k) return true
  }
  return cnt >= k
}

let low = 0
let high = Math.max(...A)

for (let it = 0; it < 100; it++) {
  const mid = (low + high) / 2
  if (can(mid)) low = mid
  else high = mid
}

console.log(low.toFixed(10))
</script>
