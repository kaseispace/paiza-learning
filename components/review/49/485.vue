<script setup lang="ts">
const lines = [
  '5',
  '0 1 2 3 4',
  '4',
  '-3 -1 1 3',
  '12',
]
const n = Number(lines[0])
const A = Int32Array.from(lines[1].split(' ').map(Number)).sort()
const m = Number(lines[2])
const B = Int32Array.from(lines[3].split(' ').map(Number)).sort()
const k = Number(lines[4])

function count(d: number) {
  let total = 0
  let lo = 0
  let hi = 0

  for (let i = 0; i < n; i++) {
    const left = A[i] - d
    const right = A[i] + d
    while (lo < m && B[lo] < left) lo++
    while (hi < m && B[hi] <= right) hi++
    total += hi - lo
  }

  return total
}

let low = 0, high = 200000000
while (low < high) {
  const mid = Math.floor((low + high) / 2)
  if (count(mid) >= k) high = mid
  else low = mid + 1
}

console.log(String(low))
</script>
