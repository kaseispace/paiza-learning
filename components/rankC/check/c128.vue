<script lang="ts">
const lines = [
    "3",
    "2",
    "3",
    "4"
]
const n = Number(lines[0]);
const s = lines.slice(1).map(Number);
let numerator = 1;
let denominator = s[n - 1];

for (let i = n - 2; i >= 0; i--) {
    [numerator, denominator] = [denominator, s[i] * denominator + numerator];
}

console.log(denominator, numerator);
</script>