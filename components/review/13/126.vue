<script setup lang="ts">
const lines = ['10 10 5 5']
const [H, W, Y, X] = lines[0].split(' ').map(Number)
const board: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

board[Y][X] = '!'
const directions = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
]

for (const [dy, dx] of directions) {
  let ny = Y + dy
  let nx = X + dx

  while (ny >= 0 && ny < H && nx >= 0 && nx < W) {
    board[ny][nx] = '*'
    ny += dy
    nx += dx
  }
}

for (const row of board) {
  console.log(row.join(''))
}
</script>
