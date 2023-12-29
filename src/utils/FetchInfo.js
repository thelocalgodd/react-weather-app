const getWeatherInfo = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=68fcafa37caddb2e4976e6b33e18b55b`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data = {
        weather: data.weather[0].main,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      };
      return data;
    });
};

export default getWeatherInfo;
