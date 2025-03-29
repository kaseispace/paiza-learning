<script setup lang="ts">
const lines = [
    '5 3',
    '80 -50 30',
    '90 50 xxx',
    '120 40 50',
    '40 90 90',
    '50 1 80'
];
const [N, M] = lines[0].split(' ').map(Number);
const data = lines.slice(1).map(line => line.split(' '));
const results: number[] = [];

for (let j = 0; j < M; j++) {
    const validAnswers: number[] = [];

    for (let i = 0; i < N; i++) {
        const value = data[i][j];

        // クレンジング処理: 数値であり、0以上100以下であるかを確認
        if (/^-?\d+$/.test(value)) { // 数字として有効か確認
            const num = Number(value);
            
            if (num >= 0 && num <= 100) {
                validAnswers.push(num);
            }
        }
    }

    if (validAnswers.length > 0) {
        const sum = validAnswers.reduce((acc, cur) => acc + cur, 0);
        results.push(Math.floor(sum / validAnswers.length));
    } else {
        results.push(0);
    }
}

results.forEach(result => console.log(result));
</script>