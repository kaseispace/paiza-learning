<script setup lang="ts">
const lines = [
  '4',
  '和',
  '平',
  '成',
  '令',

]
const N = Number(lines[0])
const K: string[] = []

for (let i = 0; i < N; i++) {
  K.push(lines[i + 1].trim())
}

const answer: string[] = []
let count = 0

for (let i = 0; i < N && count < 1000; i++) {
  for (let j = 0; j < N && count < 1000; j++) {
    answer.push(K[i] + K[j])
    count++
  }
}

if (K.includes('令') && K.includes('和')) {
  answer.push('Nice')
}
else {
  answer.push('Bad')
}

console.log(answer.join('\n'))
</script>
