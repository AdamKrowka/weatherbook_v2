import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: { height: 64 },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <img className={classes.img} src="weatherbook.png" alt="Weatherbook" />
  );
};

export default Logo;
