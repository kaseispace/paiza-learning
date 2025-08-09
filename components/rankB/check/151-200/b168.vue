<script setup lang="ts">
const lines = [
  '4972',
  '8392',
  '2606',
]
const nums = lines.map(line => line.split('').map(Number))
const ops = [
  ['+', '+', '+'],
  ['+', '+', '-'],
  ['+', '-', '+'],
  ['+', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '+'],
  ['-', '+', '-'],
  ['-', '+', '+'],
]

const generateResults = (digits: number[]): Set<number> => {
  const result = new Set<number>()
  for (const [op1, op2, op3] of ops) {
    const expr = `${digits[0]}${op1}${digits[1]}${op2}${digits[2]}${op3}${digits[3]}`
    result.add(eval(expr))
  }

  return result
}

const sets: Set<number>[] = nums.map(generateResults)
const common = [...sets[0]].filter(x => sets[1].has(x) && sets[2].has(x)).sort((a, b) => a - b)

if (common.length > 0) {
  console.log('YES')
  console.log(common.join(' '))
}
else {
  console.log('NO')
}
</script>
