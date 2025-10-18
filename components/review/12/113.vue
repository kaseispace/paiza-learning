<script setup lang="ts">
const lines = [
  '0 0 1',
  'N',
]
let [y, x] = lines[0].split(' ').map(Number)
const directions = lines.slice(1)

for (const d of directions) {
  if (d === 'N') y -= 1
  else if (d === 'S') y += 1
  else if (d === 'E') x += 1
  else if (d === 'W') x -= 1

  console.log(`${y} ${x}`)
}
</script>
