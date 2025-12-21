<script setup lang="ts">
const lines = [
  '3',
  '0 0',
  '1 0',
  '0 1',
  '1 2 3',
]
const n = Number(lines[0])

const coords = lines.slice(1, 1 + n).map((line) => {
  const [x, y] = line.split(' ').map(Number)
  return { x, y }
})

const p = lines[1 + n].split(' ').map(v => Number(v) - 1)

const dist = (a: number, b: number) => {
  const dx = coords[a].x - coords[b].x
  const dy = coords[a].y - coords[b].y
  return Math.sqrt(dx * dx + dy * dy)
}

let total = 0
for (let i = 0; i < n - 1; i++) {
  total += dist(p[i], p[i + 1])
}

total += dist(p[n - 1], p[0])
console.log(total.toFixed(12))
</script>
