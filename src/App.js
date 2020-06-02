import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Main from "./Pages/Main.js";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#000080",
    color: "white",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Main></Main>
    </div>
  );
}

export default App;
