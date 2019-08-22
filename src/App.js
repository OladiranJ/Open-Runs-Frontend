// Imports

import React, { Component } from 'react'
import logo                 from './logo.svg'
import Login                from './Login/login'
import Register             from './Register/register'
import { Route, Switch }    from 'react-router-dom'
import './App.css'
import { async } from 'q';


// ------------------------------------------------------------------------------------------------------

// 404 Message

const My404 = () => {

  return (
    <div>
      You are lost my guy
    </div>
  )

}


// ------------------------------------------------------------------------------------------------------

// App Class




class App extends Component {

  // ---------------------------------------------- state -----------------------------------------------

  state = {

    username: '',
    email:    '',
    image:    '',
    loading:  true

  }

  // ---------------------------------------------- logIn -----------------------------------------------


  logIn = async (loginInfo) => {

    try {
      
    } catch (error) {
      
    }

  }

  // --------------------------------------------- register ---------------------------------------------

  register  = async (data) => {

    try {
      
    } catch (error) {
      
    }

  }

  // ---------------------------------------------- render ----------------------------------------------

  render () {

    return (
      <main>
        Wassup My Guy!
        <Switch>
          <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
          <Route exact path='/register' render={(props) => <Register {...props} register={this.register} />} />
          <Route component={My404} />
        </Switch>
      </main>
    )
    
  }

}


// ------------------------------------------------------------------------------------------------------

// Exports

export default App;
