<script setup lang="ts">
const lines = [
  '4 3',
  '1 2',
  '2 3',
  '4 4',
]
const [n, m] = lines[0].split(' ').map(Number)

const graph: number[][] = Array.from({ length: n + 1 }, () => [])
for (let i = 1; i <= m; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

const visited: boolean[] = new Array(n + 1).fill(false)
let count = 0

const queue = [1]
visited[1] = true
while (queue.length > 0) {
  const v = queue.shift()!
  count++
  for (const nei of graph[v]) {
    if (!visited[nei]) {
      visited[nei] = true
      queue.push(nei)
    }
  }
}

console.log(count === n ? 'Yes' : 'No')
</script>
