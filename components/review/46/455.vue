<script setup lang="ts">
const lines: string[] = [
  '3 1 1',
  '7',
  '5',
  '4',
]

const firstLine: number[] = lines[0].split(' ').map(Number)

const N: number = firstLine[0]
const P: number = firstLine[1]
const X: number = firstLine[2]

class Node {
  value: number
  next: Node | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

let head: Node | null = null
let tail: Node | null = null

for (let i: number = 0; i < N; i++) {
  const node: Node = new Node(Number(lines[i + 1]))

  if (tail === null) {
    head = node
    tail = node
  }
  else {
    tail.next = node
    tail = node
  }
}

const newNode: Node = new Node(X)

if (P === 1) {
  newNode.next = head
  head = newNode
}
else {
  let previous: Node | null = head

  for (let i: number = 1; i < P - 1; i++) {
    if (previous !== null) {
      previous = previous.next
    }
  }

  if (previous !== null) {
    newNode.next = previous.next
    previous.next = newNode
  }
}

const answer: number[] = []
let current: Node | null = head

while (current !== null) {
  answer.push(current.value)
  current = current.next
}

console.log(answer.join('\n'))
</script>
