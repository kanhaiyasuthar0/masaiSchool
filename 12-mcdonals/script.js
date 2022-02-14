let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let btn = document.getElementById("btn");
let main = document.getElementById("order");
let mode = document.getElementById("mode");
// let foods = document.getElementsByClassName(".foods");
btn.addEventListener("mouseover",()=>{
  let allfoods = document.querySelector(".allfoods");
  allfoods.style.width = "50%";
  allfoods.style.margin = "0 70% 0 0";
  allfoods.style.dispaly = "inline-block";
  let divside = document.createElement("div");
  divside.setAttribute("class", "sidelist")
  // console.log(divside)
  let checkfoodside = [];
  let totalPrice = 0;
  for (let i = 1; i < 16; i++) {
    // console.log("creqating");
    let checkbox1 = document.getElementById(`food${i}`);
    // console.log(checkbox1.checked)
    if (checkbox1.checked == true) {
      totalPrice += i;
      checkfoodside.push(checkbox1.name);
    }
  }
  totalPrice = totalPrice * 1000;
  // console.log(checkfoodside)
  for (let i = 0; i < checkfoodside.length; i++) {

    let div1 = document.createElement("div");
    div1.innerHTML = checkfoodside[i];
    divside.append(div1);
  }
  let div3 = document.createElement("div");
  div3.innerHTML = `TOTAL AMOUNT TO BE PAID: ${totalPrice} &#8377 `;
  divside.append(div3);
 document.body.append(divside);
  

})
btn.addEventListener("mouseleave", ()=>{
  let allfoods = document.querySelector(".allfoods");
  let leave = document.querySelector(".sidelist");
  leave.remove();
  leave.style.display = "none";
  allfoods.style.width = "89%";
  allfoods.style.margin = "auto";
  allfoods.style.dispaly = "";

})


function border(x){
  let foods = document.querySelector(`.foods${x}`);
  foods.setAttribute("class", "selected");
 
  
  // console.log(foods)
  }
  
  
 



function borders(x){
  let img = document.querySelector(`foods${x}[0]`)
  // console.log(img)
}

// foods.addEventListener("click", ()=>{
//   console.log("Helljshdk")
//   foods.style.border = "black";
  
// })
let countermode = 0;
mode.addEventListener("click", (event) => {
  console.log(countermode);
  event.preventDefault();
  if (countermode % 2 == 0) {
    document.body.style.background = "grey";
    mode.style.background = "white";
    mode.style.color = "black";
    countermode++;
  } else {
    document.body.style.background = "white";
    mode.style.background = "grey";
    mode.style.color = "white";
    countermode++;
  }
});

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if(fname.value== "" || lname.value == ""){
    alert("Please provide the fields");
    return;
  }
  let clear = false;
  let oid = "MASAI";
  let random = Math.floor(Math.random() * 1000);
  let alpha = ["!", "@", "#", "%", "&", "*"];
  let randomi = Math.floor(Math.random() * 6);
  var orderid = `${random}${oid}${alpha[randomi]}`;
  console.log(orderid);
  let div = document.createElement("div");
  div.setAttribute("class", "popup");
  let head = document.createElement("h1");
  head.innerHTML = `Hello ${fname.value}`;
  let divo = document.createElement("div");
  divo.setAttribute("class", "orderoid");
  divo.innerHTML = `Your Unique orderID is : ${orderid}`;

  let head1 = document.createElement("h5");
  head1.innerHTML = `Your details are shown below. Please check the list carefully and enjoy the food. Happy to Serve!`;
  div.append(head, head1);
  let checkfood = [];
  for (let i = 1; i < 16; i++) {
    let checkbox = document.getElementById(`food${i}`);
    if (checkbox.checked == true) {
      checkfood.push(checkbox.name);
    }
  }
  for (let i = 0; i < checkfood.length; i++) {
    let div1 = document.createElement("div");
    div1.innerHTML = checkfood[i];
    div.append(div1);
  }
  const myPromise = new Promise((resolve, reject) => {
    var cleartime = setTimeout(() => {
      let error = false;
      if (!error) {
        resolve("div has been appended successfully to the body");
      } else {
        reject("Sorry some error has occured");
      }
    }, 5000);
    
      setInterval(()=>{
        if(clear == true){
        // document.body.removeChild(div);
        // document.body.removeChild(divo);
        // console.log("he");
        location.reload();
      }
      },10000);
 
   
    
  });

  myPromise.then((res) => {
    document.body.append(div, divo);
    console.log(res);
    clear = true;
  });
  

});

// btn.addEventListener("click", (event) => {
//     event.preventDefault();
//   let oid = "MASAI";
//   let random = Math.floor(Math.random() * 1000);
//   let alpha = ["!", "@", "#", "%", "&", "*"];
//   let randomi = Math.floor(Math.random() * 6);

//   var orderid = `${random}${oid}${alpha[randomi]}`;
//     console.log(orderid);
//     const book = setTimeout(booked, 2000);

//     function booked() {
//         // console.log("Hello");
//       let div = document.createElement("div");
//       div.setAttribute("class", "popup");
//       let head = document.createElement("h1");
//       head.innerHTML = `Hello ${fname.value}` ;
//       let divo = document.createElement("div");
//         divo.setAttribute("class","orderoid");
//         divo.innerHTML = orderid;

//       let head1 = document.createElement("h5");
//       head1.innerHTML = `Your details are shown below. Please check the list carefully and enjoy the food. Happy to Serve!`
//       div.append(head,head1);
//       let checkfood =[];
//       for(let i=1; i<16; i++){
//           let checkbox = document.getElementById(`food${i}`);
//           if(checkbox.checked == true){
//               checkfood.push(checkbox.name);
//           }
//       }
//     for(let i=0; i<checkfood.length; i++){
//         let div1 = document.createElement("div");
//         div1.innerHTML = checkfood[i];
//         div.append(div1);
//     }
//     document.body.append(div,divo);
//     }

// });
