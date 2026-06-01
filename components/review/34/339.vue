<script setup lang="ts">
const lines = [
  '4',
  '1 c',
  '2',
  '1 d',
  '2',
]
const Q = Number(lines[0])
const A: string[] = []

for (let i = 1; i <= Q; i++) {
  const parts = lines[i].split(' ')

  if (parts[0] === '1') {
    A.push(parts[1])
  }
  else {
    const last = A.pop()
    console.log(last)
  }

  console.log(A.join(' '))
}
</script>
