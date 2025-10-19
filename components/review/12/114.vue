<script setup lang="ts">
const lines = ['28446 39582']
const [N, A] = lines[0].split(' ').map(Number)
const targetRemainder = A % N

for (let i = 1; i <= 100000; i++) {
  if (i % N === targetRemainder) {
    console.log(i)
  }
}
</script>
