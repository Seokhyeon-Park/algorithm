import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = fs.readFileSync('./input.txt').toString().trim();

// 입력값
const score:number = parseInt(input);

// 값 확인
// console.log("score?? : ", score);

// 출력
// 시험 점수를 입력받아 90 ~ 100점은 A, 
if(90<=score){
    console.log("A");
}
// 80 ~ 89점은 B,
else if(80<=score){
    console.log("B");
}
// 70 ~ 79점은 C, 
else if(70<=score){
    console.log("C");
}
// 60 ~ 69점은 D, 
else if(60<=score){
    console.log("D");
}
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
else{
    console.log("F");
}