<script setup lang="ts">
type Prime = number
type Value = number

const lines = ['2 3 5 7']
const [P1, P2, P3, k]: [Prime, Prime, Prime, number] = lines[0].split(' ').map(Number) as [Prime, Prime, Prime, number]

class MinHeap {
  private h: Value[] = []

  push(x: Value): void {
    const h = this.h
    h.push(x)
    let i = h.length - 1

    while (i > 0) {
      const p = (i - 1) >> 1

      if (h[p] <= h[i]) break;

      [h[p], h[i]] = [h[i], h[p]]
      i = p
    }
  }

  pop(): Value {
    const h = this.h

    if (h.length === 1) return h.pop() as Value

    const top = h[0]
    h[0] = h.pop() as Value
    let i = 0

    while (true) {
      const l = i * 2 + 1
      const r = i * 2 + 2
      let smallest = i

      if (l < h.length && h[l] < h[smallest]) smallest = l
      if (r < h.length && h[r] < h[smallest]) smallest = r

      if (smallest === i) break;

      [h[i], h[smallest]] = [h[smallest], h[i]]
      i = smallest
    }

    return top
  }

  size(): number {
    return this.h.length
  }
}

const heap: MinHeap = new MinHeap()
const visited: Set<Value> = new Set<Value>()

heap.push(1)
visited.add(1)

let val: Value = 1

for (let i = 0; i < k; i++) {
  val = heap.pop()

  for (const p of [P1, P2, P3] as Prime[]) {
    const nxt: Value = val * p

    if (!visited.has(nxt)) {
      visited.add(nxt)
      heap.push(nxt)
    }
  }
}

console.log(val)
</script>
