import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Icon from "../../svg/2682801 - cloudy fog foggy mist moon night weather.svg";
import Sunrise from "../../svg/sunrise.svg";
import Sunset from "../../svg/sunset.svg";
import Termometer from "../../svg/termometer.svg";
import Humidity from "../../svg/humidity.svg";
import Wind from "../../svg/wind.svg";
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
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
    fontSize: "3rem",
    display: "flex",
    justifyContent: "center",
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
  sunIcon: {
    height: "60px",
  },
  sunTime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  termometer: {
    height: "60px",
  },
  basicInfo: {
    display: "flex",
    alignItems: "center",
  },
}));

const CityInfo = ({ CityData }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.info} item xs={12} md={4}>
        <div className={classes.cityName}>{CityData.name}</div>
        <div className={classes.date}>{CityData.date}</div>
        <div className={classes.currentName}>{CityData.current.name}</div>
        <div className={classes.sunTime}>
          <img className={classes.sunIcon} src={Sunrise} alt="" />
          {CityData.current.sunrise}
        </div>
        <div className={classes.sunTime}>
          <img className={classes.sunIcon} src={Sunset} alt="" />
          {CityData.current.sunset}
        </div>
      </Grid>
      <Grid className={classes.temp} item xs={12} md={3}>
        <div className={classes.currentTemp}>
          <img className={classes.currentIcon} src={Icon} alt="" />
        </div>
      </Grid>
      <Grid className={classes.temp} item xs={12} md={3}>
        <div className={classes.basicInfo}>
          <img className={classes.termometer} src={Termometer} alt="" />
          <div className={classes.currentTemp}>{CityData.current.temp}°C</div>
        </div>
        <div className={classes.basicInfo}>
          <img className={classes.termometer} src={Humidity} alt="" />
          <div className={classes.currentTemp}>
            {CityData.current.humidity}%
          </div>
        </div>
        <div className={classes.basicInfo}>
          <img className={classes.termometer} src={Wind} alt="" />
          <div className={classes.currentTemp}>{CityData.current.wind}m/s</div>
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
