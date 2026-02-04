<script setup lang="ts">
const lines = [
  '12',
  '6',
  '5',
  '4',
  '7',
  '3',
  '2',
  '6',
]
const S = Number(lines[0])
const N = Number(lines[1])
const v = lines.slice(2).map(Number)
let ans = 0

for (let mask = 1; mask < (1 << N); mask++) {
  let sum = 0
  const idxs: number[] = []

  for (let i = 0; i < N; i++) {
    if (mask & (1 << i)) {
      sum += v[i]
      idxs.push(i)
    }
  }

  if (sum < S) continue

  let ok = true
  for (const i of idxs) {
    if (sum - v[i] >= S) {
      ok = false
      break
    }
  }

  if (ok) ans++
}

console.log(ans)
</script>
