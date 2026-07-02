<script setup lang="ts">
const lines = [
  '3',
  '0 2 3',
  '3 0 2',
  '2 3 0',
  '1 2 3',
]
const n = Number(lines[0])
const cost: number[][] = []

for (let i = 0; i < n; i++) {
  cost.push(lines[i + 1].split(' ').map(Number))
}

const path = lines[n + 1].split(' ').map(Number)
let ans = 0

for (let i = 0; i < n; i++) {
  const from = path[i] - 1
  const to = path[(i + 1) % n] - 1

  ans += cost[from][to]
}

console.log(ans)
</script>
