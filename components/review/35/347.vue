<script setup lang="ts">
const lines = [
  '3 3 2 1 5 5',
  '#.#',
  '##.',
  '..#',
]
const [h, w, hl, wl, hh, wh] = lines[0].split(' ').map(BigInt)
const MOD = 1000000007n

const H = Number(h)
const W = Number(w)
const pattern = lines.slice(1, H + 1)

const residueSum = (mod: bigint, residue: bigint, L: bigint, R: bigint) => {
  let first: bigint

  if (L <= residue) {
    first = residue
  }
  else {
    const diff = L - residue
    first = residue + ((diff + mod - 1n) / mod) * mod
  }

  if (first > R) {
    return 0n
  }

  const cnt = (R - first) / mod + 1n
  const last = first + (cnt - 1n) * mod

  return (cnt * (first + last) / 2n) % MOD
}

const rowSum: bigint[] = Array(H)

for (let r = 1; r <= H; r++) {
  rowSum[r - 1] = residueSum(h, BigInt(r), hl, hh)
}

const colSum: bigint[] = Array(W)

for (let c = 1; c <= W; c++) {
  colSum[c - 1] = residueSum(w, BigInt(c), wl, wh)
}

let ans = 0n

for (let r = 0; r < H; r++) {
  for (let c = 0; c < W; c++) {
    if (pattern[r][c] !== '#') {
      continue
    }

    ans = (ans + rowSum[r] * colSum[c]) % MOD
  }
}

console.log(ans.toString())
</script>
