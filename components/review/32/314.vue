<script setup lang="ts">
const lines = [
  '4 2 4',
  '1',
  '2',
  '3',
  '1 3 4',
  '2',
  '2 4',
  '2',
  '2 3',
]
const [n, s, k] = lines[0].split(' ').map(Number)
const g: number[][] = Array.from({ length: n + 1 }, () => [])

let idx = 1
for (let i = 1; i <= n; i++) {
  idx++

  const adj = lines[idx].split(' ').map(Number)
  idx++

  g[i] = adj
}

const results: number[][] = []
const path = [s]

const dfs = (cur: number, depth: number) => {
  if (depth === k) {
    results.push([...path])
    return
  }

  for (const nxt of g[cur]) {
    path.push(nxt)
    dfs(nxt, depth + 1)
    path.pop()
  }
}

dfs(s, 0)

console.log(results.length)

for (const p of results) {
  console.log(p.join(' '))
}
</script>
