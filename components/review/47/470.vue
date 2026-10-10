<script setup lang="ts">
type Node = {
  value: number
  prev: Node | null
  next: Node | null
}

const lines = [
  '2 0',
  '6',
  '4',
]
const [N, K] = lines[0].split(' ').map(Number)

let head: Node | null = null
let tail: Node | null = null

for (let i = 0; i < N; i++) {
  const node: Node = {
    value: Number(lines[i + 1]),
    prev: null,
    next: null,
  }

  if (tail === null) {
    head = node
    tail = node
  }
  else {
    tail.next = node
    node.prev = tail
    tail = node
  }
}

for (let i = 0; i < K; i++) {
  if (tail === null) {
    break
  }

  const removed = tail
  tail = removed.prev

  if (tail === null) {
    head = null
  }
  else {
    tail.next = null
  }

  removed.prev = null
}

const answer: number[] = []
let current = head

while (current !== null) {
  answer.push(current.value)
  current = current.next
}

console.log(answer.join('\n'))
</script>
