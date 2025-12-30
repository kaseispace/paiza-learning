<script setup lang="ts">
const lines = [
  '6',
  'ahoxx hogexx zzho geho hogexx ho',

]
const S = lines[1].split(' ').join('')
let count = 0

const target = 'hoge'
let tIndex = 0

for (let i = 0; i < S.length; i++) {
  if (S[i] === target[tIndex]) {
    tIndex++

    if (tIndex === target.length) {
      count++
      tIndex = 0
    }
  }
}

console.log(count)
</script>
