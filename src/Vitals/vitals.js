// Imports

import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import { async } from 'q';



// ------------------------------------------------------------------------------------------------------

// Dropdown Menu Options




const heights = [

    { key:  '1', text:   "5'4",     value:  "5'4" },
    { key:  '2', text:   "5'5",     value:  "5'5" },
    { key:  '3', text:   "5'6",     value:  "5'6" },
    { key:  '4', text:   "5'7",     value:  "5'7" },
    { key:  '5', text:   "5'8",     value:  "5'8" },
    { key:  '6', text:   "5'9",     value:  "5'9" },
    { key:  '7', text:   "5'10",    value:  "5'10" },
    { key:  '8', text:   "5'11",    value:  "5'11" },
    { key:  '9', text:   "6'0",     value:  "6'0" },
    { key:  '0', text:   "6'1",     value:  "6'1" },
    { key:  'z', text:   "6'2",     value:  "6'2" },
    { key:  'y', text:   "6'3",     value:  "6'3" },
    { key:  'x', text:   "6'4",     value:  "6'4" },
    { key:  'w', text:   "6'5",     value:  "6'5" },
    { key:  'v', text:   "6'6",     value:  "6'6" },
    { key:  'u', text:   "6'7",     value:  "6'7" },
    { key:  't', text:   "6'8",     value:  "6'8" },
    { key:  's', text:   "6'9",     value:  "6'9" },
    { key:  'r', text:   "6'10",    value:  "6'10" },
    { key:  'q', text:   "6'11",    value:  "6'11" },
    { key:  'p', text:   "7'0",     value:  "7'0" },
    { key:  'o', text:   "7'1",     value:  "7'1" },
    { key:  'n', text:   "7'2",     value:  "7'2" }

]

const weights = [

    { key:  'a', text:   '120 - 130 lbs',   value:  '120 - 130 lbs' },
    { key:  'b', text:   '130 - 140 lbs',   value:  '130 - 140 lbs' },
    { key:  'c', text:   '140 - 150 lbs',   value:  '140 - 150 lbs' },
    { key:  'd', text:   '150 - 160 lbs',   value:  '150 - 160 lbs' },
    { key:  'e', text:   '160 - 170 lbs',   value:  '160 - 170 lbs' },
    { key:  'f', text:   '170 - 180 lbs',   value:  '170 - 180 lbs' },
    { key:  'g', text:   '180 - 190 lbs',   value:  '180 - 190 lbs' },
    { key:  'h', text:   '190 - 200 lbs',   value:  '190 - 200 lbs' },
    { key:  'i', text:   '200 - 210 lbs',   value:  '200 - 210 lbs' },
    { key:  'j', text:   '210 - 220 lbs',   value:  '210 - 220 lbs' },
    { key:  'k', text:   '220 - 230 lbs',   value:  '220 - 230 lbs' },
    { key:  'l', text:   '230 - 240 lbs',   value:  '230 - 240 lbs' },
    { key:  'm', text:   '240 - 250 lbs',   value:  '240 - 250 lbs' },
    { key:  'n', text:   '250 - 260 lbs',   value:  '250 - 260 lbs' },
    { key:  'o', text:   '260 - 270 lbs',   value:  '260 - 270 lbs' }

]

const positions = [

    { key:  '1', text:   'PG',  value:  'PG' },
    { key:  '2', text:   'SG',  value:  'SG' },
    { key:  '3', text:   'SF',  value:  'SF' },
    { key:  '4', text:   'PF',  value:  'PF' },
    { key:  '5', text:   'C',   value:  'C' }

]

const skills = [

    { key:  'a', text:   'Passing and Dribbling',   value:  'Passing and Dribbling' },
    { key:  'b', text:   '3pt Shooting',            value:  '3pt Shooting' },
    { key:  'c', text:   'Shot-Creating',           value:  'Shot-Creating' },
    { key:  'd', text:   'Driving and Finishing',   value:  'Driving and Finishing' },
    { key:  'e', text:   'Defending',               value:  'Defending' },
    { key:  'f', text:   'Post-Scoring',            value:  'Post-Scoring' },
    { key:  'g', text:   'Rebounding',              value:  'Rebounding' }

]



// ------------------------------------------------------------------------------------------------------

// Vitals Class




class Vitals extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = {

        height:     '',
        weight:     '',
        priPos:     '',
        secPos:     '',
        primary:    '',
        secondary:  '',   
        tertiary:   ''

    }

    // ------------------------------------------ handleChange ------------------------------------------

    handleChange = (e, data) => {
        
        // console.log(e.target.children[0].innerText)
        console.log(data)
        
        this.setState({
            [data.name]: data.value
        })

    }

    // ------------------------------------------ handleSubmit ------------------------------------------

    handleSubmit = async (e) => {

        e.preventDefault()
        console.log(this.state)

        const data  = new FormData()
        data.append('height',       this.state.height)
        data.append('weight',       this.state.weight)
        data.append('priPos',       this.state.priPos)
        data.append('secPos',       this.state.secPos)
        data.append('primary',     this.state.primary)
        data.append('secondary',     this.state.secondary)
        data.append('tertiary',    this.state.tertiary)

        console.log(data.entries(), ' this is data')
        for (let pair of data.entries()){
            console.log(pair[0]  ,', ', pair[1])
        }

        try {

            const vitalsResponse    = await fetch(`process.env.REACT_APP_BACKEND_URL/user/${data.id}`,  {
                method:         'POST',
                credentials:    'include',
                body:           data,
                headers:        {
                    'enctype':  'multipart/form-data'
                }
            })
            
            const parsedResponse    = await vitalsResponse.json()

            this.setState({
                ...parsedResponse.data,
                loading:    false
            })
            return parsedResponse
            
        } catch (error) {

            console.log(error)
            
        }

    }

    // --------------------------------------------- render ---------------------------------------------

    render () {

        return (

            <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <Header as='h2' textAlign='center'>
                        Enter Your Vitals
                    </Header>
                    <Form>
                        <Segment stacked>
                            <Form.Group widths='equal'>
                                <Form.Select fluid name='height' label='Height:' options={heights} placeholder='choose height' value={this.state.height} onChange={(e, data) => this.handleChange(e, data)} />
                                <Form.Select fluid name='primary' label='Primary Skill:' options={skills} placeholder='choose skill' value={this.state.primary} onChange={(e, data) => this.handleChange(e, data)} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select fluid name='weight' label='Weight:' options={weights} placeholder='choose weight' value={this.state.weight} onChange={(e, data) => this.handleChange(e, data)} />
                                <Form.Select fluid name='secondary' label='Secondary Skill:' options={skills} placeholder='choose skill' value={this.state.secondary} onChange={(e, data) => this.handleChange(e, data)} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Select fluid name='priPos' label='Primary Position:' options={positions} placeholder='choose position' value={this.state.priPos} onChange={(e, data) => this.handleChange(e, data)} />
                                <Form.Select fluid name='tertiary' label='Tertiary Skill:' options={skills} placeholder='choose skill' value={this.state.tertiary} onChange={(e, data) => this.handleChange(e, data)} />
                            </Form.Group>
                            <Form.Group widths='two'>
                                <Form.Select fluid name='secPos' label='Secondary Position:' options={positions} placeholder='choose position' value={this.state.secPos} onChange={(e, data) => this.handleChange(e, data)} />
                            </Form.Group>
                                <Button primary compact widths='three' size='large' type='submit' onClick={this.handleSubmit}>Start Hoopin!</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>

        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default Vitals