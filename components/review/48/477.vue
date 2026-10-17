<script setup lang="ts">
const lines = [
  '2 4',
  '4 2',
  '6 1',
  '8',
]
const [n, t] = lines[0].split(' ').map(Number)

const dist: number[] = []
const dec: number[] = []
let prev = 0
let R = 0

for (let i = 1; i <= n; i++) {
  const [l, r] = lines[i].split(' ').map(Number)
  dist.push(l - prev)
  dec.push(R)
  prev = l
  R += r
}

const L = Number(lines[n + 1])
dist.push(L - prev)
dec.push(R)

function totalTime(v: number) {
  let time = 0

  for (let i = 0; i < dist.length; i++) {
    time += dist[i] / (v - dec[i])
  }

  return time
}

let lo = R
let hi = R + L / t

for (let iter = 0; iter < 100; iter++) {
  const mid = (lo + hi) / 2

  if (totalTime(mid) <= t) hi = mid
  else lo = mid
}

console.log(hi.toFixed(10))
</script>
