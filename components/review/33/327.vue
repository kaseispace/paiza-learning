<script setup lang="ts">
const lines = [
  '2 3 5',
  'abcd',
  'bcd',
]
const [n, , K] = lines[0].split(' ').map(Number)
const S = lines[1]
const C = new Set(lines[2].split(''))
const MOD = 1000000007

const N = 2 * n

const prefix: number[] = Array(N + 1).fill(0)
for (let i = 0; i < N; i++) {
  prefix[i + 1] = prefix[i] + (C.has(S[i]) ? 1 : 0)
}
const cost = (l: number, r: number) => prefix[r + 1] - prefix[l]

const size = 1 << N
const dp: number[][] = Array.from({ length: size }, () => Array(K + 1).fill(0))
dp[0][0] = 1

for (let mask = 0; mask < size; mask++) {
  if (mask === (1 << N) - 1) continue

  let i = 0
  while (i < N && (mask & (1 << i))) i++
  if (i === N) continue

  for (let j = i + 1; j < N; j++) {
    if (mask & (1 << j)) continue

    const w = cost(i, j)
    const nmask = mask | (1 << i) | (1 << j)

    for (let x = 0; x + w <= K; x++) {
      if (dp[mask][x] === 0) continue
      dp[nmask][x + w] = (dp[nmask][x + w] + dp[mask][x]) % MOD
    }
  }
}

const fullMask = (1 << N) - 1
console.log(dp[fullMask][K] % MOD)
</script>
