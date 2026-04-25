<script setup lang="ts">
const lines = [
  '3 2 3',
  '1 2 1',
  '1 3 3',
  '+ 1',
  '+ 2',
  '- 1',
]
const [N, M, Q] = lines[0].split(' ').map(Number)
const f: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

for (let i = 0; i < M; i++) {
  const [a, b, w] = lines[1 + i].split(' ').map(Number)
  f[a - 1][b - 1] = w
  f[b - 1][a - 1] = w
}

const inGroup: boolean[] = Array(N).fill(false)
const best: number[] = Array(N).fill(0)

function recomputeBest(v: number) {
  let mx = 0

  for (let u = 0; u < N; u++) {
    if (!inGroup[u]) mx = Math.max(mx, f[v][u])
  }

  best[v] = mx
}

function popularity() {
  let mx = 0

  for (let v = 0; v < N; v++) {
    if (inGroup[v]) mx = Math.max(mx, best[v])
  }

  return mx
}

const out: number[] = []

for (let qi = 0; qi < Q; qi++) {
  const [op, qstr] = lines[1 + M + qi].split(' ')
  const x = Number(qstr) - 1

  if (op === '+') {
    inGroup[x] = true
    recomputeBest(x)

    for (let v = 0; v < N; v++) {
      if (inGroup[v] && v !== x) {
        best[v] = Math.max(best[v], f[v][x])
      }
    }
  }
  else {
    inGroup[x] = false
    best[x] = 0

    for (let v = 0; v < N; v++) {
      if (inGroup[v]) recomputeBest(v)
    }
  }

  out.push(popularity())
}

out.forEach(num => console.log(num))
</script>
