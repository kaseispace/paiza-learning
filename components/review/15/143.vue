<script setup lang="ts">
const lines = [
  '5',
  'paiza',
  'paaaa',
  'paiza',
  'paisa',
  'zaiza',
  'ab',
]
const S = lines[1]
const words = lines.slice(2)

const L = S.length
const half = Math.floor(L / 2)

for (const V of words) {
  if (V === S) {
    console.log('banned')
    continue
  }
  if (V.length !== L) {
    console.log(V)
    continue
  }

  const arr = V.split('')
  let censored = false

  if (V.slice(0, half + (L % 2)).toString() === S.slice(0, half + (L % 2)).toString()) {
    for (let i = 0; i < half + (L % 2); i++) arr[i] = 'x'
    censored = true
  }

  if (V.slice(half).toString() === S.slice(half).toString()) {
    for (let i = half; i < L; i++) arr[i] = 'x'
    censored = true
  }

  console.log(censored ? arr.join('') : V)
}
</script>
