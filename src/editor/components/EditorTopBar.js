import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  Tooltip,
  Chip,
  Button,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListIcon from "@material-ui/icons/List";
import { NavStyles } from "../styles/EditorLayout";
import clsx from "clsx";
import { EditorStylesContext } from "../Editor";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  appBar: {
    backgroundColor: "#1A1829",
    "& .Mui-selected": {
      backgroundColor: "#262533",
    },
  },
  tab: {},
  name: {
    marginTop: theme.spacing(2),
  },
  difficulty: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(2),
    display: "inline-block",
    backgroundColor: "#008529",
  },
  headers: {
    fontWeight: "bold",
  },
  question: {
    fontWeight: "lighter",
  },
  nav: {
    "& .MuiMenu-list": {
      backgroundColor: '#1A1829',
      color: '#fff'
    },
    "& .MuiOutlinedInput-root": {
      height: "50px",
    },
    "& *:focus": { outline: "none !important" },
    "& .MuiSelect-iconOutlined": {
      color: "#fff",
    },
    "& .MuiInputBase-root": {
      "& .Mui-focused": {
        border: "none !important",
      },
      color: "#fff",
      backgroundColor: "#1A1829",
      border: "none",
    },
    "& .MuiSelect-root": {
      border: "none",
    },
    width: "100%",
    borderRadius: "0",
  },
  grid: {
    marginLeft: "10px",
  },
  timer: {
    position: "absolute",
    right: "2vh",
    top: "1vh",
    height: "5vh",
    width: "100%",
    backgroundColor: "#1A1829 !important",
  },
}));

const EditorTopBar = (props) => {
  const classes = useStyles();
  const { editorStyles, setEditorStyles } = React.useContext(
    EditorStylesContext
  );
  const handleChange = (event) => {
    //console.log(event);
    const name = event.target.name;
    setEditorStyles(event);
  };
  return (
    <NavStyles>
      <Grid container>
        <Grid className="nav-element" item lg={1} xs={6}>
          <img src="./google2.0.0.webp" alt="google" />
        </Grid>
        <Grid className={classes.grid} item lg={1} xs={6}>
          <FormControl variant="outlined" className={classes.nav}>
            {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
            <Select
              id="demo-simple-select-outlined"
              value={editorStyles.language}
              onChange={handleChange}
              name="language"
            >
              <MenuItem value={54}>C++</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.grid} item lg={1} xs={6}>
          <FormControl variant="outlined" className={classes.nav}>
            {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
            <Select
              id="demo-simple-select-outlined"
              value={editorStyles.fontSize}
              onChange={handleChange}
              name="fontSize"
            >
              <MenuItem value={15}>15px</MenuItem>
              <MenuItem value={16}>16px</MenuItem>
              <MenuItem value={17}>17px</MenuItem>
              <MenuItem value={18}>18px</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.grid} item lg={1} xs={6}>
          <FormControl variant="outlined" className={classes.nav}>
            {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
            <Select
              id="demo-simple-select-outlined"
              value={editorStyles.theme}
              onChange={handleChange}
              name="theme"
            >
              <MenuItem value={"monokai"}>Monokai</MenuItem>
              <MenuItem value={"material"}>Material</MenuItem>
              <MenuItem value={"midnight"}>Midnight</MenuItem>
              <MenuItem value={"night"}>Night</MenuItem>
              <MenuItem value={"solarized"}>Solarized</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid className={classes.timer} item lg={2} xs={12}>
          <Button
            startIcon={<ListIcon />}
            className={classes.nav}
            variant="contained"
          >
            Questions
          </Button>
        </Grid>
      </Grid>
    </NavStyles>
  );
};

export default EditorTopBar;
