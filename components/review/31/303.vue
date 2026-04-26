<script setup lang="ts">
const lines = [
  '5',
  'hoge',
  'abcdefghij',
  'zzxxyy',
  'abcd',
]
const a = Number(lines[0])
console.log(a > 0 ? 'plus' : a)

const b = lines[1]
console.log(b === 'hoge' ? 'yes' : b)

const c = lines[2]
console.log(c.length === 10 ? 'ten' : c)

const d = lines[3]
const pos = d.indexOf('x')
console.log(pos !== -1 ? pos : 'nothing')

const e = lines[4]
console.log(e.length === 5 ? 'five' : e[0])
</script>
