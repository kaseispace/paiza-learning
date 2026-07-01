<script setup lang="ts">
type Face = 'T' | 'B' | 'U' | 'D' | 'L' | 'R'
type State = Record<Face, Face>
type FaceValue = Record<Face, number>

const lines = [
  '1 6 2 5 4 3',
  '4',
  '1',
  '5',
  '3',
  '4',
]

const [T, B, U, D, L, R] = lines[0].split(' ').map(Number)
const N = Number(lines[1])
const board: number[] = []

for (let i = 0; i < N; i++) {
  board.push(Number(lines[i + 2]))
}

const faceValue: FaceValue = { T, B, U, D, L, R }

const start: State = {
  T: 'T',
  B: 'B',
  U: 'U',
  D: 'D',
  L: 'L',
  R: 'R',
}

const rotateRight = (s: State): State => {
  return {
    T: s.L,
    B: s.R,
    U: s.U,
    D: s.D,
    L: s.B,
    R: s.T,
  }
}

const rotateLeft = (s: State): State => {
  return {
    T: s.R,
    B: s.L,
    U: s.U,
    D: s.D,
    L: s.T,
    R: s.B,
  }
}

const rotateFront = (s: State): State => {
  return {
    T: s.U,
    B: s.D,
    U: s.B,
    D: s.T,
    L: s.L,
    R: s.R,
  }
}

const rotateBack = (s: State): State => {
  return {
    T: s.D,
    B: s.U,
    U: s.T,
    D: s.B,
    L: s.L,
    R: s.R,
  }
}

const serialize = (s: State): string => {
  return `${s.T}${s.B}${s.U}${s.D}${s.L}${s.R}`
}

const states: State[] = []

const distMap: Map<string, number> = new Map()

const queue: State[] = [start]

distMap.set(serialize(start), 0)

while (queue.length > 0) {
  const cur: State = queue.shift() as State

  states.push(cur)

  const nexts: State[] = [
    rotateRight(cur),
    rotateLeft(cur),
    rotateFront(cur),
    rotateBack(cur),
  ]

  for (const nxt of nexts) {
    const key: string = serialize(nxt)

    if (!distMap.has(key)) {
      distMap.set(key, (distMap.get(serialize(cur)) as number) + 1)

      queue.push(nxt)
    }
  }
}

const indexMap: Map<string, number> = new Map()

for (let i = 0; i < states.length; i++) {
  indexMap.set(serialize(states[i]), i)
}

const graph: number[][] = Array.from(
  { length: 24 },
  (): number[] => [],
)

for (let i = 0; i < 24; i++) {
  const s: State = states[i]

  const nexts: State[] = [
    rotateRight(s),
    rotateLeft(s),
    rotateFront(s),
    rotateBack(s),
  ]

  for (const nxt of nexts) {
    graph[i].push(
      indexMap.get(serialize(nxt)) as number,
    )
  }
}

const dist: number[][] = Array.from({ length: 24 }, (): number[] => Array(24).fill(Infinity))

for (let i = 0; i < 24; i++) {
  const q: number[] = [i]

  dist[i][i] = 0

  while (q.length > 0) {
    const v: number = q.shift() as number

    for (const to of graph[v]) {
      if (dist[i][to] > dist[i][v] + 1) {
        dist[i][to] = dist[i][v] + 1

        q.push(to)
      }
    }
  }
}

const topNumber: number[] = states.map((s: State): number => faceValue[s.T])

let dp: number[] = Array(24).fill(Infinity)

dp[0] = 0

for (let i = 1; i < N; i++) {
  const nextDp: number[] = Array(24).fill(Infinity)

  for (let from = 0; from < 24; from++) {
    if (dp[from] === Infinity) continue

    for (let to = 0; to < 24; to++) {
      if (topNumber[to] !== board[i]) continue

      nextDp[to] = Math.min(nextDp[to], dp[from] + dist[from][to])
    }
  }

  dp = nextDp
}

console.log(Math.min(...dp).toString())
</script>
