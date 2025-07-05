<script setup lang="ts">
const lines = ['ABCD']
const s = lines[0].trim().split('')
const wild = s.filter(c => c === '*').length
const counts: Map<string, number> = new Map()

for (const c of s) {
  if (c === '*') continue
  counts.set(c, (counts.get(c) || 0) + 1)
}

const freq = [...counts.values()].sort((a, b) => b - a)

if (wild > 0) {
  if (freq.length === 0) {
    freq.push(4)
  }
  else {
    freq[0] += 1
  }
}

let result = 'NoPair'
if (freq[0] === 4) {
  result = 'FourCard'
}
else if (freq[0] === 3) {
  result = 'ThreeCard'
}
else if (freq[0] === 2 && freq[1] === 2) {
  result = 'TwoPair'
}
else if (freq[0] === 2) {
  result = 'OnePair'
}

console.log(result)
</script>
