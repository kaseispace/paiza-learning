<script setup lang="ts">
const lines = [
  '5 5',
  '1 2',
  '1 3',
  '2 4',
  '2 5',
  '4 5',
]
const [n, m] = lines[0].split(' ').map(Number)
const adj: number[][] = Array.from({ length: n + 1 }, () => [])

for (let i = 1; i <= m; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  adj[a].push(b)
  adj[b].push(a)
}

for (let i = 1; i <= n; i++) {
  if (adj[i].length === 0) {
    console.log(-1)
  }
  else {
    console.log(adj[i].join(' '))
  }
}
</script>
