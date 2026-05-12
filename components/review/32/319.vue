<script setup lang="ts">
const lines = [
  '3 6',
  '1 2 3',
  '2 3 4 3 2',
  '1 2 3 4 5',
  '5 4 3 2 1',
]
const [N, K] = lines[0].split(' ').map(BigInt)
const p = lines[1].split(' ').map(BigInt)
const v: bigint[][] = []

for (let i = 0; i < Number(N); i++) {
  v.push(lines[i + 2].split(' ').map(BigInt))
}

const can = (x: bigint) => {
  const INF = 10n ** 18n
  const dp: bigint[] = Array(32).fill(INF)
  dp[0] = 0n

  for (let i = 0; i < Number(N); i++) {
    let mask = 0

    for (let j = 0; j < 5; j++) {
      if (v[i][j] >= x) {
        mask |= (1 << j)
      }
    }

    const next = [...dp]

    for (let s = 0; s < 32; s++) {
      const ns = s | mask
      const cost = dp[s] + p[i]

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

let low = 0n
let high = 1000000001n

while (high - low > 1n) {
  const mid = (low + high) / 2n

  if (can(mid)) {
    low = mid
  }
  else {
    high = mid
  }
}

console.log(low === 0n ? '-1' : low.toString())
</script>
