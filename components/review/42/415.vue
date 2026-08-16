<script setup lang="ts">
const lines = [
  '10 10 9',
  '2 2 4',
  '2 2 3',
  '2 2 5',
  '2 2 2',
  '2 2 6',
  '2 2 1',
  '2 2 7',
  '2 2 0',
  '2 2 8',

]
const [H, W, N] = lines[0].split(' ').map(Number)
const height = Array(W).fill(0)
const blocks: [number, number, number, number][] = []

for (let i = 0; i < N; i++) {
  const [h, w, x] = lines[i + 1].split(' ').map(Number)

  let bottom = 0

  for (let j = x; j < x + w; j++) {
    bottom = Math.max(bottom, height[j])
  }

  const top = bottom
  const newHeight = bottom + h

  for (let j = x; j < x + w; j++) {
    height[j] = newHeight
  }

  blocks.push([top, newHeight, x, w])
}

const field: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

for (const [top, bottom, x, w] of blocks) {
  for (let y = H - bottom; y < H - top; y++) {
    for (let j = x; j < x + w; j++) {
      field[y][j] = '#'
    }
  }
}

const result: string[] = []

for (let y = 0; y < H; y++) {
  result.push(field[y].join(''))
}

console.log(result.join('\n'))
</script>
