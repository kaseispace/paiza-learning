<script setup lang="ts">
const lines = [
  '2 4 5',
  '0 0 3',
  '2 1 3',
  '2 0 2',
  '2 1 3',
  '1 0 2',
  '3 2 3',
]
const [N, H, W] = lines[0].split(' ').map(Number)
const grid: number[][] = Array.from({ length: H }, () => Array(W).fill(0))

for (let i = 1; i <= N * 3; i += 3) {
  let turn = 1

  for (let j = i; j < i + 3; j++) {
    const [x, y, s] = lines[j].split(' ').map(Number)

    for (let k = x; k < x + s; k++) {
      for (let l = y; l < y + s; l++) {
        // 範囲を超えないように
        if (l < H && k < W) {
          // 白ではない場合
          if (grid[l][k] !== 0 && grid[l][k] !== turn) {
            if (turn === 1) {
              grid[l][k] = grid[l][k] === 2 ? 3 : 2
            }
            else if (turn === 2) {
              grid[l][k] = grid[l][k] === 1 ? 3 : 1
            }
            else if (turn === 3) {
              grid[l][k] = grid[l][k] === 1 ? 2 : 1
            }
          }
          else {
            grid[l][k] = turn
          }
        }
      }
    }

    turn++
  }
}

let red = 0
let blue = 0
let green = 0

grid.forEach((row) => {
  row.forEach((point) => {
    if (point === 1) {
      red++
    }
    else if (point === 2) {
      blue++
    }
    else if (point === 3) {
      green++
    }
  })
})

console.log(red, blue, green)
</script>
