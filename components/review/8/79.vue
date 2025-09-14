<script setup lang="ts">
const lines = [
  '2 4',
  'paiza zero room omega',
]
const [N, M] = lines[0].split(' ').map(Number)
const words = lines[1].split(' ')

let isValid = true
for (let i = 0; i < M - 1; i++) {
  const tail = words[i].slice(-N)
  const head = words[i + 1].slice(0, N)
  if (tail !== head) {
    isValid = false
    break
  }
}

console.log(isValid ? 'YES' : 'NO')
</script>
