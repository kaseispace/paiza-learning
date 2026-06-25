<script setup lang="ts">
const lines = [
  '4',
  '1 2',
  '2 3',
  '2 4',
]
const n = Number(lines[0])
const graph: number[][] = Array.from({ length: n }, () => [])

for (let i = 0; i < n - 1; i++) {
  const [a, b] = lines[i + 1].split(' ').map(Number)

  graph[a - 1].push(b - 1)
  graph[b - 1].push(a - 1)
}

const color: number[] = Array(n).fill(0)

const queue = [0]
color[0] = 1

while (queue.length > 0) {
  const v = queue.shift()!

  for (const nv of graph[v]) {
    if (color[nv] !== 0) continue

    color[nv] = color[v] === 1 ? 2 : 1

    queue.push(nv)
  }
}

console.log(2)
console.log(color.join('\n'))
</script>
