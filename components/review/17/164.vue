<script setup lang="ts">
const lines = [
  '3 3 1',
  '...',
  '...',
  '...',
  '0 0',
]
const [H, _, N] = lines[0].split(' ').map(Number)

// 盤面を配列に変換
const board: string[][] = []
for (let i = 0; i < H; i++) {
  board.push(lines[1 + i].split(''))
}

// 座標を処理
for (let i = 0; i < N; i++) {
  const [y, x] = lines[1 + H + i].split(' ').map(Number)
  board[y][x] = '#'
}

// 出力
for (let i = 0; i < H; i++) {
  console.log(board[i].join(''))
}
</script>
