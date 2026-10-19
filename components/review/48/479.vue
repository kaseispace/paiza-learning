<script setup lang="ts">
type Edge = [number, number, number]

const lines = [
  '4',
  '0 0',
  '2 2',
  '-1 1',
  '0 -2',
]
const n = Number(lines[0])
const xs: number[] = []
const ys: number[] = []

for (let i = 0; i < n; i++) {
  const [x, y] = lines[i + 1].split(' ').map(Number)
  xs.push(x)
  ys.push(y)
}

const edges: Edge[] = []
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const dx = xs[i] - xs[j]
    const dy = ys[i] - ys[j]
    edges.push([dx * dx + dy * dy, i, j])
  }
}

edges.sort((a, b) => a[0] - b[0])

const parent = Array.from({ length: n }, (_, i) => i)

function find(x: number) {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]]
    x = parent[x]
  }

  return x
}

function unite(a: number, b: number) {
  const ra = find(a)
  const rb = find(b)
  if (ra === rb) return false
  parent[ra] = rb
  return true
}

const out: string[] = []
for (const [, u, v] of edges) {
  if (unite(u, v)) {
    out.push(`${u} ${v}`)
    if (out.length === n - 1) break
  }
}

console.log(out.join('\n'))
</script>
