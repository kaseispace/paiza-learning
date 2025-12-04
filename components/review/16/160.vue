<script setup lang="ts">
const lines = [
  '5 3',
  '100',
  '200',
  '300',
  '400',
  '500',
]
const [N, K] = lines[0].split(' ').map(Number)
const P = lines.slice(1).map(Number)

const A = P.concat(P)

let sum = 0
for (let i = 0; i < K; i++) sum += A[i]
let ans = sum

for (let start = 1; start < N; start++) {
  sum += A[start + K - 1] - A[start - 1]
  if (sum > ans) ans = sum
}

console.log(ans)
</script>
