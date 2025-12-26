<script setup lang="ts">
const lines = [
  '4 5 1 4',
  '1 2 20',
  '1 3 15',
  '2 3 10',
  '2 4 20',
  '3 4 15',
]
const [n, m, s, t] = lines[0].split(' ').map(Number)
const graph: number[][] = Array.from({ length: n + 1 }, () => [])

for (let i = 1; i <= m; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  graph[a].push(b)
}

const visited: boolean[] = new Array(n + 1).fill(false)
const queue = [s]
visited[s] = true
let reachable = false

let head = 0
while (head < queue.length) {
  const v = queue[head++]

  if (v === t) {
    reachable = true
    break
  }

  for (const nv of graph[v]) {
    if (!visited[nv]) {
      visited[nv] = true
      queue.push(nv)
    }
  }
}

console.log(reachable ? 'Yes' : 'No')
</script>
