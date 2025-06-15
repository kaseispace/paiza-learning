<script setup lang="ts">
const lines = [
  '5 7',
  '#.#.#.#',
  '#..#...',
  '#.#.#.#',
  '.#.#.#.',
  '#.###.#',
]
const [R, C] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))
const directions = [[-1, -1], [1, -1], [-1, 1], [1, 1]]
let maxX = 0

grid.forEach((row, i) => {
  row.forEach((_, j) => {
    if (grid[i][j] !== '.') return

    let valid = true

    for (let count = 1; ; count++) {
      for (const [dy, dx] of directions) {
        const ny = dy * count + i
        const nx = dx * count + j

        if (ny < 0 || ny >= R || nx < 0 || nx >= C || grid[ny][nx] !== '.') {
          maxX = Math.max(maxX, count - 1)
          valid = false
          break
        }
      }

      if (!valid) break
    }
  })
})
console.log(maxX)
</script>
