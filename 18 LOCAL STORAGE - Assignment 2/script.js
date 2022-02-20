let btn = document.getElementById("btn");
let table = document.querySelector("table");

let clear = document.getElementById("clear");
console.log(clear)
btn.addEventListener("click", () => {
  let select = document.getElementById("category").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;

  let obj =new myConstFunc(select, title, description, price);
  let data = localStorage.getItem("bozaz");
//   console.log(obj)
  if (data === null) {
    localStorage.setItem("bozaz", JSON.stringify([]));
    let arr = JSON.parse(localStorage.getItem("bozaz"));
    // console.log(arr)
    arr.push(obj);
    localStorage.setItem("bozaz", JSON.stringify(arr));
    render(arr);
} else {
    let arr = JSON.parse(localStorage.getItem("bozaz"));
    // console.log(arr)
    arr.push(obj);
    localStorage.setItem("bozaz", JSON.stringify(arr));
    table.innerHTML = "";
    table.innerHTML = `<tr>
              <th>#</th>
              <th>Category</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>`
    render(arr);
  }
});

function myConstFunc(s, t, d, p) {
  this.cat = s;
  this.tit = t;
  this.des = d;
  this.pri = p;
}
// table.innerHTML = ""
function render(arr) {
    // table.removeChild(".row")
    table.rem
    let count=0;
    arr.forEach(element => {
        count++;
        let tr = document.createElement("tr");
        tr.setAttribute("class" , "row");
        tr.innerHTML = `<th>${count}</th>
        <td>${element.cat}</td>
        <td>${element.tit}</td>
        <td>${element.des}</td>
        <td>${element.pri}  &#8377</td>`
        table.append(tr)
    });
 
}

// clear.addEventListener("click" , ()=>{

//     console.log("clcicke");
//     let data = JSON.parse(localStorage.getItem("bozaz"));
//     if(data){
//        localStorage.setItem("bozaz" , JSON.stringify([])) 
//     }
//     count = 0;
//     let arr = JSON.parse(localStorage.getItem("bozaz"));
//     render(arr);
// })
