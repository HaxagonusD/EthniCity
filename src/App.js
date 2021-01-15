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

import { useState } from "react";


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [resumeFormWorkExperience, setResumeFormWorkExperience] = useState([]);
  const [resumeFormVolunteer, setResumeFormVolunteer] = useState([]);
  const [resumeFormProject, setResumeFormProject] = useState([]);
  const [resumeFormEducation, setResumeFormEducation] = useState([]);

  //What needs to happen?
  //The user submits the form
  //its get's parsed into something that is easy to work with web it comes to viewing <---- We are here
  //gets store in this use state
  //We have a mechanism for  showing different users maybe it'll be the parameters
  //We use big list of users for the search and for filtering out
  //The signin fomr just takes you to the profile of a predefined user
  //
  //What are the others doing?
  //Creating a design which will be turned into css
  //Creating the static content for anything that is static in ths app such as the landing page and signin form
  //Presntation materials and getting the identity of this product down
  //
  //how will the data be filterable?
  //I can just show all the data in the search it doesn't have to be filterable
  //
  //We can say something like using keywords to filter candidates.
  //We can say that the app, using gpt-3, it can summarize candidates based on their resume for easy finding
  //
  //What is the demo going to be?
  //Showing off the awesome design
  //Show the suser flow and showing what it would kinda look like to use the app from both the appliers' perspective and the employer perspective

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
