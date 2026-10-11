<script setup lang="ts">
const lines = [
  '3 3 0 0',
  '..*',
  '...',
  '***',
]
const [H, W, Y, X] = lines[0].split(' ').map(Number)
const board: string[][] = []

for (let y = 0; y < H; y++) {
  board.push(lines[y + 1].split(''))
}

board[Y][X] = '*'

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for (const [dy, dx] of directions) {
  const targets: number[][] = []

  let nextY = Y + dy
  let nextX = X + dx

  while (0 <= nextY && nextY < H && 0 <= nextX && nextX < W && board[nextY][nextX] === '.') {
    targets.push([nextY, nextX])

    nextY += dy
    nextX += dx
  }

  if (0 <= nextY && nextY < H && 0 <= nextX && nextX < W && board[nextY][nextX] === '*') {
    for (const [targetY, targetX] of targets) {
      board[targetY][targetX] = '*'
    }
  }
}

const answer = board.map(row => row.join(''))
console.log(answer.join('\n'))
</script>
