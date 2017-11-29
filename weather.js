
const url =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22boston%2C%20MA%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

const fetchWeather = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {data.query.results.channel.forecast.map(weather =>
    console.log(`${weather.day} ${weather.date}. ${weather.text} with a high of ${weather.high} and a low of ${weather.low}`);
)})
  console.log();
}

fetchWeather()
