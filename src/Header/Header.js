import React, { Component } from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from './logo.png'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <img className="container__logo" src={logo} alt="logo" />
                    <ul className="container__nav">
                        <li className="container__nav-item"><Link to="/">Главная</Link></li>
                        <li className="container__nav-item"><Link to="/products">Товар</Link></li>
                        <li className="container__nav-item"><Link to="/about">О нас</Link></li>
                        <li className="container__nav-item"><Link to="#">Отзывы</Link></li>
                        <li className="container__nav-item"><Link to="#">Акции</Link></li>
                    </ul>
                    <div className="container__find">
                        <input className="container__find-reseach" type="search" name="" id="" placeholder="Find.." />
                        <input className="container__find-btn" type="button" value="Find" />
                    </div>
                </div>
            </header>
        )
    }
}