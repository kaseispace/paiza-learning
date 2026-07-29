<script setup lang="ts">
const lines = [
  '5 2',
  '1 5',
  '2 3',
]
const [N, Q] = lines[0].split(' ').map(Number)
const imos: number[] = Array(N + 2).fill(0)

for (let i = 0; i < Q; i++) {
  const [L, R] = lines[i + 1].split(' ').map(Number)

  imos[L]++
  imos[R + 1]--
}

let ans = 0
let sum = 0

for (let i = 1; i <= N; i++) {
  sum += imos[i]
  if (sum % 2 === 1) ans++
}

console.log(ans)
</script>
