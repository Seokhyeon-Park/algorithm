import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

const list = input.map((val) => Number(val));
const max:number = Math.max(...list);
const maxInd:number = list.indexOf(max)+1;

console.log(max + "\n" + maxInd);