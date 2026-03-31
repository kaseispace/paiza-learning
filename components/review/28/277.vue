<script setup lang="ts">
const lines = [
  '4 12',
  '3',
  '4',
  '5',
  '6',
]
const [N, K] = lines[0].split(' ').map(Number)
const a: number[] = []

for (let i = 0; i < N; i++) {
  a.push(Number(lines[1 + i]))
}

let dp: boolean[] = Array(1000).fill(false)
dp[0] = true

for (let i = 0; i < N; i++) {
  const next = dp.slice()

  for (let r = 0; r < 1000; r++) {
    if (dp[r]) {
      next[(r + a[i]) % 1000] = true
    }
  }

  dp = next
}

console.log(dp[K] ? 'Yes' : 'No')
</script>
