<script setup lang="ts">
const input = [
  "3 4",
  "eraser 50",
  "pencil 30",
  "book 100",
  "book",
  "eraser",
  "pencil",
  "margaret"
];

// shiftの動作は、元の配列から最初の要素が取り除かれ、残りの要素だけが残る、戻り値として配列から削除された値が返される
const [N, M] = input.shift().split(" ").map(Number);
const products = {};
const shoppingList = input.splice(N);

// 商品の名前と価格を格納
for (let i = 0; i < N; i++) {
  const [name, price] = input[i].split(' ');
  products[name] = parseInt(price, 10);
}

console.log(products)

// お買い物リストに基づく価格の出力
const result = shoppingList.map(item => products[item] !== undefined ? products[item] : -1);

console.log(result.join('\n'));

</script>

<template>
    <div></div>
</template>