<script setup lang="ts">
const lines = ['2 5 7']
const [a, b, m]: number[] = lines[0].split(' ').map(Number)

let A: number = a
let B: number = b
const M: number = m

let ans = 1 % M
A %= M

while (B > 0) {
  if (B & 1) {
    ans = (ans * A) % M
  }

  A = (A * A) % M
  B >>= 1
}

console.log(ans)
</script>
