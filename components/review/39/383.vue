<script setup lang="ts">
const lines = [
  '3 3',
  'RGG',
  'BBG',
  'BGB',
]
const [n, m] = lines[0].split(' ').map(Number)
const grid: string[][] = []

for (let i = 0; i < n; i++) {
  grid.push(lines[i + 1].split(''))
}

const changes = [
  ['R', 'G'],
  ['R', 'B'],
  ['G', 'R'],
  ['G', 'B'],
  ['B', 'R'],
  ['B', 'G'],
]

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]

let answer = Infinity

for (const [from, to] of changes) {
  const color: string[][] = Array.from({ length: n }, () => Array(m))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      color[i][j] = grid[i][j] === from ? to : grid[i][j]
    }
  }

  const visited: boolean[][] = Array.from({ length: n }, () => Array(m).fill(false))

  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j]) continue

      count++

      const q = [[i, j]]
      visited[i][j] = true
      let head = 0

      while (head < q.length) {
        const [r, c] = q[head++]

        for (let k = 0; k < 4; k++) {
          const nr = r + dr[k]
          const nc = c + dc[k]

          if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue
          if (visited[nr][nc]) continue
          if (color[nr][nc] !== color[r][c]) continue

          visited[nr][nc] = true
          q.push([nr, nc])
        }
      }
    }
  }

  answer = Math.min(answer, count)
}

console.log(answer)
</script>
