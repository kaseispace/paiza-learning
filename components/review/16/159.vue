<script setup lang="ts">
const lines = [
  '2',
  '0 0 0',
  '100 100 100',
]
const n = Number(lines[0])
const t: number[] = []
const y: number[] = []
const x: number[] = []

for (let i = 0; i < n; i++) {
  const [ti, yi, xi] = lines[i + 1].split(' ').map(Number)
  t.push(ti)
  y.push(yi)
  x.push(xi)
}

for (let T = 0; T <= 100; T++) {
  let idx = 0
  while (idx + 1 < n && !(t[idx] <= T && T <= t[idx + 1])) {
    idx++
  }

  if (T === t[idx]) {
    console.log(`${y[idx]} ${x[idx]}`)
  }
  else {
    const dt = t[idx + 1] - t[idx]
    const dy = y[idx + 1] - y[idx]
    const dx = x[idx + 1] - x[idx]
    const k = T - t[idx]
    const yy = y[idx] + (dy * k) / dt
    const xx = x[idx] + (dx * k) / dt
    console.log(`${Math.round(yy)} ${Math.round(xx)}`)
  }
}
</script>
