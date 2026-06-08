<script setup lang="ts">
const lines = [
  '3 5 1 1',
  '##.##',
  '.#..#',
  '#.##.',
  '2 3 1',
  '1',
]
const [H, W, N] = lines[0].split(' ').map(Number)
const HOLE = null
const grid: (string | number | null)[][] = Array.from({ length: H }, () => Array(W))

for (let r = 0; r < H; r++) {
  const s = lines[r + 1]

  for (let c = 0; c < W; c++) {
    grid[r][c] = s[c]
  }
}

const bombRow: number[] = Array(N + 1)
const bombCol: number[] = Array(N + 1)
const bombPower: number[] = Array(N + 1)
const bombPresent: boolean[] = Array(N + 1).fill(true)

for (let id = 1; id <= N; id++) {
  const [p, q, r] = lines[H + id].split(' ').map(Number)

  bombRow[id] = p - 1
  bombCol[id] = q - 1
  bombPower[id] = r

  grid[p - 1][q - 1] = id
}

const plan = lines[H + N + 1].split(' ').map(Number)

const blastCell = (r: number, c: number, queue: number[]) => {
  if (r < 0 || r >= H || c < 0 || c >= W) {
    return
  }

  const cell = grid[r][c]

  if (cell === HOLE) {
    return
  }

  if (typeof cell === 'number') {
    const id = cell

    if (bombPresent[id]) {
      bombPresent[id] = false
      queue.push(id)
    }
  }

  grid[r][c] = HOLE
}

const gravity = () => {
  for (let c = 0; c < W; c++) {
    let write = H - 1

    for (let r = H - 1; r >= 0; r--) {
      const cell = grid[r][c]

      if (cell !== HOLE) {
        grid[write][c] = cell

        if (typeof cell === 'number') {
          bombRow[cell] = write
          bombCol[cell] = c
        }

        write--
      }
    }

    while (write >= 0) {
      grid[write][c] = '.'
      write--
    }
  }
}

for (const startBomb of plan) {
  if (!bombPresent[startBomb]) {
    continue
  }

  bombPresent[startBomb] = false

  const queue = [startBomb]
  let head = 0

  while (head < queue.length) {
    const id = queue[head++]

    const r = bombRow[id]
    const c = bombCol[id]
    const power = bombPower[id]

    for (let dc = -power; dc <= power; dc++) {
      blastCell(r, c + dc, queue)
    }

    for (let dr = -power; dr <= power; dr++) {
      blastCell(r + dr, c, queue)
    }
  }

  gravity()
}

const answer: string[] = []

for (let r = 0; r < H; r++) {
  let row = ''

  for (let c = 0; c < W; c++) {
    const cell = grid[r][c]

    if (typeof cell === 'number') {
      row += '$'
    }
    else {
      row += cell
    }
  }

  answer.push(row)
}

console.log(answer.join('\n'))
</script>
