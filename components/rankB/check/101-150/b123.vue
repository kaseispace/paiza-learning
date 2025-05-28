<script setup lang="ts">
const lines = [
  '3 3',
  '1 0 1',
  '1 1 1',
  '0 0 1',
  'a 1 0 0',
  'b 1 1 0',
  'c 0 0 1',
]
const [N] = lines[0].split(' ').map(Number)
const userCards = lines.slice(1, N + 1).map(line => line.split(' ').map(Number))
const cards = lines.slice(N + 1).map(line => line.split(' '))

cards.forEach(([rule, ...q]) => {
  userCards.forEach((hand, i) => {
    userCards[i] = hand.map((bit, j) => {
      if (rule === 'a') return bit | Number(q[j])
      if (rule === 'b') return bit & Number(q[j])
      return bit ^ Number(q[j])
    })
  })
})

const result = userCards.map(hand => parseInt(hand.join(''), 2))
const maxValue = Math.max(...result)

result.forEach((num, i) => {
  if (num === maxValue) {
    console.log(i + 1)
  }
})
</script>
