<script setup lang="ts">
const lines = [
  '5 7',
  '2 7 8 8 9',
  '3 3 5 6 7 7 9',
]
const [n, m] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

a.sort((x, y) => x - y)
b.sort((x, y) => x - y)

let result = true
let j = 0

for (let i = 0; i < n; i++) {
  while (j < m && b[j] < a[i]) {
    j++
  }

  if (j == m) {
    result = false
    break
  }

  j++
}

console.log(result ? 'YES' : 'NO')
</script>
