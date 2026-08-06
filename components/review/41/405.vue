<script setup lang="ts">
const lines = [
  'a=1;b=a;c=b;a=21;',
  '4',
  '1 4 a',
  '1 8 b',
  '1 12 c',
  '1 17 a',

]
const s = lines[0]
const q = Number(lines[1])
const ans: number[] = []

for (let i = 0; i < q; i++) {
  const [l, r, x] = lines[i + 2].split(' ')

  const program = s.slice(Number(l) - 1, Number(r))
  const vars: Record<string, number> = {}

  let p = 0
  while (p < program.length) {
    const left = program[p]
    p += 2

    let value

    if (program[p] >= 'a' && program[p] <= 'z') {
      value = vars[program[p]] ?? 0
      p++
    }
    else {
      let num = 0
      while (p < program.length && program[p] >= '0' && program[p] <= '9') {
        num = num * 10 + Number(program[p])
        p++
      }

      value = num
    }

    vars[left] = value
    p++
  }

  ans.push(vars[x] ?? 0)
}

console.log(ans.join('\n'))
</script>
