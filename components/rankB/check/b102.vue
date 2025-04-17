<script setup lang="ts">
const lines = [
    "7 7 2",
    ".......",
    ".#.###.",
    ".####..",
    ".##.##.",
    ".####..",
    ".......",
    "......#",
    "DE"
];
const [H, W, N] = lines[0].split(' ').map(Number);
let s = Array.from({length: H}, (_, i) => lines[i + 1].split(''));
const operations = lines[H + 1].split('');

operations.forEach(operation => {
    let S = s.map(row => [...row]);
    
    for(let i = 0; i < H; i++) {
        const row = s[i];
        for(let j = 0; j < W; j++) {
            if(operation === 'D') {
                if(row[j] === '#') {
                    if(i + 1 < H && j < W) S[i + 1][j] = '#';
                    if(i - 1 < H && i - 1 >= 0 && j < W) S[i - 1][j] = '#';
                    if(i < H && j + 1 < W) S[i][j + 1] = '#';
                    if(i < H && j - 1 < W && j - 1 >= 0) S[i][j - 1] = '#';
                }
            }else{
                if(row[j] === '.') {
                    if(i + 1 < H && j < W) S[i + 1][j] = '.';
                    if(i - 1 < H && i - 1 >= 0 && j < W) S[i - 1][j] = '.';
                    if(i < H && j + 1 < W) S[i][j + 1] = '.';
                    if(i < H && j - 1 < W && j - 1 >= 0) S[i][j - 1] = '.';
                }
            }
        }
    }
    
    s = S;
});

s.forEach(row => console.log(row.join('')));
</script>