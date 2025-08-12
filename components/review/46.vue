<script setup lang="ts">
const lines = [
  '6',
  '1 1 2',
  '1 2 3',
  '1 1 4',
  '3',
  '2 1',
  '3',
]
const queries = lines.slice(1)

const queue1: number[] = []
const queue2: number[] = []

for (const query of queries) {
  const parts = query.split(' ').map(Number)
  const type = parts[0]

  if (type === 1) {
    const k = parts[1]
    const x = parts[2]
    if (k === 1) queue1.push(x)
    else queue2.push(x)
  }
  else if (type === 2) {
    const k = parts[1]
    if (k === 1) console.log(queue1.shift())
    else console.log(queue2.shift())
  }
  else if (type === 3) {
    console.log(`${queue1.length} ${queue2.length}`)
  }
}
</script>
