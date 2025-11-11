<script setup lang="ts">
const lines = [
  '3',
  '111',
  '222',
  '333',
]
const N = Number(lines[0])
const X = lines.slice(1, 1 + N).map(Number)

const candidates = (x: number) => {
  const res: Set<number> = new Set()
  res.add(x)
  res.add(x + 1)
  if (x - 1 > 0) res.add(x - 1)
  res.add(Number('1' + String(x)))
  res.add(Number(String(x) + '1'))
  return Array.from(res)
}

const cand = X.map(candidates)

let ans = Infinity
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const ci = cand[i]
    const cj = cand[j]
    let bestPair = Infinity
    for (const a of ci) {
      for (const b of cj) {
        const diff = Math.abs(a - b)
        if (diff < bestPair) bestPair = diff
        if (bestPair === 0) break
      }
      if (bestPair === 0) break
    }
    if (bestPair < ans) ans = bestPair
    if (ans === 0) break
  }
  if (ans === 0) break
}

console.log(ans)
</script>
