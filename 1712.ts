// A + nB < Cn (BREAK-EVEN POINT)
// import fs from 'fs';   // 파일시스템
const fs = require('fs');

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
// const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

const valA:number = Number(input[0]);
const valB:number = Number(input[1]);
const valC:number = Number(input[2]);

if(valC <= valB){
    console.log("-1");
}else{
    console.log(Math.floor((valA/(valC-valB)))+1);
}