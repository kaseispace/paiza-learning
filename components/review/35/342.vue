<script setup lang="ts">
const lines = [
  '4',
  'abc',
  'abd',
  'abb',
  'aaa',
]
const N = Number(lines[0])
const S = lines.slice(1)

const MOD = 1000000000

const fact: number[] = Array(27).fill(0)
fact[0] = 1
for (let i = 1; i <= 26; i++) {
  fact[i] = (fact[i - 1] * i) % MOD
}

const map = new Map()

for (let idx = 0; idx < N; idx++) {
  const str = S[idx]
  const len = str.length

  const id = Array(26).fill(0)
  let nextId = 1

  let h = ''
  for (let i = 0; i < len; i++) {
    const c = str.charCodeAt(i) - 97
    if (id[c] === 0) {
      id[c] = nextId++
    }

    const v = id[c]
    h += String.fromCharCode(96 + v)
    const key = h

    const m = nextId - 1
    if (!map.has(key)) {
      map.set(key, { count: 0, m })
    }
    map.get(key).count++
  }
}

let ans = 0

for (const { count: g, m } of map.values()) {
  if (g >= 2) {
    const pairs = (g * (g - 1) / 2) % MOD
    const ways = fact[26 - m]
    ans = (ans + pairs * ways) % MOD
  }
}

console.log(ans)
</script>
