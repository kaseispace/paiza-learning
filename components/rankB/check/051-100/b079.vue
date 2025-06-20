<script setup lang="ts">
const lines = ['alice bob']
const [s, t] = lines[0].split(' ')

const toNumber = (name: string) => {
  return [...name].map(ch => ch.charCodeAt(0) - 96)
}

const transform = (arr: number[]) => {
  while (arr.length > 1) {
    const next: number[] = []
    for (let i = 0; i < arr.length - 1; i++) {
      const sum = arr[i] + arr[i + 1]
      next.push(sum >= 101 ? sum - 101 : sum)
    }

    arr = next
  }

  return arr[0]
}

const a = transform(toNumber(s + t))
const b = transform(toNumber(t + s))

console.log(Math.max(a, b))
</script>
