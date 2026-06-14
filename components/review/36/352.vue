<script setup lang="ts">
const lines = [
  '4',
  'aaaabbbb',
]
const n = Number(lines[0])
const S = lines[1]
const MOD = 1000000007n

const m = 2 * n

const fact: bigint[] = Array(m + 1).fill(0n)
const invFact: bigint[] = Array(m + 1).fill(0n)

fact[0] = 1n
for (let i = 1; i <= m; i++) {
  fact[i] = fact[i - 1] * BigInt(i) % MOD
}

const modPow = (a: bigint, e: bigint) => {
  let r = 1n
  let x = a

  while (e > 0n) {
    if (e & 1n) r = r * x % MOD
    x = x * x % MOD
    e >>= 1n
  }

  return r
}

invFact[m] = modPow(fact[m], MOD - 2n)

for (let i = m; i >= 1; i--) {
  invFact[i - 1] = invFact[i] * BigInt(i) % MOD
}

const inv2 = modPow(2n, MOD - 2n)

const pairings: bigint[] = Array(n + 1).fill(0n)

for (let t = 0; t <= n; t++) {
  pairings[t] = fact[2 * t] * modPow(inv2, BigInt(t)) % MOD * invFact[t] % MOD
}

const cnt: number[] = Array(26).fill(0)

for (const ch of S) {
  cnt[ch.charCodeAt(0) - 97]++
}

let dp: bigint[] = Array(n + 1).fill(0n)
dp[0] = 1n

for (const c of cnt) {
  if (c === 0) continue

  const ways: bigint[] = []

  for (let k = 0; k <= Math.floor(c / 2); k++) {
    let v = fact[c] * invFact[c - 2 * k] % MOD * invFact[k] % MOD * modPow(inv2, BigInt(k)) % MOD

    if (k & 1) {
      v = (MOD - v) % MOD
    }

    ways.push(v)
  }

  const next: bigint[] = Array(n + 1).fill(0n)

  for (let used = 0; used <= n; used++) {
    if (dp[used] === 0n) continue

    for (let k = 0; k < ways.length; k++) {
      if (used + k > n) break

      next[used + k] = (next[used + k] + dp[used] * ways[k]) % MOD
    }
  }

  dp = next
}

let ans = 0n

for (let k = 0; k <= n; k++) {
  ans = (ans + dp[k] * pairings[n - k]) % MOD
}

console.log(ans.toString())
</script>
