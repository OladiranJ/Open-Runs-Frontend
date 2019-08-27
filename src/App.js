// Imports

import React, { Component } from 'react'
import logo                 from './logo.svg'
import Login                from './Login/login'
import Register             from './Register/register'
import Vitals               from './Vitals/vitals'
import Homepage             from './Homepage/homepage'
import Profile              from './Profile/profile'
import Edit                 from './Editprofile/editprofile'
import SavedParks           from './Savedparks/savedparks'
import FindPlayers          from './Findplayers/findplayers'
import { Route, Switch }    from 'react-router-dom'
import { async }            from 'q'
import './App.css'

console.log(process.env)

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
    id: '',
    loading:  true

  }

  // ---------------------------------------------- logIn -----------------------------------------------


  logIn = async (loginInfo) => {

    try {

      const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();


      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse
      
    } catch (error) {

      return error
      
    }

  }

  // --------------------------------------------- register ---------------------------------------------

  register  = async (data) => {
      try {
        console.log('registering')
        console.log(data)
       const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
         method: 'POST',
         credentials: 'include',
         body: data,
         headers: {
           'enctype': 'multipart/form-data'
         }
       })
       console.log('finished fetching')
       const parsedResponse = await registerResponse.json();
 
       console.log(parsedResponse)
 
       this.setState({
         ...parsedResponse.data,
         loading: false
       })
       return parsedResponse;
 
     } catch (err) {
       console.log(err)
     }
   }

  // --------------------------------------------- register ---------------------------------------------

  submitVitals = async (data) => {

    try {
      
    } catch (error) {
      
    }

  }

  updateUser = (user)=>{
    this.setState({
      ...user,
      loading: false
    })
  }

  // ---------------------------------------------- render ----------------------------------------------

  render () {

    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <Login {...props} logIn={this.logIn} />} />
          <Route exact path='/register' render={(props) => <Register {...props} register={this.register} />} />
          <Route exact path='/register/vitals' render={(props) => <Vitals {...props} submitVitals={this.submitVitals} id={this.state.id} updateUser={this.updateUser}/>}/>
          <Route exact path='/home' render={(props) => <Homepage />} />
          <Route exact path='/profile' render={(props) => <Profile />} />
          <Route exact path='/profile/edit' render={(props) => <Edit />} />
          <Route exact path='/savedparks' render={(props) => <SavedParks />} />
          <Route exact path='/findplayers' render={(props) => <FindPlayers />} />
          <Route component={My404} />
        </Switch>
      </main>
    )
    
  }

}


// ------------------------------------------------------------------------------------------------------

// Exports

export default App;
