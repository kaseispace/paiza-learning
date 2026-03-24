<script setup lang="ts">
const lines = [
  '3 3 1 1',
  '..#',
  '##.',
  '...',
]
const [n, m, x, y] = lines[0].split(' ').map(Number)
const grid: string[][] = []

for (let i = 0; i < n; i++) {
  grid.push(lines[1 + i].split(''))
}

const sx = x - 1
const sy = y - 1

const queue: number[][] = []
queue.push([sx, sy])

grid[sx][sy] = '+'

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

while (queue.length > 0) {
  const [cx, cy] = queue.shift()!

  for (const [dx, dy] of dirs) {
    const nx = cx + dx
    const ny = cy + dy

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === '.') {
      grid[nx][ny] = '+'
      queue.push([nx, ny])
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(grid[i].join(''))
}
</script>
