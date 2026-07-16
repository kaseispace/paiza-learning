<script setup lang="ts">
const lines = [
  '7 10 2',
  '1 8 1',
  '4 1 5',
]
const [H, W, N] = lines[0].split(' ').map(Number)
const field = Array.from({ length: H }, () => Array(W).fill('.'))
const height = Array(W).fill(0)

for (let i = 0; i < N; i++) {
  const [h, w, x] = lines[i + 1].split(' ').map(Number)

  let base = 0

  for (let j = x; j < x + w; j++) {
    base = Math.max(base, height[j])
  }

  const bottom = H - base - 1
  const top = bottom - h + 1

  for (let r = top; r <= bottom; r++) {
    for (let c = x; c < x + w; c++) {
      field[r][c] = '#'
    }
  }

  for (let j = x; j < x + w; j++) {
    height[j] = base + h
  }
}

for (let i = 0; i < H; i++) {
  console.log(field[i].join(''))
}
</script>
