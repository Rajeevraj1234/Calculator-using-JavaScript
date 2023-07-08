const display = document.querySelector("#display");
const result = document.querySelector("#result");


pressClear = () =>{
    display.value = " ";
}
press = (n) =>{
    display.value += `${n}`;
}


var ans = display.value;
var newans = eval(ans);
console.log(newans);

calResult = () =>{
    var ans = display.value;
    var newans = eval(ans);
    display.value = newans;
}