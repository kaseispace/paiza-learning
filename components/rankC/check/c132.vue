<script setup lang="ts">
const lines = [
    '5',
    '3'
]
const n = Number(lines[0]);
const m = Number(lines[1]);

const gcd = (a: number, b: number) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

const canCleanAllRooms = (N: number, M: number) => {
    return gcd(N, M) === 1 ? 'yes' : 'no';
};

console.log(canCleanAllRooms(n, m));
</script>