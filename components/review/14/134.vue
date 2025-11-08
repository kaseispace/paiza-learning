<script setup lang="ts">
const lines = [
  '2 1',
  '1 2',
]
const [N] = lines[0].split(' ').map(Number)
const edges = lines.slice(1).map(line => line.split(' ').map(Number))

const g: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

for (const [a, b] of edges) {
  g[a - 1][b - 1] = 1
  g[b - 1][a - 1] = 1
}

for (let i = 0; i < N; i++) {
  console.log(g[i].join(''))
}
</script>
