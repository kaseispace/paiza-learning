<script setup lang="ts">
const lines = [
  '2 4',
  '150 2',
  '200 3',
  'buy 1 2',
  'buy 1 2',
  'bake 0 1',
  'buy 0 2',
]
const [N] = lines[0].split(' ').map(Number)
const breadMoney: Map<number, number> = new Map()
const breadCount: Map<number, number> = new Map()
const actions = lines.slice(N + 1).map(line => line.split(' '))

for (let i = 1; i <= N; i++) {
  const [a, b] = lines[i].split(' ').map(Number)
  breadMoney.set(i, a)
  breadCount.set(i, b)
}

actions.forEach((action) => {
  const [a, ...b] = action
  if (a === 'bake') {
    for (let i = 1; i <= N; i++) {
      const count = Number(b[i - 1])
      breadCount.set(i, breadCount.get(i)! + count)
    }
  }
  else {
    let check = true
    for (let i = 1; i <= N; i++) {
      if (Number(b[i - 1]) > breadCount.get(i)!) {
        check = false
        console.log(-1)
        break
      }
    }

    if (check) {
      let total = 0
      for (let i = 1; i <= N; i++) {
        const count = Number(b[i - 1])
        breadCount.set(i, breadCount.get(i)! - count)
        total += breadMoney.get(i)! * count
      }

      console.log(total)
    }
  }
})
</script>
