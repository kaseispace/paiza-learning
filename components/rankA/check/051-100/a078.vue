<script setup lang="ts">
const lines = [
  '5',
  '.214.',
  '1321.',
  '33311',
  '13214',
  '33324',
]
const H = Number(lines[0])
const grid = lines.slice(1).map(line => line.split(''))
const W = 5
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

while (true) {
  let hasDeleted = false
  const toDelete: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false))

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = grid[y][x]
      if (c === '.') continue

      let valid = true
      let neighborCount = 0

      for (const [dy, dx] of directions) {
        const ny = y + dy, nx = x + dx
        if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue

        neighborCount++
        if (grid[ny][nx] !== c) {
          valid = false
          break
        }
      }

      if (neighborCount >= 1 && valid) {
        toDelete[y][x] = true
        for (const [dy, dx] of directions) {
          const ny = y + dy, nx = x + dx
          if (ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === c) {
            toDelete[ny][nx] = true
          }
        }

        hasDeleted = true
      }
    }
  }

  if (!hasDeleted) break

  // 削除処理
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (toDelete[y][x]) grid[y][x] = '.'
    }
  }

  // 落下処理
  for (let x = 0; x < W; x++) {
    const stack = []
    for (let y = H - 1; y >= 0; y--) {
      if (grid[y][x] !== '.') stack.push(grid[y][x])
    }

    for (let y = H - 1; y >= 0; y--) {
      grid[y][x] = stack.length ? stack.shift()! : '.'
    }
  }
}

grid.forEach(row => console.log(row.join('')))
</script>
