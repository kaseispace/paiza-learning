<script setup lang="ts">
const lines = [
  '3 17',
  '5 4',
  '7 6',
  '2 1',
]
const [N, W] = lines[0].split(' ').map(Number)
const items: [number, number][] = []

for (let i = 0; i < N; i++) {
  const [w, v] = lines[i + 1].split(' ').map(Number)
  items.push([w, v])
}

const dp: number[] = Array(W + 1).fill(0)

for (const [w, v] of items) {
  for (let weight = w; weight <= W; weight++) {
    dp[weight] = Math.max(dp[weight], dp[weight - w] + v)
  }
}

console.log(Math.max(...dp))
</script>
