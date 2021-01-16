import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Registration from "./views/Registration";
import ResumeForm from "./views/ResumeForm";
import SearchEngine from "./views/SearchEngine";
import About from "./views/About";
import Login from "./views/Login";
import Signup from "./views/Signup";
import LoginRegister from "./views/LoginRegister";

import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [resumeFormWorkExperience, setResumeFormWorkExperience] = useState([]);
  const [resumeFormVolunteer, setResumeFormVolunteer] = useState([]);
  const [resumeFormProject, setResumeFormProject] = useState([]);
  const [resumeFormEducation, setResumeFormEducation] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Container fluid>
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
            <ResumeForm
              resumeFormWorkExperience={resumeFormWorkExperience}
              setResumeFormWorkExperience={setResumeFormWorkExperience}
              resumeFormVolunteer={resumeFormVolunteer}
              setResumeFormVolunteer={setResumeFormVolunteer}
              resumeFormProject={resumeFormProject}
              setResumeFormProject={setResumeFormProject}
              resumeFormEducation={resumeFormEducation}
              setResumeFormEducation={setResumeFormEducation}
            />
          </Route>
          <Route path="/search">
            <SearchEngine users={users} setUsers={setUsers} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login-register">
            <LoginRegister />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}
export default App;
