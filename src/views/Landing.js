import React from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import person_1 from './img/person-nappy-800.jpg'; // Tell webpack this JS file uses this image
import person_2 from './img/person-daniel-800.jpg'; // Tell webpack this JS file uses this image
import person_3 from './img/person-mike-800.jpg'; // Tell webpack this JS file uses this image

function Landing() {
  return (<div>

    <div className="main-container">
      <div className="home-jumbotron">
        <h1>EthniCity</h1>
        <p className="lead">Build your personal brand</p>
        <div><Link to="/signup"><button className="ui fade animated button"><div className="visible content">Upload your resume</div><div className="hidden content">Register</div></button></Link></div>
      </div>
    </div>

    <div className="partners">
      <p>
        Our partners are leading change with their commitment to diversity and inclusion in the workforce.
      </p>
    </div>

    <div className="hiring-process-container callout-banner p-5">
      <h4>Hiring Process</h4>
      <h2>How It <span>Works</span></h2>
      <div className="how-it-works">
        <div>
          <div className="col-icon"><i aria-hidden="true" className="hand point down outline huge icon"></i></div>
          <h3>Register</h3>
          <p className="description">A space for employers to find diverse individuals</p>
        </div>
        <div>
          <div className="col-icon"><i aria-hidden="true" className="save outline huge icon"></i></div>
          <h3>save &amp; apply</h3>
          <p className="description">Individuals to build their Personal Brand</p>
        </div>
        <div>
          <div className="col-icon"><i aria-hidden="true" className="search huge icon"></i></div>
          <h3>Employers Find You</h3>
          <p className="description">Employers will be able to find you!</p>
        </div>
      </div>
    </div>

    <div className="story-highlight callout-banner bg-grey p-5">
      <h4>What Say Our Candidates</h4>
      <h2>Our Success <span>Stories</span></h2>
      <div className="candidates col-grid pt-5">
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_1} /></div><div className="content"><div className="header">Tim Scott</div><div className="meta">Political Science</div><div className="description">Tim is a Political Science with a Bachelor of Arts.</div></div></div>
        </div>
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_2} /></div><div className="content"><div className="header">Carla R Calderon</div><div className="meta">Web Researcher</div><div className="description">Carla is a freelance Web Research with 5 years experience.</div></div></div>
        </div>
        <div className="candidates-col">
          <div className="ui card"><div className="image"><img src={person_3} /></div><div className="content"><div className="header">Mike Xiu</div><div className="meta">Data Science Fellow</div><div className="description">Mike is a Data Science Fellow with a Bachelor of Science.</div></div></div>
        </div>
      </div>
    </div>

  </div>
  );

}

export default Landing;
