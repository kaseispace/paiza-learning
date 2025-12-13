<script setup lang="ts">
const lines = [
  '5',
  '10',
  '4',
  '9',
  '7',
  '10',
]
const N = Number(lines[0])
const A = lines.slice(1).map(Number)

const value: number[] = Array(N).fill(null)
const next_ptr: number[] = Array(N).fill(-1)
const prev_ptr: number[] = Array(N).fill(-1)

let empty_min_index = 0
let head = -1
let tail = -1

for (let i = 0; i < N; i++) {
  const idx = empty_min_index
  value[idx] = A[i]

  if (head === -1) {
    head = idx
    tail = idx
  }
  else {
    next_ptr[tail] = idx
    prev_ptr[idx] = tail
    tail = idx
  }

  empty_min_index++
}

let cur = head
while (cur !== -1) {
  console.log(value[cur])
  cur = next_ptr[cur]
}
</script>
