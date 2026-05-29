<script setup lang="ts">
const lines = [
  '5 5 1',
  '1 2 4',
  '1 3 9',
  '2 4 1',
  '4 5 3',
  '5 2 3',
]
const [, M, s] = lines[0].split(' ').map(Number)
let bestCost = Infinity
let bestNode = -1

for (let i = 1; i <= M; i++) {
  const [a, b, c] = lines[i].split(' ').map(Number)

  if (a === s) {
    if (c < bestCost || (c === bestCost && b < bestNode)) {
      bestCost = c
      bestNode = b
    }
  }
}

if (bestNode === -1) {
  console.log('inf')
}
else {
  console.log(bestNode)
}
</script>
