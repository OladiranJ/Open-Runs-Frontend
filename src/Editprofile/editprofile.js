// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'


// ------------------------------------------------------------------------------------------------------

// Edit Profile Class



class Edit extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        username:   '',
        city:       '',
        state:      ''

    }

    // --------------------------------------------- render ---------------------------------------------

    render () {

        return (

            <Navbar />

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Edit