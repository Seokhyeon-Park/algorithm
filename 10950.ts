import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

// 값 나누기
const factorT:number = Number(input[0]);

// 출력
for(let ind = 1; ind <= factorT; ind++){
    const lineVal = input[ind].split(" ");
    console.log(Number(lineVal[0])+Number(lineVal[1]));
}