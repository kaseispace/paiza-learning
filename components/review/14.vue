<script setup>
const [h, w] = lines[0].split(' ').map(Number);
const grid = [];
const [y, x] = lines[h + 1].split(' ').map(Number);

for(let i = 1; i <= h; i++) {
    const col = lines[i].split('');
    grid.push([...col]);
}

const toggle = (y, x) => {
    if(y >= 0 && y < h && x >= 0 && x < w) {
        grid[y][x] = grid[y][x] === '#' ? '.' : '#';
    }
};

toggle(y, x);

for(let i = 1; i < h; i++) {
    toggle(y + i, x);
    toggle(y - i, x);
}

for(let i = 1; i < w; i++) {
    toggle(y, x + i);
    toggle(y, x - i);
}

for(let i = 1; i < Math.max(h, w); i++) {
    toggle(y - i, x + i);
    toggle(y + i, x + i);
    toggle(y - i, x - i);
    toggle(y + i, x - i);
}

grid.forEach(col => console.log(col.join('')));
</script>

