import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Registration from "./views/Registration";
import ResumeForm from "./views/ResumeForm";
import SearchEngine from "./views/SearchEngine";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
  return (
    <Router>
      <Container>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/resume">
            <ResumeForm />
          </Route>
          <Route path="/search">
            <SearchEngine />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}
export default App;
