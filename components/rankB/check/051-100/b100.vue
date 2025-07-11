<script setup lang="ts">
const lines = [
  '3',
  '2 1 3',
  '6 5 4',
  '8 0 -6',
  '3',
  '2',
  '9',
  '12',
]
const N = Number(lines[0])
const scores = lines.slice(1, N + 1).map(line => line.split(' ').map(Number))
const q = lines.slice(N + 2).map(Number)
const maxTime = Math.max(...q)
const good: number[] = Array(maxTime).fill(0)
const bad: number[] = Array(maxTime).fill(0)

for (const [t, d, s] of scores) {
  good[t - 1] += s
  bad[t - 1 + d] += s
}

for (let i = 0; i < maxTime - 1; i++) {
  good[i + 1] += good[i]
  bad[i + 1] += bad[i]
}

q.forEach((time) => {
  console.log(good[time - 1] - bad[time - 1])
})
</script>
