<script setup lang="ts">
const lines = [
  '5',
  '9 12 1 29 8',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

if (N === 1) {
  console.log(A[0])
  process.exit(0)
}

const MAX_COUNT = 100
const INF = 10 ** 18

let dp: number[] = Array(MAX_COUNT + 1).fill(INF)

for (let count = 0; count <= MAX_COUNT; count++) {
  dp[count] = Math.abs(A[0] - count)
}

for (let i = 1; i <= N - 2; i++) {
  const nextDp: number[] = Array(MAX_COUNT + 1).fill(INF)

  for (let prev = 0; prev <= MAX_COUNT; prev++) {
    if (dp[prev] === INF) continue

    for (let current = 0; current <= MAX_COUNT; current++) {
      if (prev === 0 && current > 0) continue

      const water = prev + current
      const cost = dp[prev] + Math.abs(A[i] - water)

      nextDp[current] = Math.min(nextDp[current], cost)
    }
  }

  dp = nextDp
}

let answer = INF

for (let last = 0; last <= MAX_COUNT; last++) {
  answer = Math.min(answer, dp[last] + Math.abs(A[N - 1] - last))
}

console.log(answer)
</script>
