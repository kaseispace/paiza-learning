<script setup lang="ts">
const lines = [
  '1 1',
  '1 0',
  '1',
]
const [n, m] = lines[0].split(' ').map(Number)
const children: number[][] = Array.from({ length: n + 1 }, () => [])
const a: number[] = Array(n + 1).fill(0)

let root = 1

for (let i = 1; i <= n; i++) {
  const [ai, pi] = lines[i].split(' ').map(Number)
  a[i] = ai

  if (pi === 0) {
    root = i
  }
  else {
    children[pi].push(i)
  }
}

const sub: number[] = Array(n + 1).fill(0)

const dfs = (v: number) => {
  let sum = a[v]

  for (const to of children[v]) {
    sum += dfs(to)
  }

  sub[v] = sum
  return sum
}

dfs(root)

const outputs: string[] = []
for (let i = n + 1; i <= n + m; i++) {
  const c = Number(lines[i])
  outputs.push(String(sub[c]))
}

console.log(outputs.join('\n'))
</script>
