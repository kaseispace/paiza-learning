<script setup lang="ts">
const lines = [
  '10 3',
  '1 2 3 4 5 6 1 2 3 4',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const runs: number[] = []
let len = 1

for (let i = 1; i < N; i++) {
  if (A[i - 1] + 1 === A[i]) {
    len++
  }
  else {
    runs.push(len)
    len = 1
  }
}

runs.push(len)

function count(L: number) {
  let total = 0

  for (const r of runs) {
    total += Math.floor(r / L)
  }

  return total
}

let low = 1
let high = N

while (low < high) {
  const mid = Math.floor((low + high + 1) / 2)
  if (count(mid) >= K) {
    low = mid
  }
  else {
    high = mid - 1
  }
}

console.log(String(low))
</script>
