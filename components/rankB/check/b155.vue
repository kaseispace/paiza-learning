<script setup lang="ts">
const lines = [
    '2 3 2',
    'abc',
    'def',
    'ghi',
    'jkl',
    '3 3',
    '1 2 1',
    '2 1 2',
    '1 2 1'
];
const [H, W, N] = lines[0].split(' ').map(Number);
const result = [];
const [R, C] = lines[H * N + 1].split(' ').map(Number);
const stamps = [];

for(let i = 1; i <= H * N; i += H) {
    result.push(lines.slice(i, i + H));
}

for(let i = H * N + 2; i < H * N + 2 + R; i++) {
    const B = lines[i].split(' ').map(Number);
    const r = [];
    
    for(let j = 0; j < B.length; j++) {
        r.push(result[B[j] - 1]);
    }
    
    stamps.push(r);
}

stamps.forEach(row => {
    for(let i = 0; i < H; i++) {
        const r_row = [];
        for(let j = 0; j < row.length; j++) {
            r_row.push(row[j][i]);
        }
        
        console.log(r_row.join(''));
    }
});
</script>