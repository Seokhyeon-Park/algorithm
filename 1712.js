"use strict";
// A + nB < Cn (BREAK-EVEN POINT)
exports.__esModule = true;
var fs = require("fs"); // 파일시스템
// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
var input = fs.readFileSync('./input.txt').toString().trim().split(" ");
var maxVal = 2100000000;
var valA = Number(input[0]);
var valB = Number(input[1]);
var valC = Number(input[2]);
var chk = 0;
for (var ind = 1; ind < maxVal; ind++) {
    if (valA + (valB * ind) <= valC * ind) {
        console.log(ind + 1);
        chk = 0;
        break;
    }
    else {
        chk = 1;
    }
}
if (chk == 1) {
    console.log("-1");
}
