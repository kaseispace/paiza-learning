<script setup lang="ts">
const lines = ['++-+--+++- +--+']
const [S, T] = lines[0].split(' ')
const seen: Set<string> = new Set()
let current = S

const getNext = (state: string) => {
  let next = ''
  for (let i = 0; i < 10; i++) {
    const left = state[(i + 9) % 10]
    const right = state[(i + 1) % 10]
    const idx = (left === '+' ? 2 : 0) + (right === '+' ? 1 : 0)
    next += T[idx]
  }
  return next
}

while (true) {
  const next = getNext(current)
  if (next === S) {
    console.log('YES')
    break
  }

  if (seen.has(next)) {
    console.log('NO')
    break
  }

  seen.add(next)
  current = next
}
</script>
