<script setup lang="ts">
const lines = [
  '15 3',
  '70769',
  '31957',
  '-21562',
  '15210',
  '-24825',
  '-79654',
  '-78429',
  '-26865',
  '89690',
  '64207',
  '54997',
  '96127',
  '-91765',
  '-71208',
  '91107',
  '0 8 9',
  '1 6 9 -17335',
  '0 6 12',

]
const firstLine = lines[0].split(' ').map(Number)
const N = firstLine[0]
const K = firstLine[1]

const A: number[] = []
for (let i = 0; i < N; i++) {
  A.push(Number(lines[i + 1]))
}

const tree: number[] = Array(N * 4).fill(0)
const lazy: number[] = Array(N * 4).fill(0)

function build(node: number, left: number, right: number) {
  if (left === right) {
    tree[node] = A[left]
    return
  }

  const mid = Math.floor((left + right) / 2)

  build(node * 2, left, mid)
  build(node * 2 + 1, mid + 1, right)

  tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1])
}

function push(node: number) {
  if (lazy[node] === 0) return

  const value = lazy[node]

  tree[node * 2] += value
  tree[node * 2 + 1] += value
  lazy[node * 2] += value
  lazy[node * 2 + 1] += value

  lazy[node] = 0
}

function update(node: number, left: number, right: number, queryLeft: number, queryRight: number, value: number) {
  if (queryRight < left || right < queryLeft) return

  if (queryLeft <= left && right <= queryRight) {
    tree[node] += value
    lazy[node] += value
    return
  }

  push(node)

  const mid = Math.floor((left + right) / 2)

  update(node * 2, left, mid, queryLeft, queryRight, value)
  update(node * 2 + 1, mid + 1, right, queryLeft, queryRight, value)

  tree[node] = Math.max(tree[node * 2], tree[node * 2 + 1])
}

function rangeMax(node: number, left: number, right: number, queryLeft: number, queryRight: number): number {
  if (queryRight < left || right < queryLeft) {
    return -Infinity
  }

  if (queryLeft <= left && right <= queryRight) {
    return tree[node]
  }

  push(node)

  const mid = Math.floor((left + right) / 2)

  return Math.max(rangeMax(node * 2, left, mid, queryLeft, queryRight), rangeMax(node * 2 + 1, mid + 1, right, queryLeft, queryRight))
}

build(1, 0, N - 1)

const answer: string[] = []

for (let i = 0; i < K; i++) {
  const query = lines[N + 1 + i].split(' ').map(Number)

  const type = query[0]
  const L = query[1] - 1
  const R = query[2] - 1

  if (type === 0) {
    answer.push(rangeMax(1, 0, N - 1, L, R).toString())
  }
  else {
    const D = query[3]
    update(1, 0, N - 1, L, R, D)
  }
}

console.log(answer.join('\n') + '\n')
</script>
