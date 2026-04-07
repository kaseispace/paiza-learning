<script setup lang="ts">
const lines = [
  '3',
  '1 3',
  '2 2',
  '3 1',
]
const n = Number(lines[0])
const w: number[] = []
const r: number[] = []

for (let i = 0; i < n; i++) {
  const [wi, ri] = lines[i + 1].split(' ').map(Number)
  w.push(wi)
  r.push(ri)
}

const N = 1 << n

const sumW: number[] = new Array(N).fill(0)

for (let s = 1; s < N; s++) {
  const lsb = s & -s
  const i = Math.clz32(lsb) ^ 31
  const prev = s ^ lsb
  sumW[s] = sumW[prev] + w[i]
}

const ok: boolean[] = new Array(N).fill(false)
ok[0] = true

for (let s = 1; s < N; s++) {
  let can = false
  let t = s
  while (t) {
    const lsb = t & -t
    const i = Math.clz32(lsb) ^ 31
    const rest = s ^ (1 << i)
    if (ok[rest] && sumW[rest] <= r[i]) {
      can = true
      break
    }
    t ^= lsb
  }
  ok[s] = can
}

const INF = 1e9
const dp: number[] = new Array(N).fill(INF)
dp[0] = 0

for (let s = 1; s < N; s++) {
  let sub = s
  while (sub) {
    if (ok[sub]) {
      const rest = s ^ sub
      if (dp[rest] + 1 < dp[s]) dp[s] = dp[rest] + 1
    }
    sub = (sub - 1) & s
  }
}

console.log(dp[N - 1].toString())
</script>
