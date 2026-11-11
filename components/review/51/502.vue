<script setup lang="ts">
const lines = [
  '5',
  '1 2',
  '1 3',
  '1 4',
  '1 5',
]
const N = Number(lines[0])
const adj: number[][] = Array.from({ length: N + 1 }, () => [])
const deg: number[] = new Array(N + 1).fill(0)

for (let i = 1; i < N; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  adj[a].push(b)
  adj[b].push(a)
  deg[a]++
  deg[b]++
}

const removed: boolean[] = new Array(N + 1).fill(false)
let remaining = N

while (remaining > 2) {
  const leaves: number[] = []

  for (let v = 1; v <= N; v++) {
    if (!removed[v] && deg[v] === 1) {
      leaves.push(v)
    }
  }

  for (const v of leaves) {
    removed[v] = true
    remaining--
    for (const u of adj[v]) {
      if (!removed[u]) {
        deg[u]--
      }
    }
  }
}

const out: string[] = []

for (let v = 1; v <= N; v++) {
  if (!removed[v]) {
    out.push(String(v))
  }
}

console.log(out.join('\n'))
</script>
