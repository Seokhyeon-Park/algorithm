import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('./input.txt').toString().split(' ');

// 입력값
const A:number = parseInt(input[0]);
const B:number = parseInt(input[1]);

// 값 확인
// console.log("input?? : ", input);

// 출력
// A가 B보다 큰 경우에는 '>'를 출력한다.
if(A>B){
    console.log(">");
}
// A가 B보다 작은 경우에는 '<'를 출력한다.
else if(A<B){
    console.log("<");
}
// A와 B가 같은 경우에는 '=='를 출력한다.
else if(A===B){
    console.log("==");
}