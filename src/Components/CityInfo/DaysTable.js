import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Termometer from "../../svg/termometer.svg";
import Humidity from "../../svg/humidity.svg";
import Wind from "../../svg/wind.svg";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: theme.spacing(3),
  },
  icon: {
    height: "35px",
  },
  title: {
    paddingRight: 0,
    lineHeight: "35px",
  },
  titleCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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

const DaysTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day of Week</TableCell>
            <TableCell>Weather</TableCell>
            <TableCell align="right" className={classes.title}>
              <div className={classes.titleCell}>
                <span>Temperature day </span>
                <img className={classes.icon} src={Termometer} alt="" />
              </div>
            </TableCell>
            <TableCell align="right" className={classes.title}>
              <div className={classes.titleCell}>
                <span>Temperature night </span>
                <img className={classes.icon} src={Termometer} alt="" />
              </div>
            </TableCell>
            <TableCell align="right" className={classes.title}>
              <div className={classes.titleCell}>
                <span>Humidity </span>
                <img className={classes.icon} src={Humidity} alt="" />
              </div>
            </TableCell>
            <TableCell align="right" className={classes.title}>
              <div className={classes.titleCell}>
                <span>Wind </span>
                <img className={classes.icon} src={Wind} alt="" />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell>{row.weather}</TableCell>
              <TableCell align="right">{row.temperatureDay} °C</TableCell>
              <TableCell align="right">{row.temperatureNight} °C</TableCell>
              <TableCell align="right">{row.humidity} %</TableCell>
              <TableCell align="right">{row.wind} m/s</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DaysTable;
