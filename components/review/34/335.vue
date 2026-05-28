<script setup lang="ts">
const lines = ['6']
const n = Number(lines[0])
const G: number[] = Array(n + 1).fill(0)

for (let L = 2; L <= n; L++) {
  const seen: Set<number> = new Set()

  for (let a = 1; a < L; a++) {
    const left = a - 1
    const right = L - a - 1
    seen.add(G[left] ^ G[right])
  }

  let g = 0
  while (seen.has(g)) g++
  G[L] = g
}

if (G[n] === 0) {
  console.log('paiza')
  process.exit(0)
}

console.log('me')

const res: string[] = []
for (let a = 1; a < n; a++) {
  const left = a - 1
  const right = n - a - 1

  if ((G[left] ^ G[right]) === 0) {
    res.push(`${a} ${a + 1}`)
  }
}

console.log(res.join('\n'))
</script>
