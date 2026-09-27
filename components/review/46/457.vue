<script setup lang="ts">
const lines = [
  '10 2',
  '34',
  '44',
  '12',
  '23',
  '8',
  '-29',
  '-11',
  '79',
  '11',
  '99',
  '1 4',
  '5 7',
]
const [N, K] = lines[0].split(' ').map(Number)
const A: number[] = []

for (let i = 0; i < N; i++) {
  A.push(Number(lines[i + 1]))
}

const answer: number[] = []

for (let i = 0; i < K; i++) {
  const [L, R] = lines[N + 1 + i].split(' ').map(Number)

  let maxValue = -Infinity

  for (let j = L - 1; j < R; j++) {
    maxValue = Math.max(maxValue, A[j])
  }

  answer.push(maxValue)
}

console.log(answer.join('\n'))
</script>
