<script setup lang="ts">
const lines = [
  '5 5 1 1 3',
  '###..',
  '#.#..',
  '#...#',
  '###..',
  '.####',
]
const [H, W, R, C, T] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

const queue = [[R - 1, C - 1, 0]]
grid[R - 1][C - 1] = 'A'

while (queue.length > 0) {
  const [y, x, time] = queue.shift()!

  if (time >= T) break
  grid[y][x] = 'A'

  for (const [dy, dx] of directions) {
    const ny = dy + y
    const nx = dx + x

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '#') {
      grid[ny][nx] = 'B'
      queue.push([ny, nx, time + 1])
    }
  }
}

grid.forEach(row => console.log(row.join('')))
</script>
