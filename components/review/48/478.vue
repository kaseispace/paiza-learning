<script setup lang="ts">
const lines = [
  '3 7 11',
  '3',
  '5',
  '6',
  '7',
]
const A = lines[0].split(' ').map(BigInt)
const N = Number(lines[1])

const heap: bigint[] = []

function push(val: bigint) {
  heap.push(val)
  let i = heap.length - 1

  while (i > 0) {
    const p = (i - 1) >> 1
    if (heap[p] <= heap[i]) break;
    [heap[p], heap[i]] = [heap[i], heap[p]]
    i = p
  }
}

function pop() {
  const top = heap[0]
  const last = heap.pop()!
  if (heap.length > 0) {
    heap[0] = last
    let i = 0

    while (true) {
      const l = 2 * i + 1
      const r = 2 * i + 2
      let min = i

      if (l < heap.length && heap[l] < heap[min]) min = l
      if (r < heap.length && heap[r] < heap[min]) min = r
      if (min === i) break;
      [heap[min], heap[i]] = [heap[i], heap[min]]
      i = min
    }
  }

  return top
}

const out: string[] = []
for (let i = 0; i < N; i++) {
  const b = BigInt(lines[i + 2])
  for (const a of A) {
    push(a * b)
  }

  out.push(pop().toString())
}

console.log(out.join('\n'))
</script>
