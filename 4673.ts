function selfNumber(n:number){
    let selfNum = n;
    const num = String(n).split("");
    for(let splitNum of num){
        selfNum += Number(splitNum);
    }
    if(selfNum > 10000){
        return;
    }else{
        chkArr[selfNum] = 1;
        selfNumber(selfNum);
    }
}

const chkArr = new Array(10000).fill(0);
let result:string = "";

for(let ind = 1; ind <= 10000; ind++){
    selfNumber(ind);
}

for(let ind = 1; ind <= 10000; ind++){
    if(chkArr[ind] != 1){
        result = result + ind + "\n";
    }
}

console.log(result);