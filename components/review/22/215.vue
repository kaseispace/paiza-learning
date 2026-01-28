<script setup lang="ts">
const lines = [
  '10 10',
  '##########',
  '..........',
  '##########',
  '##########',
  '..........',
  '#.#.#.#.#.',
  '.#.#.#.#.#',
  '#.#.#.#.#.',
  '.#.#.#.#.#',
  '..........',
]
const [H, W] = lines[0].split(' ').map(Number)
const S = lines.slice(1)

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    let ok = true

    if (y > 0 && S[y - 1][x] !== '#') ok = false

    if (y < H - 1 && S[y + 1][x] !== '#') ok = false

    if (x > 0 && S[y][x - 1] !== '#') ok = false

    if (x < W - 1 && S[y][x + 1] !== '#') ok = false

    if (ok) {
      console.log(y, x)
    }
  }
}
</script>
