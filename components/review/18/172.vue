<script setup lang="ts">
const lines = [
  '5 10',
  '10 11',
  '10 9',
  '9 3',
  '3 2',
]

const [N, R] = lines[0].split(' ').map(Number)

const graph: Map<number, number[]> = new Map()
for (let i = 1; i < N; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  if (!graph.has(a)) graph.set(a, [])
  if (!graph.has(b)) graph.set(b, [])
  graph.get(a)!.push(b)
  graph.get(b)!.push(a)
}

let ok = true
const visited = new Set()

const dfs = (node: number, parentVal: number | null) => {
  visited.add(node)
  if (parentVal !== null) {
    if (parentVal < node) {
      ok = false
      return
    }
  }

  for (const nei of graph.get(node) ?? []) {
    if (!visited.has(nei)) {
      dfs(nei, node)
      if (!ok) return
    }
  }
}

dfs(R, null)
console.log(ok ? 'YES' : 'NO')
</script>
