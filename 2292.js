var fs = require('fs');
// 파일 읽어오기
// const input = fs.readFileSync('/dev/stdin').toString().trim();
var input = fs.readFileSync('./input.txt').toString().trim();
var val = Number(input);
// 1
if (val == 1) {
    console.log(1);
}
// 2 ~ 7
else if (val <= 2 && val <= 7) {
    console.log(2);
}
// 8 ~ 19 ...
else {
    var n = 0;
    var f = 2;
    var l = 7;
    while (true) {
        n++;
        f = f + (n * 6);
        l = l + ((n + 1) * 6);
        if (f <= val && val <= l) {
            console.log(n + 1);
            break;
        }
    }
}
