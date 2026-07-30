<script setup lang="ts">
const lines = [
  '10 3',
  '-63756',
  '-72508',
  '50739',
  '86055',
  '-3982',
  '39880',
  '-5182',
  '22659',
  '82685',
  '-51357',
  '3 6',
  '1 5',
  '5 8',

]
const [N, K] = lines[0].split(' ').map(Number)

let size = 1
while (size < N) size *= 2

const seg: number[] = Array(size * 2).fill(Infinity)

for (let i = 0; i < N; i++) {
  seg[size + i] = Number(lines[i + 1])
}

for (let i = size - 1; i >= 1; i--) {
  seg[i] = Math.min(seg[i * 2], seg[i * 2 + 1])
}

const ans: number[] = []

for (let i = 0; i < K; i++) {
  let [l, r] = lines[N + 1 + i].split(' ').map(Number)
  l = l - 1 + size
  r = r - 1 + size

  let res = Infinity

  while (l <= r) {
    if (l % 2 === 1) {
      res = Math.min(res, seg[l])
      l++
    }

    if (r % 2 === 0) {
      res = Math.min(res, seg[r])
      r--
    }

    l = Math.floor(l / 2)
    r = Math.floor(r / 2)
  }

  ans.push(res)
}

console.log(ans.join('\n'))
</script>
