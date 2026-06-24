<script setup lang="ts">
const lines = [
  '4',
  '0 0',
  '2 2',
  '-1 1',
  '0 -2',
]
const n = Number(lines[0])
const city: number[][] = []

for (let i = 0; i < n; i++) {
  city.push(lines[i + 1].split(' ').map(Number))
}

const dist = (i: number, j: number) => {
  const dx = city[i][0] - city[j][0]
  const dy = city[i][1] - city[j][1]

  return Math.sqrt(dx * dx + dy * dy)
}

let best = Infinity
let bestRoute: number[] = []

const permute = (arr: number[], used: boolean[]) => {
  if (arr.length === n) {
    let sum = 0

    for (let i = 0; i < n; i++) {
      const a = arr[i]
      const b = arr[(i + 1) % n]

      sum += dist(a, b)
    }

    if (sum < best) {
      best = sum
      bestRoute = [...arr]
    }

    return
  }

  for (let i = 0; i < n; i++) {
    if (used[i]) continue

    used[i] = true
    arr.push(i)

    permute(arr, used)

    arr.pop()
    used[i] = false
  }
}

permute([], Array(n).fill(false))

console.log(best)

console.log(bestRoute.map(v => v + 1).join(' '))
</script>
