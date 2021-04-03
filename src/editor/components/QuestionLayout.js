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
} from "@material-ui/core";
import { QuestionMain } from "../styles/EditorLayout";
import clsx from "clsx";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { useQuery, gql } from "@apollo/client";

const GET_QUESTION_LIST = gql`
  query ($slug: String!){
    getQuestionBySlug(slug : $slug){
      _id
      title
      titleSlug
      isFree
      description
    }
  }
`;

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
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}
const QuestionLayout = (props) => {
  const classes = useStyles();
  const id = props.id ? props.id : "longest-common-subsequence"
  const { data, loading, error } = useQuery(GET_QUESTION_LIST, {variables: { slug: id } });
  const [value, setValue] = React.useState(0);
  //console.log(error)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <QuestionMain className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          //   variant="fullWidth"
          className={classes.tab}
          indicatorColor={"none"}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Problem" />
          <Tab label="Scratchpad" />
          <Tab label="Our Solution" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      {value === 0 && (
        <Box p={3}>
          <Grid container spacing={1}>
            {data ? <QuestionDetails data={data.getQuestionBySlug} /> : <div>Loadingg...</div>}
          </Grid>
        </Box>
      )}
    </QuestionMain>
  );
};

const QuestionDetails = ({ data }) => {
  const classes = useStyles();
  const difficulty = "EASY";
  const questionLine = ReactHtmlParser('<p>' + data.description + '</p>');
  //console.log(questionLine)
  //const questionText = questionLine.replace(/\n/g, "<br />")
  const questionText = document.createElement("div");
  questionText.innerHTML = questionLine;

  return (
    <>
      <Grid item xs={2}>
        <Typography className={classes.headers} variant="body2">
          Difficulty:{" "}
          {
            <Tooltip title="Difficulty">
              <span
                className={
                  clsx[(difficulty.toLocaleLowerCase(), classes.difficulty)]
                }
                label={difficulty}
              ></span>
            </Tooltip>
          }
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.headers} variant="body2">
          Category:{" "}
          {
            <Tooltip title="Difficulty">
              <span
                className={
                  clsx[(difficulty.toLocaleLowerCase(), classes.difficulty)]
                }
                label={difficulty}
              ></span>
            </Tooltip>
          }
        </Typography>
      </Grid>
      <Grid container className={classes.name}>
        <Grid item xs={6}>
          <Typography variant="h5">{data.title}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box p={0}>
          {/* <Typography className={classes.question} variant="body2"> */}
          {/* <div dangerouslySetInnerHTML={{ __html: questionLine }}></div> */}
          {<p>{questionLine}</p>}
          {/* </Typography> */}
        </Box>
      </Grid>
    </>
  );
};
export default QuestionLayout;
