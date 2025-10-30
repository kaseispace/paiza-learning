<script setup lang="ts">
const lines = ['3']
const K = Number(lines[0])

const suits = ['S', 'H', 'D', 'C']
const deck: string[] = []
for (const suit of suits) {
  for (let i = 1; i <= 13; i++) {
    deck.push(`${suit}_${i}`)
  }
}

for (let k = 0; k < K; k++) {
  const top = deck.slice(0, 26)
  const bottom = deck.slice(26)
  const newDeck: string[] = []

  for (let i = 0; i < 26; i++) {
    newDeck.push(top[i])
    newDeck.push(bottom[i])
  }
  deck.splice(0, 52, ...newDeck)
}

for (const card of deck) {
  console.log(card)
}
</script>
