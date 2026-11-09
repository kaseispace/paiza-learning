<script setup lang="ts">
const lines = [
  '5 1 4',
  '2',
  '2 5',
  '3',
  '1 3 5',
  '3',
  '2 4 5',
  '2',
  '3 5',
  '4',
  '1 2 3 4',

]
const [n, s, t] = lines[0].split(' ').map(Number)

const adj: number[][] = [[]]
for (let i = 1; i <= n; i++) {
  adj.push(lines[2 * i].split(' ').map(Number))
}

let best: number[] = []

function dfs(v: number, path: number[]) {
  for (const i of adj[v]) {
    if (!path.includes(i)) {
      path.push(i)

      if (i === t) {
        if (best === null || path.length < best.length) {
          best = path.slice()
        }
      }
      else {
        dfs(i, path)
      }

      path.pop()
    }
  }
}

dfs(s, [s])

console.log(best.join(' '))
</script>
