
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;



function log(value) {
    console.log(value);
}

export default class CustomizedRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lowerBound: 20,
            upperBound: 80,
            value: [20, 80],
        };
    }

    onLowerBoundChange = (e) => {
        this.setState({ lowerBound: +e.target.value });
    }
    onUpperBoundChange = (e) => {
        this.setState({ upperBound: +e.target.value });
    }
    onSliderChange = (value) => {
        log(value);

        this.setState({
            value,
            lowerBound: value[0],
            upperBound: value[1],
        });
    }
    handleApply = () => {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    }
    render() {
        return (
            <div className='nav-block '>
                <h3 className=" nav-block__title ">Price:</h3>
                <div className="slide">
                    <div className="slide__items">
                        <input className='slide__item' type="text" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
                        <input className='slide__item' type="text" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
                        <button className="slide__btn" onClick={this.handleApply}>Ok</button>
                    </div>
                    <Range max={400} allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
                </div>
            </div>
        );
    }
} 