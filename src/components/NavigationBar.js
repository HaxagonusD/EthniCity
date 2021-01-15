import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavMenuHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='partners'
                    active={activeItem === 'partners'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="login"
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link}
                        to="signup"
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}