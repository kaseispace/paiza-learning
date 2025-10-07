<script setup lang="ts">
const lines = [
  '4 19',
  '6',
  '10',
  '2',
  '5',
]
const [, K] = lines[0].split(' ').map(Number)
const A = lines.slice(1).map(Number)

const dp: boolean[] = Array(K + 1).fill(false)
dp[0] = true

for (const a of A) {
  for (let i = K; i >= a; i--) {
    if (dp[i - a]) {
      dp[i] = true
    }
  }
}

console.log(dp[K] ? 'Yes' : 'No')
</script>
