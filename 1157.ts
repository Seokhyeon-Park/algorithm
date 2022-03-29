import fs = require('fs')   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")[0].toUpperCase().split("");
// const input = fs.readFileSync('./input.txt').toString().trim().split("\n")[0].toUpperCase().split("");
let alphabet = new Array(26).fill(0);

// -65
for(let str of input){
    alphabet[str.charCodeAt(0) - 65] += 1;
}

let count = 0;
const maxVal = Math.max(...alphabet);

for(let str of alphabet){
    if(str == maxVal){
        count += 1;
    }
}
if(count > 1){
    console.log("?");
}else{
    console.log(String.fromCharCode(alphabet.indexOf(maxVal)+65));
}