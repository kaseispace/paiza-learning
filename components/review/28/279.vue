<script setup lang="ts">
const lines = [
  '9',
  '6 5',
  '3 1',
  '4 3',
  '2 2',

]
const W = Number(lines[0])
const items: { w: number, v: number }[] = []

for (let i = 1; i <= 4; i++) {
  const [w, v] = lines[i].split(' ').map(Number)
  items.push({ w, v })
}

const dp: number[] = Array(W + 1).fill(0)

for (const { w, v } of items) {
  for (let weight = W; weight >= w; weight--) {
    dp[weight] = Math.max(dp[weight], dp[weight - w] + v)
  }
}

console.log(Math.max(...dp))
</script>
