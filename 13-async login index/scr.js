let url = `http://www.omdbapi.com/?apikey=ffa15dcd&s=`;
let input = document.getElementById("search");
let btn = document.getElementById("btn");
let movies = document.querySelector(".movies");
let mainimage = document.getElementById("mainimage");
let title = document.getElementById("title");
let year = document.getElementById("year");
let id = document.getElementById("imdbid");
let main = document.querySelector(".main");
let moviesgrid = document.querySelector(".moviesgrid");

var errorthrown = false;
let allmovies;
let run = false;
btn.addEventListener("click", getdata);
async function getdata() {

  if(!run){
    var ans = setInterval(() => {
      auto();
    }, 4000);
    run = true;
  }else{
    clearInterval(ans);
  }
  
  moviesgrid.innerHTML = "";
  allmovies=[];
  
try {
  
  let res = await fetch(`${url}${input.value}`);
  let data = await res.json();
  allmovies = data.Search;
  console.log("greyb")
  // movies.style.background = "grey";
  console.log("greya")
  mainimage.setAttribute("src", allmovies[0].Poster);
  let index = 1;
  allmovies.forEach((element, indexi) => {
    let div = document.createElement("div");
    div.setAttribute("class", "griditem");
    if(allmovies[indexi].)
    div.innerHTML = `<h4>${allmovies[indexi].Title}</h4>
    <img src=${allmovies[indexi].Poster} alt="">
        <h5>${allmovies[indexi].Year}</h5>
        <h5>${allmovies[index].imdbID}</h5>`;
    moviesgrid.append(div);
  });
  
  function auto() {
    // console.log(ans)
    if(!errorthrown){

      console.log(allmovies,index);
      movies.style.background = "grey";
      mainimage.setAttribute("src", allmovies[index].Poster);
  
      title.innerText = `Title - ${allmovies[index].Title}`;
      year.innerText = ` Year - ${allmovies[index].Year}`;
      id.innerText = `Imdb Id - ${allmovies[index].imdbID}`;
      index++;
      if (index >= allmovies.length) {
        index = 0;
      }
    }
  }
} catch (error) {
  errorthrown = true;
  clearInterval(ans);
  console.log('beofre alret')
  // alert("Enter the valid movie name");
  swal("Movie not Found","Please Enter the valid movie name","warning")
.then((value) => {
  
  location.reload();
});
}
}
