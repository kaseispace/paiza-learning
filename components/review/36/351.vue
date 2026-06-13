<script setup lang="ts">
const lines = [
  '4',
  '3',
  '7 4',
  '2 4 6',
  '8 5 9 3',
]
const N = Number(lines[0])
const a: number[][] = []

for (const i of [...Array(N).keys()]) {
  a.push(lines[i + 1].split(' ').map(Number))
}

const dp: number[][] = Array.from({ length: N }, (_, i) =>
  Array(i + 1).fill(0),
)

for (const j of [...Array(N).keys()]) {
  dp[N - 1][j] = a[N - 1][j]
}

for (const i of [...Array(N - 1).keys()].reverse()) {
  for (const j of [...Array(i + 1).keys()]) {
    dp[i][j] = a[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1])
  }
}

console.log(dp[0][0])
</script>
