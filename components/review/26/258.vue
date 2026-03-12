<script setup lang="ts">
const lines = [
  '3',
  '2 3 4',
  '10 20 30',
  '3',
  '1 2',
  '2 2',
  '2 2',
]
const A = lines[1].split(' ').map(Number)
const S = lines[2].split(' ').map(Number)
const Q = Number(lines[3])

for (let j = 0; j < Q; j++) {
  const [I, B] = lines[4 + j].split(' ').map(Number)
  const idx = I - 1

  if (A[idx] >= B) {
    const price = B * S[idx]
    A[idx] -= B
    console.log(price)
  }
  else {
    console.log(0)
  }
}
</script>
