<script setup>
const m = Number(lines[0]);
const n = Number(lines[m + 1]);
const A = new Set(lines.slice(1, m + 1).map(Number));
const B = new Set(lines.slice(m + 2).map(Number));
let check = true;

for(let i = 1; i <= 31; i++) {
    if(A.has(i) && B.has(i)) {
        console.log(check ? 'A' : 'B');
        check = !check;
    } else if(A.has(i)) {
        console.log('A');
        
    } else if(B.has(i)) {
        console.log('B');
    } else {
        console.log('x');
    }
}
</script>