import fs = require('fs')   // 파일시스템

const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
// const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

if(input.length==1&&input[0]==''){
    console.log(0);
}else{
    console.log(input.length);
}
