<script setup lang="ts">
const lines = ['pppazzzaipza']
const s = lines[0]
let index = 0
const word = 'paiza'

for (let i = 0; i < s.length; i++) {
  if (word[index] === s[i]) {
    index++
  }

  if (word.length === index) break
}

console.log(word.length === index ? 'Yes' : 'No')
</script>
