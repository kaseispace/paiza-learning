<script setup lang="ts">
const lines = [
  '2',
  '1 1',
  '1 2',
  '2 3',
  '2 4',
]
const n = Number(lines[0])
const arrivals: number[] = []
const shipments: number[] = []

for (let i = 0; i < 2 * n; i++) {
  const [type, time] = lines[i + 1].split(' ').map(Number)

  if (type === 1) {
    arrivals.push(time)
  }
  else {
    shipments.push(time)
  }
}

arrivals.sort((a, b) => a - b)
shipments.sort((a, b) => a - b)

let answer = 0

for (let i = 0; i < n; i++) {
  answer += Math.max(0, shipments[i] - arrivals[i])
}

console.log(answer)
</script>
