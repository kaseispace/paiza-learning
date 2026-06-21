<script setup lang="ts">
const lines = [
  '4',
  'b',
  'ab',
  'a',
  'aa',
]
const arr = lines.slice(1)

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length
  }

  return a.localeCompare(b)
})

console.log(arr.join('\n'))
</script>
