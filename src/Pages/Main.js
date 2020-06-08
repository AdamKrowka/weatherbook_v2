import React, { useState, useEffect } from "react";

import { getData } from "../utils/weatherData.js";

import AppBar from "../Components/AppBar/AppBar.js";
import CityInfo from "../Components/CityInfo/CityInfo.js";
import ButtonList from "../Components/ButtonList/ButtonList.js";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  buttonList: {
    position: "relative",
  },
}));

function createData(
  day,
  weather,
  temperatureDay,
  temperatureNight,
  humidity,
  wind
) {
  return { day, weather, temperatureDay, temperatureNight, humidity, wind };
}

const rows = [
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
  createData("Monday", "Clear sky", 12, 8, 80, 29),
];

const CityData = {
  name: "Poznań",
  date: "Mon. 01.06.20",
  current: {
    name: "clear sky",
    sunrise: "06:12",
    sunset: "20:32",
    temp: 24,
    wind: 14,
    humidity: 80,
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
  },
  chart: {
    label: [
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "00:00",
      "01:00",
    ],
    data: [
      [10, 13, 12, 13, 12, 11, 12, 13, 12, 11, 12, 13],
      [80, 60, 63, 61, 69, 63, 65, 67, 65, 72, 76, 80],
      [15, 16, 13, 13, 12, 12, 23, 22, 12, 21, 12, 32],
    ],
  },
  table: rows,
};

const Main = () => {
  const [selectedCity, setSelectedCity] = useState({
    id: 6695624,
    name: "Warszawa",
    state: "",
    country: "PL",
    coord: {
      lon: 21.04191,
      lat: 52.23547,
    },
  });

  const [cityInfo, setCityInfo] = useState();

  const changeSelectedCity = async (city) => {
    const newData = await getData(city);
    setCityInfo(newData);
    setSelectedCity(city);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={9} md={10}>
          {cityInfo ? <CityInfo CityData={cityInfo}></CityInfo> : <></>}
          {/* <CityInfo CityData={cityInfo}></CityInfo> */}
        </Grid>
        <Grid className={classes.buttonList} item xs={12} sm={3} md={2}>
          <ButtonList
            cityList={[
              {
                id: 759734,
                name: "Rzeszów",
                state: "",
                country: "PL",
                coord: {
                  lon: 21.99901,
                  lat: 50.041321,
                },
              },
              {
                id: 6695624,
                name: "Warszawa",
                state: "",
                country: "PL",
                coord: {
                  lon: 21.04191,
                  lat: 52.23547,
                },
              },
            ]}
            setSelectedCity={changeSelectedCity}
          ></ButtonList>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
