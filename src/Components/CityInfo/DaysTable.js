import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: theme.spacing(3),
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
            <TableCell align="right">Temperature day</TableCell>
            <TableCell align="right">Temperature night</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right"> Wind </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.day}>
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
