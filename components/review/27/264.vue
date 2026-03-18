<script setup lang="ts">
const lines = [
  '3 5',
  '5',
  '5',
  '5',
]
const [N, X] = lines[0].split(' ').map(Number)
const x: number[] = []

for (let i = 0; i < N; i++) {
  x.push(Number(lines[1 + i]))
}

x.sort((a, b) => a - b)

let sum = 0
let cnt = 0

for (let i = 0; i < N; i++) {
  if (sum + x[i] > X) break
  sum += x[i]
  cnt++
}

console.log(cnt)
</script>
