<script setup lang="ts">
const lines = [
  '1 qwertyuiopasdfghjklzxcvbnm',
  'hqomq gfsoft iqeaqzigf',
]
const [n, T] = lines[0].split(' ')
const S = lines[1]

const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const transformMap: Map<string, string> = new Map()

for (let i = 0; i < 26; i++) {
  transformMap.set(T[i], originalAlphabet[i])
}

let decrypted = S
for (let i = 0; i < Number(n); i++) {
  decrypted = decrypted.split('').map(char => transformMap.get(char) || char).join((''))
}

console.log(decrypted)
</script>
