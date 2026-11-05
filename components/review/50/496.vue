<script setup lang="ts">
const lines = [
  '4 3',
  '1 3 4 6',
]
const [N, K] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

const queue: number[] = []
let head = 0
const out: string[] = []

for (let i = 0; i < N; i++) {
  while (head < queue.length && queue[head] + K <= A[i]) {
    head++
  }

  queue.push(A[i])
  out.push(String(queue.length - head))
}

console.log(out.join('\n'))
</script>
