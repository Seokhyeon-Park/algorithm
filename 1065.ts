import fs from 'fs';   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

const num = Number(input[0]);
let count:number = 0;

if(num < 100){
    count = num;
}else{
    count = 99;
    for(let ind = 100; ind <= num; ind++){
        count = count + arithmeticSeqChk(ind);
    }
}

console.log(count);

function arithmeticSeqChk(n:number):number {
    const splitNum = String(n).split("");
    const n1:number = Number(splitNum[0]) - Number(splitNum[1]);
    const n2:number = Number(splitNum[1]) - Number(splitNum[2]);
    if(n1==n2){
        return 1;
    }else{
        return 0;
    }
}