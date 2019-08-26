// Imports

import _ from 'lodash'
import faker    from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { equal } from 'assert';


// ------------------------------------------------------------------------------------------------------

// Initial State and Source

const initialState  = {

    isLoading:  false,
    results:    [],
    value:      ''

}

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
  }))


// ------------------------------------------------------------------------------------------------------

// Search Bar Class



class SearchBar extends Component {

    // --------------------------------------------- state ----------------------------------------------

    state = initialState

    // -------------------------------------- handleResultSelect ---------------------------------------


    handleResultSelect  = (e, { result }) => this.setState({value:  result.title})


    // -------------------------------------- handleResultSelect ---------------------------------------

    handleSearchChange  = (e, { value }) => {

        this.setState({
            isLoading:  true, value
        })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re        = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch   = result => re.test(result.title)

            this.setState({
                isLoading:  false,
                results:    _.filter(source, isMatch),
            })
        }, 300)

    }

    // -------------------------------------------- render ----------------------------------------------

    render () {

        const { isLoading, value, results } = this.state

        return (
            <Grid textAlign='center'  verticalAlign='middle' style={ {height: '50vh',} }>
                <Grid.Column style={ {maxWidth: 650, fontSize: 2 + 'em'} }>
                    <Search 
                        fluid
                        placeholder='Search...'
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                </Grid.Column>
            </Grid>
        )

    }

}




// ------------------------------------------------------------------------------------------------------

// Exports


export default SearchBar