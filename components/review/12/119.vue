<script setup lang="ts">
const lines = ['2944 3958']
const [A, B] = lines[0].split(' ').map(Number)

const extendedGCD = (a: number, b: number): number[] => {
  if (b === 0) return [1, 0]
  const [x1, y1] = extendedGCD(b, a % b)
  const x = y1
  const y = x1 - Math.floor(a / b) * y1
  return [x, y]
}

const [x, y] = extendedGCD(A, B)
console.log(`${x} ${y}`)
</script>
