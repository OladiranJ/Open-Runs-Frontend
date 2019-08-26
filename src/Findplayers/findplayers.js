// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'
import SearchBar from '../Searchbar/searchbar'


// ------------------------------------------------------------------------------------------------------

// Find Players Class



class FindPlayers extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        username:   '',
        city:       '',
        state:      ''

    }

    // --------------------------------------------- render ---------------------------------------------

    render () {

        return (

            <main>
                <Navbar />
                <div>
                    <SearchBar />
                </div>
            </main>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default FindPlayers