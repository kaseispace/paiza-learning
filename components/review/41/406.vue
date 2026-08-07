<script setup lang="ts">
const lines = [
  '10 3',
  '35602',
  '90985',
  '-6848',
  '8751',
  '-21572',
  '67956',
  '41526',
  '15660',
  '-42275',
  '7240',
  '1 5 -45364',
  '0 4 5',
  '0 3 6',

]
const [N, K] = lines[0].split(' ').map(Number)

let size = 1
while (size < N) size *= 2

const seg: number[] = new Array(size * 2).fill(-Infinity)

for (let i = 0; i < N; i++) {
  seg[size + i] = Number(lines[i + 1])
}

for (let i = size - 1; i >= 1; i--) {
  seg[i] = Math.max(seg[i * 2], seg[i * 2 + 1])
}

const update = (idx: number, value: number) => {
  idx = idx - 1 + size
  seg[idx] = value

  while (idx > 1) {
    idx = Math.floor(idx / 2)
    seg[idx] = Math.max(seg[idx * 2], seg[idx * 2 + 1])
  }
}

const query = (left: number, right: number) => {
  left = left - 1 + size
  right = right - 1 + size

  let res = -Infinity

  while (left <= right) {
    if (left % 2 === 1) res = Math.max(res, seg[left++])
    if (right % 2 === 0) res = Math.max(res, seg[right--])

    left = Math.floor(left / 2)
    right = Math.floor(right / 2)
  }

  return res
}

const ans: number[] = []

for (let i = 0; i < K; i++) {
  const q = lines[N + 1 + i].split(' ').map(Number)

  if (q[0] === 0) {
    ans.push(query(q[1], q[2]))
  }
  else {
    update(q[1], q[2])
  }
}

console.log(ans.join('\n'))
</script>
