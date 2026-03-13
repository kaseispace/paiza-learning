<script setup lang="ts">
const lines = [
  '6 2 6',
  '6 5 4 3 2 1',

]
const [, l, r] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

const part = a.slice(l - 1, r - 1)

part.sort((x, y) => x - y)

for (let i = l - 1; i < r - 1; i++) {
  a[i] = part[i - (l - 1)]
}

console.log(a.join(' '))
</script>
