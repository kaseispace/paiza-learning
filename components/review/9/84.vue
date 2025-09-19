<script setup lang="ts">
const lines = ['2019 4 8']
const [y, m, d] = lines[0].split(' ').map(Number)

const isLeap = (Y: number) => {
  return (Y % 400 === 0) || (Y % 4 === 0 && Y % 100 !== 0)
}

const daysInMonth = (Y: number, M: number) => {
  if (M === 2) return isLeap(Y) ? 29 : 28
  if (M === 4 || M === 6 || M === 9 || M === 11) return 30
  return 31
}

let days = 0
for (let Y = 1800; Y < y; Y++) {
  days += isLeap(Y) ? 366 : 365
}

for (let M = 1; M < m; M++) {
  days += daysInMonth(y, M)
}

days += (d - 1)
const base = 3
const w = (base + days) % 7
const names = ['日', '月', '火', '水', '木', '金', '土']

console.log(names[w] + '曜日')
</script>
