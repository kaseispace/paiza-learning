<script setup lang="ts">
const lines = [
  '3 3 1',
  '#.#',
  '.#.',
  '#.#',
  '2 1',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, 1 + H).map(s => s.split(''))
const queries = lines.slice(1 + H)

const rowIndex = Array.from({ length: H }, (_, i) => i)
const colIndex = Array.from({ length: W }, (_, i) => i)

const rowShift: number[] = Array(H).fill(0)
const colShift: number[] = Array(W).fill(0)

for (const q of queries) {
  const [type, x] = q.split(' ').map(Number)

  if (type === 1) {
    const r = rowIndex[x - 1]
    rowShift[r] = (rowShift[r] + 1) % W
  }
  else {
    const c = colIndex[x - 1]
    colShift[c] = (colShift[c] + 1) % H
  }
}

const result: string[][] = Array.from({ length: H }, () => Array(W))

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    const r = rowIndex[i]
    const c = colIndex[j]

    const originalRow = (r + colShift[c]) % H
    const originalCol = (c + rowShift[r]) % W

    result[i][j] = grid[originalRow][originalCol]
  }
}

console.log(result.map(row => row.join('')).join('\n'))
</script>
