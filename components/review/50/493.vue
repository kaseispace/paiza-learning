<script setup lang="ts">
const lines = ['9997']
const n = Number(lines[0])

const g = new Int32Array(n + 1)
const seen = new Int32Array(n + 2)

for (let x = 2; x <= n; x++) {
  for (let i = 0; i <= x - 2; i++) {
    const v = g[i] ^ g[x - i - 2]

    if (v <= n) {
      seen[v] = x
    }
  }

  let mex = 0
  while (seen[mex] === x) {
    mex++
  }

  g[x] = mex
}

console.log(String(g[n]))
</script>
