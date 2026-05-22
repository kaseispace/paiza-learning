<script setup lang="ts">
const lines = [
  'C7',
  '8',
  'H7 C9 D10 S2 D2 S3 H5 BJOKER',
]
const C = lines[0]
const T = lines[2].split(' ')

const rankOrder = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', 'JOKER']
const rankValue: Record<string, number> = {}
rankOrder.forEach((v, i) => (rankValue[v] = i))

const suitValue: Record<string, number> = { C: 0, D: 1, H: 2, S: 3 }

const parseCard = (card: string): { suit: string, rank: string } => {
  if (card === 'BJOKER' || card === 'RJOKER') {
    return { suit: card, rank: 'JOKER' }
  }

  const suit = card[0]
  const rank = card.slice(1)
  return { suit, rank }
}

const cardStrength = (card: string): number => {
  if (card === 'BJOKER') return 1000
  if (card === 'RJOKER') return 999

  const { suit: _, rank } = parseCard(card)
  return rankValue[rank]
}

const baseStrength = cardStrength(C)
const playable: string[] = T.filter(card => cardStrength(card) > baseStrength)

playable.sort((a, b) => {
  if (a === 'BJOKER') return -1
  if (b === 'BJOKER') return 1
  if (a === 'RJOKER') return -1
  if (b === 'RJOKER') return 1

  const pa = parseCard(a)
  const pb = parseCard(b)

  if (suitValue[pa.suit] !== suitValue[pb.suit]) {
    return suitValue[pb.suit] - suitValue[pa.suit]
  }

  return rankValue[pb.rank] - rankValue[pa.rank]
})

console.log(playable.length)
for (const card of playable) console.log(card)
</script>
