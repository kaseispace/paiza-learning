<script setup lang="ts">
const lines = [
  '7 5',
  'game_start',
  'discard 34',
  'return_from_the_graveyard 34',
  'draw 20',
  'draw 14',
]
const [N, K] = lines[0].split(' ').map(Number)
const events = lines.slice(1)

const deck = Array.from({ length: 40 }, (_, i) => i + 1)
const graveyard: number[] = []
const exclusion: number[] = []

for (let i = 0; i < K; i++) {
  const parts = events[i].split(' ')
  const cmd = parts[0]

  if (cmd === 'game_start' || cmd === 'draw') {
    const count = cmd === 'game_start' ? 5 : Number(parts[1])
    for (let j = 0; j < count; j++) {
      const card = deck.shift()
      if (card === N) {
        console.log(i + 1)
        return
      }
    }
  }
  else if (cmd === 'discard') {
    const count = Number(parts[1])
    for (let j = 0; j < count; j++) {
      graveyard.unshift(deck.shift()!)
    }
  }
  else if (cmd === 'return_from_the_graveyard') {
    const count = Number(parts[1])
    for (let j = 0; j < count; j++) {
      deck.push(graveyard.shift()!)
    }
  }
  else if (cmd === 'exclude') {
    const count = Number(parts[1])
    for (let j = 0; j < count; j++) {
      exclusion.unshift(deck.shift()!)
    }
  }
  else if (cmd === 'return_from_the_exclusion') {
    const count = Number(parts[1])
    for (let j = 0; j < count; j++) {
      deck.push(exclusion.shift()!)
    }
  }
}

console.log('Lose')
</script>
