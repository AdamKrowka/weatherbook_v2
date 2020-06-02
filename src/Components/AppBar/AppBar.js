import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "./Logo.js";
import LogOut from "./Logout.js";
import SearchCity from "./SearchCity.js";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  searchbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      order: 3,
    },
  },
  logout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(2),
  },
}));

const AppBar = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.logo} item xs={6} sm={4}>
        <Logo></Logo>
      </Grid>
      <Grid className={classes.searchbar} item xs={12} sm={4}>
        <SearchCity></SearchCity>
      </Grid>
      <Grid className={classes.logout} item xs={6} sm={4}>
        <LogOut></LogOut>
      </Grid>
    </Grid>
  );
};

export default AppBar;
