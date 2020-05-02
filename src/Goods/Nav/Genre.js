import React, { Component } from 'react';



export default class Genre extends Component {
    render() {
        // console.log(this.props.genre.genre.genre);
        let arr = this.props.genre.genre.genre;

        var card = arr.map((item) => {
            return (
                <div key={item.key} className="genre pretty p-default p-round">
                    <input type="checkbox" />
                    <div className="state p-success-o">
                        <label>{item.name}</label>
                    </div>
                </div>

            )
        })
        return (
            <div className="nav-block">
                <div className="nav-block__title">Genre:</div>
                {card}
            </div>


        )

    }
}
