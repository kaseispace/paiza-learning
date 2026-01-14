<script setup lang="ts">
const lines = [
  '3 2',
  '1 0 1',
  '0 1 0',
]
const [n, m] = lines[0].split(' ').map(Number)
const c = lines.slice(1).map(score => score.split(' ').map(Number))
let result = false

for (let i = 0; i < n; i++) {
  let score = 0
  for (let j = 0; j < m; j++) {
    score += c[j][i]
  }

  if (score === m) {
    result = true
    break
  }
}

console.log(result ? 'Yes' : 'No')
</script>
