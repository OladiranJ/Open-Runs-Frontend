// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'


// ------------------------------------------------------------------------------------------------------

// Saved Parks Class



class SavedParks extends Component {

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
    
                <main>These are your saved parks</main>
            </div>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default SavedParks