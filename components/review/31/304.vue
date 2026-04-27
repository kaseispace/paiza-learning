<script setup lang="ts">
const lines = ['5']
const N = Number(lines[0])

if (N === 1 || N === 2) {
  console.log(1)
}
else {
  let a = 1
  let b = 1

  for (let i = 3; i <= N; i++) {
    const c = (a + b) % 10000
    a = b
    b = c
  }

  console.log(b)
}
</script>
