<script setup lang="ts">
const lines = [
  '8 10',
  '2 4 6 8 10 10 12 14',
]
const [N, X] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

let lo = 0
let hi = N

while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2)
  if (A[mid] < X) {
    lo = mid + 1
  }
  else {
    hi = mid
  }
}

console.log(String(lo + 1))
</script>
