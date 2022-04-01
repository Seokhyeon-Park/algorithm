const fs = require('fs');

// 파일 읽어오기
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = fs.readFileSync('./input.txt').toString().trim();
const val:number = Number(input);

// 1
if(val == 1){
    console.log(1);
}
// 2 ~ 7
else if(val <= 2 && val <= 7){
    console.log(2);
}
// 8 ~ 19 ...
else{
    let n:number = 0;
    let f:number = 2;
    let l:number = 7;

    while(true){
        n++;
        f = f + (n * 6);
        l = l + ((n + 1) * 6);

        if(f <= val && val <= l){
            console.log(n + 1);
            break;
        }
    }
}