import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
export default class NavMenuFooter extends Component {
    render() {

        return (
            <Container className="footer p-5" textAlign="center">
                Copyright EthniCity &copy; 2021. All Rights Reserved
            </Container>
        )
    }
}