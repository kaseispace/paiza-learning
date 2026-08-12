<script setup lang="ts">
const lines = [
  '5三',
  'ーーー ーーー ーーー ーーー ーーー ーーー ーーー 黒王将 ーーー',
  'ーーー ーーー ーーー ーーー ーーー ーーー 黒桂馬 ーーー ーーー',
  'ーーー ーーー ーーー ーーー ーーー ーーー 黒銀将 ーーー ーーー',
  'ーーー ーーー ーーー ーーー 黒金将 ーーー 白桂馬 ーーー ーーー',
  'ーーー 白龍馬 ーーー 黒龍馬 ーーー 白香車 ーーー 白歩兵 ーーー',
  'ーーー ーーー 白桂馬 ーーー ーーー ーーー ーーー ーーー ーーー',
  'ーーー ーーー 白金将 ーーー 白飛車 ーーー ーーー ーーー ーーー',
  'ーーー 黒と金 黒成桂 白と金 ーーー ーーー ーーー ーーー ーーー',
  'ーーー ーーー ーーー ーーー 白王将 ーーー ーーー ーーー ーーー',

]
const P = lines[0]
const board: string[][] = []

for (let i = 1; i <= 9; i++) {
  board.push(lines[i].trim().split(/\s+/))
}

const x = Number(P[0]) - 1

const kanji: Record<string, number> = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
}

const rank = kanji[P[1]]
const y = 9 - rank

const rook = board[y][x]
const myColor = rook[0] === '白' ? '白' : '黒'

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
const answer: number[][] = []

for (const [dx, dy] of directions) {
  let nx = x + dx
  let ny = y + dy

  while (nx >= 0 && nx < 9 && ny >= 0 && ny < 9) {
    const piece = board[ny][nx]

    if (piece === 'ーーー') {
      answer.push([nx, ny])
    }
    else {
      if (piece[0] !== myColor) {
        answer.push([nx, ny])
      }

      break
    }

    nx += dx
    ny += dy
  }
}

answer.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1]
  }

  return a[0] - b[0]
})

const rankKanji = ['一', '二', '三', '四', '五', '六', '七', '八', '九']
const result = [String(answer.length)]

for (const [x, y] of answer) {
  const rank = 9 - y
  result.push(`${x + 1}${rankKanji[rank - 1]}`)
}

console.log(result.join('\n'))
</script>
