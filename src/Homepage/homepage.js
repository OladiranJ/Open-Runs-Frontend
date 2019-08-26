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
                        <Header as='h3' textAlign='left'>
                            Highest Rated Hoopers
                        </Header>
                        <List ordered>
                            <List.Item>
                                <Image avatar src='open-runs-frontend/public/bonecollector.jpg' />
                                <List.Content>
                                    <List.Header>Bone Collector</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Skip To My Lou</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>Hot Sauce</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Air Up There</List.Header>
                                    <Rating defaultRating={5} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar />
                                <List.Content>
                                    <List.Header>The Professor</List.Header>
                                    <Rating defaultRating={4} maxRating={5} disabled />
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={8} computer={8}>
                        <Header as='h3' textAlign='left'>
                            Open Runs Feed
                        </Header>
                    </Grid.Column>
                    <Grid.Column mobile={4} tablet={4} computer={4}>
                        <Header as='h3' textAlign='left'>
                            Highest Rated Parks
                        </Header>
                    </Grid.Column>
                </Grid>
            </div>
        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Homepage