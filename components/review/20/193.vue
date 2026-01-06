<script setup lang="ts">
const lines = [
  '4 5',
  'T.TTT',
  '.....',
  'T..AT',
  'TTTTT',
]
const [H, W] = lines[0].split(' ').map(Number)
const s = lines.slice(1).map(row => row.split(''))

let x = 0
let y = 0
for (let h = 0; h < H; h++) {
  let check = false

  for (let w = 0; w < W; w++) {
    if (s[h][w] === 'A') {
      y = h
      x = w
      check = true
      break
    }
  }

  if (check) break
}

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

for (const [dy, dx] of directions) {
  let ny = dy + y
  let nx = dx + x

  while (ny >= 0 && ny < H && nx >= 0 && nx < W && s[ny][nx] === '.') {
    s[ny][nx] = 'V'
    ny += dy
    nx += dx
  }
}

s.forEach((row) => {
  console.log(row.join(''))
})
</script>
