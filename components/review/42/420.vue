<script setup lang="ts">
const lines = [
  '4',
  '1 1',
  '1 4',
  '1 2',
  '2',

]
const Q = Number(lines[0])
const queue: number[] = []
const result: string[] = []

for (let i = 0; i < Q; i++) {
  const query = lines[i + 1].split(' ').map(Number)

  if (query[0] === 1) {
    const x = query[1]
    queue.push(x)
  }
  else {
    queue.shift()
  }

  result.push(queue.join(' '))
}

process.stdout.write(result.join('\n') + '\n')
</script>
