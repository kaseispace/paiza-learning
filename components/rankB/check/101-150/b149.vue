<script setup lang="ts">
const lines = [
  '5 5 3 3',
  '##3##',
  '#3##2',
  '##1##',
  '#6#4#',
  '#####',
]
const [H, W] = lines[0].split(' ').map(Number)
const [Y, X] = lines[1].split(' ').map(Number)
const grid = lines.slice(2).map(line => line.split(''))
let sumH = 0
let direction = ''

// 北
let sumN = 0
for (let y = Y - 2; y >= 0; y--) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] !== '#') {
      sumN += Number(grid[y][x])
    }
  }
}
sumH = sumN
direction = 'N'

// 東
let sumE = 0
for (let x = W - 1; x > W - X; x--) {
  for (let y = 0; y < H; y++) {
    if (grid[y][x] !== '#') {
      sumE += Number(grid[y][x])
    }
  }
}

if (sumE > sumH) {
  sumH = sumE
  direction = 'E'
}

// 南
let sumS = 0
for (let y = Y; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] !== '#') {
      sumS += Number(grid[y][x])
    }
  }
}

if (sumS > sumH) {
  sumH = sumS
  direction = 'S'
}

// 西
let sumW = 0
for (let x = 0; x < W - X; x++) {
  for (let y = 0; y < H; y++) {
    if (grid[y][x] !== '#') {
      sumW += Number(grid[y][x])
    }
  }
}

if (sumW > sumH) {
  sumH = sumW
  direction = 'W'
}

console.log(direction, sumH)
</script>
