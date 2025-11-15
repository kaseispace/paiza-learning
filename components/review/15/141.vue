<script setup lang="ts">
const lines = [
  '3 3 1',
  '.#.',
  '#.#',
  '.#.',
  '1 2',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H).map(line => line.split(''))
const queries = lines.slice(1 + H)

const rowShift: number[] = Array(H).fill(0)
const colShift: number[] = Array(W).fill(0)

for (const q of queries) {
  const [type, numStr] = q.split(' ')
  const num = parseInt(numStr, 10) - 1 // 0-index
  if (type === '1') {
    rowShift[num] = (rowShift[num] + 1) % W
  }
  else {
    colShift[num] = (colShift[num] + 1) % H
  }
}

const result: string[] = []
for (let i = 0; i < H; i++) {
  const row: string[] = []
  for (let j = 0; j < W; j++) {
    const origI = (i + colShift[j]) % H
    const origJ = (j + rowShift[i]) % W
    row.push(grid[origI][origJ])
  }
  result.push(row.join(''))
}

console.log(result.join('\n'))
</script>
