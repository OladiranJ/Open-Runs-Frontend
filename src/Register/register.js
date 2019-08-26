// Imports

import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'


// ------------------------------------------------------------------------------------------------------

// Register Class




class Register extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        email:          '',
        username:       '',
        password:       '',
        confirmPass:    '',
        profpic:        '',
        city:           '',
        state:          '',
        message:        '',
        height    :     '',
        weight    :     '',
        primary   :     '',
        secondary :     '',
        tertiary  :     '',
        priPos    :     '',
        secPos    :     '',
        homepark:       '',
        parks:          ''

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
        console.log(this.state)
        const data  = new FormData()
        // data.append('email',        this.state.email)
        // data.append('username',     this.state.username)
        // data.append('password',     this.state.password)
        // data.append('confirmPass',  this.state.confirmPass)
        // data.append('city',         this.state.city)
        // data.append('state',        this.state.state)

        for (let key in this.state){
            data.append(`${key}`, this.state[`${key}`])
        }

        console.log(data.entries(), ' this is data')
        for (let pair of data.entries()){
            console.log(pair[0]  ,', ', pair[1])
        }

        // this.props.history.push('/register/vitals')

        const registerCall  = this.props.register(data)

        registerCall.then((data) => {
            if(data.status.message === "Success"){
                this.props.history.push('/register/vitals')
              } else {
                this.setState({
                    message: 'Error: Email already registered to existing member or username already taken.'
                })
              }
        })

    }

    // --------------------------------------------- render ---------------------------------------------

    render () {

        return(

            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <Header as='h2' textAlign='center'>
                        Register
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            {this.state.message}
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Email:' icon='mail' iconPosition='left' placeholder='email' name='email' onChange={this.handleChange} value={this.state.email} />
                                <Form.Input fluid label='Password:' icon='lock' iconPosition='left' type='password' placeholder='password' name='password' onChange={this.handleChange} value={this.state.password} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Username:' icon='user' iconPosition='left' placeholder='username' name='username' onChange={this.handleChange} value={this.state.username} />
                                <Form.Input fluid label='Confirm Password:' icon='lock' iconPosition='left' type='password' placeholder='confirm password' name='confirmPass' onChange={this.handleChange} value={this.state.confirmPass} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='City:' icon='building' iconPosition='left' placeholder='city' name='city' onChange={this.handleChange} value={this.state.city} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='State:' icon='globe' iconPosition='left' placeholder='state' name='state' onChange={this.handleChange} value={this.state.state} />
                            </Form.Group>
                            <Button fluid size='large' type='submit'>Register Hooper</Button>
                            <Message>
                                Already a Member?   <Link to='/'>Login</Link>
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


export default Register