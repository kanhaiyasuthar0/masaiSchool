let input = document.getElementById("input");
let btn = document.getElementById("btn");
let allnews = document.querySelector(".allnews");
btn.addEventListener("click", getdata);

function getdata() {
    allnews.innerHTML = "";
  let url = "https://newsapi.org/v2/everything?";

  console.log(input.value);
  // &category=business&
  let apiKey = "55a795ac17c044ba9a9a5473982069e3";

  let data = fetch(
    `${url}q=${input.value}&from=2022-01-14&sortBy=publishedAt&apiKey=${apiKey}`
  );
  data.then((res) => {
    res.json().then((res) => {
      let news = res.articles;
      console.log(news);
      //       author: "mirrornews@mirror.co.uk (Emma Munbodh)"
      // content: "A number of electric car drivers have been fined by private parking companies for charging their vehicles in public.\r\n While the motorists are within their rights to park on the premises, penalties a… [+4348 chars]"
      // description: "Some electric car drivers in England are facing fines from private parking operators because the rules have not been updated since the top-up points were installed"
      // publishedAt: "2022-02-14T15:18:50Z"
      // source: {id: null, name: 'Mirror Online'}
      // title: "Drivers being hit with private parking fines for charging electric cars in public"
      // url: "https://www.mirror.co.uk/money/drivers-being-hit-private-parking-26226248"
      // urlToImage: "https://i2-prod.mirror.co.uk/incoming/article25588981.ece/ALTERNATES/s1200/1_Electric-Vehicle-in-Park-Street-Charging-station.jpg"

      news.forEach((element) => {
        let div = document.createElement("div");
        div.setAttribute("class", "searched");
        div.innerHTML = `<h5>${element.title}</h5>
        <h6> Author - ${element.author}</h6>
        <img class="himg" src=${element.urlToImage} alt="">
      <p>Description: ${element.description}<br> Published At:${element.publishedAt}</p>`;
      allnews.append(div);
      });
    });
  });
}
