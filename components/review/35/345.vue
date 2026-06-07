<script setup lang="ts">
const lines = [
  '3 2 3',
  '1 2 1',
  '1 3 3',
  '+ 1',
  '+ 2',
  '- 1',
]
let ptr = 0
const [N, M, Q] = lines[ptr++].split(' ').map(Number)
const w = Array.from({ length: N }, () => new Int32Array(N))

const positiveWeights: number[] = []

for (let i = 0; i < M; i++) {
  const [a, b, f] = lines[ptr++].split(' ').map(Number)
  const u = a - 1
  const v = b - 1

  w[u][v] = f
  w[v][u] = f

  if (f > 0) positiveWeights.push(f)
}

positiveWeights.sort((a, b) => a - b)

const values: number[] = []
for (const x of positiveWeights) {
  if (values.length === 0 || values[values.length - 1] !== x) {
    values.push(x)
  }
}

const D = values.length
const weightToIndex = new Map()

for (let i = 0; i < D; i++) {
  weightToIndex.set(values[i], i)
}

const idxMat = Array.from({ length: N }, () => new Int32Array(N))

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const ww = w[i][j]
    if (ww > 0) {
      const idx = weightToIndex.get(ww)
      idxMat[i][j] = idx + 1
      idxMat[j][i] = idx + 1
    }
  }
}

const count = new Int32Array(D)

const B = 400
const blockCount = Math.ceil(D / B)
const activeInBlock = new Int32Array(blockCount)

const addWeight = (idx: number) => {
  if (count[idx] === 0) {
    activeInBlock[(idx / B) | 0]++
  }

  count[idx]++
}

const removeWeight = (idx: number) => {
  count[idx]--
  if (count[idx] === 0) {
    activeInBlock[(idx / B) | 0]--
  }
}

const getMaxWeight = () => {
  for (let b = blockCount - 1; b >= 0; b--) {
    if (activeInBlock[b] === 0) continue

    const r = Math.min(D - 1, (b + 1) * B - 1)
    const l = b * B

    for (let i = r; i >= l; i--) {
      if (count[i] > 0) {
        return values[i]
      }
    }
  }

  return 0
}

const inGroup = new Uint8Array(N)
let groupSize = 0

const ans: string[] = []

for (let qi = 0; qi < Q; qi++) {
  const [op, s] = lines[ptr++].split(' ')
  const x = Number(s) - 1

  const oldState = inGroup[x]

  for (let y = 0; y < N; y++) {
    if (y === x) continue

    const enc = idxMat[x][y]
    if (enc === 0) continue

    const idx = enc - 1

    const crossingBefore = oldState ^ inGroup[y]

    if (crossingBefore) {
      removeWeight(idx)
    }
    else {
      addWeight(idx)
    }
  }

  if (op === '+') {
    inGroup[x] = 1
    groupSize++
  }
  else {
    inGroup[x] = 0
    groupSize--
  }

  if (groupSize === 0 || groupSize === N) {
    ans.push('0')
  }
  else {
    ans.push(String(getMaxWeight()))
  }
}

console.log(ans.join('\n'))
</script>
