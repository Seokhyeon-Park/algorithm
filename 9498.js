"use strict";
exports.__esModule = true;
var fs = require("fs"); // 파일시스템
// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().trim();
var input = fs.readFileSync('./input.txt').toString().trim();
// 입력값
var score = parseInt(input);
// 값 확인
// console.log("score?? : ", score);
// 출력
// 시험 점수를 입력받아 90 ~ 100점은 A, 
if (90 <= score || score <= 100) {
    console.log("A");
}
// 80 ~ 89점은 B,
else if (80 <= score || score <= 89) {
    console.log("B");
}
// 70 ~ 79점은 C, 
else if (70 <= score || score <= 79) {
    console.log("C");
}
// 60 ~ 69점은 D, 
else if (60 <= score || score <= 69) {
    console.log("D");
}
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
else {
    console.log("F");
}
