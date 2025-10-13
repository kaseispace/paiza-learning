<script setup lang="ts">
const lines = [
  '3',
  '2',
  '4',
  '8',
]
const A = lines.slice(1).map(Number)

const gcd = (a: number, b: number) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

const lcm = (a: number, b: number) => {
  return (a * b) / gcd(a, b)
}

const totalGCD = A.reduce((acc, val) => gcd(acc, val))
const totalLCM = A.reduce((acc, val) => lcm(acc, val))

console.log(totalGCD)
console.log(totalLCM)
</script>
