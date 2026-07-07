<script setup lang="ts">
const lines = ['2019 4 9']
const [y, m, d] = lines[0].split(' ').map(BigInt)

const countDivLessThan = (y: bigint, n: bigint) => {
  if (y === 0n) return 0n
  return (y - 1n) / n + 1n
}

const leap = countDivLessThan(y, 4n) - countDivLessThan(y, 100n) + countDivLessThan(y, 400n)

const week = ['木', '金', '土', '日', '月', '火', '水']

const days = y * 360n + leap + (m - 1n) * 30n + (d - 1n)

console.log(`${week[Number(days % 7n)]}曜日`)
</script>
