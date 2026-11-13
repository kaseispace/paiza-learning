<script setup lang="ts">
const lines = [
  '5',
  '1 2 3 4 5',
]
const N = Number(lines[0])
const a = lines[1].split(' ').map(Number)

const S: number[] = new Array(N + 1).fill(0)

for (let i = 0; i < N; i++) {
  S[i + 1] = S[i] + a[i]
}

let ans = Infinity
for (let K = 0; K <= N - 1; K++) {
  const sum1 = S[K + 1]
  const sum2 = S[N] - S[K + 1]
  const diff = Math.abs(sum1 - sum2)

  if (diff < ans) {
    ans = diff
  }
}

console.log(String(ans))
</script>
