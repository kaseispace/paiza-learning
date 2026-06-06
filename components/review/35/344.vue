<script setup lang="ts">
const lines = [
  '4',
  'abc',
  'abd',
  'abb',
  'aaa',
]
const N = Number(lines[0])
const MOD = 1000000000n

const weight: bigint[] = Array(27).fill(0n)
let fact = 1n
for (let i = 2n; i <= 26n; i++) fact *= i

for (let d = 0; d <= 26; d++) {
  weight[d] = fact % MOD
  if (d < 26) {
    fact /= BigInt(26 - d)
  }
}

const children: Map<number, number>[] = [new Map()]
const cnt = [0]
const distinct = [0]

let nodeCount = 1

for (let i = 0; i < N; i++) {
  const s = lines[i + 1]

  const firstId: number[] = new Array(26).fill(0)
  let nextId = 0

  let node = 0

  for (let p = 0; p < s.length; p++) {
    const c = s.charCodeAt(p) - 97

    if (firstId[c] === 0) {
      nextId++
      firstId[c] = nextId
    }

    const id = firstId[c]

    let nxt = children[node].get(id)
    if (nxt === undefined) {
      nxt = nodeCount++

      children.push(new Map())
      cnt.push(0)
      distinct.push(nextId)

      children[node].set(id, nxt)
    }

    node = nxt
    cnt[node]++
  }
}

let answer = 0n

for (let v = 1; v < nodeCount; v++) {
  const c = BigInt(cnt[v])

  if (c >= 2n) {
    const pairs = (c * (c - 1n)) / 2n
    answer = (answer + (pairs % MOD) * weight[distinct[v]]) % MOD
  }
}

console.log(answer.toString())
</script>
