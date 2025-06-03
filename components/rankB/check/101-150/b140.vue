<script setup lang="ts">
const lines = [
  '3 3',
  '5 2',
  '1 2',
  '1 3',
  '1 2',
  '2 1',
  '1 3',
]
const [, T] = lines[1].split(' ').map(Number)
const directions = lines.slice(2).map(line => line.split(' ').map(Number))
const ratMap: Map<string, number> = new Map()

for (const [x, y] of directions) {
  const key = `${x},${y}`
  ratMap.set(key, (ratMap.get(key) || 0) + 1)
}

const result = [...ratMap.values()].sort((a, b) => b - a).slice(0, T).reduce((sum, count) => sum + count, 0)
console.log(result)
</script>
