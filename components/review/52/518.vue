<script setup lang="ts">
const lines = [
  '10 1',
  '1 2',
  '1 3',
  '2 4',
  '5 3',
  '6 3',
  '7 3',
  '5 8',
  '9 5',
  '7 10',
]
const [N, R] = lines[0].split(' ').map(Number)
const edges: [number, number][] = []
const graph: number[][] = Array.from({ length: N + 1 }, () => [])

for (let i = 1; i < N; i++) {
  const [a, b] = lines[i].split(' ').map(Number)

  edges.push([a, b])

  graph[a].push(b)
  graph[b].push(a)
}

const parent: number[] = Array(N + 1).fill(0)

const queue = [R]
parent[R] = -1

let head = 0

while (head < queue.length) {
  const current = queue[head++]

  for (const next of graph[current]) {
    if (parent[next] !== 0) {
      continue
    }

    parent[next] = current
    queue.push(next)
  }
}

const answer: string[] = []

for (const [a, b] of edges) {
  if (parent[b] === a) {
    answer.push('A')
  }
  else {
    answer.push('B')
  }
}

console.log(answer.join('\n'))
</script>
