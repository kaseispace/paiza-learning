<script setup lang="ts">
const lines = [
  '2',
  'AB',
  'BA',
  'AA',
  'BB',

]
const n = Number(lines[0])

for (let i = 1; i <= n * 2; i += 2) {
  const S = lines[i].split('')
  const T = lines[i + 1].split('')

  const s = S.sort().join('')
  const t = T.sort().join('')

  console.log(s == t ? 'Yes' : 'No')
}

// for (let i = 1; i <= n * 2; i += 2) {
//   const S = lines[i]
//   const T = lines[i + 1].split('')
//   let result = true

//   for (let j = 0; j < S.length; j++) {
//     if (T.includes(S[j])) {
//       const num = T.indexOf(S[j])
//       T.splice(num, 1)
//     }
//     else {
//       result = false
//       break
//     }
//   }

//   console.log(result ? 'Yes' : 'No')
// }
</script>
