const apiKey = "293447fa7991803d073ea481306b04c7";

window.onload = () => {

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(

      position => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeatherByLocation(lat, lon);

      },

      error => {

        alert("Location access denied");

      }

    );

  }

}

async function getWeatherByLocation(lat, lon){

  const url =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  updateUI(data);

}

function updateUI(data){

  document.getElementById("city-name").innerText =
  data.name;

  document.getElementById("temperature").innerText =
  `${Math.round(data.main.temp)}°C`;

  document.getElementById("description").innerText =
  data.weather[0].description;

  document.getElementById("humidity").innerText =
  `${data.main.humidity}%`;

  document.getElementById("wind-speed").innerText =
  `${data.wind.speed} m/s`;

  const iconCode = data.weather[0].icon;

  const iconUrl =
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.getElementById("weather-icon").src =
  iconUrl;

  const weatherMain = data.weather[0].main;

  if(weatherMain === "Clear"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";

    document.getElementById("food").innerText =
    "Drink juices, coconut water, fruits.";

    document.getElementById("clothes").innerText =
    "Wear cotton clothes and light colors.";

    document.getElementById("vehicle").innerText =
    "Bike rides are great in this weather.";

    document.getElementById("suggestion").innerText =
    "Stay hydrated and avoid afternoon heat.";

    document.getElementById("dialogue").innerText =
    "‘Life lo gelavadam important kaadu... life ni enjoy cheyadam important.’";

  }

  else if(weatherMain === "Rain"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";

    document.getElementById("food").innerText =
    "Try hot soup, tea, pakodi.";

    document.getElementById("clothes").innerText =
    "Carry umbrella and waterproof jacket.";

    document.getElementById("vehicle").innerText =
    "Avoid bikes during heavy rain.";

    document.getElementById("suggestion").innerText =
    "Roads may be slippery. Travel safely.";

    document.getElementById("dialogue").innerText =
    "‘Konni journeys manalni marchestayi.’";

  }

  else if(weatherMain === "Clouds"){

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63')";

    document.getElementById("food").innerText =
    "Balanced meals and warm drinks are good.";

    document.getElementById("clothes").innerText =
    "Casual comfortable wear is perfect.";

    document.getElementById("vehicle").innerText =
    "Any vehicle is fine.";

    document.getElementById("suggestion").innerText =
    "Good weather for productivity.";

    document.getElementById("dialogue").innerText =
    "‘Edaina sare... once decide ayithe naa way lo veltha.’";

  }

  else{

    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')";

    document.getElementById("food").innerText =
    "Eat healthy and stay energetic.";

    document.getElementById("clothes").innerText =
    "Dress according to comfort.";

    document.getElementById("vehicle").innerText =
    "Drive carefully.";

    document.getElementById("suggestion").innerText =
    "Take care and enjoy your day.";

    document.getElementById("dialogue").innerText =
    "‘Kashtapadithe success tappadu.’";

  }
function updateTime()
{

  const now = new Date();
   document.getElementById("time").innerText =now.toLocaleString();

}

setInterval(updateTime,1000);
}