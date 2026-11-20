<script setup lang="ts">
const lines = [
  '5 3',
  '1 0',
  '10 1',
  '100 1',
  '1000 2',
  '10000 2',
]
const [n, k] = lines[0].split(' ').map(Number)
const a: number[] = new Array(n + 1).fill(0)
const p: number[] = new Array(n + 1).fill(0)

for (let i = 1; i <= n; i++) {
  const [ai, pi] = lines[i].split(' ').map(Number)
  a[i] = ai
  p[i] = pi
}

const NEG = -Infinity

const dp: number[][] = new Array(n + 1)

for (let v = 0; v <= n; v++) {
  dp[v] = [NEG, a[v]]
}

for (let v = n; v >= 1; v--) {
  const parent = dp[p[v]]
  const child = dp[v]
  const limit = Math.min(parent.length - 1 + child.length - 1, k + 1)
  const next: number[] = new Array(limit + 1).fill(NEG)

  for (let x = 1; x < parent.length; x++) {
    if (parent[x] === NEG) {
      continue
    }

    if (parent[x] > next[x]) {
      next[x] = parent[x]
    }

    for (let y = 1; y < child.length && x + y <= limit; y++) {
      if (child[y] === NEG) {
        continue
      }

      if (parent[x] + child[y] > next[x + y]) {
        next[x + y] = parent[x] + child[y]
      }
    }
  }

  dp[p[v]] = next
  dp[v] = []
}

console.log(String(dp[0][k + 1]))
</script>
