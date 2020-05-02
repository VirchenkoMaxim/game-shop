import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Products from './Products/Products'
import './Goods.scss'

export class Goods extends Component {
    render() {

        return (
            <div className="goods">
                <Nav genre={this.props} />
                <Products gameList={this.props} />
            </div>
        )
    }
}

export default Goods
