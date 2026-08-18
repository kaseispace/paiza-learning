<script setup lang="ts">
const lines = [
  '4',
  '0 0',
  '2 2',
  '-1 1',
  '1 -1',
]
const n = Number(lines[0])
const [x0, y0] = lines[1].split(' ').map(Number)

let nearestCity = 1
let minDistanceSquared = Infinity

for (let i = 1; i < n; i++) {
  const [x, y] = lines[i + 1].split(' ').map(Number)

  const dx = x - x0
  const dy = y - y0
  const distanceSquared = dx * dx + dy * dy

  if (distanceSquared < minDistanceSquared) {
    minDistanceSquared = distanceSquared
    nearestCity = i
  }
}

console.log(nearestCity)
</script>
