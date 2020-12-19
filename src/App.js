import React, { useState } from 'react'
import Tachyons from 'tachyons'
import Home from './components/Home'
import Cakes from './components/Cakes'
import Pies from './components/Pies'
import Contact from './components/Contact'
import Donuts from './components/Donuts.js'
import Nav from './components/Nav'
import './App.css'

const App = () => {
  const [route, setRoute] = useState('')
  return (
    <div className='App'>
      <Nav setRoute={setRoute} />
      {route === 'donuts' ? (
        <Donuts />
      ) : route === 'cakes' ? (
        <Cakes />
      ) : route === 'pies' ? (
        <Pies />
      ) : route === 'contact' ? (
        <Contact />
      ) : (
        <Home />
      )}
      <footer
        className='ma0 tc h3 f3 footer f4-m'
        style={{ background: '#e4d1b2' }}
      >
        <p className='ma0'>Empire Donuts | +1.250.590.3865 Victoria, BC</p>
      </footer>
    </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       route: 'home',
//     }
//   }

//   onRouteChange = route => {
//     this.setState({ route: route })
//   }

//   render() {
//     return (
// <div className='App'>
//   <Nav onRouteChange={this.onRouteChange} />
//   {this.state.route === 'donuts' ? (
//     <Donuts />
//   ) : this.state.route === 'cakes' ? (
//     <Cakes />
//   ) : this.state.route === 'pies' ? (
//     <Pies />
//   ) : this.state.route === 'contact' ? (
//     <Contact />
//   ) : (
//     <Home />
//   )}
// </div>
//     )
//   }
// }

export default App
