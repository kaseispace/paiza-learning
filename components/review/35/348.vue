<script setup lang="ts">
type Face = 'T' | 'B' | 'U' | 'D' | 'L' | 'R'

type DiceState = {
  T: Face
  B: Face
  U: Face
  D: Face
  L: Face
  R: Face
}

const lines = [
  '1 6 2 5 4 3',
  '4',
  '1',
  '5',
  '3',
  '4',
]
const nums = lines[0].split(' ').map(Number)
const N = Number(lines[1])

const board: number[] = []
for (let i = 0; i < N; i++) {
  board.push(Number(lines[i + 2]))
}

const faceValue: Record<Face, number> = {
  T: nums[0],
  B: nums[1],
  U: nums[2],
  D: nums[3],
  L: nums[4],
  R: nums[5],
}

const rollFront = (s: DiceState) => {
  return {
    T: s.D,
    B: s.U,
    U: s.T,
    D: s.B,
    L: s.L,
    R: s.R,
  }
}

const rollBack = (s: DiceState) => {
  return {
    T: s.U,
    B: s.D,
    U: s.B,
    D: s.T,
    L: s.L,
    R: s.R,
  }
}

const rollRight = (s: DiceState) => {
  return {
    T: s.L,
    B: s.R,
    U: s.U,
    D: s.D,
    L: s.B,
    R: s.T,
  }
}

const rollLeft = (s: DiceState) => {
  return {
    T: s.R,
    B: s.L,
    U: s.U,
    D: s.D,
    L: s.T,
    R: s.B,
  }
}

const key = (s: DiceState) => {
  return `${s.T}${s.B}${s.U}${s.D}${s.L}${s.R}`
}

const start: DiceState = {
  T: 'T',
  B: 'B',
  U: 'U',
  D: 'D',
  L: 'L',
  R: 'R',
}

const states: DiceState[] = []
const index: Map<string, number> = new Map()
const graph: number[][] = []

const queue: DiceState[] = [start]
index.set(key(start), 0)
states.push(start)

for (let head = 0; head < queue.length; head++) {
  const cur = queue[head]

  const nexts = [
    rollFront(cur),
    rollBack(cur),
    rollRight(cur),
    rollLeft(cur),
  ]

  for (const nxt of nexts) {
    const k = key(nxt)

    if (!index.has(k)) {
      index.set(k, states.length)
      states.push(nxt)
      queue.push(nxt)
    }
  }
}

for (let i = 0; i < 24; i++) {
  graph.push([])
}

for (let i = 0; i < 24; i++) {
  const s = states[i]

  const nexts = [
    rollFront(s),
    rollBack(s),
    rollRight(s),
    rollLeft(s),
  ]

  for (const nxt of nexts) {
    graph[i].push(index.get(key(nxt))!)
  }
}

const dist: number[][] = Array.from({ length: 24 }, () => Array(24).fill(Infinity))

for (let s = 0; s < 24; s++) {
  const q = [s]
  dist[s][s] = 0

  for (let head = 0; head < q.length; head++) {
    const v = q[head]

    for (const nv of graph[v]) {
      if (dist[s][nv] !== Infinity) continue

      dist[s][nv] = dist[s][v] + 1
      q.push(nv)
    }
  }
}

const topNumber = states.map(s => faceValue[s.T])

let dp: number[] = Array(24).fill(Infinity)
dp[0] = 0

for (let pos = 0; pos < N - 1; pos++) {
  const need = board[pos + 1]

  const nextDp = Array(24).fill(Infinity)

  for (let cur = 0; cur < 24; cur++) {
    if (dp[cur] === Infinity) continue

    for (let nxt = 0; nxt < 24; nxt++) {
      if (topNumber[nxt] !== need) continue

      nextDp[nxt] = Math.min(nextDp[nxt], dp[cur] + dist[cur][nxt])
    }
  }

  dp = nextDp
}

let answer = Infinity

for (const v of dp) {
  answer = Math.min(answer, v)
}

console.log(answer)
</script>
