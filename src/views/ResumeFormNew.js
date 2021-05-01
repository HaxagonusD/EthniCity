import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Volunteer from "../components/Volunteer";
import Project from "../components/Project";
import { useForm } from "react-hook-form";
import parseResumeFormData from "../services/parseResumeFormData";
import postFormDataToServer from "../services/postFormDataToServer";

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Form,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


function ResumeFormNew(
{
  resumeFormWorkExperience,
  setResumeFormWorkExperience,
  resumeFormVolunteer,
  setResumeFormVolunteer,
  resumeFormProject,
  setResumeFormProject,
  resumeFormEducation,
  setResumeFormEducation,
}) {
  const { register, handleSubmit } = useForm();
  // Make a parser for this form's unstructured data
  const submitForm = (data) => {
    console.log(data);
    postFormDataToServer(parseResumeFormData(data));
  };

return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          First, complete the resume form
        </Header>
        <Form onSubmit={handleSubmit(submitForm)}>

                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  <a href='#'>Background Info</a>
                </Divider>

                <Form.Field>
                <label>First Name</label>
                  <input name="firstName" ref={register} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input name="lastName" ref={register} placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input name="email" ref={register} placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Gender</label>
                  <input name="gender" ref={register} placeholder="gender" />
                </Form.Field>
                <Form.Field>
                  <label>LGBTQ</label>
                  <input name="LGBTQ" ref={register} placeholder="LGBTQ" />
                </Form.Field>
                <Form.Field>
                  <label>Ethinicity</label>
                  <input name="ethnicity" ref={register} placeholder="ethnicity" />
                </Form.Field>


                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  <a href='#'>Work Experience</a>
                </Divider>


                <WorkExperience />


                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  <a href='#'>Project</a>
                </Divider>
                <Project />


                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  <a href='#'>Education</a>
                </Divider>
                <Education />

                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                  <a href='#'>Volunteer</a>
                </Divider>
                <Volunteer />
                
                <Divider
                  as='h4'
                  className='header'
                  horizontal
                  style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                </Divider>

        <Button type='submit'>save</Button>
        <Button> <a href="/uploadResume">continue</a> </Button>

        </Form>

      </Container>
    </Segment>
  )
}


export default ResumeFormNew;