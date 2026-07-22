<script setup lang="ts">
const lines = [
  '3 3 2',
  'RRR',
  'GGR',
  'BRR',
  '1 1 3 2',
  '1 1 3 1',

]
const [n, m, k] = lines[0].split(' ').map(Number)
const grid: string[] = []

for (let i = 0; i < n; i++) {
  grid.push(lines[i + 1])
}

const id: number[][] = Array.from({ length: n }, () => Array(m).fill(-1))

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]

let comp = 0

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (id[i][j] !== -1) continue

    const queue = [[i, j]]
    let head = 0
    id[i][j] = comp

    while (head < queue.length) {
      const [r, c] = queue[head++]

      for (let d = 0; d < 4; d++) {
        const nr = r + dr[d]
        const nc = c + dc[d]

        if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue
        if (id[nr][nc] !== -1) continue
        if (grid[nr][nc] !== grid[r][c]) continue

        id[nr][nc] = comp
        queue.push([nr, nc])
      }
    }

    comp++
  }
}

const ans: string[] = []

for (let i = 0; i < k; i++) {
  const [a, b, c, d] = lines[n + 1 + i].split(' ').map(Number)

  if (id[a - 1][b - 1] === id[c - 1][d - 1]) {
    ans.push('Yes')
  }
  else {
    ans.push('No')
  }
}

console.log(ans.join('\n'))
</script>
