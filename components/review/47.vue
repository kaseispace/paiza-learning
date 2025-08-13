<script setup lang="ts">
const lines = [
  '5 6 1',
  '1 2',
  '2 3',
  '2 4',
  '3 5',
  '4 5',
  '1 5',
]
const [N, , X] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const graph: number[][] = Array.from({ length: N + 1 }, () => [])
for (const [a, b] of edges) {
  graph[a].push(b)
  graph[b].push(a)
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b)
}

const visited = Array(N + 1).fill(false)
const result: number[] = []

const dfs = (node: number) => {
  visited[node] = true
  result.push(node)
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor)
    }
  }
}

dfs(X)
console.log(result.join('\n'))
</script>
