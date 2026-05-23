<script setup lang="ts">
type Token = { value: string, type: 'number' | 'operator' }

const lines = ['1+2+3']
const S = lines[0]
const tokens: Token[] = []
let i = 0
const n = S.length

while (i < n) {
  const ch = S[i]

  if (ch >= '0' && ch <= '9') {
    let j = i
    while (j < n && S[j] >= '0' && S[j] <= '9') j++
    tokens.push({ value: S.slice(i, j), type: 'number' })
    i = j
    continue
  }

  if (ch === '+') {
    tokens.push({ value: '+', type: 'operator' })
    i++
    continue
  }

  i++
}

console.log(tokens.length)
for (const t of tokens) {
  console.log(`${t.value} ${t.type}`)
}
</script>
