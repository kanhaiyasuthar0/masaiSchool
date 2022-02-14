let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

let emails = "kanhaiyasuthar123@gmail.com";
let passwords = "123";

submit.addEventListener("click", (event) => {
  
  console.log(typeof email.value);
  console.log(typeof password.value);
  event.preventDefault();

  //   console.log("started");
  if (email.value == "" || password.value == "") {
    // console.log("empty");
    alert(
      "Please fill the details to login and explore the world of learning im MASAI way"
    );
    return;
    // return;
  }

  if (email.value == emails && password.value == passwords) {
    window.location.replace("/index.html");
    // console.log("yes");
    // return;
  } else {
    alert("Please give the correct emailId and Passwords");
    return;
  }
});


