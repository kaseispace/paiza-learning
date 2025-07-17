<script setup lang="ts">
const lines = ['BEE CD']
const [S_1, S_2] = lines[0].split(' ')
const digitToChar = ['A', 'B', 'C', 'D', 'E']
const charToDigit = new Map(digitToChar.map((ch, i) => [ch, i]))

const paizaToDecimal = (s: string) => {
  return s.split('').reduce((acc, ch) => acc * 5 + charToDigit.get(ch)!, 0)
}

const decimalToPaiza = (n: number) => {
  if (n === 0) return 'A'
  let result = ''

  while (n > 0) {
    result = digitToChar[n % 5] + result
    n = Math.floor(n / 5)
  }

  return result
}

const sum = paizaToDecimal(S_1) + paizaToDecimal(S_2)
console.log(decimalToPaiza(sum))
</script>
