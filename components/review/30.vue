<script setup lang="ts">
const lines = [
  '7 5 2',
  '7 5',
  '5 6',
  '1 5',
  '1 4',
  '1 2',
  '1 3',
]
const [_, X, Y] = lines[0].split(' ').map(Number)
const path = lines.slice(1).map(line => line.split(' ').map(Number))
const connections: Map<number, number[]> = new Map()

for (const [a, b] of path) {
  if (!connections.has(a)) connections.set(a, [])
  if (!connections.has(b)) connections.set(b, [])
  connections.get(a)!.push(b)
  connections.get(b)!.push(a)
}

const queue: [number, number[]][] = [[X, [X]]]
const visited: Set<number> = new Set()
visited.add(X)

while (queue.length > 0) {
  const [node, path] = queue.shift()!
  if (node === Y) {
    path.forEach(p => console.log(p))
    break
  }

  for (const nextNode of connections.get(node)!) {
    if (!visited.has(nextNode)) {
      visited.add(nextNode)
      queue.push([nextNode, [...path, nextNode]])
    }
  }
}
</script>
