<script setup lang="ts">
const lines = [
  '3',
  '0 1',
  '0 2',
  '1 2',
]
const n = Number(lines[0])
const edges: number[][] = Array.from({ length: 3 }, () => [])

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  edges[a].push(b)
  edges[b].push(a)
}

const visited: boolean[] = Array(3).fill(false)
const stack = [0]
visited[0] = true

while (stack.length > 0) {
  const v = stack.pop()!
  for (const nv of edges[v]) {
    if (!visited[nv]) {
      visited[nv] = true
      stack.push(nv)
    }
  }
}

console.log(visited[2] ? 'Yes' : 'No')
</script>
