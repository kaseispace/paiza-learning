<script setup lang="ts">
type Value = number | string

const lines = [
  'x=1;y=2;tmp=x;x=y;y=tmp;',
  '6',
  '1 24 x',
  '1 24 y',
  '1 24 tmp',
  '5 24 x',
  '5 24 y',
  '5 24 tmp',

]
const s = lines[0]
const q = Number(lines[1])

const statements: string[] = []
const startIndex: number[] = []
const endIndex: number[] = []

let position = 0

while (position < s.length) {
  const semicolon = s.indexOf(';', position)
  const statement = s.slice(position, semicolon)

  startIndex[position] = statements.length
  endIndex[semicolon] = statements.length

  statements.push(statement)
  position = semicolon + 1
}

const n = statements.length
const tree: Array<Map<string, Value>> = Array(n * 4)

function build(node: number, left: number, right: number) {
  if (left === right) {
    const [variable, value] = statements[left].split('=')

    tree[node] = new Map()

    if (/^\d+$/.test(value)) {
      tree[node].set(variable, Number(value))
    }
    else {
      tree[node].set(variable, value)
    }

    return
  }

  const mid = Math.floor((left + right) / 2)

  build(node * 2, left, mid)
  build(node * 2 + 1, mid + 1, right)

  const leftMap = tree[node * 2]
  const rightMap = tree[node * 2 + 1]

  const merged = new Map(leftMap)

  for (const [variable, value] of rightMap) {
    if (typeof value === 'string' && leftMap.has(value)) {
      merged.set(variable, leftMap.get(value)!)
    }
    else {
      merged.set(variable, value)
    }
  }

  tree[node] = merged
}

function collectNodes(node: number, left: number, right: number, queryLeft: number, queryRight: number, result: number[]) {
  if (queryRight < left || right < queryLeft) {
    return
  }

  if (queryLeft <= left && right <= queryRight) {
    result.push(node)
    return
  }

  const mid = Math.floor((left + right) / 2)

  collectNodes(node * 2, left, mid, queryLeft, queryRight, result)
  collectNodes(node * 2 + 1, mid + 1, right, queryLeft, queryRight, result)
}

build(1, 0, n - 1)

const answers: number[] = []

for (let i = 0; i < q; i++) {
  const [l, r, variable] = lines[i + 2].split(' ')

  const left = startIndex[Number(l) - 1]
  const right = endIndex[Number(r) - 1]

  const nodes: number[] = []
  collectNodes(1, 0, n - 1, left, right, nodes)

  let value: Value = variable

  for (let j = nodes.length - 1; j >= 0; j--) {
    const map = tree[nodes[j]]

    if (typeof value === 'string' && map.has(value)) {
      value = map.get(value)!
    }
  }

  answers.push(typeof value === 'number' ? value : 0)
}

console.log(answers.join('\n'))
</script>
