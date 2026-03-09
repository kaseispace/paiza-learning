<script setup lang="ts">
const lines = [
  '4',
  '2',
  '1 6',
  '1 5',
  '1 9',

]
const Q = Number(lines[0])

const A: number[] = []

for (let i = 1; i <= Q; i++) {
  const parts = lines[i].split(' ')
  const type = Number(parts[0])

  if (type === 1) {
    const x = Number(parts[1])
    A.push(x)
  }
}

console.log(A.length)
for (const v of A) {
  console.log(v)
}
</script>
