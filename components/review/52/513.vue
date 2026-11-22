<script setup lang="ts">
const lines = [
  '4',
  '0 0',
  '2 2',
  '-1 1',
  '0 -2',
]
const n = Number(lines[0])
const x: number[] = []
const y: number[] = []

for (let i = 0; i < n; i++) {
  const [xi, yi] = lines[1 + i].split(' ').map(Number)
  x.push(xi)
  y.push(yi)
}

function dist(i: number, j: number) {
  return Math.hypot(x[i] - x[j], y[i] - y[j])
}

const inTree: boolean[] = new Array(n).fill(false)
const minDist: number[] = new Array(n).fill(Infinity)
const parent: number[] = new Array(n).fill(-1)
const children: number[][] = Array.from({ length: n }, () => [])
minDist[0] = 0

for (let step = 0; step < n; step++) {
  let v = -1

  for (let i = 0; i < n; i++) {
    if (!inTree[i] && (v === -1 || minDist[i] < minDist[v])) {
      v = i
    }
  }

  inTree[v] = true

  if (parent[v] !== -1) {
    children[parent[v]].push(v)
  }

  for (let u = 0; u < n; u++) {
    if (!inTree[u] && dist(v, u) < minDist[u]) {
      minDist[u] = dist(v, u)
      parent[u] = v
    }
  }
}

const tour: number[] = []
function dfs(v: number) {
  tour.push(v)
  for (const c of children[v]) {
    dfs(c)
  }
}

dfs(0)

console.log(tour.join(' '))
</script>
