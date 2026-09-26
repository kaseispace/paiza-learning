<script setup lang="ts">
const lines = [
  '4',
  '1 4 2 3',
]
const n = Number(lines[0])
const a = lines[1].split(' ').map(Number)

const result: number[] = []

for (let i = 0; i < n; i++) {
  result.push(a[a[i] - 1])
}

console.log(result.join(' '))
</script>
