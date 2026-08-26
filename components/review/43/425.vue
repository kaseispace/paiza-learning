<script setup lang="ts">
const lines = [
  '1 6',
  'R R',
  'push push',
  'push push',
  'push push',
  'push push',
  'push push',
  'push push',

]
const [N, K] = lines[0].split(' ').map(Number)
const paizaQueue: string[] = []
const kyokoQueue: string[] = []

for (let i = 0; i < N; i++) {
  const [paizaHand, kyokoHand] = lines[i + 1].split(' ')

  paizaQueue.push(paizaHand)
  kyokoQueue.push(kyokoHand)
}

let paizaHead = 0
let kyokoHead = 0

let paizaWins = 0
let kyokoWins = 0

function wins(left: string, right: string) {
  return (
    (left === 'R' && right === 'S')
    || (left === 'S' && right === 'P')
    || (left === 'P' && right === 'R')
  )
}

for (let i = 0; i < K; i++) {
  const [paizaChoice, kyokoChoice] = lines[N + 1 + i].split(' ')

  const paizaHand = paizaQueue[paizaHead]
  const kyokoHand = kyokoQueue[kyokoHead]

  paizaHead++
  kyokoHead++

  if (wins(paizaHand, kyokoHand)) {
    paizaWins++
  }
  else if (wins(kyokoHand, paizaHand)) {
    kyokoWins++
  }

  if (paizaChoice === 'push') {
    paizaQueue.push(paizaHand)
  }

  if (kyokoChoice === 'push') {
    kyokoQueue.push(kyokoHand)
  }
}

if (paizaWins > kyokoWins) {
  console.log('paiza')
}
else if (paizaWins < kyokoWins) {
  console.log('kyoko')
}
else {
  console.log('draw')
}
</script>
