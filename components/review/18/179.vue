<script setup lang="ts">
const lines = [
  '6 6 3',
  '..#...',
  '.#....',
  '*...*.',
  '*.#...',
  '#.##.*',
  '......',
]
const [H, W, D] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H)

const INF = 1e15
const dist: number[][] = Array.from({ length: H }, () => Array(W).fill(INF))

const queue: number[][] = []

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (grid[i][j] === '*') {
      dist[i][j] = 0
      queue.push([i, j])
    }
  }
}

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

let head = 0
while (head < queue.length) {
  const [x, y] = queue[head++]
  const d = dist[x][y]

  for (const [dx, dy] of dirs) {
    const nx = x + dx
    const ny = y + dy

    if (nx < 0 || nx >= H || ny < 0 || ny >= W) continue
    if (grid[nx][ny] === '#') continue

    if (dist[nx][ny] > d + 1) {
      dist[nx][ny] = d + 1
      queue.push([nx, ny])
    }
  }
}

let answer = 0
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (grid[i][j] === '.' && dist[i][j] >= D) {
      answer++
    }
  }
}

console.log(answer)
</script>
