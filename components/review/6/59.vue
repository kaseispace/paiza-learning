<script setup lang="ts">
const lines = [
  '5',
  'a b c Delete d',
]
const keys = lines[1].split(' ')

const leftStack: string[] = []
const rightStack: string[] = []

for (const key of keys) {
  if (key === 'Left') {
    if (leftStack.length > 0) {
      rightStack.push(leftStack.pop()!)
    }
  }
  else if (key === 'Right') {
    if (rightStack.length > 0) {
      leftStack.push(rightStack.pop()!)
    }
  }
  else if (key === 'Delete') {
    if (leftStack.length > 0) {
      leftStack.pop()
    }
  }
  else {
    leftStack.push(key)
  }
}

console.log([...leftStack, ...rightStack.reverse()].join(' '))
</script>
