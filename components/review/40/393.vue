<script setup lang="ts">
const lines = [
  '7 10 4',
  '1 8 1',
  '4 1 5',
  '1 6 2',
  '2 2 0',

]
const [H, W, N] = lines[0].split(' ').map(Number)
const field: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))
const height: number[] = Array(W).fill(0)

for (let i = 0; i < N; i++) {
  const [h, w, x] = lines[i + 1].split(' ').map(Number)

  let base = 0
  for (let c = x; c < x + w; c++) {
    base = Math.max(base, height[c])
  }

  const top = H - base - h
  const bottom = H - base - 1

  for (let r = top; r <= bottom; r++) {
    for (let c = x; c < x + w; c++) {
      field[r][c] = '#'
    }
  }

  for (let c = x; c < x + w; c++) {
    height[c] = base + h
  }
}

for (let i = 0; i < H; i++) {
  console.log(field[i].join(''))
}
</script>
