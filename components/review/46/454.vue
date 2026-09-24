<script setup lang="ts">
const lines = [
  '5 17',
  '5 4 6',
  '7 6 1',
  '2 1 1',
  '4 3 4',
  '13 9 2',
]
const [N, W] = lines[0].split(' ').map(Number)
const dp: number[] = Array(W + 1).fill(0)

for (let i = 0; i < N; i++) {
  const [weight, value, count] = lines[i + 1].split(' ').map(Number)

  for (let quantity = 0; quantity < count; quantity++) {
    for (let currentWeight = W; currentWeight >= weight; currentWeight--) {
      dp[currentWeight] = Math.max(dp[currentWeight], dp[currentWeight - weight] + value)
    }
  }
}

console.log(dp[W])
</script>
