<script setup lang="ts">
const lines = [
  '5',
  '1 1 1 1 1',
  '1 0 0 0 1',
  '1 0 1 0 1',
  '1 0 0 0 1',
  '1 1 1 1 1',
  '2 3 3 90',
]
const N = Number(lines[0])
const grid = lines.slice(1, N + 1).map(row => row.split(' ').map(Number))
const [r, c, s, d] = lines[N + 1].split(' ').map(Number)

if (d === 0 || d === 360) {
  grid.forEach(row => console.log(row.join(' ')))
}
else {
  let sub: number[][] = []
  for (let i = 0; i < s; i++) {
    sub.push(grid[r - 1 + i].slice(c - 1, c - 1 + s))
  }

  const times = d / 90
  for (let i = 0; i < times; i++) {
    const curGrid: number[][] = []
    for (let x = 0; x < s; x++) {
      const Y: number[] = []
      for (let y = s - 1; y >= 0; y--) {
        Y.push(sub[y][x])
      }

      curGrid.push(Y)
    }

    sub = curGrid
  }

  for (let i = 0; i < s; i++) {
    const row = sub[i]
    grid[r - 1 + i].splice(c - 1, s, ...row)
  }

  grid.forEach(row => console.log(row.join(' ')))
}
</script>
