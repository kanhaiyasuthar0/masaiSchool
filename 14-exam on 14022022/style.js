let main = document.getElementById("main");


let url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55a795ac17c044ba9a9a5473982069e3";
let data = fetch(url);
data.then((res) => {
  res
    .json()
    .then((res) => {
      let news = res.articles;
      // console.log(news)

      let div = document.createElement("div");
      div.setAttribute("class", "newscard");
      div.innerHTML = `<h5>${news[2].title}</h5>
        <h6> Author - ${news[2].author}</h6>
        <img class="himg" src=${news[2].urlToImage} alt="">
      <p>Description: ${news[2].description}<br> Published At:${news[2].publishedAt}</p>`;
      main.append(div);
    })
    .catch((err) => {
      console.log(err);
    });
});





