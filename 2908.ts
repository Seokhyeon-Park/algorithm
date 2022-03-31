import fs from 'fs';   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
// const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

const val1 = input[0].split("");
const val2 = input[1].split("");
let revVal1:string = "";
let revVal2:string = "";

for(let ind = val1.length - 1; ind >= 0; ind--){
    revVal1 = revVal1 + val1[ind];
    revVal2 = revVal2 + val2[ind];
}

if(revVal1>revVal2){
    console.log(revVal1);
}else{
    console.log(revVal2);
}