<script setup lang="ts">
const lines = ['1 1 1 2 1 1']
const [x1, y1, r1, x2, y2, r2] = lines[0].split(' ').map(Number)

const dx = x1 - x2
const dy = y1 - y2

const dist2 = dx * dx + dy * dy
const sumR = r1 + r2
const sumR2 = sumR * sumR

if (dist2 <= sumR2) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
