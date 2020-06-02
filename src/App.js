import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000080",
    color: "white",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();
  return <div className={classes.root}>asdasd</div>;
}

export default App;
