<script setup lang="ts">
const lines = [
  '10 1',
  'swap 1 2',
]
const [n, q] = lines[0].split(' ').map(Number)
const a = Array.from({ length: n }, (_, i) => i + 1)
const b = []

for (let i = 1; i <= q; i++) {
  b.push(lines[i])
}

for (let i = 0; i < q; i++) {
  const c = b[i].split(' ')
  switch (c[0]) {
    case 'swap':
      const a1 = a[Number(c[1]) - 1]
      const b1 = a[Number(c[2]) - 1]
      a.splice(Number(c[1]), 1, b1)
      a.splice(Number(c[2]), 1, a1)
      break
    case 'reverse':
      a.reverse()
      break
    case 'resize':
      a.splice(Number(c[1]))
      break
  }
}

a.forEach(num => console.log(num))

const x = 10
const y = 3
console.log(x >= 10 && !(y >= 10) ? 'YES' : 'NO')
</script>

<template>
  <div />
</template>
