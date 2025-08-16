<script setup lang="ts">
const lines = [
  '5 3',
  '3 2',
  '3 4',
  '3 5',
  '2 1',
  '4 2',
  '1',
  '3',
  '4',
  '5',
]
const [N] = lines[0].split(' ').map(Number)
const edges = lines.slice(1, N).map(line => line.split(' ').map(Number))
const [, r] = lines[N].split(' ').map(Number)
const queries = lines.slice(N + 1).map(Number)

const graph: number[][] = Array.from({ length: N + 1 }, () => [])
for (const [a, b] of edges) {
  graph[a].push(b)
  graph[b].push(a)
}

const parent: (number | null)[] = Array(N + 1).fill(null)
const visited: boolean[] = Array(N + 1).fill(false)

const dfs = (node: number, par: number | null) => {
  visited[node] = true
  parent[node] = par
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, node)
    }
  }
}

dfs(r, null)

for (const v of queries) {
  console.log(parent[v])
}
</script>
