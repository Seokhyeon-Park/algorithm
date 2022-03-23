// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)
// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.
// N개의 숫자, X보다 작은 숫자 출력

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
// const input = fs.readFileSync('./input.txt').toString().split("\n");

const N:number = Number(input[0].split(" ")[0]);
const X:number = Number(input[0].split(" ")[1]);
const list = input[1].split(" ");
let result:string = "";

// 확인
// console.log("list ? : ", list);

// 출력
for(let ind=0; ind<N; ind++){
    if(Number(list[ind])<X){
        result = result + list[ind] + " ";
    }
}

console.log(result);