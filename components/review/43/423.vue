<script setup lang="ts">
const lines = [
  '4 3',
  '1 2',
  '2 3',
  '3 4',
]
const firstLine = lines[0].split(' ').map(Number)
const n = firstLine[0]
const m = firstLine[1]

const graph: number[][] = Array.from({ length: n }, () => [])

for (let i = 0; i < m; i++) {
  const edge = lines[i + 1].split(' ').map(Number)

  const a = edge[0] - 1
  const b = edge[1] - 1

  graph[a].push(b)
  graph[b].push(a)
}

const visited: boolean[] = Array(n).fill(false)
const stack: number[] = [0]

visited[0] = true

while (stack.length > 0) {
  const current = stack.pop()!

  for (const next of graph[current]) {
    if (visited[next]) continue

    visited[next] = true
    stack.push(next)
  }
}

const isConnected = visited.every(hasVisited => hasVisited)

console.log(isConnected ? 'Yes' : 'No')
</script>
