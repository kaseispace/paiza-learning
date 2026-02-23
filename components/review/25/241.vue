<script setup lang="ts">
const lines = [
  '3 2 2',
  '1 2 1',
  '1 3 3',
  '+ 1',
  '+ 2',
]
let idx = 0

const [N, M, Q] = lines[idx++].split(' ').map(Number)

const friend: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

for (let i = 0; i < M; i++) {
  const [a, b, f] = lines[idx++].split(' ').map(Number)
  friend[a - 1][b - 1] = f
  friend[b - 1][a - 1] = f
}

const inGroup: boolean[] = Array(N).fill(false)
const best: number[] = Array(N).fill(0)

const updateBestFor = (u: number) => {
  let mx = 0
  for (let v = 0; v < N; v++) {
    if (!inGroup[v]) {
      mx = Math.max(mx, friend[u][v])
    }
  }
  best[u] = mx
}

for (let i = 0; i < Q; i++) {
  const [op, qStr] = lines[idx++].split(' ')
  const q = Number(qStr) - 1

  if (op === '+') {
    inGroup[q] = true

    updateBestFor(q)

    for (let v = 0; v < N; v++) {
      if (!inGroup[v]) {
        best[v] = Math.max(best[v], friend[q][v])
      }
    }
  }
  else {
    inGroup[q] = false

    updateBestFor(q)

    for (let u = 0; u < N; u++) {
      if (inGroup[u]) {
        updateBestFor(u)
      }
    }
  }
}

let ans = 0
const count = inGroup.filter(x => x).length

if (count === 0 || count === N) {
  ans = 0
}
else {
  for (let u = 0; u < N; u++) {
    if (inGroup[u]) ans = Math.max(ans, best[u])
  }
}

console.log(ans)
</script>
