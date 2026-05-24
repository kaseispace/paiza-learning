<script setup lang="ts">
const lines = [
  '3',
  '0 2 0',
  '2 0 1',
  '0 1 0',
]
const N = Number(lines[0])
const C: number[][] = []

for (let i = 0; i < N; i++) {
  C.push(lines[i + 1].split(' ').map(Number))
}

const output: string[] = []

for (let i = 0; i < N; i++) {
  let bestIdx = -1
  let bestCost = Infinity

  for (let j = 0; j < N; j++) {
    const w = C[i][j]

    if (w === 0) continue
    if (w < bestCost || (w === bestCost && j < bestIdx)) {
      bestCost = w
      bestIdx = j
    }
  }

  output.push(`${bestIdx + 1} ${bestCost}`)
}

console.log(output.join('\n'))
</script>
