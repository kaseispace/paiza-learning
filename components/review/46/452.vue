<script setup lang="ts">
type Event = {
  type: number
  time: number
}

const lines = [
  '3 6',
  '2 5',
  '1 1',
  '1 2',
  '2 3',
  '1 6',
  '2 4',
]
const [n, t] = lines[0].split(' ').map(Number)
const events: Event[] = []

for (let i = 0; i < 2 * n; i++) {
  const [type, time] = lines[i + 1].split(' ').map(Number)

  events.push({ type, time })
}

events.sort((first, second) => first.time - second.time)

const MOD = 1000000007
const COST_SIZE = t + 1
const STATE_SIZE = n + 1

function makeKey(p: number, q: number, cost: number) {
  return (p * STATE_SIZE + q) * COST_SIZE + cost
}

function addState(dp: Map<number, number>, p: number, q: number, cost: number, count: number) {
  const key = makeKey(p, q, cost)
  const oldCount = dp.get(key) || 0

  dp.set(key, (oldCount + count) % MOD)
}

let dp: Map<number, number> = new Map()
dp.set(0, 1)

let previousTime = 0

for (const event of events) {
  const nextDp = new Map()
  const gap = event.time - previousTime

  for (const [key, count] of dp) {
    const cost = key % COST_SIZE
    const state = (key - cost) / COST_SIZE

    const p = Math.floor(state / STATE_SIZE)
    const q = state % STATE_SIZE

    const nextCost = cost + p * gap

    if (nextCost > t) {
      continue
    }

    if (event.type === 1) {
      if (q > 0) {
        addState(nextDp, p, q - 1, nextCost, count * q)
      }

      addState(nextDp, p + 1, q, nextCost, count)
    }
    else {
      if (p > 0) {
        addState(nextDp, p - 1, q, nextCost, count * p)
      }

      addState(nextDp, p, q + 1, nextCost, count)
    }
  }

  dp = nextDp
  previousTime = event.time
}

console.log(dp.get(makeKey(0, 0, t)) || 0)
</script>
