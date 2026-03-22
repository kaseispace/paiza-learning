<script setup lang="ts">
const lines = [
  '3 6',
  '0 0 1 0 0 0',
  '1 0 1 0 1 0',
  '0 0 0 0 1 0',
]
const [h, w] = lines[0].split(' ').map(Number)
const grid: number[][] = []

for (let i = 0; i < h; i++) {
  grid.push(lines[1 + i].split(' ').map(Number))
}

const dist: number[][] = Array.from({ length: h }, () => Array(w).fill(-1))
const queue: number[][] = []

if (grid[0][0] === 0) {
  dist[0][0] = 1
  queue.push([0, 0])
}

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

while (queue.length > 0) {
  const [y, x] = queue.shift()!

  for (const [dy, dx] of dirs) {
    const ny = y + dy
    const nx = x + dx

    if (
      ny >= 0 && ny < h
      && nx >= 0 && nx < w
      && grid[ny][nx] === 0
      && dist[ny][nx] === -1
    ) {
      dist[ny][nx] = dist[y][x] + 1
      queue.push([ny, nx])
    }
  }
}

console.log(dist[h - 1][w - 1])
</script>
