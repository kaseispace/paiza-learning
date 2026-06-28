<script setup lang="ts">
const lines = [
  '10 5',
  '932677855 584814701 520826353 189926931 555327326 469526104 693813689 89379454 449888666 489015669',
  '9 0',
  '9 0',
  '1 0',
  '8 1',
  '5 2',
]
const [, Q] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)
const answers: number[] = []

for (let q = 0; q < Q; q++) {
  const [i, k] = lines[q + 2].split(' ').map(Number)

  const len = 1 << k
  let minValue = Infinity

  for (let j = i; j < i + len; j++) {
    minValue = Math.min(minValue, A[j])
  }

  answers.push(minValue)
}

console.log(answers.join('\n'))
</script>
