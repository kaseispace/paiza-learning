<script setup lang="ts">
const lines = [
  '5 5',
  '1 2',
  '3 4',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid: number[][] = Array.from({ length: H }, () => Array(W).fill(0))

for (let y = 1; y <= 2; y++) {
  const row = lines[y].split(' ').map(Number)
  for (let x = 0; x < 2; x++) {
    grid[y - 1][x] = row[x]
  }
}

for (let y = 0; y < 2; y++) {
  const X = grid[y][1] - grid[y][0]

  for (let x = 2; x < W; x++) {
    grid[y][x] = grid[y][x - 1] + X
  }
}

for (let x = 0; x < W; x++) {
  const Y = grid[1][x] - grid[0][x]

  for (let y = 2; y < H; y++) {
    grid[y][x] = grid[y - 1][x] + Y
  }
}

grid.forEach(row => console.log(row.join(' ')))
</script>
