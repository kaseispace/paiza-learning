<script setup lang="ts">
const lines = [
  'Japan',
  'Korea',
  'Australia',
  'China',
  'Czech',
  'Japan-Korea 1',
  'Japan-Australia 1',
  'Japan-China 1',
  'Japan-Czech 1',
  'Korea-Australia 0',
  'Korea-China 1',
  'Korea-Czech 1',
  'Australia-China 1',
  'Australia-Czech 1',
  'China-Czech 0',
]
const countries = lines.slice(0, 5)

const wins: { [country: string]: number } = {}
for (const c of countries) {
  wins[c] = 0
}

for (let i = 5; i < 15; i++) {
  const [pair, resultStr] = lines[i].split(' ')
  const result = Number(resultStr)
  const [left, right] = pair.split('-')

  if (result === 1) {
    wins[left]++
  }
  else {
    wins[right]++
  }
}

countries.sort((a, b) => {
  if (wins[b] !== wins[a]) {
    return wins[b] - wins[a]
  }
  return a < b ? -1 : a > b ? 1 : 0
})

console.log(countries[0])
console.log(countries[1])
</script>
