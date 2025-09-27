<script setup lang="ts">
const lines = [
  '5 4',
  '0 3 10 12 9',
  '1 2',
  '2 3',
  '2 4',
  '2 5',
]
const [n, m] = lines[0].split(' ').map(Number)
const t = lines[1].split(' ').map(Number)

const graph: number[][] = Array.from({ length: n + 1 }, () => [])
for (let i = 0; i < m; i++) {
  const [a, b] = lines[2 + i].split(' ').map(Number)
  graph[a].push(b)
  graph[b].push(a)
}

const dist: number[] = Array(n + 1).fill(Infinity)
dist[1] = 0

const queue = [1]
while (queue.length > 0) {
  const cur = queue.shift()!
  for (const next of graph[cur]) {
    if (dist[next] === Infinity) {
      dist[next] = dist[cur] + 5
      queue.push(next)
    }
  }
}

let count = 0
for (let i = 2; i <= n; i++) {
  if (dist[i] < t[i - 1]) count++
}

console.log(count)
</script>
