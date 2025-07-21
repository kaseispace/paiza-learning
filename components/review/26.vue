<script setup lang="ts">
const lines = [
  '6 3',
  '###',
  '#3#',
  '#1#',
  '#.#',
  '#X#',
  '###',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1)
const visited: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false))
const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    // 現在見ているマス
    const cell = grid[y][x]
    if (cell.match(/[1-9]/)) {
      visited[y][x] = true
      // マスを文字列型から数値型に変更
      const power = Number(cell)
      for (const [dy, dx] of dirs) {
        let ny = y
        let nx = x

        for (let k = 1; k <= power; k++) {
          ny += dy
          nx += dx
          if (ny >= 0 && ny < H && nx >= 0 && nx < W) {
            if (grid[ny][nx] === '#') break
            visited[ny][nx] = true
          }
        }
      }
    }
  }
}

let allCovered = true
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    // 爆弾が処理できているか確認
    if (grid[y][x] === 'X' && !visited[y][x]) {
      allCovered = false
      break
    }
  }
}

console.log(allCovered ? 'YES' : 'NO')
</script>
