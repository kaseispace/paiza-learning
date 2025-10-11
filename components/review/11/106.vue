<script setup lang="ts">
const lines = [
  '2 5',
  '0 1 2 3 4',
  '5 6 7 8 9',
]
const grid = lines.slice(1).map(line => line.split(' ').map(Number))

const path = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [0, 2],
  [0, 1],
]

let total = 0
for (const [i, j] of path) {
  total += grid[i][j]
}

console.log(total)
</script>
