// 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

import fs from 'fs';   // 파일시스템

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

// 값 가져오기
const scoreArr = (input[1].split(" ")).map((score) => Number(score));
const maxScore = Math.max(...scoreArr);
const editedScore = scoreArr.map((score) => ((score/maxScore)*100));

console.log((editedScore.reduce((acc, cur) => {
        return acc + cur;
    }, 0))/Number(input[0]));

