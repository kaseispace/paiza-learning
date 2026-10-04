<script setup lang="ts">
const lines = [
  '5',
  '2 3 4 5 1',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)
const answer: number[] = []

for (let i = 0; i < n; i++) {
  const nextVertex = a[i]
  const twoStepsLater = a[nextVertex - 1]

  answer.push(twoStepsLater)
}

console.log(answer.join('\n'))
</script>
