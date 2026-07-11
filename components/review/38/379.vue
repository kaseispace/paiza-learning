<script setup lang="ts">
const lines = ['1']
const X = Number(lines[0])

const isLeap = (year: number) => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

const daysInMonth = (year: number, month: number) => {
  if (month === 2) return isLeap(year) ? 29 : 28
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30
  return 31
}

let weekday = 3

const count: number[] = Array(7).fill(0)

for (let year = 1800; year < 2200; year++) {
  for (let month = 1; month <= 12; month++) {
    const lastDay = daysInMonth(year, month)

    const lastWeekday = (weekday + lastDay - 1) % 7

    let businessWeekday

    if (lastWeekday === 6) {
      businessWeekday = 5
    }
    else if (lastWeekday === 0) {
      businessWeekday = 5
    }
    else {
      businessWeekday = lastWeekday
    }

    count[businessWeekday]++

    weekday = (weekday + lastDay) % 7
  }
}

const ans = Math.floor((count[X] / 4800) * 1000000) / 1000000

console.log(ans.toFixed(6))
</script>
