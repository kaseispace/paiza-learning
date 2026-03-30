<script setup lang="ts">
const lines = [
  '3 3',
  '#.#',
  '.#.',
  '...',
]
const [H, W] = lines[0].split(' ').map(Number)
const S = lines.slice(1)

const result: number[][] = []

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (x === 0) {
      if (W > 1 && S[y][1] === '#') result.push([y, x])
    }
    else if (x === W - 1) {
      if (W > 1 && S[y][W - 2] === '#') result.push([y, x])
    }
    else if (S[y][x - 1] === '#' && S[y][x + 1] === '#') {
      result.push([y, x])
    }
  }
}

for (const [y, x] of result) {
  console.log(y + ' ' + x)
}
</script>
