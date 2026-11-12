<script setup lang="ts">
const lines = [
  '1',
  '1000 1000',
  '1',
  '2 2 3 3',
]
const MAX = 1001
const W = MAX + 1

const S = new Int32Array(W * W)

const n = Number(lines[0])

for (let i = 1; i <= n; i++) {
  const [x, y] = lines[i].split(' ').map(Number)
  S[(x + 1) * W + (y + 1)] += 1
}

for (let x = 1; x < W; x++) {
  for (let y = 1; y < W; y++) {
    S[x * W + y] += S[(x - 1) * W + y] + S[x * W + (y - 1)] - S[(x - 1) * W + (y - 1)]
  }
}

const q = Number(lines[n + 1])
const out: string[] = []

for (let i = 0; i < q; i++) {
  const [a, b, c, d] = lines[n + 2 + i].split(' ').map(Number)

  const count = S[(c + 1) * W + (d + 1)] - S[a * W + (d + 1)] - S[(c + 1) * W + b] + S[a * W + b]
  out.push(String(count))
}

console.log(out.join('\n'))
</script>
