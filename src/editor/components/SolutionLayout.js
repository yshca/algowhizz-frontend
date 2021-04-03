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
} from "@material-ui/core";
import CodeEditor from "./CodeEditor";
import { SolutionMain } from "../styles/EditorLayout";
import clsx from "clsx";
import { EditorStylesContext } from '../Editor'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1A1829",
    "& .Mui-selected": {
      backgroundColor: "#262533",
    },
  },
  tab: {},
  box: {
    //flex: "1 1 100%",
    //overflow: "scroll",
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    //maxHeight: theme.spacing(10)
  },
}));

const SolutionLayout = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { editorStyles } = React.useContext(EditorStylesContext)
  const difficulty = "EASY";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //console.log(data, error)
  const useWindowSize = () => {
    const [width, setWidth] = React.useState(undefined);

    React.useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return width;
  }
  const width = useWindowSize();

  return (
    <SolutionMain className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          className={classes.tab}
          indicatorColor={"none"}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Your Solution" />
          <IconButton></IconButton>
          <Button className="code-run" onClick={() => props.submitCode({ variables: { input: { questionId: "ques_5e995045-acac-446d-a400-e37665b1e116", sourceCode: props.solution, languageId: 54 }}})}>{"RUN"}</Button>
        </Tabs>
      </AppBar>
      <Box className={"box"}>
        <CodeEditor
          height={props.dimensions.height}
          fontSize={editorStyles.fontSize}
          theme={editorStyles.theme}
          value={props.solution}
          onChange={props.onChange}
          displayName="Solution 1"
          language="cpp"
        />
      </Box>
    </SolutionMain>
  );
};

export default SolutionLayout;
