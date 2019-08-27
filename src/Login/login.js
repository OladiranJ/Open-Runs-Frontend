// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


// ------------------------------------------------------------------------------------------------------

// Login Class




class Login extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {
        
        email:      '',
        password:   '',
        message:    ''

    }

    // ------------------------------------------ handleChange ------------------------------------------

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }

    // ------------------------------------------ handleSubmit ------------------------------------------

    handleSubmit = async (e) => {

        e.preventDefault()

        const login = this.props.logIn(this.state)

        login.then((data) => {
            console.log(data)
            if (data.status.message === 'Success') {
                this.props.history.push('/home')
            } else {
                this.setState({
                    message: 'Email or Password Incorrect'
                })
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    // ------------------------------------------ class render ------------------------------------------

    render () {

        return(

            <Grid   textAlign='center'  verticalAlign='middle'  style={ {height: '100vh'} } >
                <Grid.Column    style={ {maxWidth: 450} } >
                    <Header as='h2' textAlign='center'>
                        Login
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            {this.state.message}
                            Email:
                            <Form.Input fluid icon='mail'   iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange} />
                            Password:
                            <Form.Input fluid icon='lock'   iconPosition='left' placeholder='password'  type='password' name='password' onChange={this.handleChange} />
                            <Button fluid size='huge'  type='submit'>Login</Button>
                            <Message>
                                Not a member? <Link to='/register'>Register</Link>
                            </Message>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Login