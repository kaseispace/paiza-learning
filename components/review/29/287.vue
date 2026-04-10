<script setup lang="ts">
const lines = [
  '5',
  '3',
  '5',
  '19',
  '1',
  '2',
]
const n = Number(lines[0])
const arr: number[] = []

for (let i = 1; i <= n; i++) {
  arr.push(Number(lines[i]))
}

arr.sort((a, b) => a - b)

for (const x of arr) {
  console.log(x)
}
</script>
