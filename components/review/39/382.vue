<script setup lang="ts">
const lines = [
  '3 17',
  '5 4',
  '7 6',
  '2 1',
]
const [N, W] = lines[0].split(' ').map(Number)
const dp: number[] = Array(W + 1).fill(0)

for (let i = 0; i < N; i++) {
  const [weight, value] = lines[i + 1].split(' ').map(Number)

  for (let w = weight; w <= W; w++) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value)
  }
}

console.log(dp[W])
</script>
