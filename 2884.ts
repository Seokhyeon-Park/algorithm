// 첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

// 입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

// -45

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
// const input = fs.readFileSync('./input.txt').toString().split(" ");

// 입력값 분리
let H:number = parseInt(input[0]);
const M:number = parseInt(input[1]);

// 확인
// console.log("H : ", H);
// console.log("M : ", M);

// 연산
// M-45 > 0 : M-45
// M-45 < 0 : H-1 / ||M-45||
const diff:number = M - 45;

if(diff >= 0){
    console.log((H).toString()+" "+(diff).toString());
}else{
    if(H == 0){
        H = 24;
    }
    console.log((H-1).toString()+" "+(60+diff).toString());
}