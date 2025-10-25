<script setup lang="ts">
const lines = [
  '3 3',
  '*.#',
  '..#',
  '##.',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(row => row.split(''))

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]

let startY = -1, startX = -1
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] === '*') {
      startY = y
      startX = x
    }
  }
}

const queue = [[startY, startX]]
while (queue.length > 0) {
  const [y, x] = queue.shift()!

  for (const [dy, dx] of directions) {
    const ny = y + dy
    const nx = x + dx

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '.') {
      grid[ny][nx] = '*'
      queue.push([ny, nx])
    }
  }
}

for (const row of grid) {
  console.log(row.join(''))
}
</script>
