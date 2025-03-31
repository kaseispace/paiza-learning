<script setup lang="ts">
const s = 'paizaで学び、paizaで成長する';
const pattern = /paiza/;
const match = pattern.exec(s);
console.log(match?.index);

const s2 = '\(^ _ ^)/ \(^ . ^)/';
const pattern2 = /\\\(\^ \. \^\)\//;
const match2 = pattern2.exec(s2);
console.log(match2?.index);

const s3 = 'Math1A is a valid pattern, while Math4D is not.';
const pattern3 = /Math[123][ABC]/;
const match3 = pattern3.exec(s3);
console.log(match3?.index);

const s4 = 'database_abc.db';
const pattern4 = /database_.{0,5}\.db/;
const match4 = pattern4.exec(s4);
console.log(match4?.index);

const s5 = 'Here are some files: image1.jpg, document.pdf, image2.png.';
const pattern5 = /\S+(\.jpg|\.png)/;
const match5 = pattern5.exec(s5);
console.log(match5?.index);
</script>