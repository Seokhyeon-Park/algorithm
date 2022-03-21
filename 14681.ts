// 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync(0).toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

// 입력값 분리
const X:number = parseInt(input[0]);
const Y:number = parseInt(input[1]);

// 값 확인
// console.log("input ?? : ", input);
// console.log("input ?? : ", X);
// console.log("input ?? : ", Y);

// 출력
if(X>0&&Y>0){
    console.log("1");
}else if(X<0&&Y>0){
    console.log("2");
}else if(X<0&&Y<0){
    console.log("3");
}else{
    console.log("4");
}