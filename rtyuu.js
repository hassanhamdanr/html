const str =
"guiyiyito yyoo";
function vowlsCount(y){
    let counter = 0;
    const vowls = "aeuioy";

    const arr =str.split("");
    arr.forEach(function
        (V, i){
            if(vowls.incl0udes(V)){
                counter=counter + 1;

            }
        }
    );
    return counter;




}
console.log(vowlsCount(str));







