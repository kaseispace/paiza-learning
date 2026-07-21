<script setup lang="ts">
const lines = ['2019 5 1']
const [y, m, d] = lines[0].split(' ').map(Number)
let era: string

if (y > 2019 || (y === 2019 && (m > 5 || (m === 5 && d >= 1)))) {
  era = '令和'
}
else if (y > 1989 || (y === 1989 && (m > 1 || (m === 1 && d >= 8)))) {
  era = '平成'
}
else if (y > 1926 || (y === 1926 && (m > 12 || (m === 12 && d >= 25)))) {
  era = '昭和'
}
else if (y > 1912 || (y === 1912 && (m > 7 || (m === 7 && d >= 30)))) {
  era = '大正'
}
else {
  era = '明治'
}

console.log(`${era}年${m}月${d}日`)
</script>
