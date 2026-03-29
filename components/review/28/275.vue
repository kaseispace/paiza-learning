<script setup lang="ts">
const lines = [
  '0.0001',
  '2',
  '10000 0',
  '10000 1',
]
const aGiven = lines[0]
const n = Number(lines[1])

let sumXY = 0
let sumXX = 0

for (let i = 0; i < n; i++) {
  const [x, y] = lines[2 + i].split(' ').map(Number)
  sumXY += x * y
  sumXX += x * x
}

const alpha = sumXY / sumXX
const alphaRounded = alpha.toFixed(4)

if (alphaRounded === aGiven) {
  console.log('Yes')
}
else {
  console.log('No')
}
</script>
