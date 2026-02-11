<script setup lang="ts">
type Observation = { M: number, D: number, x: number }

const lines = [
  '3 20',
  '4 3',
  '1',
  '3 28 5',
]
let idx = 0
const [MA, DA] = lines[idx++].trim().split(' ').map(Number)
const [MB, DB] = lines[idx++].trim().split(' ').map(Number)
const N = Number(lines[idx++].trim())

const obs: Observation[] = []
for (let i = 0; i < N; i++) {
  const [M, D, x] = lines[idx++].trim().split(' ').map(Number)
  obs.push({ M, D, x })
}

const toDay = (M: number, D: number) => (M === 3 ? D : 31 + D)

let total = 0
let openM = 0, openD = 0

for (const { M, D, x } of obs) {
  total += x
  if (total >= 5) {
    openM = M
    openD = D
    break
  }
}

const openDay = toDay(openM, openD)
const aDay = toDay(MA, DA)
const bDay = toDay(MB, DB)

const diffA = Math.abs(openDay - aDay)
const diffB = Math.abs(openDay - bDay)

console.log(openM + ' ' + openD)
if (diffA < diffB) {
  console.log('A')
}
else if (diffB < diffA) {
  console.log('B')
}
else {
  console.log('DRAW')
}
</script>
