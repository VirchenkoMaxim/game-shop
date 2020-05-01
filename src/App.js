import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './reset.css'
import './App.scss';
import './bg.jpg'

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About'
import GameProfile from './GameProfile/GameProfile';

import gameList from './json/gameList.json';
import genre from './json/genre.json';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Nav genre={genre} />
          <Switch >
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/products' render={() => <Products gameList={gameList} />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/:prodId' render={() => <GameProfile gameList={gameList} />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


