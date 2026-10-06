<script setup lang="ts">
const lines = [
  '10',
  '1 3',
  '1 4',
  '1 4',
  '1 8',
  '1 6',
  '1 2',
  '1 1',
  '1 9',
  '1 5',
  '1 1',
]
const Q = Number(lines[0])
let set = 0
const answer: string[] = []

for (let i = 0; i < Q; i++) {
  const [type, a] = lines[i + 1].split(' ').map(Number)

  const bit = 1 << (a - 1)

  if (type === 1) {
    set |= bit
  }
  else {
    set &= ~bit
  }

  answer.push(set.toString(2).padStart(10, '0'))
}

console.log(answer.join('\n'))
</script>
