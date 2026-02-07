<script setup lang="ts">
const lines = [
  '7 3',
  '-10 23 30 -30 4 -500 30',
]
const [NK, Aline] = [lines[0], lines[1]]
const [N, K] = NK.split(' ').map(Number)
const A = Aline.split(' ').map(Number)

let sum = 0
for (let i = 0; i < K; i++) {
  sum += A[i]
}

const out: number[] = []
out.push(sum)

for (let i = 1; i <= N - K; i++) {
  sum = sum - A[i - 1] + A[i + K - 1]
  out.push(sum)
}

console.log(out.join('\n'))
</script>
