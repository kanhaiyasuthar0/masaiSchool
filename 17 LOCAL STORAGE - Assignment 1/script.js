let btn = document.querySelector(".btn");
let main = document.querySelector(".main");

let obj1;
let obj2;
btn.addEventListener("click", () => {
  let item = document.querySelector(".item");
  let quantity = document.querySelector(".quantity");
  let list = JSON.parse(sessionStorage.getItem("list"));
  if (item.value == "" && quantity.value == "") {
    prompt("Please enter the Item name and Quantity");
    return;
  } else if (item.value == "") {
    prompt("Please Enter the Item name");
    return;
  } else if (quantity.value == "") {
    prompt("Please enter the Quanity");
    return;
  }

  if (list == null) {
    obj1 = new object(item.value, quantity.value);
    item.value = "";
    quantity.value = "";
    list = [];
    list.push(obj1);
    displayData(list);
    sessionStorage.setItem("list", JSON.stringify(list));
  } else {
    obj2 = new object(item.value, quantity.value);
    item.value = "";
    quantity.value = "";
    list.push(obj2);
    displayData(list);
    sessionStorage.removeItem("list");
    sessionStorage.setItem("list", JSON.stringify(list));
  }
});

function displayData(list) {
  main.innerHTML = "";

  list.forEach((element, index) => {
    console.log(index);
    let li = document.createElement("li");
    let del = document.createElement("button");
    li.setAttribute("class", "itemlist");
    del.setAttribute("class", "delete");
    del.innerHTML = "Delete"
    li.innerHTML = `${element.i} - ${element.q}`;
    li.append(del);

    del.onclick = function () {
      remove(index, list);
    };

    main.append(li);
  });
}

function object(i, q) {
  this.i = i;
  this.q = q;
}

function remove(ind, list) {
  if (list.length > 1) {
    list.splice(ind, 1);
  } else if (list.length <= 1) {
    list.splice(ind, 1);
    sessionStorage.removeItem("list");
  }

  displayData(list);
}
