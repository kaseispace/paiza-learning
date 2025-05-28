<script setup lang="ts">
const lines = [
  '4 4',
  '..#.',
  '..#.',
  '###.',
  '..#.',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))
let ropeCount = 0

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] === '#') {
      for (const [dy, dx] of directions) {
        const ny = dy + y
        const nx = dx + x

        if (ny < 0 || ny >= H || nx < 0 || nx >= W || grid[ny][nx] === '.') {
          ropeCount++
        }
      }
    }
  }
}

console.log(ropeCount)
</script>
