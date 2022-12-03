const utils = require('./utils.js');

// task1
let mat1=[[3,2,1,6], [2,11,12,4]];
let mat2=[[2, 2, 4],[3, 5, 1],[7, 1, 2],[8, 8, 8]];
console.log(utils.matrixProduct(mat1, mat2));

//task2
let matx1=[[22,2,20], [1,19,19]];
let matx2=[[1,4,6], [3,6,10]];
console.log(utils.sumOfMatrices(matx1, matx2));

//task3
let mat=[[4,5,7,0],[2,4,3,9],[4,8,10,7]];
console.log(utils.sumOfEachRow(mat));

//task4
let text=' HElooo My   name is  Arshak   ';
console.log(utils.countWords(text));

//task5
let text1='   This text is trimmed   ';
console.log(utils.trim(text1));
console.log(utils.trim(text1).length)
