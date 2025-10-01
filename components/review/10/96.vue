<script setup lang="ts">
const lines = [
  '5',
  '1 2 3 4 5',
  '5',
  '1 1 3',
  '2 1 3',
  '3 1 3',
  '2 3 4',
  '3 1 5',
]
const N = parseInt(lines[0])
const P = lines[1].split(' ').map(Number)
const queries = lines.slice(3).map(line => line.split(' ').map(Number))

// 累積XOR配列
const xor: number[] = Array(N + 1).fill(0)
for (let i = 0; i < N; i++) {
  xor[i + 1] = xor[i] ^ P[i]
}

// セグメントツリー構築（AND / OR）
const size = 1 << Math.ceil(Math.log2(N))
const andTree: number[] = Array(size * 2).fill((1 << 30) - 1)
const orTree: number[] = Array(size * 2).fill(0)

// 初期化
for (let i = 0; i < N; i++) {
  andTree[size + i] = P[i]
  orTree[size + i] = P[i]
}

for (let i = size - 1; i > 0; i--) {
  andTree[i] = andTree[i * 2] & andTree[i * 2 + 1]
  orTree[i] = orTree[i * 2] | orTree[i * 2 + 1]
}

// 区間クエリ関数
const query = (tree: number[], l: number, r: number, op: 'AND' | 'OR') => {
  l += size - 1
  r += size - 1
  let res = op === 'AND' ? (1 << 30) - 1 : 0

  while (l <= r) {
    if (l % 2 === 1) {
      res = op === 'AND' ? (res & tree[l]) : (res | tree[l])
      l++
    }
    if (r % 2 === 0) {
      res = op === 'AND' ? (res & tree[r]) : (res | tree[r])
      r--
    }

    l >>= 1
    r >>= 1
  }
  return res
}

// クエリ処理
for (const [type, l, r] of queries) {
  if (type === 1) {
    console.log(query(andTree, l, r, 'AND'))
  }
  else if (type === 2) {
    console.log(query(orTree, l, r, 'OR'))
  }
  else if (type === 3) {
    console.log(xor[r] ^ xor[l - 1])
  }
}
</script>
