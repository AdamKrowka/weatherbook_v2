const APIKEY = "c68dd49b4150a92e79f8a0254fd0d999";

const lessThanTen = (number) => `${number < 10 ? `0${number}` : `${number}`}`;
const getTime = (dt) =>
  `${lessThanTen(new Date(dt * 1000).getHours())}:${lessThanTen(
    new Date(dt * 1000).getMinutes()
  )}`;

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getData = async (city) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${APIKEY}`
  )
    .then((res) => res.json())
    .then((json) => json);
  const today = new Date();

  const labels = data.hourly
    .map(
      (hour, index) => `${lessThanTen(new Date(hour.dt * 1000).getHours())}:00`
    )
    .slice(0, 12);

  const chartTemp = data.hourly.map((hour) => hour.temp.toFixed()).slice(0, 12);
  const chartHumidity = data.hourly.map((hour) => hour.humidity).slice(0, 12);
  const chartWind = data.hourly.map((hour) => hour.wind_speed).slice(0, 12);

  const tableData = data.daily.map((day) => ({
    day: days[new Date(day.dt * 1000).getDay().toFixed()],
    weather: day.weather[0].description,
    temperatureDay: day.temp.day.toFixed(),
    temperatureNight: day.temp.night.toFixed(),
    humidity: day.humidity,
    wind: day.wind_speed,
  }));

  const convertedData = {
    name: city.name,
    date: `${lessThanTen(today.getDate())}
    .${lessThanTen(today.getMonth())}
    .${today.getFullYear()}`,
    current: {
      name: data.current.weather[0].description,
      sunrise: getTime(data.current.sunrise),
      sunset: getTime(data.current.sunset),
      temp: data.current.temp.toFixed(),
      wind: data.current.wind_speed,
      humidity: data.current.humidity,
      icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
    },
    chart: {
      label: labels,
      data: [chartTemp, chartHumidity, chartWind],
    },
    table: tableData,
  };
  return convertedData;
};
