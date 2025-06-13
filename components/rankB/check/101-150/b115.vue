<script setup lang="ts">
const lines = [
  '6',
  'coin',
  'come',
  'creation',
  'economic',
  'rate',
  'reaction',
]
const N = Number(lines[0])
const words = lines.slice(1)
const sortedWords: Map<string, number> = new Map()
let result = 0

words.forEach((word) => {
  const sortWord = word.split('').sort().join('')
  sortedWords.set(sortWord, (sortedWords.get(sortWord) ?? 0) + 1)
})

for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    const merged = [...words[i], ...words[j]].sort().join('')
    if (sortedWords.has(merged)) {
      result += sortedWords.get(merged)!
    }
  }
}

console.log(result)
</script>
