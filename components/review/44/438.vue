<script setup lang="ts">
const lines = ['2 3 * -9 2']
const [A, B, cal, C, D] = lines[0].split(' ')
const a = Number(A)
const b = Number(B)
const c = Number(C)
const d = Number(D)

let numerator: number
let denominator: number

if (cal === '+') {
  numerator = a * d + c * b
  denominator = b * d
}
else if (cal === '-') {
  numerator = a * d - c * b
  denominator = b * d
}
else if (cal === '*') {
  numerator = a * c
  denominator = b * d
}
else {
  numerator = a * d
  denominator = b * c
}

if (denominator < 0) {
  numerator *= -1
  denominator *= -1
}

function gcd(x: number, y: number) {
  while (y !== 0) {
    const remainder = x % y
    x = y
    y = remainder
  }

  return x
}

const divisor = gcd(Math.abs(numerator), denominator)

numerator /= divisor
denominator /= divisor

console.log(numerator, denominator)
</script>
