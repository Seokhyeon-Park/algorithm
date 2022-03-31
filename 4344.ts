import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let average:number = 0;

for(let tCase = 1; tCase <= Number(input[0]); tCase ++){
    let count:number = 0;
    let line = input[tCase].split(" ").slice(1, input[tCase].length).map((score) => Number(score));;
    const N:number = Number(input[tCase][0]);

    // 평균값
    average = (line.reduce((acc, cur) => {
        return acc + cur;
    }, 0)/N);
    
    // 비율
    for(let score of line){
        if(score > average){
            count += 1;
        }
    }

    console.log(((count/N)*100).toFixed(3)+"%");
}
