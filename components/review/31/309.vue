<script setup lang="ts">
const lines = [
  '3 7',
  '2 2 3',
]
const [, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const dp: boolean[] = Array(K + 1).fill(false)
dp[0] = true

for (const x of A) {
  for (let j = K; j >= x; j--) {
    if (dp[j - x]) dp[j] = true
  }
}

console.log(dp[K] ? 'Yes' : 'No')
</script>
