<script setup lang="ts">
const lines = [
  '3',
  '2',
  '1',
  '1',
  '2',
  '3',
  '3',

]
const N = Number(lines[0])
const flowers = lines.slice(1).map(line => Number(line))
let count = 1
let result = 0

while (flowers.length > 0) {
  const idx = flowers.indexOf(count)

  for (let i = idx; i > 0; i--) {
    [flowers[i], flowers[i - 1]] = [flowers[i - 1], flowers[i]]
    result++
  }

  flowers.shift()
  count = count % N + 1
}

console.log(result)
</script>
