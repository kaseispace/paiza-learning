<script setup lang="ts">
const lines = ['45 15']
const [A, B] = lines[0].split(' ').map(Number)

const gcd = (a: number, b: number) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

console.log(gcd(A, B))
</script>
