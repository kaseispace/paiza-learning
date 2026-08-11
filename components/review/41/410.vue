<script setup lang="ts">
const lines = ['1873 1 1']
const [y, m, d] = lines[0].split(' ').map(Number)
let era: string
let year: number

if (y < 1912 || (y === 1912 && m <= 7 && d <= 29)) {
  era = '明治'
  year = y - 1867
}
else if (y < 1926 || (y === 1926 && m <= 12 && d <= 24)) {
  era = '大正'
  year = y - 1911
}
else if (y < 1989 || (y === 1989 && m <= 1 && d <= 7)) {
  era = '昭和'
  year = y - 1925
}
else if (y < 2019 || (y === 2019 && m <= 4 && d <= 30)) {
  era = '平成'
  year = y - 1988
}
else {
  era = '令和'
  year = y - 2018
}

const yearText = year === 1 ? '元' : String(year)

console.log(`${era}${yearText}年${m}月${d}日`)
</script>
