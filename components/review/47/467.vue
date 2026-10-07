<script setup lang="ts">
const lines = [
  '3 3',
  '1 2',
  '2 3',
  '3 2',
]
const [n, m] = lines[0].split(' ').map(Number)

const graph: number[][] = Array.from({ length: n }, () => [])
const reverseGraph: number[][] = Array.from({ length: n }, () => [])

for (let i = 0; i < m; i++) {
  const [a, b] = lines[i + 1].split(' ').map(Number)

  const from = a - 1
  const to = b - 1

  graph[from].push(to)
  reverseGraph[to].push(from)
}

function canReachAll(targetGraph: number[][]) {
  const visited = Array<boolean>(n).fill(false)
  const stack = [0]

  visited[0] = true

  while (stack.length > 0) {
    const current = stack.pop()!

    for (const next of targetGraph[current]) {
      if (visited[next]) {
        continue
      }

      visited[next] = true
      stack.push(next)
    }
  }

  return visited.every(isVisited => isVisited)
}

if (canReachAll(graph) && canReachAll(reverseGraph)) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
