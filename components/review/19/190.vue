<script setup lang="ts">
const lines = [
  '3',
  'a',
  'shift b',
  'c',
]
const n = Number(lines[0])
let caps = false
let result = ''

for (let i = 1; i <= n; i++) {
  const parts = lines[i].split(' ')

  if (parts[0] === 'shift') {
    result += parts[1].toUpperCase()
  }
  else if (parts[0] === 'capslock') {
    caps = !caps
  }
  else {
    result += caps ? parts[0].toUpperCase() : parts[0]
  }
}

console.log(result)
</script>
