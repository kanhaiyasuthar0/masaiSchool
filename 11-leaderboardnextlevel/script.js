//all the number buttons selectors
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

//input, enter, min, max selectors total
var input = document.getElementById("input");
var enter = document.querySelector(".enter");
var num = document.querySelectorAll(".num");
var min = document.querySelector(".min");
var max = document.querySelector(".max");
let total = document.querySelector(".score");

//all right side selectors
let gamescore = document.getElementById("game-score");
let all = document.querySelector(".all");
let odd = document.querySelector(".odd");
let even = document.querySelector(".even");
let last = document.querySelector(".last");

//individual number buttons eventlisteners;
btn1.addEventListener("click", function () {
  input.textContent += btn1.value;
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

//global variable for the functioning.
let count = 0;
var inputValues = [];

// main even listreners like ---> enter button, remover all,odd,even,last
enter.addEventListener("click", function () {
  if (input.textContent !== "") {
    var a = +input.textContent;
    inputValues.push(a);
    // gamescore.innerHTML = "";
    display(inputValues);
    input.textContent = "";
  }
});

all.addEventListener("click", () => {
  gamescore.innerHTML = "";
  max.textContent = "";
  min.value = Infinity;
  min.textContent = "";
  total.innerHTML = "";
  inputValues = [];
});
odd.addEventListener("click", () => {
  gamescore.innerHTML = "";
  let oddarr = [];
  for (let i = 0; i < inputValues.length; i++) {
    if (i % 2 !== 0) {
      oddarr.push(inputValues[i]);
    }
  }
  inputValues = oddarr;
  display(oddarr);
});
even.addEventListener("click", () => {
  gamescore.innerHTML = "";
  let evenarr1 = [];
  for (let i = 0; i < inputValues.length; i++) {
    if (i % 2 === 0) {
      evenarr1.push(inputValues[i]);
    }
  }
  inputValues = evenarr1;
  display(evenarr1);
});
last.addEventListener("click", () => {
  gamescore.innerHTML = "";
  let lastarr = [];
  inputValues.pop();
  lastarr = inputValues;
  display(lastarr);
});

//main function which is resposible for the final display of min max total and right side score display in sequence.
function display(x) {
  // x - inputvalues
  let sumTotal = 0;
  let minValues = +Infinity;
  let maxValues = -Infinity;
  count = 0;
  x.forEach((element) => {
    if (element < minValues) {
      minValues = element;
    }
    if (element > maxValues) {
      maxValues = element;
    }
    sumTotal += element;
    count++;
    let code = "Game " + count + " - " + element;
    let div = document.createElement("div");
    div.innerHTML = code;
    gamescore.append(div);
  });
  total.innerHTML = +sumTotal;
  min.textContent = +minValues;
  min.value = +minValues;
  max.textContent = maxValues;
}
// Thank you!
