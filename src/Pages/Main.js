import React from "react";

import AppBar from "../Components/AppBar/AppBar.js";
import CityInfo from "../Components/CityInfo/CityInfo.js";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar />
      <Grid className={classes.container} container>
        <Grid item xs={12} sm={9} md={10}>
          <CityInfo></CityInfo>
        </Grid>
        <Grid item xs={12} sm={3} md={2}>
          asda
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
