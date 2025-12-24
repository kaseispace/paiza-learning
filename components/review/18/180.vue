<script setup lang="ts">
const lines = [
  '3',
  'buy_book 10',
  'buy_book 15',
  'read 10',
]
const N = Number(lines[0])

const stack: number[] = []

for (let i = 1; i <= N; i++) {
  const parts = lines[i].split(' ')
  const cmd = parts[0]

  if (cmd === 'buy_book') {
    const X = Number(parts[1])
    stack.push(X)
  }
  else if (cmd === 'read') {
    let Y = Number(parts[1])

    while (Y > 0) {
      const top = stack[stack.length - 1]

      if (top > Y) {
        stack[stack.length - 1] = top - Y
        Y = 0
      }
      else {
        Y -= top
        stack.pop()
      }
    }
  }
}

const bookCount = stack.length
let unreadPages = 0
for (const pages of stack) {
  unreadPages += pages
}

console.log(bookCount)
console.log(unreadPages)
</script>
