<script setup lang="ts">
const lines = ['2019 4']
const [y, m] = lines[0].split(' ').map(Number)

const isLeap = (year: number) => {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

const daysInMonth = (year: number, month: number) => {
  if (month === 2) {
    return isLeap(year) ? 29 : 28
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30
  }

  return 31
}

let days = 0

for (let year = 1800; year < y; year++) {
  days += isLeap(year) ? 366 : 365
}

for (let month = 1; month < m; month++) {
  days += daysInMonth(y, month)
}

const firstWeekday = (3 + days) % 7
const lastDay = daysInMonth(y, m)
let day = 1

for (let row = 0; row < 6; row++) {
  const line: string[] = []

  for (let col = 0; col < 7; col++) {
    if ((row === 0 && col < firstWeekday) || day > lastDay) {
      line.push('  ')
    }
    else {
      line.push(String(day).padStart(2, ' '))
      day++
    }
  }

  console.log(line.join(' '))
}
</script>
