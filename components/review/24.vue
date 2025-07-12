<script setup lang="ts">
const lines = [
  '7 7 1',
  '1 2',
  '1 3',
  '2 3',
  '2 4',
  '3 5',
  '3 6',
  '4 7',
]
const [, , X] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))
const connections: Map<number, number[]> = new Map()

for (const [a, b] of edges) {
  if (!connections.has(a)) connections.set(a, [])
  if (!connections.has(b)) connections.set(b, [])
  connections.get(a)!.push(b)
  connections.get(b)!.push(a)
}

const queue = [X]
const visited: Set<number> = new Set()
visited.add(X)

while (queue.length > 0) {
  const node = queue.shift()
  if (!node) break
  console.log(node)

  const nextNodes = (connections.get(node) || []).filter(n => !visited.has(n)).sort((a, b) => a - b)

  for (const nextNode of nextNodes) {
    visited.add(nextNode)
    queue.push(nextNode)
  }
}
</script>
