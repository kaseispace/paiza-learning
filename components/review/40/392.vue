<script setup lang="ts">
const lines = [
  '142358',
  '3',
  '195283',
  '167358',
  '142359',
]
const win = Number(lines[0])
const n = Number(lines[1])

const last4 = win % 10000
const last3 = win % 1000

const ans: string[] = []

for (let i = 0; i < n; i++) {
  const x = Number(lines[i + 2])

  if (x === win) {
    ans.push('first')
  }
  else if ((win > 100000 && x === win - 1) || (win < 199999 && x === win + 1)) {
    ans.push('adjacent')
  }
  else if (x % 10000 === last4) {
    ans.push('second')
  }
  else if (x % 1000 === last3) {
    ans.push('third')
  }
  else {
    ans.push('blank')
  }
}

console.log(ans.join('\n'))
</script>
