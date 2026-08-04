<script setup lang="ts">
const lines = [
  '5 5',
  '1 2 3 4 5',
  '1 1',
  '1 2',
  '2 3',
  '2 4',
  '3 5',

]
const [n, q] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

let size = 1
while (size < n) size *= 2

const seg: number[] = new Array(size * 2).fill(-Infinity)

for (let i = 0; i < n; i++) {
  seg[size + i] = A[i]
}

for (let i = size - 1; i >= 1; i--) {
  seg[i] = Math.max(seg[i * 2], seg[i * 2 + 1])
}

const answer: number[] = []

for (let i = 0; i < q; i++) {
  let [l, r] = lines[i + 2].split(' ').map(Number)

  l = l - 1 + size
  r = r - 1 + size

  let res = -Infinity

  while (l <= r) {
    if (l % 2 === 1) {
      res = Math.max(res, seg[l])
      l++
    }

    if (r % 2 === 0) {
      res = Math.max(res, seg[r])
      r--
    }

    l = Math.floor(l / 2)
    r = Math.floor(r / 2)
  }

  answer.push(res)
}

console.log(answer.join('\n'))
</script>
