<script setup lang="ts">
const lines = [
  '4 4 5',
  'r b p p',
  'g g b r',
  'b r g g',
  'y y r b',
]
const [N, M] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(' '))
const toRemove: boolean[][] = Array.from({ length: N }, () => Array(M).fill(false))
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

grid.forEach((row, y) => {
  row.forEach((_, x) => {
    for (const [dy, dx] of directions) {
      const ny = dy + y
      const nx = dx + x

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && grid[ny][nx] === grid[y][x]) {
        toRemove[y][x] = true
        toRemove[ny][nx] = true
      }
    }
  })
})

toRemove.forEach((row, y) => {
  row.forEach((col, x) => {
    if (col) {
      grid[y][x] = '#'
    }
  })
})

for (let x = 0; x < M; x++) {
  const column: string[] = []
  for (let y = 0; y < N; y++) {
    if (grid[y][x] !== '#') {
      column.push(grid[y][x])
    }
  }

  while (column.length < N) {
    column.unshift('#')
  }

  for (let i = 0; i < N; i++) {
    grid[i][x] = column[i]
  }
}

grid.forEach(row => console.log(row.join(' ')))
</script>
