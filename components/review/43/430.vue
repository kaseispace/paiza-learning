<script setup lang="ts">
const lines = ['3 3 1 1 1 2 2']
const [x1, y1, r, x2, y2, x3, y3] = lines[0].split(' ').map(Number)

const closestX = Math.max(x2, Math.min(x1, x3))
const closestY = Math.max(y2, Math.min(y1, y3))

const dx = x1 - closestX
const dy = y1 - closestY

if (dx * dx + dy * dy <= r * r) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
