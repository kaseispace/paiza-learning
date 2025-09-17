<script setup lang="ts">
const lines = [
  '3 2',
  '8 6 4',
]
const [, k] = lines[0].split(' ').map(Number)
let a = lines[1].split(' ').map(Number)

if (a.length === 1) {
  console.log(`${a[0]} 1`)
}
else {
  for (let i = 0; i < k; i++) {
    const b: number[] = []
    let W = a[0], count = 1
    for (let j = 1; j < a.length; j++) {
      if (a[j] === W) {
        count++
      }
      else {
        b.push(W, count)
        W = a[j]
        count = 1
      }
    }
    b.push(W, count)
    a = b
  }
  console.log(a.join(' '))
}
</script>
