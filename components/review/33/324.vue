<script setup lang="ts">
const lines = [
  '5',
  '5 4 3 2 1',
]
const N = Number(lines[0])
const arr = lines[1].split(' ').map(Number)

const a: number[] = new Array(N + 1)
for (let i = 1; i <= N; i++) a[i] = arr[i - 1]

const pos: number[] = new Array(N + 1)
for (let i = 1; i <= N; i++) {
  pos[a[i]] = i
}

let swaps = 0

for (let i = 1; i <= N; i++) {
  const p = pos[i]

  if (p !== i) {
    const x = a[i]
    const y = a[p]

    a[i] = y
    a[p] = x

    pos[x] = p
    pos[y] = i

    swaps++
  }
}

console.log(swaps)
</script>
