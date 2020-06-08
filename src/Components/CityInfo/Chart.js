import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LineChart from "./LineChart.js";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  tabs: {
    color: "white",
  },
  outerContainer: {
    backgroundColor: "rgba(200,200,200,0.25)",
    borderRadius: 10,
    height: "40vh",
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      width: "100%",
      overflowX: "scroll",
    },
  },
  innerContainer: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "200%",
    },
  },
}));

const Chart = ({ dataValues }) => {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.container}>
      <div className={classes.paper}>
        <Tabs
          className={classes.tabs}
          value={value}
          indicatorColor="primary"
          textColor="inherit"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Temperature" />
          <Tab label="Humidity" />
          <Tab label="Wind" />
        </Tabs>
      </div>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <LineChart
            labels={dataValues.label}
            data={[...dataValues.data[value]]}
            value={value}
          ></LineChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
