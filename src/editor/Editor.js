import React, { createContext } from "react";
import EditorMain from "./components/EditorMaster";
import EditorTopBar from "./components/EditorTopBar";
import { Main } from "./styles/Main";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  createHttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useQuery, gql } from "@apollo/client";
import { error_types } from './utils/utils'
import { useParams } from "react-router";

const LOAD_USERS = gql`
  query AppQuery {
    getUser {
      _id
      email
    }
  }
`;

const initalEditorStyles = {
  language: 54,
  fontSize: 16,
  theme: "monokai",
}

export const EditorStylesContext = createContext();

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({uri: "http://13.59.182.15:4000/graphql", credentials: 'include'})]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function Editor(props) {
  console.log("props" , props)
  const { id } = useParams()
  return (
    <ApolloProvider client={client}>
      <AppComp id={id} />
    </ApolloProvider>
  );
}

function reducer(state, event) {
  const name = event.target.name;
  const newState = {...state, [name]: event.target.value}
  return newState
}

const AppComp = (props) => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const questionSlug = "longest-common-subsequence"
  console.log(questionSlug)
  const [email, setEmail] = React.useState(null);
  
  const [editorStyles, setEditorStyles] = React.useReducer(reducer,initalEditorStyles)
  
  if (loading) return <div>loading</div>;
  if(error) {
    console.log(error)
    if(error.message === "NetworkError when attempting to fetch resource.")
    return <div>Network Error</div>
    
    const errorMsg = JSON.parse(error.message).msg
    if(errorMsg == error_types.ERROR_UNAUTHENTICATED) {
      window.open("http://13.59.182.15:4000/auth/github");
      return <div>Wait</div>
    }
    return <div>Loading</div>
  }

  return (
    <Main>
      <EditorStylesContext.Provider value={{ editorStyles, setEditorStyles }}>
      <div className="row-options">
        <EditorTopBar />
      </div>
      <div className="row-editor">
        <EditorMain id={props.id} />
      </div>
      </EditorStylesContext.Provider>
    </Main>
  );
};

export default Editor;
