<script setup lang="ts">
const lines = [
    '3 3 1',
    '1 2 3',
    '4 5 6',
    '7 8 9',
    '2 2 3 1'
];
const[H, W, N] = lines[0].split(' ').map(Number);
const a = Array.from({length: H}, (_, i) => lines[i + 1].split(' ').map(Number));
const s = Array.from({length: H + 1}, () => Array(W + 1).fill(0));

// 累積和
for(let i = 1; i <= H; i++) {
    const A = a[i - 1];
    
    for(let j = 1; j <= W; j++) {
        s[i][j] = A[j - 1] + s[i][j - 1] + s[i - 1][j] - s[i - 1][j - 1];
    }
}

// ドーナツ
for(let i = H + 1; i <= H + N; i++) {
    const [y, x, B, S] = lines[i].split(' ').map(Number);
    const o_move = Math.ceil(B / 2);
    const i_move = Math.floor(S / 2);
    
    const o_y = y - o_move;
    const o_x = x - o_move;
    
    const i_y = y - i_move - 1;
    const i_x = x - i_move - 1;
    
    const outside = s[o_y + B][o_x + B] - s[o_y + B][o_x] -s[o_y][o_x + B] + s[o_y][o_x];
    const inside = s[i_y + S][i_x + S] - s[i_y + S][i_x] - s[i_y][i_x + S] + s[i_y][i_x];
    
    console.log(outside - inside);
}
</script>