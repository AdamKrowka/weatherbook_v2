import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: { color: "white", borderColor: "white" },
}));

const LogOut = () => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined">
      Logout
    </Button>
  );
};

export default LogOut;
