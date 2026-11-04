<script setup lang="ts">
const lines = [
  '2 1',
  '2 1',
]
const [N, M] = lines[0].split(' ').map(Number)
const g: number[][] = Array.from({ length: N }, () => [])

for (let i = 1; i <= M; i++) {
  const [a, b] = lines[i].split(' ').map(Number)

  g[a - 1].push(b - 1)
  g[b - 1].push(a - 1)
}

const out: string[] = []
for (let i = 0; i < N; i++) {
  g[i].sort((x, y) => x - y)
  out.push(g[i].join(''))
}

console.log(out.join('\n'))
</script>
