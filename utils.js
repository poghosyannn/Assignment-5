//task#1

function matrixProduct(mat1, mat2){
    let result = [];
    for(row=0; row<mat1.length; row++){
        result[row]=[];
        for(column=0; column<mat2[0].length; column++){
            let value=0
            for(n=0; n<mat1[row].length; n++){
                value+=mat1[row][n]*mat2[n][column];
            }
        result[row][column]=value;      
        }
    }
    return result;
}


//task#2

function sumOfMatrices(mat1, mat2){
    let result = [];
    for(row=0; row<mat1.length; row++){
        result[row]=[];
        for(n=0; n<mat1[row].length; n++){
            result[row].push(mat1[row][n] + mat2[row][n]);
            }  
        }
    return result;
} 


//task#3

function sumOfArray(arr){
    sum = 0;
    for(n=0; n<arr.length; n++){
        sum+=arr[n];
    }
    return sum
}

function sumOfEachRow(mat){
    let result = [];
    for(row=0; row<mat.length; row++){
        result.push(sumOfArray(mat[row]));
    }
    return result;
}


//task#4

function countWords(text){
    let count = 0;
    for(i=0; i<text.length; i++){
        if(text[i]!=' '){
            while(text[i] != 0){
                i++;
            }
            count+=1;
        }
    }
    return count;
}


//task#5

function trim(text){
    let neww='';
    let i=0;
    while(text[i]===' '){
        i++;
    }
    let n=text.length-1;
    while(text[n]===' '){
        n--;
    }
    for(i; i<=n; i++){
        neww+=text[i];
    }
    return neww;
}


module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow,
    countWords,
    trim
}
