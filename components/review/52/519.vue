<script setup lang="ts">
const lines = [
  '3',
  '1 15',
  '15 100',
  '138 813',
]
const q = Number(lines[0])
const prefix: number[] = Array(1001).fill(0)

for (let i = 1; i <= 1000; i++) {
  prefix[i] = prefix[i - 1]
  if (i % 15 === 0) {
    prefix[i]++
  }
}

const answer: number[] = []

for (let i = 1; i <= q; i++) {
  const [l, r] = lines[i].split(' ').map(Number)
  answer.push(prefix[r] - prefix[l - 1])
}

console.log(answer.join('\n'))
</script>
