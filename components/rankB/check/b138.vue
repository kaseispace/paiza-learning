<script setup lang="ts">
const lines = [
    '5 5',
    '####.',
    '#.###',
    '###.#',
    '#.###',
    '###.#'
];
const [h, w] = lines[0].split(' ').map(Number);
const a = Array.from({length: h}, (_, i) => lines[i + 1].split(''));
const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0,1],
    [1, -1], [1, 0], [1, 1]
];
let count = 0;

for(let i = 1; i < h - 1; i++) {
    const low = a[i];
    
    for(let j = 1; j < w - 1; j++) {
        if(low[j] === '.') {
            let isDonut = true;
            for(const [x, y] of directions) {
                if(a[i + x][j + y] !== '#') {
                    isDonut = false;
                    break;
                }
            }
            
            if(isDonut) count++;
        }
    }
}

console.log(count);
</script>