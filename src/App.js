import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  useQuery
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import './scss/style.scss';
import Navbar from './Navbar/Navbar';
import { GET_USER } from './graphql/GET_USER';

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

//const ProfilePage = React.lazy(() => import('./profile/ProfilePage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const QuestionPage = React.lazy(() => import('./questions/QuestionPage'));
const EditorPage = React.lazy(() => import('./editor/Editor'));

export const loading = () => {
  return <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
}


const AppMaster = () => {
  const { error, load, data } = useQuery(GET_USER);

  if(load)
    return loading

  if(error) {
    if(error.message === "NetworkError when attempting to fetch resource.")
      return <div>Network Error</div>

    return loading
  }
  console.log("data", data)

  const user = data ? data : null
  const Home = user ? QuestionPage : loading
  const Editor = user ? EditorPage : loading

  return (
    <Router>
    <Navbar data={data}/>
          <React.Suspense fallback={loading}>
            {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route  path="/user" name="Profile" render={props => <ProfilePage {...props}/>} /> */}
            <Route path="/questions" name="Question" render={props => <QuestionPage {...props}/>} /> 
            <Route path="/question/:id" name="Question" render={props => <EditorPage {...props}/>} /> 
            <Route exact path="/" name="Home" render={props => <Home/>} /> 
        </React.Suspense>
    </Router>
  );
}

const App = () => (
  <ApolloProvider client={client}>
    <AppMaster/>
  </ApolloProvider>
)

export default App;

