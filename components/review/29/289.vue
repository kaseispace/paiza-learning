<script setup lang="ts">
const lines = [
  '3',
  'H10 CJ D5',
  '2',
  'S9 D8',
]

function score(cards: string[]) {
  let total = 0
  let aces = 0

  for (const c of cards) {
    const rank = c.slice(1)
    if (rank === 'A') {
      aces++
      total += 11
    }
    else if (['J', 'Q', 'K'].includes(rank) || rank === '10') {
      total += 10
    }
    else {
      total += Number(rank)
    }
  }

  while (total >= 22 && aces > 0) {
    total -= 10
    aces--
  }

  return total
}

const playerCards = lines[1].split(' ')
const dealerCards = lines[3].split(' ')

const ps = score(playerCards)
const ds = score(dealerCards)

let result = ''

if (ps >= 22) {
  result = 'LOSE'
}
else if (ds >= 22) {
  result = 'WIN'
}
else if (ps > ds) {
  result = 'WIN'
}
else if (ps < ds) {
  result = 'LOSE'
}
else {
  result = 'DRAW'
}

console.log(result)
</script>
