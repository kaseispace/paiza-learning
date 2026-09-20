<script setup lang="ts">
type Event = {
  type: number
  time: number
}

const lines = [
  '3',
  '2 500',
  '1 100',
  '1 200',
  '2 300',
  '1 600',
  '2 400',
]
const n = Number(lines[0])
const events: Event[] = []

for (let i = 0; i < 2 * n; i++) {
  const [type, time] = lines[i + 1].split(' ').map(Number)

  events.push({ type, time })
}

events.sort((first, second) => {
  if (first.time !== second.time) {
    return first.time - second.time
  }

  return first.type - second.type
})

const MOD = 1000000007

let arrived = 0
let shipped = 0
let answer = 1

for (const event of events) {
  if (event.type === 1) {
    arrived++
  }
  else {
    const choices = arrived - shipped

    if (choices <= 0) {
      answer = 0
      break
    }

    answer = (answer * choices) % MOD
    shipped++
  }
}

console.log(answer)
</script>
