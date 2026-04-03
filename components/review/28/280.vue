<script setup lang="ts">
const lines = ['8131']
const n = Number(lines[0])
const g: number[] = new Array(n + 1).fill(0)

for (let len = 2; len <= n; len++) {
  const used: boolean[] = new Array(len + 1).fill(false)

  for (let i = 0; i <= len - 2; i++) {
    const left = i
    const right = len - i - 2
    const val = g[left] ^ g[right]
    if (val <= len) used[val] = true
  }

  let mex = 0
  while (used[mex]) mex++
  g[len] = mex
}

console.log(g[n] === 0 ? 'paiza' : 'me')
</script>
