<script setup lang="ts">
const lines = [
  '3 3',
  '*..',
  '...',
  '...',

]
const [H, W] = lines[0].split(' ').map(Number)
const grid: string[][] = []
let sy = 0
let sx = 0

for (let i = 0; i < H; i++) {
  grid.push(lines[i + 1].split(''))

  for (let j = 0; j < W; j++) {
    if (grid[i][j] === '*') {
      sy = i
      sx = j
    }
  }
}

const dist: number[][] = Array.from({ length: H }, () => Array(W).fill(-1))
const queue: [number, number][] = []
let head = 0

queue.push([sy, sx])
dist[sy][sx] = 0

const dy = [-1, 1, 0, 0]
const dx = [0, 0, -1, 1]

while (head < queue.length) {
  const [y, x] = queue[head++]

  for (let k = 0; k < 4; k++) {
    const ny = y + dy[k]
    const nx = x + dx[k]

    if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue
    if (grid[ny][nx] === '#') continue
    if (dist[ny][nx] !== -1) continue

    dist[ny][nx] = dist[y][x] + 1
    queue.push([ny, nx])
  }
}

const ans: string[] = []

for (let i = 0; i < H; i++) {
  let row = ''

  for (let j = 0; j < W; j++) {
    if (grid[i][j] === '#') {
      row += '#'
    }
    else {
      row += String(dist[i][j])
    }
  }

  ans.push(row)
}

console.log(ans.join('\n'))
</script>
