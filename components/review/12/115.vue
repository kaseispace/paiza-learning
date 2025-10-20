<script setup lang="ts">
const lines = ['123 56']
const [M, A] = lines[0].split(' ').map(Number)

const extendedGCD = (a: number, b: number): number[] => {
  if (b === 0) return [1, 0]
  const [x1, y1] = extendedGCD(b, a % b)
  const x = y1
  const y = x1 - Math.floor(a / b) * y1
  return [x, y]
}

const [x, _] = extendedGCD(A, M)
const inverse = ((x % M) + M) % M

console.log(inverse)
</script>
