var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var btn6 = document.querySelector(".btn6");
var btn7 = document.querySelector(".btn7");
var btn8 = document.querySelector(".btn8");
var btn9 = document.querySelector(".btn9");
var btn0 = document.querySelector(".btn0");

var input = document.getElementById("input");
var enter = document.querySelector(".enter");
var num = document.querySelectorAll(".num");

var min = document.querySelector(".min")
var max = document.querySelector(".max")

// num.addEventListener("click", function(){
//     console.log(num);
// })

btn1.addEventListener("click", function () {
  input.textContent += btn1.value;
//   console.log(num);
});
btn2.addEventListener("click", function () {
  input.textContent += btn2.textContent;
});
btn3.addEventListener("click", function () {
  input.textContent += btn3.textContent;
});
btn4.addEventListener("click", function () {
  input.textContent += btn4.textContent;
});
btn5.addEventListener("click", function () {
  input.textContent += btn5.textContent;
});
btn6.addEventListener("click", function () {
  input.textContent += btn6.textContent;
});
btn7.addEventListener("click", function () {
  input.textContent += btn7.textContent;
});
btn8.addEventListener("click", function () {
  input.textContent += btn8.textContent;
});
btn9.addEventListener("click", function () {
  input.textContent += btn9.textContent;
});
btn0.addEventListener("click", function () {
    input.textContent += btn0.textContent;
  });

enter.addEventListener("click",function(){
    console.log("pressed")
    var a = +input.textContent;
    var b = +min.textContent;
    var c = +max.textContent;
    // console.log(typeof a)
    // console.log(typeof b)
    // console.log(typeof c)
    if(a < b){
        min.textContent = input.textContent;
       
    }
    if(a >c){
        max.textContent = input.textContent;
    }
    input.textContent = "";
})
