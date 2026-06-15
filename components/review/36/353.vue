<script setup lang="ts">
const lines = [
  '5',
  '0 1 1 0 0',
  '1 1 0 1 1',
  '1 0 0 0 0',
  '0 1 0 1 1',
  '0 1 0 1 0',
]
const n = Number(lines[0])
const loops: number[] = []

for (let i = 0; i < n; i++) {
  const row = lines[i + 1].split(' ').map(Number)

  if (row[i] === 1) {
    loops.push(i + 1)
  }
}

let out = ''
out += loops.length + '\n'

for (const v of loops) {
  out += v + '\n'
}

console.log(out)
</script>
