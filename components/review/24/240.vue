<script setup lang="ts">
const lines = ['100000000000 1 1']
const [y, m, d] = lines[0].split(' ').map(Number)

const isLeap = (y: number) => {
  if (y % 400 === 0) return true
  if (y % 100 === 0) return false
  return y % 4 === 0
}

const monthDaysCommon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const daysBeforeMonth = (y: number, m: number) => {
  let days = 0
  for (let mm = 1; mm < m; mm++) {
    if (mm === 2 && isLeap(y)) days += 29
    else days += monthDaysCommon[mm - 1]
  }
  return days
}

const totalDaysFrom1800 = (y: number, m: number, d: number) => {
  const years = y - 1800
  const L = (n: number): number => Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)
  const leaps = L(y - 1) - L(1799)
  const daysYears = years * 365 + leaps
  const daysMonths = daysBeforeMonth(y, m)
  const daysDay = d - 1
  return daysYears + daysMonths + daysDay
}

const delta = totalDaysFrom1800(y, m, d)
const week = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
const idx = (3 + delta) % 7

console.log(week[idx])
</script>
