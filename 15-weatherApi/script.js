//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} --> for city

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key} -- for 7 days

// e8c593df8c6d6de4fada01e0cb9810b5

let input = document.getElementById("input");
// console.log(input)
let btn = document.querySelector(".btn");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let main = document.querySelector(".main");
let imagedata = {
  sunny:
    "https://media.istockphoto.com/photos/blue-sky-with-cloud-picture-id1151056603?b=1&k=20&m=1151056603&s=170667a&w=0&h=gWVMsxMs2fnQHazBiqmbH-ccWKoYlTNOOg7iihVmex0=",
  night:
    "https://images.pexels.com/photos/3729213/pexels-photo-3729213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};
console.log(imagedata.sunny);
btn.addEventListener("click", getData);
// console.log(input.value);
async function getData() {
  // console.log(input.value)
  right.innerHTML = "";
  right.innerHTML = `<iframe src= "https://maps.google.com/maps?q=${input.value}&t=&z=15&ie=UTF8&iwloc=&output=embed"
  " frameborder="0"></iframe>`

  let data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=e8c593df8c6d6de4fada01e0cb9810b5`
  );
  // console.log(data)
  let res = await data.json();
  console.log(res);
  let latitude = res[0].lat;
  let longitude = res[0].lon;
  // console.log(latitude,longitude);

  let data1 = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=e8c593df8c6d6de4fada01e0cb9810b5`
  );

  let res1 = await data1.json();
  console.log(res1);
  left.innerHTML = "";
  //     current: {dt: 1644919256, sunrise: 1644889027, sunset: 1644930504, temp: 300.15, feels_like: 300.22, …}
  // daily: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // hourly: (48) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // lat: 19.076
  // lon: 72.8774
  // minutely: (61) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // timezone: "Asia/Kolkata"
  // timezone_offset: 19800

  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `<p>Temperature in ${input.value} is ${res1.current.temp}<p/>
                    <p>Timezone: ${res1.timezone}</p>
                    <p>Sunrise: ${res1.current.sunrise}</p>
                    <p>Sunset: ${res1.current.sunset}</p>`;
  if (res1.current.sunset < 1644930504) {
    console.log("hello");
    div.style.background = `url(${imagedata.night})`;
    // left.style.background = `url(${imagedata.night})`;
  } else {
    div.style.background = `url(${imagedata.sunny})`;
    // left.style.background = `url(${imagedata.sunny})`;
  }

  left.append(div);

  let time = new Date();
  console.log(time)
 

}
