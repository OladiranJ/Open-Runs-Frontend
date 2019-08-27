// Imports

import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input, List, Rating} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/navbar'


// ------------------------------------------------------------------------------------------------------

// Homepage Class



class Homepage extends Component {

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
    
                <Grid celled='internally'>
                    <Grid.Column mobile={4} tablet={4} computer={4}>
                        <Header as='h2' textAlign='left'>
                            Highest Rated Hoopers
                        </Header>
                        <List ordered>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Bone Collector</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Skip To My Lou</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Hot Sauce</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Air Up There</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Professor</List.Header>
                                    <Rating defaultRating={4} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Header as='h2' textAlign='left'>
                            Open Runs Feed
                        </Header>
                    </Grid.Column>
                    <Grid.Column mobile={4} tablet={4} computer={4}>
                        <Header as='h2' textAlign='left'>
                            Highest Rated Parks
                        </Header>
                        <List ordered>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Rucker Park</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                    Harlem, NY
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Venice Beach</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                    Venice, CA
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Cage</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>South Beach</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item style={ {fontSize: 1.3 + 'em', padding: 1.2 + 'em'} }>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Loop</List.Header>
                                    <Rating defaultRating={4} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </div>
        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Homepage