<script setup lang="ts">
const lines = [
  '8 3',
  '1 3',
  '3 8',
  '1 8',
]
const [N, Q] = lines[0].split(' ').map(Number)
const imos: number[] = Array(N + 1).fill(0)

for (let i = 1; i <= Q; i++) {
  const [L, R] = lines[i].split(' ').map(Number)
  imos[L - 1] += 1
  imos[R] -= 1
}

let max = 0
let current = 0
for (let i = 0; i < N; i++) {
  current += imos[i]
  if (current > max) max = current
}

console.log(max)
</script>
