<script setup lang="ts">
const lines = [
  '3 5 4',
  'g b g y y',
  'g r b y g',
  'g r r b g',
]
const [N, M] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(' '))
const newGrid = lines.slice(1).map(line => line.split(' '))
const reverseGrid: string[][] = Array.from({ length: M }, () => [])
const resultGrid: string[][] = Array.from({ length: N }, () => [])

grid.forEach((row, y) => {
  row.forEach((col, x) => {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

    for (const [dy, dx] of directions) {
      const ny = dy + y
      const nx = dx + x

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && grid[ny][nx] === grid[y][x]) {
        newGrid[y][x] = '#'
        newGrid[ny][nx] = '#'
      }
    }
  })
})

newGrid.forEach((row) => {
  row.forEach((col, x) => {
    reverseGrid[x].unshift(col)
  })
})

reverseGrid.forEach((row, i) => {
  const newRow = []
  row.forEach((col) => {
    if (col !== '#') {
      newRow.push(col)
    }
  })

  const num = N - newRow.length

  for (let j = 0; j < num; j++) {
    newRow.push('#')
  }

  reverseGrid[i] = newRow
})

reverseGrid.forEach((row) => {
  row.forEach((col, i) => {
    resultGrid[N - 1 - i].push(col)
  })
})

resultGrid.forEach(row => console.log(row.join(' ')))
</script>
