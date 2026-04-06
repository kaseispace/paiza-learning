<script setup lang="ts">
const lines = ['3 4']
const [n, t] = lines[0].split(' ').map(Number)
const pegs: number[][] = [[], [], []]

for (let i = n; i >= 1; i--) {
  pegs[0].push(i)
}

let done = 0

function hanoi(k: number, from: number, to: number, aux: number) {
  if (k === 0 || done >= t) return

  hanoi(k - 1, from, aux, to)
  if (done >= t) return

  const disk = pegs[from].pop()!
  pegs[to].push(disk)
  done++

  if (done >= t) return

  hanoi(k - 1, aux, to, from)
}

hanoi(n, 0, 2, 1)

for (let p = 0; p < 3; p++) {
  if (pegs[p].length === 0) {
    console.log('-')
  }
  else {
    console.log(pegs[p].join(' '))
  }
}
</script>
