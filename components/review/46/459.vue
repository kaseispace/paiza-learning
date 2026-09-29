<script setup lang="ts">
const lines = [
  '4',
  '1 e',
  '1 a',
  '1 c',
  '2',
]
const Q = Number(lines[0])
const queue: string[] = []
const answer: string[] = []

for (let i = 0; i < Q; i++) {
  const query = lines[i + 1].split(' ')

  if (query[0] === '1') {
    queue.push(query[1])
  }
  else {
    const removed = queue.shift()!
    answer.push(removed)
  }

  answer.push(queue.join(' '))
}

console.log(answer.join('\n') + '\n')
</script>
