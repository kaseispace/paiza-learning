<script setup lang="ts">
const lines = [
  '7 7',
  '#######',
  '#X.2..#',
  '#.#.#.#',
  '#.X.1.#',
  '#.#1#.#',
  '#4....#',
  '#######',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))

grid.forEach((row, y) => {
  row.forEach((col, x) => {
    // 爆弾なら
    if (col.match(/[1-9]/)) {
      const r = Number(col)
      let stopU = false, stopD = false, stopL = false, stopR = false

      for (let i = 1; i <= r; i++) {
        // 上
        const nyU = y - i
        if (!stopU && nyU >= 0) {
          if (grid[nyU][x] === '#') stopU = true
          else if (grid[nyU][x] === 'X') grid[nyU][x] = '.'
        }

        // 下
        const nyD = y + i
        if (!stopD && nyD < H) {
          if (grid[nyD][x] === '#') stopD = true
          else if (grid[nyD][x] === 'X') grid[nyD][x] = '.'
        }

        // 左
        const nxL = x - i
        if (!stopL && nxL >= 0) {
          if (grid[y][nxL] === '#') stopL = true
          else if (grid[y][nxL] === 'X') grid[y][nxL] = '.'
        }

        // 右
        const nxR = x + i
        if (!stopR && nxR < W) {
          if (grid[y][nxR] === '#') stopR = true
          else if (grid[y][nxR] === 'X') grid[y][nxR] = '.'
        }
      }
    }
  })
})

let result = true
grid.forEach((row) => {
  row.forEach((col) => {
    if (col === 'X') {
      result = false
    }
  })
})

console.log(result ? 'YES' : 'NO')
</script>
