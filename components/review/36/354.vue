<script setup lang="ts">
const lines = ['a=1;c=b=a;a=21;']
const vars: Map<string, number> = new Map()
const names: Set<string> = new Set()

const isNumber = (str: string) => {
  return /^[0-9]+$/.test(str)
}

const statements = lines[0].split(';')

for (const stmt of statements) {
  if (stmt === '') continue

  const parts = stmt.split('=')

  let val: number
  const last = parts[parts.length - 1]

  if (isNumber(last)) {
    val = Number(last)
  }
  else {
    names.add(last)
    val = vars.get(last) ?? 0
  }

  for (let i = parts.length - 2; i >= 0; i--) {
    const name = parts[i]
    names.add(name)
    vars.set(name, val)
  }
}

const sortedNames = Array.from(names).sort()

const answer: string[] = []
for (const name of sortedNames) {
  answer.push(String(vars.get(name) ?? 0))
}

console.log(answer.join('\n'))
</script>
