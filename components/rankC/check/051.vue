<script lang="ts">
const lines = ['2 9 3 8'];
const cards = lines[0].split(' ').map(Number).sort((a, b) => b - a);

const sum1 = Number(cards[0].toString() + cards[1].toString()) + Number(cards[2].toString() + cards[3].toString());
const sum2 = Number(cards[0].toString() + cards[2].toString()) + Number(cards[1].toString() + cards[3].toString());
const sum3 = Number(cards[0].toString() + cards[3].toString()) + Number(cards[1].toString() + cards[2].toString());

console.log(Math.max(sum1, sum2,sum3));
</script>