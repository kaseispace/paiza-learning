<script setup lang="ts">
const lines = ['1565 6548 1535']
const [A, B, C] = lines[0].split(' ').map(Number)

const gcd = (a: number, b: number) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

const result = gcd(gcd(A, B), C)
console.log(result)
</script>
