<script setup lang="ts">
const lines = [
  '2',
  '1 0',
  '-1 2',
]
const n = Number(lines[0])
const pos: number[][] = []
const neg: number[][] = []

for (let i = 1; i <= n; i++) {
  const [a, b] = lines[i].split(' ').map(Number)

  if (a > 0) pos.push([a, b])
  else neg.push([a, b])
}

let bestX = 0
let bestY = Infinity

for (const [a1, b1] of pos) {
  for (const [a2, b2] of neg) {
    const x = (b2 - b1) / (a1 - a2)
    const y = a1 * x + b1

    if (y < bestY) {
      bestY = y
      bestX = x
    }
  }
}

console.log(bestX + ' ' + bestY)
</script>
