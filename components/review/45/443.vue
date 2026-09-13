<script setup lang="ts">
const lines = [
  '5',
  'a8 BK',
  'g6 WP',
  'c3 BR',
  'e7 BK',
  'd2 WP',

]
const N = Number(lines[0])
const board: string[][] = Array.from({ length: 8 }, () => Array(8).fill('--'))

for (let i = 0; i < N; i++) {
  const [position, piece] = lines[i + 1].split(' ')

  const column = position.charCodeAt(0) - 'a'.charCodeAt(0)
  const rank = Number(position[1])

  const row = 8 - rank

  board[row][column] = piece
}

for (let row = 0; row < 8; row++) {
  console.log(board[row].join(' '))
}
</script>
