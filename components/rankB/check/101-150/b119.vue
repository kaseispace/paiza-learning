<script setup lang="ts">
const lines = [
  '4 5',
  '2 0 0 0 1',
  '0 2 0 0 0',
  '0 1 0 3 0',
  '0 0 1 0 0',
  '2 3',
  '##.',
  '#.#',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1, H + 1).map(line => line.split(' ').map(Number))
const [R, C] = lines[H + 1].split(' ').map(Number)
const net = lines.slice(H + 2).map(line => line.split(''))
let maxFish = 0

for (let startY = 0; startY <= H - R; startY++) {
  for (let startX = 0; startX <= W - C; startX++) {
    let fishCount = 0

    for (let y = 0; y < R; y++) {
      for (let x = 0; x < C; x++) {
        if (net[y][x] === '#') {
          fishCount += grid[startY + y][startX + x]
        }
      }
    }

    maxFish = Math.max(maxFish, fishCount)
  }
}

console.log(maxFish)
</script>
