<script setup lang="ts">
const lines = [
  '7',
  '1 3',
  '1 5',
  '1 7',
  '2 3',
  '3 4',
  '5 6',
]
const N = parseInt(lines[0])
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const graph: number[][] = Array.from({ length: N + 1 }, () => [])
for (const [a, b] of edges) {
  graph[a].push(b)
  graph[b].push(a)
}

const bfs = (start: number) => {
  const visited: boolean[] = Array(N + 1).fill(false)
  const dist: number[] = Array(N + 1).fill(0)
  const queue = [start]
  visited[start] = true

  while (queue.length > 0) {
    const node = queue.shift()!
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        dist[neighbor] = dist[node] + 1
        queue.push(neighbor)
      }
    }
  }

  let maxDist = 0
  let farthestNode = start
  for (let i = 1; i <= N; i++) {
    if (dist[i] > maxDist) {
      maxDist = dist[i]
      farthestNode = i
    }
  }

  return [farthestNode, maxDist]
}

const [u] = bfs(1)
const [, diameter] = bfs(u)
console.log(diameter)
</script>
