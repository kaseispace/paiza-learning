<script setup lang="ts">
const lines = [
  '100 2',
  '21 17 10',
  '22 17 20',
]
const [X, N] = lines[0].split(' ').map(Number)
let chips = X

for (let i = 1; i <= N; i++) {
  const [K, L, M] = lines[i].split(' ').map(Number)
  let result = 0

  if (K >= 22) {
    result = -1
  }
  else if (L >= 22) {
    result = 1
  }
  else if (K > L) {
    result = 1
  }
  else if (K < L) {
    result = -1
  }
  else {
    result = 0
  }

  if (result === 1) chips += M
  else if (result === -1) chips -= M

  console.log(chips)
}
</script>
