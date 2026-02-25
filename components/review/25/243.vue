<script setup lang="ts">
const lines = ['red green blue blue green blue']
const words = lines[0].trim().split(' ')

const freq: Map<string, number> = new Map()

for (const w of words) {
  if (freq.has(w)) {
    freq.set(w, freq.get(w)! + 1)
  }
  else {
    freq.set(w, 1)
  }
}

for (const [word, count] of freq) {
  console.log(word + ' ' + count)
}
</script>
