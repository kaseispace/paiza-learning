<script setup lang="ts">
type Line = [number, number]

const lines = [
  '2',
  '1 0',
  '-1 2',
]
const n = Number(lines[0])

const positiveLines: Line[] = []
const negativeLines: Line[] = []
let zeroMaximum = -Infinity

for (let i = 0; i < n; i++) {
  const [a, b] = lines[i + 1].split(' ').map(Number)

  if (a > 0) {
    positiveLines.push([a, b])
  }
  else if (a < 0) {
    negativeLines.push([a, b])
  }
  else {
    zeroMaximum = Math.max(zeroMaximum, b)
  }
}

function maxValue(lines: Line[], x: number) {
  let result = -Infinity

  for (const [a, b] of lines) {
    result = Math.max(result, a * x + b)
  }

  return result
}

let left = -1000000000
let right = 1000000000

for (let i = 0; i < 100; i++) {
  const mid = (left + right) / 2

  const positiveValue = maxValue(positiveLines, mid)
  const negativeValue = maxValue(negativeLines, mid)

  if (positiveValue < negativeValue) {
    left = mid
  }
  else {
    right = mid
  }
}

const x = (left + right) / 2

const y = Math.max(maxValue(positiveLines, x), maxValue(negativeLines, x), zeroMaximum)

console.log(x, y)
</script>
