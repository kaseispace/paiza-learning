<script setup lang="ts">
const lines = [
  '6 4',
  'kirishima rokumura midorikawa kurota neko margaret',
  'noda kino sakura nitta',
  '3 4 2 8',
]
const [, M] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ')
const B = lines[2].split(' ')
const X = lines[3].split(' ').map(Number)

const queue = [...A]

for (let i = 0; i < M; i++) {
  queue.splice(X[i] - 1, 0, B[i])
}

console.log(queue.join('\n'))
</script>
