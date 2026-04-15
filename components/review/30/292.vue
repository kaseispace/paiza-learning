<script setup lang="ts">
const lines = [
  '4 5',
  '0 1 1 0',
  '1 0 1 0',
  '1 0 0 0',
  '0 0 1 1',
  '0 1 1 1',
]
const [M, N] = lines[0].split(' ').map(Number)
const grid: number[][] = []

for (let i = 0; i < N; i++) {
  grid.push(lines[i + 1].split(' ').map(Number))
}

const visited: boolean[][] = Array.from({ length: N }, () => Array(M).fill(false))

const dy = [1, -1, 0, 0]
const dx = [0, 0, 1, -1]

function bfs(sy: number, sx: number) {
  const queue = [[sy, sx]]
  visited[sy][sx] = true

  while (queue.length > 0) {
    const [y, x] = queue.shift()!

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d]
      const nx = x + dx[d]

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx] && grid[ny][nx] === 1) {
        visited[ny][nx] = true
        queue.push([ny, nx])
      }
    }
  }
}

let islands = 0

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (grid[y][x] === 1 && !visited[y][x]) {
      islands++
      bfs(y, x)
    }
  }
}

console.log(islands)
</script>
