<script setup lang="ts">
const lines = ['1']
const N = Number(lines[0])
let s = '0'

for (let i = 2; i <= N; i++) {
  const rev = s.split('').reverse()
  const inv = rev.map(c => (c === '0' ? '1' : '0')).join('')
  s = s + '0' + inv
}

console.log(s)
</script>
