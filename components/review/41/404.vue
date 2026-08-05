<script setup lang="ts">
const lines = [
  '3',
  '2',
  '4',
  '5',

]
const N = Number(lines[0])
const list: number[] = []

for (let i = 1; i <= N; i++) {
  list.unshift(Number(lines[i]))
}

console.log(list.join('\n'))
</script>
