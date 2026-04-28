<script setup lang="ts">
const lines = [
  '4',
  '1 5',
  '1 3',
  '1 1',
  '2',
]
const Q = Number(lines[0])
const A: number[] = []

for (let i = 0; i < Q; i++) {
  const parts = lines[1 + i].split(' ')

  if (parts[0] === '1') {
    const x = Number(parts[1])
    A.push(x)
  }
  else {
    A.pop()
  }

  console.log(A.join(' '))
}
</script>
