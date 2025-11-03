<script setup lang="ts">
const lines = [
  '2 2',
  '4',
  'A 1 2',
  'A 1 1',
  'B 1 1',
  'B 1 2',
]
const [N, M] = lines[0].split(' ').map(Number)
const moves = lines.slice(2)

const board: string[][] = Array.from({ length: N }, () => Array(M).fill('.'))

for (const move of moves) {
  const [P, xStr, yStr] = move.split(' ')
  const x = parseInt(xStr) - 1
  const y = parseInt(yStr) - 1
  const cell = board[x][y]

  if (cell === '.') {
    board[x][y] = P
  }
  else if (cell === 'A' && P === 'A') {
    board[x][y] = 'a'
  }
  else if (cell === 'B' && P === 'B') {
    board[x][y] = 'b'
  }
  else if ((cell === 'A' && P === 'B') || (cell === 'B' && P === 'A')) {
    board[x][y] = '.'
  }
}

let countA = 0
let countB = 0

for (const row of board) {
  for (const cell of row) {
    if (cell === 'A' || cell === 'a') countA++
    if (cell === 'B' || cell === 'b') countB++
  }
}

if (countA > countB) {
  console.log('A')
}
else if (countB > countA) {
  console.log('B')
}
else {
  console.log('Draw')
}
</script>
