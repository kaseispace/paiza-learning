<script setup lang="ts">
const lines = ['12345 5']
const [N, A] = lines[0].split(' ').map(Number)

const gcd = (a: number, b: number) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

const result: number[] = []
for (let B = 1; B <= 1000; B++) {
  if (B === A) continue
  const g = gcd(A, B)
  if (N % g !== 0) {
    result.push(B)
  }
}

if (result.length === 0) {
  console.log(-1)
}
else {
  console.log(result.join('\n'))
}
</script>
