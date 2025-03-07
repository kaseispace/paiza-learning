<script setup lang="ts">
const lines = [
    '4',
    'supaisu 5',
    'imo 2',
    'niku 2',
    'mizu 3',
    '6',
    'mizu 7',
    'imo 4',
    'ninjin 10',
    'unagi 6',
    'supaisu 20',
    'niku 5'
]
const n = Number(lines[0]);
const A = new Map();
const recipe = [];
const m = Number(lines[n + 1]);
const C = new Map();
let count = 0;

for(let i = 1; i <= n; i++) {
    const [a, b] = lines[i].split(' ');
    A.set(a, Number(b));
    recipe.push(a);
}


for(let i = n + 2; i <= m + n + 1; i++) {
    const [c, d] = lines[i].split(' ');
    C.set(c, Number(d));
}

while(true) {
    for(const r of recipe) {
        if(A.get(r) > C.get(r) || !C.has(r)) {
            console.log(count);
            return;
        }
    }
    
    for(const r of recipe) {
        C.set(r, C.get(r) - A.get(r));
    }
    
    count++;
}
</script>