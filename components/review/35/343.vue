<script setup lang="ts">
const lines = [
  '3 6',
  '1 2 3',
]
const [, K] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const INF = 1e9
const dp: number[] = Array(K + 1).fill(INF)
dp[0] = 0

for (const x of a) {
  for (let s = K; s >= x; s--) {
    if (dp[s - x] + 1 < dp[s]) {
      dp[s] = dp[s - x] + 1
    }
  }
}

console.log(dp[K] === INF ? -1 : dp[K])
</script>
