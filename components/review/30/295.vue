<script setup lang="ts">
type DiceState = [number, number, number, number, number, number]

const lines = ['5 2 3 6 4 1']
const [T, B, U, D, L, R] = lines[0].split(' ').map(Number)
const start: DiceState = [T, B, U, D, L, R]

function rotateFront(s: DiceState): DiceState {
  const [t, b, f, ba, l, r] = s
  return [ba, f, t, b, l, r]
}

function rotateBack(s: DiceState): DiceState {
  const [t, b, f, ba, l, r] = s
  return [f, ba, b, t, l, r]
}

function rotateRight(s: DiceState): DiceState {
  const [t, b, f, ba, l, r] = s
  return [l, r, f, ba, b, t]
}

function rotateLeft(s: DiceState): DiceState {
  const [t, b, f, ba, l, r] = s
  return [r, l, f, ba, t, b]
}

function key(s: DiceState): string {
  return s.join(',')
}

const queue: DiceState[] = []
const dist: Map<string, number> = new Map()

queue.push(start)
dist.set(key(start), 0)

while (queue.length > 0) {
  const cur = queue.shift()!
  const d = dist.get(key(cur))!

  const nexts = [
    rotateFront(cur),
    rotateBack(cur),
    rotateRight(cur),
    rotateLeft(cur),
  ]

  for (const nx of nexts) {
    const k = key(nx)

    if (!dist.has(k)) {
      dist.set(k, d + 1)
      queue.push(nx)
    }
  }
}

const ans: number[] = Array(7).fill(Infinity)

for (const [k, d] of dist.entries()) {
  const s = k.split(',').map(Number)
  const top = s[0]

  if (top >= 1 && top <= 6) {
    if (d < ans[top]) ans[top] = d
  }
}

let out = ''
for (let v = 1; v <= 6; v++) {
  out += ans[v] + '\n'
}

process.stdout.write(out)
</script>
