<script setup lang="ts">
const lines = ['3 1 2']
const [, s, k] = lines[0].split(' ').map(Number)

let t = 1
if (t === s) t = 2

const path: number[] = []
path.push(s)

for (let i = 0; i < k; i++) {
  const last = path[path.length - 1]
  if (last === s) {
    path.push(t)
  }
  else {
    path.push(s)
  }
}

console.log(path.join(' '))
</script>
