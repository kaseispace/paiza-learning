<script setup lang="ts">
const lines = [
  '4 1 4',
  '1 2',
  '1 3',
  '3 4',
]
const [n, x, y] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const graph: number[][] = Array.from({ length: n + 1 }, () => [])
for (const [a, b] of edges) {
  graph[a].push(b)
  graph[b].push(a)
}

const visited: boolean[] = Array(n + 1).fill(false)
const dist: number[] = Array(n + 1).fill(0)
const queue = [x]
visited[x] = true

while (queue.length > 0) {
  const u = queue.shift()!
  for (const v of graph[u]) {
    if (!visited[v]) {
      visited[v] = true
      dist[v] = dist[u] + 5
      queue.push(v)
    }
  }
}

const penalty = graph[x].length >= 2 ? 10 : 0
console.log(dist[y] + penalty)
</script>
