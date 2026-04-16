<script setup lang="ts">
const lines = [
  '3 3 1',
  '.#.',
  '#.#',
  '.#.',
  '1 2',
]
const [H, W, Q] = lines[0].split(' ').map(Number)
const grid: string[][] = []

for (let i = 0; i < H; i++) {
  grid.push(lines[1 + i].split(''))
}

for (let qi = 0; qi < Q; qi++) {
  const parts = lines[1 + H + qi].split(' ')
  const t = Number(parts[0])
  const x = Number(parts[1])

  if (t === 1) {
    const row = grid[x - 1]
    const first = row[0]

    for (let j = 0; j < W - 1; j++) {
      row[j] = row[j + 1]
    }

    row[W - 1] = first
  }
  else {
    const col = x - 1
    const first = grid[0][col]

    for (let i = 0; i < H - 1; i++) {
      grid[i][col] = grid[i + 1][col]
    }

    grid[H - 1][col] = first
  }
}

for (let i = 0; i < H; i++) {
  console.log(grid[i].join(''))
}
</script>
