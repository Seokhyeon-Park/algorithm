// 입력
// 첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 
import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");
const startH:number = parseInt(input[0].split(" ")[0]);
const startM:number = parseInt(input[0].split(" ")[1]);
const diffH:number = Math.floor(parseInt(input[1])/60);
const diffM:number = parseInt(input[1])%60;

// 확인
// console.log("startH ?? : ", startH);
// console.log("startM ?? : ", startM);
// console.log("diffH ?? : ", diffH);
// console.log("diffM ?? : ", diffM);

// 출력
// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)
let endH:number = startH + diffH;
let endM:number = startM + diffM;

if(endM > 59){
    endM = endM - 60;
    endH = endH + 1;    
}
if(endH > 23){
    endH = endH - 24;
}

console.log(endH.toString()+" "+endM.toString());