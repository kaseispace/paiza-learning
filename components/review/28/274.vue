<script setup lang="ts">
const lines = [
  '2 1000',
  '2 100 1 150',
  '3 200 2 300',
]
const [N, K] = lines[0].split(' ').map(Number)

const A: number[] = new Array(N)
const B: number[] = new Array(N)
const C: number[] = new Array(N)
const D: number[] = new Array(N)

for (let i = 0; i < N; i++) {
  const [a, b, c, d] = lines[1 + i].split(' ').map(Number)
  A[i] = a
  B[i] = b
  C[i] = c
  D[i] = d
}

const can = (day: number) => {
  let sum = 0

  for (let i = 0; i < N; i++) {
    const cost1 = A[i] * day + B[i]
    const cost2 = C[i] * day + D[i]
    const cost = cost1 < cost2 ? cost1 : cost2
    sum += cost
    if (sum > K) return false
  }

  return sum <= K
}

let low = 1
let high = 1000000000000
let ans = 1

while (low <= high) {
  const mid = Math.floor((low + high) / 2)
  if (can(mid)) {
    ans = mid
    low = mid + 1
  }
  else {
    high = mid - 1
  }
}

console.log(ans)
</script>
