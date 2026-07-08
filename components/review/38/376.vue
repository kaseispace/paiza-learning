<script setup lang="ts">
const lines = ['3 4 MON']
const [mStr, dStr, w] = lines[0].split(' ')

let month = Number(mStr)
let day = Number(dStr)
let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].indexOf(w)

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const holidays = new Set(['1/1', '1/14', '2/11', '3/21', '4/29', '4/30', '5/1', '5/2', '5/3', '5/4', '5/5', '5/6', '7/15', '8/12', '9/16', '9/23', '10/14', '10/22', '11/3', '11/4', '11/23'])

while (true) {
  day++
  week = (week + 1) % 7

  if (day > monthDays[month - 1]) {
    day = 1
    month++
  }

  const isWeekend = week === 0 || week === 6
  const isHoliday = holidays.has(`${month}/${day}`)

  if (!isWeekend && !isHoliday) {
    break
  }
}

console.log(`${month}月${day}日`)
</script>
