<script setup lang="ts">
const lines = [
  '1 2 3',
  '5',
  '1',
  '2',
  '3',
  '4',
  '5',
]
const [A1, A2, A3] = lines[0].split(' ').map(Number)
const N = Number(lines[1])
const b = lines.slice(2).map(Number)

const set: Set<number> = new Set()

for (let i = 0; i < N; i++) {
  set.add(A1 * b[i])
  set.add(A2 * b[i])
  set.add(A3 * b[i])
}

console.log(set.size)
</script>
