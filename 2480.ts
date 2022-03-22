// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

import fs = require('fs')   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
// const input = fs.readFileSync('./input.txt').toString().split(" ");

// 주사위 값 불러오기
let cashPrize: number = 0;
const diceArr = new Array<number>(
        parseInt(input[0]), parseInt(input[1]), parseInt(input[2])
    );
const diceSet = new Set<number>(
        [parseInt(input[0]), parseInt(input[1]), parseInt(input[2])]
    );

// 값 확인
// console.log("diceSet ? : ", diceSet);
// console.log("diceArr ? : ", diceArr);
// console.log("diceSet.size ? : ", diceSet.size);

// 출력
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. -> set -> 아무 값
if(diceSet.size===1){
    cashPrize = 10000 + (diceArr[0] * 1000);
}
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. -> set -> ??
else if(diceSet.size===2){
    diceSet.forEach(function(setDice){
        let count = 0;
        diceArr.forEach(function(arrDice){
            if(setDice===arrDice){
                count = count + 1;
            }
            if(count===2){
                cashPrize = 1000 + (setDice * 100);
            }
        });
    });
}
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다. -> set -> max
else{
    cashPrize = Math.max(...diceArr) * 100;
}

console.log(cashPrize);