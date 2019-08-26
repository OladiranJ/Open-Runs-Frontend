// Import

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Menu, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


// ------------------------------------------------------------------------------------------------------

// Navbar


class Navbar extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        activeItem: 'home'

    }

    // --------------------------------------- handle item click -----------------------------------------

    
    handleItemClick = (e, {name}) => this.setState({ activeItem: name })


    // --------------------------------------------- render ----------------------------------------------

    render () {

        const { activeItem } = this.state

        return (

            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item>
                        <div>img</div>
                    </Menu.Item>
                    <Menu.Item 
                        as={ Link } to='/home'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item 
                        as={ Link } to='/profile'
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item 
                        as={ Link } to='/savedparks'
                        name='saved parks'
                        active={activeItem === 'saved parks'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item 
                        as={ Link } to='/findplayers'
                        name='find players'
                        active={activeItem === 'find players'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item 
                        name='about us'
                        active={activeItem === 'about us'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Navbar