<script setup lang="ts">
const lines = ['123456'];
const N = lines[0];
const grid: {[key: string] : string[]} = {};

// グリッドの作成
for(let i = 0; i <= 9; i++) {
    const digit: string[][] = Array.from({length: 3}, () => Array(3).fill('.'));
    
    for(let j = 0; j < i; j++) {
        const row = Math.floor(j / 3);
        const col = j % 3;
        digit[row][col] = '#';
    }

    const flattenedDigit = digit.map(row => row.join(''));
    
    grid[i] = flattenedDigit;
}

// 入力値を3桁ずつ処理
for(let i = 0; i < N.length; i += 3) {
    const chunk = N.slice(i, i + 3);
    const rows = Array(3).fill('');
    
    for(const digit of chunk) {
        const g = grid[digit];
        
        rows[0] += g[0];
        rows[1] += g[1];
        rows[2] += g[2];
    }
    
    rows.forEach(row => console.log(row));
}
</script>