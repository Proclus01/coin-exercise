import React, { Component } from 'react';
import Coin from './Coin.js';

class Tracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            face: 'none',
            headsCount: 0,
            tailsCount: 0,
            flipsCount: 0
        }
    }

    rng() {
        return Math.floor(Math.random() * 2);
    }

    returnFace() {
        const faces = ['heads', 'tails'];
        return faces[this.rng()];
    }

    flip() {
        const face = this.returnFace();
    }

    render() {
        return (
            <div>
                <Coin face={this.returnFace()} />
            </div>
        );
    }
}

export default Tracker;