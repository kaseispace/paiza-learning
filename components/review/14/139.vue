<script setup lang="ts">
const lines = ['174']
let n = Number(lines[0])
const output: number[] = []

for (let i = 2; i * i <= n; i++) {
  while (n % i === 0) {
    output.push(i)
    n = Math.floor(n / i)
  }
}

if (n > 1) {
  output.push(n)
}

console.log(output.join('\n'))
</script>
