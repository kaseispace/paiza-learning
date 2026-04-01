<script setup lang="ts">
const lines = [
  '3 12',
  '10 4',
  '15 8',
  '20 12',
]
const [n, k] = lines[0].split(' ').map(Number)
const articles: { a: number, b: number }[] = []

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  articles.push({ a, b })
}

const dp: number[] = Array(k + 1).fill(0)

for (const { a, b } of articles) {
  for (let w = k; w >= b; w--) {
    const cand = dp[w - b] + a
    if (cand > dp[w]) dp[w] = cand
  }
}

let ans = 0
for (let w = 0; w <= k; w++) {
  if (dp[w] > ans) ans = dp[w]
}

console.log(ans)
</script>
