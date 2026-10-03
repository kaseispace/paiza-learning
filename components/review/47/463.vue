<script setup lang="ts">
const lines = [
  '5 3',
  '4 3',
  '2 0',
  '1 4',
  '0 1',
]
const [n, m] = lines[0].split(' ').map(Number)
const parent = Array.from({ length: n }, (_, index) => index)
const degree: number[] = Array(n).fill(0)

function find(x: number) {
  if (parent[x] === x) {
    return x
  }

  parent[x] = find(parent[x])
  return parent[x]
}

function unite(x: number, y: number) {
  const rootX = find(x)
  const rootY = find(y)

  if (rootX !== rootY) {
    parent[rootX] = rootY
  }
}

for (let i = 0; i < m; i++) {
  const [a, b] = lines[i + 1].split(' ').map(Number)

  degree[a]++
  degree[b]++

  unite(a, b)
}

const [ea, eb] = lines[m + 1].split(' ').map(Number)

const makesDegreeOverTwo = ea === eb || degree[ea] >= 2 || degree[eb] >= 2

const makesCycle = find(ea) === find(eb)

if (makesDegreeOverTwo || makesCycle) {
  console.log('No')
}
else {
  console.log('Yes')
}
</script>
