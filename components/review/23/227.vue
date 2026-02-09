<script setup lang="ts">
type Dan = '一' | '二' | '三' | '四' | '五' | '六' | '七' | '八' | '九'

const lines = [
  '6五',
  'ーーー ーーー ーーー ーーー ーーー ーーー ーーー 黒王将 ーーー',
  'ーーー ーーー ーーー ーーー ーーー ーーー 黒桂馬 ーーー ーーー',
  'ーーー ーーー ーーー ーーー ーーー ーーー 黒銀将 ーーー ーーー',
  'ーーー ーーー ーーー ーーー ーーー ーーー 白桂馬 ーーー ーーー',
  'ーーー 白龍馬 ーーー 黒龍馬 ーーー 白香車 ーーー 白歩兵 ーーー',
  'ーーー ーーー 白桂馬 ーーー ーーー ーーー ーーー ーーー ーーー',
  'ーーー ーーー 白金将 ーーー ーーー ーーー ーーー ーーー ーーー',
  'ーーー 黒と金 黒成桂 白と金 ーーー ーーー ーーー ーーー ーーー',
  'ーーー ーーー ーーー ーーー 白王将 ーーー ーーー ーーー ーーー',
]
const danMap: Record<Dan, number> = {
  九: 0, 八: 1, 七: 2, 六: 3,
  五: 4, 四: 5, 三: 6, 二: 7, 一: 8,
}

const revDan = ['九', '八', '七', '六', '五', '四', '三', '二', '一']

const sujiToX = (s: string): number => Number(s) - 1
const xToSuji = (x: number): string => String(x + 1)

const P = lines[0].trim()
const board = lines.slice(1).map(row => row.split(' '))

const suji = P[0]
const dan = P[1] as Dan
const x = sujiToX(suji)
const y = danMap[dan]

const piece = board[y][x]
const color = piece[0]

const dy = (color === '白') ? -1 : 1
const moves = []

let ny = y + dy
while (0 <= ny && ny < 9) {
  const cell = board[ny][x]

  if (cell === 'ーーー') {
    moves.push(xToSuji(x) + revDan[ny])
  }
  else {
    if (cell[0] !== color) {
      moves.push(xToSuji(x) + revDan[ny])
    }

    break
  }

  ny += dy
}

if (color === '白') {
  moves.reverse()
}

console.log(moves.length)
for (const m of moves) console.log(m)
</script>
