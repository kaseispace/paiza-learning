<script setup lang="ts">
const lines = [
  '...X.',
  '...X.',
  '...X.',
  '...X.',
  'OOOO.',
]
let left = ''
let right = ''
let result = 'D'

for (let i = 0; i < 5; i++) {
  let col = ''
  let row = ''

  for (let j = 0; j < 5; j++) {
    col += lines[i][j]
    row += lines[j][i]
  }

  left += lines[i][i]
  right += lines[i][4 - i]

  if (col === 'OOOOO' || row === 'OOOOO' || left === 'OOOOO' || right === 'OOOOO') {
    result = 'O'
    break
  }
  else if (col === 'XXXXX' || row === 'XXXXX' || left === 'XXXXX' || right === 'XXXXX') {
    result = 'X'
    break
  }
}

console.log(result)
</script>
