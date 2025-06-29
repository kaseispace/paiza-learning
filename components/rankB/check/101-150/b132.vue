<script setup lang="ts">
const lines = [
  '3 5',
  '10',
  '20',
  '23',
]
const [N, c] = lines[0].split(' ').map(Number)
const times = lines.slice(1).map(Number)
let max = 0
let currentStart = times[0] - c
let currentEnd = times[0]

for (let i = 1; i < N; i++) {
  const start = times[i] - c
  const end = times[i]

  if (currentEnd >= start) {
    currentEnd = Math.max(currentEnd, end)
  }
  else {
    max = Math.max(max, currentEnd - currentStart)
    currentStart = start
    currentEnd = end
  }
}

max = Math.max(max, currentEnd - currentStart)
console.log(max)
</script>
