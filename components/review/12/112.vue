<script setup lang="ts">
const lines = [
  '2 2 1',
  '#.',
  '.#',
  '0 1',
]
const [H] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H)
const coords = lines.slice(1 + H).map(line => line.split(' ').map(Number))

for (const [y, x] of coords) {
  console.log(grid[y][x])
}
</script>
