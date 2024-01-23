
async function getWeather(place) {
    // Replace 'YOUR_WEATHER_API_KEY' with your actual OpenWeatherMap API key
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=d1a52b725a291e3bb76f19382f10bda3&units=metric`

    const response = await fetch(api_url);
    const data = await response.json();

    // Assuming you want to display temperature and weather description
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    // Update the DOM elements to show weather information
    document.getElementById("weather").innerText = `${place}'s weather: ${temperature}°C, ${weatherDescription}`;
}


document.querySelectorAll(".clicks").forEach(e => {
  e.setAttribute('class', `clicks ${e.id}`);
  e.addEventListener("mouseover", function () {
      window.onmousemove = function (j) {
          x = j.clientX;
          y = j.clientY;
          document.getElementById('country').style.top = y - 60 + 'px';
          document.getElementById('country').style.left = x + 10 + 'px';
      };
      const classes = e.className.baseVal.replace(/ /g, '.');
      document.querySelectorAll(`.${classes}`).forEach(country => {
          country.style.fill = "#006284";
      });
      document.getElementById("country").style.opacity = 1;
      document.getElementById("countryName").innerText = e.id;
  });
  e.addEventListener("mouseleave", function () {
      const classes = e.className.baseVal.replace(/ /g, '.');
      document.querySelectorAll(`.${classes}`).forEach(country => {
          country.style.fill = "#00394f";
      });
      document.getElementById("country").style.opacity = 0;
  });

  e.addEventListener("click", function () {
      getWeather(e.id);
  });
});

