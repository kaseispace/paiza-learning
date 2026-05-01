<script setup lang="ts">
const lines = [
  '4 18',
  '9 6',
  '3 2',
  '11 7',
  '4 3',
]
const [N, W] = lines[0].split(' ').map(Number)
const items: { w: number, v: number }[] = []

for (let i = 0; i < N; i++) {
  const [w, v] = lines[1 + i].split(' ').map(Number)
  items.push({ w, v })
}

const dp: number[] = Array(W + 1).fill(0)

for (const { w, v } of items) {
  for (let j = W; j >= w; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v)
  }
}

console.log(dp[W])
</script>
