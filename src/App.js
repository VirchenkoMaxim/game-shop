import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './reset.css'
import './App.scss'
import './bg.jpg'

import Header from './Header/Header'
import Goods from './Goods/Goods'

import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import GameProfile from './GameProfile/GameProfile'

import gameList from './json/gameList.json'
import genre from './json/genre.json'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="main">
            <Switch >
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/goods' render={() => <Goods gameList={gameList} genre={genre} />} />
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/:prodId' render={() => <GameProfile gameList={gameList} />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


