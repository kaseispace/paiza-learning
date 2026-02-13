<script setup lang="ts">
const lines = [
  '10 10 4 5 3',
  '.......#..',
  '..........',
  '..........',
  '#.........',
  '..........',
  '......#...',
  '..........',
  '....#.....',
  '...#......',
  '..........',
  'L 3',
  'R 1',
  'R 3',
]
const [H, W, sy, sx, N] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H).map(row => row.split(''))

let y = sy
let x = sx

let dir = 0
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

grid[y][x] = '*'
let idx = 1 + H

for (let i = 0; i < N; i++) {
  const [d, lStr] = lines[idx++].split(' ')
  const l = Number(lStr)

  if (d === 'L') dir = (dir + 3) % 4
  else dir = (dir + 1) % 4

  let ny = y
  let nx = x
  let ok = true

  for (let step = 1; step <= l; step++) {
    ny += dy[dir]
    nx += dx[dir]

    if (ny < 0 || ny >= H || nx < 0 || nx >= W || grid[ny][nx] === '#') {
      ok = false
      break
    }
  }

  if (ok) {
    for (let step = 1; step <= l; step++) {
      y += dy[dir]
      x += dx[dir]
      grid[y][x] = '*'
    }
  }
  else {
    while (true) {
      const ty = y + dy[dir]
      const tx = x + dx[dir]

      if (ty < 0 || ty >= H || tx < 0 || tx >= W || grid[ty][tx] === '#') {
        break
      }

      y = ty
      x = tx
      grid[y][x] = '*'
    }

    break
  }
}

for (const row of grid) {
  console.log(row.join(''))
}
</script>
