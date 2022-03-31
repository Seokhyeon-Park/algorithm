// A + nB < Cn (BREAK-EVEN POINT)
import fs from 'fs';   // 파일시스템
// const fs = require('fs');

// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

const maxVal:number = 2100000000;
const valA:number = Number(input[0]);
const valB:number = Number(input[1]);
const valC:number = Number(input[2]);
let chk:number = 0;

for(let ind = 1; ind < maxVal; ind++){
    if(valA + (valB * ind) <= valC * ind){
        console.log(ind + 1);
        chk = 0;
        break;
    }else{
        chk = 1;
    }
}

if(chk == 1){
    console.log("-1");
}