<script setup lang="ts">
const lines = [
  '5 1',
  '2 2',
  '1 3',
  '6 1',
  '6 3',
  '7 4',
]
const [N, R] = lines[0].split(' ').map(Number)
const spots = lines.slice(1).map(line => line.split(' ').map(Number))

function countIslands(N: number, R: number, coords: number[][]) {
  const adj: number[][] = Array.from({ length: N }, () => [])
  const visited: boolean[] = Array(N).fill(false)

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const [x1, y1] = coords[i]
      const [x2, y2] = coords[j]
      const dx = x1 - x2
      const dy = y1 - y2
      if (dx * dx + dy * dy <= 4 * R * R) {
        adj[i].push(j)
        adj[j].push(i)
      }
    }
  }

  let islands = 0

  function dfs(v: number) {
    visited[v] = true
    for (const next of adj[v]) {
      if (!visited[next]) dfs(next)
    }
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      dfs(i)
      islands++
    }
  }

  return islands
}

console.log(countIslands(N, R, spots))
</script>
