import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Registration from "./views/Registration";
import ResumeForm from "./views/ResumeForm";
import SearchEngine from "./views/SearchEngine";

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}
export default App;
