<script setup lang="ts">
const lines = [
  '12',
  '72',
  '130',
  '125',
  '93',
  '101',
  '75',
  '99',
  '88',
  '93',
  '102',
  '87',
  '115',
]
const n = Number(lines[0])
const m: number[] = []

for (let i = 0; i < n; i++) {
  m.push(Number(lines[i + 1]))
}

let minDay = 0
let minRate = m[0]

let buyDay = -1
let sellDay = -1
let bestBuyRate = 1
let bestSellRate = 1

for (let j = 1; j < n; j++) {
  const rate = m[j]

  if (rate > minRate) {
    if (buyDay === -1) {
      buyDay = minDay
      sellDay = j
      bestBuyRate = minRate
      bestSellRate = rate
    }
    else if (BigInt(rate) * BigInt(bestBuyRate) > BigInt(bestSellRate) * BigInt(minRate)) {
      buyDay = minDay
      sellDay = j
      bestBuyRate = minRate
      bestSellRate = rate
    }
  }

  if (rate < minRate) {
    minRate = rate
    minDay = j
  }
}

if (buyDay === -1 || bestSellRate <= bestBuyRate) {
  console.log('No')
}
else {
  console.log(buyDay + 1)
  console.log(sellDay + 1)
}
</script>
