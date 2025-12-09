<script setup lang="ts">
type Direction = 'N' | 'E' | 'S' | 'W'
type Move = 'F' | 'B' | 'L' | 'R'

const lines = [
  '2 6 0 4 E L',
  '####..',
  '##..#.',
]
const [H, W, sy, sx, dRaw, mRaw] = lines[0].split(' ')
const d = dRaw as Direction // 型を Direction にキャスト
const m = mRaw as Move
const map = lines.slice(1)

const HH = Number(H), WW = Number(W)
const y = Number(sy), x = Number(sx)

const dir = {
  N: [-1, 0],
  E: [0, 1],
  S: [1, 0],
  W: [0, -1],
}

const left = { N: 'W', W: 'S', S: 'E', E: 'N' }
const right = { N: 'E', E: 'S', S: 'W', W: 'N' }

let moveDir = d
if (m === 'F') {
  // そのまま
}
else if (m === 'B') {
  // 逆方向
  const [dy, dx] = dir[d]
  const ny = y - dy
  const nx = x - dx
  if (ny < 0 || ny >= HH || nx < 0 || nx >= WW || map[ny][nx] === '#') {
    console.log('No')
  }
  else {
    console.log('Yes')
  }
  process.exit(0)
}
else if (m === 'L') {
  moveDir = left[d]
}
else if (m === 'R') {
  moveDir = right[d]
}

const [dy, dx] = dir[moveDir]
const ny = y + dy
const nx = x + dx

if (ny < 0 || ny >= HH || nx < 0 || nx >= WW || map[ny][nx] === '#') {
  console.log('No')
}
else {
  console.log('Yes')
}
</script>
