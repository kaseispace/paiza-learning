<script setup lang="ts">
const lines = [
  '7',
  '7',
  '7',
  '7',
  '7',
  '7',
  '7',
  '7',
]
const N = Number(lines[0])
const scores: number[] = []

for (let i = 0; i < N; i++) {
  scores.push(Number(lines[i + 1]))
}

const sum = scores.reduce((total, score) => total + score, 0)
const average = sum / N

let answer = 0

for (const score of scores) {
  answer += Math.max(score, average)
}

answer /= N

console.log(answer.toFixed(10))
</script>
