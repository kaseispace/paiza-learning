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
const friend: number[][] = Array.from({ length: N }, () => Array(N).fill(0))

for (let i = 0; i < M; i++) {
  const [a, b, f] = lines[1 + i].split(' ').map(Number)
  friend[a - 1][b - 1] = f
  friend[b - 1][a - 1] = f
}

const inGroup: boolean[] = Array(N).fill(false)
let groupSize = 0

const calcPopularity = () => {
  if (groupSize === 0 || groupSize === N) return 0

  let best = 0

  for (let u = 0; u < N; u++) {
    if (!inGroup[u]) continue
    for (let v = 0; v < N; v++) {
      if (inGroup[v]) continue
      if (friend[u][v] > best) best = friend[u][v]
    }
  }

  return best
}

const base = 1 + M

for (let i = 0; i < Q; i++) {
  const [op, qStr] = lines[base + i].split(' ')
  const q = Number(qStr) - 1

  if (op === '+') {
    inGroup[q] = true
    groupSize++
  }
  else {
    inGroup[q] = false
    groupSize--
  }

  console.log(calcPopularity())
}
</script>
