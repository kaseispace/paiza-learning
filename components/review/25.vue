<script setup lang="ts">
const lines = [
  '5',
  '4 1 3 5 2',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)

for (let i = 1; i < N; i++) {
  const value = A[i]
  let j = i - 1

  while (j >= 0 && A[j] > value) {
    A[j + 1] = A[j]
    j--
  }

  A[j + 1] = value
  console.log(A.join(' '))
}
</script>
