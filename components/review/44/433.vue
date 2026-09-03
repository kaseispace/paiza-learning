<script setup lang="ts">
const lines = ['abcbada']
const S = lines[0]
const n = S.length

let answer = 0

const d1: number[] = Array<number>(n).fill(0)
let left = 0
let right = -1

for (let i = 0; i < n; i++) {
  let radius = i > right ? 1 : Math.min(d1[left + right - i], right - i + 1)

  while (i - radius >= 0 && i + radius < n && S[i - radius] === S[i + radius]) {
    radius++
  }

  d1[i] = radius
  answer += radius

  radius--

  if (i + radius > right) {
    left = i - radius
    right = i + radius
  }
}

const d2: number[] = Array<number>(n).fill(0)
left = 0
right = -1

for (let i = 0; i < n; i++) {
  let radius = i > right ? 0 : Math.min(d2[left + right - i + 1], right - i + 1)

  while (i - radius - 1 >= 0 && i + radius < n && S[i - radius - 1] === S[i + radius]) {
    radius++
  }

  d2[i] = radius
  answer += radius

  radius--

  if (i + radius > right) {
    left = i - radius - 1
    right = i + radius
  }
}

console.log(answer)
</script>
