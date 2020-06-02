import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: { color: "white", borderColor: "white" },
}));

const ObserveButton = ({ observe }) => {
  const classes = useStyles();
  return (
    <Button className={classes.button} variant="outlined">
      {observe ? "Delete" : "Observe"}
    </Button>
  );
};

export default ObserveButton;
