<script setup lang="ts">
const lines = [
  '6',
  '1 2',
  '1 3',
  '1 4',
  '4 5',
  '4 6',
]
const n = Number(lines[0])
const adj: number[][] = Array.from({ length: n + 1 }, () => [])

for (let i = 1; i < n; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  adj[a].push(b)
  adj[b].push(a)
}

const parent = new Int32Array(n + 1)
const seen = new Uint8Array(n + 1)
const order = [1]
seen[1] = 1

for (let h = 0; h < order.length; h++) {
  const v = order[h]

  for (const u of adj[v]) {
    if (!seen[u]) {
      seen[u] = 1
      parent[u] = v
      order.push(u)
    }
  }
}

const near = new Int32Array(n + 1).fill(1e9)
let ans = 0

for (let h = n - 1; h >= 0; h--) {
  const v = order[h]
  const p = parent[v]

  if (near[v] <= 2) continue
  if (p !== 0 && near[p] <= 1) continue

  ans++
  near[v] = 0

  if (p !== 0) {
    near[p] = Math.min(near[p], 1)
    const g = parent[p]
    if (g !== 0) near[g] = Math.min(near[g], 2)
  }
}

console.log(String(ans))
</script>
