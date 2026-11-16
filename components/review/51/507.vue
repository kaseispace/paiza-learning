<script setup lang="ts">
const lines = [
  '4 5 1 4',
  '1 2 20',
  '1 3 15',
  '2 3 10',
  '2 4 20',
  '3 4 15',
]
const [n, m, s, t] = lines[0].split(' ').map(Number)
const capacity: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))

for (let i = 1; i <= m; i++) {
  const [a, b, c] = lines[i].split(' ').map(Number)
  capacity[a][b] = c
}

const visited: boolean[] = new Array(n + 1).fill(false)

function pushFlow(v: number, tt: number, f: number): number {
  if (v === tt) {
    return f
  }

  visited[v] = true

  for (let u = 1; u <= n; u++) {
    if (!visited[u] && capacity[v][u] > 0) {
      const flowed = pushFlow(u, tt, Math.min(f, capacity[v][u]))
      if (flowed > 0) {
        capacity[v][u] -= flowed
        return flowed
      }
    }
  }

  return 0
}

const flow = pushFlow(s, t, 100)

const out = [String(flow)]

for (let i = 1; i <= n; i++) {
  out.push(capacity[i].slice(1).join(' '))
}

console.log(out.join('\n'))
</script>
