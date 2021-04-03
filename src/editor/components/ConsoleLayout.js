import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
  TextField,
} from "@material-ui/core";
//import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { ConsoleMain } from "../styles/EditorLayout";
import clsx from "clsx";

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
    zIndex: theme.zIndex.AppBar + 1
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
}));

const ConsoleLayout = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [testcase, setTestcase] = React.useState("")
  const difficulty = "EASY";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ConsoleMain className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          className={classes.tab}
          indicatorColor={"none"}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Test Cases" />
          <Tab label="Output" />
          <Button className="code-submit" onClick={() => props.submitCode({ variables: { input: { questionId: "ques_a1c9e586-4f79-46a0-bf60-1f17e6c70a7b", sourceCode: props.solution, languageId: 54 }}})}>Submit</Button>
        </Tabs>
      </AppBar>
      <Box p={2}>
        {value === 0 &&
          <TextField id="outlined-basic" multiline className="testcase" value={testcase} onChange={event => setTestcase(event.target.value)} variant="outlined" />
        }
      </Box>
    </ConsoleMain>
  );
};

export default ConsoleLayout;
