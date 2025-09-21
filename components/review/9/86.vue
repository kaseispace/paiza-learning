<script setup lang="ts">
const lines = [
  '5 5 3',
  '2',
  '2 5',
  '3',
  '1 3 5',
  '3',
  '2 4 5',
  '2',
  '3 5',
  '4',
  '1 2 3 4',
]
const [n, s, t] = lines[0].split(' ').map(Number)
const graph: number[][] = Array.from({ length: n + 1 }, () => [])

for (let i = 0; i < n; i++) {
  const neighbors = lines[2 + i * 2].split(' ').map(Number)
  graph[i + 1].push(...neighbors)
}

const results: number[][] = []

const dfs = (current: number, visited: boolean[], path: number[]) => {
  if (current === t) {
    results.push(path.slice())
    return
  }

  for (const next of graph[current]) {
    if (!visited[next]) {
      visited[next] = true
      path.push(next)
      dfs(next, visited, path)
      path.pop()
      visited[next] = false
    }
  }
}

const visited: boolean[] = Array(n + 1).fill(false)
visited[s] = true
dfs(s, visited, [s])

console.log(results.length)
results.forEach(path => console.log(path.join(' ')))
</script>
