import React, { Component } from 'react';
import "./Products.scss";
import { Link } from "react-router-dom";

class Products extends Component {

    render() {
        // console.log(this.props);
        let arr = this.props.gameList;
        var card = arr.map((item, index) => {
            return (
                <Link key={index} className="link" to={`/${index + 1}`}>
                    <div className="card" >
                        <img className="card__img" src={item["title-img"]} alt="" />
                        <div className="card__name">{item.name}</div>
                        <div className="card__price">${item.price}</div>
                        <button className="card__btn">Bye</button>
                    </div>
                </Link>
            )
        })

        return (
            <main>
                <div className="container__card">
                    {card}
                </div>
            </main>
        )
    }
}

export default Products;
