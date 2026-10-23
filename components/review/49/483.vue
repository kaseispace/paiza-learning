<script setup lang="ts">
const lines = [
  '2',
  'H3 S5',
]
const used = new Set((lines[1] || '').split(/\s+/).filter(s => s !== ''))

const suits = ['H', 'S', 'D', 'C']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const rest: string[] = []

for (const s of suits) {
  for (const r of ranks) {
    const card = s + r
    if (!used.has(card)) rest.push(card)
  }
}

console.log(rest.join(' '))
</script>
