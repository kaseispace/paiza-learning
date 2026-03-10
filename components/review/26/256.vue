<script setup lang="ts">
const lines = [
  '5 2',
  '3',
  '8',
  '1',
  '9',
  '4',

]
const [N, K] = lines[0].split(' ').map(Number)

const A: number[] = []
for (let i = 0; i < N; i++) {
  A.push(Number(lines[1 + i]))
}

const remain = N - K

for (let i = 0; i < remain; i++) {
  console.log(A[i])
}
</script>
