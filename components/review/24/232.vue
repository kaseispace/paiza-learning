<script setup lang="ts">
const lines = [
  '1 3',
  '1 1 1',
  '0',
  '1 0 1',
]
const [h, w] = lines[0].split(' ').map(Number)

const data: number[][] = []
for (let i = 0; i < h; i++) {
  data.push(lines[1 + i].split(' ').map(Number))
}

const vertical = lines[1 + h].split(' ').map(Number)
const horizontal = lines[2 + h].split(' ').map(Number)

let wrongRow = -1
for (let i = 0; i < h; i++) {
  const sum = data[i].reduce((a, b) => a + b, 0)
  if ((sum + vertical[i]) % 2 !== 0) {
    wrongRow = i
    break
  }
}

let wrongCol = -1
for (let j = 0; j < w; j++) {
  let sum = 0
  for (let i = 0; i < h; i++) sum += data[i][j]
  if ((sum + horizontal[j]) % 2 !== 0) {
    wrongCol = j
    break
  }
}

if (wrongRow !== -1 && wrongCol !== -1) {
  data[wrongRow][wrongCol] ^= 1
}

for (let i = 0; i < h; i++) {
  console.log(data[i].join(' '))
}
</script>
