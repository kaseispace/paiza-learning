<script setup lang="ts">
const lines = [
  '2',
  '1 2',
  '3 4',
  '5 6',
  '7 8',
]
const n = Number(lines[0])
const a: number[][] = []
const b: number[][] = []

for (let i = 0; i < n; i++) {
  a.push(lines[1 + i].split(' ').map(Number))
}

for (let i = 0; i < n; i++) {
  b.push(lines[1 + n + i].split(' ').map(Number))
}

for (let i = 0; i < n; i++) {
  const row = []
  for (let j = 0; j < n; j++) {
    row.push(a[i][j] + b[i][j])
  }
  console.log(row.join(' '))
}
</script>
