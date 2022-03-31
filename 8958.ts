import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
let result:string = "";

for(let ind = 0; ind < Number(input[0]); ind++){
    let score = 1;
    let totalScore = 0;
    for(let res of (input[ind+1]).split("")){
        if(res=="O"){
            totalScore += score;
            score += 1;
        }else{
            score = 1;
        }
    }
    result = result + String(totalScore) + "\n";
}

console.log(result);