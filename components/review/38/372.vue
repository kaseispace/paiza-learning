<script setup lang="ts">
const lines = [
  '5 5',
  '0..0.',
  '.2..0',
  '.....',
  '....1',
  '.0...',

]
const [H, W] = lines[0].split(' ').map(Number)
const S = lines.slice(1)

const ans: string[][] = Array.from({ length: H }, () => Array(W).fill('.'))

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const c = S[y][x]

    if (c === '.') continue

    const power = Number(c)

    for (let ny = 0; ny < H; ny++) {
      for (let nx = 0; nx < W; nx++) {
        const dist = Math.abs(y - ny) + Math.abs(x - nx)

        if (dist <= power) {
          ans[ny][nx] = '#'
        }
      }
    }
  }
}

for (let y = 0; y < H; y++) {
  console.log(ans[y].join(''))
}
</script>
