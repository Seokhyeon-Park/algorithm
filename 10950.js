"use strict";
exports.__esModule = true;
var fs = require("fs"); // 파일시스템
// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().split("\n");
var input = fs.readFileSync('./input.txt').toString().split("\n");
// 값 나누기
var factorT = Number(input[0]);
// 출력
for (var ind = 1; ind <= factorT; ind++) {
    var lineVal = input[ind].split(" ");
    console.log(Number(lineVal[0]) + Number(lineVal[1]));
}
