import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as Icon } from "../../svg/2682801 - cloudy fog foggy mist moon night weather.svg";
import ObserveButton from "./ObserveButton.js";
import Chart from "./Chart.js";
import DaysTable from "./DaysTable.js";

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
      justifyContent: "flex-end",
      display: "flex",
      order: 1,
      paddingRight: theme.spacing(2),
    },
  },
  chart: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      order: 4,
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
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
        <Chart dataValues={CityData.chart}></Chart>
      </Grid>
      <Grid className={classes.chart} item xs={12}>
        <DaysTable></DaysTable>
      </Grid>
    </Grid>
  );
};

export default CityInfo;
