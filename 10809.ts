import fs from 'fs';   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split("");
// const input = fs.readFileSync('./input.txt').toString().trim().split("");
let stringArr = new Array(26).fill(0);
let result:string = "";

// 97
for(let ind in stringArr){
    for(let strInd in input){
        if(String.fromCharCode(Number(ind) + 97) == input[strInd]){
            stringArr[ind] = strInd;
            break;
        }else{
            stringArr[ind] = -1;
        }
    }
}

for(let str of stringArr){
    result = result + str + " ";
}

console.log(result);