<script setup lang="ts">
const lines = [
  '7 7',
  '1 4',
  '###.###',
  '#...###',
  '#.#...#',
  '#.###.#',
  '#...#.#',
  '#.#.#.#',
  '#.#.#.#',
]
const [H, W] = lines[0].split(' ').map(Number)
let [y, x] = lines[1].split(' ').map(Number)
const grid = lines.slice(2).map(line => line.split(''))

y--
x--

while (true) {
  let moved = false

  while (x > 0 && grid[y][x - 1] === '.') {
    x--
    moved = true
  }

  if (moved && y < H - 1 && grid[y + 1][x] === '.') {
    y++
    continue
  }

  moved = false

  while (x < W - 1 && grid[y][x + 1] === '.') {
    x++
    moved = true
  }

  if (moved && y < H - 1 && grid[y + 1][x] === '.') {
    y++
    continue
  }

  if (y < H - 1 && grid[y + 1][x] === '.') {
    y++
  }
  else {
    break
  }
}

console.log(y + 1, x + 1)
</script>
