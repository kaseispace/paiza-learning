<script setup lang="ts">
type Point = {
  x: number
  y: number
}

const lines = [
  '5 3',
  '1 2',
  '2 1',
  '2 2',
  '2 3',
  '3 2',
]
const [n, m] = lines[0].split(' ').map(Number)
const points: Point[] = []

for (let i = 0; i < n; i++) {
  const [x, y] = lines[i + 1].split(' ').map(Number)

  points.push({ x, y })
}

let p = 0
let q = 1

while (true) {
  const ranked = points.slice().sort((first, second) => {
    const firstValue = first.y * q - p * first.x
    const secondValue = second.y * q - p * second.x

    return secondValue - firstValue
  })

  let sumX = 0
  let sumY = 0

  for (let i = 0; i < m; i++) {
    sumX += ranked[i].x
    sumY += ranked[i].y
  }

  const difference = sumY * q - p * sumX

  if (difference === 0) {
    p = sumY
    q = sumX
    break
  }

  p = sumY
  q = sumX
}

function gcd(a: number, b: number) {
  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}

const divisor = gcd(p, q)

console.log(p / divisor, q / divisor)
</script>
