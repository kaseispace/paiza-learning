<script setup lang="ts">
const lines = [
  '5 5 1',
  '1 2 4',
  '1 3 9',
  '2 4 1',
  '4 5 3',
  '5 2 3',
]
const [N, M, s] = lines[0].split(' ').map(Number)
const edges: [number, number, number][] = []

for (let i = 0; i < M; i++) {
  const [a, b, c] = lines[i + 1].split(' ').map(Number)
  edges.push([a - 1, b - 1, c])
}

const INF: number = 1e18

let dist: number[] = Array(N).fill(INF)
dist[s - 1] = 0

for (let step = 0; step < 2; step++) {
  const next = [...dist]

  for (const [u, v, w] of edges) {
    if (dist[u] === INF) continue

    next[v] = Math.min(next[v], dist[u] + w)
  }

  dist = next
}

const ans: string[] = []

for (let i = 0; i < N; i++) {
  if (dist[i] === INF) {
    ans.push('inf')
  }
  else {
    ans.push(String(dist[i]))
  }
}

console.log(ans.join('\n'))
</script>
