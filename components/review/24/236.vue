<script setup lang="ts">
const lines = [
  '1 1 0',
  '1 0 0',
]
const [n, m] = lines[0].split(' ').map(Number)

const data = lines.slice(1).map(line => line.split(' ').map(Number))

let existsAllWrong = false

for (let j = 0; j < n; j++) {
  let allZero = true

  for (let i = 0; i < m; i++) {
    if (data[i][j] === 1) {
      allZero = false
      break
    }
  }

  if (allZero) {
    existsAllWrong = true
    break
  }
}

console.log(existsAllWrong ? 'Yes' : 'No')
</script>
