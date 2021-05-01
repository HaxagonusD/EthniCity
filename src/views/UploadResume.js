import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


function UploadResume() {
	return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Now, upload your resume
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We will save your resume to the candidate database. If there's a match between your skillset
          and an opening job, the employers will have access to your resume.
        </p>
        <Button as='a' size='large'>
          upload
        </Button>
        <Button as='a' size='large'>
         <a href="/dashBoard">skip</a>
        </Button>

      </Container>
    </Segment>
	)
}


export default UploadResume;
