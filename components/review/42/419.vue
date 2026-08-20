<script setup lang="ts">
const lines = [
  '4 8',
  '5 3 8 2',
]
const firstLine = lines[0].split(' ').map(Number)
const n = firstLine[0]
const k = firstLine[1]

const a = lines[1].split(' ').map(Number)

const dp: number[] = Array(k + 1).fill(0)
dp[0] = 1

for (let i = 0; i < n; i++) {
  const eggs = a[i]

  for (let sum = k; sum >= eggs; sum--) {
    dp[sum] += dp[sum - eggs]
  }
}

console.log(dp[k])
</script>
