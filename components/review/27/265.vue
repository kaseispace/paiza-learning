<script setup lang="ts">
const lines = [
  '3 3 3',
  '1 1 1',
  '1 1 2',
  '1 1 1',

]
const [H, W, N] = lines[0].split(' ').map(Number)
const height: number[] = Array(W).fill(0)

for (let i = 0; i < N; i++) {
  const [, , x] = lines[1 + i].split(' ').map(Number)
  height[x]++
}

const field: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

for (let c = 0; c < W; c++) {
  const h = height[c]
  for (let k = 0; k < h; k++) {
    field[H - 1 - k][c] = '#'
  }
}

for (let r = 0; r < H; r++) {
  console.log(field[r].join(''))
}
</script>
