<script setup lang="ts">
const lines = [
  '3 2 2',
  '1 2 5',
  '2 3 1',
  '1 2 3',
  '3 2 1',
]
const [N, M, Q] = lines[0].split(' ').map(Number)
const INF = 999
const dist: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF))

for (let i = 1; i <= N; i++) {
  dist[i][i] = 0
}

let idx = 1

for (let i = 0; i < M; i++) {
  const [a, b, c] = lines[idx].split(' ').map(Number)
  dist[a][b] = c
  idx++
}

const answers: number[] = []

for (let i = 0; i < Q; i++) {
  const [d, e, f] = lines[idx].split(' ').map(Number)

  if (dist[d][e] === INF || dist[e][f] === INF) {
    answers.push(999)
  }
  else {
    answers.push(dist[d][e] + dist[e][f])
  }

  idx++
}

console.log(answers.join('\n'))
</script>
