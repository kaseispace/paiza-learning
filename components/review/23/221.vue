<script setup lang="ts">
const lines = [
  '3 3',
  '1 1',
  '...',
  '.*.',
  '...',
]
const [H, W] = lines[0].split(' ').map(Number)
let [h0, w0] = lines[1].split(' ').map(Number)
const grid = lines.slice(2).map(line => line.split(''))

h0--
w0--

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]
let position = 0

while (true) {
  if (grid[h0][w0] === '.') {
    grid[h0][w0] = '*'
    position = (position + 1) % 4
  }
  else {
    grid[h0][w0] = '.'
    position = (position + 3) % 4
  }

  h0 += directions[position][0]
  w0 += directions[position][1]

  if (h0 < 0 || h0 >= H || w0 < 0 || w0 >= W) break
}

grid.forEach(row => console.log(row.join('')))
</script>
