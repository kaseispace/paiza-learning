<script setup lang="ts">
const lines = [
  '10',
  '90',
  '90',
  '90',
  '80',
  '50',
  '50',
  '30',
  '20',
  '20',
  '20',

]
const N = Number(lines[0])
const scores: number[] = []

for (let i = 0; i < N; i++) {
  scores.push(Number(lines[i + 1]))
}

const sorted = [...scores].sort((a, b) => b - a)
const rank: Map<number, number> = new Map()

for (let i = 0; i < N; i++) {
  if (!rank.has(sorted[i])) {
    rank.set(sorted[i], i + 1)
  }
}

const answer: number[] = []

for (const score of scores) {
  answer.push(rank.get(score)!)
}

console.log(answer.join('\n'))
</script>
