<script setup lang="ts">
const lines = [
  '3',
  '2 29',
  '1 1',
  '12 31',
  '4 1',
]
const N = Number(lines[0])
const [M0, D0] = lines[1].split(' ').map(Number)
const classmates = lines.slice(2, 2 + N).map(l => l.split(' ').map(Number))
const mdays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const dayOfYear = (m: number, d: number) => {
  let s = 0
  for (let i = 1; i < m; i++) s += mdays[i]
  return s + d
}

const selfDOY = dayOfYear(M0, D0)
const allDOY = [selfDOY, ...classmates.map(([m, d]) => dayOfYear(m, d))]

// 1月1日からの順位
const sortedJan1 = [...allDOY].sort((a, b) => a - b)
const rankJan1 = sortedJan1.indexOf(selfDOY) + 1

// 4月2日からの順位
const base = dayOfYear(4, 2)
const dist = allDOY.map(d => (d - base + 366) % 366)
const sortedApr2 = [...dist].sort((a, b) => a - b)
const selfDist = (selfDOY - base + 366) % 366
const rankApr2 = sortedApr2.indexOf(selfDist) + 1

console.log(rankJan1)
console.log(rankApr2)
</script>
