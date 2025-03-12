<script setup lang="ts">
const lines = [
    '3 3',
    '0',
    '1',
    '2',
    '1 1 2 2',
    '2 2 3 3',
    '3 3 3 3'
];
const [n, k] = lines[0].split(' ').map(Number);
const s = [0];
const foul = n / 3;

for(let i = 1; i <= n; i++) {
    s.push(s[i - 1] + Number(lines[i]));
}

for(let i = n + 1; i <= n + k; i++) {
    const [A_l, A_r, B_l, B_r] = lines[i].split(' ').map(Number);
    
    const pageA = A_r - A_l + 1;
    const pageB = B_r - B_l + 1;
    
    if(pageA >= foul && pageB >= foul) {
        console.log('DRAW');
    }else if(pageA >= foul) {
        console.log('B');
    }else if(pageB >= foul) {
        console.log('A');
    }else{
        const sumA = s[A_r] - s[A_l - 1];
        const sumB = s[B_r] - s[B_l - 1];
        
        console.log(sumA === sumB ? 'DRAW' : sumA > sumB ? 'A' : 'B');
    }
}
</script>