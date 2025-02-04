<script setup>
const matrix = [[1,2,3],[4,5,6],[7,8,9],[10, 11, 12], [13, 14, 15]];
const result = [];

while(matrix.length > 0) {
    // matrixの先頭を削除
    result.push(...matrix.shift());        
    


    // matrixの右端を削除
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i].length > 0) {
            result.push(matrix[i].pop());
        }
    }

    // matrixの下を削除
    if(matrix.length > 0) {
        result.push(...matrix.pop().reverse());
    }

    // matrixの左端を削除
    for(let i = matrix.length - 1; i >= 0; i--) {
        if(matrix[i].length > 0) {
            result.push(matrix[i].shift());
        }   
    }
}

console.log(result)
</script>

<template>
    <div/>
 </template>