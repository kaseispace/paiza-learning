<script setup lang="ts">
const lines = [
  '4 4 4',
  '5 5 5 5',
  '1 3',
  '3 2',
  '4 4',
  '2 1',
  '0 4 5',
  '2 3 3',
  '1 4 1',
  '0 1 1',
]
const [n, t, q] = lines[0].split(' ').map(Number)
const s = lines[1].split(' ').map(Number)

let base = 1
while (base < n) base <<= 1
const INF = 1e18

const seg: number[][] = Array.from({ length: t + 1 }, () => Array(2 * base).fill(INF))

for (let i = 0; i < n; i++) seg[0][base + i] = s[i]
for (let i = base - 1; i >= 1; i--) {
  seg[0][i] = Math.min(seg[0][i * 2], seg[0][i * 2 + 1])
}

for (let j = 1; j <= t; j++) {
  const [c, d] = lines[1 + j].split(' ').map(Number)
  const prev = seg[j - 1]
  const cur = seg[j]

  for (let k = 0; k < 2 * base; k++) cur[k] = prev[k]

  let pos = base + (c - 1)
  cur[pos] -= d

  pos >>= 1
  while (pos >= 1) {
    cur[pos] = Math.min(cur[pos * 2], cur[pos * 2 + 1])
    pos >>= 1
  }
}

const rangeMin = (time: number, l: number, r: number) => {
  const tree = seg[time]
  l += base
  r += base
  let res = INF

  while (l < r) {
    if (l & 1) res = Math.min(res, tree[l++])
    if (r & 1) res = Math.min(res, tree[--r])
    l >>= 1
    r >>= 1
  }

  return res
}

const out: string[] = []
const queryStart = 1 + t + 1

for (let i = 0; i < q; i++) {
  const [a, b, x] = lines[queryStart + i].split(' ').map(Number)

  const L = a
  const R = b

  if (rangeMin(0, L, R) <= x) {
    out.push('0')
    continue
  }

  let low = 1, high = t + 1
  while (low < high) {
    const mid = (low + high) >> 1
    if (rangeMin(mid, L, R) <= x) high = mid
    else low = mid + 1
  }

  out.push(low === t + 1 ? '-1' : String(low))
}

console.log(out.join('\n'))
</script>
