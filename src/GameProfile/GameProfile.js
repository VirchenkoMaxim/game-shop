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
                    <div className="area__head-avalible"><img src={avalibleIcon} alt="" />Is Avalible</div>
                )
            }
            else {
                return (
                    <div className="area__head-avalible"><img src={noAvalibleIcon} alt="" /><div>Not Avalible</div></div>
                )
            }
        }

        let id = this.props.match.params.prodId;
        let item = this.props.gameList[id - 1];
        return (
            <div className="profile">
                <div className="profile__area area">
                    <div className="area__head">
                        <div className="area__head-title">{item.name}</div>
                        {avaliable()}
                    </div>
                    <div className="area__about"></div>
                    <div className="area__price" >${item.price}</div>
                    <button className="area__btn">In garbage</button>
                </div>
                <div className="profile__slider"><SimpleImageSlider
                    style={{ margin: "0 auto" }}
                    width={800}
                    height={450}
                    images={item.img}
                /> </div>
                <div className="profile__info">
                    <span className="profile__info-title">Product Description</span>
                    <div className="profile__info-content">{item.about}</div>
                </div>

            </div>

        )
    }
}


export default withRouter(GameProfile);