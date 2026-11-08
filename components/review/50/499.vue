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
  b.push(lines[1 + n + i].split(' ').map(Number))
}

const out: string[] = []
for (let i = 0; i < n; i++) {
  const row: number[] = []

  for (let j = 0; j < n; j++) {
    let sum = 0

    for (let k = 0; k < n; k++) {
      sum += a[i][k] * b[k][j]
    }

    row.push(sum)
  }

  out.push(row.join(' '))
}

console.log(out.join('\n'))
</script>
