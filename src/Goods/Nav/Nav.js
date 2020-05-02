import React, { Component } from 'react';

import "./Nav.scss";
import Range from './Slider'
import Genre from './Genre';




export default class Nav extends Component {
    render() {

        return (

            <nav className="navigation">
                <Range />
                <Genre genre={this.props} />
            </nav>
        )
    }
}
