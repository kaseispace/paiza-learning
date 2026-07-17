<script setup lang="ts">
const lines = [
  '10 3',
  '92273',
  '38271',
  '13195',
  '30693',
  '73139',
  '-48198',
  '91078',
  '-4018',
  '-97168',
  '89133',
  '5 6',
  '8 10',
  '4 7',

]
const [N, K] = lines[0].split(' ').map(Number)
const A: number[] = []

for (let i = 0; i < N; i++) {
  A.push(Number(lines[i + 1]))
}

let size = 1
while (size < N) size *= 2

const seg: number[] = Array(size * 2).fill(-Infinity)

for (let i = 0; i < N; i++) {
  seg[size + i] = A[i]
}

for (let i = size - 1; i >= 1; i--) {
  seg[i] = Math.max(seg[i * 2], seg[i * 2 + 1])
}

const answer: number[] = []

for (let i = 0; i < K; i++) {
  let [l, r] = lines[N + 1 + i].split(' ').map(Number)

  l--
  r--

  l += size
  r += size

  let max = -Infinity

  while (l <= r) {
    if (l % 2 === 1) {
      max = Math.max(max, seg[l])
      l++
    }

    if (r % 2 === 0) {
      max = Math.max(max, seg[r])
      r--
    }

    l = Math.floor(l / 2)
    r = Math.floor(r / 2)
  }

  answer.push(max)
}

console.log(answer.join('\n'))
</script>
