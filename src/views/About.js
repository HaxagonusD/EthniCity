import { Container, List, Image } from "semantic-ui-react";


function About() {
    return (<div>
        <Container fluid className="about secondary-banner">
            <div className="ui large breadcrumb"><a className="section">Home</a><i aria-hidden="true" className="right angle icon divider"></i><a className="section">About</a></div>
            <h1>Mission Statement</h1>
            <p>Ethnicity's mission is to facilitate job searches for minority ethnic group candidates. As a diverse team, we understand what candidates.  </p>
            <p>By submitting your resume ONCE, employers will be able to find you.</p>
        </Container>
        {/* <Container>
            <h2>Mission Statement</h2>
            <p>Ethnicity's mission is to facilitate job searches for minority ethnic group candidates. As a diverse team, we understand what candidates.  </p>
            <p>By submitting your resume ONCE, employers will be able to find you.</p>
        </Container> */}
        <Container className="pt-5">
            <List>
                <List.Item>
                    <List.Header>What's the name of your project?</List.Header>EthniCity
      </List.Item>
                <List.Item>
                    <List.Header>What was your idea behind the project?</List.Header>
        Try to keep it short and sweet.:
Minority Talent sourcing tool to help with unemployment— Instead of you having to apply to jobs- we want jobs to apply to you.
      </List.Item>
                <List.Item>
                    <List.Header>Can you list the members of your project, including yourself?</List.Header>

                    <List horizontal>
                        <List.Item>
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/tom.jpg' />
                            <List.Content>
                                <List.Header>Julian Quezada</List.Header>
        Web Developer Fellow
      </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                            <List.Content>
                                <List.Header>Judi Desire</List.Header>
        Data Science Fellow
      </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/elyse.png' />
                            <List.Content>
                                <List.Header>Clariza Mayo</List.Header>
        Data Science Fellow
      </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                            <List.Content>
                                <List.Header>Rakhshanda Mirza</List.Header>
        Data Science Fellow
      </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                            <List.Content>
                                <List.Header>Juan Peralta</List.Header>
        Data Science Fellow
      </List.Content>
                        </List.Item>
                    </List>
                </List.Item>
                <List.Item>
                    <List.Header>Please provide a link to your demo, if you have one:
GitHub?</List.Header>
                    <a href="https://github.com/HaxagonusD/ValTech-Social-Impact" target="_blank">https://github.com/HaxagonusD/ValTech-Social-Impact</a>

                </List.Item>
                <List.Item>
                    <List.Header>Please provide a link to your demo, if you have one:
Canva?</List.Header>
                    <a href="https://www.canva.com/design/DAETRULz1v0/ubS3eFO2UycsTz2u3_DzYg/edit" target="_blank">https://www.canva.com/design/DAETRULz1v0/ubS3eFO2UycsTz2u3_DzYg/edit</a>

                </List.Item>
            </List>

        </Container>
    </div>)
}

export default About;
