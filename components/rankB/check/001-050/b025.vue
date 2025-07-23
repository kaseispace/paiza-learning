<script setup lang="ts">
const lines = [
  '5 2 2',
  '1',
  '2',
]
const [N, M, K] = lines[0].split(' ').map(Number)
const inputRabbits = lines.slice(1).map(Number)
const rabbits = inputRabbits.map(x => x - 1)

for (let k = 0; k < K; k++) {
  const bushes: (number | null)[] = new Array(N).fill(null)
  for (let i = 0; i < M; i++) {
    bushes[rabbits[i]] = i
  }

  for (let i = 0; i < M; i++) {
    const curr = rabbits[i]

    for (let j = 1; j < N; j++) {
      const next = (curr + j) % N
      if (bushes[next] === null) {
        bushes[curr] = null
        bushes[next] = i
        rabbits[i] = next
        break
      }
    }
  }
}

for (let i = 0; i < M; i++) {
  console.log(rabbits[i] + 1)
}
</script>
