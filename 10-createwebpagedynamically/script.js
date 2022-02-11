let btn = document.getElementById("create");
let body = document.getElementsByTagName("body");

btn.addEventListener("click", () => {
  btn.remove();
//   `` "" ''
  let div = document.createElement("div");
  div.innerHTML = `<div class="main">
  <div class="top1">Today Sun, 26<sup>th</sup> Apr <br> Schedule - 7:00 AM onwards </div>
  <div class="top1">Parathe Sharathe with <br> <span>Ched Archana Doshi</span> </div>
  <div class="dash"></div>
  <div class="top1">Spices and Immunity with <br> <span> Nutrition Expert Manasa Rajan</span> </div>
  <div class="dash"></div>
  <div class="top1">Postman Vegetables with <br> <span>Chef Jason D'Souza</span> </div>
  <div class="top1"><button>Sign Up Now</button></div>
</div>`

  document.body.appendChild(div);

});
