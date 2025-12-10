<script setup lang="ts">
const lines = [
  '10 10 1',
  '2 2 4',
]
const [H, W] = lines[0].split(' ').map(Number)
const [h, w, x] = lines[1].split(' ').map(Number)

const field: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

for (let row = H - h; row < H; row++) {
  for (let col = x; col < x + w; col++) {
    field[row][col] = '#'
  }
}

for (let row = 0; row < H; row++) {
  console.log(field[row].join(''))
}
</script>
