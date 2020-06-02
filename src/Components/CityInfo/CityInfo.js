import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as Icon } from "../../svg/2682801 - cloudy fog foggy mist moon night weather.svg";
import ObserveButton from "./ObserveButton.js";

const useStyles = makeStyles((theme) => ({
  info: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  temp: {
    [theme.breakpoints.down("sm")]: {
      order: 3,
    },
  },
  observe: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
      justifyContent: "flex-end",
      display: "flex",
      paddingRight: theme.spacing(2),
    },
  },
  chart: {
    [theme.breakpoints.down("sm")]: {
      order: 4,
    },
  },
  cityName: {
    fontSize: "3rem",
  },
  date: {},
  currentName: {
    paddingTop: theme.spacing(3),
    fontSize: "2rem",
  },
  currentTemp: {
    fontSize: "5rem",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
    },
  },
  currentIcon: {
    height: "200px",
  },
  container: {
    display: "flex",
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
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
  },
};

const CityInfo = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.info} item xs={12} md={4}>
        <div className={classes.cityName}>{CityData.name}</div>
        <div className={classes.date}>{CityData.date}</div>
        <div className={classes.currentName}>{CityData.current.name}</div>
      </Grid>
      <Grid className={classes.temp} item xs={12} md={6}>
        <div className={classes.currentTemp}>
          <Icon className={classes.currentIcon}></Icon>
          {CityData.current.temp}°C
        </div>
      </Grid>
      <Grid className={classes.observe} item xs={12} md={2}>
        <ObserveButton observe={true}></ObserveButton>
      </Grid>
      <Grid className={classes.chart} item xs={12}>
        chart
      </Grid>
    </Grid>
  );
};

export default CityInfo;
