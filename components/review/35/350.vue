<script setup lang="ts">
const lines = [
  '5 5',
  '1 2 3 4 5',
  '1 1',
  '1 2',
  '2 3',
  '2 4',
  '3 5',

]
const [n, q] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const sum: number[] = Array(n + 1).fill(0)

for (let i = 0; i < n; i++) {
  sum[i + 1] = sum[i] + a[i]
}

const answer: string[] = []

for (let i = 0; i < q; i++) {
  const [l, r] = lines[i + 2].split(' ').map(Number)

  answer.push(String(sum[r] - sum[l - 1]))
}

console.log(answer.join('\n'))
</script>
