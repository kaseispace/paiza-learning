<script setup lang="ts">
const lines = [
  '3',
  'abc',
  'zcc',
]
const n = Number(lines[0])
const s = lines[1]
const t = lines[2]

let correctX = null
let fixedResult = null

for (let x = 0; x < 26; x++) {
  let match = 0
  let mismatchIndex = -1

  for (let i = 0; i < n; i++) {
    const expected = String.fromCharCode((s.charCodeAt(i) - 97 + x) % 26 + 97)
    if (expected === t[i]) {
      match++
    }
    else if (mismatchIndex === -1) mismatchIndex = i
    else mismatchIndex = -2
  }

  if (match === n) {
    correctX = x
    break
  }

  if (match === n - 1 && mismatchIndex >= 0) {
    const arr = t.split('')
    arr[mismatchIndex] = String.fromCharCode(
      (s.charCodeAt(mismatchIndex) - 97 + x) % 26 + 97)
    fixedResult = arr.join('')
  }
}

if (correctX !== null) {
  console.log(`correct rot-${correctX}`)
}
else if (fixedResult !== null) {
  console.log(`fixed ${fixedResult}`)
}
else {
  console.log('incorrect')
}
</script>
