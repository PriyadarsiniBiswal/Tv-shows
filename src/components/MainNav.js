import React from "react";
import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/Movies");
    else if (value === 2) navigate("/Series");
    else if (value === 3) navigate("/Search");
  }, [value, navigate]);

  return(
    <BottomNavigation showLabels value={value} onChange={(event, newValue) =>{ setValue(newValue) }}  className={classes.root}>
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon/>} />
        <BottomNavigationAction style={{color: "white"}} label="TV Series" icon={<TvIcon/>} />
        <BottomNavigationAction style={{color: "white"}} label="Search" icon={<SearchIcon/>} />
    </BottomNavigation>
  )
}
