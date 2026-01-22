<script setup lang="ts">
const lines = ['10 200']
const [m, n] = lines[0].split(' ').map(Number)
let cards = Array.from({ length: m }, (_, i) => i + 1)

const perfectShuffle = (deck: number[]) => {
  const half = deck.length / 2
  const left = deck.slice(0, half)
  const right = deck.slice(half)
  const shuffled: number[] = []

  for (let i = 0; i < half; i++) {
    shuffled.push(right[i], left[i])
  }

  return shuffled
}

for (let i = 0; i < n; i++) {
  cards = perfectShuffle(cards)
}

console.log(cards.join(' '))
</script>
