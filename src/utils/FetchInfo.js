const location = document.getElementById("location-input").value;

const getWeatherInfo = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`;

  fetch(url)
    .then((res = res.json()))
    .then((data) => {
      console.log(data);
    });
};

export default getWeatherInfo;
