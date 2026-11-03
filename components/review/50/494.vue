<script setup lang="ts">
const lines = [
  '3 2',
  '1 2 3',
  '2 5 4',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
const B = lines[2].split(' ').map(Number)

let dp: number[] = new Array(K + 1).fill(-Infinity)
dp[0] = 0

for (let i = 0; i < N; i++) {
  const nd: number[] = new Array(K + 1).fill(-Infinity)

  for (let j = 0; j <= K; j++) {
    if (dp[j] === -Infinity) {
      continue
    }

    for (let c = 0; j + c <= K; c++) {
      const gain = Math.ceil((c + 1) / 2) * A[i] + Math.floor((c + 1) / 2) * B[i]
      if (dp[j] + gain > nd[j + c]) {
        nd[j + c] = dp[j] + gain
      }
    }
  }

  dp = nd
}

console.log(String(dp[K]))
</script>
