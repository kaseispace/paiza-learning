<script setup lang="ts">
const lines = [
  '3 4',
  '8 1 3 8',
  '1 3 8 1',
  '1 1 1 1',
  '1 3 8 1',

]
const [m, n] = lines[0].split(' ').map(Number)
const A: number[][] = []

for (let i = 0; i < m; i++) {
  A.push(lines[1 + i].split(' ').map(Number))
}

const X = lines[1 + m].split(' ').map(Number)

for (let i = 0; i < m; i++) {
  let same = true

  for (let j = 0; j < n; j++) {
    if (A[i][j] !== X[j]) {
      same = false
      break
    }
  }

  if (same) {
    console.log(i + 1)
    break
  }
}
</script>
