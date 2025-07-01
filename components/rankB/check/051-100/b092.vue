<script setup lang="ts">
const lines = [
  '5 7 5',
  '#######',
  '#####4#',
  '##1#N##',
  '#2#3###',
  '######5',
]
const [H, W] = lines[0].split(' ').map(Number)
const grid = lines.slice(1)
let Y = -1
let X = -1

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (grid[y][x] === 'N') {
      Y = y
      X = x
      break
    }
  }

  if (Y !== -1 && X !== -1) break
}

const queue = [[Y, X, 0]]
const visited: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false))
visited[Y][X] = true
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
let result: number[] = []
let minLength = Infinity

while (queue.length > 0) {
  const [y, x, depth] = queue.shift()!
  if (/[1-9]/.test(grid[y][x])) {
    const number = Number(grid[y][x])
    if (minLength === depth) {
      result.push(number)
    }
    else if (minLength > depth) {
      minLength = depth
      result = []
      result.push(number)
    }
  }

  for (const [dy, dx] of directions) {
    const ny = dy + y
    const nx = dx + x

    if (ny >= 0 && ny < H && nx >= 0 && nx < W && !visited[ny][nx]) {
      queue.push([ny, nx, depth + 1])
      visited[ny][nx] = true
    }
  }
}

result.sort((a, b) => a - b)
console.log(result.length)
result.forEach(num => console.log(num))
</script>
