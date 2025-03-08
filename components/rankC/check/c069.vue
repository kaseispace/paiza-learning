<script setup lang="ts">
const lines = [
    '2000 12 10',
    '1 10'
]
let [y, m, d] = lines[0].split(' ').map(Number);
const [a, b] = lines[1].split(' ').map(Number);
let sum = 0;

let nextYear = y + ((4 - y % 4) % 4) + 1;

const daysInMonth = (month: number) => {
    return month % 2 === 0 ? 15 : 13;
};

if(nextYear === y) {
    for(let i = m + 1; i < a; i++) {
        sum += daysInMonth(i);
    }
    
    sum += daysInMonth(m) - d;
    sum += b;
}else{
    for(let i = m + 1; i <= 13; i++) {
        sum += daysInMonth(i);
    }
    
    sum += daysInMonth(m) - d;
    
    sum += 181 * (nextYear - y - 1);
    
    for(let i = 1; i < a; i++) {
        sum += daysInMonth(i);
    }
    
    sum += b;
}

console.log(sum);
</script>