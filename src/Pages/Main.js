import React, { useState } from "react";

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
  table: {},
};

const Main = () => {
  const [selectedCity, setSelectedCity] = useState();
  const changeSelectedCity = (city) => {
    console.log(city.name);
    setSelectedCity(city);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={9} md={10}>
          <CityInfo CityData={CityData}></CityInfo>
        </Grid>
        <Grid className={classes.buttonList} item xs={12} sm={3} md={2}>
          <ButtonList
            cityList={[{ name: "Rzeszów" }, { name: "Warszawa" }]}
            setSelectedCity={changeSelectedCity}
          ></ButtonList>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
