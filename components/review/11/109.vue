<script setup lang="ts">
const lines = [
  '3',
  '3',
  '5',
  '9',
]
const C = lines.slice(1).map(Number)

const gcd = (a: number, b: number) => {
  while (b !== 0) [a, b] = [b, a % b]
  return a
}

const lcm = (a: number, b: number) => {
  return (a * b) / gcd(a, b)
}

const widths = C.map(c => c - 1)
const result = widths.reduce((acc, val) => lcm(acc, val))

console.log(result)
</script>
