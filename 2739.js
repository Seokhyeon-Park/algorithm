"use strict";
// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
exports.__esModule = true;
// 출력
// 출력형식과 같게 N*1부터 N*9까지 출력한다.
var fs = require("fs"); // 파일시스템
// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().trim();
var input = fs.readFileSync('./input.txt').toString().trim();
console.log("input ? : ", input);
