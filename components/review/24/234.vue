<script setup lang="ts">
type Job = {
  s: number
  t: number
}

const lines = [
  '4',
  '10 30',
  '20 40',
  '50 70',
  '60 80',
]
const n = Number(lines[0].trim())
const jobs: Job[] = []

for (let i = 1; i <= n; i++) {
  const [s, t] = lines[i].split(' ').map(Number)
  jobs.push({ s, t })
}

jobs.sort((a, b) => a.t - b.t)

let count = 0
let current = -1

for (const job of jobs) {
  if (job.s >= current) {
    count++
    current = job.t
  }
}

console.log(count)
</script>
