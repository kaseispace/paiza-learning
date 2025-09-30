<script setup lang="ts">
const lines = [
  '10 10 4',
  '8 4',
  '8 3',
  '1 6',
  '5 3',
  '2 8',
  '10 3',
  '5 7',
  '1 9',
  '1 5',
]
const [N, A, X] = lines[0].split(' ').map(Number)
const graph: number[][] = Array.from({ length: N + 1 }, () => [])

for (let i = 1; i < N; i++) {
  const [u, v] = lines[i].split(' ').map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

const len: number[] = Array(N + 1).fill(-1)
const queue = [A]
len[A] = 0

while (queue.length > 0) {
  const current = queue.shift()!
  for (const neighbor of graph[current]) {
    if (len[neighbor] === -1) {
      len[neighbor] = len[current] + 1
      queue.push(neighbor)
    }
  }
}

const result: number[] = []
for (let i = 1; i <= N; i++) {
  if (len[i] === X) result.push(i)
}

result.sort((a, b) => a - b).forEach(v => console.log(v))
</script>
