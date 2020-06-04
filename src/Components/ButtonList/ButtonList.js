import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    key: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    position: "sticky",
    top: "100px",
    left: 0,
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    width: "100%",
    maxHeight: "80vh",
  },
  indicator: {
    right: "auto",
  },
}));

export default function CityList({ cityList, setSelectedCity }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedCity(cityList[newValue]);
    setValue(newValue);
  };

  const CityList = cityList.map((city, index) => (
    <Tab label={city.name} {...a11yProps(index)} />
  ));
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="City List"
        indicatorColor="primary"
        TabIndicatorProps={{ className: classes.indicator }}
        className={classes.tabs}
      >
        {CityList}
      </Tabs>
    </div>
  );
}
