<script setup lang="ts">
const lines = [
  '2 100',
  'ride 3 50 50 50',
  'get_off 1',
]
const [, X] = lines[0].split(' ').map(Number)
const logs = lines.slice(1)
const stack: number[] = []
let totalWeight = 0

for (const line of logs) {
  const parts = line.split(' ')
  if (parts[0] === 'ride') {
    const weights = parts.slice(2).map(Number)
    for (const w of weights) {
      if (totalWeight + w <= X) {
        stack.push(w)
        totalWeight += w
      }
    }
  }
  else if (parts[0] === 'get_off') {
    const k = Number(parts[1])
    for (let i = 0; i < k; i++) {
      const w = stack.pop()!
      totalWeight -= w
    }
  }
}

console.log(stack.length)
console.log(totalWeight)
</script>
