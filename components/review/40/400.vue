<script setup lang="ts">
const lines = [
  '3',
  '1',
  '2',
  '3',
  '3',
  'return 4',
  'rent',
  'rent',

]
const N = Number(lines[0])
const stack: number[] = []

for (let i = 0; i < N; i++) {
  stack.push(Number(lines[i + 1]))
}

const K = Number(lines[N + 1])

for (let i = 0; i < K; i++) {
  const query = lines[N + 2 + i].split(' ')

  if (query[0] === 'rent') {
    stack.pop()
  }
  else {
    stack.push(Number(query[1]))
  }
}

const ans = []

while (stack.length > 0) {
  ans.push(stack.pop())
}

console.log(ans.join('\n'))
</script>
