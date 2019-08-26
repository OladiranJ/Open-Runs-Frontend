// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'


// ------------------------------------------------------------------------------------------------------

// Profile Page Class



class Profile extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        username:   '',
        city:       '',
        state:      ''

    }

    // --------------------------------------------- render ---------------------------------------------

    render () {

        return (

            <div>
                <Navbar />
    
                <main>This is your Profile</main>
            </div>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Profile