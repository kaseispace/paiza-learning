<script setup lang="ts">
const lines = ['5 6 2 3']
const [m1, m2, b1, b2] = lines[0].split(' ').map(Number)

const egcd = (a: number, b: number) => {
  let x0 = 1, y0 = 0, x1 = 0, y1 = 1
  while (b !== 0) {
    const q = Math.trunc(a / b);
    [a, b] = [b, a % b];
    [x0, x1] = [x1, x0 - q * x1];
    [y0, y1] = [y1, y0 - q * y1]
  }
  return [a, x0, y0]
}

const modInv = (a: number, m: number) => {
  const [g, x] = egcd(a, m)
  if (g !== 1 && g !== -1) return null
  const inv = x % m
  return inv < 0 ? inv + m : inv
}

const delta = ((b2 - b1) % m2 + m2) % m2
const inv = modInv(m1 % m2, m2)
const t = (delta * inv!) % m2
const Z = b1 + m1 * t

console.log(Z.toString())
</script>
