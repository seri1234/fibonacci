'use strict';
const memo = new Map();                 //過去計算したフィボナッチ数を入れておく連想配列。このように一度計算した結果を保存しておく方法をメモ化という
memo.set(0,0);                          //0番目のフィボナッチ数は０
memo.set(1,1);                          //1番目のフィボナッチ数は1
function fib(n){
    if(memo.has(n)){                    //has(キー値)mapがそのキー値を持っているかどうかでtrue,falthを返す。
        return memo.get(n);             //持っていたらその値を出力して終了

   }
   const value = fib(n-1)+fib(n-2);
   memo.set(n,value);
   return value;


return fib(n-1) + fib(n-2);
}
const length = 40;
for (let i =0 ; i <= length;i++){
    console.log(fib(i));
}
