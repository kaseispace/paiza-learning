<script setup lang="ts">
const lines = [
  '5 4',
  '1 3 2 2 1',
]
const [N, K] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const INF = 1e9
const W = K + 1
const dp = new Int32Array((N + 1) * W).fill(INF)
dp[0] = 0

for (let i = 1; i <= N; i++) {
  const x = a[i - 1]

  for (let s = 0; s <= K; s++) {
    let best = dp[(i - 1) * W + s]
    if (s >= x && dp[(i - 1) * W + (s - x)] + 1 < best) {
      best = dp[(i - 1) * W + (s - x)] + 1
    }

    dp[i * W + s] = best
  }
}

if (dp[N * W + K] >= INF) {
  console.log('-1')
}
else {
  const chosen: number[] = []
  let s = K

  for (let i = N; i >= 1; i--) {
    if (dp[i * W + s] !== dp[(i - 1) * W + s]) {
      chosen.push(a[i - 1])
      s -= a[i - 1]
    }
  }

  console.log(String(chosen.length))
  console.log(chosen.join(' '))
}
</script>
