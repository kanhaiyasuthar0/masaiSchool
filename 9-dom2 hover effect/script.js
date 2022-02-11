let btn = document.getElementById("btn");

function change(){
    btn.style.background = "rgba(39,174,97,255)";
}
function remove(){
    btn.style.background = "rgba(193,57,43,255)"
}
btn.addEventListener("mouseover",change);
btn.addEventListener("mouseleave",remove);
