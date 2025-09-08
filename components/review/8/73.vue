<script setup lang="ts">
const lines = [
  '4',
  '111',
  '222',
  '333',
  '444',
]
const n = Number(lines[0])
const xs = lines.slice(1, 1 + n).map(Number)
let count = 0
let answer: number[] = []

for (let mask = 1; mask < (1 << n); mask++) {
  let sum = 0
  const subset: number[] = []
  for (let i = 0; i < n; i++) {
    if (mask & (1 << i)) {
      sum += xs[i]
      subset.push(xs[i])
    }
  }
  if (sum === 777) {
    count++
    if (count === 1) {
      answer = subset.slice()
    }
    if (count > 1) break
  }
}

if (count === 0) {
  console.log('no answer')
}
else if (count > 1) {
  console.log('multiple answers')
}
else {
  answer.sort((a, b) => a - b)
  console.log(answer.join(' '))
}
</script>
