<script setup lang="ts">
const lines = [
  '7 6',
  '1 2',
  '2 3',
  '2 4',
  '3 5',
  '3 6',
  '4 7',

]
const [N, M] = lines[0].split(' ').map(Number)
const G: number[][] = Array.from({ length: N }, () => [])

for (let i = 1; i <= M; i++) {
  const [a, b] = lines[i].split(' ').map(x => Number(x) - 1)
  G[a].push(b)
  G[b].push(a)
}

const color: number[] = Array(N).fill(-1)

const bfs = (start: number) => {
  const queue = [start]
  color[start] = 0

  while (queue.length > 0) {
    const v = queue.shift()!

    for (const u of G[v]) {
      if (color[u] === -1) {
        color[u] = 1 - color[v]
        queue.push(u)
      }
      else if (color[u] === color[v]) {
        return false
      }
    }
  }

  return true
}

let ok = true
for (let i = 0; i < N; i++) {
  if (color[i] === -1) {
    if (!bfs(i)) {
      ok = false
      break
    }
  }
}

console.log(ok ? 'Yes' : 'No')
</script>
