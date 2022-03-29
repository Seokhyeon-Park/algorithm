import fs = require('fs')   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let result = ""

for(let ind = 1; ind < input.length; ind++){
    let splitStr = input[ind].split(" ")[1].split("");
    for(let str of splitStr){
        for(let count = 0; count < Number(input[ind].split(" ")[0]); count ++){
            result = result + str;
        }
    }
    result = result + "\n";
}
console.log(result);
