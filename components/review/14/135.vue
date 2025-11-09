<script setup lang="ts">
const lines = [
  '5',
  '1 2 3 4 5',
  '1',
  '1 4',
]
const A = lines[1].split(' ').map(Number)
const Q = Number(lines[2])

for (let k = 0; k < Q; k++) {
  const [i, j] = lines[3 + k].split(' ').map(Number);
  [A[i - 1], A[j - 1]] = [A[j - 1], A[i - 1]]
}

console.log(A.join(' '))
</script>
