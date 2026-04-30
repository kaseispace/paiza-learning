<script setup lang="ts">
const lines = ['3 1 2']
const [n, s, k] = lines[0].split(' ').map(Number)
const visited: boolean[] = Array(n + 1).fill(false)

let cur = s
visited[cur] = true
const path = [cur]

for (let step = 0; step < k; step++) {
  for (let v = 1; v <= n; v++) {
    if (!visited[v]) {
      visited[v] = true
      cur = v
      path.push(cur)
      break
    }
  }
}

console.log(path.join(' '))
</script>
