import React, { Component } from 'react';
import "./GameProfile.scss";
import { withRouter } from 'react-router';
import SimpleImageSlider from "react-simple-image-slider";
import avalibleIcon from './avaliableIcon.png'
import noAvalibleIcon from './noAvaliableIcon.png'

class GameProfile extends Component {

    render() {
        let avaliable = () => {
            if (item.has) {
                return (
                    <div className="profile__head-avalible"><img src={avalibleIcon} alt="" />Is Avalible</div>
                )
            }
            else {
                return (
                    <div className="profile__head-avalible"><img src={noAvalibleIcon} alt="" />Not Avalible</div>
                )
            }
        }

        let id = this.props.match.params.prodId;
        let item = this.props.gameList[id - 1];
        return (
            <div className="profile">
                <div className="profile__head">
                    <div className="profile__head-title">{item.name}</div>
                    {avaliable()}
                </div>
                <div className="profile__slider"><SimpleImageSlider
                    style={{ margin: "0 auto" }}
                    width={800}
                    height={450}
                    images={item.img}
                />
                </div>
                <div className="profile__price" > {item.price}</div>
                <button className="profile__btn">In garbage</button>
                <div className="profile__info">
                    <div className="profile__info-title">Product Description</div>
                    <div className="profile__info-content">{item.about}</div>
                </div>
            </div>

        )
    }
}


export default withRouter(GameProfile);