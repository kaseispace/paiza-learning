<script setup>
const N = Number(lines[0]);
const points = [];
let bestOutliers = Array.from({length: N}, (_, i) => i + 1);

for(let i = 1; i <= N; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    points.push([x, y]);
}

for(let i = 0; i < N; i++) {
    // 1つ目の座標
    const [x1, y1] = points[i];
    
    for(let j = i + 1; j < N; j++) {
        // 2つ目の座標
        const [x2, y2] = points[j];
        const outliers = [];
        
        const a = y2 - y1;
        const b = -(x2 - x1);
        const c = (x2 - x1) * y1 - (y2 - y1) * x1; 
        
        for(let k = 0; k < N; k++) {
            if(k !== i && k !== j) {
                // チェックの対象となる座標
                const [x3, y3] = points[k];
                const distance = Math.abs(a * x3 + b * y3 + c) / Math.sqrt((a * a) + (b * b));
                
                // 部外者の場合
                if(distance > 2) {
                    outliers.push(k + 1);
                }
            }
        }
        
        if(bestOutliers.length > outliers.length) {
            bestOutliers = [];
            bestOutliers.push(...outliers);
        }
    }
}

if(bestOutliers.length !== 0) {
    bestOutliers.forEach(num => console.log(num));
}else{
    console.log('none');
}
</script>