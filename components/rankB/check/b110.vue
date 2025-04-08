<script setup lang="ts">
const lines = [
    '2 3',
    '0 255 255',
    '0 255 255',
    '0 0 0',
    '255 255 255'
];
const [H, W] = lines[0].split(' ').map(Number);
const picture_1: number[][] = [];
const picture_2: number[][] = [];

for(let i = 1; i <= H; i++) {
    const row = lines[i].split(' ').map(Number);
    const expandedRow = row.flatMap(value => [value, value]);
    
    picture_1.push([...expandedRow]);
    picture_1.push([...expandedRow]);
}

for(let i = H + 1; i <= H + H; i++) {
    const row = lines[i].split(' ').map(Number);
    const expandedRow = row.flatMap(value => [value, value]);
    
    picture_2.push([...expandedRow]);
    picture_2.push([...expandedRow]);
}

picture_1.shift();
picture_1.forEach(row => row.shift());

const result = picture_1.map((row, i) => {
    return row.map((val, j) => Math.floor((val + picture_2[i][j]) / 2));
});

result.forEach(row => {
    console.log(row.join(' '));
});
</script>