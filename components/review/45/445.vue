<script setup lang="ts">
const lines = [
  '4 2',
  'apple 925315561',
  'banana 988302243',
  'chocolate 635314873',
  'donut 459428080',
  'eggplant eggplant',
  'fudge apple',
]
const [N, M] = lines[0].split(' ').map(Number)
const BASE = 100000007n
const MOD = 1000000007n
const database: Map<string, string> = new Map()

for (let i = 0; i < N; i++) {
  const [account, hashValue] = lines[i + 1].split(' ')

  database.set(account, hashValue)
}

function hashPassword(password: string) {
  let hash = 0n
  let power = BASE

  for (const character of password) {
    const code = BigInt(character.charCodeAt(0))

    hash = (hash + code * power) % MOD
    power = (power * BASE) % MOD
  }

  return hash.toString()
}

const answers: string[] = []

for (let i = 0; i < M; i++) {
  const [account, password] = lines[N + 1 + i].split(' ')

  const savedHash = database.get(account)
  const inputHash = hashPassword(password)

  if (savedHash === inputHash) {
    answers.push('Yes')
  }
  else {
    answers.push('No')
  }
}

console.log(answers.join('\n'))
</script>
