<script setup lang="ts">
const lines = [
  '5 5',
  '.....',
  '####.',
  '####.',
  '####.',
  '####.',

]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1).map(line => line.split(''))
let [y, x] = [0, 0]
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
let position = 1
let count = 0
grid[0][0] = '#'

while (true) {
  let Y = 0
  let X = 0
  let pos = position
  // 前向き
  if (count === 0) {
    Y = y + directions[position][0]
    X = x + directions[position][1]

    // 右向き
  }
  else if (count === 1) {
    pos = (position + 1) % 4
    Y = y + directions[pos][0]
    X = x + directions[pos][1]
    // 左向き
  }
  else {
    pos = (position + 3) % 4
    Y = y + directions[pos][0]
    X = x + directions[pos][1]
  }

  if (X < 0 || X >= W || Y < 0 || Y >= H) {
    count++
    if (count > 2) {
      console.log(x, y)
      break
    }
  }
  else if (grid[Y][X] === '#') {
    count++
    if (count > 2) {
      console.log(x, y)
      break
    }
  }
  else {
    y += directions[pos][0]
    x += directions[pos][1]
    grid[y][x] = '#'
    position = pos
    count = 0
  }
}
</script>
