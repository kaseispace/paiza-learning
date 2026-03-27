<script setup lang="ts">
const lines = [
  '3 3',
  'B',
  'A.B',
  '...',
  '...',
]
const [H, W] = lines[0].split(' ').map(Number)
const first = lines[1]

const grid: string[][] = []
let startA = null
let startB = null

for (let i = 0; i < H; i++) {
  const row = lines[2 + i].split('')
  grid.push(row)

  for (let j = 0; j < W; j++) {
    if (row[j] === 'A') startA = [i, j]
    if (row[j] === 'B') startB = [i, j]
  }
}

const INF = 1e18
const distA: number[][] = Array.from({ length: H }, () => Array(W).fill(INF))
const distB: number[][] = Array.from({ length: H }, () => Array(W).fill(INF))

const q = []

if (first === 'A') {
  distA[startA[0]][startA[1]] = 0
  distB[startB[0]][startB[1]] = 1
}
else {
  distB[startB[0]][startB[1]] = 0
  distA[startA[0]][startA[1]] = 1
}

q.push([startA[0], startA[1], 'A'])
q.push([startB[0], startB[1], 'B'])

const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

while (q.length > 0) {
  q.sort((a, b) => {
    const da = a[2] === 'A' ? distA[a[0]][a[1]] : distB[a[0]][a[1]]
    const db = b[2] === 'A' ? distA[b[0]][b[1]] : distB[b[0]][b[1]]
    return da - db
  })

  const [y, x, who] = q.shift()
  const d = who === 'A' ? distA[y][x] : distB[y][x]

  for (const [dy, dx] of dirs) {
    const ny = y + dy
    const nx = x + dx

    if (ny < 0 || ny >= H || nx < 0 || nx >= W) continue
    if (grid[ny][nx] === '#') continue

    if (who === 'A') {
      if (distA[ny][nx] > d + 1 && distB[ny][nx] > d + 1) {
        distA[ny][nx] = d + 1
        q.push([ny, nx, 'A'])
      }
    }
    else if (distB[ny][nx] > d + 1 && distA[ny][nx] > d + 1) {
      distB[ny][nx] = d + 1
      q.push([ny, nx, 'B'])
    }
  }
}

let cntA = 0
let cntB = 0

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (grid[i][j] === '#') continue

    if (distA[i][j] < distB[i][j]) cntA++
    else if (distB[i][j] < distA[i][j]) cntB++
  }
}

console.log(cntA + ' ' + cntB)
console.log(cntA > cntB ? 'A' : 'B')
</script>
