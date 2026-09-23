<script setup lang="ts">
const lines = [
  '5 10',
  '10000 1 0',
  '100 8 1',
  '1 1 1',
  '1000 1 3',
  '10 8 4',

]
const [n, k] = lines[0].split(' ').map(Number)
const score: number[] = Array(n + 1).fill(0)
const length: number[] = Array(n + 1).fill(0)
const children: number[][] = Array.from({ length: n + 1 }, () => [])

for (let i = 1; i <= n; i++) {
  const [a, b, parent] = lines[i].split(' ').map(Number)

  score[i] = a
  length[i] = b
  children[parent].push(i)
}

const order: number[] = []
const subtreeEnd: number[] = Array(n + 1).fill(0)

const stack = [[0, 0]]

while (stack.length > 0) {
  const [node, state] = stack.pop()!

  if (state === 0) {
    order.push(node)

    stack.push([node, 1])

    for (let i = children[node].length - 1; i >= 0; i--) {
      stack.push([children[node][i], 0])
    }
  }
  else {
    subtreeEnd[node] = order.length
  }
}

const orderLength = order.length
const width = k + 1

const dp = new Float64Array((orderLength + 1) * width)
dp.fill(-1)

dp[0] = 0

for (let position = 0; position < orderLength; position++) {
  const node = order[position]

  for (let usedLength = 0; usedLength <= k; usedLength++) {
    const currentScore = dp[position * width + usedLength]

    if (currentScore < 0) {
      continue
    }

    const skipIndex = subtreeEnd[node] * width + usedLength
    dp[skipIndex] = Math.max(dp[skipIndex], currentScore)

    if (usedLength + length[node] <= k) {
      const nextIndex = (position + 1) * width + usedLength + length[node]
      dp[nextIndex] = Math.max(dp[nextIndex], currentScore + score[node])
    }
  }
}

let answer = 0

for (let usedLength = 0; usedLength <= k; usedLength++) {
  answer = Math.max(answer, dp[orderLength * width + usedLength])
}

console.log(answer)
</script>
