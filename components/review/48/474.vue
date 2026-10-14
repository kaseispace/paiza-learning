<script setup lang="ts">
const lines = ['1010']
const n = lines[0]
const MOD = 1000000007

let nMod = 0

for (const character of n) {
  nMod = (nMod * 10 + Number(character)) % MOD
}

let noRepeatCount = 0
let countForLength = 9

for (let length = 1; length < n.length; length++) {
  noRepeatCount = (noRepeatCount + countForLength) % MOD
  countForLength = (countForLength * 9) % MOD
}

let less: number[] = Array(10).fill(0)

let tightValid = true
let tightPrevious = -1

for (let position = 0; position < n.length; position++) {
  const limit = Number(n[position])
  const lowerDigit = position === 0 ? 1 : 0

  const nextLess: number[] = Array(10).fill(0)
  const totalLess = less.reduce((sum, value) => (sum + value) % MOD, 0)

  for (let digit = lowerDigit; digit <= 9; digit++) {
    nextLess[digit] = (totalLess - less[digit] + MOD) % MOD
  }

  if (tightValid) {
    for (let digit = lowerDigit; digit < limit; digit++) {
      if (digit !== tightPrevious) {
        nextLess[digit] = (nextLess[digit] + 1) % MOD
      }
    }
  }

  if (tightValid && limit >= lowerDigit && limit !== tightPrevious) {
    tightPrevious = limit
  }
  else {
    tightValid = false
  }

  less = nextLess
}

let sameLengthNoRepeat = less.reduce((sum, value) => (sum + value) % MOD, 0)

if (tightValid) {
  sameLengthNoRepeat++
}

noRepeatCount = (noRepeatCount + sameLengthNoRepeat) % MOD

const answer = (nMod - noRepeatCount + MOD) % MOD

console.log(answer)
</script>
