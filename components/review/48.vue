<script setup lang="ts">
const lines = [
  '3 3',
  '1 1',
]
const [H, W] = lines[0].split(' ').map(Number)
const [y, x] = lines[1].split(' ').map(Number)
const grid: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))
const directions = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]

directions.forEach(([dy, dx]) => {
  const ny = dy + y
  const nx = dx + x

  if (ny >= 0 && ny < H && nx >= 0 && nx < W) {
    grid[dy + y][dx + x] = '*'
  }
})

grid.forEach(row => console.log(row.join('')))
</script>
