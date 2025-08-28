<script setup lang="ts">
const lines = [
  '9 3 2',
  '-35445',
  '-6905',
  '37616',
  '74640',
  '98019',
  '6105',
  '84222',
  '44425',
  '81045',
  '1 3',
  '7 9',
]

const [N, D] = lines[0].split(' ').map(Number)
const A = lines.slice(1, 1 + N).map(Number)
const queries = lines.slice(1 + N).map(line => line.split(' ').map(Number))
const blockMax: number[] = Array(D).fill(-Infinity)

for (let i = 0; i < D; i++) {
  const start = i * D
  const end = start + D
  for (let j = start; j < end; j++) {
    blockMax[i] = Math.max(blockMax[i], A[j])
  }
}

const result: number[] = []
for (const [L, R] of queries) {
  const startBlock = Math.floor((L - 1) / D)
  const endBlock = Math.floor((R - 1) / D)
  let maxVal = -Infinity
  for (let b = startBlock; b <= endBlock; b++) {
    maxVal = Math.max(maxVal, blockMax[b])
  }
  result.push(maxVal)
}

console.log(result.join('\n'))
</script>
