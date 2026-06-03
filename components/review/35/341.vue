<script setup lang="ts">
const lines = [
  '3 4',
  '1 2 3',
  '2 3 4 3 2',
  '1 2 3 4 5',
  '5 4 3 2 1',
]
const [N, K] = lines[0].split(' ').map(Number)
const costs = lines[1].split(' ').map(Number)

const vitamins: number[][] = []
let maxV = 0

for (let i = 0; i < N; i++) {
  const row = lines[i + 2].split(' ').map(Number)
  vitamins.push(row)

  for (let j = 0; j < 5; j++) {
    if (row[j] > maxV) maxV = row[j]
  }
}

let cheapest = Infinity
for (const c of costs) {
  cheapest = Math.min(cheapest, c)
}

if (cheapest > K) {
  console.log(-1)
  process.exit(0)
}

function can(x: number) {
  const INF = 1e18
  const dp: number[] = Array(32).fill(INF)
  dp[0] = 0

  for (let i = 0; i < N; i++) {
    let mask = 0

    for (let j = 0; j < 5; j++) {
      if (vitamins[i][j] >= x) {
        mask |= (1 << j)
      }
    }

    const next = dp.slice()

    for (let s = 0; s < 32; s++) {
      const ns = s | mask
      const cost = dp[s] + costs[i]

      if (cost < next[ns]) {
        next[ns] = cost
      }
    }

    for (let s = 0; s < 32; s++) {
      dp[s] = next[s]
    }
  }

  return dp[31] <= K
}

let low = 0
let high = maxV + 1

while (high - low > 1) {
  const mid = Math.floor((low + high) / 2)

  if (can(mid)) {
    low = mid
  }
  else {
    high = mid
  }
}

console.log(low)
</script>
