import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

let init:string = input[0];
let maked:string = input[0];
let sumStr:string = "";
let sum:number = 0;
let count:number = 0;

if(Number(maked)<10){
    maked = "0" + maked;
}
if(Number(init)<10){
    init = "0" + init;
}

// 처리
while(1){
    count += 1;
    let eachNum = maked.split('').map(x=>Number(x));
    sum = eachNum[0] + eachNum[1];

    if(sum<10){
        sumStr = "0" + sum;
    }else{
        sumStr = String(sum);
    }

    maked = maked[1] + sumStr[1];
    if(maked==init){
        break;
    }
}

// 출력
console.log(count);