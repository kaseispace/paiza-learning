<script setup lang="ts">
const lines = ['777 123 369']
const [N, A, C] = lines[0].split(' ').map(Number)

function gcd(x: number, y: number) {
  while (y !== 0) {
    const remainder = x % y
    x = y
    y = remainder
  }

  return x
}

const answer: number[] = []

for (let B = 1; B <= 1000; B++) {
  const commonDivisor = gcd(gcd(A, B), C)

  if (N % commonDivisor !== 0) {
    answer.push(B)
  }
}

if (answer.length === 0) {
  console.log(-1)
}
else {
  console.log(answer.join('\n'))
}
</script>
