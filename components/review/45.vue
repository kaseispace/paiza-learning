<script setup lang="ts">
const lines = [
  '7',
  '1 2 + 3 4 + -',
]
const tokens = lines[1].split(' ')

const stack: number[] = []

for (const token of tokens) {
  if (token === '+' || token === '-') {
    const b = stack.pop()!
    const a = stack.pop()!
    const result = token === '+' ? a + b : a - b
    stack.push(result)
  }
  else {
    stack.push(Number(token))
  }
}

console.log(stack[0])
</script>
